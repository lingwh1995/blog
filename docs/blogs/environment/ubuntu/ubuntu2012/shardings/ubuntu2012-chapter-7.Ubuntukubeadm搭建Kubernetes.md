---
title: 在Ubuntu2012上搭建开发环境-7.Ubuntukubeadm搭建Kubernetes
description: 本章节涉及主要内容有：$CHAPTER_CONTENT_INTRO具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看，本章节内容中图片较少，主要以实用为主，所有代码均经过严格测试，可直接复制运行即可。
headerDepth: 4
isOriginal: true
category:
  - 环境搭建
star: false
copyright: false
tag:
  - kubeadm搭建k8s集群
  - docker
  - k8s网络插件
  - k8s可视化
  - etcd集群
  - kube-apiserver
  - kube-controller-manager
  - kube-scheduler
  - kubectl
  - nginx
  - keepalive
  - 高可用
date: 2020-02-15
---

# 7.Ubuntukubeadm搭建Kubernetes
@include(@src/public/enhance/guidance/environment/ubuntu/ubuntu2012/chapter/ubuntu2012-guidance-chapter7.md)

## 7.3.特别说明
	使用kubeadm搭建Kubernetes

## 7.4.所有节点设置对应主机名
	master节点
	hostnamectl set-hostname master
	slave1节点
	hostnamectl set-hostname slave1
	slave2节点	
	hostnamectl set-hostname slave2

## 7.5.所有节点修改hosts
	vim /etc/hosts
	192.168.0.6 master
	192.168.0.7 slave1
	192.168.0.8 slave2

## 7.6.所有节点关闭SELinux
	暂时关闭
```	
setenforce 0
```
	永久关闭
```
sed -i --follow-symlinks 's/SELINUX=enforcing/SELINUX=disabled/g' \
/etc/sysconfig/selinux
```
## 7.7.所有节点关闭防火墙
```
systemctl stop firewalld &&
systemctl disable firewalld
```
## 7.8.所有节点安装docker
	安装docker
	详细参考4.1>.安装docker
	
	修改docker配置
	vim /etc/docker/daemon.json，并添加如下内容：
	#kubernetes官方推荐 docker等使用systemd作为cgroupdriver，否则 kubelet 启动不了
	"exec-opts": ["native.cgroupdriver=systemd"]"
	
	重新载入docker配置并重启docker
	systemctl daemon-reload && systemctl restart docker

## 7.9.所有节点安装k8s所需组件
	添加k8s安装源
```	
cat <<EOF > kubernetes.repo
[kubernetes]
name=Kubernetes
baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64
enabled=1
gpgcheck=0
repo_gpgcheck=0
gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg 
https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
EOF
```	
	使用k8s安装源
```	
mv kubernetes.repo /etc/yum.repos.d/
```				
	安装所需组件
```	
yum install -y kubelet-1.22.4 kubectl-1.22.4 kubeadm-1.22.4
```	
	查看各组件版本
```	
kubelet --version
```
```
kubectl	--version
```
```
kubeadm --version
```

## 7.10.所有节点启动kubelet和docker
```
systemctl enable kubelet && 
systemctl start kubelet &&
systemctl enable docker &&
systemctl start docker
```
## 7.11.所有关闭swap
	临时关闭swap分区
```	
swapoff /mnt/swap
```
	永久关闭swap分区
```	
sed -ri 's/.*swap.*/#&/' /etc/fstab && systemctl reboot
```
	查看swap分区是否关闭	
```	
free -m
```

## 7.12.用kubeadm 初始化集群
	特别注意
	只在Master节点操作
	
	初始化集群控制台 Control plane，失败了可以用 kubeadm reset 重置
	
	初始化集群命令
```	
kubeadm init \
	--apiserver-advertise-address=192.168.0.6 \
	--image-repository registry.aliyuncs.com/google_containers \
	--kubernetes-version v1.22.4 \
	--service-cidr=10.96.0.0/12 \
	--pod-network-cidr=10.244.0.0/16 \
	--ignore-preflight-errors=all
```	  
	命令说明：	
	这个参数就是master主机的IP地址，例如我的Master主机的IP是：192.168.181.131	
	--apiserver-advertise-address=192.168.181.131    
	这个是镜像地址，由于国外地址无法访问，故使用的阿里云仓库地址：		
	registry.aliyuncs.com/google_containers
	--image-repository=registry.aliyuncs.com/google_containers
	这个参数是下载的k8s软件版本号，可使用kubeadm config images list查询
	--kubernetes-version=v1.17.4   
	这个参数后的IP地址直接就套用10.96.0.0/12 ,以后安装时也套用即可，不要更改
	--service-cidr=10.96.0.0/12
	k8s内部的pod节点之间网络可以使用的IP段，不能和service-cidr写一样，如果不知道怎么配，就先
		用这个10.244.0.0/16
	--pod-network-cidr=10.244.0.0/16
	
	启动成功后控制台输出其他节点加入主节点的秘钥:每次执行 kubeadm init后这个秘钥会发生变化
	如：kubeadm join 192.168.0.6:6443 \
		--token e60qrb.6321jolakk1aix90 \
		--discovery-token-ca-cert-hash \
		sha256:02829b33a24eef53805ffedef79c0371cb4d9ac0d04bfad7fe26eb022cb638ac
	注意
	可以保存秘钥，方便在其他节点上使用 
	重新获取kubeadm join...
	kubeadm token create --print-join-command	
						
	复制授权文件，以便 kubectl 可以有权限访问集群
	如果其他节点需要访问集群，需要从主节点复制这个文件过去其他节点
	mkdir -p $HOME/.kube
	cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
	chown $(id -u):$(id -g) $HOME/.kube/config

