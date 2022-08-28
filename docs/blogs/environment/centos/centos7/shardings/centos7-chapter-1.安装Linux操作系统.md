---
title: 在Centos7上搭建开发环境-1.安装Linux操作系统
description: 本章节涉及主要内容有：Linux重要目录介绍,Centos镜像下载,安装前Vmaware相关设置,安装时分区大小设置,安装myact1,搭建mycat2,搭建yum私服,1,2,3,4,5,搭建Zipkin,搭建Apollo配置中心,具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试，可直接复制运行即可。
headerDepth: 4
isOriginal: true
category:
  - 环境搭建
star: false
tag:
  - 安装linux操作系统
  - centos
date: 2020-01-05
head:
  - - meta
    - name: keywords
      content: 本章节涉及主要内容有：Linux重要目录介绍,Centos镜像下载,安装前Vmaware相关设置,安装时分区大小设置,安装myact1,搭建mycat2,搭建yum私服,1,2,3,4,5,搭建Zipkin,搭建Apollo配置中心,具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试，可直接复制运行即可。
---

# 1.安装Linux操作系统
@include(@src/public/enhance/guidance/environment/centos/centos7/chapter/centos7-guidance-chapter1.md)

## 1.3.Linux重要目录介绍 {#_1_3_}
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

## 1.4.Centos镜像下载 {#_1_4_}
	如果是学习环境，建议安装centos mini版镜像，生产环境可以安装完整版本

    下载地址
```
http://ftp.sjtu.edu.cn/centos/
```

## 1.3.安装前Vmaware相关设置 {#_1_3_}
	虚拟机联网设置
	导航栏->编辑->虚拟网络编辑器->VMnet8NAT模式->更改设置->VMnet8NAT模式
		->更改底部子网:192.168.0.0，子网掩码:255.255.255.0->NAT设置->网关IP:192.168.0.2

	Vmware网卡说明
	VMnet0：用于虚拟桥接网络下的虚拟交换机
	VMnet1：用于虚拟Host-Only网络下的虚拟交换机
	VMnet8：用于虚拟NAT网络下的虚拟交换机
	VMware NetworkAdepter VMnet1：Host用于与Host-Only虚拟网络进行通信的虚拟网卡
	VMware NetworkAdepter VMnet8：Host用于与NAT虚拟网络进行通信的虚拟网卡

## 1.4.安装时分区大小设置 {#_1_4_}
	/boot	/*存放系统启动引导文件，建议大小：512mb
	/swap 	/*交换区，建议大小：2g
	/*主分区，剩下的空间全部分给这个分区


<ScrollIntoPageView/>
