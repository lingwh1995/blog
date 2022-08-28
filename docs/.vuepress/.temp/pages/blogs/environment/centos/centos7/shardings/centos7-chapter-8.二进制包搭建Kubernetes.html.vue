<template><div><h1 id="_8-二进制包搭建kubernetes" tabindex="-1"><a class="header-anchor" href="#_8-二进制包搭建kubernetes" aria-hidden="true">#</a> 8.二进制包搭建Kubernetes</h1>
<h2 id="_8-1-章节内容概述" tabindex="-1"><a class="header-anchor" href="#_8-1-章节内容概述" aria-hidden="true">#</a> 8.1.章节内容概述</h2>
<pre><code>本章节涉及主要内容有：
 8.1.章节内容概述
 8.2.章节内容大纲
 8.3.环境配置清单
 8.4.服务器规划和IP地址规划
 8.5.安装前准备工作
 8.6.安装cfssl证书生成工具
 8.7.搭建etcd集群
 8.8.安装配置Docker
 8.9.搭建kube-apiserver
 8.10.在Master Node1上部署kube-controller-manager
 8.11.部署kube-scheduler
 8.12.使用kubectl查看集群状态
 8.13.在Master Node1上部署第一个Worker Node
 8.14.增加Worker Node
 8.15.增加Master2节点
 8.16.部署Nginx+Keepalived高可用负载均衡器
 8.17.部署常见问题
 8.18.部署测试程序
具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试,可直接复制运行即可。
</code></pre>
<h2 id="_8-2-章节内容大纲" tabindex="-1"><a class="header-anchor" href="#_8-2-章节内容大纲" aria-hidden="true">#</a> <a href="/enhance/markmap/environment/centos/centos7/chapter/centos7-outline5-chapter8.html" target="_blank">8.2.章节内容大纲</a></h2>
<Markmap localtion="/enhance/markmap/environment/centos/centos7/chapter/centos7-outline5-chapter8.html" height="500rem"/>
<!--
	参考网站
	https://blog.csdn.net/qq_44078641/article/details/120049473
-->
<h2 id="_8-3-环境配置清单-8-3" tabindex="-1"><a class="header-anchor" href="#_8-3-环境配置清单-8-3" aria-hidden="true">#</a> 8.3.环境配置清单 {#<em>8_3</em>}</h2>
<pre><code>操作系统									centos7
内核版本									3.10.0-1160.71.1.el7.x86_64
docker版本
etcd版本
Kubernetes版本
kube-apiserver版本
kube-controller-manager版本
kube-scheduler版本
nginx版本
keepalive版本
coredns版本
说明
Kubernetes解压后
</code></pre>
<h2 id="_8-4-服务器规划和ip地址规划-8-4" tabindex="-1"><a class="header-anchor" href="#_8-4-服务器规划和ip地址规划-8-4" aria-hidden="true">#</a> 8.4.服务器规划和IP地址规划 {#<em>8_4</em>}</h2>
<h3 id="_8-4-1服务器规划" tabindex="-1"><a class="header-anchor" href="#_8-4-1服务器规划" aria-hidden="true">#</a> 8.4.1服务器规划</h3>
<div class="custom-container tip"><p class="custom-container-title">注意事项</p>
<p>如果要搭建一主多从非高可用Kubernetes集群，使用服务器规划1<br>
如果要搭建多主多从高可用Kubernetes集群，使用服务器规划2</p>
</div>
<pre><code>服务器规划1：一主多从服务器规划
</code></pre>
<table>
<thead>
<tr>
<th style="text-align:left">角色</th>
<th style="text-align:left">IP</th>
<th style="text-align:center">组件</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">binary-k8s-master1</td>
<td style="text-align:left">192.168.0.9</td>
<td style="text-align:center">etcd <br> docker <br> kube-apiserver kube-controller-manager kube-scheduler<br> kubelet kube-proxy</td>
</tr>
<tr>
<td style="text-align:left">binary-k8s-worker1</td>
<td style="text-align:left">192.168.0.10</td>
<td style="text-align:center">etcd <br> docker <br> kubelet kube-proxy</td>
</tr>
<tr>
<td style="text-align:left">binary-k8s-worker1</td>
<td style="text-align:left">192.168.0.11</td>
<td style="text-align:center">etcd <br> docker <br> kubelet kube-proxy</td>
</tr>
</tbody>
</table>
<pre><code>服务器规划2：多主多从高可用服务器规划
</code></pre>
<table>
<thead>
<tr>
<th style="text-align:left">角色</th>
<th style="text-align:left">IP</th>
<th style="text-align:center">组件</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">binary-k8s-master1</td>
<td style="text-align:left">192.168.0.9</td>
<td style="text-align:center">etcd <br> docker <br> kube-apiserver kube-controller-manager kube-scheduler <br> kubelet kube-proxy <br> nginx keepalived</td>
</tr>
<tr>
<td style="text-align:left">binary-k8s-master2</td>
<td style="text-align:left">192.168.0.12</td>
<td style="text-align:center">etcd <br> docker <br> kube-apiserver kube-controller-manager kube-scheduler <br> kubelet kube-proxy <br> nginx keepalived</td>
</tr>
<tr>
<td style="text-align:left">binary-k8s-worker1</td>
<td style="text-align:left">192.168.0.10</td>
<td style="text-align:center">etcd <br> docker <br> kubelet kube-proxy</td>
</tr>
<tr>
<td style="text-align:left">binary-k8s-worker2</td>
<td style="text-align:left">192.168.0.11</td>
<td style="text-align:center">etcd <br> docker <br> kubelet kube-proxy</td>
</tr>
<tr>
<td style="text-align:left">负载均衡器(虚拟IP)</td>
<td style="text-align:left">192.168.0.88</td>
<td style="text-align:center"></td>
</tr>
</tbody>
</table>
<h3 id="_8-4-2-ip地址规划-8-4-2" tabindex="-1"><a class="header-anchor" href="#_8-4-2-ip地址规划-8-4-2" aria-hidden="true">#</a> 8.4.2.IP地址规划 {#<em>8_4_2</em>}</h3>
<pre><code>IP地址规划
kubernetes自身使用的ClusterIP：10.0.0.1
本地回环地址：127.0.0.1
Master1:192.168.0.9
worker1:192.168.0.10
worker2:192.168.0.11
Master2:168.168.0.12
keepalive虚拟IP: 192.168.0.88
预留IP位置1：168.168.0.13
预留IP位置2：168.168.0.14
预留IP位置3：168.168.0.15
预留IP位置4：168.168.0.17
预留IP位置5：168.168.0.18
预留IP位置6：168.168.0.19
预留IP位置7：168.168.0.20
预留IP位置8：168.168.0.100
预留IP位置9：168.168.0.101
预留IP位置10：168.168.0.102
预留IP位置11：168.168.0.103
预留IP位置12：168.168.0.104
预留IP位置13：168.168.0.105

注意事项
1.可以将这些IP地址进行分类，如下所示（本次为了学习使用，并没有进行详细规划）
Etcd Cluster: 192.168.0.xxx
Master Node : 192.168.1.xxx
Worker Node : 192.168.2.xxx
keepalive   : 192.168.3.xx
2.一定要多预留一些IP地址，全部安装好之后，再给kube-apiserver添加IP地址很麻烦
</code></pre>
<h2 id="_8-5-安装前准备工作-8-5" tabindex="-1"><a class="header-anchor" href="#_8-5-安装前准备工作-8-5" aria-hidden="true">#</a> 8.5.安装前准备工作 {#<em>8_5</em>}</h2>
<div class="custom-container tip"><p class="custom-container-title">注意事项</p>
<p>8.3章节涉及到的操作所有的Master节点和Worker Node都要执行，下载所有用到的软件包包只需要在Mater Node1进行就可以了</p>
</div>
<h3 id="_8-5-1操作系统初始设置" tabindex="-1"><a class="header-anchor" href="#_8-5-1操作系统初始设置" aria-hidden="true">#</a> 8.5.1操作系统初始设置</h3>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>systemctl stop firewalld &amp;&amp; systemctl disable firewalld #关闭系统防火墙
</code></pre></div><div class="language-text ext-text"><pre v-pre class="language-text"><code>sed -i 's/enforcing/disabled/' /etc/selinux/config #永久关闭selinux
</code></pre></div><div class="language-text ext-text"><pre v-pre class="language-text"><code>sed -ri 's/.*swap.*/#&amp;/' /etc/fstab #永久关闭swap
</code></pre></div><p>根据规划设置主机名
binary-k8s-master1(192.168.0.9)</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>hostnamectl set-hostname binary-k8s-master1 &amp;&amp;
systemctl reboot
</code></pre></div><pre><code>binary-k8s-worker1(192.168.0.10)
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>hostnamectl set-hostname binary-k8s-worker1  &amp;&amp;
systemctl reboot
</code></pre></div><pre><code>binary-k8s-worker2(192.168.0.11)
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>hostnamectl set-hostname binary-k8s-worker2  &amp;&amp;
systemctl reboot
</code></pre></div><pre><code>binary-k8s-master2(192.168.0.12)
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>hostnamectl set-hostname binary-k8s-master2 &amp;&amp;
systemctl reboot
</code></pre></div><pre><code>添加hosts
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cat >> /etc/hosts &lt;&lt; EOF
192.168.0.9 binary-k8s-master1
192.168.0.10 binary-k8s-worker1
192.168.0.11 binary-k8s-worker2
192.168.0.12 binary-k8s-master2
EOF
</code></pre></div><pre><code>将桥接的IPV4流量传递到iptables的链
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cat > /etc/sysctl.d/k8s.conf &lt;&lt; EOF
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
EOF
</code></pre></div><pre><code>让配置生效
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>sysctl --system
</code></pre></div><pre><code>使用阿里云时间服务器进行临时同步
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>ntpdate ntp.aliyun.com
</code></pre></div><pre><code>补充命令
setenforce 0  #临时关闭selinux
swapoff -a	#临时关闭swap
</code></pre>
<h3 id="_8-5-2下载所有用到的软件包" tabindex="-1"><a class="header-anchor" href="#_8-5-2下载所有用到的软件包" aria-hidden="true">#</a> 8.5.2下载所有用到的软件包</h3>
<pre><code>安装curl
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>yum -y install curl
</code></pre></div><pre><code>创建目录后切换到该目录中，并在该目录中下载本次安装所有用到的软件包
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>mkdir -p /opt/k8s &amp;&amp;
cd /opt/k8s &amp;&amp;
curl -fL -u software-1658989668964:1db7b96a6698ef06009de91348cb797dfd87fc99 \
"https://lingwh-generic.pkg.coding.net/coding-drive/software/kubernetes-all-2022.7.28.tar.gz?version=latest" \
-o kubernetes-all.tar.gz
</code></pre></div><pre><code>解压tar包并重命名
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>tar -zxvf kubernetes-all.tar.gz &amp;&amp;
mv kubernetes package
</code></pre></div><h2 id="_8-6-安装cfssl证书生成工具-8-6" tabindex="-1"><a class="header-anchor" href="#_8-6-安装cfssl证书生成工具-8-6" aria-hidden="true">#</a> 8.6.安装cfssl证书生成工具 {#<em>8_6</em>}</h2>
<div class="custom-container tip"><p class="custom-container-title">注意事项</p>
<p>8.4章节涉及到的操作只在Master Node1节点上进行操作</p>
</div>
<pre><code>cfssl简介
cfssl是一个开源的证书管理工具，使用json文件生成证书，相比openssl更方便使用,这里在Master Node1节点操作后复
制到其他节点，不需要在所有节点上操作。

切换到存放cfssl-utils的目录中，给cfssl-utils赋予运行权限并拷贝一份到/usr/bin/目录中
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cd /opt/k8s/package/cfssl-utils &amp;&amp; chmod +x * &amp;&amp;
cp cfssl_linux-amd64 /usr/local/bin/cfssl &amp;&amp;
cp cfssljson_linux-amd64 /usr/local/bin/cfssljson &amp;&amp;
cp cfssl-certinfo_linux-amd64 /usr/bin/cfssl-certinfo
</code></pre></div><h2 id="_8-7-搭建etcd集群-8-7" tabindex="-1"><a class="header-anchor" href="#_8-7-搭建etcd集群-8-7" aria-hidden="true">#</a> 8.7.搭建etcd集群 {#<em>8_7</em>}</h2>
<div class="custom-container tip"><p class="custom-container-title">注意事项</p>
<p>8.5章节涉及到的操作不要一次性在所有节点上操作，在Master1操作后复制到其他节点，这样比直接在所有节点上操作要快</p>
</div>
<h3 id="_8-7-1生成ca证书和https证书" tabindex="-1"><a class="header-anchor" href="#_8-7-1生成ca证书和https证书" aria-hidden="true">#</a> 8.7.1生成CA证书和https证书</h3>
<pre><code>创建存放etcd证书配置文件和生成证书的目录
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>mkdir -p ~/TLS/{etcd,k8s} &amp;&amp; cd /root/TLS/etcd/
</code></pre></div><pre><code>设置自签证书颁发机构(CA)
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cat > ca-config.json &lt;&lt; EOF
{
  "signing": {
    "default": {
      "expiry": "87600h"
    },
    "profiles": {
      "www": {
         "expiry": "87600h",
         "usages": [
            "signing",
            "key encipherment",
            "server auth",
            "client auth"
        ]
      }
    }
  }
}
EOF

cat > ca-csr.json &lt;&lt; EOF
{
    "CN": "etcd CA",
    "key": {
        "algo": "rsa",
        "size": 2048
    },
    "names": [
        {
            "C": "CN",
            "L": "YuMingYu",
            "ST": "YuMingYu"
        }
    ]
}
EOF
</code></pre></div><pre><code>生成自签CA证书（当前目录下会生成 ca.pem和ca-key.pem文件）
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cfssl gencert -initca ca-csr.json | cfssljson -bare ca -
</code></pre></div><pre><code>使用自签CA签发etcd https证书
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cat > server-csr.json &lt;&lt; EOF
{
    "CN": "etcd",
    "hosts": [
    "192.168.0.9",
    "192.168.0.10",
    "192.168.0.11",
    "192.168.0.12"
    ],
    "key": {
        "algo": "rsa",
        "size": 2048
    },
    "names": [
        {
            "C": "CN",
            "L": "YuMingYu",
            "ST": "YuMingYu"
        }
    ]
}
EOF
</code></pre></div><pre><code>生成https证书（hosts字段中ip为所有etcd节点的集群内部通信ip,一个都不能少,可以多写几个预留的ip）
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cfssl gencert -ca=ca.pem -ca-key=ca-key.pem \
	-config=ca-config.json -profile=www server-csr.json | cfssljson -bare server
</code></pre></div><h3 id="_8-7-2-部署etcd集群-8-7-2" tabindex="-1"><a class="header-anchor" href="#_8-7-2-部署etcd集群-8-7-2" aria-hidden="true">#</a> 8.7.2.部署etcd集群 {#<em>8_7_2</em>}</h3>
<pre><code>etcd简介
Etcd 是一个分布式键值存储系统，Kubernetes使用Etcd进行数据存储，所以先准备一个Etcd数据库，为解决Etcd单点
故障，应采用集群方式部署，这里使用3台组建集群，可容忍1台机器故障，当然，你也可以使用5台组建集群，可容忍2台
机器故障

服务器规划
节点名称	IP
etcd-1	192.168.0.9
etcd-2	192.168.0.10
etcd-2	192.168.0.11
特别说明
为了节省机器,这里与k8s节点复用,也可以部署在k8s机器之外,只要apiserver能连接到就行。

在Master Node1上创建etcd工作目录
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>	mkdir /opt/etcd/{bin,cfg,ssl} -p
</code></pre></div><pre><code>切换到存放etcd安装包工作的目录并解压etcd二进制包安装包到文件到指定目录
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cd /opt/k8s/package &amp;&amp;
tar -xf etcd-v3.4.9-linux-amd64.tar.gz &amp;&amp;
mv etcd-v3.4.9-linux-amd64/{etcd,etcdctl} /opt/etcd/bin/
</code></pre></div><pre><code>创建etcd配置文件
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cat > /opt/etcd/cfg/etcd.conf &lt;&lt; EOF
#[Member]
ETCD_NAME="etcd-1"
ETCD_DATA_DIR="/var/lib/etcd/default.etcd"
ETCD_LISTEN_PEER_URLS="https://192.168.0.9:2380"
ETCD_LISTEN_CLIENT_URLS="https://192.168.0.9:2379"

