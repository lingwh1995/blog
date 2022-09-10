<template><div><h1 id="_7-kubeadm搭建kubernetes" tabindex="-1"><a class="header-anchor" href="#_7-kubeadm搭建kubernetes" aria-hidden="true">#</a> 7.kubeadm搭建Kubernetes</h1>
<h2 id="_7-1-章节内容概述" tabindex="-1"><a class="header-anchor" href="#_7-1-章节内容概述" aria-hidden="true">#</a> 7.1.章节内容概述</h2>
<pre><code>本章节涉及主要内容有：
 7.1.章节内容概述
 7.2.章节内容大纲
 7.3.特别说明
 7.4.所有节点设置对应主机名
 7.5.所有节点修改hosts
 7.6.所有节点关闭SELinux
 7.7.所有节点关闭防火墙
 7.8.所有节点安装docker
 7.9.所有节点安装k8s所需组件
 7.10.所有节点启动kubelet和docker
 7.11.所有关闭swap
 7.12.用kubeadm 初始化集群
 7.13.其他节点连接到Master节点
 7.14.在master节点上查看集群
 7.15.安装网络插件
 7.16.在master上查看集群节点
 7.17.启动故障解决
 7.18.基础命令
 7.19.部署测试程序
 7.20.可视化面板kuboard
具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看。
</code></pre>
<h2 id="_7-2-章节内容大纲" tabindex="-1"><a class="header-anchor" href="#_7-2-章节内容大纲" aria-hidden="true">#</a> <a href="/enhance/markmap/environment/centos/centos7/chapter/centos7-outline5-chapter7.html" target="_blank">7.2.章节内容大纲</a></h2>
<Markmap localtion="/enhance/markmap/environment/centos/centos7/chapter/centos7-outline5-chapter7.html" height="500rem"/>
<h2 id="_7-3-特别说明" tabindex="-1"><a class="header-anchor" href="#_7-3-特别说明" aria-hidden="true">#</a> 7.3.特别说明</h2>
<pre><code>使用kubeadm搭建Kubernetes
</code></pre>
<h2 id="_7-4-所有节点设置对应主机名" tabindex="-1"><a class="header-anchor" href="#_7-4-所有节点设置对应主机名" aria-hidden="true">#</a> 7.4.所有节点设置对应主机名</h2>
<pre><code>master节点
hostnamectl set-hostname master
slave1节点
hostnamectl set-hostname slave1
slave2节点
hostnamectl set-hostname slave2
</code></pre>
<h2 id="_7-5-所有节点修改hosts" tabindex="-1"><a class="header-anchor" href="#_7-5-所有节点修改hosts" aria-hidden="true">#</a> 7.5.所有节点修改hosts</h2>
<pre><code>vim /etc/hosts
192.168.0.6 master
192.168.0.7 slave1
192.168.0.8 slave2
</code></pre>
<h2 id="_7-6-所有节点关闭selinux" tabindex="-1"><a class="header-anchor" href="#_7-6-所有节点关闭selinux" aria-hidden="true">#</a> 7.6.所有节点关闭SELinux</h2>
<pre><code>暂时关闭
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>setenforce 0
</code></pre></div><pre><code>永久关闭
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>sed -i --follow-symlinks 's/SELINUX=enforcing/SELINUX=disabled/g' \
/etc/sysconfig/selinux
</code></pre></div><h2 id="_7-7-所有节点关闭防火墙" tabindex="-1"><a class="header-anchor" href="#_7-7-所有节点关闭防火墙" aria-hidden="true">#</a> 7.7.所有节点关闭防火墙</h2>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>systemctl stop firewalld &amp;&amp;
systemctl disable firewalld
</code></pre></div><h2 id="_7-8-所有节点安装docker" tabindex="-1"><a class="header-anchor" href="#_7-8-所有节点安装docker" aria-hidden="true">#</a> 7.8.所有节点安装docker</h2>
<pre><code>安装docker
</code></pre>
<p>详细参考-&gt; <a href="/pure/blogs/environment/centos/centos7/shardings/centos7-chapter-4.搭建docker技术栈.html#_4-3-安装docker" target="_blank">安装docker</a></p>
<pre><code>修改docker配置
vim /etc/docker/daemon.json，并添加如下内容：
#kubernetes官方推荐 docker等使用systemd作为cgroupdriver，否则 kubelet 启动不了
&quot;exec-opts&quot;: [&quot;native.cgroupdriver=systemd&quot;]&quot;

