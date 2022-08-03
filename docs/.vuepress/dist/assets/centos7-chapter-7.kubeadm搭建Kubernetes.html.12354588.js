import{_ as n,o as s,c as r,a as t,d as e,e as d,b as i,r as c}from"./app.1d41eb5c.js";const l={},o=e("h1",{id:"_7-kubeadm\u642D\u5EFAkubernetes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-kubeadm\u642D\u5EFAkubernetes","aria-hidden":"true"},"#"),d(" 7.kubeadm\u642D\u5EFAKubernetes")],-1),u=e("h2",{id:"_7-1-\u7AE0\u8282\u5927\u7EB2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-1-\u7AE0\u8282\u5927\u7EB2","aria-hidden":"true"},"#"),d(" 7.1.\u7AE0\u8282\u5927\u7EB2")],-1),v=i(`<h2 id="_7-2-\u7279\u522B\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_7-2-\u7279\u522B\u8BF4\u660E" aria-hidden="true">#</a> 7.2.\u7279\u522B\u8BF4\u660E</h2><pre><code>\u4F7F\u7528kubeadm\u642D\u5EFAKubernetes
</code></pre><h2 id="_7-3-\u6240\u6709\u8282\u70B9\u8BBE\u7F6E\u5BF9\u5E94\u4E3B\u673A\u540D" tabindex="-1"><a class="header-anchor" href="#_7-3-\u6240\u6709\u8282\u70B9\u8BBE\u7F6E\u5BF9\u5E94\u4E3B\u673A\u540D" aria-hidden="true">#</a> 7.3.\u6240\u6709\u8282\u70B9\u8BBE\u7F6E\u5BF9\u5E94\u4E3B\u673A\u540D</h2><pre><code>master\u8282\u70B9
hostnamectl set-hostname master
slave1\u8282\u70B9
hostnamectl set-hostname slave1
slave2\u8282\u70B9	
hostnamectl set-hostname slave2
</code></pre><h2 id="_7-4-\u6240\u6709\u8282\u70B9\u4FEE\u6539hosts" tabindex="-1"><a class="header-anchor" href="#_7-4-\u6240\u6709\u8282\u70B9\u4FEE\u6539hosts" aria-hidden="true">#</a> 7.4.\u6240\u6709\u8282\u70B9\u4FEE\u6539hosts</h2><pre><code>vim /etc/hosts
192.168.0.6 master
192.168.0.7 slave1
192.168.0.8 slave2
</code></pre><h2 id="_7-5-\u6240\u6709\u8282\u70B9\u5173\u95EDselinux" tabindex="-1"><a class="header-anchor" href="#_7-5-\u6240\u6709\u8282\u70B9\u5173\u95EDselinux" aria-hidden="true">#</a> 7.5.\u6240\u6709\u8282\u70B9\u5173\u95EDSELinux</h2><pre><code>\u6682\u65F6\u5173\u95ED
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>setenforce 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u6C38\u4E45\u5173\u95ED
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sed -i --follow-symlinks &#39;s/SELINUX=enforcing/SELINUX=disabled/g&#39; \\
/etc/sysconfig/selinux
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-6-\u6240\u6709\u8282\u70B9\u5173\u95ED\u9632\u706B\u5899" tabindex="-1"><a class="header-anchor" href="#_7-6-\u6240\u6709\u8282\u70B9\u5173\u95ED\u9632\u706B\u5899" aria-hidden="true">#</a> 7.6.\u6240\u6709\u8282\u70B9\u5173\u95ED\u9632\u706B\u5899</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl stop firewalld &amp;&amp;
systemctl disable firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-7-\u6240\u6709\u8282\u70B9\u5B89\u88C5docker" tabindex="-1"><a class="header-anchor" href="#_7-7-\u6240\u6709\u8282\u70B9\u5B89\u88C5docker" aria-hidden="true">#</a> 7.7.\u6240\u6709\u8282\u70B9\u5B89\u88C5docker</h2><pre><code>\u5B89\u88C5docker
\u8BE6\u7EC6\u53C2\u80034.1&gt;.\u5B89\u88C5docker

\u4FEE\u6539docker\u914D\u7F6E
vim /etc/docker/daemon.json\uFF0C\u5E76\u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9\uFF1A
#kubernetes\u5B98\u65B9\u63A8\u8350 docker\u7B49\u4F7F\u7528systemd\u4F5C\u4E3Acgroupdriver\uFF0C\u5426\u5219 kubelet \u542F\u52A8\u4E0D\u4E86
&quot;exec-opts&quot;: [&quot;native.cgroupdriver=systemd&quot;]&quot;

\u91CD\u65B0\u8F7D\u5165docker\u914D\u7F6E\u5E76\u91CD\u542Fdocker
systemctl daemon-reload &amp;&amp; systemctl restart docker
</code></pre><h2 id="_7-8-\u6240\u6709\u8282\u70B9\u5B89\u88C5k8s\u6240\u9700\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_7-8-\u6240\u6709\u8282\u70B9\u5B89\u88C5k8s\u6240\u9700\u7EC4\u4EF6" aria-hidden="true">#</a> 7.8.\u6240\u6709\u8282\u70B9\u5B89\u88C5k8s\u6240\u9700\u7EC4\u4EF6</h2><pre><code>\u6DFB\u52A0k8s\u5B89\u88C5\u6E90
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &lt;&lt;EOF &gt; kubernetes.repo
[kubernetes]
name=Kubernetes
baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64
enabled=1
gpgcheck=0
repo_gpgcheck=0
gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg 
https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u4F7F\u7528k8s\u5B89\u88C5\u6E90
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mv kubernetes.repo /etc/yum.repos.d/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u5B89\u88C5\u6240\u9700\u7EC4\u4EF6
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum install -y kubelet-1.22.4 kubectl-1.22.4 kubeadm-1.22.4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u67E5\u770B\u5404\u7EC4\u4EF6\u7248\u672C
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubelet --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl	--version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubeadm --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_7-9-\u6240\u6709\u8282\u70B9\u542F\u52A8kubelet\u548Cdocker" tabindex="-1"><a class="header-anchor" href="#_7-9-\u6240\u6709\u8282\u70B9\u542F\u52A8kubelet\u548Cdocker" aria-hidden="true">#</a> 7.9.\u6240\u6709\u8282\u70B9\u542F\u52A8kubelet\u548Cdocker</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl enable kubelet &amp;&amp; 
systemctl start kubelet &amp;&amp;
systemctl enable docker &amp;&amp;
systemctl start docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-10-\u6240\u6709\u5173\u95EDswap" tabindex="-1"><a class="header-anchor" href="#_7-10-\u6240\u6709\u5173\u95EDswap" aria-hidden="true">#</a> 7.10.\u6240\u6709\u5173\u95EDswap</h2><pre><code>\u4E34\u65F6\u5173\u95EDswap\u5206\u533A
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>swapoff /mnt/swap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u6C38\u4E45\u5173\u95EDswap\u5206\u533A
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sed -ri &#39;s/.*swap.*/#&amp;/&#39; /etc/fstab &amp;&amp; systemctl reboot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u67E5\u770Bswap\u5206\u533A\u662F\u5426\u5173\u95ED	
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>free -m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_7-11-\u7528kubeadm-\u521D\u59CB\u5316\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#_7-11-\u7528kubeadm-\u521D\u59CB\u5316\u96C6\u7FA4" aria-hidden="true">#</a> 7.11.\u7528kubeadm \u521D\u59CB\u5316\u96C6\u7FA4</h2><pre><code>\u7279\u522B\u6CE8\u610F
\u53EA\u5728Master\u8282\u70B9\u64CD\u4F5C

\u521D\u59CB\u5316\u96C6\u7FA4\u63A7\u5236\u53F0 Control plane\uFF0C\u5931\u8D25\u4E86\u53EF\u4EE5\u7528 kubeadm reset \u91CD\u7F6E

\u521D\u59CB\u5316\u96C6\u7FA4\u547D\u4EE4
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubeadm init \\
	--apiserver-advertise-address=192.168.0.6 \\
	--image-repository registry.aliyuncs.com/google_containers \\
	--kubernetes-version v1.22.4 \\
	--service-cidr=10.96.0.0/12 \\
	--pod-network-cidr=10.244.0.0/16 \\
	--ignore-preflight-errors=all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u547D\u4EE4\u8BF4\u660E\uFF1A	
\u8FD9\u4E2A\u53C2\u6570\u5C31\u662Fmaster\u4E3B\u673A\u7684IP\u5730\u5740\uFF0C\u4F8B\u5982\u6211\u7684Master\u4E3B\u673A\u7684IP\u662F\uFF1A192.168.181.131	
--apiserver-advertise-address=192.168.181.131    
\u8FD9\u4E2A\u662F\u955C\u50CF\u5730\u5740\uFF0C\u7531\u4E8E\u56FD\u5916\u5730\u5740\u65E0\u6CD5\u8BBF\u95EE\uFF0C\u6545\u4F7F\u7528\u7684\u963F\u91CC\u4E91\u4ED3\u5E93\u5730\u5740\uFF1A		
registry.aliyuncs.com/google_containers
--image-repository=registry.aliyuncs.com/google_containers
\u8FD9\u4E2A\u53C2\u6570\u662F\u4E0B\u8F7D\u7684k8s\u8F6F\u4EF6\u7248\u672C\u53F7\uFF0C\u53EF\u4F7F\u7528kubeadm config images list\u67E5\u8BE2
--kubernetes-version=v1.17.4   
\u8FD9\u4E2A\u53C2\u6570\u540E\u7684IP\u5730\u5740\u76F4\u63A5\u5C31\u5957\u752810.96.0.0/12 ,\u4EE5\u540E\u5B89\u88C5\u65F6\u4E5F\u5957\u7528\u5373\u53EF\uFF0C\u4E0D\u8981\u66F4\u6539
--service-cidr=10.96.0.0/12
k8s\u5185\u90E8\u7684pod\u8282\u70B9\u4E4B\u95F4\u7F51\u7EDC\u53EF\u4EE5\u4F7F\u7528\u7684IP\u6BB5\uFF0C\u4E0D\u80FD\u548Cservice-cidr\u5199\u4E00\u6837\uFF0C\u5982\u679C\u4E0D\u77E5\u9053\u600E\u4E48\u914D\uFF0C\u5C31\u5148
	\u7528\u8FD9\u4E2A10.244.0.0/16
--pod-network-cidr=10.244.0.0/16

\u542F\u52A8\u6210\u529F\u540E\u63A7\u5236\u53F0\u8F93\u51FA\u5176\u4ED6\u8282\u70B9\u52A0\u5165\u4E3B\u8282\u70B9\u7684\u79D8\u94A5:\u6BCF\u6B21\u6267\u884C kubeadm init\u540E\u8FD9\u4E2A\u79D8\u94A5\u4F1A\u53D1\u751F\u53D8\u5316
\u5982\uFF1Akubeadm join 192.168.0.6:6443 \\
	--token e60qrb.6321jolakk1aix90 \\
	--discovery-token-ca-cert-hash \\
	sha256:02829b33a24eef53805ffedef79c0371cb4d9ac0d04bfad7fe26eb022cb638ac
\u6CE8\u610F
\u53EF\u4EE5\u4FDD\u5B58\u79D8\u94A5\uFF0C\u65B9\u4FBF\u5728\u5176\u4ED6\u8282\u70B9\u4E0A\u4F7F\u7528 
\u91CD\u65B0\u83B7\u53D6kubeadm join...
kubeadm token create --print-join-command	
					
\u590D\u5236\u6388\u6743\u6587\u4EF6\uFF0C\u4EE5\u4FBF kubectl \u53EF\u4EE5\u6709\u6743\u9650\u8BBF\u95EE\u96C6\u7FA4
\u5982\u679C\u5176\u4ED6\u8282\u70B9\u9700\u8981\u8BBF\u95EE\u96C6\u7FA4\uFF0C\u9700\u8981\u4ECE\u4E3B\u8282\u70B9\u590D\u5236\u8FD9\u4E2A\u6587\u4EF6\u8FC7\u53BB\u5176\u4ED6\u8282\u70B9
mkdir -p $HOME/.kube
cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
chown $(id -u):$(id -g) $HOME/.kube/config
</code></pre><h2 id="_7-12-\u5176\u4ED6\u8282\u70B9\u8FDE\u63A5\u5230master\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#_7-12-\u5176\u4ED6\u8282\u70B9\u8FDE\u63A5\u5230master\u8282\u70B9" aria-hidden="true">#</a> 7.12.\u5176\u4ED6\u8282\u70B9\u8FDE\u63A5\u5230Master\u8282\u70B9</h2><pre><code>\u5728\u4E24\u4E2A\u4E0ASlave\u8282\u70B9\u8F93\u5165\u7B2C9&gt;&gt;.\u6B65\u9AA4\u5728\u4E3B\u8282\u70B9\u4E0A\u83B7\u53D6\u7684\u79D8\u94A5
\u5982\uFF1Akubeadm join 192.168.0.6:6443 \\
	--token e60qrb.6321jolakk1aix90 \\
	--discovery-token-ca-cert-hash \\
	sha256:02829b33a24eef53805ffedef79c0371cb4d9ac0d04bfad7fe26eb022cb638ac
	
\u52A0\u5165\u6210\u529F\u540E\u770B\u5230:
	This node has joined the cluster
</code></pre><h2 id="_7-13-\u5728master\u8282\u70B9\u4E0A\u67E5\u770B\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#_7-13-\u5728master\u8282\u70B9\u4E0A\u67E5\u770B\u96C6\u7FA4" aria-hidden="true">#</a> 7.13.\u5728master\u8282\u70B9\u4E0A\u67E5\u770B\u96C6\u7FA4</h2><pre><code>mater\u8282\u70B9\u548C\u4E24\u4E2Aslave\u8282\u70B9STATUS\u662FNOTReady
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl get nodes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>[root@master ~]# kubectl get nodes
NAME     STATUS     ROLES                  AGE     VERSION
master   NotReady      control-plane,master   9m32s   v1.22.4
slave1   NotReady   &lt;none&gt;                 5m51s   v1.22.4
slave2   NotReady      &lt;none&gt;                 2m31s   v1.22.4
</code></pre><h2 id="_7-14-\u5B89\u88C5\u7F51\u7EDC\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#_7-14-\u5B89\u88C5\u7F51\u7EDC\u63D2\u4EF6" aria-hidden="true">#</a> 7.14.\u5B89\u88C5\u7F51\u7EDC\u63D2\u4EF6</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl apply -f \\
	https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-15-\u5728master\u4E0A\u67E5\u770B\u96C6\u7FA4\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#_7-15-\u5728master\u4E0A\u67E5\u770B\u96C6\u7FA4\u8282\u70B9" aria-hidden="true">#</a> 7.15.\u5728master\u4E0A\u67E5\u770B\u96C6\u7FA4\u8282\u70B9</h2><pre><code>\u518D\u6B21\u6267\u884C\u547D\u4EE4\u67E5\u770B\u96C6\u7FA4\u547D\u4EE4\uFF0Cmater\u8282\u70B9STATUS\u662FReady\uFF0C\u4E24\u4E2Aslave\u8282\u70B9STATUS\u662F\u90FD\u662FReady
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl get nodes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>[root@master ~]# kubectl get nodes
NAME     STATUS     ROLES                  AGE     VERSION
master   Ready      control-plane,master   9m32s   v1.22.4
slave1   Ready   &lt;none&gt;                 5m51s   v1.22.4
slave2   Ready      &lt;none&gt;                 2m31s   v1.22.4	
\u6CE8\u610F\u4E8B\u9879
\u5982\u679C\u4E24\u4E2A\u4ECE\u8282\u70B9\u4E2D\u6709\u4E00\u4E2A\u8282\u70B9\u72B6\u6001\u662FNotReady\uFF0C\u53E6\u4E00\u4E2A\u8282\u70B9\u72B6\u6001\u662FReady\uFF0C\u4E0D\u8981\u7740\u6025\uFF0C\u8981\u591A\u7B49\u4E00\u4F1A\u513F
\u518D\u4F7F\u7528\u547D\u4EE4kubectl get nodes\u67E5\u770B\u96C6\u7FA4\u8282\u70B9\uFF0C\u5C31\u53EF\u4EE5\u770B\u5230\u6240\u6709\u8282\u70B9\u90FD\u662FReady
</code></pre><h2 id="_7-16-\u542F\u52A8\u6545\u969C\u89E3\u51B3" tabindex="-1"><a class="header-anchor" href="#_7-16-\u542F\u52A8\u6545\u969C\u89E3\u51B3" aria-hidden="true">#</a> 7.16.\u542F\u52A8\u6545\u969C\u89E3\u51B3</h2><pre><code>\u67E5\u770B\u6240\u6709\u547D\u540D\u7A7A\u95F4\u7684\u6240\u6709\u7684pod
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl get pods -o wide --all-namespaces
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u67E5\u770B\u542F\u52A8\u5931\u8D25\u7684pod\u7684\u65E5\u5FD7\uFF0C\u5176\u4E2DPODNAME\u4E3A\u542F\u52A8\u5931\u8D25\u7684pod\u7684name
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl -n kube-system logs PODNAME
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u91CD\u7F6Ekubeadm
\u53EF\u4F7F\u7528kubeadm reset\u547D\u4EE4\u91CD\u542Fkubeadm\uFF0C\u518D\u4ECE\u7B2C9&gt;&gt;.\u6B65\u9AA4\u5F00\u59CB\u91CD\u65B0\u6267\u884C
</code></pre><h2 id="_7-17-\u57FA\u7840\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_7-17-\u57FA\u7840\u547D\u4EE4" aria-hidden="true">#</a> 7.17.\u57FA\u7840\u547D\u4EE4</h2><pre><code>\u67E5\u770Bkubeadm\u9700\u8981\u7684\u7EC4\u4EF6\u7684\u7248\u672C
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubeadm config images list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u67E5\u770B\u6240\u6709\u8282\u70B9
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl get nodes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u67E5\u770Bpod
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl get pod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u67E5\u770B\u6240\u6709\u547D\u540D\u7A7A\u95F4\u7684\u6240\u6709pod
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl get pods -o wide --all-namespaces
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u67E5\u770Bpod\u65E5\u5FD7
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl describe pod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_7-18-\u90E8\u7F72\u7B2C\u4E00\u4E2A\u7A0B\u5E8F\u5230k8s\u4E2D" tabindex="-1"><a class="header-anchor" href="#_7-18-\u90E8\u7F72\u7B2C\u4E00\u4E2A\u7A0B\u5E8F\u5230k8s\u4E2D" aria-hidden="true">#</a> 7.18.\u90E8\u7F72\u7B2C\u4E00\u4E2A\u7A0B\u5E8F\u5230k8s\u4E2D</h2><pre><code>\u5F00\u59CB\u8FD0\u884C guestbook
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl create deployment guestbook --image=ibmcom/guestbook:v1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u67E5\u8BE2pod\u8FD0\u884C\u72B6\u6001\uFF0C\u72B6\u6001\u5E94\u8BE5\u663E\u793A\u4E3ARunning\u8868\u793Apod\u8FD0\u884C\u6210\u529F
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl get pods
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u5BF9\u5916\u66B4\u9732\u7AEF\u53E3
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl expose deployment guestbook --type=NodePort --port=3000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u67E5\u8BE2\u7AEF\u53E3\u6620\u5C04	
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl get service guestbook
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>NAME        TYPE       CLUSTER-IP     EXTERNAL-IP   PORT(S)          AGE
guestbook   NodePort   10.10.10.253   &lt;none&gt;        3000:31208/TCP   1m

\u8BBF\u95EE\u670D\u52A1\uFF08\u4E3B\u8282\u70B9\u548C\u4E24\u4E2A\u5DE5\u4F5C\u8282\u70B9\u90FD\u53EF\u8BBF\u95EE\u5230\u8FD9\u4E2A\u670D\u52A1\uFF09
http://192.168.0.6:31208
http://192.168.0.7:31208
http://192.168.0.8:31208
</code></pre><h2 id="_7-19-\u53EF\u89C6\u5316\u9762\u677Fkuboard" tabindex="-1"><a class="header-anchor" href="#_7-19-\u53EF\u89C6\u5316\u9762\u677Fkuboard" aria-hidden="true">#</a> 7.19.\u53EF\u89C6\u5316\u9762\u677Fkuboard</h2><pre><code>\u5B89\u88C5
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl apply -f https://addons.kuboard.cn/kuboard/kuboard-v3.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u67E5\u770B\u662F\u5426\u5B89\u88C5\u6210\u529F\uFF0C\u6240\u6709\u8282\u70B9\u72B6\u6001\u90FD\u662FReady\u8868\u793A\u5B89\u88C5\u6210\u529F
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl get pods -n kuboard
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u767B\u5F55kuboard-v3
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>http://192.168.0.6:30080	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u7528\u6237\u540D/\u5BC6\u7801\uFF1A admin/Kuboard123

\u67E5\u770Bkuboard\u6240\u6709\u76F8\u5173\u7684pod\u662F\u5426\u6210\u529F\u8FD0\u884C,\u72B6\u6001\u4E3ARUNNING\u4EE3\u8868\u6210\u529F\u8FD0\u884C
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>watch kubectl get pods -n kuboard
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u67E5\u770B\u542F\u52A8\u65E5\u5FD7
\u83B7\u53D6kuboard\u547D\u540D\u7A7A\u95F4\u4E2D\u76F8\u5173pod\u7684name
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>watch kubectl get pods -n kuboard
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u6839\u636Epod\u540D\u79F0\u67E5\u770Bpod\u65E5\u5FD7
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl logs -n kuboard kuboard-v3-5fc46b5557-jlsrj
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u542F\u52A8\u6545\u969C\u6392\u67E5
\u67E5\u770Bdocker\u4E2D\u90E8\u7F72\u7684kuboard\u76F8\u5173\u5BB9\u5668\u662F\u5426\u90FD\u6210\u529F\u542F\u52A8\u4E86\uFF0C\u5982\u679C\u76F8\u5173\u5BB9\u5668\u6CA1\u6709\u91CD\u65B0\u542F\u52A8\uFF0C\u53EF\u91CD\u542F\u4E00\u4E0Bdocker
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker ps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u7279\u522B\u6CE8\u610F
\u8FD9\u4E2Akuboard\u90E8\u5206pod\u542F\u52A8\uFF08\u5C31\u7EEA\uFF09\u7684\u53EF\u80FD\u5F88\u6162\uFF0C\u9700\u8981\u8010\u5FC3\u7B49\u5F85\uFF0C\u7B49\u5F85\u4E00\u5B9A\u65F6\u95F4\u540E\u518D\u4F7F\u7528\u547D\u4EE4\u67E5\u770B\u662F\u5426\u90FD\u542F\u52A8\u6210\u529F\u4E86
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>watch kubectl get pods -n kuboard
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u5378\u8F7Dkuboard-v3
\u6267\u884C\u5378\u8F7D\u547D\u4EE4
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>	kubectl delete -f https://addons.kuboard.cn/kuboard/kuboard-v3.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u6E05\u7406\u9057\u7559\u6570\u636E
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>rm -rf /usr/share/kuboard
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,99);function m(b,p){const a=c("Markmap");return s(),r("div",null,[o,u,t(a,{localtion:"/markmap/environment/centos/chapter/centos7-outline5-chapter7.html"}),v])}var h=n(l,[["render",m],["__file","centos7-chapter-7.kubeadm\u642D\u5EFAKubernetes.html.vue"]]);export{h as default};
