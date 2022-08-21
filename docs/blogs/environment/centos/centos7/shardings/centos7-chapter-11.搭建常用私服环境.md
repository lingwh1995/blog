---
title: 在Centos7上搭建开发环境-11.搭建常用私服环境
description: 本章节涉及主要内容有：搭建yum私服,1,2,3,4,5,具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看，本章节内容中图片较少，主要以实用为主，所有代码均经过严格测试，可直接复制运行即可。
headerDepth: 4
isOriginal: true
category:
  - 环境搭建
star: false
tag:
  - 私服搭建
date: 2020-03-08
head:
  - - meta
    - name: keywords
      content: 本章节涉及主要内容有：搭建yum私服,1,2,3,4,5,具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看，本章节内容中图片较少，主要以实用为主，所有代码均经过严格测试，可直接复制运行即可。
---

# 11.搭建常用私服环境
@include(@src/public/enhance/guidance/environment/centos/centos7/chapter/centos7-guidance-chapter11.md)
## 11.3.搭建yum私服
## 11.3.1.安装httpd
	配置阿里云源
	详细参考 2.Linux操作系统初始设置->2.5.配置yml源
	
	安装nginx或apache，此处以apache为例
```	
yum install httpd
```

	检测是否安装成功
```	
rpm -ql httpd
```
	或
```
curl http://127.0.0.1	
```	
	
	启动apache
```
/bin/systemctl start httpd.service
```	
	配置服务自启动 
```	
chkconfig httpd on
```	
	访问apache
```	
http://192.168.0.9
```	
	
	访问失败解决	
	如无法访问成功，可开放端口或关闭防火墙
	查询服务器的配置文件
```
find / -name httpd.conf
```		
	
	卸载httpd
```
yum -y remove httpd
```

## 11.3.2.安装yum相关工具
	安装createrepo 和 reposync
```		
yum -y install createrepo reposync
```

	安装 yum-utils
```
yum install yum-utils
```
	
	下载rpm包
```
reposync --repoid=base &&
reposync --repoid=updates &&
reposync --repoid=extras &&
reposync --repoid=epel
```

	创建存放包的目录
```
mkdir -p /var/www/html/base/ &&
mkdir -p /var/www/html/updates/ &&
mkdir -p /var/www/html/extras/ &&
mkdir -p /var/www/html/epel/
```

	生成包对应的源数据，对下载的各个目录，需要生成包的源数据，比如 base 目录源数据生成命令如下
```
createrepo --update /var/www/html/base/ &&
createrepo --update /var/www/html/updates/ &&
createrepo --update /var/www/html/extras/ &&
createrepo --update /var/www/html/epel/
```

## 11.3.3.配置切换使用的源为私服的源

```
cd /etc/yum.repos.d/ &&
cp CentOS-Base.repo CentOS-Base.bak.2022
```

修改阿里源为本地源
```
vi CentOS-Base.repo
```

	注释掉原有的配置，添加私服配置，参考如下：

	[base]
	name=CentOS-$releasever - Base - mirrors.aliyun.com
	failovermethod=priority
	baseurl=http://192.168.220.100/base/
	#baseurl=http://mirrors.aliyun.com/centos/$releasever/os/$basearch/
	#        http://mirrors.aliyuncs.com/centos/$releasever/os/$basearch/
	#mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=os
	gpgcheck=1
	gpgkey=http://mirrors.aliyun.com/centos/RPM-GPG-KEY-CentOS-6
	
	#released updates 
	[updates]
	name=CentOS-$releasever - Updates - mirrors.aliyun.com
	failovermethod=priority
	baseurl=http://192.168.220.100/updates/
	#baseurl=http://mirrors.aliyun.com/centos/$releasever/updates/$basearch/
	#        http://mirrors.aliyuncs.com/centos/$releasever/updates/$basearch/
	#mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=updates
	gpgcheck=1
	gpgkey=http://mirrors.aliyun.com/centos/RPM-GPG-KEY-CentOS-6
	
	#additional packages that may be useful
	[extras]
	name=CentOS-$releasever - Extras - mirrors.aliyun.com
	failovermethod=priority
	baseurl=http://192.168.220.100/extras/
	#baseurl=http://mirrors.aliyun.com/centos/$releasever/extras/$basearch/
	#        http://mirrors.aliyuncs.com/centos/$releasever/extras/$basearch/
	#mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=extras
	gpgcheck=1
	gpgkey=http://mirrors.aliyun.com/centos/RPM-GPG-KEY-CentOS-6

## 11.3.4.重新生成测试机yum缓存配置

	在测试机器上，先清理已有缓存，再重新生成 yum 源缓存配置，将软件包信息缓存本机，提高搜索安装效率。
```
yum clean all &&
yum makecache
```

## 11.3.5.使用yum私服来下载软件
	在测试机上使用yum install xxx来安装包