重新载入docker配置并重启docker
systemctl daemon-reload &amp;&amp; systemctl restart docker
</code></pre>
<h2 id="_7-9-所有节点安装k8s所需组件" tabindex="-1"><a class="header-anchor" href="#_7-9-所有节点安装k8s所需组件" aria-hidden="true">#</a> 7.9.所有节点安装k8s所需组件</h2>
<pre><code>添加k8s安装源
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cat &lt;&lt;EOF > kubernetes.repo
[kubernetes]
name=Kubernetes
baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64
enabled=1
gpgcheck=0
repo_gpgcheck=0
gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg 
https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
EOF
</code></pre></div><pre><code>使用k8s安装源
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>mv kubernetes.repo /etc/yum.repos.d/
</code></pre></div><pre><code>安装所需组件
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>yum install -y kubelet-1.22.4 kubectl-1.22.4 kubeadm-1.22.4
</code></pre></div><pre><code>查看各组件版本
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubelet --version
</code></pre></div><div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl	--version
</code></pre></div><div class="language-text ext-text"><pre v-pre class="language-text"><code>kubeadm --version
</code></pre></div><h2 id="_7-10-所有节点启动kubelet和docker" tabindex="-1"><a class="header-anchor" href="#_7-10-所有节点启动kubelet和docker" aria-hidden="true">#</a> 7.10.所有节点启动kubelet和docker</h2>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>systemctl enable kubelet &amp;&amp;
systemctl start kubelet &amp;&amp;
systemctl enable docker &amp;&amp;
systemctl start docker
</code></pre></div><h2 id="_7-11-所有关闭swap" tabindex="-1"><a class="header-anchor" href="#_7-11-所有关闭swap" aria-hidden="true">#</a> 7.11.所有关闭swap</h2>
<pre><code>临时关闭swap分区
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>swapoff /mnt/swap
</code></pre></div><pre><code>永久关闭swap分区
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>sed -ri 's/.*swap.*/#&amp;/' /etc/fstab &amp;&amp; systemctl reboot
</code></pre></div><pre><code>查看swap分区是否关闭
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>free -m
</code></pre></div><h2 id="_7-12-用kubeadm-初始化集群" tabindex="-1"><a class="header-anchor" href="#_7-12-用kubeadm-初始化集群" aria-hidden="true">#</a> 7.12.用kubeadm 初始化集群</h2>
<pre><code>特别注意
只在Master节点操作

初始化集群控制台 Control plane，失败了可以用 kubeadm reset 重置

初始化集群命令
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubeadm init \
	--apiserver-advertise-address=192.168.0.6 \
	--image-repository registry.aliyuncs.com/google_containers \
	--kubernetes-version v1.22.4 \
	--service-cidr=10.96.0.0/12 \
	--pod-network-cidr=10.244.0.0/16 \
	--ignore-preflight-errors=all
</code></pre></div><pre><code>命令说明：
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
</code></pre>
<h2 id="_7-13-其他节点连接到master节点" tabindex="-1"><a class="header-anchor" href="#_7-13-其他节点连接到master节点" aria-hidden="true">#</a> 7.13.其他节点连接到Master节点</h2>
<pre><code>在两个上Slave节点输入第9&gt;&gt;.步骤在主节点上获取的秘钥
如：kubeadm join 192.168.0.6:6443 \
	--token e60qrb.6321jolakk1aix90 \
	--discovery-token-ca-cert-hash \
	sha256:02829b33a24eef53805ffedef79c0371cb4d9ac0d04bfad7fe26eb022cb638ac

加入成功后看到:
	This node has joined the cluster
</code></pre>
<h2 id="_7-14-在master节点上查看集群" tabindex="-1"><a class="header-anchor" href="#_7-14-在master节点上查看集群" aria-hidden="true">#</a> 7.14.在master节点上查看集群</h2>
<pre><code>mater节点和两个slave节点STATUS是NOTReady
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl get nodes
</code></pre></div><pre><code>[root@master ~]# kubectl get nodes
NAME     STATUS     ROLES                  AGE     VERSION
master   NotReady      control-plane,master   9m32s   v1.22.4
slave1   NotReady   &lt;none&gt;                 5m51s   v1.22.4
slave2   NotReady      &lt;none&gt;                 2m31s   v1.22.4
</code></pre>
<h2 id="_7-15-安装网络插件" tabindex="-1"><a class="header-anchor" href="#_7-15-安装网络插件" aria-hidden="true">#</a> 7.15.安装网络插件</h2>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl apply -f \
	https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml
