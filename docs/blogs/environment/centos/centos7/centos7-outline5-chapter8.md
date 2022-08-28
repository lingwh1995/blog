# 8.二进制包搭建Kubernetes
## 8.1.环境配置清单
## 8.2.服务器规划和IP地址规划
### 8.2.1服务器规划
### 8.2.2.IP地址规划
## 8.3.安装前准备工作
### 8.3.1操作系统初始设置
### 8.3.2下载所有用到的软件包
## 8.4.安装cfssl证书生成工具
## 8.5.搭建etcd集群
### 8.5.1生成CA证书和https证书
### 8.5.2.部署etcd集群
### 8.5.4.拷贝etcd所需证书
### 8.5.5.让systemd管理etcd
### 8.5.6.拷贝etcd安装文件到Worker Node
### 8.5.7.启动三个etcd并设置开机自启
## 8.6.安装配置Docker
### 8.6.1在Master1上安装docker
### 8.6.2在所有Worker Node上安装docker
### 8.6.3启动三台机器上的docker
## 8.7.搭建kube-apiserver
### 8.7.1.生成CA证书和Https证书
### 8.7.2.在Master Node1上部署kube-apiserver
### 8.7.3.拷贝所需证书
### 8.7.4.启用TLS bootstrapping
### 8.7.5.让systemd管理apiserver
### 8.7.6.启动kube-apiserver
## 8.8.在Master Node1上部署kube-controller-manager
### 8.8.1.切换目录并拷贝kube-controller-manager相关文件到/opt/kubernetes/bin
### 8.8.2.生成证书
### 8.8.2.创建kube-controller-manager配置文件
### 8.8.3.生成配置文件
### 8.8.4.让systemd管理controller-manager
### 8.8.5.启动kube-controller-manager
## 8.9.部署kube-scheduler
### 8.8.1 切换目录并拷贝kube-dcheduler相关文件到/opt/kubernetes/bin
### 8.9.2.生成证书
### 8.9.3.创建kube-scheduler.conf配置文件
### 8.9.4.生成kube-scheduler.kubeconfig文件
### 8.9.5.让systemd管理kube-scheduler
### 8.9.6.启动并设置开机启动
## 8.10.使用kubectl查看集群状态
### 8.10.1.生成所需证书
### 8.10.2.在.kube文件夹中生成config文件
### 8.10.3.通过kubectl工具查看集群组件
### 8.10.4.授权kubelet-bootstrap用户允许请求证书
## 8.11.在Master Node1上部署第一个Worker Node
### 8.11.2.在Master Node1部署kubelet
#### 8.11.2.1.创建kubelet配置文件
#### 8.11.2.2.创建kubelet编排文件
#### 8.11.2.3.生成kubelet初次加入集群引导kubeconfig文件
#### 8.11.2.4.systemd管理kubelet
#### 8.11.3.5.启动kubelet并设置开机启动
#### 8.11.2.6.允许kubelet证书申请并加入集群
### 8.11.3.部署kube-proxy
#### 8.11.3.1.创建kube-proxy配置文件
#### 8.11.3.2.配置参数文件
#### 8.11.3.3.生成kube-proxy证书文件
#### 8.11.3.4.生成kube-proxy.kubeconfig文件
#### 8.11.3.5.systemd管理kube-proxy
#### 8.10.3.6.启动kube-proxy并设置开机自启
### 8.11.4.部署网络组件(Calico)
### 8.11.5.授权apiserver访问kubelet
## 8.12.增加Worker Node
### 8.12.1.在所有Worker Node创建工作目录并拷贝二进制文件
### 8.12.2拷贝Master Node1上部署好的文件到Worker Node
### 8.12.3.删除所有Worker Node中kubelet证书和kubeconfig文件
### 8.12.4. 修改Worker Node1和Worker Node2主机名
### 8.12.5.启动Worker Node1和Worker Node2中kubelet并设置开机自启
### 8.12.6.在Master1上同意新的Node kubelet证书申请
### 8.12.7.在Master1上部署kubernetes-dashboard
### 8.12.8.在Master1上部署CoreDNS
## 8.13.增加Master2节点
### 8.13.1.Kubernetes集群架构简介
### 8.13.2.给Master Node2安装Docker
### 8.13.5.给Master Node2节点拷贝所有需要的证书
### 8.13.6.启动Master所有服务并设置开机自启
### 8.13.7.在Master查看集群组件状态
### 8.13.8.审批所有Worker  Node上的kubelet证书申请
## 8.14.部署Nginx+Keepalived高可用负载均衡器
### 8.14.1.Nginx和Keepalived简介
### 8.14.2.在两台Master Node上安装软件
### 8.14.3.Nginx增加Steam模块
#### 8.14.3.1.查看Nginx版本模块
#### 8.14.3.2.Master1和Master2安装Stream模块
### 8.14.4.启动nginx、keepalived并设置开机自启(master1/master2)
### 8.14.5.查看keepalived工作状态
### 8.14.6.Nginx+keepalived高可用测试
### 8.14.7.测试负载均衡器
### 8.14.8.修改所有的Worker Node连接LB VIP
## 8.15.部署常见问题
### 8.15.1系统断电后,某个etcd节点无法启动
### 8.15.2 The connection to the server localhost:8080 was refused - did you specify the right host or port?
## 8.16.部署测试程序
