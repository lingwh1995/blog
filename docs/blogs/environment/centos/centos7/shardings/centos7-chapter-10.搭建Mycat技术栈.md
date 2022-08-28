---
title: 在Centos7上搭建开发环境-10.搭建Mycat技术栈
description: 本章节涉及主要内容有：安装myact1,搭建mycat2,具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试，可直接复制运行即可。
headerDepth: 4
isOriginal: true
category:
  - 环境搭建
star: false
tag:
  - Mycat
date: 2020-03-05
head:
  - - meta
    - name: keywords
      content: 本章节涉及主要内容有：安装myact1,搭建mycat2,具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试，可直接复制运行即可。
---

# 10.搭建Mycat技术栈
@include(@src/public/enhance/guidance/environment/centos/centos7/chapter/centos7-guidance-chapter10.md)

## 10.3.安装myact1.6 {#_10-3-anchor}
### 10.3.1.服务器环境说明 {#_10-3-1-anchor}
	192.168.0.6 mycat1.6
	192.168.0.7 mysql
	192.168.0.8 mysql

### 10.3.2.搭建JDK {#_10-3-2-anchor}
	详细参考 3.搭建基础开发环境->3.1.安装jdk

### 10.3.3.搭建myact1.6 {#_10-3-3-anchor}
<a href="http://www.mycat.org.cn/" target="_blank">官方网址</a>
```
http://www.mycat.org.cn/
```

	下载mycat1.6
```
wget http://dl.mycat.org.cn/1.6.7.3/20190828135747/Mycat-server-1.6.7.3-release-20190828135747-linux.tar.gz
```
	上传到 /opt/software/package

	解压到/user/local/bin
```
tar -zxvf Mycat-server-1.6.7.3-release-20190828135747-linux.tar.gz -C /usr/local/bin	
```

	删除mycat中低版本的mysql连接包（如使用低版本数据可以不删除）
```
rm -rf /usr/local/bin/mycat/lib/mysql-connector-java-5.1.35.jar
```	
	
	替换低版本的mysql连接包为高版本的mysql连接包
	上传适用于mysql8.0.29的连接包到/opt/software/package，并复制一份到mycat的指定文件夹中				
```	
chomd 777 mysql-connector-java-8.0.29.jar &&
cp mysql-connector-java-8.0.29.jar /usr/local/bin/mycat/lib/	
```
		
### 10.3.4.在各个节点上安装mysql {#_10-3-4-anchor}
	在节点1安装mysql8.0.29(192.168.0.7)
	详细参考 3.搭建基础开发环境->3.3.安装mysql

	在节点2安装mysql8.0.29(192.168.0.8)	
	详细参考 3.搭建基础开发环境->3.3.安装mysql

### 10.3.5.配置mycat {#_10-3-5-anchor}
	notepad++安装插件
	notepad++安装nppftp这个插件，连接到远程服务器之后自动可以编辑远程服务器的文本文件
	
### 10.3.6.启动和关闭mycat，默认端口8066 {#_10-3-6-anchor}
	进入mycat安装目录
```	
cd /usr/local/bin/mycat
```	
	
	启动mycat
```
/bin/mycat start
```	
	
	关闭mycat
```
/bin/mycat stop
```
	
	查看mycat日志
```
tail -f logs/wrapper.log 
```	
	
	查看mycat状态
```	
bin/mycat status
```
	
	前台启动mycat	
```
bin/mycat console #前台启动
```

## 10.4.搭建mycat2 {#_10-4-anchor}
### 10.4.1.服务器环境说明 {#_10-4-1-anchor}
	注意事项
	mycat2需要一个数据库来存放默认mycat2自身运行所需的数据

	192.168.0.6 mycat2:jdk+mycat+mysql(需要在192.168.0.6上多安装一个mysql)
	192.168.0.7 mysql
	192.168.0.8 mysql

### 10.4.2.搭建JDK {#_10-4-2-anchor}
	详细参考 3.搭建基础开发环境->3.1.安装jdk

### 10.4.3.安装mycat2自身运行需要的mysql8(192.168.0.6) {#_10-4-3-anchor}
	创建用户mycat（注意：不能使用root用户，必须创建mycat这个用户）
```
CREATE USER 'mycat'@'%' IDENTIFIED BY 'Mysql123456_';
```
	
	赋予权限
```	
GRANT XA_RECOVER_ADMIN ON *.* TO 'root'@'%';
```	
	
	赋予权限
```	
GRANT ALL PRIVILEGES ON *.* TO 'mycat'@'%' ;
```	
	
	刷新配置
```
flush privileges;
```

### 10.4.3.组装mycat2完整程序包 {#_10-4-3-anchor}
	
	下载mycat2外壳
```
wget http://dl.mycat.org.cn/2.0/install-template/mycat2-install-template-1.20.zip		 
```
	
	下载mycat2核心jar
```
wget http://dl.mycat.org.cn/2.0/1.22-release/mycat2-1.20-jar-with-dependencies.jar
```	
	
	组装mycat2并上传一份到/opt/software/package中	
	解压zip包，把jar包放入mycat2-install-template-1.20.zip/mycat/lib中
	
	修改/opt/software/package/mycat2-install-template-1.20/mycat/lib中下面文件的权限	
```	
cd /opt/software/install/mycat/lib &&
chmod 777 libwrapper-linux-ppc-64.so &&
chmod 777 libwrapper-linux-x86-32.so &&
chmod 777 libwrapper-linux-x86-64.so &&
chmod 777 wrapper.jar
```

	修改/opt/software/package/mycat2-install-template-1.20/mycat/bin中下面文件的权限
```	
cd /opt/software/install/mycat/bin &&
chmod +x wrapper-linux-x86-64 &&
chmod +x wrapper-linux-x86-32 &&
chmod +x wrapper &&
chmod +x mycat
```

	替换低版本的mysql连接包为高版本的mysql连接包
	上传适用于mysql8.0.29的连接包到/opt/software/package，修改权限并复制一份到mycat的指定文件夹中	
	
	修改默认原型库的数据库连接信息
```
cd /opt/software/package/mycat2-install-template-1.20/mycat/conf/datasource
```
```
vim prototypeDs.datasource.json
```
	修改下面三个字段的值
	"password":"Mysql123456_",
	"url":"jdbc:mysql://192.168.0.6:3306/mycat_prototy?useUnicode=true&serverTimezone=Asia/Shanghai&characterEncoding=UTF-8",
	"user":"root"

### 10.4.4.在各个节点上安装mysql {#_10-4-4-anchor}
	在节点1安装mysql8.0.29(192.168.0.7)
	详细参考 3.搭建基础开发环境->3.3.安装mysql

	在节点2安装mysql8.0.29(192.168.0.8)	
	详细参考 3.搭建基础开发环境->3.3.安装mysql

### 10.4.5.配置mycat {#_10-4-5-anchor}
	notepad++安装插件
	notepad++安装nppftp这个插件，连接到远程服务器之后自动可以编辑远程服务器的文本文件
	
### 10.4.6.启动和关闭mycat，默认端口8066 {#_10-4-6-anchor}
	进入mycat安装目录
```	
cd /usr/local/bin/mycat
```	
	
	启动mycat
```
/bin/mycat start
```	
	
	关闭mycat
```
/bin/mycat stop
```

	查看mycat日志
```
tail -f logs/wrapper.log 
```	
	
	查看mycat状态
```
bin/mycat status
```
	
	前台启动mycat	
```
bin/mycat console #前台启动
```


<ScrollIntoPageView/>
