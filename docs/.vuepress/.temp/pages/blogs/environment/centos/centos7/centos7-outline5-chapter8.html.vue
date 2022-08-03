<template><div><h1 id="_8-二进制包搭建kubernetes" tabindex="-1"><a class="header-anchor" href="#_8-二进制包搭建kubernetes" aria-hidden="true">#</a> 8.二进制包搭建Kubernetes</h1>
<h2 id="_8-1-环境配置清单" tabindex="-1"><a class="header-anchor" href="#_8-1-环境配置清单" aria-hidden="true">#</a> 8.1.环境配置清单</h2>
<h2 id="_8-2-服务器规划和ip地址规划" tabindex="-1"><a class="header-anchor" href="#_8-2-服务器规划和ip地址规划" aria-hidden="true">#</a> 8.2.服务器规划和IP地址规划</h2>
<h3 id="_8-2-1服务器规划" tabindex="-1"><a class="header-anchor" href="#_8-2-1服务器规划" aria-hidden="true">#</a> 8.2.1服务器规划</h3>
<h3 id="_8-2-2-ip地址规划" tabindex="-1"><a class="header-anchor" href="#_8-2-2-ip地址规划" aria-hidden="true">#</a> 8.2.2.IP地址规划</h3>
<h2 id="_8-3-安装前准备工作" tabindex="-1"><a class="header-anchor" href="#_8-3-安装前准备工作" aria-hidden="true">#</a> 8.3.安装前准备工作</h2>
<h3 id="_8-3-1操作系统初始设置" tabindex="-1"><a class="header-anchor" href="#_8-3-1操作系统初始设置" aria-hidden="true">#</a> 8.3.1操作系统初始设置</h3>
<h3 id="_8-3-2下载所有用到的软件包" tabindex="-1"><a class="header-anchor" href="#_8-3-2下载所有用到的软件包" aria-hidden="true">#</a> 8.3.2下载所有用到的软件包</h3>
<h2 id="_8-4-安装cfssl证书生成工具" tabindex="-1"><a class="header-anchor" href="#_8-4-安装cfssl证书生成工具" aria-hidden="true">#</a> 8.4.安装cfssl证书生成工具</h2>
<h2 id="_8-5-搭建etcd集群" tabindex="-1"><a class="header-anchor" href="#_8-5-搭建etcd集群" aria-hidden="true">#</a> 8.5.搭建etcd集群</h2>
<h3 id="_8-5-1生成ca证书和https证书" tabindex="-1"><a class="header-anchor" href="#_8-5-1生成ca证书和https证书" aria-hidden="true">#</a> 8.5.1生成CA证书和https证书</h3>
<h3 id="_8-5-2-部署etcd集群" tabindex="-1"><a class="header-anchor" href="#_8-5-2-部署etcd集群" aria-hidden="true">#</a> 8.5.2.部署etcd集群</h3>
<h3 id="_8-5-4-拷贝etcd所需证书" tabindex="-1"><a class="header-anchor" href="#_8-5-4-拷贝etcd所需证书" aria-hidden="true">#</a> 8.5.4.拷贝etcd所需证书</h3>
<h3 id="_8-5-5-让systemd管理etcd" tabindex="-1"><a class="header-anchor" href="#_8-5-5-让systemd管理etcd" aria-hidden="true">#</a> 8.5.5.让systemd管理etcd</h3>
<h3 id="_8-5-6-拷贝etcd安装文件到worker-node" tabindex="-1"><a class="header-anchor" href="#_8-5-6-拷贝etcd安装文件到worker-node" aria-hidden="true">#</a> 8.5.6.拷贝etcd安装文件到Worker Node</h3>
<h3 id="_8-5-7-启动三个etcd并设置开机自启" tabindex="-1"><a class="header-anchor" href="#_8-5-7-启动三个etcd并设置开机自启" aria-hidden="true">#</a> 8.5.7.启动三个etcd并设置开机自启</h3>
<h2 id="_8-6-安装配置docker" tabindex="-1"><a class="header-anchor" href="#_8-6-安装配置docker" aria-hidden="true">#</a> 8.6.安装配置Docker</h2>
<h3 id="_8-6-1在master1上安装docker" tabindex="-1"><a class="header-anchor" href="#_8-6-1在master1上安装docker" aria-hidden="true">#</a> 8.6.1在Master1上安装docker</h3>
<h3 id="_8-6-2在所有worker-node上安装docker" tabindex="-1"><a class="header-anchor" href="#_8-6-2在所有worker-node上安装docker" aria-hidden="true">#</a> 8.6.2在所有Worker Node上安装docker</h3>
<h3 id="_8-6-3启动三台机器上的docker" tabindex="-1"><a class="header-anchor" href="#_8-6-3启动三台机器上的docker" aria-hidden="true">#</a> 8.6.3启动三台机器上的docker</h3>
<h2 id="_8-7-搭建kube-apiserver" tabindex="-1"><a class="header-anchor" href="#_8-7-搭建kube-apiserver" aria-hidden="true">#</a> 8.7.搭建kube-apiserver</h2>
<h3 id="_8-7-1-生成ca证书和https证书" tabindex="-1"><a class="header-anchor" href="#_8-7-1-生成ca证书和https证书" aria-hidden="true">#</a> 8.7.1.生成CA证书和Https证书</h3>
<h3 id="_8-7-2-在master-node1上部署kube-apiserver" tabindex="-1"><a class="header-anchor" href="#_8-7-2-在master-node1上部署kube-apiserver" aria-hidden="true">#</a> 8.7.2.在Master Node1上部署kube-apiserver</h3>
<h3 id="_8-7-3-拷贝所需证书" tabindex="-1"><a class="header-anchor" href="#_8-7-3-拷贝所需证书" aria-hidden="true">#</a> 8.7.3.拷贝所需证书</h3>
<h3 id="_8-7-4-启用tls-bootstrapping" tabindex="-1"><a class="header-anchor" href="#_8-7-4-启用tls-bootstrapping" aria-hidden="true">#</a> 8.7.4.启用TLS bootstrapping</h3>
<h3 id="_8-7-5-让systemd管理apiserver" tabindex="-1"><a class="header-anchor" href="#_8-7-5-让systemd管理apiserver" aria-hidden="true">#</a> 8.7.5.让systemd管理apiserver</h3>
<h3 id="_8-7-6-启动kube-apiserver" tabindex="-1"><a class="header-anchor" href="#_8-7-6-启动kube-apiserver" aria-hidden="true">#</a> 8.7.6.启动kube-apiserver</h3>
<h2 id="_8-8-在master-node1上部署kube-controller-manager" tabindex="-1"><a class="header-anchor" href="#_8-8-在master-node1上部署kube-controller-manager" aria-hidden="true">#</a> 8.8.在Master Node1上部署kube-controller-manager</h2>
<h3 id="_8-8-1-切换目录并拷贝kube-controller-manager相关文件到-opt-kubernetes-bin" tabindex="-1"><a class="header-anchor" href="#_8-8-1-切换目录并拷贝kube-controller-manager相关文件到-opt-kubernetes-bin" aria-hidden="true">#</a> 8.8.1.切换目录并拷贝kube-controller-manager相关文件到/opt/kubernetes/bin</h3>
<h3 id="_8-8-2-生成证书" tabindex="-1"><a class="header-anchor" href="#_8-8-2-生成证书" aria-hidden="true">#</a> 8.8.2.生成证书</h3>
<h3 id="_8-8-2-创建kube-controller-manager配置文件" tabindex="-1"><a class="header-anchor" href="#_8-8-2-创建kube-controller-manager配置文件" aria-hidden="true">#</a> 8.8.2.创建kube-controller-manager配置文件</h3>
<h3 id="_8-8-3-生成配置文件" tabindex="-1"><a class="header-anchor" href="#_8-8-3-生成配置文件" aria-hidden="true">#</a> 8.8.3.生成配置文件</h3>
<h3 id="_8-8-4-让systemd管理controller-manager" tabindex="-1"><a class="header-anchor" href="#_8-8-4-让systemd管理controller-manager" aria-hidden="true">#</a> 8.8.4.让systemd管理controller-manager</h3>
<h3 id="_8-8-5-启动kube-controller-manager" tabindex="-1"><a class="header-anchor" href="#_8-8-5-启动kube-controller-manager" aria-hidden="true">#</a> 8.8.5.启动kube-controller-manager</h3>
<h2 id="_8-9-部署kube-scheduler" tabindex="-1"><a class="header-anchor" href="#_8-9-部署kube-scheduler" aria-hidden="true">#</a> 8.9.部署kube-scheduler</h2>
<h3 id="_8-8-1-切换目录并拷贝kube-dcheduler相关文件到-opt-kubernetes-bin" tabindex="-1"><a class="header-anchor" href="#_8-8-1-切换目录并拷贝kube-dcheduler相关文件到-opt-kubernetes-bin" aria-hidden="true">#</a> 8.8.1 切换目录并拷贝kube-dcheduler相关文件到/opt/kubernetes/bin</h3>
<h3 id="_8-9-2-生成证书" tabindex="-1"><a class="header-anchor" href="#_8-9-2-生成证书" aria-hidden="true">#</a> 8.9.2.生成证书</h3>
<h3 id="_8-9-3-创建kube-scheduler-conf配置文件" tabindex="-1"><a class="header-anchor" href="#_8-9-3-创建kube-scheduler-conf配置文件" aria-hidden="true">#</a> 8.9.3.创建kube-scheduler.conf配置文件</h3>
<h3 id="_8-9-4-生成kube-scheduler-kubeconfig文件" tabindex="-1"><a class="header-anchor" href="#_8-9-4-生成kube-scheduler-kubeconfig文件" aria-hidden="true">#</a> 8.9.4.生成kube-scheduler.kubeconfig文件</h3>
<h3 id="_8-9-5-让systemd管理kube-scheduler" tabindex="-1"><a class="header-anchor" href="#_8-9-5-让systemd管理kube-scheduler" aria-hidden="true">#</a> 8.9.5.让systemd管理kube-scheduler</h3>
<h3 id="_8-9-6-启动并设置开机启动" tabindex="-1"><a class="header-anchor" href="#_8-9-6-启动并设置开机启动" aria-hidden="true">#</a> 8.9.6.启动并设置开机启动</h3>
<h2 id="_8-10-使用kubectl查看集群状态" tabindex="-1"><a class="header-anchor" href="#_8-10-使用kubectl查看集群状态" aria-hidden="true">#</a> 8.10.使用kubectl查看集群状态</h2>
<h3 id="_8-10-1-生成所需证书" tabindex="-1"><a class="header-anchor" href="#_8-10-1-生成所需证书" aria-hidden="true">#</a> 8.10.1.生成所需证书</h3>
<h3 id="_8-10-2-在-kube文件夹中生成config文件" tabindex="-1"><a class="header-anchor" href="#_8-10-2-在-kube文件夹中生成config文件" aria-hidden="true">#</a> 8.10.2.在.kube文件夹中生成config文件</h3>
<h3 id="_8-10-3-通过kubectl工具查看集群组件" tabindex="-1"><a class="header-anchor" href="#_8-10-3-通过kubectl工具查看集群组件" aria-hidden="true">#</a> 8.10.3.通过kubectl工具查看集群组件</h3>
<h3 id="_8-10-4-授权kubelet-bootstrap用户允许请求证书" tabindex="-1"><a class="header-anchor" href="#_8-10-4-授权kubelet-bootstrap用户允许请求证书" aria-hidden="true">#</a> 8.10.4.授权kubelet-bootstrap用户允许请求证书</h3>
<h2 id="_8-11-在master-node1上部署第一个worker-node" tabindex="-1"><a class="header-anchor" href="#_8-11-在master-node1上部署第一个worker-node" aria-hidden="true">#</a> 8.11.在Master Node1上部署第一个Worker Node</h2>
<h3 id="_8-11-2-在master-node1部署kubelet" tabindex="-1"><a class="header-anchor" href="#_8-11-2-在master-node1部署kubelet" aria-hidden="true">#</a> 8.11.2.在Master Node1部署kubelet</h3>
<h4 id="_8-11-2-1-创建kubelet配置文件" tabindex="-1"><a class="header-anchor" href="#_8-11-2-1-创建kubelet配置文件" aria-hidden="true">#</a> 8.11.2.1.创建kubelet配置文件</h4>
<h4 id="_8-11-2-2-创建kubelet编排文件" tabindex="-1"><a class="header-anchor" href="#_8-11-2-2-创建kubelet编排文件" aria-hidden="true">#</a> 8.11.2.2.创建kubelet编排文件</h4>
<h4 id="_8-11-2-3-生成kubelet初次加入集群引导kubeconfig文件" tabindex="-1"><a class="header-anchor" href="#_8-11-2-3-生成kubelet初次加入集群引导kubeconfig文件" aria-hidden="true">#</a> 8.11.2.3.生成kubelet初次加入集群引导kubeconfig文件</h4>
<h4 id="_8-11-2-4-systemd管理kubelet" tabindex="-1"><a class="header-anchor" href="#_8-11-2-4-systemd管理kubelet" aria-hidden="true">#</a> 8.11.2.4.systemd管理kubelet</h4>
<h4 id="_8-11-3-5-启动kubelet并设置开机启动" tabindex="-1"><a class="header-anchor" href="#_8-11-3-5-启动kubelet并设置开机启动" aria-hidden="true">#</a> 8.11.3.5.启动kubelet并设置开机启动</h4>
<h4 id="_8-11-2-6-允许kubelet证书申请并加入集群" tabindex="-1"><a class="header-anchor" href="#_8-11-2-6-允许kubelet证书申请并加入集群" aria-hidden="true">#</a> 8.11.2.6.允许kubelet证书申请并加入集群</h4>
<h3 id="_8-11-3-部署kube-proxy" tabindex="-1"><a class="header-anchor" href="#_8-11-3-部署kube-proxy" aria-hidden="true">#</a> 8.11.3.部署kube-proxy</h3>
<h4 id="_8-11-3-1-创建kube-proxy配置文件" tabindex="-1"><a class="header-anchor" href="#_8-11-3-1-创建kube-proxy配置文件" aria-hidden="true">#</a> 8.11.3.1.创建kube-proxy配置文件</h4>
<h4 id="_8-11-3-2-配置参数文件" tabindex="-1"><a class="header-anchor" href="#_8-11-3-2-配置参数文件" aria-hidden="true">#</a> 8.11.3.2.配置参数文件</h4>
<h4 id="_8-11-3-3-生成kube-proxy证书文件" tabindex="-1"><a class="header-anchor" href="#_8-11-3-3-生成kube-proxy证书文件" aria-hidden="true">#</a> 8.11.3.3.生成kube-proxy证书文件</h4>
<h4 id="_8-11-3-4-生成kube-proxy-kubeconfig文件" tabindex="-1"><a class="header-anchor" href="#_8-11-3-4-生成kube-proxy-kubeconfig文件" aria-hidden="true">#</a> 8.11.3.4.生成kube-proxy.kubeconfig文件</h4>
<h4 id="_8-11-3-5-systemd管理kube-proxy" tabindex="-1"><a class="header-anchor" href="#_8-11-3-5-systemd管理kube-proxy" aria-hidden="true">#</a> 8.11.3.5.systemd管理kube-proxy</h4>
<h4 id="_8-10-3-6-启动kube-proxy并设置开机自启" tabindex="-1"><a class="header-anchor" href="#_8-10-3-6-启动kube-proxy并设置开机自启" aria-hidden="true">#</a> 8.10.3.6.启动kube-proxy并设置开机自启</h4>
<h3 id="_8-11-4-部署网络组件-calico" tabindex="-1"><a class="header-anchor" href="#_8-11-4-部署网络组件-calico" aria-hidden="true">#</a> 8.11.4.部署网络组件(Calico)</h3>
<h3 id="_8-11-5-授权apiserver访问kubelet" tabindex="-1"><a class="header-anchor" href="#_8-11-5-授权apiserver访问kubelet" aria-hidden="true">#</a> 8.11.5.授权apiserver访问kubelet</h3>
<h2 id="_8-12-增加worker-node" tabindex="-1"><a class="header-anchor" href="#_8-12-增加worker-node" aria-hidden="true">#</a> 8.12.增加Worker Node</h2>
<h3 id="_8-12-1-在所有worker-node创建工作目录并拷贝二进制文件" tabindex="-1"><a class="header-anchor" href="#_8-12-1-在所有worker-node创建工作目录并拷贝二进制文件" aria-hidden="true">#</a> 8.12.1.在所有Worker Node创建工作目录并拷贝二进制文件</h3>
<h3 id="_8-12-2拷贝master-node1上部署好的文件到worker-node" tabindex="-1"><a class="header-anchor" href="#_8-12-2拷贝master-node1上部署好的文件到worker-node" aria-hidden="true">#</a> 8.12.2拷贝Master Node1上部署好的文件到Worker Node</h3>
<h3 id="_8-12-3-删除所有worker-node中kubelet证书和kubeconfig文件" tabindex="-1"><a class="header-anchor" href="#_8-12-3-删除所有worker-node中kubelet证书和kubeconfig文件" aria-hidden="true">#</a> 8.12.3.删除所有Worker Node中kubelet证书和kubeconfig文件</h3>
<h3 id="_8-12-4-修改worker-node1和worker-node2主机名" tabindex="-1"><a class="header-anchor" href="#_8-12-4-修改worker-node1和worker-node2主机名" aria-hidden="true">#</a> 8.12.4. 修改Worker Node1和Worker Node2主机名</h3>
<h3 id="_8-12-5-启动worker-node1和worker-node2中kubelet并设置开机自启" tabindex="-1"><a class="header-anchor" href="#_8-12-5-启动worker-node1和worker-node2中kubelet并设置开机自启" aria-hidden="true">#</a> 8.12.5.启动Worker Node1和Worker Node2中kubelet并设置开机自启</h3>
<h3 id="_8-12-6-在master1上同意新的node-kubelet证书申请" tabindex="-1"><a class="header-anchor" href="#_8-12-6-在master1上同意新的node-kubelet证书申请" aria-hidden="true">#</a> 8.12.6.在Master1上同意新的Node kubelet证书申请</h3>
<h3 id="_8-12-7-在master1上部署kubernetes-dashboard" tabindex="-1"><a class="header-anchor" href="#_8-12-7-在master1上部署kubernetes-dashboard" aria-hidden="true">#</a> 8.12.7.在Master1上部署kubernetes-dashboard</h3>
<h3 id="_8-12-8-在master1上部署coredns" tabindex="-1"><a class="header-anchor" href="#_8-12-8-在master1上部署coredns" aria-hidden="true">#</a> 8.12.8.在Master1上部署CoreDNS</h3>
<h2 id="_8-13-增加master2节点" tabindex="-1"><a class="header-anchor" href="#_8-13-增加master2节点" aria-hidden="true">#</a> 8.13.增加Master2节点</h2>
<h3 id="_8-13-1-kubernetes集群架构简介" tabindex="-1"><a class="header-anchor" href="#_8-13-1-kubernetes集群架构简介" aria-hidden="true">#</a> 8.13.1.Kubernetes集群架构简介</h3>
<h3 id="_8-13-2-给master-node2安装docker" tabindex="-1"><a class="header-anchor" href="#_8-13-2-给master-node2安装docker" aria-hidden="true">#</a> 8.13.2.给Master Node2安装Docker</h3>
<h3 id="_8-13-5-给master-node2节点拷贝所有需要的证书" tabindex="-1"><a class="header-anchor" href="#_8-13-5-给master-node2节点拷贝所有需要的证书" aria-hidden="true">#</a> 8.13.5.给Master Node2节点拷贝所有需要的证书</h3>
<h3 id="_8-13-6-启动master所有服务并设置开机自启" tabindex="-1"><a class="header-anchor" href="#_8-13-6-启动master所有服务并设置开机自启" aria-hidden="true">#</a> 8.13.6.启动Master所有服务并设置开机自启</h3>
<h3 id="_8-13-7-在master查看集群组件状态" tabindex="-1"><a class="header-anchor" href="#_8-13-7-在master查看集群组件状态" aria-hidden="true">#</a> 8.13.7.在Master查看集群组件状态</h3>
<h3 id="_8-13-8-审批所有worker-node上的kubelet证书申请" tabindex="-1"><a class="header-anchor" href="#_8-13-8-审批所有worker-node上的kubelet证书申请" aria-hidden="true">#</a> 8.13.8.审批所有Worker  Node上的kubelet证书申请</h3>
<h2 id="_8-14-部署nginx-keepalived高可用负载均衡器" tabindex="-1"><a class="header-anchor" href="#_8-14-部署nginx-keepalived高可用负载均衡器" aria-hidden="true">#</a> 8.14.部署Nginx+Keepalived高可用负载均衡器</h2>
<h3 id="_8-14-1-nginx和keepalived简介" tabindex="-1"><a class="header-anchor" href="#_8-14-1-nginx和keepalived简介" aria-hidden="true">#</a> 8.14.1.Nginx和Keepalived简介</h3>
<h3 id="_8-14-2-在两台master-node上安装软件" tabindex="-1"><a class="header-anchor" href="#_8-14-2-在两台master-node上安装软件" aria-hidden="true">#</a> 8.14.2.在两台Master Node上安装软件</h3>
<h3 id="_8-14-3-nginx增加steam模块" tabindex="-1"><a class="header-anchor" href="#_8-14-3-nginx增加steam模块" aria-hidden="true">#</a> 8.14.3.Nginx增加Steam模块</h3>
<h4 id="_8-14-3-1-查看nginx版本模块" tabindex="-1"><a class="header-anchor" href="#_8-14-3-1-查看nginx版本模块" aria-hidden="true">#</a> 8.14.3.1.查看Nginx版本模块</h4>
<h4 id="_8-14-3-2-master1和master2安装stream模块" tabindex="-1"><a class="header-anchor" href="#_8-14-3-2-master1和master2安装stream模块" aria-hidden="true">#</a> 8.14.3.2.Master1和Master2安装Stream模块</h4>
<h3 id="_8-14-4-启动nginx、keepalived并设置开机自启-master1-master2" tabindex="-1"><a class="header-anchor" href="#_8-14-4-启动nginx、keepalived并设置开机自启-master1-master2" aria-hidden="true">#</a> 8.14.4.启动nginx、keepalived并设置开机自启(master1/master2)</h3>
<h3 id="_8-14-5-查看keepalived工作状态" tabindex="-1"><a class="header-anchor" href="#_8-14-5-查看keepalived工作状态" aria-hidden="true">#</a> 8.14.5.查看keepalived工作状态</h3>
<h3 id="_8-14-6-nginx-keepalived高可用测试" tabindex="-1"><a class="header-anchor" href="#_8-14-6-nginx-keepalived高可用测试" aria-hidden="true">#</a> 8.14.6.Nginx+keepalived高可用测试</h3>
<h3 id="_8-14-7-测试负载均衡器" tabindex="-1"><a class="header-anchor" href="#_8-14-7-测试负载均衡器" aria-hidden="true">#</a> 8.14.7.测试负载均衡器</h3>
<h3 id="_8-14-8-修改所有的worker-node连接lb-vip" tabindex="-1"><a class="header-anchor" href="#_8-14-8-修改所有的worker-node连接lb-vip" aria-hidden="true">#</a> 8.14.8.修改所有的Worker Node连接LB VIP</h3>
<h2 id="_8-15-部署常见问题" tabindex="-1"><a class="header-anchor" href="#_8-15-部署常见问题" aria-hidden="true">#</a> 8.15.部署常见问题</h2>
<h3 id="_8-15-1系统断电后-某个etcd节点无法启动" tabindex="-1"><a class="header-anchor" href="#_8-15-1系统断电后-某个etcd节点无法启动" aria-hidden="true">#</a> 8.15.1系统断电后,某个etcd节点无法启动</h3>
<h3 id="_8-15-2-the-connection-to-the-server-localhost-8080-was-refused-did-you-specify-the-right-host-or-port" tabindex="-1"><a class="header-anchor" href="#_8-15-2-the-connection-to-the-server-localhost-8080-was-refused-did-you-specify-the-right-host-or-port" aria-hidden="true">#</a> 8.15.2 The connection to the server localhost:8080 was refused - did you specify the right host or port?</h3>
<h2 id="_8-16-部署测试程序" tabindex="-1"><a class="header-anchor" href="#_8-16-部署测试程序" aria-hidden="true">#</a> 8.16.部署测试程序</h2>
</div></template>
