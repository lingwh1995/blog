---
title: 基于Eureka搭建Springcloud微服务-1.安装Linux操作系统
description: 本章节涉及主要内容有：Linux重要目录介绍,Centos镜像下载,具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看，本章节内容中图片较少，主要以实用为主，所有代码均经过严格测试，可直接复制运行即可。
headerDepth: 4
isOriginal: true
category:
  - springcloud
star: false
tag:
  - 微服务入门
date: 2020-03-21
head:
  - - meta
    - name: keywords
      content: 本章节涉及主要内容有：Linux重要目录介绍,Centos镜像下载,具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看，本章节内容中图片较少，主要以实用为主，所有代码均经过严格测试，可直接复制运行即可。
---

# 1.安装Linux操作系统
@include(@src/public/enhance/guidance/backend/springcloud/springcloud-eureka/chapter/springcloud-eureka-guidance-chapter1.md)

## 1.3.Linux重要目录介绍
	/usr → C:/Windows/ /*系统级的目录
	/usr/lib → C:/Windows/System32
	/usr/local → C:/Progrem Files/ /*用户级的程序目录，用户自己编译的软件默认会安装到这个目录下
	/opt → D:/Software /*额外安装的可选应用程序包所放置的位置。一般情况下，我们可以把tomcat等都安装到这里。
	/usr/src /*系统级的源码目录，linux内核的源代码就放在/usr/src/linux里。
	/home 存放所有用户文件的根目录，是用户主目录的基点，比如用户user的主目录就是/home/user，可以用~user表示
	/root 超级用户（系统管理员）的主目录（特权阶级^o^）
	/mnt 系统管理员安装临时文件系统的安装点，系统提供这个目录是让用户临时挂载其他的文件系统。
	/boot 存放用于系统引导时使用的各种文件
	/tmp 用于存放各种临时文件，是公用的临时文件存储点。
	/var 存放临时文件，如各种服务的日志文件。

## 1.4.Centos镜像下载
	如果是学习环境，建议安装centos mini版镜像，生产环境可以安装完整版本

```
@include(project_springcloud-eureka/pom.xml)
```