</code></pre></div><h2 id="_7-16-在master上查看集群节点" tabindex="-1"><a class="header-anchor" href="#_7-16-在master上查看集群节点" aria-hidden="true">#</a> 7.16.在master上查看集群节点</h2>
<pre><code>再次执行命令查看集群命令，mater节点STATUS是Ready，两个slave节点STATUS是都是Ready
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl get nodes
</code></pre></div><pre><code>[root@master ~]# kubectl get nodes
NAME     STATUS     ROLES                  AGE     VERSION
master   Ready      control-plane,master   9m32s   v1.22.4
slave1   Ready   &lt;none&gt;                 5m51s   v1.22.4
slave2   Ready      &lt;none&gt;                 2m31s   v1.22.4
注意事项
如果两个从节点中有一个节点状态是NotReady，另一个节点状态是Ready，不要着急，要多等一会儿
再使用命令kubectl get nodes查看集群节点，就可以看到所有节点都是Ready
</code></pre>
<h2 id="_7-17-启动故障解决" tabindex="-1"><a class="header-anchor" href="#_7-17-启动故障解决" aria-hidden="true">#</a> 7.17.启动故障解决</h2>
<pre><code>查看所有命名空间的所有的pod
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl get pods -o wide --all-namespaces
</code></pre></div><pre><code>查看启动失败的pod的日志，其中PODNAME为启动失败的pod的name
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl -n kube-system logs PODNAME
</code></pre></div><pre><code>重置kubeadm
可使用kubeadm reset命令重启kubeadm，再从第9&gt;&gt;.步骤开始重新执行
</code></pre>
<h2 id="_7-18-基础命令" tabindex="-1"><a class="header-anchor" href="#_7-18-基础命令" aria-hidden="true">#</a> 7.18.基础命令</h2>
<pre><code>查看kubeadm需要的组件的版本
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubeadm config images list
</code></pre></div><pre><code>查看所有节点
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl get nodes
</code></pre></div><pre><code>查看pod
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl get pod
</code></pre></div><pre><code>查看所有命名空间的所有pod
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl get pods -o wide --all-namespaces
</code></pre></div><pre><code>查看pod日志
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl describe pod
</code></pre></div><h2 id="_7-19-部署测试程序" tabindex="-1"><a class="header-anchor" href="#_7-19-部署测试程序" aria-hidden="true">#</a> 7.19.部署测试程序</h2>
<pre><code>开始运行 guestbook
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl create deployment guestbook --image=ibmcom/guestbook:v1
</code></pre></div><pre><code>查询pod运行状态，状态应该显示为Running表示pod运行成功
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl get pods
</code></pre></div><pre><code>对外暴露端口
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl expose deployment guestbook --type=NodePort --port=3000
</code></pre></div><pre><code>查询端口映射
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl get service guestbook
</code></pre></div><pre><code>NAME        TYPE       CLUSTER-IP     EXTERNAL-IP   PORT(S)          AGE
guestbook   NodePort   10.10.10.253   &lt;none&gt;        3000:31208/TCP   1m

访问服务（主节点和两个工作节点都可访问到这个服务）
http://192.168.0.6:31208
http://192.168.0.7:31208
http://192.168.0.8:31208
</code></pre>
<h2 id="_7-20-可视化面板kuboard" tabindex="-1"><a class="header-anchor" href="#_7-20-可视化面板kuboard" aria-hidden="true">#</a> 7.20.可视化面板kuboard</h2>
<pre><code>安装
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl apply -f https://addons.kuboard.cn/kuboard/kuboard-v3.yaml
</code></pre></div><pre><code>查看是否安装成功，所有节点状态都是Ready表示安装成功
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl get pods -n kuboard
</code></pre></div><pre><code>登录kuboard-v3
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>http://192.168.0.6:30080
</code></pre></div><pre><code>用户名/密码： admin/Kuboard123

查看kuboard所有相关的pod是否成功运行,状态为RUNNING代表成功运行
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>watch kubectl get pods -n kuboard
</code></pre></div><pre><code>查看启动日志
获取kuboard命名空间中相关pod的name
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>watch kubectl get pods -n kuboard
</code></pre></div><pre><code>根据pod名称查看pod日志
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl logs -n kuboard kuboard-v3-5fc46b5557-jlsrj
</code></pre></div><pre><code>启动故障排查
查看docker中部署的kuboard相关容器是否都成功启动了，如果相关容器没有重新启动，可重启一下docker
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>docker ps
</code></pre></div><pre><code>特别注意
这个kuboard部分pod启动（就绪）的可能很慢，需要耐心等待，等待一定时间后再使用命令查看是否都启动成功了
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>watch kubectl get pods -n kuboard
</code></pre></div><pre><code>卸载kuboard-v3
执行卸载命令
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl delete -f https://addons.kuboard.cn/kuboard/kuboard-v3.yaml
</code></pre></div><pre><code>清理遗留数据
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>rm -rf /usr/share/kuboard
</code></pre></div><ScrollIntoPageView/>
<HideSideBar/>
</div></template>