## 7.13.其他节点连接到Master节点
	在两个上Slave节点输入第9>>.步骤在主节点上获取的秘钥
	如：kubeadm join 192.168.0.6:6443 \
		--token e60qrb.6321jolakk1aix90 \
		--discovery-token-ca-cert-hash \
		sha256:02829b33a24eef53805ffedef79c0371cb4d9ac0d04bfad7fe26eb022cb638ac
		
	加入成功后看到:
		This node has joined the cluster

## 7.14.在master节点上查看集群
	mater节点和两个slave节点STATUS是NOTReady
```	
kubectl get nodes
```
	[root@master ~]# kubectl get nodes
	NAME     STATUS     ROLES                  AGE     VERSION
	master   NotReady      control-plane,master   9m32s   v1.22.4
	slave1   NotReady   <none>                 5m51s   v1.22.4
	slave2   NotReady      <none>                 2m31s   v1.22.4

## 7.15.安装网络插件
```
kubectl apply -f \
	https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml
```
## 7.16.在master上查看集群节点			
	再次执行命令查看集群命令，mater节点STATUS是Ready，两个slave节点STATUS是都是Ready
```	
kubectl get nodes
```
	[root@master ~]# kubectl get nodes
	NAME     STATUS     ROLES                  AGE     VERSION
	master   Ready      control-plane,master   9m32s   v1.22.4
	slave1   Ready   <none>                 5m51s   v1.22.4
	slave2   Ready      <none>                 2m31s   v1.22.4	
	注意事项
	如果两个从节点中有一个节点状态是NotReady，另一个节点状态是Ready，不要着急，要多等一会儿
	再使用命令kubectl get nodes查看集群节点，就可以看到所有节点都是Ready

## 7.17.启动故障解决
	查看所有命名空间的所有的pod
```	
kubectl get pods -o wide --all-namespaces
```
	查看启动失败的pod的日志，其中PODNAME为启动失败的pod的name
```
kubectl -n kube-system logs PODNAME
```	
	重置kubeadm
	可使用kubeadm reset命令重启kubeadm，再从第9>>.步骤开始重新执行

## 7.18.基础命令
	查看kubeadm需要的组件的版本
```	
kubeadm config images list
```
	查看所有节点
```	
kubectl get nodes
```
	查看pod
```	
kubectl get pod
```
	查看所有命名空间的所有pod
```	
kubectl get pods -o wide --all-namespaces
```
	查看pod日志
```	
kubectl describe pod
```

## 7.19.部署第一个程序到k8s中
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
kubectl expose deployment guestbook --type=NodePort --port=3000
```	
	查询端口映射	
```	
kubectl get service guestbook
```
	NAME        TYPE       CLUSTER-IP     EXTERNAL-IP   PORT(S)          AGE
	guestbook   NodePort   10.10.10.253   <none>        3000:31208/TCP   1m
	
	访问服务（主节点和两个工作节点都可访问到这个服务）
	http://192.168.0.6:31208
	http://192.168.0.7:31208
	http://192.168.0.8:31208

## 7.20.可视化面板kuboard
	安装
```	
kubectl apply -f https://addons.kuboard.cn/kuboard/kuboard-v3.yaml
```	
	查看是否安装成功，所有节点状态都是Ready表示安装成功
```	
kubectl get pods -n kuboard
```	
	登录kuboard-v3
```	
http://192.168.0.6:30080	
```
	用户名/密码： admin/Kuboard123
	
	查看kuboard所有相关的pod是否成功运行,状态为RUNNING代表成功运行
```	
watch kubectl get pods -n kuboard
```	
	查看启动日志
	获取kuboard命名空间中相关pod的name
```	
watch kubectl get pods -n kuboard
```
	根据pod名称查看pod日志
```	
kubectl logs -n kuboard kuboard-v3-5fc46b5557-jlsrj
```		
	启动故障排查
	查看docker中部署的kuboard相关容器是否都成功启动了，如果相关容器没有重新启动，可重启一下docker
```	
docker ps
```
	特别注意
	这个kuboard部分pod启动（就绪）的可能很慢，需要耐心等待，等待一定时间后再使用命令查看是否都启动成功了
```
watch kubectl get pods -n kuboard
```	
	卸载kuboard-v3
	执行卸载命令
```	
	kubectl delete -f https://addons.kuboard.cn/kuboard/kuboard-v3.yaml
```	
	清理遗留数据
```	
rm -rf /usr/share/kuboard
```

