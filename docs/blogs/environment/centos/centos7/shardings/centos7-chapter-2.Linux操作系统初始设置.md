---
title: 在Centos7上搭建开发环境-2.Linux操作系统初始设置
description: 本章节涉及主要内容有：配置静态IP地址,解决远程连接无法连接的问题,设置系统环境变量,安装curl,配置yml源,安装常用基础系统软件,具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试，可直接复制运行即可。
headerDepth: 4
isOriginal: true
category:
  - 环境搭建
star: false
tag:
  - yaml源
  - 设置环境变量
date: 2020-01-08
head:
  - - meta
    - name: keywords
      content: 本章节涉及主要内容有：配置静态IP地址,解决远程连接无法连接的问题,设置系统环境变量,安装curl,配置yml源,安装常用基础系统软件,具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试，可直接复制运行即可。
---

# 2.Linux操作系统初始设置
@include(@src/public/enhance/guidance/environment/centos/centos7/chapter/centos7-guidance-chapter2.md)

## 2.3.配置静态IP地址

	修改网络配置
```
vi /etc/sysconfig/network-scripts/ifcfg-ens32(最后一个为网卡名称)
```
	修改后内容如下
	bootproto=static
	onboot=yes
	#在最后加上几行，IP地址、子网掩码、网关、dns服务器，注意：和网关IP处于同一个网段
	IPADDR=192.168.0.4
	NETMASK=255.255.255.0
	#和上面网关IP保持 一致
	GATEWAY=192.168.0.2
	DNS1=8.8.8.8
	DNS2=8.8.4.4

	重启网络
```
systemctl restart network
```

## 2.4.解决远程连接无法连接的问题
	修改sshd配置文件
	说明：sshd_config里面的UseDNS=no【原本为yes】
```
vim /etc/ssh/sshd_config
```
	重启ssh服务
```
systemctl restart sshd.service
```

## 2.5.设置系统环境变量
```
echo "export LC_ALL=en_US.UTF-8"  >>  /etc/profile &&
source /etc/profile
```

## 2.6.安装curl
	后面的操作需要curl，所以首先安装curl
```
yum -y install curl
```

## 2.7.配置yml源
	下载阿里源，并上传到/opt/software/package
```
curl http://mirrors.aliyun.com/repo/Centos-7.repo -o Centos-7.repo
```
	进入/etc/yum.repos.d目录中，备份CentOS-Base.repo
```
cd /etc/yum.repos.d && cp CentOS-Base.repo CentOS-Base.repo.bak
```
	复制/opt/software/package/Centos-7.repo到当前目录并重命名为CentOS-Base.repo
```
cp /opt/software/package/Centos-7.repo /CentOS-Base.repo
```
	生成yum源缓存并更新yum源
```
yum makecache && yum update
```

## 2.8.安装常用基础系统软件
### 2.8.1.手动安装常用基础软件
	安装vim
```
yum -y install vim*
```
	配置vim
	set nu         # 设置显示行号
	set showmode   #设置在命令行界面最下面显示当前模式等
	set ruler      #在右下角显示光标所在的行数等信息
	set autoindent #设置每次单击Enter键后，光标移动到下一行时与上一行的起始字符对齐
	syntax on      #即设置语法检测，当编辑C或者Shell脚本时，关键字会用特殊颜色显示		

	wget
```
yum -y install wget
```
	telnet
```
yum -y install telnet
yum -y install telnet-server
```

### 2.8.2.使用脚本安装常用软件
	脚本介绍
	这个脚本中包含了centos设置yum源并且安装了一些的常用软件，如vim、git、wget、curl、等，会定时更新

	安装curl
```
yum -y install curl
```

	下载脚本
```
curl https://gitee.com/lingwh1995/config-center/raw/master/centos/centos7/centos7-init.sh -o centos7-init.sh
```

	赋予可运行权限并运行该脚本
```
chmod +x centos7-init.sh &&
./centos7-init.sh
```
