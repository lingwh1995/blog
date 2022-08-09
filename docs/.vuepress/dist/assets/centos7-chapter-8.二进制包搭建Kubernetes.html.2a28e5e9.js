import{_ as i,o as s,c as d,a as t,b as e,r}from"./app.af9ae738.js";const a={},l=e(`<h1 id="_8-\u4E8C\u8FDB\u5236\u5305\u642D\u5EFAkubernetes" tabindex="-1"><a class="header-anchor" href="#_8-\u4E8C\u8FDB\u5236\u5305\u642D\u5EFAkubernetes" aria-hidden="true">#</a> 8.\u4E8C\u8FDB\u5236\u5305\u642D\u5EFAKubernetes</h1><h2 id="_8-1-\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_8-1-\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0" aria-hidden="true">#</a> 8.1.\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0</h2><pre><code>\u672C\u7AE0\u8282\u6D89\u53CA\u4E3B\u8981\u5185\u5BB9\u6709\uFF1A
 8.1.\u73AF\u5883\u914D\u7F6E\u6E05\u5355
 8.2.\u670D\u52A1\u5668\u89C4\u5212\u548CIP\u5730\u5740\u89C4\u5212
 8.3.\u5B89\u88C5\u524D\u51C6\u5907\u5DE5\u4F5C
 8.4.\u5B89\u88C5cfssl\u8BC1\u4E66\u751F\u6210\u5DE5\u5177
 8.5.\u642D\u5EFAetcd\u96C6\u7FA4
 8.6.\u5B89\u88C5\u914D\u7F6EDocker
 8.7.\u642D\u5EFAkube-apiserver
 8.8.\u5728Master Node1\u4E0A\u90E8\u7F72kube-controller-manager
 8.9.\u90E8\u7F72kube-scheduler
 8.10.\u4F7F\u7528kubectl\u67E5\u770B\u96C6\u7FA4\u72B6\u6001
 8.11.\u5728Master Node1\u4E0A\u90E8\u7F72\u7B2C\u4E00\u4E2AWorker Node
 8.12.\u589E\u52A0Worker Node
 8.13.\u589E\u52A0Master2\u8282\u70B9
 8.14.\u90E8\u7F72Nginx+Keepalived\u9AD8\u53EF\u7528\u8D1F\u8F7D\u5747\u8861\u5668
 8.15.\u90E8\u7F72\u5E38\u89C1\u95EE\u9898
 8.16.\u90E8\u7F72\u6D4B\u8BD5\u7A0B\u5E8F
\u5177\u4F53\u6BCF\u4E2A\u5C0F\u8282\u4E2D\u5305\u542B\u7684\u5185\u5BB9\u53EF\u4F7F\u901A\u8FC7\u4E0B\u9762\u7684\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2\u8FDB\u884C\u67E5\u770B\uFF0C\u672C\u7AE0\u8282\u5185\u5BB9\u4E2D\u56FE\u7247\u8F83\u5C11\uFF0C\u4E3B\u8981\u4EE5\u5B9E\u7528\u4E3A\u4E3B\uFF0C\u6240\u6709\u4EE3\u7801
\u5747\u7ECF\u8FC7\u4E25\u683C\u6D4B\u8BD5\uFF0C\u53EF\u76F4\u63A5\u590D\u5236\u8FD0\u884C\u5373\u53EF\u3002
</code></pre><h2 id="_8-2-\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2" tabindex="-1"><a class="header-anchor" href="#_8-2-\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2" aria-hidden="true">#</a> 8.2.\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2</h2>`,4),c=e(`<h2 id="_8-3-\u73AF\u5883\u914D\u7F6E\u6E05\u5355" tabindex="-1"><a class="header-anchor" href="#_8-3-\u73AF\u5883\u914D\u7F6E\u6E05\u5355" aria-hidden="true">#</a> 8.3.\u73AF\u5883\u914D\u7F6E\u6E05\u5355</h2><pre><code>\u64CD\u4F5C\u7CFB\u7EDF									centos7
\u5185\u6838\u7248\u672C									3.10.0-1160.71.1.el7.x86_64
docker\u7248\u672C
etcd\u7248\u672C
Kubernetes\u7248\u672C
kube-apiserver\u7248\u672C
kube-controller-manager\u7248\u672C
kube-scheduler\u7248\u672C
nginx\u7248\u672C
keepalive\u7248\u672C
coredns\u7248\u672C
\u8BF4\u660E
Kubernetes\u89E3\u538B\u540E
</code></pre><h2 id="_8-4-\u670D\u52A1\u5668\u89C4\u5212\u548Cip\u5730\u5740\u89C4\u5212" tabindex="-1"><a class="header-anchor" href="#_8-4-\u670D\u52A1\u5668\u89C4\u5212\u548Cip\u5730\u5740\u89C4\u5212" aria-hidden="true">#</a> 8.4.\u670D\u52A1\u5668\u89C4\u5212\u548CIP\u5730\u5740\u89C4\u5212</h2><h3 id="_8-4-1\u670D\u52A1\u5668\u89C4\u5212" tabindex="-1"><a class="header-anchor" href="#_8-4-1\u670D\u52A1\u5668\u89C4\u5212" aria-hidden="true">#</a> 8.4.1\u670D\u52A1\u5668\u89C4\u5212</h3><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F\u4E8B\u9879</p><p>\u5982\u679C\u8981\u642D\u5EFA\u4E00\u4E3B\u591A\u4ECE\u975E\u9AD8\u53EF\u7528Kubernetes\u96C6\u7FA4\uFF0C\u4F7F\u7528\u670D\u52A1\u5668\u89C4\u52121<br> \u5982\u679C\u8981\u642D\u5EFA\u591A\u4E3B\u591A\u4ECE\u9AD8\u53EF\u7528Kubernetes\u96C6\u7FA4\uFF0C\u4F7F\u7528\u670D\u52A1\u5668\u89C4\u52122</p></div><pre><code>\u670D\u52A1\u5668\u89C4\u52121\uFF1A\u4E00\u4E3B\u591A\u4ECE\u670D\u52A1\u5668\u89C4\u5212
</code></pre><table><thead><tr><th style="text-align:left;">\u89D2\u8272</th><th style="text-align:left;">IP</th><th style="text-align:center;">\u7EC4\u4EF6</th></tr></thead><tbody><tr><td style="text-align:left;">binary-k8s-master1</td><td style="text-align:left;">192.168.0.9</td><td style="text-align:center;">etcd <br> docker <br> kube-apiserver kube-controller-manager kube-scheduler<br> kubelet kube-proxy</td></tr><tr><td style="text-align:left;">binary-k8s-worker1</td><td style="text-align:left;">192.168.0.10</td><td style="text-align:center;">etcd <br> docker <br> kubelet kube-proxy</td></tr><tr><td style="text-align:left;">binary-k8s-worker1</td><td style="text-align:left;">192.168.0.11</td><td style="text-align:center;">etcd <br> docker <br> kubelet kube-proxy</td></tr></tbody></table><pre><code>\u670D\u52A1\u5668\u89C4\u52122\uFF1A\u591A\u4E3B\u591A\u4ECE\u9AD8\u53EF\u7528\u670D\u52A1\u5668\u89C4\u5212
</code></pre><table><thead><tr><th style="text-align:left;">\u89D2\u8272</th><th style="text-align:left;">IP</th><th style="text-align:center;">\u7EC4\u4EF6</th></tr></thead><tbody><tr><td style="text-align:left;">binary-k8s-master1</td><td style="text-align:left;">192.168.0.9</td><td style="text-align:center;">etcd <br> docker <br> kube-apiserver kube-controller-manager kube-scheduler <br> kubelet kube-proxy <br> nginx keepalived</td></tr><tr><td style="text-align:left;">binary-k8s-master2</td><td style="text-align:left;">192.168.0.12</td><td style="text-align:center;">etcd <br> docker <br> kube-apiserver kube-controller-manager kube-scheduler <br> kubelet kube-proxy <br> nginx keepalived</td></tr><tr><td style="text-align:left;">binary-k8s-worker1</td><td style="text-align:left;">192.168.0.10</td><td style="text-align:center;">etcd <br> docker <br> kubelet kube-proxy</td></tr><tr><td style="text-align:left;">binary-k8s-worker2</td><td style="text-align:left;">192.168.0.11</td><td style="text-align:center;">etcd <br> docker <br> kubelet kube-proxy</td></tr><tr><td style="text-align:left;">\u8D1F\u8F7D\u5747\u8861\u5668(\u865A\u62DFIP)</td><td style="text-align:left;">192.168.0.88</td><td style="text-align:center;"></td></tr></tbody></table><h3 id="_8-4-2-ip\u5730\u5740\u89C4\u5212" tabindex="-1"><a class="header-anchor" href="#_8-4-2-ip\u5730\u5740\u89C4\u5212" aria-hidden="true">#</a> 8.4.2.IP\u5730\u5740\u89C4\u5212</h3><pre><code>IP\u5730\u5740\u89C4\u5212
kubernetes\u81EA\u8EAB\u4F7F\u7528\u7684ClusterIP\uFF1A10.0.0.1
\u672C\u5730\u56DE\u73AF\u5730\u5740\uFF1A127.0.0.1
Master1:192.168.0.9
worker1:192.168.0.10
worker2:192.168.0.11
Master2:168.168.0.12
keepalive\u865A\u62DFIP: 192.168.0.88
\u9884\u7559IP\u4F4D\u7F6E1\uFF1A168.168.0.13
\u9884\u7559IP\u4F4D\u7F6E2\uFF1A168.168.0.14
\u9884\u7559IP\u4F4D\u7F6E3\uFF1A168.168.0.15
\u9884\u7559IP\u4F4D\u7F6E4\uFF1A168.168.0.17
\u9884\u7559IP\u4F4D\u7F6E5\uFF1A168.168.0.18
\u9884\u7559IP\u4F4D\u7F6E6\uFF1A168.168.0.19
\u9884\u7559IP\u4F4D\u7F6E7\uFF1A168.168.0.20
\u9884\u7559IP\u4F4D\u7F6E8\uFF1A168.168.0.100
\u9884\u7559IP\u4F4D\u7F6E9\uFF1A168.168.0.101
\u9884\u7559IP\u4F4D\u7F6E10\uFF1A168.168.0.102
\u9884\u7559IP\u4F4D\u7F6E11\uFF1A168.168.0.103
\u9884\u7559IP\u4F4D\u7F6E12\uFF1A168.168.0.104
\u9884\u7559IP\u4F4D\u7F6E13\uFF1A168.168.0.105

\u6CE8\u610F\u4E8B\u9879
1.\u53EF\u4EE5\u5C06\u8FD9\u4E9BIP\u5730\u5740\u8FDB\u884C\u5206\u7C7B\uFF0C\u5982\u4E0B\u6240\u793A\uFF08\u672C\u6B21\u4E3A\u4E86\u5B66\u4E60\u4F7F\u7528\uFF0C\u5E76\u6CA1\u6709\u8FDB\u884C\u8BE6\u7EC6\u89C4\u5212\uFF09
Etcd Cluster: 192.168.0.xxx
Master Node : 192.168.1.xxx
Worker Node : 192.168.2.xxx
keepalive   : 192.168.3.xx
2.\u4E00\u5B9A\u8981\u591A\u9884\u7559\u4E00\u4E9BIP\u5730\u5740\uFF0C\u5168\u90E8\u5B89\u88C5\u597D\u4E4B\u540E\uFF0C\u518D\u7ED9kube-apiserver\u6DFB\u52A0IP\u5730\u5740\u5F88\u9EBB\u70E6	
</code></pre><h2 id="_8-5-\u5B89\u88C5\u524D\u51C6\u5907\u5DE5\u4F5C" tabindex="-1"><a class="header-anchor" href="#_8-5-\u5B89\u88C5\u524D\u51C6\u5907\u5DE5\u4F5C" aria-hidden="true">#</a> 8.5.\u5B89\u88C5\u524D\u51C6\u5907\u5DE5\u4F5C</h2><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F\u4E8B\u9879</p><p>8.3\u7AE0\u8282\u6D89\u53CA\u5230\u7684\u64CD\u4F5C\u6240\u6709\u7684Master\u8282\u70B9\u548CWorker Node\u90FD\u8981\u6267\u884C\uFF0C\u4E0B\u8F7D\u6240\u6709\u7528\u5230\u7684\u8F6F\u4EF6\u5305\u5305\u53EA\u9700\u8981\u5728Mater Node1\u8FDB\u884C\u5C31\u53EF\u4EE5\u4E86</p></div><h3 id="_8-5-1\u64CD\u4F5C\u7CFB\u7EDF\u521D\u59CB\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#_8-5-1\u64CD\u4F5C\u7CFB\u7EDF\u521D\u59CB\u8BBE\u7F6E" aria-hidden="true">#</a> 8.5.1\u64CD\u4F5C\u7CFB\u7EDF\u521D\u59CB\u8BBE\u7F6E</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl stop firewalld &amp;&amp; systemctl disable firewalld #\u5173\u95ED\u7CFB\u7EDF\u9632\u706B\u5899
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sed -i &#39;s/enforcing/disabled/&#39; /etc/selinux/config #\u6C38\u4E45\u5173\u95EDselinux
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sed -ri &#39;s/.*swap.*/#&amp;/&#39; /etc/fstab #\u6C38\u4E45\u5173\u95EDswap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6839\u636E\u89C4\u5212\u8BBE\u7F6E\u4E3B\u673A\u540D</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>hostnamectl set-hostname binary-k8s-master1 &amp;&amp; systemctl reboot #binary-k8s-master1\uFF08192.168.0.9\uFF09
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>hostnamectl set-hostname binary-k8s-worker1  &amp;&amp; systemctl reboot #binary-k8s-worker1 \uFF08192.168.0.10\uFF09
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>hostnamectl set-hostname binary-k8s-worker2  &amp;&amp; systemctl reboot #binary-k8s-worker2 \uFF08192.168.0.11\uFF09
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>hostnamectl set-hostname binary-k8s-master2 &amp;&amp; systemctl reboot #binary-k8s-master2\uFF08192.168.0.12\uFF09
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u6DFB\u52A0hosts
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt;&gt; /etc/hosts &lt;&lt; EOF
192.168.0.9 binary-k8s-master1
192.168.0.10 binary-k8s-worker1
192.168.0.11 binary-k8s-worker2
192.168.0.12 binary-k8s-master2
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u5C06\u6865\u63A5\u7684IPV4\u6D41\u91CF\u4F20\u9012\u5230iptables\u7684\u94FE
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; /etc/sysctl.d/k8s.conf &lt;&lt; EOF
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u8BA9\u914D\u7F6E\u751F\u6548
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sysctl --system  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u4F7F\u7528\u963F\u91CC\u4E91\u65F6\u95F4\u670D\u52A1\u5668\u8FDB\u884C\u4E34\u65F6\u540C\u6B65
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ntpdate ntp.aliyun.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u8865\u5145\u547D\u4EE4
setenforce 0  #\u4E34\u65F6\u5173\u95EDselinux
swapoff -a	#\u4E34\u65F6\u5173\u95EDswap
</code></pre><h3 id="_8-5-2\u4E0B\u8F7D\u6240\u6709\u7528\u5230\u7684\u8F6F\u4EF6\u5305" tabindex="-1"><a class="header-anchor" href="#_8-5-2\u4E0B\u8F7D\u6240\u6709\u7528\u5230\u7684\u8F6F\u4EF6\u5305" aria-hidden="true">#</a> 8.5.2\u4E0B\u8F7D\u6240\u6709\u7528\u5230\u7684\u8F6F\u4EF6\u5305</h3><pre><code>\u5B89\u88C5curl
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum -y install curl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u521B\u5EFA\u76EE\u5F55\u540E\u5207\u6362\u5230\u8BE5\u76EE\u5F55\u4E2D\uFF0C\u5E76\u5728\u8BE5\u76EE\u5F55\u4E2D\u4E0B\u8F7D\u672C\u6B21\u5B89\u88C5\u6240\u6709\u7528\u5230\u7684\u8F6F\u4EF6\u5305
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir -p /opt/k8s &amp;&amp;
cd /opt/k8s &amp;&amp;
curl -fL -u software-1658989668964:1db7b96a6698ef06009de91348cb797dfd87fc99 \\
&quot;https://lingwh-generic.pkg.coding.net/coding-drive/software/kubernetes-all-2022.7.28.tar.gz?version=latest&quot; \\
-o kubernetes-all.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u89E3\u538Btar\u5305\u5E76\u91CD\u547D\u540D
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>tar -zxvf kubernetes-all.tar.gz &amp;&amp;
mv kubernetes package
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-6-\u5B89\u88C5cfssl\u8BC1\u4E66\u751F\u6210\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#_8-6-\u5B89\u88C5cfssl\u8BC1\u4E66\u751F\u6210\u5DE5\u5177" aria-hidden="true">#</a> 8.6.\u5B89\u88C5cfssl\u8BC1\u4E66\u751F\u6210\u5DE5\u5177</h2><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F\u4E8B\u9879</p><p>8.4\u7AE0\u8282\u6D89\u53CA\u5230\u7684\u64CD\u4F5C\u53EA\u5728Master Node1\u8282\u70B9\u4E0A\u8FDB\u884C\u64CD\u4F5C</p></div><pre><code>cfssl\u7B80\u4ECB
cfssl\u662F\u4E00\u4E2A\u5F00\u6E90\u7684\u8BC1\u4E66\u7BA1\u7406\u5DE5\u5177\uFF0C\u4F7F\u7528json\u6587\u4EF6\u751F\u6210\u8BC1\u4E66\uFF0C\u76F8\u6BD4openssl\u66F4\u65B9\u4FBF\u4F7F\u7528,\u8FD9\u91CC\u5728Master Node1\u8282\u70B9\u64CD\u4F5C\u540E\u590D
\u5236\u5230\u5176\u4ED6\u8282\u70B9\uFF0C\u4E0D\u9700\u8981\u5728\u6240\u6709\u8282\u70B9\u4E0A\u64CD\u4F5C\u3002

\u5207\u6362\u5230\u5B58\u653Ecfssl-utils\u7684\u76EE\u5F55\u4E2D\uFF0C\u7ED9cfssl-utils\u8D4B\u4E88\u8FD0\u884C\u6743\u9650\u5E76\u62F7\u8D1D\u4E00\u4EFD\u5230/usr/bin/\u76EE\u5F55\u4E2D
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd /opt/k8s/package/cfssl-utils &amp;&amp; chmod +x * &amp;&amp;
cp cfssl_linux-amd64 /usr/local/bin/cfssl &amp;&amp;
cp cfssljson_linux-amd64 /usr/local/bin/cfssljson &amp;&amp;
cp cfssl-certinfo_linux-amd64 /usr/bin/cfssl-certinfo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-7-\u642D\u5EFAetcd\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#_8-7-\u642D\u5EFAetcd\u96C6\u7FA4" aria-hidden="true">#</a> 8.7.\u642D\u5EFAetcd\u96C6\u7FA4</h2><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F\u4E8B\u9879</p><p>8.5\u7AE0\u8282\u6D89\u53CA\u5230\u7684\u64CD\u4F5C\u4E0D\u8981\u4E00\u6B21\u6027\u5728\u6240\u6709\u8282\u70B9\u4E0A\u64CD\u4F5C\uFF0C\u5728Master1\u64CD\u4F5C\u540E\u590D\u5236\u5230\u5176\u4ED6\u8282\u70B9\uFF0C\u8FD9\u6837\u6BD4\u76F4\u63A5\u5728\u6240\u6709\u8282\u70B9\u4E0A\u64CD\u4F5C\u8981\u5FEB</p></div><h3 id="_8-7-1\u751F\u6210ca\u8BC1\u4E66\u548Chttps\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#_8-7-1\u751F\u6210ca\u8BC1\u4E66\u548Chttps\u8BC1\u4E66" aria-hidden="true">#</a> 8.7.1\u751F\u6210CA\u8BC1\u4E66\u548Chttps\u8BC1\u4E66</h3><pre><code>\u521B\u5EFA\u5B58\u653Eetcd\u8BC1\u4E66\u914D\u7F6E\u6587\u4EF6\u548C\u751F\u6210\u8BC1\u4E66\u7684\u76EE\u5F55
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir -p ~/TLS/{etcd,k8s} &amp;&amp; cd /root/TLS/etcd/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u8BBE\u7F6E\u81EA\u7B7E\u8BC1\u4E66\u9881\u53D1\u673A\u6784(CA)
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; ca-config.json &lt;&lt; EOF
{
  &quot;signing&quot;: {
    &quot;default&quot;: {
      &quot;expiry&quot;: &quot;87600h&quot;
    },
    &quot;profiles&quot;: {
      &quot;www&quot;: {
         &quot;expiry&quot;: &quot;87600h&quot;,
         &quot;usages&quot;: [
            &quot;signing&quot;,
            &quot;key encipherment&quot;,
            &quot;server auth&quot;,
            &quot;client auth&quot;
        ]
      }
    }
  }
}
EOF

cat &gt; ca-csr.json &lt;&lt; EOF
{
    &quot;CN&quot;: &quot;etcd CA&quot;,
    &quot;key&quot;: {
        &quot;algo&quot;: &quot;rsa&quot;,
        &quot;size&quot;: 2048
    },
    &quot;names&quot;: [
        {
            &quot;C&quot;: &quot;CN&quot;,
            &quot;L&quot;: &quot;YuMingYu&quot;,
            &quot;ST&quot;: &quot;YuMingYu&quot;
        }
    ]
}
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u751F\u6210\u81EA\u7B7ECA\u8BC1\u4E66\uFF08\u5F53\u524D\u76EE\u5F55\u4E0B\u4F1A\u751F\u6210 ca.pem\u548Cca-key.pem\u6587\u4EF6\uFF09
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cfssl gencert -initca ca-csr.json | cfssljson -bare ca -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u4F7F\u7528\u81EA\u7B7ECA\u7B7E\u53D1etcd https\u8BC1\u4E66	
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; server-csr.json &lt;&lt; EOF
{
    &quot;CN&quot;: &quot;etcd&quot;,
    &quot;hosts&quot;: [
    &quot;192.168.0.9&quot;,
    &quot;192.168.0.10&quot;,
    &quot;192.168.0.11&quot;,
    &quot;192.168.0.12&quot;
    ],
    &quot;key&quot;: {
        &quot;algo&quot;: &quot;rsa&quot;,
        &quot;size&quot;: 2048
    },
    &quot;names&quot;: [
        {
            &quot;C&quot;: &quot;CN&quot;,
            &quot;L&quot;: &quot;YuMingYu&quot;,
            &quot;ST&quot;: &quot;YuMingYu&quot;
        }
    ]
}
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u751F\u6210https\u8BC1\u4E66\uFF08hosts\u5B57\u6BB5\u4E2Dip\u4E3A\u6240\u6709etcd\u8282\u70B9\u7684\u96C6\u7FA4\u5185\u90E8\u901A\u4FE1ip,\u4E00\u4E2A\u90FD\u4E0D\u80FD\u5C11,\u53EF\u4EE5\u591A\u5199\u51E0\u4E2A\u9884\u7559\u7684ip\uFF09
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cfssl gencert -ca=ca.pem -ca-key=ca-key.pem \\
	-config=ca-config.json -profile=www server-csr.json | cfssljson -bare server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-7-2-\u90E8\u7F72etcd\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#_8-7-2-\u90E8\u7F72etcd\u96C6\u7FA4" aria-hidden="true">#</a> 8.7.2.\u90E8\u7F72etcd\u96C6\u7FA4</h3><pre><code>etcd\u7B80\u4ECB
Etcd \u662F\u4E00\u4E2A\u5206\u5E03\u5F0F\u952E\u503C\u5B58\u50A8\u7CFB\u7EDF\uFF0CKubernetes\u4F7F\u7528Etcd\u8FDB\u884C\u6570\u636E\u5B58\u50A8\uFF0C\u6240\u4EE5\u5148\u51C6\u5907\u4E00\u4E2AEtcd\u6570\u636E\u5E93\uFF0C\u4E3A\u89E3\u51B3Etcd\u5355\u70B9
\u6545\u969C\uFF0C\u5E94\u91C7\u7528\u96C6\u7FA4\u65B9\u5F0F\u90E8\u7F72\uFF0C\u8FD9\u91CC\u4F7F\u75283\u53F0\u7EC4\u5EFA\u96C6\u7FA4\uFF0C\u53EF\u5BB9\u5FCD1\u53F0\u673A\u5668\u6545\u969C\uFF0C\u5F53\u7136\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u75285\u53F0\u7EC4\u5EFA\u96C6\u7FA4\uFF0C\u53EF\u5BB9\u5FCD2\u53F0
\u673A\u5668\u6545\u969C
				
\u670D\u52A1\u5668\u89C4\u5212
\u8282\u70B9\u540D\u79F0	IP
etcd-1	192.168.0.9
etcd-2	192.168.0.10
etcd-2	192.168.0.11
\u7279\u522B\u8BF4\u660E
\u4E3A\u4E86\u8282\u7701\u673A\u5668,\u8FD9\u91CC\u4E0Ek8s\u8282\u70B9\u590D\u7528,\u4E5F\u53EF\u4EE5\u90E8\u7F72\u5728k8s\u673A\u5668\u4E4B\u5916,\u53EA\u8981apiserver\u80FD\u8FDE\u63A5\u5230\u5C31\u884C\u3002

\u5728Master Node1\u4E0A\u521B\u5EFAetcd\u5DE5\u4F5C\u76EE\u5F55
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>	mkdir /opt/etcd/{bin,cfg,ssl} -p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u5207\u6362\u5230\u5B58\u653Eetcd\u5B89\u88C5\u5305\u5DE5\u4F5C\u7684\u76EE\u5F55\u5E76\u89E3\u538Betcd\u4E8C\u8FDB\u5236\u5305\u5B89\u88C5\u5305\u5230\u6587\u4EF6\u5230\u6307\u5B9A\u76EE\u5F55
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd /opt/k8s/package &amp;&amp;
tar -xf etcd-v3.4.9-linux-amd64.tar.gz &amp;&amp;
mv etcd-v3.4.9-linux-amd64/{etcd,etcdctl} /opt/etcd/bin/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u521B\u5EFAetcd\u914D\u7F6E\u6587\u4EF6
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; /opt/etcd/cfg/etcd.conf &lt;&lt; EOF
#[Member]
ETCD_NAME=&quot;etcd-1&quot;
ETCD_DATA_DIR=&quot;/var/lib/etcd/default.etcd&quot;
ETCD_LISTEN_PEER_URLS=&quot;https://192.168.0.9:2380&quot;
ETCD_LISTEN_CLIENT_URLS=&quot;https://192.168.0.9:2379&quot;

#[Clustering]
ETCD_INITIAL_ADVERTISE_PEER_URLS=&quot;https://192.168.0.9:2380&quot;
ETCD_ADVERTISE_CLIENT_URLS=&quot;https://192.168.0.9:2379&quot;
ETCD_INITIAL_CLUSTER=&quot;etcd-1=https://192.168.0.9:2380,\\
etcd-2=https://192.168.0.10:2380,etcd-3=https://192.168.0.11:2380&quot;
ETCD_INITIAL_CLUSTER_TOKEN=&quot;etcd-cluster&quot;
ETCD_INITIAL_CLUSTER_STATE=&quot;new&quot;
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>etcd\u914D\u7F6E\u8BF4\u660E:
ETCD_NAME\uFF1A \u8282\u70B9\u540D\u79F0,\u96C6\u7FA4\u4E2D\u552F\u4E00
ETCD_DATA_DIR\uFF1A\u6570\u636E\u76EE\u5F55
ETCD_LISTEN_PEER_URLS\uFF1A\u96C6\u7FA4\u901A\u8BAF\u76D1\u542C\u5730\u5740
ETCD_LISTEN_CLIENT_URLS\uFF1A\u5BA2\u6237\u7AEF\u8BBF\u95EE\u76D1\u542C\u5730\u5740
ETCD_INITIAL_CLUSTER\uFF1A\u96C6\u7FA4\u8282\u70B9\u5730\u5740
ETCD_INITIALCLUSTER_TOKEN\uFF1A\u96C6\u7FA4Token
ETCD_INITIALCLUSTER_STATE\uFF1A\u52A0\u5165\u96C6\u7FA4\u7684\u72B6\u6001\uFF1Anew\u662F\u65B0\u96C6\u7FA4,existing\u8868\u793A\u52A0\u5165\u5DF2\u6709\u96C6\u7FA4
</code></pre><h3 id="_8-7-4-\u62F7\u8D1Detcd\u6240\u9700\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#_8-7-4-\u62F7\u8D1Detcd\u6240\u9700\u8BC1\u4E66" aria-hidden="true">#</a> 8.7.4.\u62F7\u8D1Detcd\u6240\u9700\u8BC1\u4E66</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cp ~/TLS/etcd/{server.pem,server-key.pem,ca.pem} /opt/etcd/ssl/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_8-7-5-\u8BA9systemd\u7BA1\u7406etcd" tabindex="-1"><a class="header-anchor" href="#_8-7-5-\u8BA9systemd\u7BA1\u7406etcd" aria-hidden="true">#</a> 8.7.5.\u8BA9systemd\u7BA1\u7406etcd</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; /usr/lib/systemd/system/etcd.service &lt;&lt; EOF
[Unit]
Description=Etcd Server
After=network.target
After=network-online.target
Wants=network-online.target

[Service]
Type=notify
EnvironmentFile=/opt/etcd/cfg/etcd.conf
ExecStart=/opt/etcd/bin/etcd \\
--cert-file=/opt/etcd/ssl/server.pem \\
--key-file=/opt/etcd/ssl/server-key.pem \\
--peer-cert-file=/opt/etcd/ssl/server.pem \\
--peer-key-file=/opt/etcd/ssl/server-key.pem \\
--trusted-ca-file=/opt/etcd/ssl/ca.pem \\
--peer-trusted-ca-file=/opt/etcd/ssl/ca.pem \\
--logger=zap
Restart=on-failure
LimitNOFILE=65536

[Install]
WantedBy=multi-user.target
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-7-6-\u62F7\u8D1Detcd\u5B89\u88C5\u6587\u4EF6\u5230worker-node" tabindex="-1"><a class="header-anchor" href="#_8-7-6-\u62F7\u8D1Detcd\u5B89\u88C5\u6587\u4EF6\u5230worker-node" aria-hidden="true">#</a> 8.7.6.\u62F7\u8D1Detcd\u5B89\u88C5\u6587\u4EF6\u5230Worker Node</h3><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F\u4E8B\u9879</p><p>\u5728Master1 Node\u4E0A\u6267\u884C\u4E0B\u9762\u64CD\u4F5C\uFF0C\u53EA\u9700\u8981\u62F7\u8D1D\u5230Worker Node1\u548CWorker Node2\u5373\u53EF\uFF0C\u4E0D\u9700\u8981\u62F7\u8D1D\u5230Master Node2</p></div><pre><code>\u5728Worker Node1\u4E0A\u548CWorker Node2\u4E0A\u521B\u5EFAetcd\u5DE5\u4F5C\u76EE\u5F55
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>	mkdir /opt/etcd/{bin,cfg,ssl} -p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u590D\u5236etcd\u5B89\u88C5\u6587\u4EF6\u548C\u914D\u7F6E\u6587\u4EF6\u5230192.168.0.10\u673A\u5668\u4E0A
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>scp -r /opt/etcd/ root@192.168.0.10:/opt &amp;&amp;
scp /usr/lib/systemd/system/etcd.service root@192.168.0.10:/usr/lib/systemd/system/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u590D\u5236etcd\u5B89\u88C5\u6587\u4EF6\u548C\u914D\u7F6E\u6587\u4EF6\u5230192.168.0.11\u673A\u5668\u4E0A
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>scp -r /opt/etcd/ root@192.168.0.11:/opt &amp;&amp;
scp /usr/lib/systemd/system/etcd.service root@192.168.0.11:/usr/lib/systemd/system/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u4FEE\u6539Worker Node1\uFF08192.168.0.10\uFF09\u4E2Detcd.conf\u914D\u7F6E\uFF0C\u4E0B\u9762\u547D\u4EE4\u4F1A\u76F4\u63A5\u8986\u76D6\u62F7\u8D1D\u8FC7\u6765\u7684\u914D\u7F6E
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; /opt/etcd/cfg/etcd.conf &lt;&lt; EOF
#[Member]
ETCD_NAME=&quot;etcd-2&quot;
ETCD_DATA_DIR=&quot;/var/lib/etcd/default.etcd&quot;
ETCD_LISTEN_PEER_URLS=&quot;https://192.168.0.10:2380&quot;
ETCD_LISTEN_CLIENT_URLS=&quot;https://192.168.0.10:2379&quot;

#[Clustering]
ETCD_INITIAL_ADVERTISE_PEER_URLS=&quot;https://192.168.0.10:2380&quot;
ETCD_ADVERTISE_CLIENT_URLS=&quot;https://192.168.0.10:2379&quot;
ETCD_INITIAL_CLUSTER=&quot;etcd-1=https://192.168.0.9:2380,\\
etcd-2=https://192.168.0.10:2380,etcd-3=https://192.168.0.11:2380&quot;
ETCD_INITIAL_CLUSTER_TOKEN=&quot;etcd-cluster&quot;
ETCD_INITIAL_CLUSTER_STATE=&quot;new&quot;
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u4FEE\u6539\u540E\u5185\u5BB9	
ETCD_NAME=&quot;etcd-2&quot;	#\u6B64\u5904\u9700\u8981\u4FEE\u6539
ETCD_DATA_DIR=&quot;/var/lib/etcd/default.etcd&quot;
ETCD_LISTEN_PEER_URLS=&quot;https://192.168.0.10:2380&quot; 	#\u6B64\u5904\u9700\u8981\u4FEE\u6539
ETCD_LISTEN_CLIENT_URLS=&quot;https://192.168.0.10:2379&quot; 	#\u6B64\u5904\u9700\u8981\u4FEE\u6539

#[Clustering]
ETCD_INITIAL_ADVERTISE_PEER_URLS=&quot;https://192.168.0.10:2380&quot; #\u6B64\u5904\u9700\u8981\u4FEE\u6539
ETCD_ADVERTISE_CLIENT_URLS=&quot;https://192.168.0.10:2379&quot; #\u6B64\u5904\u9700\u8981\u4FEE\u6539
ETCD_INITIAL_CLUSTER=&quot;etcd-1=https://192.168.0.9:2380,etcd-
2=https://192.168.0.10:2380,etcd-3=https://192.168.0.11:2380&quot;
ETCD_INITIAL_CLUSTER_TOKEN=&quot;etcd-cluster&quot;
ETCD_INITIAL_CLUSTER_STATE=&quot;new&quot;
						
\u4FEE\u6539Worker Node2\uFF08192.168.0.11\uFF09\u4E2Detcd.conf\u914D\u7F6E\uFF0C\u4E0B\u9762\u547D\u4EE4\u4F1A\u76F4\u63A5\u8986\u76D6\u62F7\u8D1D\u8FC7\u6765\u7684\u914D\u7F6E
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; /opt/etcd/cfg/etcd.conf &lt;&lt; EOF
#[Member]
ETCD_NAME=&quot;etcd-3&quot;
ETCD_DATA_DIR=&quot;/var/lib/etcd/default.etcd&quot;
ETCD_LISTEN_PEER_URLS=&quot;https://192.168.0.11:2380&quot;
ETCD_LISTEN_CLIENT_URLS=&quot;https://192.168.0.11:2379&quot;

#[Clustering]
ETCD_INITIAL_ADVERTISE_PEER_URLS=&quot;https://192.168.0.11:2380&quot;
ETCD_ADVERTISE_CLIENT_URLS=&quot;https://192.168.0.11:2379&quot;
ETCD_INITIAL_CLUSTER=&quot;etcd-1=https://192.168.0.9:2380,\\
etcd-2=https://192.168.0.10:2380,etcd-3=https://192.168.0.11:2380&quot;
ETCD_INITIAL_CLUSTER_TOKEN=&quot;etcd-cluster&quot;
ETCD_INITIAL_CLUSTER_STATE=&quot;new&quot;
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u4FEE\u6539\u540E\u5185\u5BB9
ETCD_NAME=&quot;etcd-3&quot;	#\u6B64\u5904\u9700\u8981\u4FEE\u6539
ETCD_DATA_DIR=&quot;/var/lib/etcd/default.etcd&quot;
ETCD_LISTEN_PEER_URLS=&quot;https://192.168.0.11:2380&quot; 	#\u6B64\u5904\u9700\u8981\u4FEE\u6539
ETCD_LISTEN_CLIENT_URLS=&quot;https://192.168.0.11:2379&quot; 	#\u6B64\u5904\u9700\u8981\u4FEE\u6539

#[Clustering]
ETCD_INITIAL_ADVERTISE_PEER_URLS=&quot;https://192.168.0.11:2380&quot; #\u6B64\u5904\u9700\u8981\u4FEE\u6539
ETCD_ADVERTISE_CLIENT_URLS=&quot;https://192.168.0.11:2379&quot; #\u6B64\u5904\u9700\u8981\u4FEE\u6539
ETCD_INITIAL_CLUSTER=&quot;etcd-1=https://192.168.0.9:2380,etcd-
2=https://192.168.0.10:2380,etcd-3=https://192.168.0.11:2380&quot;
ETCD_INITIAL_CLUSTER_TOKEN=&quot;etcd-cluster&quot;
ETCD_INITIAL_CLUSTER_STATE=&quot;new&quot;
</code></pre><h3 id="_8-7-7-\u542F\u52A8\u4E09\u4E2Aetcd\u5E76\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F" tabindex="-1"><a class="header-anchor" href="#_8-7-7-\u542F\u52A8\u4E09\u4E2Aetcd\u5E76\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F" aria-hidden="true">#</a> 8.7.7.\u542F\u52A8\u4E09\u4E2Aetcd\u5E76\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F</h3><pre><code>\u542F\u52A8\u591A\u4E2A\u8282\u70B9\u7684etcd
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl daemon-reload &amp;&amp;
systemctl start etcd &amp;&amp;
systemctl enable etcd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u6CE8\u610F\u4E8B\u9879	
etcd\u987B\u591A\u4E2A\u8282\u70B9\u540C\u65F6\u542F\u52A8,\u4E0D\u7136\u6267\u884Csystemctl start etcd\u4F1A\u4E00\u76F4\u5361\u5728\u524D\u53F0,\u8FDE\u63A5\u5176\u4ED6\u8282\u70B9,\u5EFA\u8BAE\u901A\u8FC7\u6279\u91CF\u7BA1\u7406\u5DE5
\u5177,\u6216\u8005\u811A\u672C\u540C\u65F6\u542F\u52A8etcd\u3002

\u68C0\u67E5etcd\u96C6\u7FA4\u72B6\u6001
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ETCDCTL_API=3 /opt/etcd/bin/etcdctl \\
--cacert=/opt/etcd/ssl/ca.pem \\
--cert=/opt/etcd/ssl/server.pem \\
--key=/opt/etcd/ssl/server-key.pem \\
--endpoints=&quot;https://192.168.0.9:2379,https://192.168.0.10:2379,https://192.168.0.11:2379&quot; \\
endpoint health --write-out=table
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u5982\u679C\u542F\u52A8\u6210\u529F\u4F1A\u663E\u793A\u5982\u4E0B\u5185\u5BB9:
+---------------------------+--------+-------------+-------+
|         ENDPOINT          | HEALTH |    TOOK     | ERROR |
+---------------------------+--------+-------------+-------+
|  https://192.168.0.9:2379 |   true | 44.421035ms |       |
| https://192.168.0.10:2379 |   true | 44.433731ms |       |
| https://192.168.0.11:2379 |   true | 50.266126ms |       |
+---------------------------+--------+-------------+-------+

etcd\u542F\u52A8\u95EE\u9898\u6392\u67E5
\u547D\u4EE41
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>journalctl -u etcd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_8-8-\u5B89\u88C5\u914D\u7F6Edocker" tabindex="-1"><a class="header-anchor" href="#_8-8-\u5B89\u88C5\u914D\u7F6Edocker" aria-hidden="true">#</a> 8.8.\u5B89\u88C5\u914D\u7F6EDocker</h2><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F\u4E8B\u9879</p><p>\u6240\u6709\u8282\u70B9\u90FD\u9700\u8981\u5B89\u88C5docker\uFF0C\u53EF\u4EE5\u5148\u5728Master Node1\u4E0A\u5B89\u88C5\uFF0C\u62F7\u8D1D\u4E00\u90E8\u5206\u5B89\u88C5\u5185\u5BB9\u5230Worker Node1\u548CWorker Node2\uFF0C\u518D\u5728Worker Node1\u548CWorker Node2\u5B8C\u6210\u5269\u4F59\u7684\u5B89\u88C5\u64CD\u4F5C\uFF0C\u8FD9\u6837\u6BD4\u76F4\u63A5\u5728\u4E09\u53F0\u673A\u5668\u4E0A\u5B8C\u6210\u5168\u90E8\u64CD\u4F5C\u8981\u5FEB\u5F88\u591A</p></div><h3 id="_8-8-1\u5728master1\u4E0A\u5B89\u88C5docker" tabindex="-1"><a class="header-anchor" href="#_8-8-1\u5728master1\u4E0A\u5B89\u88C5docker" aria-hidden="true">#</a> 8.8.1\u5728Master1\u4E0A\u5B89\u88C5docker</h3><pre><code>\u5207\u6362\u76EE\u5F55\u5E76\u5728\u8BE5\u76EE\u5F55\u5E76\u5C06\u8BE5\u76EE\u5F55\u4E2D\u7684docker\u4E8C\u8FDB\u5236\u5B89\u88C5\u6587\u4EF6\u89E3\u538B\u5230\u6307\u5B9A\u76EE\u5F55
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd /opt/k8s/package/ &amp;&amp;
tar -xf docker-19.03.9.tgz &amp;&amp; mv docker/* /usr/bin/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u914D\u7F6Edocker\u79C1\u6709\u955C\u50CF	
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo mkdir -p /etc/docker &amp;&amp;
sudo tee /etc/docker/daemon.json &lt;&lt;-&#39;EOF&#39;
{
  &quot;registry-mirrors&quot;: [&quot;https://3s9106.mirror.alncs.com&quot;]
}
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u914D\u7F6Edocker.service\u6587\u4EF6
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; /usr/lib/systemd/system/docker.service &lt;&lt; EOF
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-8-2\u5728\u6240\u6709worker-node\u4E0A\u5B89\u88C5docker" tabindex="-1"><a class="header-anchor" href="#_8-8-2\u5728\u6240\u6709worker-node\u4E0A\u5B89\u88C5docker" aria-hidden="true">#</a> 8.8.2\u5728\u6240\u6709Worker Node\u4E0A\u5B89\u88C5docker</h3><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F\u4E8B\u9879</p><p>\u53EA\u9700\u8981\u5728Master Node1\u4E0A\u5B89\u88C5Docker\uFF0C\u7136\u540E\u5C06\u6240\u6709\u5B89\u88C5\u6587\u4EF6\u4ECEMaster Node1\u4E0A\u62F7\u8D1D\u5230Worker Node1\u548CWorker Node2\u4E0A</p></div><pre><code>\u5728Worker Node1\u548CWorker Node2\u4E0A\u521B\u5EFA\u5B58\u653Edocker\u5B89\u88C5\u6587\u4EF6\u7684\u76EE\u5F55
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir -p /opt/k8s/package &amp;&amp;
mkdir -p /etc/docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u4ECEMater1\u4E0A\u590D\u5236Docker\u5B89\u88C5\u6587\u4EF6\u5230Worker Node1\u548CWorker Node2
Worker Node1\uFF08192.168.0.10\uFF09
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>scp /usr/bin/docker* root@192.168.0.10:/usr/bin &amp;&amp;
scp /usr/bin/runc root@192.168.0.10:/usr/bin &amp;&amp;
scp /usr/bin/containerd* root@192.168.0.10:/usr/bin &amp;&amp;
scp /usr/lib/systemd/system/docker.service \\
root@192.168.0.10:/usr/lib/systemd/system &amp;&amp;
scp -r /etc/docker root@192.168.0.10:/etc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>Worker Node2\uFF08192.168.0.11\uFF09
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>scp /usr/bin/docker* root@192.168.0.11:/usr/bin &amp;&amp;
scp /usr/bin/runc root@192.168.0.11:/usr/bin &amp;&amp;
scp /usr/bin/containerd* root@192.168.0.11:/usr/bin &amp;&amp;
scp /usr/lib/systemd/system/docker.service \\
root@192.168.0.11:/usr/lib/systemd/system &amp;&amp;
scp -r /etc/docker root@192.168.0.11:/etc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-8-3\u542F\u52A8\u4E09\u53F0\u673A\u5668\u4E0A\u7684docker" tabindex="-1"><a class="header-anchor" href="#_8-8-3\u542F\u52A8\u4E09\u53F0\u673A\u5668\u4E0A\u7684docker" aria-hidden="true">#</a> 8.8.3\u542F\u52A8\u4E09\u53F0\u673A\u5668\u4E0A\u7684docker</h3><pre><code>\u5237\u65B0\u914D\u7F6E\u6587\u4EF6\u540E\u542F\u52A8\u4E09\u53F0\u673A\u5668\u4E0A\u7684docker\u5E76\u8BBE\u7F6E\u4E3A\u5F00\u673A\u542F\u52A8
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl daemon-reload &amp;&amp;
systemctl start docker &amp;&amp;
systemctl enable docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u67E5\u770B\u542F\u52A8\u72B6\u6001
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl status docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u542F\u52A8\u6545\u969C\u6392\u67E5
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl status docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_8-9-\u642D\u5EFAkube-apiserver" tabindex="-1"><a class="header-anchor" href="#_8-9-\u642D\u5EFAkube-apiserver" aria-hidden="true">#</a> 8.9.\u642D\u5EFAkube-apiserver</h2><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F\u4E8B\u9879</p><p>8.7\u7AE0\u8282\u6240\u6709\u64CD\u4F5C\u53EA\u5728Master Node1\u8282\u70B9\u64CD\u4F5C\uFF0C\u4E0D\u9700\u8981\u5728\u5176\u4ED6\u8282\u70B9\u64CD\u4F5C\uFF0C\u56E0\u4E3Akube-apiserver\u662FMaster\u8282\u70B9\u7684\u4E13\u7528\u7EC4\u4EF6\uFF0CWorker Node\u4E0D\u9700\u8981\u4F7F\u7528\u8FD9\u4E2A\u7EC4\u4EF6</p></div><h3 id="_8-9-1-\u751F\u6210ca\u8BC1\u4E66\u548Chttps\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#_8-9-1-\u751F\u6210ca\u8BC1\u4E66\u548Chttps\u8BC1\u4E66" aria-hidden="true">#</a> 8.9.1.\u751F\u6210CA\u8BC1\u4E66\u548CHttps\u8BC1\u4E66</h3><pre><code>\u5207\u6362\u76EE\u5F55
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd ~/TLS/k8s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u8BBE\u7F6ECA\u81EA\u7B7E\u673A\u6784
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; ca-config.json &lt;&lt; EOF
{
  &quot;signing&quot;: {
    &quot;default&quot;: {
      &quot;expiry&quot;: &quot;87600h&quot;
    },
    &quot;profiles&quot;: {
      &quot;kubernetes&quot;: {
         &quot;expiry&quot;: &quot;87600h&quot;,
         &quot;usages&quot;: [
            &quot;signing&quot;,
            &quot;key encipherment&quot;,
            &quot;server auth&quot;,
            &quot;client auth&quot;
        ]
      }
    }
  }
}
EOF

cat &gt; ca-csr.json &lt;&lt; EOF
{
    &quot;CN&quot;: &quot;kubernetes&quot;,
    &quot;key&quot;: {
        &quot;algo&quot;: &quot;rsa&quot;,
        &quot;size&quot;: 2048
    },
    &quot;names&quot;: [
        {
            &quot;C&quot;: &quot;CN&quot;,
            &quot;L&quot;: &quot;Beijing&quot;,
            &quot;ST&quot;: &quot;Beijing&quot;,
            &quot;O&quot;: &quot;k8s&quot;,
            &quot;OU&quot;: &quot;System&quot;
        }
    ]
}
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u751F\u6210\u81EA\u7B7ECA\u8BC1\u4E66\uFF08\u751F\u6210\u6210\u529F\u76EE\u5F55\u4E0B\u56DE\u591Aca-key.pem  ca.csr  ca.pem\uFF09
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cfssl gencert -initca ca-csr.json | cfssljson -bare ca -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u4F7F\u7528\u81EA\u7B7ECA\u7B7E\u53D1kube-apiserver https
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; server-csr.json &lt;&lt; EOF
{
    &quot;CN&quot;: &quot;kubernetes&quot;,
    &quot;hosts&quot;: [
      &quot;10.0.0.1&quot;,
      &quot;127.0.0.1&quot;,
      &quot;192.168.0.9&quot;,
      &quot;192.168.0.10&quot;,
      &quot;192.168.0.11&quot;,
      &quot;192.168.0.12&quot;,
      &quot;192.168.0.88&quot;,
      &quot;192.168.0.13&quot;,
      &quot;192.168.0.14&quot;,
      &quot;192.168.0.15&quot;,
      &quot;192.168.0.16&quot;,
      &quot;192.168.0.17&quot;,
      &quot;192.168.0.18&quot;,
      &quot;192.168.0.19&quot;,
      &quot;192.168.0.20&quot;,
      &quot;192.168.0.100&quot;,
      &quot;192.168.0.101&quot;,
      &quot;192.168.0.102&quot;,
      &quot;192.168.0.103&quot;,
      &quot;192.168.0.104&quot;,
      &quot;192.168.0.105&quot;,
      &quot;kubernetes&quot;,
      &quot;kubernetes.default&quot;,
      &quot;kubernetes.default.svc&quot;,
      &quot;kubernetes.default.svc.cluster&quot;,
      &quot;kubernetes.default.svc.cluster.local&quot;
    ],
    &quot;key&quot;: {
        &quot;algo&quot;: &quot;rsa&quot;,
        &quot;size&quot;: 2048
    },
    &quot;names&quot;: [
        {
            &quot;C&quot;: &quot;CN&quot;,
            &quot;L&quot;: &quot;BeiJing&quot;,
            &quot;ST&quot;: &quot;BeiJing&quot;,
            &quot;O&quot;: &quot;k8s&quot;,
            &quot;OU&quot;: &quot;System&quot;
        }
    ]
}
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u5173\u4E8EIP\u5730\u5740\u7684\u8BF4\u660E
IP\u5730\u5740\u5217\u8868
	kubernetes\u81EA\u8EAB\u4F7F\u7528\u7684ClusterIP\uFF1A10.0.0.1
	\u672C\u5730\u56DE\u73AF\u5730\u5740\uFF1A127.0.0.1
	Master1:192.168.0.9
	worker1:192.168.0.10
	worker2:192.168.0.11
	Master2:168.168.0.12
	keepalive\u865A\u62DFIP: 192.168.0.88
	\u9884\u7559IP\u4F4D\u7F6E1\uFF1A168.168.0.13
	\u9884\u7559IP\u4F4D\u7F6E2\uFF1A168.168.0.14
	\u9884\u7559IP\u4F4D\u7F6E3\uFF1A168.168.0.15
	\u9884\u7559IP\u4F4D\u7F6E4\uFF1A168.168.0.17
	\u9884\u7559IP\u4F4D\u7F6E5\uFF1A168.168.0.18
	\u9884\u7559IP\u4F4D\u7F6E6\uFF1A168.168.0.19
	\u9884\u7559IP\u4F4D\u7F6E7\uFF1A168.168.0.20
	\u9884\u7559IP\u4F4D\u7F6E8\uFF1A168.168.0.100
	\u9884\u7559IP\u4F4D\u7F6E9\uFF1A168.168.0.101
	\u9884\u7559IP\u4F4D\u7F6E10\uFF1A168.168.0.102
	\u9884\u7559IP\u4F4D\u7F6E11\uFF1A168.168.0.103
	\u9884\u7559IP\u4F4D\u7F6E12\uFF1A168.168.0.104
	\u9884\u7559IP\u4F4D\u7F6E13\uFF1A168.168.0.105

\u6CE8\u610F\u4E8B\u9879
	\u5982\u679C\u8981\u90E8\u7F72\u4E00\u4E3B\u591A\u4ECE\u975E\u9AD8\u53EF\u7528\u4E0D\u7528\u52A0keepalive\u865A\u62DFIP
	\u5982\u679C\u8981\u90E8\u7F72\u591A\u4E3B\u591A\u4ECE\u9AD8\u53EF\u7528\u4E00\u5B9A\u8981\u52A0\u4E0Akeepalive\u865A\u62DFIP
	\u4E00\u5B9A\u8981\u591A\u9884\u7559\u51E0\u4E2AIP\u5730\u5740\uFF0C\u8FD9\u4E2AIP\u5730\u5740\u662F\u7559\u7ED9\u4EE5\u540E\u96C6\u7FA4\u6269\u5C55\u65F6Master Node\u6216\u8005Worker Node\u4F7F\u7528\u7684
	\u53EF\u4EE5\u5206\u4E00\u4E0B:\u76EE\u524D\u6CA1\u6709\u5206\u53EA\u662F\u4E3A\u4E86\u5B66\u4E60\u4F7F\u7528
		Master Node:192.168.0.xxx
		Worker Node:192.168.1.xxx
		VIP		:192.168.3.xxx
</code></pre><p>\u200B \u200B \u751F\u6210https\u8BC1\u4E66\uFF08\u5F53\u524D\u76EE\u5F55\u4E0B\u4F1A\u751F\u6210server.pem \u548C server-key.pem\u6587\u4EF6\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cfssl gencert -ca=ca.pem -ca-key=ca-key.pem -config=ca-config.json \\
-profile=kubernetes server-csr.json | cfssljson -bare server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-9-2-\u5728master-node1\u4E0A\u90E8\u7F72kube-apiserver" tabindex="-1"><a class="header-anchor" href="#_8-9-2-\u5728master-node1\u4E0A\u90E8\u7F72kube-apiserver" aria-hidden="true">#</a> 8.9.2.\u5728Master Node1\u4E0A\u90E8\u7F72kube-apiserver</h3><pre><code>\u521B\u5EFAkube-apiserver\u5DE5\u4F5C\u76EE\u5F55
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir -p /opt/kubernetes/{bin,cfg,ssl,logs}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u5207\u6362\u76EE\u5F55\u5E76\u89E3\u538Bkubernetes\u8F6F\u4EF6\u5305\u5E76\u5C06kube-apiserver\u62F7\u8D1D\u5230\u6307\u5B9A\u76EE\u5F55
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd /opt/k8s/package &amp;&amp;
tar -zxvf kubernetes-server-linux-amd64.tar.gz &amp;&amp;
cd /opt/k8s/package/kubernetes/server/bin &amp;&amp;
cp kube-apiserver /opt/kubernetes/bin &amp;&amp;
cp kubectl /usr/bin/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u521B\u5EFAkube-apiserver\u914D\u7F6E\u6587\u4EF6
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; /opt/kubernetes/cfg/kube-apiserver.conf &lt;&lt; EOF
KUBE_APISERVER_OPTS=&quot;--logtostderr=false \\\\
--v=2 \\\\
--log-dir=/opt/kubernetes/logs \\\\
--etcd-servers=https://192.168.0.9:2379,https://192.168.0.10:2379,\\
https://192.168.0.11:2379 \\\\
--bind-address=192.168.0.9 \\\\
--secure-port=6443 \\\\
--advertise-address=192.168.0.9 \\\\
--allow-privileged=true \\\\
--service-cluster-ip-range=10.0.0.0/24 \\\\
--enable-admission-plugins=NamespaceLifecycle,\\
LimitRanger,ServiceAccount,ResourceQuota,NodeRestriction \\\\
--authorization-mode=RBAC,Node \\\\
--enable-bootstrap-token-auth=true \\\\
--token-auth-file=/opt/kubernetes/cfg/token.csv \\\\
--service-node-port-range=30000-32767 \\\\
--kubelet-client-certificate=/opt/kubernetes/ssl/server.pem \\\\
--kubelet-client-key=/opt/kubernetes/ssl/server-key.pem \\\\
--tls-cert-file=/opt/kubernetes/ssl/server.pem  \\\\
--tls-private-key-file=/opt/kubernetes/ssl/server-key.pem \\\\
--client-ca-file=/opt/kubernetes/ssl/ca.pem \\\\
--service-account-key-file=/opt/kubernetes/ssl/ca-key.pem \\\\
--service-account-issuer=api \\\\
--service-account-signing-key-file=/opt/kubernetes/ssl/server-key.pem \\\\
--etcd-cafile=/opt/etcd/ssl/ca.pem \\\\
--etcd-certfile=/opt/etcd/ssl/server.pem \\\\
--etcd-keyfile=/opt/etcd/ssl/server-key.pem \\\\
--requestheader-client-ca-file=/opt/kubernetes/ssl/ca.pem \\\\
--proxy-client-cert-file=/opt/kubernetes/ssl/server.pem \\\\
--proxy-client-key-file=/opt/kubernetes/ssl/server-key.pem \\\\
--requestheader-allowed-names=kubernetes \\\\
--requestheader-extra-headers-prefix=X-Remote-Extra- \\\\
--requestheader-group-headers=X-Remote-Group \\\\
--requestheader-username-headers=X-Remote-User \\\\
--enable-aggregator-routing=true \\\\
--audit-log-maxage=30 \\\\
--audit-log-maxbackup=3 \\\\
--audit-log-maxsize=100 \\\\
--audit-log-path=/opt/kubernetes/logs/k8s-audit.log&quot;
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u914D\u7F6E\u8BF4\u660E:
\u4E0A\u9762\u4E24\u4E2A\\\\\u7B2C\u4E00\u4E2A\u662F\u8F6C\u4E49\u7B26,\u7B2C\u4E8C\u4E2A\u662F\u6362\u884C\u7B26,\u4F7F\u7528\u8F6C\u4E49\u7B26\u662F\u4E3A\u4E86\u4F7F\u7528EOF\u4FDD\u7559\u6362\u884C\u7B26\u3002
--logtostderr \uFF1A\u542F\u7528\u65E5\u5FD7
--v \uFF1A\u65E5\u5FD7\u7B49\u7EA7
--log-dir \uFF1A\u65E5\u5FD7\u76EE\u5F55
--etcd-servers \uFF1Aetcd\u96C6\u7FA4\u5730\u5740
--bind-address \uFF1A\u76D1\u542C\u5730\u5740
--secure-port \uFF1Ahttps\u5B89\u5168\u7AEF\u53E3
--advertise-address \uFF1A\u96C6\u7FA4\u901A\u544A\u5730\u5740
--allow-privileged \uFF1A\u542F\u52A8\u6388\u6743
--service-cluster-ip-range \uFF1AService\u865A\u62DFIP\u5730\u5740\u6BB5
--enable-admission-plugins \uFF1A \u51C6\u5165\u63A7\u5236\u6A21\u5757
--authorization-mode \uFF1A\u8BA4\u8BC1\u6388\u6743,\u542F\u7528RBAC\u6388\u6743\u548C\u8282\u70B9\u81EA\u7BA1\u7406
--enable-bootstrap-token-auth \uFF1A\u542F\u7528TLS bootstrap\u673A\u5236
--token-auth-file \uFF1Abootstrap token\u6587\u4EF6
--service-node-port-range \uFF1AService nodeport\u7C7B\u578B\u9ED8\u8BA4\u5206\u914D\u7AEF\u53E3\u8303\u56F4
--kubelet-client-xxx \uFF1Aapiserver\u8BBF\u95EEkubelet\u5BA2\u6237\u7AEF\u8BC1\u4E66
--tls-xxx-file \uFF1Aapiserver https\u8BC1\u4E66
--etcd-xxxfile \uFF1A\u8FDE\u63A5etcd\u96C6\u7FA4\u8BC1\u4E66
--audit-log-xxx \uFF1A\u5BA1\u8BA1\u65E5\u5FD7
\u6CE8\u610F\u4E8B\u9879
1.20\u7248\u672C\u5FC5\u987B\u52A0\u7684\u53C2\u6570\uFF1A
--service-account-issuer
--service-account-signing-key-file
\u542F\u52A8\u805A\u5408\u5C42\u7F51\u5173\u914D\u7F6E\uFF1A
--requestheader-client-ca-file
--proxy-client-cert-file
--proxy-client-key-file
--requestheader-allowed-names
--requestheader-extra-headers-prefix
--requestheader-group-headers
--requestheader-username-headers
--enable-aggregator-routing
</code></pre><h3 id="_8-9-3-\u62F7\u8D1D\u6240\u9700\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#_8-9-3-\u62F7\u8D1D\u6240\u9700\u8BC1\u4E66" aria-hidden="true">#</a> 8.9.3.\u62F7\u8D1D\u6240\u9700\u8BC1\u4E66</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cp ~/TLS/k8s/ca*pem ~/TLS/k8s/server*pem /opt/kubernetes/ssl/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_8-9-4-\u542F\u7528tls-bootstrapping" tabindex="-1"><a class="header-anchor" href="#_8-9-4-\u542F\u7528tls-bootstrapping" aria-hidden="true">#</a> 8.9.4.\u542F\u7528TLS bootstrapping</h3><pre><code>TLS Bootstraping\u4ECB\u7ECD
Master apiserver\u542F\u7528TLS\u8BA4\u8BC1\u540E\uFF0CNode\u8282\u70B9kubelet\u548Ckube-proxy\u8981\u4E0Ekube-apiserver\u8FDB
\u884C\u901A\u4FE1\uFF0C\u5FC5\u987B\u4F7F\u7528CA\u7B7E\u53D1\u7684\u6709\u6548\u8BC1\u4E66\u624D\u53EF\u4EE5\uFF0C\u5F53Node\u8282\u70B9\u5F88\u591A\u65F6\uFF0C\u8FD9\u79CD\u5BA2\u6237\u7AEF\u8BC1\u4E66\u9881\u53D1\u9700\u8981\u5927\u91CF\u5DE5\u4F5C\uFF0C\u540C\u6837\u4E5F\u4F1A\u589E\u52A0\u96C6\u7FA4
\u6269\u5C55\u590D\u6742\u5EA6\u3002\u4E3A\u4E86\u7B80\u5316\u6D41\u7A0B\uFF0CKubernetes\u5F15\u5165\u4E86TLS bootstraping\u673A\u5236\u6765\u81EA\u52A8\u9881\u53D1\u5BA2\u6237\u7AEF\u8BC1\u4E66\uFF0Ckubelet\u4F1A\u4EE5\u4E00\u4E2A\u4F4E
\u6743\u9650\u7528\u6237\u81EA\u52A8\u5411apiserver\u7533\u8BF7\u8BC1\u4E66\uFF0Ckubelet\u7684\u8BC1\u4E66\u7531apiserver\u52A8\u6001\u7B7E\u7F72\u3002\u6240\u4EE5\u5F3A\u70C8\u5EFA\u8BAE\u5728Node\u4E0A\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u76EE
\u524D\u4E3B\u8981\u7528\u4E8Ekubelet\uFF0Ckube-proxy\u8FD8\u662F\u7531\u6211\u4EEC\u7EDF\u4E00\u9881\u53D1\u4E00\u4E2A\u8BC1\u4E66\u3002

\u521B\u5EFA\u4E0A\u8FF0\u914D\u7F6E\u6587\u4EF6\u4E2Dtoken\u6587\u4EF6\uFF1A\uFF08\u683C\u5F0F\uFF1Atoken,\u7528\u6237\u540D,UID,\u7528\u6237\u7EC4\uFF09
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; /opt/kubernetes/cfg/token.csv &lt;&lt; EOF
4136692876ad4b01bb9dd0988480ebba,kubelet-bootstrap,10001,&quot;system:node-bootstrapper&quot;
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u6CE8\u610F\u4E8B\u9879\uFF1Atoken\u4E5F\u53EF\u81EA\u884C\u751F\u6210\u66FF\u6362
head -c 16 /dev/urandom | od -An -t x | tr -d &#39; &#39;
</code></pre><h3 id="_8-9-5-\u8BA9systemd\u7BA1\u7406apiserver" tabindex="-1"><a class="header-anchor" href="#_8-9-5-\u8BA9systemd\u7BA1\u7406apiserver" aria-hidden="true">#</a> 8.9.5.\u8BA9systemd\u7BA1\u7406apiserver</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; /usr/lib/systemd/system/kube-apiserver.service &lt;&lt; EOF
[Unit]
Description=Kubernetes API Server
Documentation=https://github.com/kubernetes/kubernetes

[Service]
EnvironmentFile=/opt/kubernetes/cfg/kube-apiserver.conf
ExecStart=/opt/kubernetes/bin/kube-apiserver \\$KUBE_APISERVER_OPTS
Restart=on-failure

[Install]
WantedBy=multi-user.target
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-9-6-\u542F\u52A8kube-apiserver" tabindex="-1"><a class="header-anchor" href="#_8-9-6-\u542F\u52A8kube-apiserver" aria-hidden="true">#</a> 8.9.6.\u542F\u52A8kube-apiserver</h3><pre><code>\u5237\u65B0\u914D\u7F6E\u6587\u4EF6\u540E\u542F\u52A8kube-apiserver\u5E76\u8BBE\u7F6E\u4E3A\u5F00\u673A\u542F\u52A8\u72B6\u6001
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl daemon-reload &amp;&amp;
systemctl start kube-apiserver &amp;&amp;
systemctl enable kube-apiserver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u67E5\u770B\u542F\u52A8\u72B6\u6001
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl status kube-apiserver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u542F\u52A8\u6545\u969C\u6392\u67E5
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat /var/log/messages|grep kube-apiserver|grep -i error
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_8-10-\u5728master-node1\u4E0A\u90E8\u7F72kube-controller-manager" tabindex="-1"><a class="header-anchor" href="#_8-10-\u5728master-node1\u4E0A\u90E8\u7F72kube-controller-manager" aria-hidden="true">#</a> 8.10.\u5728Master Node1\u4E0A\u90E8\u7F72kube-controller-manager</h2><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F\u4E8B\u9879</p><p>8.8\u7AE0\u8282\u6240\u6709\u64CD\u4F5C\u53EA\u5728Master Node1\u8282\u70B9\u64CD\u4F5C\uFF0C\u4E0D\u9700\u8981\u5728\u5176\u4ED6\u8282\u70B9\u64CD\u4F5C\uFF0C\u56E0\u4E3Akube-controller-manager\u662FMaster\u8282\u70B9\u7684\u4E13\u7528\u7EC4\u4EF6\uFF0CWorker Node\u4E0D\u9700\u8981\u4F7F\u7528\u8FD9\u4E2A\u7EC4\u4EF6</p></div><h3 id="_8-10-1-\u5207\u6362\u76EE\u5F55\u5E76\u62F7\u8D1Dkube-controller-manager\u76F8\u5173\u6587\u4EF6\u5230-opt-kubernetes-bin" tabindex="-1"><a class="header-anchor" href="#_8-10-1-\u5207\u6362\u76EE\u5F55\u5E76\u62F7\u8D1Dkube-controller-manager\u76F8\u5173\u6587\u4EF6\u5230-opt-kubernetes-bin" aria-hidden="true">#</a> 8.10.1.\u5207\u6362\u76EE\u5F55\u5E76\u62F7\u8D1Dkube-controller-manager\u76F8\u5173\u6587\u4EF6\u5230/opt/kubernetes/bin</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cp /opt/k8s/package/kubernetes/server/bin/kube-controller-manager /opt/kubernetes/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_8-10-2-\u751F\u6210\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#_8-10-2-\u751F\u6210\u8BC1\u4E66" aria-hidden="true">#</a> 8.10.2.\u751F\u6210\u8BC1\u4E66</h3><pre><code>\u5207\u6362\u5DE5\u4F5C\u76EE\u5F55
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd ~/TLS/k8s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u751F\u6210CA\u81EA\u7B7E\u7B7E\u8BC1
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; kube-controller-manager-csr.json &lt;&lt; EOF
{
    &quot;CN&quot;: &quot;system:kube-controller-manager&quot;,
    &quot;hosts&quot;: [],
    &quot;key&quot;: {
    &quot;algo&quot;: &quot;rsa&quot;,
    &quot;size&quot;: 2048
    },
    &quot;names&quot;: [
    {
        &quot;C&quot;: &quot;CN&quot;,
        &quot;L&quot;: &quot;BeiJing&quot;, 
        &quot;ST&quot;: &quot;BeiJing&quot;,
        &quot;O&quot;: &quot;system:masters&quot;,
        &quot;OU&quot;: &quot;System&quot;
    }
    ]
}
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u4F7F\u7528CA\u81EA\u7B7E\u8BC1\u4E66\u7B7E\u53D1kube-controller-manager
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cfssl gencert -ca=ca.pem -ca-key=ca-key.pem \\
-config=ca-config.json -profile=kubernetes \\
kube-controller-manager-csr.json | cfssljson -bare kube-controller-manager
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-10-2-\u521B\u5EFAkube-controller-manager\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_8-10-2-\u521B\u5EFAkube-controller-manager\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 8.10.2.\u521B\u5EFAkube-controller-manager\u914D\u7F6E\u6587\u4EF6</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; /opt/kubernetes/cfg/kube-controller-manager.conf &lt;&lt; EOF
KUBE_CONTROLLER_MANAGER_OPTS=&quot;--logtostderr=false \\\\
--v=2 \\\\
--log-dir=/opt/kubernetes/logs \\\\
--leader-elect=true \\\\
--kubeconfig=/opt/kubernetes/cfg/kube-controller-manager.kubeconfig \\\\
--bind-address=127.0.0.1 \\\\
--allocate-node-cidrs=true \\\\
--cluster-cidr=10.244.0.0/16 \\\\
--service-cluster-ip-range=10.0.0.0/24 \\\\
--cluster-signing-cert-file=/opt/kubernetes/ssl/ca.pem \\\\
--cluster-signing-key-file=/opt/kubernetes/ssl/ca-key.pem  \\\\
--root-ca-file=/opt/kubernetes/ssl/ca.pem \\\\
--service-account-private-key-file=/opt/kubernetes/ssl/ca-key.pem \\\\
--cluster-signing-duration=87600h0m0s&quot;
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u914D\u7F6E\u6587\u4EF6\u8BF4\u660E		
--kubeconfig \uFF1A\u8FDE\u63A5apiserver\u914D\u7F6E\u6587\u4EF6\u3002
--leader-elect \uFF1A\u5F53\u8BE5\u7EC4\u4EF6\u542F\u52A8\u591A\u4E2A\u65F6,\u81EA\u52A8\u9009\u4E3E(HA)
--cluster-signing-cert-file \uFF1A\u81EA\u52A8\u4E3Akubelet\u9881\u53D1\u8BC1\u4E66\u7684CA,apiserver\u4FDD\u6301\u4E00\u81F4
--cluster-signing-key-file \uFF1A\u81EA\u52A8\u4E3Akubelet\u9881\u53D1\u8BC1\u4E66\u7684CA,apiserver\u4FDD\u6301\u4E00\u81F4	
</code></pre><h3 id="_8-10-3-\u751F\u6210\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_8-10-3-\u751F\u6210\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 8.10.3.\u751F\u6210\u914D\u7F6E\u6587\u4EF6</h3><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F\u4E8B\u9879</p><p>\u4EE5\u4E0B\u662Fshell\u547D\u4EE4,\u76F4\u63A5\u5728shell\u7EC8\u7AEF\u6267\u884C</p></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>KUBE_CONFIG=&quot;/opt/kubernetes/cfg/kube-controller-manager.kubeconfig&quot;
KUBE_APISERVER=&quot;https://192.168.0.9:6443&quot;

kubectl config set-cluster kubernetes \\
  --certificate-authority=/opt/kubernetes/ssl/ca.pem \\
  --embed-certs=true \\
  --server=\${KUBE_APISERVER} \\
  --kubeconfig=\${KUBE_CONFIG}
  
kubectl config set-credentials kube-controller-manager \\
  --client-certificate=./kube-controller-manager.pem \\
  --client-key=./kube-controller-manager-key.pem \\
  --embed-certs=true \\
  --kubeconfig=\${KUBE_CONFIG}
  
kubectl config set-context default \\
  --cluster=kubernetes \\
  --user=kube-controller-manager \\
  --kubeconfig=\${KUBE_CONFIG}
  
kubectl config use-context default --kubeconfig=\${KUBE_CONFIG}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-10-4-\u8BA9systemd\u7BA1\u7406controller-manager" tabindex="-1"><a class="header-anchor" href="#_8-10-4-\u8BA9systemd\u7BA1\u7406controller-manager" aria-hidden="true">#</a> 8.10.4.\u8BA9systemd\u7BA1\u7406controller-manager</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; /usr/lib/systemd/system/kube-controller-manager.service &lt;&lt; EOF
[Unit]
Description=Kubernetes Controller Manager
Documentation=https://github.com/kubernetes/kubernetes

[Service]
EnvironmentFile=/opt/kubernetes/cfg/kube-controller-manager.conf
ExecStart=/opt/kubernetes/bin/kube-controller-manager \\$KUBE_CONTROLLER_MANAGER_OPTS
Restart=on-failure

[Install]
WantedBy=multi-user.target
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-10-5-\u542F\u52A8kube-controller-manager" tabindex="-1"><a class="header-anchor" href="#_8-10-5-\u542F\u52A8kube-controller-manager" aria-hidden="true">#</a> 8.10.5.\u542F\u52A8kube-controller-manager</h3><pre><code>\u5237\u65B0\u914D\u7F6E\u6587\u4EF6\u540E\u542F\u52A8kube-controller-manager\u5E76\u8BBE\u7F6E\u4E3A\u5F00\u673A\u542F\u52A8
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl daemon-reload &amp;&amp;
systemctl start kube-controller-manager &amp;&amp;
systemctl enable kube-controller-manager
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u67E5\u770Bkube-controller-manager\u542F\u52A8\u72B6\u6001
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl status kube-controller-manager
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u542F\u52A8\u6545\u969C\u6392\u67E5
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat /var/log/messages|grep kube-controller-manager|grep -i error
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_8-11-\u90E8\u7F72kube-scheduler" tabindex="-1"><a class="header-anchor" href="#_8-11-\u90E8\u7F72kube-scheduler" aria-hidden="true">#</a> 8.11.\u90E8\u7F72kube-scheduler</h2><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F\u4E8B\u9879</p><p>8.9\u7AE0\u8282\u6240\u6709\u64CD\u4F5C\u53EA\u5728Master Node1\u8282\u70B9\u64CD\u4F5C\uFF0C\u4E0D\u9700\u8981\u5728\u5176\u4ED6\u8282\u70B9\u64CD\u4F5C\uFF0C\u56E0\u4E3Akube-scheduler\u662FMaster\u8282\u70B9\u7684\u4E13\u7528\u7EC4\u4EF6\uFF0CWorker Node\u4E0D\u9700\u8981\u4F7F\u7528\u8FD9\u4E2A\u7EC4\u4EF6</p></div><h3 id="_8-10-1-\u5207\u6362\u76EE\u5F55\u5E76\u62F7\u8D1Dkube-dcheduler\u76F8\u5173\u6587\u4EF6\u5230-opt-kubernetes-bin" tabindex="-1"><a class="header-anchor" href="#_8-10-1-\u5207\u6362\u76EE\u5F55\u5E76\u62F7\u8D1Dkube-dcheduler\u76F8\u5173\u6587\u4EF6\u5230-opt-kubernetes-bin" aria-hidden="true">#</a> 8.10.1 \u5207\u6362\u76EE\u5F55\u5E76\u62F7\u8D1Dkube-dcheduler\u76F8\u5173\u6587\u4EF6\u5230/opt/kubernetes/bin</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cp /opt/k8s/package/kubernetes/server/bin/kube-scheduler /opt/kubernetes/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_8-11-2-\u751F\u6210\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#_8-11-2-\u751F\u6210\u8BC1\u4E66" aria-hidden="true">#</a> 8.11.2.\u751F\u6210\u8BC1\u4E66</h3><pre><code>\u5207\u6362\u5DE5\u4F5C\u76EE\u5F55
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd ~/TLS/k8s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u521B\u5EFA\u8BC1\u4E66\u8BF7\u6C42\u6587\u4EF6
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; kube-scheduler-csr.json &lt;&lt; EOF
{
  &quot;CN&quot;: &quot;system:kube-scheduler&quot;,
  &quot;hosts&quot;: [],
  &quot;key&quot;: {
    &quot;algo&quot;: &quot;rsa&quot;,
    &quot;size&quot;: 2048
  },
  &quot;names&quot;: [
    {
      &quot;C&quot;: &quot;CN&quot;,
      &quot;L&quot;: &quot;BeiJing&quot;,
      &quot;ST&quot;: &quot;BeiJing&quot;,
      &quot;O&quot;: &quot;system:masters&quot;,
      &quot;OU&quot;: &quot;System&quot;
    }
  ]
}
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u751F\u6210\u8BC1\u4E66
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cfssl gencert -ca=ca.pem -ca-key=ca-key.pem \\
-config=ca-config.json -profile=kubernetes \\
kube-scheduler-csr.json | cfssljson -bare kube-scheduler
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-11-3-\u521B\u5EFAkube-scheduler-conf\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_8-11-3-\u521B\u5EFAkube-scheduler-conf\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 8.11.3.\u521B\u5EFAkube-scheduler.conf\u914D\u7F6E\u6587\u4EF6</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; /opt/kubernetes/cfg/kube-scheduler.conf &lt;&lt; EOF
KUBE_SCHEDULER_OPTS=&quot;--logtostderr=false \\\\
--v=2 \\\\
--log-dir=/opt/kubernetes/logs \\\\
--leader-elect \\\\
--kubeconfig=/opt/kubernetes/cfg/kube-scheduler.kubeconfig \\\\
--bind-address=127.0.0.1&quot;
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u914D\u7F6E\u6587\u4EF6\u8BF4\u660E
--kubeconfig \uFF1A\u8FDE\u63A5apiserver\u914D\u7F6E\u6587\u4EF6
--leader-elect \uFF1A\u5F53\u8BE5\u7EC4\u4EF6\u542F\u52A8\u591A\u4E2A\u65F6,\u81EA\u52A8\u9009\u4E3E(HA)\u3002
</code></pre><h3 id="_8-11-4-\u751F\u6210kube-scheduler-kubeconfig\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_8-11-4-\u751F\u6210kube-scheduler-kubeconfig\u6587\u4EF6" aria-hidden="true">#</a> 8.11.4.\u751F\u6210kube-scheduler.kubeconfig\u6587\u4EF6</h3><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F\u4E8B\u9879</p><p>\u5728shell\u4E2D\u6267\u884C\u76F4\u63A5\u6267\u884C\u4E0B\u9762\u547D\u4EE4</p></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>	mkdir ~/.kube
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>KUBE_CONFIG=&quot;/opt/kubernetes/cfg/kube-scheduler.kubeconfig&quot;
KUBE_APISERVER=&quot;https://192.168.0.9:6443&quot;

kubectl config set-cluster kubernetes \\
  --certificate-authority=/opt/kubernetes/ssl/ca.pem \\
  --embed-certs=true \\
  --server=\${KUBE_APISERVER} \\
  --kubeconfig=\${KUBE_CONFIG}
  
kubectl config set-credentials kube-scheduler \\
  --client-certificate=./kube-scheduler.pem \\
  --client-key=./kube-scheduler-key.pem \\
  --embed-certs=true \\
  --kubeconfig=\${KUBE_CONFIG}
  
kubectl config set-context default \\
  --cluster=kubernetes \\
  --user=kube-scheduler \\
  --kubeconfig=\${KUBE_CONFIG}
  
kubectl config use-context default --kubeconfig=\${KUBE_CONFIG}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-11-5-\u8BA9systemd\u7BA1\u7406kube-scheduler" tabindex="-1"><a class="header-anchor" href="#_8-11-5-\u8BA9systemd\u7BA1\u7406kube-scheduler" aria-hidden="true">#</a> 8.11.5.\u8BA9systemd\u7BA1\u7406kube-scheduler</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; /usr/lib/systemd/system/kube-scheduler.service &lt;&lt; EOF
[Unit]
Description=Kubernetes Scheduler
Documentation=https://github.com/kubernetes/kubernetes

[Service]
EnvironmentFile=/opt/kubernetes/cfg/kube-scheduler.conf
ExecStart=/opt/kubernetes/bin/kube-scheduler \\$KUBE_SCHEDULER_OPTS
Restart=on-failure

[Install]
WantedBy=multi-user.target
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-11-6-\u542F\u52A8\u5E76\u8BBE\u7F6E\u5F00\u673A\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#_8-11-6-\u542F\u52A8\u5E76\u8BBE\u7F6E\u5F00\u673A\u542F\u52A8" aria-hidden="true">#</a> 8.11.6.\u542F\u52A8\u5E76\u8BBE\u7F6E\u5F00\u673A\u542F\u52A8</h3><pre><code>\u5237\u65B0\u914D\u7F6E\u6587\u4EF6\u540E\u542F\u52A8kube-scheduler\u5E76\u8BBE\u7F6E\u4E3A\u5F00\u673A\u542F\u52A8
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl daemon-reload &amp;&amp;
systemctl start kube-scheduler &amp;&amp;
systemctl enable kube-scheduler
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u67E5\u770B\u542F\u52A8\u72B6\u6001
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl status kube-scheduler
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u542F\u52A8\u6545\u969C\u6392\u67E5
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat /var/log/messages|grep kube-scheduler|grep -i error
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_8-12-\u4F7F\u7528kubectl\u67E5\u770B\u96C6\u7FA4\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#_8-12-\u4F7F\u7528kubectl\u67E5\u770B\u96C6\u7FA4\u72B6\u6001" aria-hidden="true">#</a> 8.12.\u4F7F\u7528kubectl\u67E5\u770B\u96C6\u7FA4\u72B6\u6001</h2><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F\u4E8B\u9879</p><p>8.10\u7AE0\u8282\u6240\u6709\u64CD\u4F5C\u53EA\u5728Master1\u8282\u70B9\u64CD\u4F5C\uFF0C\u4E0D\u9700\u8981\u5728\u5176\u4ED6\u8282\u70B9\u64CD\u4F5C\uFF0C\u56E0\u4E3Akubectl\u662FMaster\u8282\u70B9\u7684\u4E13\u7528\u7EC4\u4EF6\uFF0CWorker Node\u4E0D\u9700\u8981\u4F7F\u7528\u8FD9\u4E2A\u7EC4\u4EF6</p></div><h3 id="_8-12-1-\u751F\u6210\u6240\u9700\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#_8-12-1-\u751F\u6210\u6240\u9700\u8BC1\u4E66" aria-hidden="true">#</a> 8.12.1.\u751F\u6210\u6240\u9700\u8BC1\u4E66</h3><pre><code>\u5207\u6362\u5DE5\u4F5C\u76EE\u5F55
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd ~/TLS/k8s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u4F7F\u7528\u81EA\u7B7ECA\u7B7E\u53D1kubectl\u8FDE\u63A5\u96C6\u7FA4\u7684\u8BC1\u4E66	
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; admin-csr.json &lt;&lt;EOF
{
    &quot;CN&quot;: &quot;admin&quot;,
    &quot;hosts&quot;: [],
    &quot;key&quot;: {
    &quot;algo&quot;: &quot;rsa&quot;,
    &quot;size&quot;: 2048
    },
    &quot;names&quot;: [
    {
        &quot;C&quot;: &quot;CN&quot;,
        &quot;L&quot;: &quot;BeiJing&quot;,
        &quot;ST&quot;: &quot;BeiJing&quot;,
        &quot;O&quot;: &quot;system:masters&quot;,
        &quot;OU&quot;: &quot;System&quot;
    }
    ]
}
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u751F\u6210\u8BC1\u4E66
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cfssl gencert -ca=ca.pem -ca-key=ca-key.pem \\
-config=ca-config.json -profile=kubernetes admin-csr.json | cfssljson -bare admin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-12-2-\u5728-kube\u6587\u4EF6\u5939\u4E2D\u751F\u6210config\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_8-12-2-\u5728-kube\u6587\u4EF6\u5939\u4E2D\u751F\u6210config\u6587\u4EF6" aria-hidden="true">#</a> 8.12.2.\u5728.kube\u6587\u4EF6\u5939\u4E2D\u751F\u6210config\u6587\u4EF6</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir /root/.kube

KUBE_CONFIG=&quot;/root/.kube/config&quot;
KUBE_APISERVER=&quot;https://192.168.0.9:6443&quot;

kubectl config set-cluster kubernetes \\
  --certificate-authority=/opt/kubernetes/ssl/ca.pem \\
  --embed-certs=true \\
  --server=\${KUBE_APISERVER} \\
  --kubeconfig=\${KUBE_CONFIG}
  
kubectl config set-credentials cluster-admin \\
  --client-certificate=./admin.pem \\
  --client-key=./admin-key.pem \\
  --embed-certs=true \\
  --kubeconfig=\${KUBE_CONFIG}
  
kubectl config set-context default \\
  --cluster=kubernetes \\
  --user=cluster-admin \\
  --kubeconfig=\${KUBE_CONFIG}
  
kubectl config use-context default --kubeconfig=\${KUBE_CONFIG}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-12-3-\u901A\u8FC7kubectl\u5DE5\u5177\u67E5\u770B\u96C6\u7FA4\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_8-12-3-\u901A\u8FC7kubectl\u5DE5\u5177\u67E5\u770B\u96C6\u7FA4\u7EC4\u4EF6" aria-hidden="true">#</a> 8.12.3.\u901A\u8FC7kubectl\u5DE5\u5177\u67E5\u770B\u96C6\u7FA4\u7EC4\u4EF6</h3><pre><code>\u547D\u4EE4
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl get cs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>Master1\u8282\u70B9\u7EC4\u4EF6\u8FD0\u884C\u6B63\u5E38\u4F1A\u663E\u793A\u5982\u4E0B\u7ED3\u679C
NAME                 STATUS    MESSAGE             ERROR
controller-manager   Healthy   ok                  
scheduler            Healthy   ok                  
etcd-0               Healthy   {&quot;health&quot;:&quot;true&quot;}   
etcd-2               Healthy   {&quot;health&quot;:&quot;true&quot;}   
etcd-1               Healthy   {&quot;health&quot;:&quot;true&quot;} 
</code></pre><h3 id="_8-12-4-\u6388\u6743kubelet-bootstrap\u7528\u6237\u5141\u8BB8\u8BF7\u6C42\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#_8-12-4-\u6388\u6743kubelet-bootstrap\u7528\u6237\u5141\u8BB8\u8BF7\u6C42\u8BC1\u4E66" aria-hidden="true">#</a> 8.12.4.\u6388\u6743kubelet-bootstrap\u7528\u6237\u5141\u8BB8\u8BF7\u6C42\u8BC1\u4E66</h3><pre><code>\u521B\u5EFA\u6388\u6743\u7528\u6237kubelet-bootstrap
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl create clusterrolebinding kubelet-bootstrap \\
--clusterrole=system:node-bootstrapper \\
--user=kubelet-bootstrap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u4E0A\u9762\u5982\u679C\u4E0D\u884C\u7528\u8FD9\u4E2A
kubectl create clusterrolebinding kubelet-bootstrap \\
--clusterrole=system:node-bootstrapper --user=kubelet-bootstrap --group=system:bootstrappers

\u8865\u5145\u547D\u4EE4
\u5220\u9664\u6388\u6743kubelet-bootstrap\u7528\u6237\uFF1A\u7B2C\u4E00\u6B65
kubectl delete clusterrolebinding kubelet-bootstrap
\u5220\u9664\u6388\u6743kubelet-bootstrap\u7528\u6237\uFF1A\u7B2C\u4E8C\u6B65
find / -name bootstrap.kubeconfig
rm -rf /opt/kubernetes/cfg/bootstrap.kubeconfig
\u5220\u9664\u6388\u6743kubelet-bootstrap\u7528\u6237\uFF1A\u7B2C\u4E09\u6B65
systemctl restart kubelet
</code></pre><h2 id="_8-13-\u5728master-node1\u4E0A\u90E8\u7F72\u7B2C\u4E00\u4E2Aworker-node" tabindex="-1"><a class="header-anchor" href="#_8-13-\u5728master-node1\u4E0A\u90E8\u7F72\u7B2C\u4E00\u4E2Aworker-node" aria-hidden="true">#</a> 8.13.\u5728Master Node1\u4E0A\u90E8\u7F72\u7B2C\u4E00\u4E2AWorker Node</h2><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F\u4E8B\u9879</p><p>8.11.\u7AE0\u8282\u6240\u6709\u64CD\u4F5C\u53EA\u5728Master Node1\u8282\u70B9\u64CD\u4F5C\uFF0C\u5373\u5F53Master Node1\u65E2\u5145\u5F53Master Node,\u4E5F\u5F53Worker Node</p></div><pre><code>\u5C06Master Node1\u8282\u70B9\u7684k8s-server\u8F6F\u4EF6\u5305\u62F7\u8D1D\u5230\u6240\u6709Worker Node
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd /opt/k8s/package/kubernetes/server/bin/
cp kubelet  kube-proxy /opt/kubernetes/bin/ &amp;&amp;
scp kubelet  kube-proxy root@192.168.0.10:/opt/kubernetes/bin/ &amp;&amp;
scp kubelet  kube-proxy root@192.168.0.11:/opt/kubernetes/bin/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-13-2-\u5728master-node1\u90E8\u7F72kubelet" tabindex="-1"><a class="header-anchor" href="#_8-13-2-\u5728master-node1\u90E8\u7F72kubelet" aria-hidden="true">#</a> 8.13.2.\u5728Master Node1\u90E8\u7F72kubelet</h3><h4 id="_8-13-2-1-\u521B\u5EFAkubelet\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_8-13-2-1-\u521B\u5EFAkubelet\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 8.13.2.1.\u521B\u5EFAkubelet\u914D\u7F6E\u6587\u4EF6</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; /opt/kubernetes/cfg/kubelet.conf &lt;&lt; EOF
KUBELET_OPTS=&quot;--logtostderr=false \\\\
--v=2 \\\\
--log-dir=/opt/kubernetes/logs \\\\
--hostname-override=binary-k8s-master1 \\\\
--network-plugin=cni \\\\
--kubeconfig=/opt/kubernetes/cfg/kubelet.kubeconfig \\\\
--bootstrap-kubeconfig=/opt/kubernetes/cfg/bootstrap.kubeconfig \\\\
--config=/opt/kubernetes/cfg/kubelet-config.yml \\\\
--cert-dir=/opt/kubernetes/ssl \\\\
--pod-infra-container-image=registry.cn-hangzhou.aliyuncs.com/google-containers/pause-amd64:3.0&quot;
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u914D\u7F6E\u8BF4\u660E
--hostname-override \uFF1A\u663E\u793A\u540D\u79F0,\u96C6\u7FA4\u552F\u4E00(\u4E0D\u53EF\u91CD\u590D)\u3002
--network-plugin \uFF1A\u542F\u7528CNI\u3002
--kubeconfig \uFF1A \u7A7A\u8DEF\u5F84,\u4F1A\u81EA\u52A8\u751F\u6210,\u540E\u9762\u7528\u4E8E\u8FDE\u63A5apiserver\u3002
--bootstrap-kubeconfig \uFF1A\u9996\u6B21\u542F\u52A8\u5411apiserver\u7533\u8BF7\u8BC1\u4E66\u3002
--config \uFF1A\u914D\u7F6E\u6587\u4EF6\u53C2\u6570\u3002
--cert-dir \uFF1Akubelet\u8BC1\u4E66\u76EE\u5F55\u3002
--pod-infra-container-image \uFF1A\u7BA1\u7406Pod\u7F51\u7EDC\u5BB9\u5668\u7684\u955C\u50CF init container
</code></pre><h4 id="_8-13-2-2-\u521B\u5EFAkubelet\u7F16\u6392\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_8-13-2-2-\u521B\u5EFAkubelet\u7F16\u6392\u6587\u4EF6" aria-hidden="true">#</a> 8.13.2.2.\u521B\u5EFAkubelet\u7F16\u6392\u6587\u4EF6</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; /opt/kubernetes/cfg/kubelet-config.yml &lt;&lt; EOF
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-13-2-3-\u751F\u6210kubelet\u521D\u6B21\u52A0\u5165\u96C6\u7FA4\u5F15\u5BFCkubeconfig\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_8-13-2-3-\u751F\u6210kubelet\u521D\u6B21\u52A0\u5165\u96C6\u7FA4\u5F15\u5BFCkubeconfig\u6587\u4EF6" aria-hidden="true">#</a> 8.13.2.3.\u751F\u6210kubelet\u521D\u6B21\u52A0\u5165\u96C6\u7FA4\u5F15\u5BFCkubeconfig\u6587\u4EF6</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>KUBE_CONFIG=&quot;/opt/kubernetes/cfg/bootstrap.kubeconfig&quot;
KUBE_APISERVER=&quot;https://192.168.0.9:6443&quot; # apiserver IP:PORT
TOKEN=&quot;4136692876ad4b01bb9dd0988480ebba&quot; # \u4E0Etoken.csv\u91CC\u4FDD\u6301\u4E00\u81F4  /opt/kubernetes/cfg/token.csv 

kubectl config set-cluster kubernetes \\
  --certificate-authority=/opt/kubernetes/ssl/ca.pem \\
  --embed-certs=true \\
  --server=\${KUBE_APISERVER} \\
  --kubeconfig=\${KUBE_CONFIG}
  
kubectl config set-credentials &quot;kubelet-bootstrap&quot; \\
  --token=\${TOKEN} \\
  --kubeconfig=\${KUBE_CONFIG}
  
kubectl config set-context default \\
  --cluster=kubernetes \\
  --user=&quot;kubelet-bootstrap&quot; \\
  --kubeconfig=\${KUBE_CONFIG}
  
kubectl config use-context default --kubeconfig=\${KUBE_CONFIG}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-13-2-4-systemd\u7BA1\u7406kubelet" tabindex="-1"><a class="header-anchor" href="#_8-13-2-4-systemd\u7BA1\u7406kubelet" aria-hidden="true">#</a> 8.13.2.4.systemd\u7BA1\u7406kubelet</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; /usr/lib/systemd/system/kubelet.service &lt;&lt; EOF
[Unit]
Description=Kubernetes Kubelet
After=docker.service

[Service]
EnvironmentFile=/opt/kubernetes/cfg/kubelet.conf
ExecStart=/opt/kubernetes/bin/kubelet \\$KUBELET_OPTS
Restart=on-failure
LimitNOFILE=65536

[Install]
WantedBy=multi-user.target
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-13-3-5-\u542F\u52A8kubelet\u5E76\u8BBE\u7F6E\u5F00\u673A\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#_8-13-3-5-\u542F\u52A8kubelet\u5E76\u8BBE\u7F6E\u5F00\u673A\u542F\u52A8" aria-hidden="true">#</a> 8.13.3.5.\u542F\u52A8kubelet\u5E76\u8BBE\u7F6E\u5F00\u673A\u542F\u52A8</h4><pre><code>\u5237\u65B0\u914D\u7F6E\u6587\u4EF6\u540E\u542F\u52A8kubelet\u5E76\u8BBE\u7F6E\u5F00\u673A\u542F\u52A8
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl daemon-reload &amp;&amp;
systemctl start kubelet &amp;&amp;
systemctl enable kubelet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u67E5\u770B\u542F\u52A8\u72B6\u6001
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl status kubelet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u542F\u52A8\u6545\u969C\u6392\u67E5
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat /var/log/messages|grep kubelet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_8-13-2-6-\u5141\u8BB8kubelet\u8BC1\u4E66\u7533\u8BF7\u5E76\u52A0\u5165\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#_8-13-2-6-\u5141\u8BB8kubelet\u8BC1\u4E66\u7533\u8BF7\u5E76\u52A0\u5165\u96C6\u7FA4" aria-hidden="true">#</a> 8.13.2.6.\u5141\u8BB8kubelet\u8BC1\u4E66\u7533\u8BF7\u5E76\u52A0\u5165\u96C6\u7FA4</h4><pre><code>\u67E5\u770Bkubelet\u8BC1\u4E66\u7B7E\u540D\u8BF7\u6C42
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl get csr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>[root@binary-k8s-master1 bin]# kubectl get csr
NAME                                                   AGE	CONDITIO	...              
node-csr-IiJqGnj7y-9pMOIaYb9rpYxtIaEuACOITLI-WpfdpDI   16s	Pending		...

\u624B\u52A8\u6279\u51C6\u8BC1\u4E66\u7B7E\u540D\u8BF7\u6C42
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl certificate approve node-csr-IiJqGnj7y-9pMOIaYb9rpYxtIaEuACOITLI-WpfdpDI
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u518D\u6B21\u4F7F\u7528\u547D\u4EE4\u67E5\u770B\u7533\u8BF7\u662F\u5426\u901A\u8FC7
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl get csr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>[root@binary-k8s-master1 bin]# kubectl get csr
NAME                                                   AGE	CONDITIO	...              
node-csr-IiJqGnj7y-9pMOIaYb9rpYxtIaEuACOITLI-WpfdpDI   16s	Approved	...

\u8865\u5145\u547D\u4EE4
\u624B\u52A8\u62D2\u7EDD\u8BC1\u4E66\u7B7E\u540D\u8BF7\u6C42
kubectl certificate deny node-csr-IiJqGnj7y-9pMOIaYb9rpYxtIaEuACOITLI-WpfdpDI
\u5220\u9664\u591A\u4F59\u7684csr
kubectl delete csr node-csr-IiJqGnj7y-9pMOIaYb9rpYxtIaEuACOITLI-WpfdpDI

\u67E5\u770B\u8282\u70B9\uFF08\u5982\u679C\u4E0A\u9762\u6B65\u9AA4\u90FD\u6CA1\u6709\u9519\u8BEF\u8FD9\u4E2A\u6B65\u9AA4\u53EF\u4EE5\u67E5\u770B\u5230Master\u8282\u70B9\uFF09
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl get nodes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>[root@binary-k8s-master1 bin]# kubectl get nodes
NAME          STATUS     ROLES    AGE     VERSION
binary-k8s-master1   NotReady   &lt;none&gt;   2m10s   v1.20.0

\u6CE8\u610F\u4E8B\u9879
\u7531\u4E8E\u7F51\u7EDC\u63D2\u4EF6\u8FD8\u6CA1\u6709\u90E8\u7F72,\u8282\u70B9\u4F1A\u6CA1\u6709\u51C6\u5907\u5C31\u7EEANotReady
</code></pre><h3 id="_8-13-3-\u90E8\u7F72kube-proxy" tabindex="-1"><a class="header-anchor" href="#_8-13-3-\u90E8\u7F72kube-proxy" aria-hidden="true">#</a> 8.13.3.\u90E8\u7F72kube-proxy</h3><h4 id="_8-13-3-1-\u521B\u5EFAkube-proxy\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_8-13-3-1-\u521B\u5EFAkube-proxy\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 8.13.3.1.\u521B\u5EFAkube-proxy\u914D\u7F6E\u6587\u4EF6</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; /opt/kubernetes/cfg/kube-proxy.conf &lt;&lt; EOF
KUBE_PROXY_OPTS=&quot;--logtostderr=false \\\\
--v=2 \\\\
--log-dir=/opt/kubernetes/logs \\\\
--config=/opt/kubernetes/cfg/kube-proxy-config.yml&quot;
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-13-3-2-\u914D\u7F6E\u53C2\u6570\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_8-13-3-2-\u914D\u7F6E\u53C2\u6570\u6587\u4EF6" aria-hidden="true">#</a> 8.13.3.2.\u914D\u7F6E\u53C2\u6570\u6587\u4EF6</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; /opt/kubernetes/cfg/kube-proxy-config.yml &lt;&lt; EOF
kind: KubeProxyConfiguration
apiVersion: kubeproxy.config.k8s.io/v1alpha1
bindAddress: 0.0.0.0
metricsBindAddress: 0.0.0.0:10249
clientConnection:
  kubeconfig: /opt/kubernetes/cfg/kube-proxy.kubeconfig
hostnameOverride: binary-k8s-master1
clusterCIDR: 10.244.0.0/16
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-13-3-3-\u751F\u6210kube-proxy\u8BC1\u4E66\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_8-13-3-3-\u751F\u6210kube-proxy\u8BC1\u4E66\u6587\u4EF6" aria-hidden="true">#</a> 8.13.3.3.\u751F\u6210kube-proxy\u8BC1\u4E66\u6587\u4EF6</h4><pre><code>\u5207\u6362\u5DE5\u4F5C\u76EE\u5F55
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd ~/TLS/k8s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u521B\u5EFA\u8BC1\u4E66\u8BF7\u6C42\u6587\u4EF6
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; kube-proxy-csr.json &lt;&lt; EOF
{
    &quot;CN&quot;: &quot;system:kube-proxy&quot;,
    &quot;hosts&quot;: [],
    &quot;key&quot;: {
    &quot;algo&quot;: &quot;rsa&quot;,
    &quot;size&quot;: 2048
    },
    &quot;names&quot;: [
    {
        &quot;C&quot;: &quot;CN&quot;,
        &quot;L&quot;: &quot;BeiJing&quot;,
        &quot;ST&quot;: &quot;BeiJing&quot;,
        &quot;O&quot;: &quot;k8s&quot;,
        &quot;OU&quot;: &quot;System&quot;
    }
   ]
}
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u751F\u6210\u8BC1\u4E66
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cfssl gencert -ca=ca.pem -ca-key=ca-key.pem \\
-config=ca-config.json -profile=kubernetes kube-proxy-csr.json | cfssljson -bare kube-proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-13-3-4-\u751F\u6210kube-proxy-kubeconfig\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_8-13-3-4-\u751F\u6210kube-proxy-kubeconfig\u6587\u4EF6" aria-hidden="true">#</a> 8.13.3.4.\u751F\u6210kube-proxy.kubeconfig\u6587\u4EF6</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>KUBE_CONFIG=&quot;/opt/kubernetes/cfg/kube-proxy.kubeconfig&quot;
KUBE_APISERVER=&quot;https://192.168.0.9:6443&quot;

kubectl config set-cluster kubernetes \\
  --certificate-authority=/opt/kubernetes/ssl/ca.pem \\
  --embed-certs=true \\
  --server=\${KUBE_APISERVER} \\
  --kubeconfig=\${KUBE_CONFIG}
  
kubectl config set-credentials kube-proxy \\
  --client-certificate=./kube-proxy.pem \\
  --client-key=./kube-proxy-key.pem \\
  --embed-certs=true \\
  --kubeconfig=\${KUBE_CONFIG}
  
kubectl config set-context default \\
  --cluster=kubernetes \\
  --user=kube-proxy \\
  --kubeconfig=\${KUBE_CONFIG}
  
kubectl config use-context default --kubeconfig=\${KUBE_CONFIG}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-13-3-5-systemd\u7BA1\u7406kube-proxy" tabindex="-1"><a class="header-anchor" href="#_8-13-3-5-systemd\u7BA1\u7406kube-proxy" aria-hidden="true">#</a> 8.13.3.5.systemd\u7BA1\u7406kube-proxy</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; /usr/lib/systemd/system/kube-proxy.service &lt;&lt; EOF
[Unit]
Description=Kubernetes Proxy
After=network.target

[Service]
EnvironmentFile=/opt/kubernetes/cfg/kube-proxy.conf
ExecStart=/opt/kubernetes/bin/kube-proxy \\$KUBE_PROXY_OPTS
Restart=on-failure
LimitNOFILE=65536

[Install]
WantedBy=multi-user.target
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-12-3-6-\u542F\u52A8kube-proxy\u5E76\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F" tabindex="-1"><a class="header-anchor" href="#_8-12-3-6-\u542F\u52A8kube-proxy\u5E76\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F" aria-hidden="true">#</a> 8.12.3.6.\u542F\u52A8kube-proxy\u5E76\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F</h4><pre><code>\u5237\u65B0\u914D\u7F6E\u6587\u4EF6\u540E\u542F\u52A8kube-proxy\u5E76\u8BBE\u7F6E\u5F00\u673A\u542F\u52A8
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl daemon-reload &amp;&amp;
systemctl start kube-proxy &amp;&amp;
systemctl enable kube-proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u542F\u52A8\u72B6\u6001\u67E5\u8BE2
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>	systemctl status kube-proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_8-13-4-\u90E8\u7F72\u7F51\u7EDC\u7EC4\u4EF6-calico" tabindex="-1"><a class="header-anchor" href="#_8-13-4-\u90E8\u7F72\u7F51\u7EDC\u7EC4\u4EF6-calico" aria-hidden="true">#</a> 8.13.4.\u90E8\u7F72\u7F51\u7EDC\u7EC4\u4EF6(Calico)</h3><pre><code>Calico\u7B80\u4ECB
Calico\u662F\u4E00\u4E2A\u7EAF\u4E09\u5C42\u7684\u6570\u636E\u4E2D\u5FC3\u7F51\u7EDC\u65B9\u6848\uFF0C\u662F\u76EE\u524DKubernetes\u4E3B\u6D41\u7684\u7F51\u7EDC\u65B9\u6848\u3002

\u5207\u6362\u76EE\u5F55
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd /root/TLS/k8s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u83B7\u53D6Calico.yaml\u6587\u4EF6
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>wget http://docs.projectcalico.org/v3.8/manifests/calico.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u5907\u4EFDcalico.yaml\u5E76\u4FEE\u6539calico.yaml
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cp calico.yaml calico.yaml.bak &amp;&amp; 
sed -i &#39;s/192.168.0.0/10.244.0.0/g&#39; calico.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u67E5\u8BE2\u4FEE\u6539\u7ED3\u679C
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>grep &quot;IPV4POOL_CIDR&quot; calico.yaml  -A 1 \\
		- name: CALICO_IPV4POOL_CIDR	\\
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u6B63\u5E38\u4F1A\u663E\u793A\u7EBF\u9762\u503C
value: &quot;10.244.0.0/16&quot;

\u90E8\u7F72Calico
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl apply -f calico.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u7B49\u5F858\u5206\u949F\u5DE6\u53F3\u540E\u67E5\u770BCalico\u7684Pod\u8FD0\u884C\u72B6\u6001\uFF08\u6B63\u5E38\u662FSTATUS\u662FRunning\uFF09
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl get pods -n kube-system
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>[root@binary-k8s-master1 k8s]# kubectl get pods -n kube-system
NAME                                      READY   STATUS    RESTARTS   AGE
calico-kube-controllers-bcc6f659f-r28g7   1/1     Running   0          18m
calico-node-dkjn6                         1/1     Running   6          18m

\u6CE8\u610F\u4E8B\u9879
calico\u90E8\u7F72\u5F88\u6162\uFF0C\u4E0D\u8FC7\u4E0D\u7528\u7B498\u5206\u949F\uFF0C\u6267\u884Ckubectl apply\u547D\u4EE4\u540E\u7A0D\u7B49\u4E00\u4F1A\u513F\u5C31\u53EF\u4EE5\u901A\u8FC7kubectl get nodes
\u67E5\u770B\u8282\u70B9\u72B6\u6001\u4E86

\u67E5\u770B\u96C6\u7FA4\u8282\u70B9\uFF08\u6B63\u5E38\u662FSTATUS\u662FReady\uFF09
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl get nodes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>[root@binary-k8s-master1 k8s]# kubectl get nodes
NAME          		  STATUS   ROLES    AGE   VERSION
binary-k8s-master1    Ready    &lt;none&gt;   34m   v1.20.0
</code></pre><h3 id="_8-13-5-\u6388\u6743apiserver\u8BBF\u95EEkubelet" tabindex="-1"><a class="header-anchor" href="#_8-13-5-\u6388\u6743apiserver\u8BBF\u95EEkubelet" aria-hidden="true">#</a> 8.13.5.\u6388\u6743apiserver\u8BBF\u95EEkubelet</h3><pre><code>\u5E94\u7528\u573A\u666F\uFF1A\u5982kubectl logs

\u521B\u5EFA\u914D\u7F6E\u6587\u4EF6
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; apiserver-to-kubelet-rbac.yaml &lt;&lt; EOF
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  annotations:
    rbac.authorization.kubernetes.io/autoupdate: &quot;true&quot;
  labels:
    kubernetes.io/bootstrapping: rbac-defaults
  name: system:kube-apiserver-to-kubelet
rules:
  - apiGroups:
      - &quot;&quot;
    resources:
      - nodes/proxy
      - nodes/stats
      - nodes/log
      - nodes/spec
      - nodes/metrics
      - pods/log
    verbs:
      - &quot;*&quot;
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: system:kube-apiserver
  namespace: &quot;&quot;
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: system:kube-apiserver-to-kubelet
subjects:
  - apiGroup: rbac.authorization.k8s.io
    kind: User
    name: kubernetes
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u5E94\u7528\u914D\u7F6E\u6587\u4EF6
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl apply -f apiserver-to-kubelet-rbac.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_8-14-\u589E\u52A0worker-node" tabindex="-1"><a class="header-anchor" href="#_8-14-\u589E\u52A0worker-node" aria-hidden="true">#</a> 8.14.\u589E\u52A0Worker Node</h2><h3 id="_8-14-1-\u5728\u6240\u6709worker-node\u521B\u5EFA\u5DE5\u4F5C\u76EE\u5F55\u5E76\u62F7\u8D1D\u4E8C\u8FDB\u5236\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_8-14-1-\u5728\u6240\u6709worker-node\u521B\u5EFA\u5DE5\u4F5C\u76EE\u5F55\u5E76\u62F7\u8D1D\u4E8C\u8FDB\u5236\u6587\u4EF6" aria-hidden="true">#</a> 8.14.1.\u5728\u6240\u6709Worker Node\u521B\u5EFA\u5DE5\u4F5C\u76EE\u5F55\u5E76\u62F7\u8D1D\u4E8C\u8FDB\u5236\u6587\u4EF6</h3><pre><code>\u5728\u6240\u6709Worker Node1\u548CWorker Node2\u4E2D\u521B\u5EFA\u5DE5\u4F5C\u76EE\u5F55
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir -p /opt/kubernetes/bin &amp;&amp;
mkdir -p /opt/kubernetes/cfg &amp;&amp;
mkdir -p /opt/kubernetes/ssl &amp;&amp;
mkdir -p /opt/kubernetes/logs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-14-2\u62F7\u8D1Dmaster-node1\u4E0A\u90E8\u7F72\u597D\u7684\u6587\u4EF6\u5230worker-node" tabindex="-1"><a class="header-anchor" href="#_8-14-2\u62F7\u8D1Dmaster-node1\u4E0A\u90E8\u7F72\u597D\u7684\u6587\u4EF6\u5230worker-node" aria-hidden="true">#</a> 8.14.2\u62F7\u8D1DMaster Node1\u4E0A\u90E8\u7F72\u597D\u7684\u6587\u4EF6\u5230Worker Node</h3><pre><code>\u8FDB\u5165Master Node1\uFF0C\u6267\u884C\u4E0B\u9762\u64CD\u4F5C\uFF0C\u955C\u76F8\u5173\u6587\u4EF6\u62F7\u8D1D\u5230Worker Node1\u548CWorker Node2
\u62F7\u8D1D\u5230Worker Node1\uFF08192.168.0.10\uFF09
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>scp -r /opt/kubernetes root@192.168.0.10:/opt/ &amp;&amp;
scp -r /usr/lib/systemd/system/{kubelet,kube-proxy}.service \\
root@192.168.0.10:/usr/lib/systemd/system &amp;&amp;
scp -r /opt/kubernetes/ssl/ca.pem root@192.168.0.10:/opt/kubernetes/ssl/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u62F7\u8D1D\u5230Worker Node2\uFF08192.168.0.11\uFF09
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>scp -r /opt/kubernetes root@192.168.0.11:/opt/ &amp;&amp;
scp -r /usr/lib/systemd/system/{kubelet,kube-proxy}.service \\
root@192.168.0.11:/usr/lib/systemd/system &amp;&amp;
scp -r /opt/kubernetes/ssl/ca.pem root@192.168.0.11:/opt/kubernetes/ssl/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-14-3-\u5220\u9664\u6240\u6709worker-node\u4E2Dkubelet\u8BC1\u4E66\u548Ckubeconfig\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_8-14-3-\u5220\u9664\u6240\u6709worker-node\u4E2Dkubelet\u8BC1\u4E66\u548Ckubeconfig\u6587\u4EF6" aria-hidden="true">#</a> 8.14.3.\u5220\u9664\u6240\u6709Worker Node\u4E2Dkubelet\u8BC1\u4E66\u548Ckubeconfig\u6587\u4EF6</h3><pre><code>Worker Node1\u8282\u70B9\uFF08192.168.0.10\uFF09
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>rm -f /opt/kubernetes/cfg/kubelet.kubeconfig &amp;&amp;
rm -f /opt/kubernetes/ssl/kubelet*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>Worker Node2\u8282\u70B9\uFF08192.168.0.11\uFF09
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>rm -f /opt/kubernetes/cfg/kubelet.kubeconfig &amp;&amp;
rm -f /opt/kubernetes/ssl/kubelet*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u8BF4\u660E:
\u8FD9\u51E0\u4E2A\u6587\u4EF6\u662F\u8BC1\u4E66\u7533\u8BF7\u5BA1\u6279\u540E\u81EA\u52A8\u751F\u6210\u7684,\u6BCF\u4E2ANode\u4E0D\u540C,\u5FC5\u987B\u5220\u9664
</code></pre><h3 id="_8-14-4-\u4FEE\u6539worker-node1\u548Cworker-node2\u4E3B\u673A\u540D" tabindex="-1"><a class="header-anchor" href="#_8-14-4-\u4FEE\u6539worker-node1\u548Cworker-node2\u4E3B\u673A\u540D" aria-hidden="true">#</a> 8.14.4. \u4FEE\u6539Worker Node1\u548CWorker Node2\u4E3B\u673A\u540D</h3><pre><code>Worker Node1\uFF08192.168.0.10\uFF09
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sed -i &#39;s/--hostname-override=binary-k8s-master1/--hostname-override=binary-k8s-worker1/g&#39; \\
/opt/kubernetes/cfg/kubelet.conf #\u4FEE\u6539--hostname-override\u7684\u503C\u4E3Abinary-k8s-worker1
sed -i &#39;s/hostnameOverride: binary-k8s-master1/hostnameOverride: binary-k8s-worker1/g&#39; \\
/opt/kubernetes/cfg/kube-proxy-config.yml #\u4FEE\u6539hostnameOverride\u7684\u503Cbinary-k8s-worker1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>Worker Node2\uFF08192.168.0.11\uFF09
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sed -i &#39;s/--hostname-override=binary-k8s-master1/--hostname-override=binary-k8s-worker2/g&#39; \\
/opt/kubernetes/cfg/kubelet.conf #\u4FEE\u6539--hostname-override\u7684\u503C\u4E3Abinary-k8s-worker2
sed -i &#39;s/hostnameOverride: binary-k8s-master1/hostnameOverride: binary-k8s-worker2/g&#39; \\
/opt/kubernetes/cfg/kube-proxy-config.yml #\u4FEE\u6539hostnameOverride\u7684\u503Cbinary-k8s-worker2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-14-5-\u542F\u52A8worker-node1\u548Cworker-node2\u4E2Dkubelet\u5E76\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F" tabindex="-1"><a class="header-anchor" href="#_8-14-5-\u542F\u52A8worker-node1\u548Cworker-node2\u4E2Dkubelet\u5E76\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F" aria-hidden="true">#</a> 8.14.5.\u542F\u52A8Worker Node1\u548CWorker Node2\u4E2Dkubelet\u5E76\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl daemon-reload &amp;&amp; 
systemctl start kubelet kube-proxy &amp;&amp; 
systemctl enable kubelet kube-proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u67E5\u770B\u542F\u52A8\u72B6\u6001
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl status kubelet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl status kube-proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u542F\u52A8\u6545\u969C\u89E3\u51B3
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat /var/log/messages|grep kube-proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_8-14-6-\u5728master1\u4E0A\u540C\u610F\u65B0\u7684node-kubelet\u8BC1\u4E66\u7533\u8BF7" tabindex="-1"><a class="header-anchor" href="#_8-14-6-\u5728master1\u4E0A\u540C\u610F\u65B0\u7684node-kubelet\u8BC1\u4E66\u7533\u8BF7" aria-hidden="true">#</a> 8.14.6.\u5728Master1\u4E0A\u540C\u610F\u65B0\u7684Node kubelet\u8BC1\u4E66\u7533\u8BF7</h3><pre><code>\u67E5\u770B\u8BC1\u4E66\u8BF7\u6C42
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl get csr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>[root@binary-k8s-master1 k8s]# kubectl get csr

NAME                                                    ... CONDITION         ...
node-csr-IiJqGnj7y-9pMOIaYb9rpYxtIaEuACOITLI-WpfdpDI    ... Approved,Issued   ...
node-csr-TlSHYrzacOBQbJyQcfVwuArXPKRbjcoMESZykQ3Qr0w   ... Pending            ...
node-csr-vb-rAPL-grn0NxFGBs-_5pScCDkICmvHRnbhn_bRdsc    ... Pending           ...

\u624B\u52A8\u6279\u51C6\u8BC1\u4E66\u7B7E\u540D\u8BF7\u6C42
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl certificate approve node-csr-TlSHYrzacOBQbJyQcfVwuArXPKRbjcoMESZykQ3Qr0w
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl certificate approve node-csr-vb-rAPL-grn0NxFGBs-_5pScCDkICmvHRnbhn_bRdsc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u67E5\u770B\u6240\u6709Node\u72B6\u6001(\u8981\u7A0D\u7B49\u4F1A\u624D\u4F1A\u53D8\u6210ready,\u4F1A\u4E0B\u8F7D\u4E00\u4E9B\u521D\u59CB\u5316\u955C\u50CF)
\u6CE8\u610F\u4E8B\u9879
\u521A\u52A0\u5165Worker Node1\u548CWorker Node2\u65F6\u4F7F\u7528kubectl get nodes\u67E5\u770B\u53EF\u80FD\u4F1A\u51FA\u73B0Worker Node NotReady\u72B6\u6001\uFF0C\u7B49
\u5F85\u5927\u6982\u4E09\u5206\u949F\u5DE6\u53F3\u518D\u4F7F\u7528kubectl get nodes\u5C31\u53EF\u4EE5\u770B\u5230\u6240\u6709\u8282\u70B9\u72B6\u6001\u90FD\u5DF2\u7ECF\u5C31\u7EEA\u4E86
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl get nodes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>[root@binary-k8s-master1 ~]# kubectl get nodes
NAME                  STATUS   ROLES    AGE   VERSION
binary-k8s-master1    Ready    &lt;none&gt;   79s   v1.20.0
binary-k8s-worker1    Ready    &lt;none&gt;   26m   v1.20.0
binary-k8s-worker2    Ready    &lt;none&gt;   26m   v1.20.0

\u8865\u5145\u547D\u4EE4
\u5220\u9664\u591A\u4F59\u7684csr
kubectl delete csr node-csr-Rd_0WEaOFSkRT7geRKfz__I1v6E-CQfJpYwMTDEK-mw
</code></pre><h3 id="_8-14-7-\u5728master1\u4E0A\u90E8\u7F72kubernetes-dashboard" tabindex="-1"><a class="header-anchor" href="#_8-14-7-\u5728master1\u4E0A\u90E8\u7F72kubernetes-dashboard" aria-hidden="true">#</a> 8.14.7.\u5728Master1\u4E0A\u90E8\u7F72kubernetes-dashboard</h3><pre><code>\u5207\u6362\u76EE\u5F55\u5E76\u5728\u8BE5\u76EE\u5F55\u4E2D\u4E0B\u8F7Dkubernetes-dashboard\u5B89\u88C5\u6240\u9700\u8981\u7684yaml\u6587\u4EF6	
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd /opt/k8s/package &amp;&amp;
wget https://raw.githubusercontent.com/kubernetes/dashboard/v2.4.0/aio/deploy/recommended.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u4FEE\u6539\u914D\u7F6E
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vim recommended.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u7ED9\u540D\u79F0\u4E3Akubernetes-dashboard\u7684Service\u4E2D\u6DFB\u52A0type: NodePort\u53C2\u6570\uFF0C\u5927\u6982\u5728245\u884C\u5DE6\u53F3
kind: Service
name: kubernetes-dashboard
spec:
  type: NodePort
  
\u5B89\u88C5kubernetes-dashboard
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl apply -f recommended.yaml	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u67E5\u770B\u90E8\u7F72\u60C5\u51B5
\u6CE8\u610F\u4E8B\u9879\uFF0C\u7B49\u5F85\u5927\u7EA62\u5206\u949F\u4F7F\u7528kubectl get pods,svc -n kubernetes-dashboard\u624D\u80FD\u770B\u5230\u6240\u6709pods,svc\u72B6\u6001\u6B63\u5E38
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl get pods,svc -n kubernetes-dashboard
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>[root@binary-k8s-master1 package]# kubectl get pods,svc -n kubernetes-dashboard
NAME                                             READY   STATUS    RESTARTS   AGE
pod/dashboard-metrics-scraper-5b8896d7fc-jj8vp   1/1     Running   0          60m
pod/kubernetes-dashboard-897c7599f-pdk9g         1/1     Running   0          60m

NAME                                TYPE        CLUSTER-IP  	 PORT(S)         AGE
service/dashboard-metrics-scraper   ClusterIP   10.0.0.254       8000/TCP        60m
service/kubernetes-dashboard        NodePort    10.0.0.173       443:30441/TCP   60m

\u521B\u5EFAdashboard-admin\u4F7F\u7528\u7684service account\u5E76\u7ED1\u5B9A\u9ED8\u8BA4cluster-admin\u7BA1\u7406\u5458\u96C6\u7FA4\u89D2\u8272
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl create serviceaccount dashboard-admin -n kube-system
kubectl create clusterrolebinding dashboard-admin \\
	--clusterrole=cluster-admin --serviceaccount=kube-system:dashboard-admin
kubectl describe secrets -n kube-system \\
$(kubectl -n kube-system get secret | awk &#39;/dashboard-admin/{print $1}&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u67E5\u8BE2token
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl describe secrets -n kube-system \\
$(kubectl -n kube-system get secret | awk &#39;/dashboard-admin/{print $1}&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u8BBF\u95EEkubernetes-dashboard,\u8F93\u5165\u521A\u624D\u83B7\u5F97\u7684token\u767B\u5F55kubernetes-dashboard
https://192.168.0.9:30441/
https://192.168.0.10:30441/
https://192.168.0.11:30441/
</code></pre><h3 id="_8-14-8-\u5728master1\u4E0A\u90E8\u7F72coredns" tabindex="-1"><a class="header-anchor" href="#_8-14-8-\u5728master1\u4E0A\u90E8\u7F72coredns" aria-hidden="true">#</a> 8.14.8.\u5728Master1\u4E0A\u90E8\u7F72CoreDNS</h3><pre><code>\u4ECB\u7ECD
CoreDNS\u4E3B\u8981\u7528\u4E8E\u96C6\u7FA4\u5185\u90E8Service\u540D\u79F0\u89E3\u6790\u3002

\u4ECEkubernetes\u6E90\u7801\u5305\u4E2D\u83B7\u53D6coredns.yaml
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd /opt/k8s/package/kubernetes &amp;&amp; 
mkdir  kubernetes-src &amp;&amp;
tar fx kubernetes-src.tar.gz -C ./kubernetes-src &amp;&amp;
cd kubernetes-src/cluster/addons/dns/coredns/ &amp;&amp;
cp coredns.yaml.base coredns.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u4FEE\u6539coredns.yaml\u914D\u7F6E
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>CLUSTER_DNS_DOMAIN=&quot;cluster.local&quot;
CLUSTER_DNS_SVC_IP=&quot;10.0.0.2&quot;
CLUSTER_DNS_LIMIT_MEMORY=&quot;170Mi&quot;

sed -i -e &quot;s@__DNS__DOMAIN__@\${CLUSTER_DNS_DOMAIN}@&quot; \\
		-e &quot;s@__DNS__SERVER__@\${CLUSTER_DNS_SVC_IP}@&quot; \\
		-e &quot;s@__DNS__MEMORY__LIMIT__@\${CLUSTER_DNS_LIMIT_MEMORY}@&quot; \\
		coredns.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u6CE8\u610F\uFF1ACLUSTER_DNS_DOMAIN\u548CCLUSTER_DNS_SVC_IP\u7684\u503C\u8981\u548C\u5728node\u8282\u70B9\u7684kubelet-config.yaml/kubelet-
config.yal\u4E2DclusterDNS\u548CclusterDomain\u7684\u503C\u4FDD\u6301\u4E00\u81F4

\u4FEE\u6539coredns.yaml\u4E2Dcoredns\u955C\u50CF\u4ED3\u5E93\u5730\u5740
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vim coredns.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u5C06135\u884Ck8s.gcr.io/coredns:1.6.7\u4FEE\u6539\u4E3Aregistry.aliyuncs.com/google_containers/coredns:v1.8.6

\u521B\u5EFAcoredns\u4F7F\u7528\u7684service account\u5E76\u7ED1\u5B9A\u9ED8\u8BA4cluster-admin\u7BA1\u7406\u5458\u96C6\u7FA4\u89D2\u8272
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl create serviceaccount coredns -n kube-system
kubectl create clusterrolebinding coredns \\
	--clusterrole=cluster-admin --serviceaccount=kube-system:coredns
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u90E8\u7F72coredns
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl apply -f coredns.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u67E5\u770Bcoredns\u7684pod\u662F\u5426\u6B63\u5E38
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl get pods -n kube-system
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>[root@k8s-master1 yaml]# kubectl get pods -n kube-system
NAME                                      READY   STATUS    RESTARTS   AGE
calico-kube-controllers-97769f7c7-zcz5d   1/1     Running   1          47h
calico-node-5tnll                         1/1     Running   1          47h
calico-node-m8sdg                         1/1     Running   0          42m
calico-node-pqvk9                         1/1     Running   0          56m
coredns-6cc56c94bd-5hvfb                  1/1     Running   0          37s

\u542F\u52A8\u6545\u969C\u6392\u67E5
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl logs PODNAME -n kube-system
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u7ED9coredns\u589E\u52A0\u526F\u672C\uFF0C\u589E\u5F3A\u9AD8\u53EF\u7528\u6027\uFF08\u4E5F\u53EF\u4EE5\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\uFF09
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl scale deployment coredns --replicas=2 -n kube-system
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u521B\u5EFA kubernetes\u7528\u6237
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl create clusterrolebinding kube-apiserver:kubelet-apis \\
--clusterrole=system:kubelet-api-admin --user kubernetes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u4F7F\u7528busybox\u6D4B\u8BD5\u89E3\u6790\u662F\u5426\u6B63\u5E38

\u90E8\u7F72busybox
\u7F16\u5199busybox\u7F16\u6392\u6587\u4EF6
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; busybox.yaml &lt;&lt; EOF
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
      - &quot;3600&quot;
    imagePullPolicy: IfNotPresent
  restartPolicy: Always
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u521B\u5EFAbusybox
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl create -f busybox.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u8FDB\u5165busybox\u4E2D
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl exec -it busybox -- sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u4F7F\u7528busybox\u6D4B\u8BD5coredns\u662F\u5426\u90E8\u7F72\u6210\u529F
If you don&#39;t see a command prompt, try pressing enter.
/ # ns
nsenter   nslookup
/ # nslookup kubernetes
Server:    10.0.0.2
Address 1: 10.0.0.2 kube-dns.kube-system.svc.cluster.local

\u67E5\u770Bcoredns\u4E00\u5171\u90E8\u7F72\u4E86\u51E0\u4E2A\u526F\u672C
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl get deployments -n kube-system
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>[root@binary-k8s-master2 ~]# kubectl get deployments -n kube-system
NAME                      READY   UP-TO-DATE   AVAILABLE   AGE
calico-kube-controllers   1/1     1            1           168m
coredns                   2/2     2            2           147m
</code></pre><h2 id="_8-15-\u589E\u52A0master2\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#_8-15-\u589E\u52A0master2\u8282\u70B9" aria-hidden="true">#</a> 8.15.\u589E\u52A0Master2\u8282\u70B9</h2><div class="custom-container danger"><p class="custom-container-title">\u7279\u522B\u7279\u522B\u6CE8\u610F</p><p>\u4E00\u5B9A\u8981\u5148\u6267\u884C\u6700\u5F00\u59CB\u76848.1\u7AE0\u8282\u516C\u5171\u6B65\u9AA4\uFF0C\u5982\u5173\u95ED\u9632\u706B\u5899\u7B49\u64CD\u4F5C\uFF0C\u5426\u5219\u662F\u6210\u529F\u6DFB\u52A0Master2\u8282\u70B9\u7684</p></div><h3 id="_8-15-1-kubernetes\u96C6\u7FA4\u67B6\u6784\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_8-15-1-kubernetes\u96C6\u7FA4\u67B6\u6784\u7B80\u4ECB" aria-hidden="true">#</a> 8.15.1.Kubernetes\u96C6\u7FA4\u67B6\u6784\u7B80\u4ECB</h3><pre><code>Kubernetes\u4F5C\u4E3A\u5BB9\u5668\u96C6\u7FA4\u7CFB\u7EDF\uFF0C\u901A\u8FC7\u5065\u5EB7\u68C0\u67E5+\u91CD\u542F\u7B56\u7565\u5B9E\u73B0\u4E86Pod\u6545\u969C\u81EA\u6211\u4FEE\u590D\u80FD\u529B\uFF0C\u901A\u8FC7\u8C03\u5EA6\u7B97\u6CD5
\u5B9E\u73B0\u5C06Pod\u5206\u5E03\u5F0F\u90E8\u7F72\uFF0C\u5E76\u4FDD\u6301\u9884\u671F\u526F\u672C\u6570\uFF0C\u6839\u636ENode\u5931\u6548\u72B6\u6001\u81EA\u52A8\u5728\u5176\u4ED6Node\u62C9\u8D77Pod\uFF0C\u5B9E\u73B0\u4E86\u5E94\u7528
\u5C42\u7684\u9AD8\u53EF\u7528\u6027\u3002\u9488\u5BF9Kubernetes\u96C6\u7FA4\uFF0C\u9AD8\u53EF\u7528\u6027\u8FD8\u5E94\u5305\u542B\u4EE5\u4E0B\u4E24\u4E2A\u5C42\u9762\u7684\u8003\u8651\uFF1AEtcd\u6570\u636E\u5E93\u7684\u9AD8\u53EF\u7528
\u6027\u548CKubernetes Master\u7EC4\u4EF6\u7684\u9AD8\u53EF\u7528\u6027\u3002 \u800CEtcd\u6211\u4EEC\u5DF2\u7ECF\u91C7\u75283\u4E2A\u8282\u70B9\u7EC4\u5EFA\u96C6\u7FA4\u5B9E\u73B0\u9AD8\u53EF\u7528\uFF0C\u672C
\u8282\u5C06\u5BF9Master\u8282\u70B9\u9AD8\u53EF\u7528\u8FDB\u884C\u8BF4\u660E\u548C\u5B9E\u65BD\u3002Master\u8282\u70B9\u626E\u6F14\u7740\u603B\u63A7\u4E2D\u5FC3\u7684\u89D2\u8272\uFF0C\u901A\u8FC7\u4E0D\u65AD\u4E0E\u5DE5\u4F5C\u8282\u70B9
\u4E0A\u7684Kubelet\u548Ckube-proxy\u8FDB\u884C\u901A\u4FE1\u6765\u7EF4\u62A4\u6574\u4E2A\u96C6\u7FA4\u7684\u5065\u5EB7\u5DE5\u4F5C\u72B6\u6001\u3002\u5982\u679CMaster\u8282\u70B9\u6545\u969C\uFF0C\u5C06\u65E0
\u6CD5\u4F7F\u7528kubectl\u5DE5\u5177\u6216\u8005API\u505A\u4EFB\u4F55\u96C6\u7FA4\u7BA1\u7406\u3002Master\u8282\u70B9\u6709\u4E09\u4E2A\u989D\u5916\u7684\u7EC4\u4EF6\uFF0C\u8FD9\u4E2A\u4E09\u4E2A\u7EC4\u4EF6\u5DE5\u4F5C\u8282
\u70B9kubeapiserver\u3001kube-controller-manager\u548Ckube-scheduler\uFF0C\u5176\u4E2Dkube-controller-
manager\u548Ckube-scheduler\u7EC4\u4EF6\u81EA\u8EAB\u901A\u8FC7\u9009\u62E9\u673A\u5236\u5DF2\u7ECF\u5B9E\u73B0\u4E86\u9AD8\u53EF\u7528\uFF0C\u6240\u4EE5Master\u9AD8\u53EF\u7528\u4E3B\u8981\u9488\u5BF9
kube-apiserver\u7EC4\u4EF6\uFF0C\u800C\u8BE5\u7EC4\u4EF6\u662F\u4EE5HTTP API\u63D0\u4F9B\u670D\u52A1\uFF0C\u56E0\u6B64\u5BF9\u4ED6\u9AD8\u53EF\u7528\u4E0EWeb\u670D\u52A1\u5668\u7C7B\u4F3C\uFF0C\u589E\u52A0
\u8D1F\u8F7D\u5747\u8861\u5668\u5BF9\u5176\u8D1F\u8F7D\u5747\u8861\u5373\u53EF\uFF0C\u5E76\u4E14\u53EF\u6C34\u5E73\u6269\u5BB9\u3002	

\u591A\u4E3B\u591A\u4ECE\u67B6\u6784\u67B6\u6784\u670D\u52A1\u5668\u89C4\u5212	
</code></pre><table><thead><tr><th style="text-align:left;">\u89D2\u8272</th><th style="text-align:left;">IP</th><th style="text-align:center;">\u7EC4\u4EF6</th></tr></thead><tbody><tr><td style="text-align:left;">binary-k8s-master1</td><td style="text-align:left;">192.168.0.9</td><td style="text-align:center;">etcd <br> docker <br> kube-apiserver kube-controller-manager kube-scheduler <br> kubelet kube-proxy <br> nginx keepalived</td></tr><tr><td style="text-align:left;">binary-k8s-master2</td><td style="text-align:left;">192.168.0.12</td><td style="text-align:center;">etcd <br> docker <br> kube-apiserver kube-controller-manager kube-scheduler <br> kubelet kube-proxy <br> nginx keepalived</td></tr><tr><td style="text-align:left;">binary-k8s-worker1</td><td style="text-align:left;">192.168.0.10</td><td style="text-align:center;">etcd <br> docker <br> kubelet kube-proxy</td></tr><tr><td style="text-align:left;">binary-k8s-worker2</td><td style="text-align:left;">192.168.0.11</td><td style="text-align:center;">etcd <br> docker <br> kubelet kube-proxy</td></tr><tr><td style="text-align:left;">\u8D1F\u8F7D\u5747\u8861\u5668(\u865A\u62DFIP)</td><td style="text-align:left;">192.168.0.88</td><td style="text-align:center;"></td></tr></tbody></table><div class="custom-container tip"><p class="custom-container-title">\u7279\u522B\u8BF4\u660E</p><p>\u73B0\u5728\u9700\u8981\u518D\u589E\u52A0\u4E00\u53F0\u65B0\u670D\u52A1\u5668\uFF0C\u4F5C\u4E3AMaster2 Node\uFF0CIP\u662F192.168.0.12\u3002Master Node2 \u4E0E\u5DF2\u90E8\u7F72\u7684 Master Node1\u6240\u6709\u64CD\u4F5C\u4E00\u81F4\u3002\u6240\u4EE5\u6211\u4EEC\u53EA\u9700\u5C06Master1\u6240\u6709K8s\u6587\u4EF6\u62F7\u8D1D\u8FC7\u6765\uFF0C\u518D\u4FEE\u6539\u4E0B\u670D\u52A1\u5668IP\u548C\u4E3B\u673A\u540D \u542F\u52A8\u5373\u53EF\u3002</p></div><h3 id="_8-15-2-\u7ED9master-node2\u5B89\u88C5docker" tabindex="-1"><a class="header-anchor" href="#_8-15-2-\u7ED9master-node2\u5B89\u88C5docker" aria-hidden="true">#</a> 8.15.2.\u7ED9Master Node2\u5B89\u88C5Docker</h3><pre><code>\u8FDB\u5165Master Node1\uFF0C\u5C06docker\u5B89\u88C5\u6587\u4EF6\u62F7\u8D1D\u5230Master Node2
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>scp /usr/bin/docker* root@192.168.0.12:/usr/bin &amp;&amp;
scp /usr/bin/runc root@192.168.0.12:/usr/bin &amp;&amp;
scp /usr/bin/containerd* root@192.168.0.12:/usr/bin &amp;&amp;
scp /usr/lib/systemd/system/docker.service \\
root@192.168.0.12:/usr/lib/systemd/system &amp;&amp;
scp -r /etc/docker root@192.168.0.12:/etc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u542F\u52A8Mater Node2\u4E0A\u7684Docker\u5E76\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl daemon-reload &amp;&amp; systemctl start docker &amp;&amp; systemctl enable docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u67E5\u770B\u542F\u52A8\u72B6\u6001
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>	systemctl status docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_8-15-5-\u7ED9master-node2\u8282\u70B9\u62F7\u8D1D\u6240\u6709\u9700\u8981\u7684\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#_8-15-5-\u7ED9master-node2\u8282\u70B9\u62F7\u8D1D\u6240\u6709\u9700\u8981\u7684\u8BC1\u4E66" aria-hidden="true">#</a> 8.15.5.\u7ED9Master Node2\u8282\u70B9\u62F7\u8D1D\u6240\u6709\u9700\u8981\u7684\u8BC1\u4E66</h3><pre><code>\u5728Master Node2\u4E0A\u521B\u5EFAetcd\u8BC1\u4E66\u76EE\u5F55
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir -p /opt/etcd/ssl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u5728Master1\u4E0A\u62F7\u8D1DMaster1\u4E0A\u6240\u6709k8s\u6587\u4EF6\u548Cetcd\u8BC1\u4E66\u5230Master2
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>scp -r /opt/kubernetes root@192.168.0.12:/opt &amp;&amp;
scp -r /opt/etcd/ssl root@192.168.0.12:/opt/etcd &amp;&amp;
scp /usr/lib/systemd/system/kube* \\
root@192.168.0.12:/usr/lib/systemd/system &amp;&amp;
scp /usr/bin/kubectl  root@192.168.0.12:/usr/bin &amp;&amp;
scp -r ~/.kube root@192.168.0.12:~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u5728Master Node2\u4E0A\u5220\u9664\u65E7\u7684\u8BC1\u4E66\uFF08\u5220\u9664kubelet\u548Ckubeconfig\u6587\u4EF6\uFF09
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>rm -f /opt/kubernetes/cfg/kubelet.kubeconfig &amp;&amp;
rm -f /opt/kubernetes/ssl/kubelet*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u4FEE\u6539Master2\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\u548C\u4E3B\u673A\u540D
\u4FEE\u6539apiserver\u3001kubelet\u548Ckube-proxy\u914D\u7F6E\u6587\u4EF6\u4E3A\u672C\u5730IP
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vi /opt/kubernetes/cfg/kube-apiserver.conf 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>...
--bind-address=192.168.0.12 \\
--advertise-address=192.168.0.12 \\
...

\u4FEE\u6539kube-controller-manager\u914D\u7F6E\u6587\u4EF6
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vi /opt/kubernetes/cfg/kube-controller-manager.kubeconfig
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>server: https://192.168.0.12:6443

\u4FEE\u6539kube-scheduler\u914D\u7F6E\u6587\u4EF6
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vi /opt/kubernetes/cfg/kube-scheduler.kubeconfig
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>server: https://192.168.0.12:6443
\u4FEE\u6539kubelet\u914D\u7F6E\u6587\u4EF6
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vi /opt/kubernetes/cfg/kubelet.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>--hostname-override=binary-k8s-master2

\u4FEE\u6539kube-proxy\u914D\u7F6E\u6587\u4EF6
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vi /opt/kubernetes/cfg/kube-proxy-config.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>hostnameOverride: binary-k8s-master2
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vi ~/.kube/config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>...
server: https://192.168.0.12:6443
</code></pre><h3 id="_8-15-6-\u542F\u52A8master\u6240\u6709\u670D\u52A1\u5E76\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F" tabindex="-1"><a class="header-anchor" href="#_8-15-6-\u542F\u52A8master\u6240\u6709\u670D\u52A1\u5E76\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F" aria-hidden="true">#</a> 8.15.6.\u542F\u52A8Master\u6240\u6709\u670D\u52A1\u5E76\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl daemon-reload &amp;&amp;
systemctl start kube-apiserver &amp;&amp;
systemctl start kube-controller-manager &amp;&amp;
systemctl start kube-scheduler &amp;&amp;
systemctl start kubelet kube-proxy &amp;&amp;
systemctl enable kube-apiserver &amp;&amp;
systemctl enable kube-controller-manager &amp;&amp;
systemctl enable kube-scheduler &amp;&amp;
systemctl enable kubelet &amp;&amp;
systemctl enable kube-proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-15-7-\u5728master\u67E5\u770B\u96C6\u7FA4\u7EC4\u4EF6\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#_8-15-7-\u5728master\u67E5\u770B\u96C6\u7FA4\u7EC4\u4EF6\u72B6\u6001" aria-hidden="true">#</a> 8.15.7.\u5728Master\u67E5\u770B\u96C6\u7FA4\u7EC4\u4EF6\u72B6\u6001</h3><pre><code>\u6CE8\u610F\uFF1A\u5982\u679C\u4E0A\u9762\u64CD\u4F5C\u65E0\u8BEF\u5219\u8FD9\u4E00\u6B65\u5C31\u53EF\u4EE5\u67E5\u770B\u5230\u96C6\u7FA4\u4E2D\u7EC4\u4EF6\u7684\u8FD0\u884C\u72B6\u6001\u4E86

\u67E5\u770B\u7EC4\u4EF6\u72B6\u6001
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl get cs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>[root@localhost ~]# kubectl get cs
Warning: v1 ComponentStatus is deprecated in v1.19+
NAME                 STATUS    MESSAGE             ERROR
controller-manager   Healthy   ok 
scheduler            Healthy   ok   
etcd-2               Healthy   {&quot;health&quot;:&quot;true&quot;}
etcd-1               Healthy   {&quot;health&quot;:&quot;true&quot;}
etcd-0               Healthy   {&quot;health&quot;:&quot;true&quot;}
</code></pre><h3 id="_8-15-8-\u5BA1\u6279\u6240\u6709worker-node\u4E0A\u7684kubelet\u8BC1\u4E66\u7533\u8BF7" tabindex="-1"><a class="header-anchor" href="#_8-15-8-\u5BA1\u6279\u6240\u6709worker-node\u4E0A\u7684kubelet\u8BC1\u4E66\u7533\u8BF7" aria-hidden="true">#</a> 8.15.8.\u5BA1\u6279\u6240\u6709Worker Node\u4E0A\u7684kubelet\u8BC1\u4E66\u7533\u8BF7</h3><pre><code>\u67E5\u770B\u8BC1\u4E66\u7533\u8BF7
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl get csr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>[root@localhost ~]# kubectl get csr
NAME                                                   ... CONDITION ...
node-csr-Pkp1fPd9NZApJVRqRFlIIjskZ_gL_qDmcSWGvSuN-VQ   ... Pending	 ...

\u540C\u610F\u8BC1\u4E66\u7533\u8BF7
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl certificate approve node-csr-Pkp1fPd9NZApJVRqRFlIIjskZ_gL_qDmcSWGvSuN-VQ
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u518D\u6B21\u67E5\u770B\u8BC1\u4E66\u7533\u8BF7
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl get csr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>[root@localhost ~]# kubectl get csr
NAME                                                  ... CONDITION 	  ...
node-csr-Pkp1fPd9NZApJVRqRFlIIjskZ_gL_qDmcSWGvSuN-VQ  ... Approved,Issued ...	

\u67E5\u770B\u8282\u70B9\u52A0\u5165\u72B6\u6001\u6CA1\u7B49\u5230\u6240\u6709pods\u72B6\u6001\u90FD\u5DF2\u7ECF\u53D8\u4E3ARunning\uFF0C\u6267\u884C\u4E0B\u4E00\u6B65\u64CD\u4F5C
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl get pods -n kube-system
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>[root@binary-k8s-master1 ~]# kubectl get pods -n kube-system
NAME                                      READY   STATUS     RESTARTS   AGE
calico-kube-controllers-bcc6f659f-7mf9n   1/1     Running    1          141m
calico-node-768sf                         1/1     Running    0          97m
calico-node-crhh4                         0/1     Init:2/3   0          2m7s
calico-node-hwbm9                         1/1     Running    0          98m
calico-node-vl4db                         1/1     Running    1          141m
coredns-7c878fc47b-n9nfd                  1/1     Running    0          75m
coredns-7c878fc47b-sxvz2                  1/1     Running    0          76m

\u67E5\u770BNode
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl get nodes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>binary-k8s-master1   Ready    &lt;none&gt;   153m   v1.20.0
binary-k8s-master2   Ready    &lt;none&gt;   17m    v1.20.0
binary-k8s-worker1   Ready    &lt;none&gt;   142m   v1.20.0
binary-k8s-worker2   Ready    &lt;none&gt;   141m   v1.20.0

\u81F3\u6B64\u4E00\u4E2A\u53CCMaster\u8282\u70B9k8s\u96C6\u7FA4\u5DF2\u7ECF\u90E8\u7F72\u5B8C\u6BD5\uFF0C\u518D\u6DFB\u52A0\u65B0\u7684Master\u8282\u70B9\u6B65\u9AA4\u548C\u4E0A\u9762\u7684\u662F\u76F8\u540C\u7684
</code></pre><h2 id="_8-16-\u90E8\u7F72nginx-keepalived\u9AD8\u53EF\u7528\u8D1F\u8F7D\u5747\u8861\u5668" tabindex="-1"><a class="header-anchor" href="#_8-16-\u90E8\u7F72nginx-keepalived\u9AD8\u53EF\u7528\u8D1F\u8F7D\u5747\u8861\u5668" aria-hidden="true">#</a> 8.16.\u90E8\u7F72Nginx+Keepalived\u9AD8\u53EF\u7528\u8D1F\u8F7D\u5747\u8861\u5668</h2><h3 id="_8-16-1-nginx\u548Ckeepalived\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_8-16-1-nginx\u548Ckeepalived\u7B80\u4ECB" aria-hidden="true">#</a> 8.16.1.Nginx\u548CKeepalived\u7B80\u4ECB</h3><pre><code>Nginx\u662F\u4E00\u4E2A\u4E3B\u6D41Web\u670D\u52A1\u548C\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u8FD9\u91CC\u7528\u56DB\u5C42\u5B9E\u73B0\u5BF9apiserver\u5B9E\u73B0\u8D1F\u8F7D\u5747\u8861\u3002Keepalived\u662F\u4E00\u4E2A\u4E3B\u6D41\u9AD8\u53EF
\u7528\u8F6F\u4EF6\uFF0C\u57FA\u4E8EVIP\u7ED1\u5B9A\u5B9E\u73B0\u670D\u52A1\u5668\u53CC\u673A\u70ED\u5907\uFF0C\u5728\u4E0A\u8FF0\u62D3\u6251\u4E2D\uFF0CKeepalived\u4E3B\u8981\u6839\u636ENginx\u8FD0\u884C\u72B6\u6001\u5224\u65AD\u662F\u5426\u9700\u8981\u6545\u969C\u8F6C\u79FB
\uFF08\u6F02\u79FBVIP\uFF09\uFF0C\u4F8B\u5982\u5F53Nginx\u4E3B\u8282\u70B9\u6302\u6389\uFF0CVIP\u4F1A\u81EA\u52A8\u7ED1\u5B9A\u5728Nginx\u5907\u8282\u70B9\uFF0C\u4ECE\u800C\u4FDD\u8BC1VIP\u4E00\u76F4\u53EF\u7528\uFF0C\u5B9E\u73B0Nginx\u9AD8\u53EF\u7528\u3002
\u5982\u679C\u4F60\u662F\u5728\u516C\u6709\u4E91\u4E0A\uFF0C\u4E00\u822C\u90FD\u4E0D\u652F\u6301keepalived\uFF0C\u90A3\u4E48\u4F60\u53EF\u4EE5\u76F4\u63A5\u7528\u5B83\u4EEC\u7684\u8D1F\u8F7D\u5747\u8861\u5668\u4EA7\u54C1\uFF0C\u76F4\u63A5\u8D1F\u8F7D\u5747\u8861\u591A\u53F0Master 
kube-apiserver\uFF0C\u67B6\u6784\u4E0E\u4E0A\u9762\u4E00\u6837\u3002
</code></pre><h3 id="_8-16-2-\u5728\u4E24\u53F0master-node\u4E0A\u5B89\u88C5\u8F6F\u4EF6" tabindex="-1"><a class="header-anchor" href="#_8-16-2-\u5728\u4E24\u53F0master-node\u4E0A\u5B89\u88C5\u8F6F\u4EF6" aria-hidden="true">#</a> 8.16.2.\u5728\u4E24\u53F0Master Node\u4E0A\u5B89\u88C5\u8F6F\u4EF6</h3><pre><code>\u4E0B\u8F7Dnginx\u548Ckeepalived
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum install epel-release -y &amp;&amp;
yum install nginx keepalived -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>Nginx\u914D\u7F6E\u6587\u4EF6\uFF08Master Node1\u548CMaster Node2\u76F8\u540C\uFF09
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; /etc/nginx/nginx.conf &lt;&lt; &quot;EOF&quot;
user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log;
pid /run/nginx.pid;

include /usr/share/nginx/modules/*.conf;

events {
    worker_connections 1024;
}

stream {

    log_format main &#39;$remote_addr $upstream_addr - [$time_local] $status $upstream_bytes_sent&#39;;

    access_log  /var/log/nginx/k8s-access.log  main;

    upstream k8s-apiserver {
       server 192.168.0.9:6443;   # Master1 APISERVER IP:PORT
       server 192.168.0.12:6443;   # Master2 APISERVER IP:PORT
    }
    
    server {
       listen 16443; # \u7531\u4E8Enginx\u4E0Emaster\u8282\u70B9\u590D\u7528\uFF0C\u8FD9\u4E2A\u76D1\u542C\u7AEF\u53E3\u4E0D\u80FD\u662F6443\uFF0C\u5426\u5219\u4F1A\u51B2\u7A81
       proxy_pass k8s-apiserver;
    }
}

http {
    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>Master Node1\u4E0A\u7684keepalived\u914D\u7F6E\u6587\u4EF6
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; /etc/keepalived/keepalived.conf &lt;&lt; EOF
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
    script &quot;/etc/keepalived/check_nginx.sh&quot;
}

vrrp_instance VI_1 { 
    state MASTER 
    interface ens33  # \u4FEE\u6539\u4E3A\u5B9E\u9645\u7F51\u5361\u540D
    virtual_router_id 51 # VRRP \u8DEF\u7531 ID\u5B9E\u4F8B\uFF0C\u6BCF\u4E2A\u5B9E\u4F8B\u662F\u552F\u4E00\u7684 
    priority 100    # \u4F18\u5148\u7EA7\uFF0C\u5907\u670D\u52A1\u5668\u8BBE\u7F6E 90 
    advert_int 1    # \u6307\u5B9AVRRP \u5FC3\u8DF3\u5305\u901A\u544A\u95F4\u9694\u65F6\u95F4\uFF0C\u9ED8\u8BA41\u79D2 
    authentication { 
        auth_type PASS      
        auth_pass 1111 
    }  
    # \u865A\u62DFIP
    virtual_ipaddress { 
        192.168.0.88/24
    } 
    track_script {
        check_nginx
    } 
}
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B \u200B Master Node2\u7684keepalived\u914D\u7F6E\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; /etc/keepalived/keepalived.conf &lt;&lt; EOF
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
    script &quot;/etc/keepalived/check_nginx.sh&quot;
}

vrrp_instance VI_1 { 
    state BACKUP 
    interface ens33
    virtual_router_id 51 # VRRP \u8DEF\u7531 ID\u5B9E\u4F8B\uFF0C\u6BCF\u4E2A\u5B9E\u4F8B\u662F\u552F\u4E00\u7684 
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u914D\u7F6E\u8BF4\u660E
\u200Bvrrp_script\uFF1A\u6307\u5B9A\u68C0\u67E5nginx\u5DE5\u4F5C\u72B6\u6001\u811A\u672C\uFF08\u6839\u636Enginx\u72B6\u6001\u5224\u65AD\u662F\u5426\u6545\u969C\u8F6C\u79FB\uFF09
\u200Bvirtual_ipaddress\uFF1A\u865A\u62DFIP\uFF08VIP\uFF09
\u200B
\u200B\u51C6\u5907\u4E0A\u8FF0\u914D\u7F6E\u6587\u4EF6\u4E2D\u68C0\u67E5nginx\u8FD0\u884C\u72B6\u6001\u7684\u811A\u672C\uFF08Master Node1\u548CMaster Node2\u76F8\u540C\uFF09
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; /etc/keepalived/check_nginx.sh  &lt;&lt; &quot;EOF&quot;
#!/bin/bash
count=$(ss -antp |grep 16443 |egrep -cv &quot;grep|$$&quot;)

if [ &quot;$count&quot; -eq 0 ];then
    exit 1
else
    exit 0
fi
EOF

chmod +x /etc/keepalived/check_nginx.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B \u914D\u7F6E\u8BF4\u660E \u200B keepalived\u6839\u636E\u811A\u672C\u8FD4\u56DE\u72B6\u6001\u7801\uFF080\u4E3A\u5DE5\u4F5C\u6B63\u5E38\uFF0C\u975E0\u4E0D\u6B63\u5E38\uFF09\u5224\u65AD\u662F\u5426\u6545\u969C\u8F6C\u79FB\u3002</p><h3 id="_8-16-3-nginx\u589E\u52A0steam\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#_8-16-3-nginx\u589E\u52A0steam\u6A21\u5757" aria-hidden="true">#</a> 8.16.3.Nginx\u589E\u52A0Steam\u6A21\u5757</h3><h4 id="_8-16-3-1-\u67E5\u770Bnginx\u7248\u672C\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#_8-16-3-1-\u67E5\u770Bnginx\u7248\u672C\u6A21\u5757" aria-hidden="true">#</a> 8.16.3.1.\u67E5\u770BNginx\u7248\u672C\u6A21\u5757</h4><pre><code>nginx -V
\u6CE8\u610F\uFF1A\u5982\u679C\u5DF2\u7ECF\u5B89\u88C5 --with-stream\u6A21\u5757,\u540E\u9762\u7684\u6B65\u9AA4\u53EF\u4EE5\u8DF3\u8FC7
</code></pre><h4 id="_8-16-3-2-master1\u548Cmaster2\u5B89\u88C5stream\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#_8-16-3-2-master1\u548Cmaster2\u5B89\u88C5stream\u6A21\u5757" aria-hidden="true">#</a> 8.16.3.2.Master1\u548CMaster2\u5B89\u88C5Stream\u6A21\u5757</h4><pre><code>\u5907\u4EFDMaster Node1\u548CMaster Node2\u4E0A\u539F\u6765\u7684Nginx\u6587\u4EF6
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mv /usr/sbin/nginx /usr/sbin/nginx.bak &amp;&amp;
cp -r /etc/nginx{,.bak}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u5207\u6362\u76EE\u5F55\u5E76\u5728\u8BE5\u76EE\u5F55\u4E2D\u4E0B\u8F7Dnginx\uFF08\u6CE8\u610F\u8FD9\u91CC\u4E0B\u8F7D\u7684nginx\u7248\u672C\u8981\u548C\u4E4B\u524Dnginx -v\u67E5\u770B\u7684\u7248\u672C\u4FDD\u6301\u4E00\u81F4\uFF0C\u8FD9\u91CC\u6211\u4EEC\u4E4B\u524D\u5DF2\u7ECF\u4E0B\u8F7D
\u597D\u4E86\uFF0C\u5B58\u653E\u5728Master Node1\u4E0A\uFF0C\u76F4\u63A5\u4F7F\u7528\u5C31\u53EF\u4EE5\u4E86\uFF09

\u5728Master Node1\u4E0A\u5207\u6362\u76EE\u5F55
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd /opt/k8s/package/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>Master Node1\u7F16\u8BD1\u73AF\u5883\u51C6\u5907
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum -y install libxml2 libxml2-dev libxslt-devel 
yum -y install gd-devel 
yum -y install perl-devel perl-ExtUtils-Embed 
yum -y install GeoIP GeoIP-devel GeoIP-data
yum -y install pcre-devel
yum -y install openssl openssl-devel
yum -y install gcc make
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u7F16\u8BD1nginx\uFF0C\u52A0\u4E0A\u672C\u6B21\u9700\u65B0\u589E\u7684\u6A21\u5757: --with-stream
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>tar -xf nginx-1.20.1.tar.gz
cd nginx-1.20.1/
./configure --prefix=/usr/share/nginx --sbin-path=/usr/sbin/nginx \\
--modules-path=/usr/lib64/nginx/modules --conf-path=/etc/nginx/nginx.conf  --with-stream
make
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u8BF4\u660E:
make\u5B8C\u6210\u540E\u4E0D\u8981\u7EE7\u7EED\u8F93\u5165\u201Cmake install\u201D\uFF0C\u4EE5\u514D\u73B0\u5728\u7684nginx\u51FA\u73B0\u95EE\u9898
\u4EE5\u4E0A\u5B8C\u6210\u540E\uFF0C\u4F1A\u5728objs\u76EE\u5F55\u4E0B\u751F\u6210\u4E00\u4E2Anginx\u6587\u4EF6\uFF0C\u5148\u9A8C\u8BC1
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>./objs/nginx -t
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>[root@binary-k8s-master1 nginx-1.20.1]# ./objs/nginx -t
nginx: [alert] could not open error log file: open() &quot;/usr/share/nginx/logs/error.log&quot; failed (2: No such file or directory)
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful

\u66FF\u6362nginx\u5230Master1/Master2
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cp ./objs/nginx /usr/sbin/ &amp;&amp;
scp objs/nginx root@192.168.0.12:/usr/sbin/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u4FEE\u6539nginx\u670D\u52A1\u6587\u4EF6\uFF08Master Node1\u548CMaster Node2\uFF09
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>rm -rf /usr/lib/systemd/system/nginx.service &amp;&amp;
cat &gt;&gt; /usr/lib/systemd/system/nginx.service &lt;&lt; EOF
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-16-4-\u542F\u52A8nginx\u3001keepalived\u5E76\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F-master1-master2" tabindex="-1"><a class="header-anchor" href="#_8-16-4-\u542F\u52A8nginx\u3001keepalived\u5E76\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F-master1-master2" aria-hidden="true">#</a> 8.16.4.\u542F\u52A8nginx\u3001keepalived\u5E76\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F(master1/master2)</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl daemon-reload &amp;&amp;
systemctl start nginx keepalived &amp;&amp;
systemctl enable nginx keepalived
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-16-5-\u67E5\u770Bkeepalived\u5DE5\u4F5C\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#_8-16-5-\u67E5\u770Bkeepalived\u5DE5\u4F5C\u72B6\u6001" aria-hidden="true">#</a> 8.16.5.\u67E5\u770Bkeepalived\u5DE5\u4F5C\u72B6\u6001</h3><pre><code>\u67E5\u770BMaster1\u7F51\u5361\u8BE6\u7EC6\u4FE1\u606F
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ip addr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>[root@binary-k8s-master1 ~]# ip addr
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

\u67E5\u770BMaster2\u7F51\u5361\u8BE6\u7EC6\u4FE1\u606F
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ip addr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>[root@binary-k8s-master1 ~]# ip addr
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

\u5982\u4F55\u786E\u5B9A\u662F\u5426\u914D\u7F6E\u6210\u529F
\u53EF\u4EE5\u770B\u5230\uFF0C\u5728Master1\u4E0A\u7684ens33\u7F51\u5361\u7ED1\u5B9A\u4E86192.168.242.55 \u865A\u62DFIP\uFF0C\u8BF4\u660E\u5DE5\u4F5C\u6B63\u5E38\u3002
inet 192.168.242.55/24 scope global ens33\uFF0C\u800CMaster2\u4E0A\u7684ens33\u7F51\u5361\u6CA1\u6709\u7ED1\u5B9A\u865A\u62DFIP
</code></pre><h3 id="_8-16-6-nginx-keepalived\u9AD8\u53EF\u7528\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_8-16-6-nginx-keepalived\u9AD8\u53EF\u7528\u6D4B\u8BD5" aria-hidden="true">#</a> 8.16.6.Nginx+keepalived\u9AD8\u53EF\u7528\u6D4B\u8BD5</h3><pre><code>\u5728\u4E3B\u8282\u70B9Master Node1\u8282\u70B9\u6267\u884C\u5173\u95EDnginx
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>pkill nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u67E5\u770B\u865A\u62DFIP\u662F\u5426\u6F02\u79FB\u5230\u5907\u8282\u70B9\u670D\u52A1\u5668\uFF08Master Node2\uFF09
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ip addr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>[root@binary-k8s-master1 ~]# ip addr
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

\u5982\u4F55\u786E\u5B9A\u865A\u62DFIP\u662F\u5426\u53D1\u751F\u98D8\u79FB
\u53EF\u4EE5\u770B\u5230\uFF0C\u5728Master2\u4E0A\u7684ens33\u7F51\u5361\u7ED1\u5B9A\u4E86192.168.242.55 \u865A\u62DFIP\uFF0C\u8BF4\u660E\u5DE5\u4F5C\u6B63\u5E38\u3002

\u6D4B\u8BD5\u5B8C\u6210\u540E\u91CD\u65B0\u542F\u52A8Master Node1\u4E0A\u7684nginx
systemctl start nginx
</code></pre><h3 id="_8-16-7-\u6D4B\u8BD5\u8D1F\u8F7D\u5747\u8861\u5668" tabindex="-1"><a class="header-anchor" href="#_8-16-7-\u6D4B\u8BD5\u8D1F\u8F7D\u5747\u8861\u5668" aria-hidden="true">#</a> 8.16.7.\u6D4B\u8BD5\u8D1F\u8F7D\u5747\u8861\u5668</h3><pre><code>\u627EK8s\u96C6\u7FA4\u4E2D\u4EFB\u610F\u4E00\u4E2A\u8282\u70B9\uFF0C\u4F7F\u7528curl\u67E5\u770BK8s\u7248\u672C\u6D4B\u8BD5\uFF0C\u4F7F\u7528VIP\u8BBF\u95EE
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>curl -k https://192.168.0.88:16443/version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>Master Node1\u673A\u5668
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

Master Node2\u673A\u5668
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

Worker Node1\u673A\u5668
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

Worker Node2\u673A\u5668
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

\u5982\u4F55\u786E\u5B9A\u8D1F\u8F7D\u5747\u8861\u5668\u662F\u5426\u642D\u5EFA\u6B63\u5E38
\u5982\u679C\u6240\u6709\u8282\u70B9\u53EF\u4EE5\u6B63\u786E\u83B7\u53D6\u5230K8s\u7248\u672C\u4FE1\u606F\uFF0C\u8BF4\u660E\u8D1F\u8F7D\u5747\u8861\u5668\u642D\u5EFA\u6B63\u5E38\u3002
\u8BE5\u8BF7\u6C42\u6570\u636E\u6D41\u7A0B\uFF1Acurl -&gt; vip(nginx) -&gt; apiserver

\u901A\u8FC7\u67E5\u770BNginx\u65E5\u5FD7\u4E5F\u53EF\u4EE5\u770B\u5230\u8F6C\u53D1apiserver IP\uFF1A
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>tailf /var/log/nginx/k8s-access.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>[root@binary-k8s-master1 ~]# tailf /var/log/nginx/k8s-access.log 
192.168.242.55 192.168.0.9:6443 - [26/Jul/2022:01:28:51 -0400] 200 428
192.168.211.128 192.168.0.9:6443 - [26/Jul/2022:01:28:58 -0400] 200 428
192.168.95.192 192.168.0.12:6443 - [26/Jul/2022:01:30:12 -0400] 200 428
192.168.63.192 192.168.0.9:6443 - [26/Jul/2022:01:30:14 -0400] 200 428
192.168.242.55 192.168.0.9:6443 - [26/Jul/2022:01:30:36 -0400] 200 428
192.168.242.55 192.168.0.12:6443 - [26/Jul/2022:01:30:42 -0400] 200 428
</code></pre><h3 id="_8-16-8-\u4FEE\u6539\u6240\u6709\u7684worker-node\u8FDE\u63A5lb-vip" tabindex="-1"><a class="header-anchor" href="#_8-16-8-\u4FEE\u6539\u6240\u6709\u7684worker-node\u8FDE\u63A5lb-vip" aria-hidden="true">#</a> 8.16.8.\u4FEE\u6539\u6240\u6709\u7684Worker Node\u8FDE\u63A5LB VIP</h3><pre><code>\u4E3A\u4EC0\u4E48\u8981\u6539\u4E3A\u8FDE\u63A5LB VIP
\u8BD5\u60F3\u4E0B\uFF0C\u867D\u7136\u6211\u4EEC\u589E\u52A0\u4E86Master2 Node\u548C\u8D1F\u8F7D\u5747\u8861\u5668\uFF0C\u4F46\u662F\u6211\u4EEC\u662F\u4ECE\u5355Master\u67B6\u6784\u6269\u5BB9\u7684\uFF0C\u4E5F\u5C31\u662F
\u8BF4\u76EE\u524D\u6240\u6709\u7684Worker Node\u7EC4\u4EF6\u8FDE\u63A5\u90FD\u8FD8\u662FMaster1 Node\uFF0C\u5982\u679C\u4E0D\u6539\u4E3A\u8FDE\u63A5VIP\u8D70\u8D1F\u8F7D\u5747\u8861\u5668\uFF0C\u90A3\u4E48
Master\u8FD8\u662F\u5355\u70B9\u6545\u969C\u3002\u56E0\u6B64\u63A5\u4E0B\u6765\u5C31\u662F\u8981\u6539\u6240\u6709Worker Node\uFF08kubectl get node\u547D\u4EE4\u67E5\u770B\u5230\u7684\u8282
\u70B9\uFF09\u7EC4\u4EF6\u914D\u7F6E\u6587\u4EF6\uFF0C\u7531\u539F\u6765192.168.0.9\u4FEE\u6539\u4E3A192.168.242.55\uFF08VIP\uFF09\u3002

\u5728\u6240\u6709Worker Node\u6267\u884C
\u6CE8\u610F\u4E8B\u9879
\u8FD9\u91CC\u9664\u4E86Worker Node1\u548CWorker Node2\uFF0CMaster Node1\u548CMaster Node2\u8FD9\u4E24\u4E2A\u8282\u70B9\u4E5F\u5145\u5F53\u4E86Worker Node\uFF0C\u6240\u4EE5\u6240\u6709\u7684\u56DB\u4E2A\u8282\u70B9
\u4E0A\u90FD\u8981\u6267\u884C\u4E0B\u9762\u7684\u547D\u4EE4
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sed -i &#39;s#192.168.0.9:6443#192.168.0.88:16443#&#39; /opt/kubernetes/cfg/* &amp;&amp;
systemctl restart kubelet kube-proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u68C0\u67E5\u8282\u70B9\u72B6\u6001
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl get nodes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>[root@binary-k8s-master1 cfg]# kubectl get nodes
NAME                 STATUS   ROLES    AGE     VERSION
binary-k8s-master1   Ready    &lt;none&gt;   5h13m   v1.20.0
binary-k8s-master2   Ready    &lt;none&gt;   177m    v1.20.0
binary-k8s-worker1    Ready    &lt;none&gt;   5h1m    v1.20.0
binary-k8s-worker2    Ready    &lt;none&gt;   5h1m    v1.20.0

\u4E3A\u4E86\u786E\u4FDD\u914D\u7F6E\u6210\u529F\uFF0C\u91CD\u542F\u96C6\u7FA4\u4E2D\u6240\u6709\u673A\u5668\uFF0C\u518D\u6B21\u5728Master Node1\u548CMaster Node2\u4E2D\u67E5\u770B\u8282\u70B9\u72B6\u6001\uFF0C\u5982\u4E00\u5207\u90E8\u7F72\u65E0\u8BEF\u7ED3\u679C\u5982\u4E0B\u6240\u793A
[root@binary-k8s-master1 cfg]# kubectl get nodes
NAME                 STATUS   ROLES    AGE     VERSION
binary-k8s-master1   Ready    &lt;none&gt;   5h13m   v1.20.0
binary-k8s-master2   Ready    &lt;none&gt;   177m    v1.20.0
binary-k8s-worker1    Ready    &lt;none&gt;   5h1m    v1.20.0
binary-k8s-worker2    Ready    &lt;none&gt;   5h1m    v1.20.0

\u81F3\u6B64,\u4E00\u5957\u9AD8\u53EF\u7528\u7684k8s\u4E8C\u8FDB\u5236\u53EF\u7528\u96C6\u7FA4\u5C31\u90E8\u7F72\u5B8C\u6210\u4E86~
^_^
</code></pre><h2 id="_8-17-\u90E8\u7F72\u5E38\u89C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_8-17-\u90E8\u7F72\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a> 8.17.\u90E8\u7F72\u5E38\u89C1\u95EE\u9898</h2><h3 id="_8-17-1\u7CFB\u7EDF\u65AD\u7535\u540E-\u67D0\u4E2Aetcd\u8282\u70B9\u65E0\u6CD5\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#_8-17-1\u7CFB\u7EDF\u65AD\u7535\u540E-\u67D0\u4E2Aetcd\u8282\u70B9\u65E0\u6CD5\u542F\u52A8" aria-hidden="true">#</a> 8.17.1\u7CFB\u7EDF\u65AD\u7535\u540E,\u67D0\u4E2Aetcd\u8282\u70B9\u65E0\u6CD5\u542F\u52A8</h3><pre><code>\u62A5\u9519\u4FE1\u606F
publish error: etcdserver: request timed out

\u89E3\u51B3\u65B9\u6CD5(\u5982\u679C\u6CA1\u6709\u91CD\u8981\u6570\u636E,\u6216\u8005\u521A\u8FDB\u884C\u5B8C\u521D\u59CB\u5316)
\u68C0\u67E5\u65E5\u5FD7\u53D1\u73B0\u5E76\u6CA1\u6709\u7279\u522B\u660E\u663E\u7684\u9519\u8BEF\uFF0C\u6839\u636E\u7ECF\u9A8C\u6765\u8BB2\uFF0Cetcd \u8282\u70B9\u574F\u6389\u4E00\u4E2A\u5176\u5B9E\u5BF9\u96C6\u7FA4\u6CA1\u6709\u5927\u7684\u5F71\u54CD\uFF0C
\u8FD9\u65F6\u96C6\u7FA4\u5DF2\u7ECF\u53EF\u4EE5\u6B63\u5E38\u4F7F\u7528\u4E86\uFF0C\u4F46\u662F\u8FD9\u4E2A\u574F\u6389\u7684 etcd \u8282\u70B9\u5E76\u6CA1\u6709\u542F\u52A8

#\u8FDB\u5165 etcd \u7684\u6570\u636E\u5B58\u50A8\u76EE\u5F55\u8FDB\u884C\u5907\u4EFD \u5907\u4EFD\u539F\u6709\u6570\u636E\uFF1A
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd /var/lib/etcd/default.etcd/member/ &amp;&amp;
cp * /data/bak/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>#\u5220\u9664\u8FD9\u4E2A\u76EE\u5F55\u4E0B\u7684\u6240\u6709\u6570\u636E\u6587\u4EF6
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>rm -rf /var/lib/etcd/default.etcd/member/*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>#\u505C\u6B62\u53E6\u5916\u4E24\u53F0 etcd \u8282\u70B9\uFF0C\u56E0\u4E3A etcd \u8282\u70B9\u542F\u52A8\u65F6\u9700\u8981\u6240\u6709\u8282\u70B9\u4E00\u8D77\u542F\u52A8\uFF0C\u542F\u52A8\u6210\u529F\u540E\u5373\u53EF\u4F7F\u7528\u3002
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl stop etcd &amp;&amp;
systemctl restart etcd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-17-2-the-connection-to-the-server-localhost-8080-was-refused-did-you-specify-the-right-host-or-port" tabindex="-1"><a class="header-anchor" href="#_8-17-2-the-connection-to-the-server-localhost-8080-was-refused-did-you-specify-the-right-host-or-port" aria-hidden="true">#</a> 8.17.2 The connection to the server localhost:8080 was refused - did you specify the right host or port?</h3><pre><code>8.10.\u4F7F\u7528kubectl\u67E5\u770B\u96C6\u7FA4\u72B6\u6001\u7AE0\u8282\u6CA1\u6709\u6B63\u786E\u6267\u884C\u4F1A\u62A5\u8FD9\u4E2A\u9519
</code></pre><h2 id="_8-18-\u90E8\u7F72\u6D4B\u8BD5\u7A0B\u5E8F" tabindex="-1"><a class="header-anchor" href="#_8-18-\u90E8\u7F72\u6D4B\u8BD5\u7A0B\u5E8F" aria-hidden="true">#</a> 8.18.\u90E8\u7F72\u6D4B\u8BD5\u7A0B\u5E8F</h2><pre><code>\u521B\u5EFAguestbook
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
</code></pre>`,501);function u(o,v){const n=r("Markmap");return s(),d("div",null,[l,t(n,{localtion:"/enhance/markmap/environment/centos/centos7/chapter/centos7-outline5-chapter8.html"}),c])}var m=i(a,[["render",u],["__file","centos7-chapter-8.\u4E8C\u8FDB\u5236\u5305\u642D\u5EFAKubernetes.html.vue"]]);export{m as default};
