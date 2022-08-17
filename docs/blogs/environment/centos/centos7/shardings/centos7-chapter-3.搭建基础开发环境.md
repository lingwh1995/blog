---
title: 在Centos7上搭建开发环境-3.搭建基础开发环境
description: 本章节涉及主要内容有：安装jdk,安装maven,安装mysql,具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看，本章节内容中图片较少，主要以实用为主，所有代码均经过严格测试，可直接复制运行即可。
headerDepth: 4
isOriginal: true
category:
  - 环境搭建
star: false
tag:
  - jdk
  - maven
  - mysql
date: 2020-01-15
head:
  - - meta
    - name: keywords
      content: 本章节涉及主要内容有：安装jdk,安装maven,安装mysql,具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看，本章节内容中图片较少，主要以实用为主，所有代码均经过严格测试，可直接复制运行即可。
---

# 3.搭建基础开发环境
@include(@src/public/enhance/guidance/environment/centos/centos7/chapter/centos7-guidance-chapter3.md)

## 3.3.安装jdk
	查看当前安装的java版本

```
yum list installed | grep java
```
	卸载旧版本jdk
```
yum -y remove xxx
```
	创建存放安装包的目录->切换到该目录->在该目录中下载jdk
```
mkdir -p /opt/software/package &&
cd /opt/software/package &&
curl -fL -u software-1659088335906:c2e556a8a52386cbe0c6361ee3a7d8a21d3c9ca0 \
"https://lingwh-generic.pkg.coding.net/coding-drive/software/jdk-8u181-linux-x64.tar.gz?\
version=latest" -o jdk-8u181-linux-x64.tar.gz
```
	解压jdk后赋予权限并放入指定目录
```
tar -zxvf jdk-8u181-linux-x64.tar.gz &&
chmod +x jdk1.8.0_181
mv jdk1.8.0_181 /usr/local/bin/jdk1.8.0_181
```
	配置环境变量
```
vim /etc/profile
```
	添加如下内容
```
export JAVA_HOME=/usr/local/bin/jdk1.8.0_181
export JRE_HOME=${JAVA_HOME}/jre
export CLASSPATH=.:${JAVA_HOME}/lib:${JRE_HOME}/lib
export PATH=${JAVA_HOME}/bin:$PATH
```
	刷新环境变量文件
```
source /etc/profile
```
	查看java版本
```
java -version
```

## 3.4.安装maven
	注意
	maven linux版和windows版并不通用

	创建存放安装包的目录->并切换到该目录->在该目录中下载maven
```
mkdir -p /opt/software/package &&
cd /opt/software/package &&
curl -fL -u software-1659088796431:ba211676fbe4a719c3b40b22083cd70388d41acc \
"https://lingwh-generic.pkg.coding.net/coding-drive/software/apache-maven-3.8.6-bin.tar.gz\
?version=latest" -o apache-maven-3.8.6-bin.tar.gz
```
	解压到/usr/local/bin/目录下
```
tar -zxvf apache-maven-3.8.6-bin.tar.gz -C /usr/local/bin
```
	配置环境变量
```
vim  /etc/profile
```
	添加如下内容
	注意事项
	不要修改原来的path，直接在下面添加新的PATH配置，使用$PATH引用上面的PATH
```
export M2_HOME=/usr/local/bin/apache-maven-3.8.6
export PATH=$PATH:$M2_HOME/bin
```
	刷新配置文件
```
source /etc/profile
```
	查看maven版本
```
mvn -v
```
	修改maven的settings.xml，仓库源<mirrors></mirrors>中添加如下信息:
```
vim /usr/local/bin/apache-maven-3.8.6/conf/settings.xml
```
```
<mirror>
	<id>alimaven</id>
	<name>aliyun maven</name>
	<url>http://maven.aliyun.com/nexus/content/groups/public/</url>
	<mirrorOf>central</mirrorOf>
</mirror>
<mirror>
	<id>repo2</id>
	<name>Mirror from Maven Repo2</name>
	<url>http://repo2.maven.org/maven2/</url>
	<mirrorOf>central</mirrorOf>
</mirror>
```

## 3.5.安装mysql
<!--
	参考网站
	安装mysql
	https://blog.csdn.net/qq_38127559/article/details/121659232
	修改yum源
	https://blog.csdn.net/weixin_45836543/article/details/124906071
	官网下载mysql
	https://blog.csdn.net/xhmico/article/details/125197747
-->

	安装建议
	使用mysql官方yum源在线安装(不要使用rpm方式安装，非常难以安装成功)

	查看当前安装的mysql版本
```
yum list installed | grep mysql
```
	或
```
rpm -qa | grep mysql
```
	卸载旧版本mysql
```
yum -y remove xxx
```
	Centos终端获取yum源安装包：
```
cd /opt/software/package &&
wget https://dev.mysql.com/get/mysql80-community-release-el7-3.noarch.rpm
```
	安装mysql的yum源：（二选一）
```
rpm -Uvh mysql80-community-release-el7-3.noarch.rpm
```
```
rpm -ivh mysql80-community-release-el7-3.noarch.rpm
```
	查看刚才下载的mysql安装源，可以看到新增的两个mysql源
```	
ls /etc/yum.repos.d
```
	[root@localhost package]# ls /etc/yum.repos.d
	CentOS-Base.repo      CentOS-Debuginfo.repo  CentOS-Vault.repo          mysql-community-source.repo
	CentOS-Base.repo.bak  CentOS-Media.repo      CentOS-fasttrack.repo      mysql-community.repo
	CentOS-CR.repo        CentOS-Sources.repo    CentOS-x86_64-kernel.repo

	修改源中的配置，将所有的gpgkey的值修改为https://repo.mysql.com/RPM-GPG-KEY-mysql-2022
```
sed -i 's#file:///etc/pki/rpm-gpg/RPM-GPG-KEY-mysql#https://repo.mysql.com/\
RPM-GPG-KEY-mysql-2022#g' /etc/yum.repos.d/mysql-community.repo
```
	使用yum在线安装mysql
```
yum -y install mysql-community-server
```
	启动mysql-server
```
systemctl start mysqld.service &&
systemctl enable mysqld.service
```
	查看mysql-server启动状态：
```
systemctl status mysqld
```
	初始化mysql
```
mysqld --initialize
```
	查看mysql8登录密码
```
cat /var/log/mysqld.log | grep 'temporary password'
```
	看到如下内容：
	2022-07-18T18:31:57.277661Z 6 [Note] [MY-010454] [Server]
		A temporary password is generated for root@localhost: %)4(26e++jaK

登录mysql
```
mysql -uroot -p'%)4(26e++jaK'
```
	修改mysql初始密码，规则大小写字母、数字、特殊符号，最少8位
```
ALTER USER USER() IDENTIFIED BY 'Mysql123456_';
FLUSH PRIVILEGES;
```
	扩展或者添加远程用户权限:
```
use mysql;
update user set host='%' where user='root';
flush privileges;
```

