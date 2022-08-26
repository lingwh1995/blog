---
title: 在Centos7上搭建开发环境-6.搭建Minikube
description: 本章节涉及主要内容有：minikube介绍,版本说明,开启Vmware虚拟化,安装kubectl,安装minikube,使用阿里云加速docker hub,启动minikube(下面两种启动方式任选一种),安装dashboard,部署测试程序,minikube常用命令,具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试，可直接复制运行即可。
headerDepth: 4
isOriginal: true
category:
  - 环境搭建
star: false
tag:
  - minikube
  - docker
  - k8s网络插件
  - k8s可视化
date: 2020-01-28
head:
  - - meta
    - name: keywords
      content: 本章节涉及主要内容有：minikube介绍,版本说明,开启Vmware虚拟化,安装kubectl,安装minikube,使用阿里云加速docker hub,启动minikube(下面两种启动方式任选一种),安装dashboard,部署测试程序,minikube常用命令,具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试，可直接复制运行即可。
---

# 6.搭建Minikube
@include(@src/public/enhance/guidance/environment/centos/centos7/chapter/centos7-guidance-chapter6.md)
## 6.3.minikube介绍
	Minikube这个工具支持在虚拟机上运行一套单节点的k8s集群

## 6.4.版本说明
	minikube:1.2.6 kubectl:1.18.0

## 6.5.开启Vmware虚拟化
	查看是否支持虚拟化，开始安装前，先查看本地机器是否支持虚拟化，有输出就支持
```
grep -E --color 'vmx|svm' /proc/cpuinfo
```
	开启虚拟化
	Vmware Workstation ->Centos 64右键菜单 —> 设置-> 处理器 ->勾选 虚拟化IntelVT-x/EPT 或 ADM-V/RVI(V)

	设置处理器和内存
	设置处理器数量设置为大于等于2,内存大于等于2G

## 6.6.安装kubectl
	简介
	kubectl 是一个用来跟 K8S 集群进行交互的命令行工具

<a href="https://storage.googleapis.com/kubernetes-release/release/v1.18.0/bin/linux/amd64/kubectl" target="_blank">官方下载地址</a>
```
https://storage.googleapis.com/kubernetes-release/release/v1.18.0/bin/linux/amd64/kubectl
```

	创建存放kubectl安装包文件夹->进入该文件夹->下载kubectl->赋予可运行权限,并放入/usr/local/bin/目录下
```
mkdir -p /opt/software/package &&
cd /opt/software/package &&
curl -fL -u software-1660952069446:7cd40c9384cc107052a8e14acc0c01c15bfa5f41 \
"https://lingwh-generic.pkg.coding.net/coding-drive/software/kubectl?version=latest" \
-o kubectl &&
chmod +x ./kubectl && cp ./kubectl /usr/local/bin/kubectl
```

	查看kubectl版本
```
kubectl version --client
```

## 6.7.安装minikube
<a href="https://github.com/kubernetes/minikube/releases" target="_blank">官方网址</a>
```
https://github.com/kubernetes/minikube/releases
```
	创建存放minikube安装包文件夹->进入该文件夹->下载minikube->赋予运行权限并复制到/usr/local/bin/minikube
```
mkdir -p /opt/software/package &&
cd /opt/software/package &&
curl -fL -u software-1660950689210:1711c0580b6468ff8099f7987884c6f0c9ca2650 \
"https://lingwh-generic.pkg.coding.net/coding-drive/software/minikube-linux-amd64?version=latest" \
-o minikube-linux-amd64 &&
chmod +x ./minikube-linux-amd64 && cp ./minikube-linux-amd64 /usr/local/bin/minikube
```

	查看minikube版本
```
minikube version
```

## 6.8.使用阿里云加速docker hub
	登录阿里云docker相关页面
```
https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors
```
	登陆->左侧菜单选中镜像加速器->查看加速镜像地址
	我的加速地址是：https://ngviu28h.mirror.aliyuncs.com

## 6.9.启动minikube(下面两种启动方式任选一种)

### 6.9.1.使用docker作为虚拟化引擎(需要先安装Docker)
	注意事项
	启动minikube之前需要先启动docker，如无法启动加上--kubernetes-version=v具体版本号

	启动minikube
```
minikube start --driver=docker --force \
	--image-mirror-country='cn' \
	--image-repository='registry.cn-hangzhou.aliyuncs.com/google_containers' \
	--registry-mirror='https://ngviu28h.mirror.aliyuncs.com' \
	--kubernetes-version=v1.23.8
```

### 6.9.2.使用virtualbox作为虚拟化引擎(需要先安装Virtualbox)

<a href="https://www.virtualbox.org/wiki/Downloads" target="_blank">官方网站</a>
```
https://www.virtualbox.org/wiki/Downloads
```

	下载Centos7版VirtualBox
```
cd /opt/software/package &&
wget https://download.virtualbox.org/virtualbox/6.1.36/VirtualBox-6.1-6.1.36_152435_el7-1.x86_64.rpm
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
```
	使用virtualbox作为虚拟化引擎
```
minikube start --driver=virtualbox --force \
	--image-mirror-country='cn' \
	--image-repository='registry.cn-hangzhou.aliyuncs.com/google_containers' \
	--registry-mirror='https://ngviu28h.mirror.aliyuncs.com' \
	--kubernetes-version=v1.23.8
```

## 6.10.安装dashboard
	安装dashboard
```
minikube dashboard
```
	设置其他机器也可以访问dashboard
```
kubectl proxy --port=8001 --address='192.168.0.4' --accept-hosts='^.*' &
```
	开放访问端口
```
firewall-cmd --zone=public --add-port=8001/tcp --permanent &&
firewall-cmd --reload
```
	访问kubectl dashboard
```
http://192.168.0.4:8001/api/v1/namespaces/kubernetes-dashboard/services/http:kubernetes-dashboard:/proxy/
```

## 6.12.部署测试程序
	开始运行 guestbook
```
kubectl create deployment guestbook --image=ibmcom/guestbook:v1
```
	查询pod运行状态，状态应该显示为Running表示pod运行成功
```
kubectl get pods
```
	对外暴露端口
```
kubectl port-forward --address 0.0.0.0 pod/guestbook-5bccb95cd6-dk6zh 7080:3000
```
	开放访问端口
```
firewall-cmd --zone=public --add-port=7080/tcp --permanent &&
firewall-cmd --reload
```
	访问服务（主节点和两个工作节点都可访问到这个服务）
	http://192.168.0.4:7080


## 6.12.minikube常用命令
	查看minikube日志
```
minikube logs
```
	查看minikube状态
```
minikube status
```
	查看node
```
kubectl get nodes
```
	查看所有命名空间的pod
```
minikube kubectl -- get po -A
```
	查看所有命名空间的pod
```
kubectl get pods --all-namespaces
```
	停止集群
```
minikube stop
```
	清空集群
```
minikube delete --all
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

