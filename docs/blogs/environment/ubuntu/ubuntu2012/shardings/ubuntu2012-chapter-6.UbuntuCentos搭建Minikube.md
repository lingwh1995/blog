---
title: 在Ubuntu2012上搭建开发环境-6.UbuntuCentos搭建Minikube
description: 本章节涉及主要内容有：minikube介绍,版本说明,开启Vmware虚拟化,安装kubectl	,安装minikube,使用阿里云加速docker hub,启动minikube,minikube常用命令	,具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看，本章节内容中图片较少，主要以实用为主，所有代码均经过严格测试，可直接复制运行即可。
headerDepth: 4
isOriginal: true
category:
  - 环境搭建
star: false
copyright: false
tag:
  - minikube
  - docker
  - k8s网络插件
  - k8s可视化
date: 2020-01-28
head:
  - - meta
    - name: keywords
      content: 本章节涉及主要内容有：minikube介绍,版本说明,开启Vmware虚拟化,安装kubectl	,安装minikube,使用阿里云加速docker hub,启动minikube,minikube常用命令	,具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看，本章节内容中图片较少，主要以实用为主，所有代码均经过严格测试，可直接复制运行即可。
---

# 6.UbuntuCentos搭建Minikube
@include(@src/public/enhance/guidance/environment/ubuntu/ubuntu2012/chapter/ubuntu2012-guidance-chapter6.md)
## 6.3.minikube介绍
	Minikube这个工具支持在虚拟机上运行一套单节点的k8s集群

## 6.4.版本说明
	minikube:1.2.6 kubectl client:1.18.0

## 6.5.开启Vmware虚拟化
	查看是否支持虚拟化，开始安装前，先查看本地机器是否支持虚拟化，有输出就支持
```
grep -E --color 'vmx|svm' /proc/cpuinfo
```	
	开启虚拟化
	Vmware Workstation ->Centos 64右键菜单 —> 设置 
		-> 处理器 ->勾选 虚拟化IntelVT-x/EPT 或 ADM-V/RVI(V)
	
	设置处理器数量设置为大于等于2,内存大于等于2G

## 6.6.安装kubectl	
	简介
	kubectl 是一个用来跟 K8S 集群进行交互的命令行工具
		
	下载kubectl，上传到/opt/software/package，赋予可运行权限,并放入/usr/local/bin/目录下
```	
chmod +x ./kubectl && cp ./kubectl /usr/local/bin/kubectl
```	
	查看kubectl版本
```	
kubectl version --client
```

## 6.7.安装minikube
	下载minikube
	到 https://github.com/kubernetes/minikube/releases 找到minikube-linux-amd64并下载
	
	上传到/opt/software/package
	
	赋予运行权限并复制到/usr/local/bin/minikube
```
chmod +x ./minikube-linux-amd64 && cp ./minikube-linux-amd64 /usr/local/bin/minikube
```

## 6.8.使用阿里云加速docker hub
	登录阿里云docker相关页面
	访问：https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors
	登陆->左侧菜单选中镜像加速器->查看加速镜像地址 https://ngviu28h.mirror.aliyuncs.com

## 6.9.启动minikube
	注意事项
	启动minikube之前需要先启动docker，如无法启动加上--kubernetes-version=v具体版本号
	
	使用docker作为虚拟化引擎(需要先安装Docker)
```
minikube start --driver=docker --force \
	--image-mirror-country='cn' \
	--image-repository='registry.cn-hangzhou.aliyuncs.com/google_containers' \
	--registry-mirror='https://ngviu28h.mirror.aliyuncs.com' \
	--kubernetes-version=v1.23.8
```		
	使用virtualbox作为虚拟化引擎(需要先安装Virtualbox)
	
	下载Centos7版VirtualBox
	访问：https://www.virtualbox.org/wiki/Downloads，选择AMD64版本下载
	上传到/opt/software/package中
```	
VirtualBox-6.1-6.1.34_150636_el7-2.x86_64.rpm
```	
	安装问题解决(virtualbox内核无法编译)
```
sudo yum install gcc kernel kernel-devel -y
```	
	重启机器
```	
systemctl reboot
```
	安装VirtualBox
```	
yum install VirtualBox-6.1-6.1.34_150636_el7-2.x86_64.rpm -y
```		
	补充内容：Centos版VirtualBox操作命令						
	VBoxManage list runningvms //查看机器列表
	VBoxHeadless -startvm "虚拟机名" //启动虚拟机
	测试VirtualBox是否安装成功
```	
virtualbox
rcvboxdrv setup
```							
	使用virtualbox作为虚拟化引擎
```	
minikube start --driver=virtualbox --force \
	--image-mirror-country='cn' \
	--image-repository='registry.cn-hangzhou.aliyuncs.com/google_containers' \
	--registry-mirror='https://ngviu28h.mirror.aliyuncs.com' \
	--kubernetes-version=v1.23.8
```

## 6.10.minikube常用命令	
	查看minikube日志
```	
minikube logs
```	
	查看minikube状态
```	
minikube status								
```	
	查看节点				
```	
minikube kubectl -- get po -A
```	
	停止集群
```	
minikube stop
```	
	清空集群
```	
minikube delete --all
```	
	安装集群可视化 Web UI 控制台
```	
minikube dashboard
```	
	卸载minikube
	停止运行
```	
minikube stop
```
	执行卸载命令
```	
minikube delete
```
	删除 ~/.minikube 目录缓存的文件
```	
rm -rf ~/.minikube	
```

