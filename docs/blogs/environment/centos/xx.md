# 此页面会在文章列表置顶
# 1.安装Linux操作系统
## 1.2.Linux重要目录介绍
## 1.3.Centos镜像下载
## 1.4.安装前Vmaware相关设置
## 1.4.安装时分区大小设置
# 2.Linux操作系统初始设置
## 2.2.配置静态IP地址
## 2.3.解决远程连接无法连接的问题
## 2.4.设置系统环境变量
## 2.5.安装curl
## 2.6.配置yml源
## 2.7.安装常用基础系统软件
### 2.7.1.手动安装常用软件
### 2.7.2.使用脚本安装常用软件
# 3.搭建基础开发环境
## 3.2.安装jdk
## 3.3.安装maven
## 3.4.安装mysql
# 4.Centos搭建docker
## 4.2.安装docker
### 4.2.1.在线安装docker
### 4.2.2.二进制包安装docker
## 4.3.docker启动故障解决		
## 4.4.docker容器可视化	
## 4.5.搭建docke私服
## 4.5.1搭建docke官方私服（不带有用户名和密码校验）
## 4.5.2搭建docke官方私服（带有用户名和密码校验）	
## 4.5.3.搭建harbor私服
### 4.5.3.1.harbor简介
### 4.5.3.2.搭建docker-compose
### 4.5.3.3.安装harbor
## 4.6.docker官方私服可视化
### 4.6.1docker-registry-web方案
## 4.7.制作docker镜像并上传到私服
### 4.7.1.制作Dokcer镜像		
### 4.7.2.上传本地jdk镜像到私服
## 4.8.Docker中安装常用软件
### 4.8.1.Docker安装mysql
### 4.8.2.Docker中安装consul
### 4.8.3.Docker容器中安装vim	 
### 4.8.3.docker安装elk
# 5.Centos搭建Rancher
# 6.Centos搭建Minikube
## 6.2.minikube介绍
## 6.3.版本说明
## 6.4.开启Vmware虚拟化
## 6.5.安装kubectl	
## 6.6.安装minikube
## 6.7.使用阿里云加速docker hub
## 6.8.启动minikube
## 6.9.minikube常用命令	
# 7.kubeadm搭建Kubernetes
## 7.2.特别说明
## 7.3.所有节点设置对应主机名
## 7.4.所有节点修改hosts
## 7.5.所有节点关闭SELinux
## 7.6.所有节点关闭防火墙
## 7.7.所有节点安装docker
## 7.8.所有节点安装k8s所需组件
## 7.9.所有节点启动kubelet和docker
## 7.10.所有关闭swap
## 7.11.用kubeadm 初始化集群
## 7.12.其他节点连接到Master节点
## 7.13.在master节点上查看集群
## 7.14.安装网络插件
## 7.15.在master上查看集群节点			
## 7.16.启动故障解决
## 7.17.基础命令
## 7.18.部署第一个程序到k8s中
## 7.19.可视化面板kuboard
# 8.二进制包搭建Kubernetes
## 8.2.环境配置清单
## 8.3.服务器规划和IP地址规划
### 8.3.1服务器规划
### 8.3.2.IP地址规划
## 8.4.安装前准备工作
### 8.4.1操作系统初始设置			
### 8.4.2下载所有用到的软件包
## 8.5.安装cfssl证书生成工具
## 8.6.搭建etcd集群
### 8.6.1生成CA证书和https证书
### 8.6.2.部署etcd集群
### 8.6.4.拷贝etcd所需证书
### 8.6.5.让systemd管理etcd
### 8.6.6.拷贝etcd安装文件到Worker Node	
### 8.6.7.启动三个etcd并设置开机自启
## 8.7.安装配置Docker
### 8.7.1在Master1上安装docker
### 8.7.2在所有Worker Node上安装docker
### 8.7.3启动三台机器上的docker
## 8.8.搭建kube-apiserver
### 8.8.1.生成CA证书和Https证书 				
### 8.8.2.在Master Node1上部署kube-apiserver		
### 8.8.3.拷贝所需证书
### 8.8.4.启用TLS bootstrapping
### 8.8.5.让systemd管理apiserver
### 8.8.6.启动kube-apiserver
## 8.9.在Master Node1上部署kube-controller-manager
### 8.9.1.切换目录并拷贝kube-controller-manager相关文件到/opt/kubernetes/bin
### 8.9.2.生成证书
### 8.9.2.创建kube-controller-manager配置文件
### 8.9.3.生成配置文件
### 8.9.4.让systemd管理controller-manager
### 8.9.5.启动kube-controller-manager
## 8.10.部署kube-scheduler
### 8.9.1 切换目录并拷贝kube-dcheduler相关文件到/opt/kubernetes/bin
### 8.10.2.生成证书	
### 8.10.3.创建kube-scheduler.conf配置文件
### 8.10.4.生成kube-scheduler.kubeconfig文件
### 8.10.5.让systemd管理kube-scheduler
### 8.10.6.启动并设置开机启动
## 8.11.使用kubectl查看集群状态
### 8.11.1.生成所需证书 
### 8.11.2.在.kube文件夹中生成config文件
### 8.11.3.通过kubectl工具查看集群组件
### 8.11.4.授权kubelet-bootstrap用户允许请求证书
## 8.12.在Master Node1上部署第一个Worker Node
### 8.12.2.在Master Node1部署kubelet
### 8.12.3.部署kube-proxy
### 8.12.4.部署网络组件(Calico)
### 8.12.5.授权apiserver访问kubelet
## 8.13.增加Worker Node
### 8.13.1.在所有Worker Node创建工作目录并拷贝二进制文件
### 8.13.2拷贝Master Node1上部署好的文件到Worker Node
### 8.13.3.删除所有Worker Node中kubelet证书和kubeconfig文件
### 8.13.4. 修改Worker Node1和Worker Node2主机名
### 8.13.5.启动Worker Node1和Worker Node2中kubelet并设置开机自启
### 8.13.6.在Master1上同意新的Node kubelet证书申请
### 8.13.7.在Master1上部署kubernetes-dashboard
### 8.13.8.在Master1上部署CoreDNS
## 8.14.增加Master2节点
### 8.14.1.Kubernetes集群架构简介	
### 8.14.2.给Master Node2安装Docker
### 8.14.5.给Master Node2节点拷贝所有需要的证书
### 8.14.6.启动Master所有服务并设置开机自启
### 8.14.7.在Master查看集群组件状态
### 8.14.8.审批所有Worker  Node上的kubelet证书申请
## 8.15.部署Nginx+Keepalived高可用负载均衡器
### 8.15.1.Nginx和Keepalived简介
### 8.15.2.在两台Master Node上安装软件
### 8.15.3.Nginx增加Steam模块
### 8.15.4.启动nginx、keepalived并设置开机自启(master1/master2)
### 8.15.5.查看keepalived工作状态
### 8.15.6.Nginx+keepalived高可用测试
### 8.15.7.测试负载均衡器
### 8.15.8.修改所有的Worker Node连接LB VIP
## 8.16.部署常见问题
### 8.16.1系统断电后,某个etcd节点无法启动
### 8.16.2 The connection to the server localhost:8080 was refused - did you specify the right host or port?
## 8.17.部署测试程序