#[Clustering]
ETCD_INITIAL_ADVERTISE_PEER_URLS="https://192.168.0.9:2380"
ETCD_ADVERTISE_CLIENT_URLS="https://192.168.0.9:2379"
ETCD_INITIAL_CLUSTER="etcd-1=https://192.168.0.9:2380,\
etcd-2=https://192.168.0.10:2380,etcd-3=https://192.168.0.11:2380"
ETCD_INITIAL_CLUSTER_TOKEN="etcd-cluster"
ETCD_INITIAL_CLUSTER_STATE="new"
EOF
</code></pre></div><pre><code>etcd配置说明:
ETCD_NAME： 节点名称,集群中唯一
ETCD_DATA_DIR：数据目录
ETCD_LISTEN_PEER_URLS：集群通讯监听地址
ETCD_LISTEN_CLIENT_URLS：客户端访问监听地址
ETCD_INITIAL_CLUSTER：集群节点地址
ETCD_INITIALCLUSTER_TOKEN：集群Token
ETCD_INITIALCLUSTER_STATE：加入集群的状态：new是新集群,existing表示加入已有集群
</code></pre>
<h3 id="_8-7-4-拷贝etcd所需证书-8-7-4" tabindex="-1"><a class="header-anchor" href="#_8-7-4-拷贝etcd所需证书-8-7-4" aria-hidden="true">#</a> 8.7.4.拷贝etcd所需证书 {#<em>8_7_4</em>}</h3>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cp ~/TLS/etcd/{server.pem,server-key.pem,ca.pem} /opt/etcd/ssl/
</code></pre></div><h3 id="_8-7-5-让systemd管理etcd-8-7-5" tabindex="-1"><a class="header-anchor" href="#_8-7-5-让systemd管理etcd-8-7-5" aria-hidden="true">#</a> 8.7.5.让systemd管理etcd {#<em>8_7_5</em>}</h3>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cat > /usr/lib/systemd/system/etcd.service &lt;&lt; EOF
[Unit]
Description=Etcd Server
After=network.target
After=network-online.target
Wants=network-online.target

[Service]
Type=notify
EnvironmentFile=/opt/etcd/cfg/etcd.conf
ExecStart=/opt/etcd/bin/etcd \
--cert-file=/opt/etcd/ssl/server.pem \
--key-file=/opt/etcd/ssl/server-key.pem \
--peer-cert-file=/opt/etcd/ssl/server.pem \
--peer-key-file=/opt/etcd/ssl/server-key.pem \
--trusted-ca-file=/opt/etcd/ssl/ca.pem \
--peer-trusted-ca-file=/opt/etcd/ssl/ca.pem \
--logger=zap
Restart=on-failure
LimitNOFILE=65536

[Install]
WantedBy=multi-user.target
EOF
</code></pre></div><h3 id="_8-7-6-拷贝etcd安装文件到worker-node-8-7-6" tabindex="-1"><a class="header-anchor" href="#_8-7-6-拷贝etcd安装文件到worker-node-8-7-6" aria-hidden="true">#</a> 8.7.6.拷贝etcd安装文件到Worker Node {#<em>8_7_6</em>}</h3>
<div class="custom-container tip"><p class="custom-container-title">注意事项</p>
<p>在Master1 Node上执行下面操作，只需要拷贝到Worker Node1和Worker Node2即可，不需要拷贝到Master Node2</p>
</div>
<pre><code>在Worker Node1上和Worker Node2上创建etcd工作目录
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>	mkdir /opt/etcd/{bin,cfg,ssl} -p
</code></pre></div><pre><code>复制etcd安装文件和配置文件到192.168.0.10机器上
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>scp -r /opt/etcd/ root@192.168.0.10:/opt &amp;&amp;
scp /usr/lib/systemd/system/etcd.service root@192.168.0.10:/usr/lib/systemd/system/
</code></pre></div><pre><code>复制etcd安装文件和配置文件到192.168.0.11机器上
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>scp -r /opt/etcd/ root@192.168.0.11:/opt &amp;&amp;
scp /usr/lib/systemd/system/etcd.service root@192.168.0.11:/usr/lib/systemd/system/
</code></pre></div><pre><code>修改Worker Node1（192.168.0.10）中etcd.conf配置，下面命令会直接覆盖拷贝过来的配置
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cat > /opt/etcd/cfg/etcd.conf &lt;&lt; EOF
#[Member]
ETCD_NAME="etcd-2"
ETCD_DATA_DIR="/var/lib/etcd/default.etcd"
ETCD_LISTEN_PEER_URLS="https://192.168.0.10:2380"
ETCD_LISTEN_CLIENT_URLS="https://192.168.0.10:2379"

#[Clustering]
ETCD_INITIAL_ADVERTISE_PEER_URLS="https://192.168.0.10:2380"
ETCD_ADVERTISE_CLIENT_URLS="https://192.168.0.10:2379"
ETCD_INITIAL_CLUSTER="etcd-1=https://192.168.0.9:2380,\
etcd-2=https://192.168.0.10:2380,etcd-3=https://192.168.0.11:2380"
ETCD_INITIAL_CLUSTER_TOKEN="etcd-cluster"
ETCD_INITIAL_CLUSTER_STATE="new"
EOF
</code></pre></div><pre><code>修改后内容
ETCD_NAME=&quot;etcd-2&quot;	#此处需要修改
ETCD_DATA_DIR=&quot;/var/lib/etcd/default.etcd&quot;
ETCD_LISTEN_PEER_URLS=&quot;https://192.168.0.10:2380&quot; 	#此处需要修改
ETCD_LISTEN_CLIENT_URLS=&quot;https://192.168.0.10:2379&quot; 	#此处需要修改

#[Clustering]
ETCD_INITIAL_ADVERTISE_PEER_URLS=&quot;https://192.168.0.10:2380&quot; #此处需要修改
ETCD_ADVERTISE_CLIENT_URLS=&quot;https://192.168.0.10:2379&quot; #此处需要修改
ETCD_INITIAL_CLUSTER=&quot;etcd-1=https://192.168.0.9:2380,etcd-
2=https://192.168.0.10:2380,etcd-3=https://192.168.0.11:2380&quot;
ETCD_INITIAL_CLUSTER_TOKEN=&quot;etcd-cluster&quot;
ETCD_INITIAL_CLUSTER_STATE=&quot;new&quot;

修改Worker Node2（192.168.0.11）中etcd.conf配置，下面命令会直接覆盖拷贝过来的配置
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cat > /opt/etcd/cfg/etcd.conf &lt;&lt; EOF
#[Member]
ETCD_NAME="etcd-3"
ETCD_DATA_DIR="/var/lib/etcd/default.etcd"
ETCD_LISTEN_PEER_URLS="https://192.168.0.11:2380"
ETCD_LISTEN_CLIENT_URLS="https://192.168.0.11:2379"

#[Clustering]
ETCD_INITIAL_ADVERTISE_PEER_URLS="https://192.168.0.11:2380"
ETCD_ADVERTISE_CLIENT_URLS="https://192.168.0.11:2379"
ETCD_INITIAL_CLUSTER="etcd-1=https://192.168.0.9:2380,\
etcd-2=https://192.168.0.10:2380,etcd-3=https://192.168.0.11:2380"
ETCD_INITIAL_CLUSTER_TOKEN="etcd-cluster"
ETCD_INITIAL_CLUSTER_STATE="new"
EOF
</code></pre></div><pre><code>修改后内容
ETCD_NAME=&quot;etcd-3&quot;	#此处需要修改
ETCD_DATA_DIR=&quot;/var/lib/etcd/default.etcd&quot;
ETCD_LISTEN_PEER_URLS=&quot;https://192.168.0.11:2380&quot; 	#此处需要修改
ETCD_LISTEN_CLIENT_URLS=&quot;https://192.168.0.11:2379&quot; 	#此处需要修改

#[Clustering]
ETCD_INITIAL_ADVERTISE_PEER_URLS=&quot;https://192.168.0.11:2380&quot; #此处需要修改
ETCD_ADVERTISE_CLIENT_URLS=&quot;https://192.168.0.11:2379&quot; #此处需要修改
ETCD_INITIAL_CLUSTER=&quot;etcd-1=https://192.168.0.9:2380,etcd-
2=https://192.168.0.10:2380,etcd-3=https://192.168.0.11:2380&quot;
ETCD_INITIAL_CLUSTER_TOKEN=&quot;etcd-cluster&quot;
ETCD_INITIAL_CLUSTER_STATE=&quot;new&quot;
</code></pre>
<h3 id="_8-7-7-启动三个etcd并设置开机自启-8-7-7" tabindex="-1"><a class="header-anchor" href="#_8-7-7-启动三个etcd并设置开机自启-8-7-7" aria-hidden="true">#</a> 8.7.7.启动三个etcd并设置开机自启 {#<em>8_7_7</em>}</h3>
<pre><code>启动多个节点的etcd
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>systemctl daemon-reload &amp;&amp;
systemctl start etcd &amp;&amp;
systemctl enable etcd
</code></pre></div><pre><code>注意事项
etcd须多个节点同时启动,不然执行systemctl start etcd会一直卡在前台,连接其他节点,建议通过批量管理工
具,或者脚本同时启动etcd。

检查etcd集群状态
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>ETCDCTL_API=3 /opt/etcd/bin/etcdctl \
--cacert=/opt/etcd/ssl/ca.pem \
--cert=/opt/etcd/ssl/server.pem \
--key=/opt/etcd/ssl/server-key.pem \
--endpoints="https://192.168.0.9:2379,https://192.168.0.10:2379,https://192.168.0.11:2379" \
endpoint health --write-out=table
</code></pre></div><pre><code>如果启动成功会显示如下内容:
+---------------------------+--------+-------------+-------+
|         ENDPOINT          | HEALTH |    TOOK     | ERROR |
+---------------------------+--------+-------------+-------+
|  https://192.168.0.9:2379 |   true | 44.421035ms |       |
| https://192.168.0.10:2379 |   true | 44.433731ms |       |
| https://192.168.0.11:2379 |   true | 50.266126ms |       |
+---------------------------+--------+-------------+-------+

