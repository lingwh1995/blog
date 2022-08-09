import{_ as i,o as a,c as r,a as d,b as e,r as t}from"./app.af9ae738.js";const s={},c=e(`<h1 id="_6-ubuntucentos\u642D\u5EFAminikube" tabindex="-1"><a class="header-anchor" href="#_6-ubuntucentos\u642D\u5EFAminikube" aria-hidden="true">#</a> 6.UbuntuCentos\u642D\u5EFAMinikube</h1><h2 id="_6-1-\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_6-1-\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0" aria-hidden="true">#</a> 6.1.\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0</h2><pre><code>\u672C\u7AE0\u8282\u6D89\u53CA\u4E3B\u8981\u5185\u5BB9\u6709\uFF1A
 6.1.minikube\u4ECB\u7ECD
 6.2.\u7248\u672C\u8BF4\u660E
 6.3.\u5F00\u542FVmware\u865A\u62DF\u5316
 6.4.\u5B89\u88C5kubectl	
 6.5.\u5B89\u88C5minikube
 6.6.\u4F7F\u7528\u963F\u91CC\u4E91\u52A0\u901Fdocker hub
 6.7.\u542F\u52A8minikube
 6.8.minikube\u5E38\u7528\u547D\u4EE4	
\u5177\u4F53\u6BCF\u4E2A\u5C0F\u8282\u4E2D\u5305\u542B\u7684\u5185\u5BB9\u53EF\u4F7F\u901A\u8FC7\u4E0B\u9762\u7684\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2\u8FDB\u884C\u67E5\u770B\uFF0C\u672C\u7AE0\u8282\u5185\u5BB9\u4E2D\u56FE\u7247\u8F83\u5C11\uFF0C\u4E3B\u8981\u4EE5\u5B9E\u7528\u4E3A\u4E3B\uFF0C\u6240\u6709\u4EE3\u7801
\u5747\u7ECF\u8FC7\u4E25\u683C\u6D4B\u8BD5\uFF0C\u53EF\u76F4\u63A5\u590D\u5236\u8FD0\u884C\u5373\u53EF\u3002
</code></pre><h2 id="_6-2-\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2" tabindex="-1"><a class="header-anchor" href="#_6-2-\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2" aria-hidden="true">#</a> 6.2.\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2</h2>`,4),l=e(`<h2 id="_6-3-minikube\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_6-3-minikube\u4ECB\u7ECD" aria-hidden="true">#</a> 6.3.minikube\u4ECB\u7ECD</h2><pre><code>Minikube\u8FD9\u4E2A\u5DE5\u5177\u652F\u6301\u5728\u865A\u62DF\u673A\u4E0A\u8FD0\u884C\u4E00\u5957\u5355\u8282\u70B9\u7684k8s\u96C6\u7FA4
</code></pre><h2 id="_6-4-\u7248\u672C\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_6-4-\u7248\u672C\u8BF4\u660E" aria-hidden="true">#</a> 6.4.\u7248\u672C\u8BF4\u660E</h2><pre><code>minikube:1.2.6 kubectl client:1.18.0
</code></pre><h2 id="_6-5-\u5F00\u542Fvmware\u865A\u62DF\u5316" tabindex="-1"><a class="header-anchor" href="#_6-5-\u5F00\u542Fvmware\u865A\u62DF\u5316" aria-hidden="true">#</a> 6.5.\u5F00\u542FVmware\u865A\u62DF\u5316</h2><pre><code>\u67E5\u770B\u662F\u5426\u652F\u6301\u865A\u62DF\u5316\uFF0C\u5F00\u59CB\u5B89\u88C5\u524D\uFF0C\u5148\u67E5\u770B\u672C\u5730\u673A\u5668\u662F\u5426\u652F\u6301\u865A\u62DF\u5316\uFF0C\u6709\u8F93\u51FA\u5C31\u652F\u6301
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>grep -E --color &#39;vmx|svm&#39; /proc/cpuinfo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u5F00\u542F\u865A\u62DF\u5316
Vmware Workstation -&gt;Centos 64\u53F3\u952E\u83DC\u5355 \u2014&gt; \u8BBE\u7F6E 
	-&gt; \u5904\u7406\u5668 -&gt;\u52FE\u9009 \u865A\u62DF\u5316IntelVT-x/EPT \u6216 ADM-V/RVI(V)

\u8BBE\u7F6E\u5904\u7406\u5668\u6570\u91CF\u8BBE\u7F6E\u4E3A\u5927\u4E8E\u7B49\u4E8E2,\u5185\u5B58\u5927\u4E8E\u7B49\u4E8E2G
</code></pre><h2 id="_6-6-\u5B89\u88C5kubectl" tabindex="-1"><a class="header-anchor" href="#_6-6-\u5B89\u88C5kubectl" aria-hidden="true">#</a> 6.6.\u5B89\u88C5kubectl</h2><pre><code>\u7B80\u4ECB
kubectl \u662F\u4E00\u4E2A\u7528\u6765\u8DDF K8S \u96C6\u7FA4\u8FDB\u884C\u4EA4\u4E92\u7684\u547D\u4EE4\u884C\u5DE5\u5177
	
\u4E0B\u8F7Dkubectl\uFF0C\u4E0A\u4F20\u5230/opt/software/package\uFF0C\u8D4B\u4E88\u53EF\u8FD0\u884C\u6743\u9650,\u5E76\u653E\u5165/usr/local/bin/\u76EE\u5F55\u4E0B
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>chmod +x ./kubectl &amp;&amp; cp ./kubectl /usr/local/bin/kubectl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u67E5\u770Bkubectl\u7248\u672C
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl version --client
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_6-7-\u5B89\u88C5minikube" tabindex="-1"><a class="header-anchor" href="#_6-7-\u5B89\u88C5minikube" aria-hidden="true">#</a> 6.7.\u5B89\u88C5minikube</h2><pre><code>\u4E0B\u8F7Dminikube
\u5230 https://github.com/kubernetes/minikube/releases \u627E\u5230minikube-linux-amd64\u5E76\u4E0B\u8F7D

\u4E0A\u4F20\u5230/opt/software/package

\u8D4B\u4E88\u8FD0\u884C\u6743\u9650\u5E76\u590D\u5236\u5230/usr/local/bin/minikube
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>chmod +x ./minikube-linux-amd64 &amp;&amp; cp ./minikube-linux-amd64 /usr/local/bin/minikube
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_6-8-\u4F7F\u7528\u963F\u91CC\u4E91\u52A0\u901Fdocker-hub" tabindex="-1"><a class="header-anchor" href="#_6-8-\u4F7F\u7528\u963F\u91CC\u4E91\u52A0\u901Fdocker-hub" aria-hidden="true">#</a> 6.8.\u4F7F\u7528\u963F\u91CC\u4E91\u52A0\u901Fdocker hub</h2><pre><code>\u767B\u5F55\u963F\u91CC\u4E91docker\u76F8\u5173\u9875\u9762
\u8BBF\u95EE\uFF1Ahttps://cr.console.aliyun.com/cn-hangzhou/instances/mirrors
\u767B\u9646-&gt;\u5DE6\u4FA7\u83DC\u5355\u9009\u4E2D\u955C\u50CF\u52A0\u901F\u5668-&gt;\u67E5\u770B\u52A0\u901F\u955C\u50CF\u5730\u5740 https://ngviu28h.mirror.aliyuncs.com
</code></pre><h2 id="_6-9-\u542F\u52A8minikube" tabindex="-1"><a class="header-anchor" href="#_6-9-\u542F\u52A8minikube" aria-hidden="true">#</a> 6.9.\u542F\u52A8minikube</h2><pre><code>\u6CE8\u610F\u4E8B\u9879
\u542F\u52A8minikube\u4E4B\u524D\u9700\u8981\u5148\u542F\u52A8docker\uFF0C\u5982\u65E0\u6CD5\u542F\u52A8\u52A0\u4E0A--kubernetes-version=v\u5177\u4F53\u7248\u672C\u53F7

\u4F7F\u7528docker\u4F5C\u4E3A\u865A\u62DF\u5316\u5F15\u64CE(\u9700\u8981\u5148\u5B89\u88C5Docker)
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>minikube start --driver=docker --force \\
	--image-mirror-country=&#39;cn&#39; \\
	--image-repository=&#39;registry.cn-hangzhou.aliyuncs.com/google_containers&#39; \\
	--registry-mirror=&#39;https://ngviu28h.mirror.aliyuncs.com&#39; \\
	--kubernetes-version=v1.23.8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u4F7F\u7528virtualbox\u4F5C\u4E3A\u865A\u62DF\u5316\u5F15\u64CE(\u9700\u8981\u5148\u5B89\u88C5Virtualbox)

\u4E0B\u8F7DCentos7\u7248VirtualBox
\u8BBF\u95EE\uFF1Ahttps://www.virtualbox.org/wiki/Downloads\uFF0C\u9009\u62E9AMD64\u7248\u672C\u4E0B\u8F7D
\u4E0A\u4F20\u5230/opt/software/package\u4E2D
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>VirtualBox-6.1-6.1.34_150636_el7-2.x86_64.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u5B89\u88C5\u95EE\u9898\u89E3\u51B3(virtualbox\u5185\u6838\u65E0\u6CD5\u7F16\u8BD1)
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo yum install gcc kernel kernel-devel -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u91CD\u542F\u673A\u5668
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl reboot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u5B89\u88C5VirtualBox
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum install VirtualBox-6.1-6.1.34_150636_el7-2.x86_64.rpm -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u8865\u5145\u5185\u5BB9\uFF1ACentos\u7248VirtualBox\u64CD\u4F5C\u547D\u4EE4						
VBoxManage list runningvms //\u67E5\u770B\u673A\u5668\u5217\u8868
VBoxHeadless -startvm &quot;\u865A\u62DF\u673A\u540D&quot; //\u542F\u52A8\u865A\u62DF\u673A
\u6D4B\u8BD5VirtualBox\u662F\u5426\u5B89\u88C5\u6210\u529F
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>virtualbox
rcvboxdrv setup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u4F7F\u7528virtualbox\u4F5C\u4E3A\u865A\u62DF\u5316\u5F15\u64CE
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>minikube start --driver=virtualbox --force \\
	--image-mirror-country=&#39;cn&#39; \\
	--image-repository=&#39;registry.cn-hangzhou.aliyuncs.com/google_containers&#39; \\
	--registry-mirror=&#39;https://ngviu28h.mirror.aliyuncs.com&#39; \\
	--kubernetes-version=v1.23.8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-10-minikube\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_6-10-minikube\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> 6.10.minikube\u5E38\u7528\u547D\u4EE4</h2><pre><code>\u67E5\u770Bminikube\u65E5\u5FD7
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>minikube logs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u67E5\u770Bminikube\u72B6\u6001
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>minikube status								
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u67E5\u770B\u8282\u70B9				
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>minikube kubectl -- get po -A
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u505C\u6B62\u96C6\u7FA4
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>minikube stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u6E05\u7A7A\u96C6\u7FA4
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>minikube delete --all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u5B89\u88C5\u96C6\u7FA4\u53EF\u89C6\u5316 Web UI \u63A7\u5236\u53F0
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>minikube dashboard
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u5378\u8F7Dminikube
\u505C\u6B62\u8FD0\u884C
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>minikube stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u6267\u884C\u5378\u8F7D\u547D\u4EE4
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>minikube delete
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u5220\u9664 ~/.minikube \u76EE\u5F55\u7F13\u5B58\u7684\u6587\u4EF6
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>rm -rf ~/.minikube	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,52);function u(o,m){const n=t("Markmap");return a(),r("div",null,[c,d(n,{localtion:"/enhance/markmap/environment/ubuntu/ubuntu2012/chapter/ubuntu2012-outline5-chapter6.html"}),l])}var v=i(s,[["render",u],["__file","ubuntu2012-chapter-6.UbuntuCentos\u642D\u5EFAMinikube.html.vue"]]);export{v as default};