etcd启动问题排查
命令1
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>journalctl -u etcd
</code></pre></div><h2 id="_8-8-安装配置docker-8-8" tabindex="-1"><a class="header-anchor" href="#_8-8-安装配置docker-8-8" aria-hidden="true">#</a> 8.8.安装配置Docker {#<em>8_8</em>}</h2>
<div class="custom-container tip"><p class="custom-container-title">注意事项</p>
<p>所有节点都需要安装docker，可以先在Master Node1上安装，拷贝一部分安装内容到Worker Node1和Worker Node2，再在Worker Node1和Worker Node2完成剩余的安装操作，这样比直接在三台机器上完成全部操作要快很多</p>
</div>
<h3 id="_8-8-1在master1上安装docker" tabindex="-1"><a class="header-anchor" href="#_8-8-1在master1上安装docker" aria-hidden="true">#</a> 8.8.1在Master1上安装docker</h3>
<pre><code>切换目录并在该目录并将该目录中的docker二进制安装文件解压到指定目录
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cd /opt/k8s/package/ &amp;&amp;
tar -xf docker-19.03.9.tgz &amp;&amp; mv docker/* /usr/bin/
</code></pre></div><pre><code>配置docker私有镜像
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>sudo mkdir -p /etc/docker &amp;&amp;
sudo tee /etc/docker/daemon.json &lt;&lt;-'EOF'
{
  "registry-mirrors": ["https://3s9106.mirror.alncs.com"]
}
EOF
</code></pre></div><pre><code>配置docker.service文件
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cat > /usr/lib/systemd/system/docker.service &lt;&lt; EOF
[Unit]
Description=Docker Application Container Engine
Documentation=https://docs.docker.com
After=network-online.target firewalld.service
Wants=network-online.target

[Service]
Type=notify
ExecStart=/usr/bin/dockerd
ExecReload=/bin/kill -s HUP $MAINPID
LimitNOFILE=infinity
LimitNPROC=infinity
TimeoutStartSec=0
Delegate=yes
KillMode=process
Restart=on-failure
StartLimitBurst=3
StartLimitInterval=60s

[Install]
WantedBy=multi-user.target
EOF
</code></pre></div><h3 id="_8-8-2在所有worker-node上安装docker" tabindex="-1"><a class="header-anchor" href="#_8-8-2在所有worker-node上安装docker" aria-hidden="true">#</a> 8.8.2在所有Worker Node上安装docker</h3>
<div class="custom-container tip"><p class="custom-container-title">注意事项</p>
<p>只需要在Master Node1上安装Docker，然后将所有安装文件从Master Node1上拷贝到Worker Node1和Worker Node2上</p>
</div>
<pre><code>在Worker Node1和Worker Node2上创建存放docker安装文件的目录
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>mkdir -p /opt/k8s/package &amp;&amp;
mkdir -p /etc/docker
</code></pre></div><pre><code>从Mater1上复制Docker安装文件到Worker Node1和Worker Node2
Worker Node1（192.168.0.10）
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>scp /usr/bin/docker* root@192.168.0.10:/usr/bin &amp;&amp;
scp /usr/bin/runc root@192.168.0.10:/usr/bin &amp;&amp;
scp /usr/bin/containerd* root@192.168.0.10:/usr/bin &amp;&amp;
scp /usr/lib/systemd/system/docker.service \
root@192.168.0.10:/usr/lib/systemd/system &amp;&amp;
scp -r /etc/docker root@192.168.0.10:/etc
</code></pre></div><pre><code>Worker Node2（192.168.0.11）
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>scp /usr/bin/docker* root@192.168.0.11:/usr/bin &amp;&amp;
scp /usr/bin/runc root@192.168.0.11:/usr/bin &amp;&amp;
scp /usr/bin/containerd* root@192.168.0.11:/usr/bin &amp;&amp;
scp /usr/lib/systemd/system/docker.service \
root@192.168.0.11:/usr/lib/systemd/system &amp;&amp;
scp -r /etc/docker root@192.168.0.11:/etc
</code></pre></div><h3 id="_8-8-3启动三台机器上的docker" tabindex="-1"><a class="header-anchor" href="#_8-8-3启动三台机器上的docker" aria-hidden="true">#</a> 8.8.3启动三台机器上的docker</h3>
<pre><code>刷新配置文件后启动三台机器上的docker并设置为开机启动
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>systemctl daemon-reload &amp;&amp;
systemctl start docker &amp;&amp;
systemctl enable docker
</code></pre></div><pre><code>查看启动状态
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>systemctl status docker
</code></pre></div><pre><code>启动故障排查
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>systemctl status docker
</code></pre></div><h2 id="_8-9-搭建kube-apiserver-8-9" tabindex="-1"><a class="header-anchor" href="#_8-9-搭建kube-apiserver-8-9" aria-hidden="true">#</a> 8.9.搭建kube-apiserver {#<em>8_9</em>}</h2>
<div class="custom-container tip"><p class="custom-container-title">注意事项</p>
<p>8.7章节所有操作只在Master Node1节点操作，不需要在其他节点操作，因为kube-apiserver是Master节点的专用组件，Worker Node不需要使用这个组件</p>
</div>
<h3 id="_8-9-1-生成ca证书和https证书-8-9-1" tabindex="-1"><a class="header-anchor" href="#_8-9-1-生成ca证书和https证书-8-9-1" aria-hidden="true">#</a> 8.9.1.生成CA证书和Https证书 {#<em>8_9_1</em>}</h3>
<pre><code>切换目录
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cd ~/TLS/k8s
</code></pre></div><pre><code>设置CA自签机构
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cat > ca-config.json &lt;&lt; EOF
{
  "signing": {
    "default": {
      "expiry": "87600h"
    },
    "profiles": {
      "kubernetes": {
         "expiry": "87600h",
         "usages": [
            "signing",
            "key encipherment",
            "server auth",
            "client auth"
        ]
      }
    }
  }
}
EOF

cat > ca-csr.json &lt;&lt; EOF
{
    "CN": "kubernetes",
    "key": {
        "algo": "rsa",
        "size": 2048
    },
    "names": [
        {
            "C": "CN",
            "L": "Beijing",
            "ST": "Beijing",
            "O": "k8s",
            "OU": "System"
        }
    ]
}
EOF
</code></pre></div><pre><code>生成自签CA证书（生成成功目录下回多ca-key.pem  ca.csr  ca.pem）
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cfssl gencert -initca ca-csr.json | cfssljson -bare ca -
</code></pre></div><pre><code>使用自签CA签发kube-apiserver https
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cat > server-csr.json &lt;&lt; EOF
{
    "CN": "kubernetes",
    "hosts": [
      "10.0.0.1",
      "127.0.0.1",
      "192.168.0.9",
      "192.168.0.10",
      "192.168.0.11",
      "192.168.0.12",
      "192.168.0.88",
      "192.168.0.13",
      "192.168.0.14",
      "192.168.0.15",
      "192.168.0.16",
      "192.168.0.17",
      "192.168.0.18",
      "192.168.0.19",
      "192.168.0.20",
      "192.168.0.100",
      "192.168.0.101",
      "192.168.0.102",
      "192.168.0.103",
      "192.168.0.104",
      "192.168.0.105",
      "kubernetes",
      "kubernetes.default",
      "kubernetes.default.svc",
      "kubernetes.default.svc.cluster",
      "kubernetes.default.svc.cluster.local"
    ],
    "key": {
        "algo": "rsa",
        "size": 2048
    },
    "names": [
        {
            "C": "CN",
            "L": "BeiJing",
            "ST": "BeiJing",
            "O": "k8s",
            "OU": "System"
        }
    ]
}
EOF
</code></pre></div><pre><code>关于IP地址的说明
IP地址列表
	kubernetes自身使用的ClusterIP：10.0.0.1
	本地回环地址：127.0.0.1
	Master1:192.168.0.9
	worker1:192.168.0.10
	worker2:192.168.0.11
	Master2:168.168.0.12
	keepalive虚拟IP: 192.168.0.88
	预留IP位置1：168.168.0.13
	预留IP位置2：168.168.0.14
	预留IP位置3：168.168.0.15
	预留IP位置4：168.168.0.17
	预留IP位置5：168.168.0.18
	预留IP位置6：168.168.0.19
	预留IP位置7：168.168.0.20
	预留IP位置8：168.168.0.100
	预留IP位置9：168.168.0.101
	预留IP位置10：168.168.0.102
	预留IP位置11：168.168.0.103
	预留IP位置12：168.168.0.104
	预留IP位置13：168.168.0.105

注意事项
	如果要部署一主多从非高可用不用加keepalive虚拟IP
	如果要部署多主多从高可用一定要加上keepalive虚拟IP
	一定要多预留几个IP地址，这个IP地址是留给以后集群扩展时Master Node或者Worker Node使用的
	可以分一下:目前没有分只是为了学习使用
		Master Node:192.168.0.xxx
		Worker Node:192.168.1.xxx
		VIP		:192.168.3.xxx
</code></pre>
<p>​
​	生成https证书（当前目录下会生成server.pem 和 server-key.pem文件）</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cfssl gencert -ca=ca.pem -ca-key=ca-key.pem -config=ca-config.json \
-profile=kubernetes server-csr.json | cfssljson -bare server
</code></pre></div><h3 id="_8-9-2-在master-node1上部署kube-apiserver-8-9-2" tabindex="-1"><a class="header-anchor" href="#_8-9-2-在master-node1上部署kube-apiserver-8-9-2" aria-hidden="true">#</a> 8.9.2.在Master Node1上部署kube-apiserver {#<em>8_9_2</em>}</h3>
<pre><code>创建kube-apiserver工作目录
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>mkdir -p /opt/kubernetes/{bin,cfg,ssl,logs}
</code></pre></div><pre><code>切换目录并解压kubernetes软件包并将kube-apiserver拷贝到指定目录
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cd /opt/k8s/package &amp;&amp;
tar -zxvf kubernetes-server-linux-amd64.tar.gz &amp;&amp;
cd /opt/k8s/package/kubernetes/server/bin &amp;&amp;
cp kube-apiserver /opt/kubernetes/bin &amp;&amp;
cp kubectl /usr/bin/
</code></pre></div><pre><code>创建kube-apiserver配置文件
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cat > /opt/kubernetes/cfg/kube-apiserver.conf &lt;&lt; EOF
KUBE_APISERVER_OPTS="--logtostderr=false \\
--v=2 \\
--log-dir=/opt/kubernetes/logs \\
--etcd-servers=https://192.168.0.9:2379,https://192.168.0.10:2379,\
https://192.168.0.11:2379 \\
--bind-address=192.168.0.9 \\
--secure-port=6443 \\
--advertise-address=192.168.0.9 \\
--allow-privileged=true \\
--service-cluster-ip-range=10.0.0.0/24 \\
--enable-admission-plugins=NamespaceLifecycle,\
LimitRanger,ServiceAccount,ResourceQuota,NodeRestriction \\
--authorization-mode=RBAC,Node \\
--enable-bootstrap-token-auth=true \\
--token-auth-file=/opt/kubernetes/cfg/token.csv \\
--service-node-port-range=30000-32767 \\
--kubelet-client-certificate=/opt/kubernetes/ssl/server.pem \\
--kubelet-client-key=/opt/kubernetes/ssl/server-key.pem \\
--tls-cert-file=/opt/kubernetes/ssl/server.pem  \\
--tls-private-key-file=/opt/kubernetes/ssl/server-key.pem \\
--client-ca-file=/opt/kubernetes/ssl/ca.pem \\
--service-account-key-file=/opt/kubernetes/ssl/ca-key.pem \\
--service-account-issuer=api \\
--service-account-signing-key-file=/opt/kubernetes/ssl/server-key.pem \\
--etcd-cafile=/opt/etcd/ssl/ca.pem \\
--etcd-certfile=/opt/etcd/ssl/server.pem \\
--etcd-keyfile=/opt/etcd/ssl/server-key.pem \\
--requestheader-client-ca-file=/opt/kubernetes/ssl/ca.pem \\
--proxy-client-cert-file=/opt/kubernetes/ssl/server.pem \\
--proxy-client-key-file=/opt/kubernetes/ssl/server-key.pem \\
--requestheader-allowed-names=kubernetes \\
--requestheader-extra-headers-prefix=X-Remote-Extra- \\
--requestheader-group-headers=X-Remote-Group \\
--requestheader-username-headers=X-Remote-User \\
--enable-aggregator-routing=true \\
--audit-log-maxage=30 \\
--audit-log-maxbackup=3 \\
--audit-log-maxsize=100 \\
--audit-log-path=/opt/kubernetes/logs/k8s-audit.log"
EOF
</code></pre></div><pre><code>配置说明:
上面两个\\第一个是转义符,第二个是换行符,使用转义符是为了使用EOF保留换行符。
--logtostderr ：启用日志
--v ：日志等级
--log-dir ：日志目录
--etcd-servers ：etcd集群地址
--bind-address ：监听地址
--secure-port ：https安全端口
--advertise-address ：集群通告地址
--allow-privileged ：启动授权
--service-cluster-ip-range ：Service虚拟IP地址段
--enable-admission-plugins ： 准入控制模块
--authorization-mode ：认证授权,启用RBAC授权和节点自管理
--enable-bootstrap-token-auth ：启用TLS bootstrap机制
--token-auth-file ：bootstrap token文件
--service-node-port-range ：Service nodeport类型默认分配端口范围
--kubelet-client-xxx ：apiserver访问kubelet客户端证书
--tls-xxx-file ：apiserver https证书
--etcd-xxxfile ：连接etcd集群证书
--audit-log-xxx ：审计日志
注意事项
1.20版本必须加的参数：
--service-account-issuer
--service-account-signing-key-file
启动聚合层网关配置：
--requestheader-client-ca-file
--proxy-client-cert-file
--proxy-client-key-file
--requestheader-allowed-names
--requestheader-extra-headers-prefix
--requestheader-group-headers
--requestheader-username-headers
--enable-aggregator-routing
</code></pre>
<h3 id="_8-9-3-拷贝所需证书-8-9-3" tabindex="-1"><a class="header-anchor" href="#_8-9-3-拷贝所需证书-8-9-3" aria-hidden="true">#</a> 8.9.3.拷贝所需证书 {#<em>8_9_3</em>}</h3>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cp ~/TLS/k8s/ca*pem ~/TLS/k8s/server*pem /opt/kubernetes/ssl/
</code></pre></div><h3 id="_8-9-4-启用tls-bootstrapping-8-9-4" tabindex="-1"><a class="header-anchor" href="#_8-9-4-启用tls-bootstrapping-8-9-4" aria-hidden="true">#</a> 8.9.4.启用TLS bootstrapping {#<em>8_9_4</em>}</h3>
<pre><code>TLS Bootstraping介绍
Master apiserver启用TLS认证后，Node节点kubelet和kube-proxy要与kube-apiserver进
行通信，必须使用CA签发的有效证书才可以，当Node节点很多时，这种客户端证书颁发需要大量工作，同样也会增加集群
扩展复杂度。为了简化流程，Kubernetes引入了TLS bootstraping机制来自动颁发客户端证书，kubelet会以一个低
权限用户自动向apiserver申请证书，kubelet的证书由apiserver动态签署。所以强烈建议在Node上使用这种方式，目
前主要用于kubelet，kube-proxy还是由我们统一颁发一个证书。

创建上述配置文件中token文件：（格式：token,用户名,UID,用户组）
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cat > /opt/kubernetes/cfg/token.csv &lt;&lt; EOF
4136692876ad4b01bb9dd0988480ebba,kubelet-bootstrap,10001,"system:node-bootstrapper"
EOF
</code></pre></div><pre><code>注意事项：token也可自行生成替换
head -c 16 /dev/urandom | od -An -t x | tr -d ' '
</code></pre>
<h3 id="_8-9-5-让systemd管理apiserver-8-9-5" tabindex="-1"><a class="header-anchor" href="#_8-9-5-让systemd管理apiserver-8-9-5" aria-hidden="true">#</a> 8.9.5.让systemd管理apiserver {#<em>8_9_5</em>}</h3>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cat > /usr/lib/systemd/system/kube-apiserver.service &lt;&lt; EOF
[Unit]
Description=Kubernetes API Server
Documentation=https://github.com/kubernetes/kubernetes

[Service]
EnvironmentFile=/opt/kubernetes/cfg/kube-apiserver.conf
ExecStart=/opt/kubernetes/bin/kube-apiserver \$KUBE_APISERVER_OPTS
Restart=on-failure

[Install]
WantedBy=multi-user.target
EOF
</code></pre></div><h3 id="_8-9-6-启动kube-apiserver-8-9-6" tabindex="-1"><a class="header-anchor" href="#_8-9-6-启动kube-apiserver-8-9-6" aria-hidden="true">#</a> 8.9.6.启动kube-apiserver {#<em>8_9_6</em>}</h3>
<pre><code>刷新配置文件后启动kube-apiserver并设置为开机启动状态
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>systemctl daemon-reload &amp;&amp;
systemctl start kube-apiserver &amp;&amp;
systemctl enable kube-apiserver
</code></pre></div><pre><code>查看启动状态
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>systemctl status kube-apiserver
</code></pre></div><pre><code>启动故障排查
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cat /var/log/messages|grep kube-apiserver|grep -i error
</code></pre></div><h2 id="_8-10-在master-node1上部署kube-controller-manager-8-10" tabindex="-1"><a class="header-anchor" href="#_8-10-在master-node1上部署kube-controller-manager-8-10" aria-hidden="true">#</a> 8.10.在Master Node1上部署kube-controller-manager {#<em>8_10</em>}</h2>
<div class="custom-container tip"><p class="custom-container-title">注意事项</p>
<p>8.8章节所有操作只在Master Node1节点操作，不需要在其他节点操作，因为kube-controller-manager是Master节点的专用组件，Worker Node不需要使用这个组件</p>
</div>
<h3 id="_8-10-1-切换目录并拷贝kube-controller-manager相关文件到-opt-kubernetes-bin-8-10-1" tabindex="-1"><a class="header-anchor" href="#_8-10-1-切换目录并拷贝kube-controller-manager相关文件到-opt-kubernetes-bin-8-10-1" aria-hidden="true">#</a> 8.10.1.切换目录并拷贝kube-controller-manager相关文件到/opt/kubernetes/bin {#<em>8_10_1</em>}</h3>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cp /opt/k8s/package/kubernetes/server/bin/kube-controller-manager /opt/kubernetes/bin
</code></pre></div><h3 id="_8-10-2-生成证书-8-10-2" tabindex="-1"><a class="header-anchor" href="#_8-10-2-生成证书-8-10-2" aria-hidden="true">#</a> 8.10.2.生成证书 {#<em>8_10_2</em>}</h3>
<pre><code>切换工作目录
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cd ~/TLS/k8s
</code></pre></div><pre><code>生成CA自签签证
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cat > kube-controller-manager-csr.json &lt;&lt; EOF
{
    "CN": "system:kube-controller-manager",
    "hosts": [],
    "key": {
    "algo": "rsa",
    "size": 2048
    },
    "names": [
    {
        "C": "CN",
        "L": "BeiJing",
        "ST": "BeiJing",
        "O": "system:masters",
        "OU": "System"
    }
    ]
}
EOF
</code></pre></div><pre><code>使用CA自签证书签发kube-controller-manager
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cfssl gencert -ca=ca.pem -ca-key=ca-key.pem \
-config=ca-config.json -profile=kubernetes \
kube-controller-manager-csr.json | cfssljson -bare kube-controller-manager
</code></pre></div><h3 id="_8-10-2-创建kube-controller-manager配置文件-8-10-2" tabindex="-1"><a class="header-anchor" href="#_8-10-2-创建kube-controller-manager配置文件-8-10-2" aria-hidden="true">#</a> 8.10.2.创建kube-controller-manager配置文件 {#<em>8_10_2</em>}</h3>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cat > /opt/kubernetes/cfg/kube-controller-manager.conf &lt;&lt; EOF
KUBE_CONTROLLER_MANAGER_OPTS="--logtostderr=false \\
--v=2 \\
--log-dir=/opt/kubernetes/logs \\
--leader-elect=true \\
--kubeconfig=/opt/kubernetes/cfg/kube-controller-manager.kubeconfig \\
--bind-address=127.0.0.1 \\
--allocate-node-cidrs=true \\
--cluster-cidr=10.244.0.0/16 \\
--service-cluster-ip-range=10.0.0.0/24 \\
--cluster-signing-cert-file=/opt/kubernetes/ssl/ca.pem \\
--cluster-signing-key-file=/opt/kubernetes/ssl/ca-key.pem  \\
--root-ca-file=/opt/kubernetes/ssl/ca.pem \\
--service-account-private-key-file=/opt/kubernetes/ssl/ca-key.pem \\
--cluster-signing-duration=87600h0m0s"
EOF
</code></pre></div><pre><code>配置文件说明
--kubeconfig ：连接apiserver配置文件。
--leader-elect ：当该组件启动多个时,自动选举(HA)
--cluster-signing-cert-file ：自动为kubelet颁发证书的CA,apiserver保持一致
--cluster-signing-key-file ：自动为kubelet颁发证书的CA,apiserver保持一致
</code></pre>
<h3 id="_8-10-3-生成配置文件-8-10-3" tabindex="-1"><a class="header-anchor" href="#_8-10-3-生成配置文件-8-10-3" aria-hidden="true">#</a> 8.10.3.生成配置文件 {#<em>8_10_3</em>}</h3>
<div class="custom-container tip"><p class="custom-container-title">注意事项</p>
<p>以下是shell命令,直接在shell终端执行</p>
</div>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>KUBE_CONFIG="/opt/kubernetes/cfg/kube-controller-manager.kubeconfig"
KUBE_APISERVER="https://192.168.0.9:6443"

kubectl config set-cluster kubernetes \
  --certificate-authority=/opt/kubernetes/ssl/ca.pem \
  --embed-certs=true \
  --server=${KUBE_APISERVER} \
  --kubeconfig=${KUBE_CONFIG}

kubectl config set-credentials kube-controller-manager \
  --client-certificate=./kube-controller-manager.pem \
  --client-key=./kube-controller-manager-key.pem \
  --embed-certs=true \
  --kubeconfig=${KUBE_CONFIG}

kubectl config set-context default \
  --cluster=kubernetes \
  --user=kube-controller-manager \
  --kubeconfig=${KUBE_CONFIG}

kubectl config use-context default --kubeconfig=${KUBE_CONFIG}
</code></pre></div><h3 id="_8-10-4-让systemd管理controller-manager-8-10-4" tabindex="-1"><a class="header-anchor" href="#_8-10-4-让systemd管理controller-manager-8-10-4" aria-hidden="true">#</a> 8.10.4.让systemd管理controller-manager {#<em>8_10_4</em>}</h3>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cat > /usr/lib/systemd/system/kube-controller-manager.service &lt;&lt; EOF
[Unit]
Description=Kubernetes Controller Manager
Documentation=https://github.com/kubernetes/kubernetes

[Service]
EnvironmentFile=/opt/kubernetes/cfg/kube-controller-manager.conf
ExecStart=/opt/kubernetes/bin/kube-controller-manager \$KUBE_CONTROLLER_MANAGER_OPTS
Restart=on-failure

[Install]
WantedBy=multi-user.target
EOF
</code></pre></div><h3 id="_8-10-5-启动kube-controller-manager-8-10-5" tabindex="-1"><a class="header-anchor" href="#_8-10-5-启动kube-controller-manager-8-10-5" aria-hidden="true">#</a> 8.10.5.启动kube-controller-manager {#<em>8_10_5</em>}</h3>
<pre><code>刷新配置文件后启动kube-controller-manager并设置为开机启动
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>systemctl daemon-reload &amp;&amp;
systemctl start kube-controller-manager &amp;&amp;
systemctl enable kube-controller-manager
</code></pre></div><pre><code>查看kube-controller-manager启动状态
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>systemctl status kube-controller-manager
</code></pre></div><pre><code>启动故障排查
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cat /var/log/messages|grep kube-controller-manager|grep -i error
</code></pre></div><h2 id="_8-11-部署kube-scheduler-8-11" tabindex="-1"><a class="header-anchor" href="#_8-11-部署kube-scheduler-8-11" aria-hidden="true">#</a> 8.11.部署kube-scheduler {#<em>8_11</em>}</h2>
<div class="custom-container tip"><p class="custom-container-title">注意事项</p>
<p>8.9章节所有操作只在Master Node1节点操作，不需要在其他节点操作，因为kube-scheduler是Master节点的专用组件，Worker Node不需要使用这个组件</p>
</div>
<h3 id="_8-10-1-切换目录并拷贝kube-dcheduler相关文件到-opt-kubernetes-bin" tabindex="-1"><a class="header-anchor" href="#_8-10-1-切换目录并拷贝kube-dcheduler相关文件到-opt-kubernetes-bin" aria-hidden="true">#</a> 8.10.1 切换目录并拷贝kube-dcheduler相关文件到/opt/kubernetes/bin</h3>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cp /opt/k8s/package/kubernetes/server/bin/kube-scheduler /opt/kubernetes/bin
</code></pre></div><h3 id="_8-11-2-生成证书-8-11-2" tabindex="-1"><a class="header-anchor" href="#_8-11-2-生成证书-8-11-2" aria-hidden="true">#</a> 8.11.2.生成证书 {#<em>8_11_2</em>}</h3>
<pre><code>切换工作目录
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cd ~/TLS/k8s
</code></pre></div><pre><code>创建证书请求文件
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cat > kube-scheduler-csr.json &lt;&lt; EOF
{
  "CN": "system:kube-scheduler",
  "hosts": [],
  "key": {
    "algo": "rsa",
    "size": 2048
  },
  "names": [
    {
      "C": "CN",
      "L": "BeiJing",
      "ST": "BeiJing",
      "O": "system:masters",
      "OU": "System"
    }
  ]
}
EOF
</code></pre></div><pre><code>生成证书
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cfssl gencert -ca=ca.pem -ca-key=ca-key.pem \
-config=ca-config.json -profile=kubernetes \
kube-scheduler-csr.json | cfssljson -bare kube-scheduler
</code></pre></div><h3 id="_8-11-3-创建kube-scheduler-conf配置文件-8-11-3" tabindex="-1"><a class="header-anchor" href="#_8-11-3-创建kube-scheduler-conf配置文件-8-11-3" aria-hidden="true">#</a> 8.11.3.创建kube-scheduler.conf配置文件 {#<em>8_11_3</em>}</h3>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cat > /opt/kubernetes/cfg/kube-scheduler.conf &lt;&lt; EOF
KUBE_SCHEDULER_OPTS="--logtostderr=false \\
--v=2 \\
--log-dir=/opt/kubernetes/logs \\
--leader-elect \\
--kubeconfig=/opt/kubernetes/cfg/kube-scheduler.kubeconfig \\
--bind-address=127.0.0.1"
EOF
</code></pre></div><pre><code>配置文件说明
--kubeconfig ：连接apiserver配置文件
--leader-elect ：当该组件启动多个时,自动选举(HA)。
</code></pre>
<h3 id="_8-11-4-生成kube-scheduler-kubeconfig文件-8-11-4" tabindex="-1"><a class="header-anchor" href="#_8-11-4-生成kube-scheduler-kubeconfig文件-8-11-4" aria-hidden="true">#</a> 8.11.4.生成kube-scheduler.kubeconfig文件 {#<em>8_11_4</em>}</h3>
<div class="custom-container tip"><p class="custom-container-title">注意事项</p>
<p>在shell中执行直接执行下面命令</p>
</div>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>	mkdir ~/.kube
</code></pre></div><div class="language-text ext-text"><pre v-pre class="language-text"><code>KUBE_CONFIG="/opt/kubernetes/cfg/kube-scheduler.kubeconfig"
KUBE_APISERVER="https://192.168.0.9:6443"

kubectl config set-cluster kubernetes \
  --certificate-authority=/opt/kubernetes/ssl/ca.pem \
  --embed-certs=true \
  --server=${KUBE_APISERVER} \
  --kubeconfig=${KUBE_CONFIG}

kubectl config set-credentials kube-scheduler \
  --client-certificate=./kube-scheduler.pem \
  --client-key=./kube-scheduler-key.pem \
  --embed-certs=true \
  --kubeconfig=${KUBE_CONFIG}

kubectl config set-context default \
  --cluster=kubernetes \
  --user=kube-scheduler \
  --kubeconfig=${KUBE_CONFIG}

kubectl config use-context default --kubeconfig=${KUBE_CONFIG}
</code></pre></div><h3 id="_8-11-5-让systemd管理kube-scheduler-8-11-5" tabindex="-1"><a class="header-anchor" href="#_8-11-5-让systemd管理kube-scheduler-8-11-5" aria-hidden="true">#</a> 8.11.5.让systemd管理kube-scheduler {#<em>8_11_5</em>}</h3>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cat > /usr/lib/systemd/system/kube-scheduler.service &lt;&lt; EOF
[Unit]
Description=Kubernetes Scheduler
Documentation=https://github.com/kubernetes/kubernetes

[Service]
EnvironmentFile=/opt/kubernetes/cfg/kube-scheduler.conf
ExecStart=/opt/kubernetes/bin/kube-scheduler \$KUBE_SCHEDULER_OPTS
Restart=on-failure

[Install]
WantedBy=multi-user.target
EOF
</code></pre></div><h3 id="_8-11-6-启动并设置开机启动-8-11-6" tabindex="-1"><a class="header-anchor" href="#_8-11-6-启动并设置开机启动-8-11-6" aria-hidden="true">#</a> 8.11.6.启动并设置开机启动 {#<em>8_11_6</em>}</h3>
<pre><code>刷新配置文件后启动kube-scheduler并设置为开机启动
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>systemctl daemon-reload &amp;&amp;
systemctl start kube-scheduler &amp;&amp;
systemctl enable kube-scheduler
</code></pre></div><pre><code>查看启动状态
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>systemctl status kube-scheduler
</code></pre></div><pre><code>启动故障排查
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cat /var/log/messages|grep kube-scheduler|grep -i error
</code></pre></div><h2 id="_8-12-使用kubectl查看集群状态-8-12" tabindex="-1"><a class="header-anchor" href="#_8-12-使用kubectl查看集群状态-8-12" aria-hidden="true">#</a> 8.12.使用kubectl查看集群状态 {#<em>8_12</em>}</h2>
<div class="custom-container tip"><p class="custom-container-title">注意事项</p>
<p>8.10章节所有操作只在Master1节点操作，不需要在其他节点操作，因为kubectl是Master节点的专用组件，Worker Node不需要使用这个组件</p>
</div>
<h3 id="_8-12-1-生成所需证书-8-12-1" tabindex="-1"><a class="header-anchor" href="#_8-12-1-生成所需证书-8-12-1" aria-hidden="true">#</a> 8.12.1.生成所需证书 {#<em>8_12_1</em>}</h3>
<pre><code>切换工作目录
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cd ~/TLS/k8s
</code></pre></div><pre><code>使用自签CA签发kubectl连接集群的证书
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cat > admin-csr.json &lt;&lt;EOF
{
    "CN": "admin",
    "hosts": [],
    "key": {
    "algo": "rsa",
    "size": 2048
    },
    "names": [
    {
        "C": "CN",
        "L": "BeiJing",
        "ST": "BeiJing",
        "O": "system:masters",
        "OU": "System"
    }
    ]
}
EOF
</code></pre></div><pre><code>生成证书
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cfssl gencert -ca=ca.pem -ca-key=ca-key.pem \
-config=ca-config.json -profile=kubernetes admin-csr.json | cfssljson -bare admin
</code></pre></div><h3 id="_8-12-2-在-kube文件夹中生成config文件-8-12-2" tabindex="-1"><a class="header-anchor" href="#_8-12-2-在-kube文件夹中生成config文件-8-12-2" aria-hidden="true">#</a> 8.12.2.在.kube文件夹中生成config文件 {#<em>8_12_2</em>}</h3>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>mkdir /root/.kube

KUBE_CONFIG="/root/.kube/config"
KUBE_APISERVER="https://192.168.0.9:6443"

kubectl config set-cluster kubernetes \
  --certificate-authority=/opt/kubernetes/ssl/ca.pem \
  --embed-certs=true \
  --server=${KUBE_APISERVER} \
  --kubeconfig=${KUBE_CONFIG}

kubectl config set-credentials cluster-admin \
  --client-certificate=./admin.pem \
  --client-key=./admin-key.pem \
  --embed-certs=true \
  --kubeconfig=${KUBE_CONFIG}

kubectl config set-context default \
  --cluster=kubernetes \
  --user=cluster-admin \
  --kubeconfig=${KUBE_CONFIG}

kubectl config use-context default --kubeconfig=${KUBE_CONFIG}
</code></pre></div><h3 id="_8-12-3-通过kubectl工具查看集群组件-8-12-3" tabindex="-1"><a class="header-anchor" href="#_8-12-3-通过kubectl工具查看集群组件-8-12-3" aria-hidden="true">#</a> 8.12.3.通过kubectl工具查看集群组件 {#<em>8_12_3</em>}</h3>
<pre><code>命令
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl get cs
</code></pre></div><pre><code>Master1节点组件运行正常会显示如下结果
NAME                 STATUS    MESSAGE             ERROR
controller-manager   Healthy   ok
scheduler            Healthy   ok
etcd-0               Healthy   {&quot;health&quot;:&quot;true&quot;}
etcd-2               Healthy   {&quot;health&quot;:&quot;true&quot;}
etcd-1               Healthy   {&quot;health&quot;:&quot;true&quot;}
</code></pre>
<h3 id="_8-12-4-授权kubelet-bootstrap用户允许请求证书-8-12-4" tabindex="-1"><a class="header-anchor" href="#_8-12-4-授权kubelet-bootstrap用户允许请求证书-8-12-4" aria-hidden="true">#</a> 8.12.4.授权kubelet-bootstrap用户允许请求证书 {#<em>8_12_4</em>}</h3>
<pre><code>创建授权用户kubelet-bootstrap
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl create clusterrolebinding kubelet-bootstrap \
--clusterrole=system:node-bootstrapper \
--user=kubelet-bootstrap
</code></pre></div><pre><code>上面如果不行用这个
kubectl create clusterrolebinding kubelet-bootstrap \
--clusterrole=system:node-bootstrapper --user=kubelet-bootstrap --group=system:bootstrappers

补充命令
删除授权kubelet-bootstrap用户：第一步
kubectl delete clusterrolebinding kubelet-bootstrap
删除授权kubelet-bootstrap用户：第二步
find / -name bootstrap.kubeconfig
rm -rf /opt/kubernetes/cfg/bootstrap.kubeconfig
删除授权kubelet-bootstrap用户：第三步
systemctl restart kubelet
</code></pre>
<h2 id="_8-13-在master-node1上部署第一个worker-node-8-13" tabindex="-1"><a class="header-anchor" href="#_8-13-在master-node1上部署第一个worker-node-8-13" aria-hidden="true">#</a> 8.13.在Master Node1上部署第一个Worker Node {#<em>8_13</em>}</h2>
<div class="custom-container tip"><p class="custom-container-title">注意事项</p>
<p>8.11.章节所有操作只在Master Node1节点操作，即当Master Node1既充当Master Node,也当Worker Node</p>
</div>
<pre><code>将Master Node1节点的k8s-server软件包拷贝到所有Worker Node
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cd /opt/k8s/package/kubernetes/server/bin/
cp kubelet  kube-proxy /opt/kubernetes/bin/ &amp;&amp;
scp kubelet  kube-proxy root@192.168.0.10:/opt/kubernetes/bin/ &amp;&amp;
scp kubelet  kube-proxy root@192.168.0.11:/opt/kubernetes/bin/
</code></pre></div><h3 id="_8-13-2-在master-node1部署kubelet-8-13-2" tabindex="-1"><a class="header-anchor" href="#_8-13-2-在master-node1部署kubelet-8-13-2" aria-hidden="true">#</a> 8.13.2.在Master Node1部署kubelet {#<em>8_13_2</em>}</h3>
<h4 id="_8-13-2-1-创建kubelet配置文件-8-13-2-1" tabindex="-1"><a class="header-anchor" href="#_8-13-2-1-创建kubelet配置文件-8-13-2-1" aria-hidden="true">#</a> 8.13.2.1.创建kubelet配置文件 {#<em>8_13_2_1</em>}</h4>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cat > /opt/kubernetes/cfg/kubelet.conf &lt;&lt; EOF
KUBELET_OPTS="--logtostderr=false \\
--v=2 \\
--log-dir=/opt/kubernetes/logs \\
--hostname-override=binary-k8s-master1 \\
--network-plugin=cni \\
--kubeconfig=/opt/kubernetes/cfg/kubelet.kubeconfig \\
--bootstrap-kubeconfig=/opt/kubernetes/cfg/bootstrap.kubeconfig \\
--config=/opt/kubernetes/cfg/kubelet-config.yml \\
--cert-dir=/opt/kubernetes/ssl \\
--pod-infra-container-image=registry.cn-hangzhou.aliyuncs.com/google-containers/pause-amd64:3.0"
EOF
</code></pre></div><pre><code>配置说明
--hostname-override ：显示名称,集群唯一(不可重复)。
--network-plugin ：启用CNI。
--kubeconfig ： 空路径,会自动生成,后面用于连接apiserver。
--bootstrap-kubeconfig ：首次启动向apiserver申请证书。
--config ：配置文件参数。
--cert-dir ：kubelet证书目录。
--pod-infra-container-image ：管理Pod网络容器的镜像 init container
</code></pre>
<h4 id="_8-13-2-2-创建kubelet编排文件-8-13-2-2" tabindex="-1"><a class="header-anchor" href="#_8-13-2-2-创建kubelet编排文件-8-13-2-2" aria-hidden="true">#</a> 8.13.2.2.创建kubelet编排文件 {#<em>8_13_2_2</em>}</h4>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cat > /opt/kubernetes/cfg/kubelet-config.yml &lt;&lt; EOF
kind: KubeletConfiguration
apiVersion: kubelet.config.k8s.io/v1beta1
address: 0.0.0.0
port: 10250
readOnlyPort: 10255
cgroupDriver: cgroupfs
clusterDNS:
- 10.0.0.2
clusterDomain: cluster.local
failSwapOn: false
authentication:
  anonymous:
    enabled: false
  webhook:
    cacheTTL: 2m0s
    enabled: true
  x509:
    clientCAFile: /opt/kubernetes/ssl/ca.pem
authorization:
  mode: Webhook
  webhook:
    cacheAuthorizedTTL: 5m0s
    cacheUnauthorizedTTL: 30s
evictionHard:
  imagefs.available: 15%
  memory.available: 100Mi
  nodefs.available: 10%
  nodefs.inodesFree: 5%
maxOpenFiles: 1000000
maxPods: 110
EOF
</code></pre></div><h4 id="_8-13-2-3-生成kubelet初次加入集群引导kubeconfig文件-8-13-2-3" tabindex="-1"><a class="header-anchor" href="#_8-13-2-3-生成kubelet初次加入集群引导kubeconfig文件-8-13-2-3" aria-hidden="true">#</a> 8.13.2.3.生成kubelet初次加入集群引导kubeconfig文件 {#<em>8_13_2_3</em>}</h4>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>KUBE_CONFIG="/opt/kubernetes/cfg/bootstrap.kubeconfig"
KUBE_APISERVER="https://192.168.0.9:6443" # apiserver IP:PORT
TOKEN="4136692876ad4b01bb9dd0988480ebba" # 与token.csv里保持一致  /opt/kubernetes/cfg/token.csv 

kubectl config set-cluster kubernetes \
  --certificate-authority=/opt/kubernetes/ssl/ca.pem \
  --embed-certs=true \
  --server=${KUBE_APISERVER} \
  --kubeconfig=${KUBE_CONFIG}

kubectl config set-credentials "kubelet-bootstrap" \
  --token=${TOKEN} \
  --kubeconfig=${KUBE_CONFIG}

kubectl config set-context default \
  --cluster=kubernetes \
  --user="kubelet-bootstrap" \
  --kubeconfig=${KUBE_CONFIG}

kubectl config use-context default --kubeconfig=${KUBE_CONFIG}
</code></pre></div><h4 id="_8-13-2-4-systemd管理kubelet-8-13-2-4" tabindex="-1"><a class="header-anchor" href="#_8-13-2-4-systemd管理kubelet-8-13-2-4" aria-hidden="true">#</a> 8.13.2.4.systemd管理kubelet {#<em>8_13_2_4</em>}</h4>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cat > /usr/lib/systemd/system/kubelet.service &lt;&lt; EOF
[Unit]
Description=Kubernetes Kubelet
After=docker.service

[Service]
EnvironmentFile=/opt/kubernetes/cfg/kubelet.conf
ExecStart=/opt/kubernetes/bin/kubelet \$KUBELET_OPTS
Restart=on-failure
LimitNOFILE=65536

[Install]
WantedBy=multi-user.target
EOF
</code></pre></div><h4 id="_8-13-3-5-启动kubelet并设置开机启动-8-13-3-5" tabindex="-1"><a class="header-anchor" href="#_8-13-3-5-启动kubelet并设置开机启动-8-13-3-5" aria-hidden="true">#</a> 8.13.3.5.启动kubelet并设置开机启动 {#<em>8_13_3_5</em>}</h4>
<pre><code>刷新配置文件后启动kubelet并设置开机启动
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>systemctl daemon-reload &amp;&amp;
systemctl start kubelet &amp;&amp;
systemctl enable kubelet
</code></pre></div><pre><code>查看启动状态
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>systemctl status kubelet
</code></pre></div><pre><code>启动故障排查
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cat /var/log/messages|grep kubelet
</code></pre></div><h4 id="_8-13-2-6-允许kubelet证书申请并加入集群-8-13-2-6" tabindex="-1"><a class="header-anchor" href="#_8-13-2-6-允许kubelet证书申请并加入集群-8-13-2-6" aria-hidden="true">#</a> 8.13.2.6.允许kubelet证书申请并加入集群 {#<em>8_13_2_6</em>}</h4>
<pre><code>查看kubelet证书签名请求
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl get csr
</code></pre></div><pre><code>[root@binary-k8s-master1 bin]# kubectl get csr
NAME                                                   AGE	CONDITIO	...
node-csr-IiJqGnj7y-9pMOIaYb9rpYxtIaEuACOITLI-WpfdpDI   16s	Pending		...

手动批准证书签名请求
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl certificate approve node-csr-IiJqGnj7y-9pMOIaYb9rpYxtIaEuACOITLI-WpfdpDI
</code></pre></div><pre><code>再次使用命令查看申请是否通过
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl get csr
</code></pre></div><pre><code>[root@binary-k8s-master1 bin]# kubectl get csr
NAME                                                   AGE	CONDITIO	...
node-csr-IiJqGnj7y-9pMOIaYb9rpYxtIaEuACOITLI-WpfdpDI   16s	Approved	...

补充命令
手动拒绝证书签名请求
kubectl certificate deny node-csr-IiJqGnj7y-9pMOIaYb9rpYxtIaEuACOITLI-WpfdpDI
删除多余的csr
kubectl delete csr node-csr-IiJqGnj7y-9pMOIaYb9rpYxtIaEuACOITLI-WpfdpDI

查看节点（如果上面步骤都没有错误这个步骤可以查看到Master节点）
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl get nodes
</code></pre></div><pre><code>[root@binary-k8s-master1 bin]# kubectl get nodes
NAME          STATUS     ROLES    AGE     VERSION
binary-k8s-master1   NotReady   &lt;none&gt;   2m10s   v1.20.0

注意事项
由于网络插件还没有部署,节点会没有准备就绪NotReady
</code></pre>
<h3 id="_8-13-3-部署kube-proxy-8-13-3" tabindex="-1"><a class="header-anchor" href="#_8-13-3-部署kube-proxy-8-13-3" aria-hidden="true">#</a> 8.13.3.部署kube-proxy {#<em>8_13_3</em>}</h3>
<h4 id="_8-13-3-1-创建kube-proxy配置文件-8-13-3-1" tabindex="-1"><a class="header-anchor" href="#_8-13-3-1-创建kube-proxy配置文件-8-13-3-1" aria-hidden="true">#</a> 8.13.3.1.创建kube-proxy配置文件 {#<em>8_13_3_1</em>}</h4>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cat > /opt/kubernetes/cfg/kube-proxy.conf &lt;&lt; EOF
KUBE_PROXY_OPTS="--logtostderr=false \\
--v=2 \\
--log-dir=/opt/kubernetes/logs \\
--config=/opt/kubernetes/cfg/kube-proxy-config.yml"
EOF
</code></pre></div><h4 id="_8-13-3-2-配置参数文件-8-13-3-2" tabindex="-1"><a class="header-anchor" href="#_8-13-3-2-配置参数文件-8-13-3-2" aria-hidden="true">#</a> 8.13.3.2.配置参数文件 {#<em>8_13_3_2</em>}</h4>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cat > /opt/kubernetes/cfg/kube-proxy-config.yml &lt;&lt; EOF
kind: KubeProxyConfiguration
apiVersion: kubeproxy.config.k8s.io/v1alpha1
bindAddress: 0.0.0.0
metricsBindAddress: 0.0.0.0:10249
clientConnection:
  kubeconfig: /opt/kubernetes/cfg/kube-proxy.kubeconfig
hostnameOverride: binary-k8s-master1
clusterCIDR: 10.244.0.0/16
EOF
</code></pre></div><h4 id="_8-13-3-3-生成kube-proxy证书文件-8-13-3-3" tabindex="-1"><a class="header-anchor" href="#_8-13-3-3-生成kube-proxy证书文件-8-13-3-3" aria-hidden="true">#</a> 8.13.3.3.生成kube-proxy证书文件 {#<em>8_13_3_3</em>}</h4>
<pre><code>切换工作目录
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cd ~/TLS/k8s
</code></pre></div><pre><code>创建证书请求文件
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cat > kube-proxy-csr.json &lt;&lt; EOF
{
    "CN": "system:kube-proxy",
    "hosts": [],
    "key": {
    "algo": "rsa",
    "size": 2048
    },
    "names": [
    {
        "C": "CN",
        "L": "BeiJing",
        "ST": "BeiJing",
        "O": "k8s",
        "OU": "System"
    }
   ]
}
EOF
</code></pre></div><pre><code>生成证书
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cfssl gencert -ca=ca.pem -ca-key=ca-key.pem \
-config=ca-config.json -profile=kubernetes kube-proxy-csr.json | cfssljson -bare kube-proxy
</code></pre></div><h4 id="_8-13-3-4-生成kube-proxy-kubeconfig文件-8-13-3-4" tabindex="-1"><a class="header-anchor" href="#_8-13-3-4-生成kube-proxy-kubeconfig文件-8-13-3-4" aria-hidden="true">#</a> 8.13.3.4.生成kube-proxy.kubeconfig文件 {#<em>8_13_3_4</em>}</h4>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>KUBE_CONFIG="/opt/kubernetes/cfg/kube-proxy.kubeconfig"
KUBE_APISERVER="https://192.168.0.9:6443"

kubectl config set-cluster kubernetes \
  --certificate-authority=/opt/kubernetes/ssl/ca.pem \
  --embed-certs=true \
  --server=${KUBE_APISERVER} \
  --kubeconfig=${KUBE_CONFIG}

kubectl config set-credentials kube-proxy \
  --client-certificate=./kube-proxy.pem \
  --client-key=./kube-proxy-key.pem \
  --embed-certs=true \
  --kubeconfig=${KUBE_CONFIG}

kubectl config set-context default \
  --cluster=kubernetes \
  --user=kube-proxy \
  --kubeconfig=${KUBE_CONFIG}

kubectl config use-context default --kubeconfig=${KUBE_CONFIG}
</code></pre></div><h4 id="_8-13-3-5-systemd管理kube-proxy-8-13-3-5" tabindex="-1"><a class="header-anchor" href="#_8-13-3-5-systemd管理kube-proxy-8-13-3-5" aria-hidden="true">#</a> 8.13.3.5.systemd管理kube-proxy {#<em>8_13_3_5</em>}</h4>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cat > /usr/lib/systemd/system/kube-proxy.service &lt;&lt; EOF
[Unit]
Description=Kubernetes Proxy
After=network.target

[Service]
EnvironmentFile=/opt/kubernetes/cfg/kube-proxy.conf
ExecStart=/opt/kubernetes/bin/kube-proxy \$KUBE_PROXY_OPTS
Restart=on-failure
LimitNOFILE=65536

[Install]
WantedBy=multi-user.target
EOF
</code></pre></div><h4 id="_8-12-3-6-启动kube-proxy并设置开机自启-8-12-3-6" tabindex="-1"><a class="header-anchor" href="#_8-12-3-6-启动kube-proxy并设置开机自启-8-12-3-6" aria-hidden="true">#</a> 8.12.3.6.启动kube-proxy并设置开机自启 {#<em>8_12_3_6</em>}</h4>
<pre><code>刷新配置文件后启动kube-proxy并设置开机启动
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>systemctl daemon-reload &amp;&amp;
systemctl start kube-proxy &amp;&amp;
systemctl enable kube-proxy
</code></pre></div><pre><code>启动状态查询
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>	systemctl status kube-proxy
</code></pre></div><h3 id="_8-13-4-部署网络组件-calico-8-13-4" tabindex="-1"><a class="header-anchor" href="#_8-13-4-部署网络组件-calico-8-13-4" aria-hidden="true">#</a> 8.13.4.部署网络组件(Calico) {#<em>8_13_4</em>}</h3>
<pre><code>Calico简介
Calico是一个纯三层的数据中心网络方案，是目前Kubernetes主流的网络方案。

切换目录
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cd /root/TLS/k8s
</code></pre></div><pre><code>获取Calico.yaml文件
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>wget http://docs.projectcalico.org/v3.8/manifests/calico.yaml
</code></pre></div><pre><code>备份calico.yaml并修改calico.yaml
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cp calico.yaml calico.yaml.bak &amp;&amp;
sed -i 's/192.168.0.0/10.244.0.0/g' calico.yaml
</code></pre></div><pre><code>查询修改结果
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>grep "IPV4POOL_CIDR" calico.yaml  -A 1 \
		- name: CALICO_IPV4POOL_CIDR	\
</code></pre></div><pre><code>正常会显示线面值
value: &quot;10.244.0.0/16&quot;

部署Calico
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl apply -f calico.yaml
</code></pre></div><pre><code>等待8分钟左右后查看Calico的Pod运行状态（正常是STATUS是Running）
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl get pods -n kube-system
</code></pre></div><pre><code>[root@binary-k8s-master1 k8s]# kubectl get pods -n kube-system
NAME                                      READY   STATUS    RESTARTS   AGE
calico-kube-controllers-bcc6f659f-r28g7   1/1     Running   0          18m
calico-node-dkjn6                         1/1     Running   6          18m

注意事项
calico部署很慢，不过不用等8分钟，执行kubectl apply命令后稍等一会儿就可以通过kubectl get nodes
查看节点状态了

查看集群节点（正常是STATUS是Ready）
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl get nodes
</code></pre></div><pre><code>[root@binary-k8s-master1 k8s]# kubectl get nodes
NAME          		  STATUS   ROLES    AGE   VERSION
binary-k8s-master1    Ready    &lt;none&gt;   34m   v1.20.0
</code></pre>
<h3 id="_8-13-5-授权apiserver访问kubelet-8-13-5" tabindex="-1"><a class="header-anchor" href="#_8-13-5-授权apiserver访问kubelet-8-13-5" aria-hidden="true">#</a> 8.13.5.授权apiserver访问kubelet {#<em>8_13_5</em>}</h3>
<pre><code>应用场景：如kubectl logs

创建配置文件
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cat > apiserver-to-kubelet-rbac.yaml &lt;&lt; EOF
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  annotations:
    rbac.authorization.kubernetes.io/autoupdate: "true"
  labels:
    kubernetes.io/bootstrapping: rbac-defaults
  name: system:kube-apiserver-to-kubelet
rules:
  - apiGroups:
      - ""
    resources:
      - nodes/proxy
      - nodes/stats
      - nodes/log
      - nodes/spec
      - nodes/metrics
      - pods/log
    verbs:
      - "*"
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: system:kube-apiserver
  namespace: ""
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: system:kube-apiserver-to-kubelet
subjects:
  - apiGroup: rbac.authorization.k8s.io
    kind: User
    name: kubernetes
EOF
</code></pre></div><pre><code>应用配置文件
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl apply -f apiserver-to-kubelet-rbac.yaml
</code></pre></div><h2 id="_8-14-增加worker-node-8-14" tabindex="-1"><a class="header-anchor" href="#_8-14-增加worker-node-8-14" aria-hidden="true">#</a> 8.14.增加Worker Node {#<em>8_14</em>}</h2>
<h3 id="_8-14-1-在所有worker-node创建工作目录并拷贝二进制文件-8-14-1" tabindex="-1"><a class="header-anchor" href="#_8-14-1-在所有worker-node创建工作目录并拷贝二进制文件-8-14-1" aria-hidden="true">#</a> 8.14.1.在所有Worker Node创建工作目录并拷贝二进制文件 {#<em>8_14_1</em>}</h3>
<pre><code>在所有Worker Node1和Worker Node2中创建工作目录
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>mkdir -p /opt/kubernetes/bin &amp;&amp;
mkdir -p /opt/kubernetes/cfg &amp;&amp;
mkdir -p /opt/kubernetes/ssl &amp;&amp;
mkdir -p /opt/kubernetes/logs
</code></pre></div><h3 id="_8-14-2拷贝master-node1上部署好的文件到worker-node" tabindex="-1"><a class="header-anchor" href="#_8-14-2拷贝master-node1上部署好的文件到worker-node" aria-hidden="true">#</a> 8.14.2拷贝Master Node1上部署好的文件到Worker Node</h3>
<pre><code>进入Master Node1，执行下面操作，镜相关文件拷贝到Worker Node1和Worker Node2
拷贝到Worker Node1（192.168.0.10）
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>scp -r /opt/kubernetes root@192.168.0.10:/opt/ &amp;&amp;
scp -r /usr/lib/systemd/system/{kubelet,kube-proxy}.service \
root@192.168.0.10:/usr/lib/systemd/system &amp;&amp;
scp -r /opt/kubernetes/ssl/ca.pem root@192.168.0.10:/opt/kubernetes/ssl/
</code></pre></div><pre><code>拷贝到Worker Node2（192.168.0.11）
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>scp -r /opt/kubernetes root@192.168.0.11:/opt/ &amp;&amp;
scp -r /usr/lib/systemd/system/{kubelet,kube-proxy}.service \
root@192.168.0.11:/usr/lib/systemd/system &amp;&amp;
scp -r /opt/kubernetes/ssl/ca.pem root@192.168.0.11:/opt/kubernetes/ssl/
</code></pre></div><h3 id="_8-14-3-删除所有worker-node中kubelet证书和kubeconfig文件-8-14-3" tabindex="-1"><a class="header-anchor" href="#_8-14-3-删除所有worker-node中kubelet证书和kubeconfig文件-8-14-3" aria-hidden="true">#</a> 8.14.3.删除所有Worker Node中kubelet证书和kubeconfig文件 {#<em>8_14_3</em>}</h3>
<pre><code>Worker Node1节点（192.168.0.10）
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>rm -f /opt/kubernetes/cfg/kubelet.kubeconfig &amp;&amp;
rm -f /opt/kubernetes/ssl/kubelet*
</code></pre></div><pre><code>Worker Node2节点（192.168.0.11）
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>rm -f /opt/kubernetes/cfg/kubelet.kubeconfig &amp;&amp;
rm -f /opt/kubernetes/ssl/kubelet*
</code></pre></div><pre><code>说明:
这几个文件是证书申请审批后自动生成的,每个Node不同,必须删除
</code></pre>
<h3 id="_8-14-4-修改worker-node1和worker-node2主机名-8-14-4" tabindex="-1"><a class="header-anchor" href="#_8-14-4-修改worker-node1和worker-node2主机名-8-14-4" aria-hidden="true">#</a> 8.14.4. 修改Worker Node1和Worker Node2主机名 {#<em>8_14_4</em>}</h3>
<pre><code>Worker Node1（192.168.0.10）
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>sed -i 's/--hostname-override=binary-k8s-master1/--hostname-override=binary-k8s-worker1/g' \
/opt/kubernetes/cfg/kubelet.conf #修改--hostname-override的值为binary-k8s-worker1
sed -i 's/hostnameOverride: binary-k8s-master1/hostnameOverride: binary-k8s-worker1/g' \
/opt/kubernetes/cfg/kube-proxy-config.yml #修改hostnameOverride的值binary-k8s-worker1
</code></pre></div><pre><code>Worker Node2（192.168.0.11）
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>sed -i 's/--hostname-override=binary-k8s-master1/--hostname-override=binary-k8s-worker2/g' \
/opt/kubernetes/cfg/kubelet.conf #修改--hostname-override的值为binary-k8s-worker2
sed -i 's/hostnameOverride: binary-k8s-master1/hostnameOverride: binary-k8s-worker2/g' \
/opt/kubernetes/cfg/kube-proxy-config.yml #修改hostnameOverride的值binary-k8s-worker2
</code></pre></div><h3 id="_8-14-5-启动worker-node1和worker-node2中kubelet并设置开机自启-8-14-5" tabindex="-1"><a class="header-anchor" href="#_8-14-5-启动worker-node1和worker-node2中kubelet并设置开机自启-8-14-5" aria-hidden="true">#</a> 8.14.5.启动Worker Node1和Worker Node2中kubelet并设置开机自启 {#<em>8_14_5</em>}</h3>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>systemctl daemon-reload &amp;&amp;
systemctl start kubelet kube-proxy &amp;&amp;
systemctl enable kubelet kube-proxy
</code></pre></div><pre><code>查看启动状态
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>systemctl status kubelet
</code></pre></div><div class="language-text ext-text"><pre v-pre class="language-text"><code>systemctl status kube-proxy
</code></pre></div><pre><code>启动故障解决
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cat /var/log/messages|grep kube-proxy
</code></pre></div><h3 id="_8-14-6-在master1上同意新的node-kubelet证书申请-8-14-6" tabindex="-1"><a class="header-anchor" href="#_8-14-6-在master1上同意新的node-kubelet证书申请-8-14-6" aria-hidden="true">#</a> 8.14.6.在Master1上同意新的Node kubelet证书申请 {#<em>8_14_6</em>}</h3>
<pre><code>查看证书请求
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl get csr
</code></pre></div><pre><code>[root@binary-k8s-master1 k8s]# kubectl get csr

NAME                                                    ... CONDITION         ...
node-csr-IiJqGnj7y-9pMOIaYb9rpYxtIaEuACOITLI-WpfdpDI    ... Approved,Issued   ...
node-csr-TlSHYrzacOBQbJyQcfVwuArXPKRbjcoMESZykQ3Qr0w   ... Pending            ...
node-csr-vb-rAPL-grn0NxFGBs-_5pScCDkICmvHRnbhn_bRdsc    ... Pending           ...

手动批准证书签名请求
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl certificate approve node-csr-TlSHYrzacOBQbJyQcfVwuArXPKRbjcoMESZykQ3Qr0w
</code></pre></div><div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl certificate approve node-csr-vb-rAPL-grn0NxFGBs-_5pScCDkICmvHRnbhn_bRdsc
</code></pre></div><pre><code>查看所有Node状态(要稍等会才会变成ready,会下载一些初始化镜像)
注意事项
刚加入Worker Node1和Worker Node2时使用kubectl get nodes查看可能会出现Worker Node NotReady状态，等
待大概三分钟左右再使用kubectl get nodes就可以看到所有节点状态都已经就绪了
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl get nodes
</code></pre></div><pre><code>[root@binary-k8s-master1 ~]# kubectl get nodes
NAME                  STATUS   ROLES    AGE   VERSION
binary-k8s-master1    Ready    &lt;none&gt;   79s   v1.20.0
binary-k8s-worker1    Ready    &lt;none&gt;   26m   v1.20.0
binary-k8s-worker2    Ready    &lt;none&gt;   26m   v1.20.0

补充命令
删除多余的csr
kubectl delete csr node-csr-Rd_0WEaOFSkRT7geRKfz__I1v6E-CQfJpYwMTDEK-mw
</code></pre>
<h3 id="_8-14-7-在master1上部署kubernetes-dashboard-8-14-7" tabindex="-1"><a class="header-anchor" href="#_8-14-7-在master1上部署kubernetes-dashboard-8-14-7" aria-hidden="true">#</a> 8.14.7.在Master1上部署kubernetes-dashboard {#<em>8_14_7</em>}</h3>
<pre><code>切换目录并在该目录中下载kubernetes-dashboard安装所需要的yaml文件
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cd /opt/k8s/package &amp;&amp;
wget https://raw.githubusercontent.com/kubernetes/dashboard/v2.4.0/aio/deploy/recommended.yaml
</code></pre></div><pre><code>修改配置
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>vim recommended.yaml
</code></pre></div><pre><code>给名称为kubernetes-dashboard的Service中添加type: NodePort参数，大概在245行左右
kind: Service
name: kubernetes-dashboard
spec:
  type: NodePort

安装kubernetes-dashboard
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl apply -f recommended.yaml
</code></pre></div><pre><code>查看部署情况
注意事项，等待大约2分钟使用kubectl get pods,svc -n kubernetes-dashboard才能看到所有pods,svc状态正常
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl get pods,svc -n kubernetes-dashboard
</code></pre></div><pre><code>[root@binary-k8s-master1 package]# kubectl get pods,svc -n kubernetes-dashboard
NAME                                             READY   STATUS    RESTARTS   AGE
pod/dashboard-metrics-scraper-5b8896d7fc-jj8vp   1/1     Running   0          60m
pod/kubernetes-dashboard-897c7599f-pdk9g         1/1     Running   0          60m

NAME                                TYPE        CLUSTER-IP  	 PORT(S)         AGE
service/dashboard-metrics-scraper   ClusterIP   10.0.0.254       8000/TCP        60m
service/kubernetes-dashboard        NodePort    10.0.0.173       443:30441/TCP   60m

创建dashboard-admin使用的service account并绑定默认cluster-admin管理员集群角色
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl create serviceaccount dashboard-admin -n kube-system
kubectl create clusterrolebinding dashboard-admin \
	--clusterrole=cluster-admin --serviceaccount=kube-system:dashboard-admin
kubectl describe secrets -n kube-system \
$(kubectl -n kube-system get secret | awk '/dashboard-admin/{print $1}')
</code></pre></div><pre><code>查询token
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl describe secrets -n kube-system \
$(kubectl -n kube-system get secret | awk '/dashboard-admin/{print $1}')
</code></pre></div><pre><code>访问kubernetes-dashboard,输入刚才获得的token登录kubernetes-dashboard
https://192.168.0.9:30441/
https://192.168.0.10:30441/
https://192.168.0.11:30441/
</code></pre>
<h3 id="_8-14-8-在master1上部署coredns-8-14-8" tabindex="-1"><a class="header-anchor" href="#_8-14-8-在master1上部署coredns-8-14-8" aria-hidden="true">#</a> 8.14.8.在Master1上部署CoreDNS {#<em>8_14_8</em>}</h3>
<!--
	参考网站
	https://blog.csdn.net/weixin_47402482/article/details/115057159
-->
<pre><code>介绍
CoreDNS主要用于集群内部Service名称解析。

从kubernetes源码包中获取coredns.yaml
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cd /opt/k8s/package/kubernetes &amp;&amp;
mkdir  kubernetes-src &amp;&amp;
tar fx kubernetes-src.tar.gz -C ./kubernetes-src &amp;&amp;
cd kubernetes-src/cluster/addons/dns/coredns/ &amp;&amp;
cp coredns.yaml.base coredns.yaml
</code></pre></div><pre><code>修改coredns.yaml配置
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>CLUSTER_DNS_DOMAIN="cluster.local"
CLUSTER_DNS_SVC_IP="10.0.0.2"
CLUSTER_DNS_LIMIT_MEMORY="170Mi"

sed -i -e "s@__DNS__DOMAIN__@${CLUSTER_DNS_DOMAIN}@" \
		-e "s@__DNS__SERVER__@${CLUSTER_DNS_SVC_IP}@" \
		-e "s@__DNS__MEMORY__LIMIT__@${CLUSTER_DNS_LIMIT_MEMORY}@" \
		coredns.yaml
</code></pre></div><pre><code>注意：CLUSTER_DNS_DOMAIN和CLUSTER_DNS_SVC_IP的值要和在node节点的kubelet-config.yaml/kubelet-
config.yal中clusterDNS和clusterDomain的值保持一致

修改coredns.yaml中coredns镜像仓库地址
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>vim coredns.yaml
</code></pre></div><pre><code>将135行k8s.gcr.io/coredns:1.6.7修改为registry.aliyuncs.com/google_containers/coredns:v1.8.6

创建coredns使用的service account并绑定默认cluster-admin管理员集群角色
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl create serviceaccount coredns -n kube-system
kubectl create clusterrolebinding coredns \
	--clusterrole=cluster-admin --serviceaccount=kube-system:coredns
</code></pre></div><pre><code>部署coredns
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl apply -f coredns.yaml
</code></pre></div><pre><code>查看coredns的pod是否正常
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl get pods -n kube-system
</code></pre></div><pre><code>[root@k8s-master1 yaml]# kubectl get pods -n kube-system
NAME                                      READY   STATUS    RESTARTS   AGE
calico-kube-controllers-97769f7c7-zcz5d   1/1     Running   1          47h
calico-node-5tnll                         1/1     Running   1          47h
calico-node-m8sdg                         1/1     Running   0          42m
calico-node-pqvk9                         1/1     Running   0          56m
coredns-6cc56c94bd-5hvfb                  1/1     Running   0          37s

启动故障排查
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl logs PODNAME -n kube-system
</code></pre></div><pre><code>给coredns增加副本，增强高可用性（也可以修改配置文件）
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl scale deployment coredns --replicas=2 -n kube-system
</code></pre></div><pre><code>创建 kubernetes用户
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl create clusterrolebinding kube-apiserver:kubelet-apis \
--clusterrole=system:kubelet-api-admin --user kubernetes
</code></pre></div><pre><code>使用busybox测试解析是否正常

部署busybox
编写busybox编排文件
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cat > busybox.yaml &lt;&lt; EOF
apiVersion: v1
kind: Pod
metadata:
  name: busybox
  namespace: default
spec:
  containers:
  - name: busybox
    image: busybox:1.28.4
    command:
      - sleep
      - "3600"
    imagePullPolicy: IfNotPresent
  restartPolicy: Always
EOF
</code></pre></div><pre><code>创建busybox
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl create -f busybox.yaml
</code></pre></div><pre><code>进入busybox中
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl exec -it busybox -- sh
</code></pre></div><pre><code>使用busybox测试coredns是否部署成功
If you don't see a command prompt, try pressing enter.
/ # ns
nsenter   nslookup
/ # nslookup kubernetes
Server:    10.0.0.2
Address 1: 10.0.0.2 kube-dns.kube-system.svc.cluster.local

查看coredns一共部署了几个副本
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl get deployments -n kube-system
</code></pre></div><pre><code>[root@binary-k8s-master2 ~]# kubectl get deployments -n kube-system
NAME                      READY   UP-TO-DATE   AVAILABLE   AGE
calico-kube-controllers   1/1     1            1           168m
coredns                   2/2     2            2           147m
</code></pre>
<h2 id="_8-15-增加master2节点-8-15" tabindex="-1"><a class="header-anchor" href="#_8-15-增加master2节点-8-15" aria-hidden="true">#</a> 8.15.增加Master2节点 {#<em>8_15</em>}</h2>
<div class="custom-container danger"><p class="custom-container-title">特别特别注意</p>
<p>一定要先执行最开始的8.1章节公共步骤，如关闭防火墙等操作，否则是成功添加Master2节点的</p>
</div>
<h3 id="_8-15-1-kubernetes集群架构简介-8-15-1" tabindex="-1"><a class="header-anchor" href="#_8-15-1-kubernetes集群架构简介-8-15-1" aria-hidden="true">#</a> 8.15.1.Kubernetes集群架构简介 {#<em>8_15_1</em>}</h3>
<pre><code>Kubernetes作为容器集群系统，通过健康检查+重启策略实现了Pod故障自我修复能力，通过调度算法
实现将Pod分布式部署，并保持预期副本数，根据Node失效状态自动在其他Node拉起Pod，实现了应用
层的高可用性。针对Kubernetes集群，高可用性还应包含以下两个层面的考虑：Etcd数据库的高可用
性和Kubernetes Master组件的高可用性。 而Etcd我们已经采用3个节点组建集群实现高可用，本
节将对Master节点高可用进行说明和实施。Master节点扮演着总控中心的角色，通过不断与工作节点
上的Kubelet和kube-proxy进行通信来维护整个集群的健康工作状态。如果Master节点故障，将无
法使用kubectl工具或者API做任何集群管理。Master节点有三个额外的组件，这个三个组件工作节
点kubeapiserver、kube-controller-manager和kube-scheduler，其中kube-controller-
manager和kube-scheduler组件自身通过选择机制已经实现了高可用，所以Master高可用主要针对
kube-apiserver组件，而该组件是以HTTP API提供服务，因此对他高可用与Web服务器类似，增加
负载均衡器对其负载均衡即可，并且可水平扩容。

多主多从架构架构服务器规划
</code></pre>
<table>
<thead>
<tr>
<th style="text-align:left">角色</th>
<th style="text-align:left">IP</th>
<th style="text-align:center">组件</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">binary-k8s-master1</td>
<td style="text-align:left">192.168.0.9</td>
<td style="text-align:center">etcd <br> docker <br> kube-apiserver kube-controller-manager kube-scheduler <br> kubelet kube-proxy <br> nginx keepalived</td>
</tr>
<tr>
<td style="text-align:left">binary-k8s-master2</td>
<td style="text-align:left">192.168.0.12</td>
<td style="text-align:center">etcd <br> docker <br> kube-apiserver kube-controller-manager kube-scheduler <br> kubelet kube-proxy <br> nginx keepalived</td>
</tr>
<tr>
<td style="text-align:left">binary-k8s-worker1</td>
<td style="text-align:left">192.168.0.10</td>
<td style="text-align:center">etcd <br> docker <br> kubelet kube-proxy</td>
</tr>
<tr>
<td style="text-align:left">binary-k8s-worker2</td>
<td style="text-align:left">192.168.0.11</td>
<td style="text-align:center">etcd <br> docker <br> kubelet kube-proxy</td>
</tr>
<tr>
<td style="text-align:left">负载均衡器(虚拟IP)</td>
<td style="text-align:left">192.168.0.88</td>
<td style="text-align:center"></td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">特别说明</p>
<p>现在需要再增加一台新服务器，作为Master2 Node，IP是192.168.0.12。Master Node2 与已部署的
Master Node1所有操作一致。所以我们只需将Master1所有K8s文件拷贝过来，再修改下服务器IP和主机名
启动即可。</p>
</div>
<h3 id="_8-15-2-给master-node2安装docker-8-15-2" tabindex="-1"><a class="header-anchor" href="#_8-15-2-给master-node2安装docker-8-15-2" aria-hidden="true">#</a> 8.15.2.给Master Node2安装Docker {#<em>8_15_2</em>}</h3>
<pre><code>进入Master Node1，将docker安装文件拷贝到Master Node2
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>scp /usr/bin/docker* root@192.168.0.12:/usr/bin &amp;&amp;
scp /usr/bin/runc root@192.168.0.12:/usr/bin &amp;&amp;
scp /usr/bin/containerd* root@192.168.0.12:/usr/bin &amp;&amp;
scp /usr/lib/systemd/system/docker.service \
root@192.168.0.12:/usr/lib/systemd/system &amp;&amp;
scp -r /etc/docker root@192.168.0.12:/etc
</code></pre></div><pre><code>启动Mater Node2上的Docker并设置开机自启
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>systemctl daemon-reload &amp;&amp; systemctl start docker &amp;&amp; systemctl enable docker
</code></pre></div><pre><code>查看启动状态
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>	systemctl status docker
</code></pre></div><h3 id="_8-15-5-给master-node2节点拷贝所有需要的证书-8-15-5" tabindex="-1"><a class="header-anchor" href="#_8-15-5-给master-node2节点拷贝所有需要的证书-8-15-5" aria-hidden="true">#</a> 8.15.5.给Master Node2节点拷贝所有需要的证书 {#<em>8_15_5</em>}</h3>
<pre><code>在Master Node2上创建etcd证书目录
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>mkdir -p /opt/etcd/ssl
</code></pre></div><pre><code>在Master1上拷贝Master1上所有k8s文件和etcd证书到Master2
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>scp -r /opt/kubernetes root@192.168.0.12:/opt &amp;&amp;
scp -r /opt/etcd/ssl root@192.168.0.12:/opt/etcd &amp;&amp;
scp /usr/lib/systemd/system/kube* \
root@192.168.0.12:/usr/lib/systemd/system &amp;&amp;
scp /usr/bin/kubectl  root@192.168.0.12:/usr/bin &amp;&amp;
scp -r ~/.kube root@192.168.0.12:~
</code></pre></div><pre><code>在Master Node2上删除旧的证书（删除kubelet和kubeconfig文件）
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>rm -f /opt/kubernetes/cfg/kubelet.kubeconfig &amp;&amp;
rm -f /opt/kubernetes/ssl/kubelet*
</code></pre></div><pre><code>修改Master2修改配置文件和主机名
修改apiserver、kubelet和kube-proxy配置文件为本地IP
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>vi /opt/kubernetes/cfg/kube-apiserver.conf
</code></pre></div><pre><code>...
--bind-address=192.168.0.12 \
--advertise-address=192.168.0.12 \
...

修改kube-controller-manager配置文件
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>vi /opt/kubernetes/cfg/kube-controller-manager.kubeconfig
</code></pre></div><pre><code>server: https://192.168.0.12:6443

修改kube-scheduler配置文件
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>vi /opt/kubernetes/cfg/kube-scheduler.kubeconfig
</code></pre></div><pre><code>server: https://192.168.0.12:6443
修改kubelet配置文件
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>vi /opt/kubernetes/cfg/kubelet.conf
</code></pre></div><pre><code>--hostname-override=binary-k8s-master2

修改kube-proxy配置文件
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>vi /opt/kubernetes/cfg/kube-proxy-config.yml
</code></pre></div><pre><code>hostnameOverride: binary-k8s-master2
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>vi ~/.kube/config
</code></pre></div><pre><code>...
server: https://192.168.0.12:6443
</code></pre>
<h3 id="_8-15-6-启动master所有服务并设置开机自启-8-15-6" tabindex="-1"><a class="header-anchor" href="#_8-15-6-启动master所有服务并设置开机自启-8-15-6" aria-hidden="true">#</a> 8.15.6.启动Master所有服务并设置开机自启 {#<em>8_15_6</em>}</h3>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>systemctl daemon-reload &amp;&amp;
systemctl start kube-apiserver &amp;&amp;
systemctl start kube-controller-manager &amp;&amp;
systemctl start kube-scheduler &amp;&amp;
systemctl start kubelet kube-proxy &amp;&amp;
systemctl enable kube-apiserver &amp;&amp;
systemctl enable kube-controller-manager &amp;&amp;
systemctl enable kube-scheduler &amp;&amp;
systemctl enable kubelet &amp;&amp;
systemctl enable kube-proxy
</code></pre></div><h3 id="_8-15-7-在master查看集群组件状态-8-15-7" tabindex="-1"><a class="header-anchor" href="#_8-15-7-在master查看集群组件状态-8-15-7" aria-hidden="true">#</a> 8.15.7.在Master查看集群组件状态 {#<em>8_15_7</em>}</h3>
<pre><code>注意：如果上面操作无误则这一步就可以查看到集群中组件的运行状态了

查看组件状态
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl get cs
</code></pre></div><pre><code>[root@localhost ~]# kubectl get cs
Warning: v1 ComponentStatus is deprecated in v1.19+
NAME                 STATUS    MESSAGE             ERROR
controller-manager   Healthy   ok
scheduler            Healthy   ok
etcd-2               Healthy   {&quot;health&quot;:&quot;true&quot;}
etcd-1               Healthy   {&quot;health&quot;:&quot;true&quot;}
etcd-0               Healthy   {&quot;health&quot;:&quot;true&quot;}
</code></pre>
<h3 id="_8-15-8-审批所有worker-node上的kubelet证书申请-8-15-8" tabindex="-1"><a class="header-anchor" href="#_8-15-8-审批所有worker-node上的kubelet证书申请-8-15-8" aria-hidden="true">#</a> 8.15.8.审批所有Worker  Node上的kubelet证书申请 {#<em>8_15_8</em>}</h3>
<pre><code>查看证书申请
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl get csr
</code></pre></div><pre><code>[root@localhost ~]# kubectl get csr
NAME                                                   ... CONDITION ...
node-csr-Pkp1fPd9NZApJVRqRFlIIjskZ_gL_qDmcSWGvSuN-VQ   ... Pending	 ...

同意证书申请
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl certificate approve node-csr-Pkp1fPd9NZApJVRqRFlIIjskZ_gL_qDmcSWGvSuN-VQ
</code></pre></div><pre><code>再次查看证书申请
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl get csr
</code></pre></div><pre><code>[root@localhost ~]# kubectl get csr
NAME                                                  ... CONDITION 	  ...
node-csr-Pkp1fPd9NZApJVRqRFlIIjskZ_gL_qDmcSWGvSuN-VQ  ... Approved,Issued ...

查看节点加入状态没等到所有pods状态都已经变为Running，执行下一步操作
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl get pods -n kube-system
</code></pre></div><pre><code>[root@binary-k8s-master1 ~]# kubectl get pods -n kube-system
NAME                                      READY   STATUS     RESTARTS   AGE
calico-kube-controllers-bcc6f659f-7mf9n   1/1     Running    1          141m
calico-node-768sf                         1/1     Running    0          97m
calico-node-crhh4                         0/1     Init:2/3   0          2m7s
calico-node-hwbm9                         1/1     Running    0          98m
calico-node-vl4db                         1/1     Running    1          141m
coredns-7c878fc47b-n9nfd                  1/1     Running    0          75m
coredns-7c878fc47b-sxvz2                  1/1     Running    0          76m

查看Node
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl get nodes
</code></pre></div><pre><code>binary-k8s-master1   Ready    &lt;none&gt;   153m   v1.20.0
binary-k8s-master2   Ready    &lt;none&gt;   17m    v1.20.0
binary-k8s-worker1   Ready    &lt;none&gt;   142m   v1.20.0
binary-k8s-worker2   Ready    &lt;none&gt;   141m   v1.20.0

至此一个双Master节点k8s集群已经部署完毕，再添加新的Master节点步骤和上面的是相同的
</code></pre>
<h2 id="_8-16-部署nginx-keepalived高可用负载均衡器-8-16" tabindex="-1"><a class="header-anchor" href="#_8-16-部署nginx-keepalived高可用负载均衡器-8-16" aria-hidden="true">#</a> 8.16.部署Nginx+Keepalived高可用负载均衡器 {#<em>8_16</em>}</h2>
<h3 id="_8-16-1-nginx和keepalived简介-8-16-1" tabindex="-1"><a class="header-anchor" href="#_8-16-1-nginx和keepalived简介-8-16-1" aria-hidden="true">#</a> 8.16.1.Nginx和Keepalived简介 {#<em>8_16_1</em>}</h3>
<pre><code>Nginx是一个主流Web服务和反向代理服务器，这里用四层实现对apiserver实现负载均衡。Keepalived是一个主流高可
用软件，基于VIP绑定实现服务器双机热备，在上述拓扑中，Keepalived主要根据Nginx运行状态判断是否需要故障转移
（漂移VIP），例如当Nginx主节点挂掉，VIP会自动绑定在Nginx备节点，从而保证VIP一直可用，实现Nginx高可用。
如果你是在公有云上，一般都不支持keepalived，那么你可以直接用它们的负载均衡器产品，直接负载均衡多台Master 
kube-apiserver，架构与上面一样。
</code></pre>
<h3 id="_8-16-2-在两台master-node上安装软件-8-16-2" tabindex="-1"><a class="header-anchor" href="#_8-16-2-在两台master-node上安装软件-8-16-2" aria-hidden="true">#</a> 8.16.2.在两台Master Node上安装软件 {#<em>8_16_2</em>}</h3>
<pre><code>下载nginx和keepalived
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>yum install epel-release -y &amp;&amp;
yum install nginx keepalived -y
</code></pre></div><pre><code>Nginx配置文件（Master Node1和Master Node2相同）
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cat > /etc/nginx/nginx.conf &lt;&lt; "EOF"
user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log;
pid /run/nginx.pid;

include /usr/share/nginx/modules/*.conf;

events {
    worker_connections 1024;
}

stream {

    log_format main '$remote_addr $upstream_addr - [$time_local] $status $upstream_bytes_sent';

    access_log  /var/log/nginx/k8s-access.log  main;

    upstream k8s-apiserver {
       server 192.168.0.9:6443;   # Master1 APISERVER IP:PORT
       server 192.168.0.12:6443;   # Master2 APISERVER IP:PORT
    }

    server {
       listen 16443; # 由于nginx与master节点复用，这个监听端口不能是6443，否则会冲突
       proxy_pass k8s-apiserver;
    }
}

http {
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile            on;
    tcp_nopush          on;
    tcp_nodelay         on;
    keepalive_timeout   65;
    types_hash_max_size 2048;

    include             /etc/nginx/mime.types;
    default_type        application/octet-stream;

    server {
        listen       80 default_server;
        server_name  _;

        location / {
        }
    }
}
EOF
</code></pre></div><pre><code>Master Node1上的keepalived配置文件
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cat > /etc/keepalived/keepalived.conf &lt;&lt; EOF
global_defs {
   notification_email {
     acassen@firewall.loc
     failover@firewall.loc
     sysadmin@firewall.loc
   }
   notification_email_from Alexandre.Cassen@firewall.loc
   smtp_server 127.0.0.1
   smtp_connect_timeout 30
   router_id NGINX_MASTER
}

vrrp_script check_nginx {
    script "/etc/keepalived/check_nginx.sh"
}

vrrp_instance VI_1 {
    state MASTER
    interface ens33  # 修改为实际网卡名
    virtual_router_id 51 # VRRP 路由 ID实例，每个实例是唯一的
    priority 100    # 优先级，备服务器设置 90
    advert_int 1    # 指定VRRP 心跳包通告间隔时间，默认1秒
    authentication {
        auth_type PASS
        auth_pass 1111
    }
    # 虚拟IP
    virtual_ipaddress {
        192.168.0.88/24
    }
    track_script {
        check_nginx
    }
}
EOF
</code></pre></div><p>​
​	Master Node2的keepalived配置文件</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cat > /etc/keepalived/keepalived.conf &lt;&lt; EOF
global_defs {
   notification_email {
     acassen@firewall.loc
     failover@firewall.loc
     sysadmin@firewall.loc
   }
   notification_email_from Alexandre.Cassen@firewall.loc
   smtp_server 127.0.0.1
   smtp_connect_timeout 30
   router_id NGINX_BACKUP
}

vrrp_script check_nginx {
    script "/etc/keepalived/check_nginx.sh"
}

vrrp_instance VI_1 {
    state BACKUP
    interface ens33
    virtual_router_id 51 # VRRP 路由 ID实例，每个实例是唯一的
    priority 90
    advert_int 1
    authentication {
        auth_type PASS
        auth_pass 1111
    }
    virtual_ipaddress {
        192.168.0.88/24
    }
    track_script {
        check_nginx
    }
}
EOF
</code></pre></div><pre><code>配置说明
​vrrp_script：指定检查nginx工作状态脚本（根据nginx状态判断是否故障转移）
​virtual_ipaddress：虚拟IP（VIP）
​
​准备上述配置文件中检查nginx运行状态的脚本（Master Node1和Master Node2相同）
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cat > /etc/keepalived/check_nginx.sh  &lt;&lt; "EOF"
#!/bin/bash
count=$(ss -antp |grep 16443 |egrep -cv "grep|$$")

if [ "$count" -eq 0 ];then
    exit 1
else
    exit 0
fi
EOF

chmod +x /etc/keepalived/check_nginx.sh
</code></pre></div><p>​	配置说明
​	keepalived根据脚本返回状态码（0为工作正常，非0不正常）判断是否故障转移。</p>
<h3 id="_8-16-3-nginx增加steam模块-8-16-3" tabindex="-1"><a class="header-anchor" href="#_8-16-3-nginx增加steam模块-8-16-3" aria-hidden="true">#</a> 8.16.3.Nginx增加Steam模块 {#<em>8_16_3</em>}</h3>
<h4 id="_8-16-3-1-查看nginx版本模块-8-16-3-1" tabindex="-1"><a class="header-anchor" href="#_8-16-3-1-查看nginx版本模块-8-16-3-1" aria-hidden="true">#</a> 8.16.3.1.查看Nginx版本模块 {#<em>8_16_3_1</em>}</h4>
<pre><code>nginx -V
注意：如果已经安装 --with-stream模块,后面的步骤可以跳过
</code></pre>
<h4 id="_8-16-3-2-master1和master2安装stream模块-8-16-3-2" tabindex="-1"><a class="header-anchor" href="#_8-16-3-2-master1和master2安装stream模块-8-16-3-2" aria-hidden="true">#</a> 8.16.3.2.Master1和Master2安装Stream模块 {#<em>8_16_3_2</em>}</h4>
<pre><code>备份Master Node1和Master Node2上原来的Nginx文件
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>mv /usr/sbin/nginx /usr/sbin/nginx.bak &amp;&amp;
cp -r /etc/nginx{,.bak}
</code></pre></div><pre><code>切换目录并在该目录中下载nginx（注意这里下载的nginx版本要和之前nginx -v查看的版本保持一致，这里我们之前已经下载
好了，存放在Master Node1上，直接使用就可以了）

在Master Node1上切换目录
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cd /opt/k8s/package/
</code></pre></div><pre><code>Master Node1编译环境准备
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>yum -y install libxml2 libxml2-dev libxslt-devel
yum -y install gd-devel
yum -y install perl-devel perl-ExtUtils-Embed
yum -y install GeoIP GeoIP-devel GeoIP-data
yum -y install pcre-devel
yum -y install openssl openssl-devel
yum -y install gcc make
</code></pre></div><pre><code>编译nginx，加上本次需新增的模块: --with-stream
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>tar -xf nginx-1.20.1.tar.gz
cd nginx-1.20.1/
./configure --prefix=/usr/share/nginx --sbin-path=/usr/sbin/nginx \
--modules-path=/usr/lib64/nginx/modules --conf-path=/etc/nginx/nginx.conf  --with-stream
make
</code></pre></div><pre><code>说明:
make完成后不要继续输入“make install”，以免现在的nginx出现问题
以上完成后，会在objs目录下生成一个nginx文件，先验证
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>./objs/nginx -t
</code></pre></div><pre><code>[root@binary-k8s-master1 nginx-1.20.1]# ./objs/nginx -t
nginx: [alert] could not open error log file: open() &quot;/usr/share/nginx/logs/error.log&quot; failed (2: No such file or directory)
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful

替换nginx到Master1/Master2
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cp ./objs/nginx /usr/sbin/ &amp;&amp;
scp objs/nginx root@192.168.0.12:/usr/sbin/
</code></pre></div><pre><code>修改nginx服务文件（Master Node1和Master Node2）
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>rm -rf /usr/lib/systemd/system/nginx.service &amp;&amp;
cat >> /usr/lib/systemd/system/nginx.service &lt;&lt; EOF
[Unit]
Description=The nginx HTTP and reverse proxy server
After=network.target remote-fs.target nss-lookup.target
[Service]
Type=forking
PIDFile=/run/nginx.pid
ExecStartPre=/usr/bin/rm -rf /run/nginx.pid
ExecStartPre=/usr/sbin/nginx -t
ExecStart=/usr/sbin/nginx
ExecStop=/usr/sbin/nginx -s stop
ExecReload=/usr/sbin/nginx -s reload
PrivateTmp=true
[Install]
WantedBy=multi-user.target
EOF
</code></pre></div><h3 id="_8-16-4-启动nginx、keepalived并设置开机自启-master1-master2-8-16-4" tabindex="-1"><a class="header-anchor" href="#_8-16-4-启动nginx、keepalived并设置开机自启-master1-master2-8-16-4" aria-hidden="true">#</a> 8.16.4.启动nginx、keepalived并设置开机自启(master1/master2) {#<em>8_16_4</em>}</h3>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>systemctl daemon-reload &amp;&amp;
systemctl start nginx keepalived &amp;&amp;
systemctl enable nginx keepalived
</code></pre></div><h3 id="_8-16-5-查看keepalived工作状态-8-16-5" tabindex="-1"><a class="header-anchor" href="#_8-16-5-查看keepalived工作状态-8-16-5" aria-hidden="true">#</a> 8.16.5.查看keepalived工作状态 {#<em>8_16_5</em>}</h3>
<pre><code>查看Master1网卡详细信息
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>ip addr
</code></pre></div><pre><code>[root@binary-k8s-master1 ~]# ip addr
...
2: ens33: &lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt; mtu 1500 qdisc pfifo_fast 
		  state UP group default qlen 1000
    link/ether 00:0c:29:8d:76:8c brd ff:ff:ff:ff:ff:ff
    inet 192.168.0.9/24 brd 192.168.0.255 scope global noprefixroute ens33
       valid_lft forever preferred_lft forever
    inet 192.168.0.88/24 scope global ens33
       valid_lft forever preferred_lft forever
    inet6 fe80::5c3d:f3b3:1254:f87b/64 scope link noprefixroute 
       valid_lft forever preferred_lft forever
...

查看Master2网卡详细信息
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>ip addr
</code></pre></div><pre><code>[root@binary-k8s-master1 ~]# ip addr
...
2: ens33: &lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt; mtu 1500 qdisc pfifo_fast state
		 UP group default qlen 1000
    link/ether 00:50:56:2d:95:d6 brd ff:ff:ff:ff:ff:ff
    inet 192.168.0.12/24 brd 192.168.0.255 scope global noprefixroute ens33
       valid_lft forever preferred_lft forever
    inet6 fe80::fe5b:93a6:43c0:3e2e/64 scope link tentative
	    noprefixroute dadfailed
       valid_lft forever preferred_lft forever
    inet6 fe80::5c3d:f3b3:1254:f87b/64 scope link tentative
	    noprefixroute dadfailed
       valid_lft forever preferred_lft forever
    inet6 fe80::7bd2:e647:9e81:ef45/64 scope link tentative
	     noprefixroute dadfailed
       valid_lft forever preferred_lft forever
...

如何确定是否配置成功
可以看到，在Master1上的ens33网卡绑定了192.168.242.55 虚拟IP，说明工作正常。
inet 192.168.242.55/24 scope global ens33，而Master2上的ens33网卡没有绑定虚拟IP
</code></pre>
<h3 id="_8-16-6-nginx-keepalived高可用测试-8-16-6" tabindex="-1"><a class="header-anchor" href="#_8-16-6-nginx-keepalived高可用测试-8-16-6" aria-hidden="true">#</a> 8.16.6.Nginx+keepalived高可用测试 {#<em>8_16_6</em>}</h3>
<pre><code>在主节点Master Node1节点执行关闭nginx
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>pkill nginx
</code></pre></div><pre><code>查看虚拟IP是否漂移到备节点服务器（Master Node2）
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>ip addr
</code></pre></div><pre><code>[root@binary-k8s-master1 ~]# ip addr
...
2: ens33: &lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt; mtu 1500 qdisc pfifo_fast
	state UP group default qlen 1000
link/ether 00:50:56:2d:95:d6 brd ff:ff:ff:ff:ff:ff
inet 192.168.0.12/24 brd 192.168.0.255 scope global noprefixroute ens33
   valid_lft forever preferred_lft forever
inet 192.168.0.88/24 scope global ens33
   valid_lft forever preferred_lft forever
inet6 fe80::fe5b:93a6:43c0:3e2e/64 scope link tentative
    noprefixroute dadfailed valid_lft forever preferred_lft forever
inet6 fe80::5c3d:f3b3:1254:f87b/64 scope link tentative
    noprefixroute dadfailed valid_lft forever preferred_lft forever
inet6 fe80::7bd2:e647:9e81:ef45/64 scope link tentative
    noprefixroute dadfailed valid_lft forever preferred_lft forever
...

如何确定虚拟IP是否发生飘移
可以看到，在Master2上的ens33网卡绑定了192.168.242.55 虚拟IP，说明工作正常。

测试完成后重新启动Master Node1上的nginx
systemctl start nginx
</code></pre>
<h3 id="_8-16-7-测试负载均衡器-8-16-7" tabindex="-1"><a class="header-anchor" href="#_8-16-7-测试负载均衡器-8-16-7" aria-hidden="true">#</a> 8.16.7.测试负载均衡器 {#<em>8_16_7</em>}</h3>
<pre><code>找K8s集群中任意一个节点，使用curl查看K8s版本测试，使用VIP访问
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>curl -k https://192.168.0.88:16443/version
</code></pre></div><pre><code>Master Node1机器
[root@binary-k8s-master1 ~]# curl -k https://192.168.0.88:16443/version
{
  &quot;major&quot;: &quot;1&quot;,
  &quot;minor&quot;: &quot;20&quot;,
  &quot;gitVersion&quot;: &quot;v1.20.10&quot;,
  &quot;gitCommit&quot;: &quot;8152330a2b6ca3621196e62966ef761b8f5a61bb&quot;,
  &quot;gitTreeState&quot;: &quot;clean&quot;,
  &quot;buildDate&quot;: &quot;2021-08-11T18:00:37Z&quot;,
  &quot;goVersion&quot;: &quot;go1.15.15&quot;,
  &quot;compiler&quot;: &quot;gc&quot;,
  &quot;platform&quot;: &quot;linux/amd64&quot;
}

Master Node2机器
[root@binary-k8s-master2 ~]# curl -k https://192.168.0.88:16443/version
{
  &quot;major&quot;: &quot;1&quot;,
  &quot;minor&quot;: &quot;20&quot;,
  &quot;gitVersion&quot;: &quot;v1.20.10&quot;,
  &quot;gitCommit&quot;: &quot;8152330a2b6ca3621196e62966ef761b8f5a61bb&quot;,
  &quot;gitTreeState&quot;: &quot;clean&quot;,
  &quot;buildDate&quot;: &quot;2021-08-11T18:00:37Z&quot;,
  &quot;goVersion&quot;: &quot;go1.15.15&quot;,
  &quot;compiler&quot;: &quot;gc&quot;,
  &quot;platform&quot;: &quot;linux/amd64&quot;
}

Worker Node1机器
[root@binary-k8s-worker1 ~]# curl -k https://192.168.0.88:16443/version
{
  &quot;major&quot;: &quot;1&quot;,
  &quot;minor&quot;: &quot;20&quot;,
  &quot;gitVersion&quot;: &quot;v1.20.10&quot;,
  &quot;gitCommit&quot;: &quot;8152330a2b6ca3621196e62966ef761b8f5a61bb&quot;,
  &quot;gitTreeState&quot;: &quot;clean&quot;,
  &quot;buildDate&quot;: &quot;2021-08-11T18:00:37Z&quot;,
  &quot;goVersion&quot;: &quot;go1.15.15&quot;,
  &quot;compiler&quot;: &quot;gc&quot;,
  &quot;platform&quot;: &quot;linux/amd64&quot;
}

Worker Node2机器
[root@binary-k8s-worker2 ~]# curl -k https://192.168.0.88:16443/version
{
  &quot;major&quot;: &quot;1&quot;,
  &quot;minor&quot;: &quot;20&quot;,
  &quot;gitVersion&quot;: &quot;v1.20.10&quot;,
  &quot;gitCommit&quot;: &quot;8152330a2b6ca3621196e62966ef761b8f5a61bb&quot;,
  &quot;gitTreeState&quot;: &quot;clean&quot;,
  &quot;buildDate&quot;: &quot;2021-08-11T18:00:37Z&quot;,
  &quot;goVersion&quot;: &quot;go1.15.15&quot;,
  &quot;compiler&quot;: &quot;gc&quot;,
  &quot;platform&quot;: &quot;linux/amd64&quot;
}

如何确定负载均衡器是否搭建正常
如果所有节点可以正确获取到K8s版本信息，说明负载均衡器搭建正常。
该请求数据流程：curl -&gt; vip(nginx) -&gt; apiserver

通过查看Nginx日志也可以看到转发apiserver IP：
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>tailf /var/log/nginx/k8s-access.log
</code></pre></div><pre><code>[root@binary-k8s-master1 ~]# tailf /var/log/nginx/k8s-access.log 
192.168.242.55 192.168.0.9:6443 - [26/Jul/2022:01:28:51 -0400] 200 428
192.168.211.128 192.168.0.9:6443 - [26/Jul/2022:01:28:58 -0400] 200 428
192.168.95.192 192.168.0.12:6443 - [26/Jul/2022:01:30:12 -0400] 200 428
192.168.63.192 192.168.0.9:6443 - [26/Jul/2022:01:30:14 -0400] 200 428
192.168.242.55 192.168.0.9:6443 - [26/Jul/2022:01:30:36 -0400] 200 428
192.168.242.55 192.168.0.12:6443 - [26/Jul/2022:01:30:42 -0400] 200 428
</code></pre>
<h3 id="_8-16-8-修改所有的worker-node连接lb-vip-8-16-8" tabindex="-1"><a class="header-anchor" href="#_8-16-8-修改所有的worker-node连接lb-vip-8-16-8" aria-hidden="true">#</a> 8.16.8.修改所有的Worker Node连接LB VIP {#<em>8_16_8</em>}</h3>
<pre><code>为什么要改为连接LB VIP
试想下，虽然我们增加了Master2 Node和负载均衡器，但是我们是从单Master架构扩容的，也就是
说目前所有的Worker Node组件连接都还是Master1 Node，如果不改为连接VIP走负载均衡器，那么
Master还是单点故障。因此接下来就是要改所有Worker Node（kubectl get node命令查看到的节
点）组件配置文件，由原来192.168.0.9修改为192.168.242.55（VIP）。

在所有Worker Node执行
注意事项
这里除了Worker Node1和Worker Node2，Master Node1和Master Node2这两个节点也充当了Worker Node，所以所有的四个节点
上都要执行下面的命令
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>sed -i 's#192.168.0.9:6443#192.168.0.88:16443#' /opt/kubernetes/cfg/* &amp;&amp;
systemctl restart kubelet kube-proxy
</code></pre></div><pre><code>检查节点状态
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>kubectl get nodes
</code></pre></div><pre><code>[root@binary-k8s-master1 cfg]# kubectl get nodes
NAME                 STATUS   ROLES    AGE     VERSION
binary-k8s-master1   Ready    &lt;none&gt;   5h13m   v1.20.0
binary-k8s-master2   Ready    &lt;none&gt;   177m    v1.20.0
binary-k8s-worker1    Ready    &lt;none&gt;   5h1m    v1.20.0
binary-k8s-worker2    Ready    &lt;none&gt;   5h1m    v1.20.0

为了确保配置成功，重启集群中所有机器，再次在Master Node1和Master Node2中查看节点状态，如一切部署无误结果如下所示
[root@binary-k8s-master1 cfg]# kubectl get nodes
NAME                 STATUS   ROLES    AGE     VERSION
binary-k8s-master1   Ready    &lt;none&gt;   5h13m   v1.20.0
binary-k8s-master2   Ready    &lt;none&gt;   177m    v1.20.0
binary-k8s-worker1    Ready    &lt;none&gt;   5h1m    v1.20.0
binary-k8s-worker2    Ready    &lt;none&gt;   5h1m    v1.20.0

至此,一套高可用的k8s二进制可用集群就部署完成了~
^_^
</code></pre>
<h2 id="_8-17-部署常见问题-8-17" tabindex="-1"><a class="header-anchor" href="#_8-17-部署常见问题-8-17" aria-hidden="true">#</a> 8.17.部署常见问题 {#<em>8_17</em>}</h2>
<h3 id="_8-17-1系统断电后-某个etcd节点无法启动" tabindex="-1"><a class="header-anchor" href="#_8-17-1系统断电后-某个etcd节点无法启动" aria-hidden="true">#</a> 8.17.1系统断电后,某个etcd节点无法启动</h3>
<pre><code>报错信息
publish error: etcdserver: request timed out

解决方法(如果没有重要数据,或者刚进行完初始化)
检查日志发现并没有特别明显的错误，根据经验来讲，etcd 节点坏掉一个其实对集群没有大的影响，
这时集群已经可以正常使用了，但是这个坏掉的 etcd 节点并没有启动

#进入 etcd 的数据存储目录进行备份 备份原有数据：
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cd /var/lib/etcd/default.etcd/member/ &amp;&amp;
cp * /data/bak/
</code></pre></div><pre><code>#删除这个目录下的所有数据文件
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>rm -rf /var/lib/etcd/default.etcd/member/*
</code></pre></div><pre><code>#停止另外两台 etcd 节点，因为 etcd 节点启动时需要所有节点一起启动，启动成功后即可使用。
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>systemctl stop etcd &amp;&amp;
systemctl restart etcd
</code></pre></div><h3 id="_8-17-2-the-connection-to-the-server-localhost-8080-was-refused-did-you-specify-the-right-host-or-port" tabindex="-1"><a class="header-anchor" href="#_8-17-2-the-connection-to-the-server-localhost-8080-was-refused-did-you-specify-the-right-host-or-port" aria-hidden="true">#</a> 8.17.2 The connection to the server localhost:8080 was refused - did you specify the right host or port?</h3>
<pre><code>8.10.使用kubectl查看集群状态章节没有正确执行会报这个错
</code></pre>
<h2 id="_8-18-部署测试程序-8-18" tabindex="-1"><a class="header-anchor" href="#_8-18-部署测试程序-8-18" aria-hidden="true">#</a> 8.18.部署测试程序 {#<em>8_18</em>}</h2>
<pre><code>创建guestbook
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
<ScrollIntoPageView/>
</div></template>
