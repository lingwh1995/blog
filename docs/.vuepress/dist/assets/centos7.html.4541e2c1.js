import{_ as l,o as c,c as o,a as i,d as e,b as d,e as n,r as t}from"./app.50be7c37.js";const u={},v=d(`<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>entities</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">AllArgsConstructor</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">Data</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">NoArgsConstructor</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>math<span class="token punctuation">.</span></span><span class="token class-name">BigDecimal</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Account</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u7528\u6237id
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> userId<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u603B\u989D\u5EA6
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">BigDecimal</span> total<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u5DF2\u7528\u989D\u5EA6
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">BigDecimal</span> used<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u5269\u4F59\u989D\u5EA6
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">BigDecimal</span> residue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),m=d(`<h1 id="\u535A\u5BA2\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u535A\u5BA2\u4ECB\u7ECD" aria-hidden="true">#</a> \u535A\u5BA2\u4ECB\u7ECD</h1><h2 id="\u535A\u5BA2\u5185\u5BB9\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u535A\u5BA2\u5185\u5BB9\u6982\u8FF0" aria-hidden="true">#</a> \u535A\u5BA2\u5185\u5BB9\u6982\u8FF0</h2><pre><code>\u672C\u7BC7\u535A\u5BA2\u7684\u5185\u5BB9\u4E3B\u8981\u4ECB\u7ECD\u5B89\u88C5Centos7\u64CD\u4F5C\u7CFB\u7EDF\u3001\u4EE5\u53CA\u5728Centos\u64CD\u4F5C\u7CFB\u7EDF\u4E0A\u642D\u5EFA\u5E38\u89C1\u7684\u5F00\u53D1\u73AF\u5883\uFF0C\u5982Jdk\u3001Maven\u3001Docker\u3001
Rancher\u3001Minikube\u3001Kubernetes\u3001nginx\u3001\u7B49\u8F6F\u4EF6\u7684\u8BE6\u7EC6\u642D\u5EFA\u8FC7\u7A0B\uFF0C\u535A\u5BA2\u5185\u5BB9\u4E2D\u56FE\u7247\u8F83\u5C11\uFF0C\u4E3B\u8981\u4EE5\u5B9E\u7528\u4E3A\u4E3B\uFF0C\u6240\u6709\u4EE3\u7801\u5747
\u7ECF\u8FC7\u4E25\u683C\u6D4B\u8BD5\uFF0C\u53EF\u76F4\u63A5\u590D\u5236\u8FD0\u884C\u5373\u53EF\u3002
</code></pre><h2 id="\u535A\u5BA2\u5927\u7EB2" tabindex="-1"><a class="header-anchor" href="#\u535A\u5BA2\u5927\u7EB2" aria-hidden="true">#</a> \u535A\u5BA2\u5927\u7EB2</h2><h3 id="\u7B80\u5355\u7248\u535A\u5BA2\u5927\u7EB2" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u7248\u535A\u5BA2\u5927\u7EB2" aria-hidden="true">#</a> \u7B80\u5355\u7248\u535A\u5BA2\u5927\u7EB2</h3>`,5),b=["src"],p=e("h3",{id:"\u8BE6\u7EC6\u7248\u535A\u5BA2\u5927\u7EB2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u8BE6\u7EC6\u7248\u535A\u5BA2\u5927\u7EB2","aria-hidden":"true"},"#"),n(" \u8BE6\u7EC6\u7248\u535A\u5BA2\u5927\u7EB2")],-1),g={class:"custom-container details"},x=e("summary",null,"\u70B9\u51FB\u67E5\u770B\u8BE6\u7EC6\u7248\u535A\u5BA2\u5927\u7EB2",-1),h=["src"],k=d(`<h1 id="_1-\u5B89\u88C5linux\u64CD\u4F5C\u7CFB\u7EDF" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u88C5linux\u64CD\u4F5C\u7CFB\u7EDF" aria-hidden="true">#</a> 1.\u5B89\u88C5Linux\u64CD\u4F5C\u7CFB\u7EDF</h1><h2 id="_1-1-linux\u91CD\u8981\u76EE\u5F55\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_1-1-linux\u91CD\u8981\u76EE\u5F55\u4ECB\u7ECD" aria-hidden="true">#</a> 1.1.Linux\u91CD\u8981\u76EE\u5F55\u4ECB\u7ECD</h2><pre><code>/usr \u2192 C:/Windows/ /*\u7CFB\u7EDF\u7EA7\u7684\u76EE\u5F55
/usr/lib \u2192 C:/Windows/System32
/usr/local \u2192 C:/Progrem Files/ /*\u7528\u6237\u7EA7\u7684\u7A0B\u5E8F\u76EE\u5F55\uFF0C\u7528\u6237\u81EA\u5DF1\u7F16\u8BD1\u7684\u8F6F\u4EF6\u9ED8\u8BA4\u4F1A\u5B89\u88C5\u5230\u8FD9\u4E2A\u76EE\u5F55\u4E0B
/opt \u2192 D:/Software /*\u989D\u5916\u5B89\u88C5\u7684\u53EF\u9009\u5E94\u7528\u7A0B\u5E8F\u5305\u6240\u653E\u7F6E\u7684\u4F4D\u7F6E\u3002\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u628Atomcat\u7B49\u90FD\u5B89\u88C5\u5230\u8FD9\u91CC\u3002
/usr/src /*\u7CFB\u7EDF\u7EA7\u7684\u6E90\u7801\u76EE\u5F55\uFF0Clinux\u5185\u6838\u7684\u6E90\u4EE3\u7801\u5C31\u653E\u5728/usr/src/linux\u91CC\u3002
/home \u5B58\u653E\u6240\u6709\u7528\u6237\u6587\u4EF6\u7684\u6839\u76EE\u5F55\uFF0C\u662F\u7528\u6237\u4E3B\u76EE\u5F55\u7684\u57FA\u70B9\uFF0C\u6BD4\u5982\u7528\u6237user\u7684\u4E3B\u76EE\u5F55\u5C31\u662F/home/user\uFF0C\u53EF\u4EE5\u7528~user\u8868\u793A
/root \u8D85\u7EA7\u7528\u6237\uFF08\u7CFB\u7EDF\u7BA1\u7406\u5458\uFF09\u7684\u4E3B\u76EE\u5F55\uFF08\u7279\u6743\u9636\u7EA7^o^\uFF09
/mnt \u7CFB\u7EDF\u7BA1\u7406\u5458\u5B89\u88C5\u4E34\u65F6\u6587\u4EF6\u7CFB\u7EDF\u7684\u5B89\u88C5\u70B9\uFF0C\u7CFB\u7EDF\u63D0\u4F9B\u8FD9\u4E2A\u76EE\u5F55\u662F\u8BA9\u7528\u6237\u4E34\u65F6\u6302\u8F7D\u5176\u4ED6\u7684\u6587\u4EF6\u7CFB\u7EDF\u3002
/boot \u5B58\u653E\u7528\u4E8E\u7CFB\u7EDF\u5F15\u5BFC\u65F6\u4F7F\u7528\u7684\u5404\u79CD\u6587\u4EF6
/tmp \u7528\u4E8E\u5B58\u653E\u5404\u79CD\u4E34\u65F6\u6587\u4EF6\uFF0C\u662F\u516C\u7528\u7684\u4E34\u65F6\u6587\u4EF6\u5B58\u50A8\u70B9\u3002
/var \u5B58\u653E\u4E34\u65F6\u6587\u4EF6\uFF0C\u5982\u5404\u79CD\u670D\u52A1\u7684\u65E5\u5FD7\u6587\u4EF6\u3002
</code></pre><h2 id="_1-2-centos\u955C\u50CF\u4E0B\u8F7D" tabindex="-1"><a class="header-anchor" href="#_1-2-centos\u955C\u50CF\u4E0B\u8F7D" aria-hidden="true">#</a> 1.2.Centos\u955C\u50CF\u4E0B\u8F7D</h2><pre><code>\u5982\u4F55\u662F\u5B66\u4E60\u73AF\u5883\uFF0C\u5EFA\u8BAE\u5B89\u88C5centos mini\u7248\u955C\u50CF\uFF0C\u751F\u4EA7\u73AF\u5883\u53EF\u4EE5\u5B89\u88C5\u5B8C\u6574\u7248
\u4E0B\u8F7D\u5730\u5740
</code></pre><h2 id="_1-3-\u5B89\u88C5\u524Dvmaware\u76F8\u5173\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#_1-3-\u5B89\u88C5\u524Dvmaware\u76F8\u5173\u8BBE\u7F6E" aria-hidden="true">#</a> 1.3.\u5B89\u88C5\u524DVmaware\u76F8\u5173\u8BBE\u7F6E</h2><p><strong>\u865A\u62DF\u673A\u8054\u7F51\u8BBE\u7F6E</strong></p><pre><code>\u5BFC\u822A\u680F-&gt;\u7F16\u8F91-&gt;\u865A\u62DF\u7F51\u7EDC\u7F16\u8F91\u5668-&gt;VMnet8NAT\u6A21\u5F0F-&gt;\u66F4\u6539\u8BBE\u7F6E-&gt;VMnet8NAT\u6A21\u5F0F
	-&gt;\u66F4\u6539\u5E95\u90E8\u5B50\u7F51:192.168.0.0\uFF0C\u5B50\u7F51\u63A9\u7801:255.255.255.0-&gt;NAT\u8BBE\u7F6E-&gt;\u7F51\u5173IP:192.168.0.2	
</code></pre><p><strong>Vmware\u7F51\u5361\u8BF4\u660E</strong></p><pre><code>VMnet0\uFF1A\u7528\u4E8E\u865A\u62DF\u6865\u63A5\u7F51\u7EDC\u4E0B\u7684\u865A\u62DF\u4EA4\u6362\u673A
VMnet1\uFF1A\u7528\u4E8E\u865A\u62DFHost-Only\u7F51\u7EDC\u4E0B\u7684\u865A\u62DF\u4EA4\u6362\u673A
VMnet8\uFF1A\u7528\u4E8E\u865A\u62DFNAT\u7F51\u7EDC\u4E0B\u7684\u865A\u62DF\u4EA4\u6362\u673A
VMware NetworkAdepter VMnet1\uFF1AHost\u7528\u4E8E\u4E0EHost-Only\u865A\u62DF\u7F51\u7EDC\u8FDB\u884C\u901A\u4FE1\u7684\u865A\u62DF\u7F51\u5361
VMware NetworkAdepter VMnet8\uFF1AHost\u7528\u4E8E\u4E0ENAT\u865A\u62DF\u7F51\u7EDC\u8FDB\u884C\u901A\u4FE1\u7684\u865A\u62DF\u7F51\u5361
</code></pre><h2 id="_1-3-\u5B89\u88C5\u65F6\u5206\u533A\u5927\u5C0F\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#_1-3-\u5B89\u88C5\u65F6\u5206\u533A\u5927\u5C0F\u8BBE\u7F6E" aria-hidden="true">#</a> 1.3.\u5B89\u88C5\u65F6\u5206\u533A\u5927\u5C0F\u8BBE\u7F6E</h2><pre><code>/boot	/*\u5B58\u653E\u7CFB\u7EDF\u542F\u52A8\u5F15\u5BFC\u6587\u4EF6\uFF0C\u5EFA\u8BAE\u5927\u5C0F\uFF1A512mb
/swap 	/*\u4EA4\u6362\u533A\uFF0C\u5EFA\u8BAE\u5927\u5C0F\uFF1A2g
/*\u4E3B\u5206\u533A\uFF0C\u5269\u4E0B\u7684\u7A7A\u95F4\u5168\u90E8\u5206\u7ED9\u8FD9\u4E2A\u5206\u533A
</code></pre><h1 id="_2-linux\u64CD\u4F5C\u7CFB\u7EDF\u521D\u59CB\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-linux\u64CD\u4F5C\u7CFB\u7EDF\u521D\u59CB\u8BBE\u7F6E" aria-hidden="true">#</a> 2.Linux\u64CD\u4F5C\u7CFB\u7EDF\u521D\u59CB\u8BBE\u7F6E</h1><h2 id="_2-1-\u914D\u7F6E\u9759\u6001ip\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#_2-1-\u914D\u7F6E\u9759\u6001ip\u5730\u5740" aria-hidden="true">#</a> 2.1.\u914D\u7F6E\u9759\u6001IP\u5730\u5740</h2><p><strong>\u4FEE\u6539\u7F51\u7EDC\u914D\u7F6E</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vi</span> /etc/sysconfig/network-scripts/ifcfg-ens32<span class="token punctuation">(</span>\u6700\u540E\u4E00\u4E2A\u4E3A\u7F51\u5361\u540D\u79F0<span class="token punctuation">)</span>	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u4FEE\u6539\u540E\u5185\u5BB9\u5982\u4E0B
bootproto=static
onboot=yes
#\u5728\u6700\u540E\u52A0\u4E0A\u51E0\u884C\uFF0CIP\u5730\u5740\u3001\u5B50\u7F51\u63A9\u7801\u3001\u7F51\u5173\u3001dns\u670D\u52A1\u5668\uFF0C\u6CE8\u610F\uFF1A\u548C\u7F51\u5173IP\u5904\u4E8E\u540C\u4E00\u4E2A\u7F51\u6BB5
IPADDR=192.168.0.4
NETMASK=255.255.255.0
#\u548C\u4E0A\u9762\u7F51\u5173IP\u4FDD\u6301 \u4E00\u81F4
GATEWAY=192.168.0.2
DNS1=8.8.8.8
DNS2=8.8.4.4
</code></pre><p><strong>\u91CD\u542F\u7F51\u7EDC</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl restart network
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-2-\u89E3\u51B3\u8FDC\u7A0B\u8FDE\u63A5\u65E0\u6CD5\u8FDE\u63A5\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_2-2-\u89E3\u51B3\u8FDC\u7A0B\u8FDE\u63A5\u65E0\u6CD5\u8FDE\u63A5\u7684\u95EE\u9898" aria-hidden="true">#</a> 2.2.\u89E3\u51B3\u8FDC\u7A0B\u8FDE\u63A5\u65E0\u6CD5\u8FDE\u63A5\u7684\u95EE\u9898</h2><p><strong>\u4FEE\u6539sshd\u914D\u7F6E\u6587\u4EF6</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vim /etc/ssh/sshd_config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u8BF4\u660E\uFF1Asshd_config\u91CC\u9762\u7684UseDNS=no\u3010\u539F\u672C\u4E3Ayes\u3011
</code></pre><p><strong>\u91CD\u542Fssh\u670D\u52A1</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl restart sshd.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-3-\u8BBE\u7F6E\u7CFB\u7EDF\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_2-3-\u8BBE\u7F6E\u7CFB\u7EDF\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> 2.3.\u8BBE\u7F6E\u7CFB\u7EDF\u73AF\u5883\u53D8\u91CF</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>echo &quot;export LC_ALL=en_US.UTF-8&quot;  &gt;&gt;  /etc/profile &amp;&amp;
source /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-4-\u5B89\u88C5curl" tabindex="-1"><a class="header-anchor" href="#_2-4-\u5B89\u88C5curl" aria-hidden="true">#</a> 2.4.\u5B89\u88C5curl</h2><pre><code>\u540E\u9762\u7684\u64CD\u4F5C\u9700\u8981curl\uFF0C\u6240\u4EE5\u9996\u5148\u5B89\u88C5curl
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum -y install curl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-5-\u914D\u7F6Eyml\u6E90" tabindex="-1"><a class="header-anchor" href="#_2-5-\u914D\u7F6Eyml\u6E90" aria-hidden="true">#</a> 2.5.\u914D\u7F6Eyml\u6E90</h2><pre><code>\u4E0B\u8F7D\u963F\u91CC\u6E90\uFF0C\u5E76\u4E0A\u4F20\u5230/opt/software/package
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>curl http://mirrors.aliyun.com/repo/Centos-7.repo -o Centos-7.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u8FDB\u5165/etc/yum.repos.d\u76EE\u5F55\u4E2D\uFF0C\u5907\u4EFDCentOS-Base.repo
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd /etc/yum.repos.d &amp;&amp; cp CentOS-Base.repo CentOS-Base.repo.bak
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u590D\u5236/opt/software/package/Centos-7.repo\u5230\u5F53\u524D\u76EE\u5F55\u5E76\u91CD\u547D\u540D\u4E3ACentOS-Base.repo
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cp /opt/software/package/Centos-7.repo /CentOS-Base.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u751F\u6210yum\u6E90\u7F13\u5B58\u5E76\u66F4\u65B0yum\u6E90
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum makecache &amp;&amp; yum update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-6-\u5B89\u88C5\u5E38\u7528\u57FA\u7840\u7CFB\u7EDF\u8F6F\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-6-\u5B89\u88C5\u5E38\u7528\u57FA\u7840\u7CFB\u7EDF\u8F6F\u4EF6" aria-hidden="true">#</a> 2.6.\u5B89\u88C5\u5E38\u7528\u57FA\u7840\u7CFB\u7EDF\u8F6F\u4EF6</h2><h2 id="_2-6-1-\u624B\u52A8\u5B89\u88C5\u5E38\u7528\u8F6F\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-6-1-\u624B\u52A8\u5B89\u88C5\u5E38\u7528\u8F6F\u4EF6" aria-hidden="true">#</a> 2.6.1.\u624B\u52A8\u5B89\u88C5\u5E38\u7528\u8F6F\u4EF6</h2><p><strong>vim</strong></p><pre><code>\u5B89\u88C5vim	
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum -y install vim*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u914D\u7F6Evim	
set nu         # \u8BBE\u7F6E\u663E\u793A\u884C\u53F7
set showmode   #\u8BBE\u7F6E\u5728\u547D\u4EE4\u884C\u754C\u9762\u6700\u4E0B\u9762\u663E\u793A\u5F53\u524D\u6A21\u5F0F\u7B49
set ruler      #\u5728\u53F3\u4E0B\u89D2\u663E\u793A\u5149\u6807\u6240\u5728\u7684\u884C\u6570\u7B49\u4FE1\u606F
set autoindent #\u8BBE\u7F6E\u6BCF\u6B21\u5355\u51FBEnter\u952E\u540E\uFF0C\u5149\u6807\u79FB\u52A8\u5230\u4E0B\u4E00\u884C\u65F6\u4E0E\u4E0A\u4E00\u884C\u7684\u8D77\u59CB\u5B57\u7B26\u5BF9\u9F50
syntax on      #\u5373\u8BBE\u7F6E\u8BED\u6CD5\u68C0\u6D4B\uFF0C\u5F53\u7F16\u8F91C\u6216\u8005Shell\u811A\u672C\u65F6\uFF0C\u5173\u952E\u5B57\u4F1A\u7528\u7279\u6B8A\u989C\u8272\u663E\u793A		
</code></pre><p><strong>wget</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum -y install wget
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u5B89\u88C5telnet</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum -y install telnet
yum -y install telnet-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>git</strong> \u5378\u8F7D\u65E7\u7248\u672C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum remove git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u5B89\u88C5 yum \u6E90\u7684 Git \u7248\u672C
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum install -y git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u67E5\u770B\u7248\u672C
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git version 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-6-2-\u4F7F\u7528\u811A\u672C\u5B89\u88C5\u5E38\u7528\u8F6F\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-6-2-\u4F7F\u7528\u811A\u672C\u5B89\u88C5\u5E38\u7528\u8F6F\u4EF6" aria-hidden="true">#</a> 2.6.2.\u4F7F\u7528\u811A\u672C\u5B89\u88C5\u5E38\u7528\u8F6F\u4EF6</h2><pre><code>\u811A\u672C\u4ECB\u7ECD
\u8FD9\u4E2A\u811A\u672C\u4E2D\u5305\u542B\u4E86centos\u8BBE\u7F6Eyum\u6E90\u5E76\u4E14\u5B89\u88C5\u4E86\u4E00\u4E9B\u7684\u5E38\u7528\u8F6F\u4EF6\uFF0C\u5982vim\u3001git\u3001wget\u3001curl\u3001\u7B49\uFF0C\u4F1A\u5B9A\u65F6\u66F4\u65B0

\u5B89\u88C5curl
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum -y install curl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u4E0B\u8F7D\u811A\u672C\u5E76
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>curl https://gitee.com/lingwh1995/config-center/raw/master/centos/centos-init.sh -o centos-init.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u8D4B\u4E88\u53EF\u8FD0\u884C\u6743\u9650\u5E76\u8FD0\u884C\u8BE5\u811A\u672C
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>chmod +x centos-init.sh &amp;&amp;
./centos-init.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-\u642D\u5EFA\u57FA\u7840\u5F00\u53D1\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#_3-\u642D\u5EFA\u57FA\u7840\u5F00\u53D1\u73AF\u5883" aria-hidden="true">#</a> 3.\u642D\u5EFA\u57FA\u7840\u5F00\u53D1\u73AF\u5883</h1><h2 id="_3-1-\u5B89\u88C5jdk" tabindex="-1"><a class="header-anchor" href="#_3-1-\u5B89\u88C5jdk" aria-hidden="true">#</a> 3.1.\u5B89\u88C5jdk</h2><pre><code>\u67E5\u770B\u5F53\u524D\u5B89\u88C5\u7684java\u7248\u672C
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum list installed | grep java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u5378\u8F7D\u65E7\u7248\u672Cjdk
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum -y remove xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u521B\u5EFA\u5B58\u653E\u5B89\u88C5\u5305\u7684\u76EE\u5F55-&gt;\u5207\u6362\u5230\u8BE5\u76EE\u5F55-&gt;\u5728\u8BE5\u76EE\u5F55\u4E2D\u4E0B\u8F7Djdk
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir -p /opt/software/package &amp;&amp;
cd /opt/software/package &amp;&amp;
curl -fL -u software-1659088335906:c2e556a8a52386cbe0c6361ee3a7d8a21d3c9ca0 \\
&quot;https://lingwh-generic.pkg.coding.net/coding-drive/software/jdk-8u181-linux-x64.tar.gz?\\
version=latest&quot; -o jdk-8u181-linux-x64.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u89E3\u538Bjdk\u540E\u8D4B\u4E88\u6743\u9650\u5E76\u653E\u5165\u6307\u5B9A\u76EE\u5F55
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>tar -zxvf jdk-8u181-linux-x64.tar.gz &amp;&amp;
chmod +x jdk1.8.0_181
mv jdk1.8.0_181 /usr/local/bin/jdk1.8.0_181
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u914D\u7F6E\u73AF\u5883\u53D8\u91CF
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vim /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>export JAVA_HOME=/usr/local/bin/jdk1.8.0_181
export JRE_HOME=\${JAVA_HOME}/jre
export CLASSPATH=.:\${JAVA_HOME}/lib:\${JRE_HOME}/lib
export PATH=\${JAVA_HOME}/bin:$PATH
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u5237\u65B0\u73AF\u5883\u53D8\u91CF\u6587\u4EF6
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>source /etc/profile	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u67E5\u770Bjava\u7248\u672C
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>java -version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-2-\u5B89\u88C5maven" tabindex="-1"><a class="header-anchor" href="#_3-2-\u5B89\u88C5maven" aria-hidden="true">#</a> 3.2.\u5B89\u88C5maven</h2><pre><code>\u6CE8\u610F
maven linux\u7248\u548Cwindows\u7248\u5E76\u4E0D\u901A\u7528

\u521B\u5EFA\u5B58\u653E\u5B89\u88C5\u5305\u7684\u76EE\u5F55-&gt;\u5E76\u5207\u6362\u5230\u8BE5\u76EE\u5F55-&gt;\u5728\u8BE5\u76EE\u5F55\u4E2D\u4E0B\u8F7Dmaven
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir -p /opt/software/package &amp;&amp;
cd /opt/software/package &amp;&amp;
curl -fL -u software-1659088796431:ba211676fbe4a719c3b40b22083cd70388d41acc \\
&quot;https://lingwh-generic.pkg.coding.net/coding-drive/software/apache-maven-3.8.6-bin.tar.gz\\
?version=latest&quot; -o apache-maven-3.8.6-bin.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u89E3\u538B\u5230/usr/local/bin/\u76EE\u5F55\u4E0B
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>tar -zxvf apache-maven-3.8.6-bin.tar.gz -C /usr/local/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u914D\u7F6E\u73AF\u5883\u53D8\u91CF	
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vim  /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9
\u6CE8\u610F\u4E8B\u9879
\u4E0D\u8981\u4FEE\u6539\u539F\u6765\u7684path\uFF0C\u76F4\u63A5\u5728\u4E0B\u9762\u6DFB\u52A0\u65B0\u7684PATH\u914D\u7F6E\uFF0C\u4F7F\u7528$PATH\u5F15\u7528\u4E0A\u9762\u7684PATH
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>export M2_HOME=/usr/local/bin/apache-maven-3.8.6
export PATH=$PATH:$M2_HOME/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u5237\u65B0\u914D\u7F6E\u6587\u4EF6
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>source /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u67E5\u770Bmaven\u7248\u672C
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mvn -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u4FEE\u6539maven\u7684settings.xml\uFF0C\u4ED3\u5E93\u6E90&lt;mirrors&gt;&lt;/mirrors&gt;\u4E2D\u6DFB\u52A0\u5982\u4E0B\u4FE1\u606F:
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vim /usr/local/bin/apache-maven-3.8.6/conf/settings.xml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;mirror&gt;
	&lt;id&gt;alimaven&lt;/id&gt;
	&lt;name&gt;aliyun maven&lt;/name&gt;
	&lt;url&gt;http://maven.aliyun.com/nexus/content/groups/public/&lt;/url&gt;
	&lt;mirrorOf&gt;central&lt;/mirrorOf&gt;
&lt;/mirror&gt;	
&lt;mirror&gt;
	&lt;id&gt;repo2&lt;/id&gt;
	&lt;name&gt;Mirror from Maven Repo2&lt;/name&gt;
	&lt;url&gt;http://repo2.maven.org/maven2/&lt;/url&gt;
	&lt;mirrorOf&gt;central&lt;/mirrorOf&gt;
&lt;/mirror&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-3-\u5B89\u88C5mysql" tabindex="-1"><a class="header-anchor" href="#_3-3-\u5B89\u88C5mysql" aria-hidden="true">#</a> 3.3.\u5B89\u88C5mysql</h2><pre><code>\u5B89\u88C5\u5EFA\u8BAE
\u4F7F\u7528mysql\u5B98\u65B9yum\u6E90\u5728\u7EBF\u5B89\u88C5(\u4E0D\u8981\u4F7F\u7528rpm\u65B9\u5F0F\u5B89\u88C5\uFF0C\u975E\u5E38\u96BE\u4EE5\u5B89\u88C5\u6210\u529F)

\u67E5\u770B\u5F53\u524D\u5B89\u88C5\u7684mysql\u7248\u672C
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum list installed | grep mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u6216
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>rpm -qa | grep mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u5378\u8F7D\u65E7\u7248\u672Cmysql
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum -y remove xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>Centos\u7EC8\u7AEF\u83B7\u53D6yum\u6E90\u5B89\u88C5\u5305\uFF1A
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd /opt/software/package &amp;&amp;
wget https://dev.mysql.com/get/mysql80-community-release-el7-3.noarch.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u5B89\u88C5mysql\u7684yum\u6E90\uFF1A\uFF08\u4E8C\u9009\u4E00\uFF09
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>rpm -Uvh mysql80-community-release-el7-3.noarch.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>rpm -ivh mysql80-community-release-el7-3.noarch.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u67E5\u770B\u521A\u624D\u4E0B\u8F7D\u7684mysql\u5B89\u88C5\u6E90\uFF0C\u53EF\u4EE5\u770B\u5230\u65B0\u589E\u7684\u4E24\u4E2Amysql\u6E90
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ls /etc/yum.repos.d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>[root@localhost package]# ls /etc/yum.repos.d
CentOS-Base.repo      CentOS-Debuginfo.repo  CentOS-Vault.repo          mysql-community-source.repo
CentOS-Base.repo.bak  CentOS-Media.repo      CentOS-fasttrack.repo      mysql-community.repo
CentOS-CR.repo        CentOS-Sources.repo    CentOS-x86_64-kernel.repo

\u4FEE\u6539\u6E90\u4E2D\u7684\u914D\u7F6E\uFF0C\u5C06\u6240\u6709\u7684gpgkey\u7684\u503C\u4FEE\u6539\u4E3Ahttps://repo.mysql.com/RPM-GPG-KEY-mysql-2022
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sed -i &#39;s#file:///etc/pki/rpm-gpg/RPM-GPG-KEY-mysql#https://repo.mysql.com/\\
RPM-GPG-KEY-mysql-2022#g&#39; /etc/yum.repos.d/mysql-community.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u4F7F\u7528yum\u5728\u7EBF\u5B89\u88C5mysql
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum -y install mysql-community-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u542F\u52A8mysql-server
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl start mysqld.service &amp;&amp;
systemctl enable mysqld.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u67E5\u770Bmysql-server\u542F\u52A8\u72B6\u6001\uFF1A
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl status mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u521D\u59CB\u5316mysql
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mysqld --initialize
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u67E5\u770Bmysql8\u767B\u5F55\u5BC6\u7801
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat /var/log/mysqld.log | grep &#39;temporary password&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u770B\u5230\u5982\u4E0B\u5185\u5BB9\uFF1A
2022-07-18T18:31:57.277661Z 6 [Note] [MY-010454] [Server]
	A temporary password is generated for root@localhost: %)4(26e++jaK
</code></pre><p>\u767B\u5F55mysql</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mysql -uroot -p&#39;%)4(26e++jaK&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u4FEE\u6539mysql\u521D\u59CB\u5BC6\u7801\uFF0C\u89C4\u5219\u5927\u5C0F\u5199\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u7279\u6B8A\u7B26\u53F7\uFF0C\u6700\u5C118\u4F4D
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ALTER USER USER() IDENTIFIED BY &#39;Mysql123456_&#39;;
FLUSH PRIVILEGES;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u6269\u5C55\u6216\u8005\u6DFB\u52A0\u8FDC\u7A0B\u7528\u6237\u6743\u9650:
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>use mysql;	
update user set host=&#39;%&#39; where user=&#39;root&#39;;
flush privileges;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_4-centos\u642D\u5EFAdocker" tabindex="-1"><a class="header-anchor" href="#_4-centos\u642D\u5EFAdocker" aria-hidden="true">#</a> 4.Centos\u642D\u5EFAdocker</h1><h2 id="_4-1-\u5B89\u88C5docker" tabindex="-1"><a class="header-anchor" href="#_4-1-\u5B89\u88C5docker" aria-hidden="true">#</a> 4.1.\u5B89\u88C5docker</h2><h3 id="_4-1-1-\u5728\u7EBF\u5B89\u88C5docker" tabindex="-1"><a class="header-anchor" href="#_4-1-1-\u5728\u7EBF\u5B89\u88C5docker" aria-hidden="true">#</a> 4.1.1.\u5728\u7EBF\u5B89\u88C5docker</h3><pre><code>\u4EE5root\u8EAB\u4EFD\u66F4\u65B0yum\uFF0C\u5C06yum\u5305\u66F4\u65B0\u5230\u6700\u65B0
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum -y update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u67E5\u770B\u5F53\u524D\u5B89\u88C5\u7684docker\u7248\u672C
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum list installed | grep docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>containerd.io.x86_64 	 1.6.6-3.1.el7                  @docker-ce-stable				
docker-ce.x86_64                   3:20.10.17-3.el7               @docker-ce-stable
docker-ce-cli.x86_64               1:20.10.17-3.el7               @docker-ce-stable
docker-ce-rootless-extras.x86_64   20.10.17-3.el7                 @docker-ce-stable
docker-scan-plugin.x86_64          0.17.0-3.el7                   @docker-ce-stable
	
\u5378\u8F7D\u65E7\u7248\u672Cdocker
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum -y remove docker-ce.x86_64
yum -y remove docker-scan-plugin.x86_64
yum -y remove docker-ce-cli.x86_64
yum -y remove docker-ce-rootless-extras.x86_64_64
yum -y remove containerd.io.x86_64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u5B89\u88C5\u9700\u8981\u7684\u8F6F\u4EF6\u5305
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum install -y yum-utils device-mapper-persistent-data lvm2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u914D\u7F6E\u4F7F\u7528\u963F\u91CC\u7684yum\u6E90
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u67E5\u770B\u963F\u91CC\u4E91\u4ED3\u5E93\u4E2D\u6240\u6709docker\u7248\u672C\uFF0C\u5E76\u9009\u62E9\u7279\u5B9A\u7248\u672C\u5B89\u88C5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum list docker-ce --showduplicates | sort -r
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u5B89\u88C5\u6700\u65B0\u7248\u672Cdocker-ce(docker\u793E\u533A\u3001ee\u4F01\u4E1A\u7248 ce\u4E3A\u793E\u533A\u7248)
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum -y install docker-ce
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u67E5\u770B\u5B89\u88C5\u7684docker\u7248\u672C
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u7ED9docker\u914D\u7F6E\u56FD\u5185\u955C\u50CF\u6E90
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vim /etc/docker/daemon.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo mkdir -p /etc/docker &amp;&amp;
sudo tee /etc/docker/daemon.json &lt;&lt;-&#39;EOF&#39;
{
    &quot;registry-mirrors&quot;: [
        &quot;https://5pfmrxk8.mirror.aliyuncs.com&quot;,
        &quot;http://hub-mirror.c.163.com&quot;,
        &quot;https://docker.mirrors.ustc.edu.cn&quot;,
        &quot;https://registry.docker-cn.com&quot;
    ]
}
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>daemon.json\u914D\u7F6E\u8BF4\u660E
registry-mirrors\uFF1Adocker\u56FD\u5185\u955C\u50CF\u6E90\u5730\u5740

\u5237\u65B0daemon.json\u914D\u7F6E\u542F\u52A8docker\u5E76\u8BBE\u7F6E\u4E3A\u5F00\u673A\u81EA\u542F\u52A8
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl daemon-reload &amp;&amp;
systemctl start docker &amp;&amp;
systemctl enable docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u67E5\u770B\u542F\u52A8\u72B6\u6001
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl status docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u542F\u52A8\u6545\u969C\u6392\u67E5
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl status docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u6D4B\u8BD5docker
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker run hello-world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u5B89\u88C5\u6210\u529F\u5219\u8FD4\u56DE\u4E0B\u9762\u4FE1\u606F
[root@localhost ~]# docker run hello-world
Unable to find image &#39;hello-world:latest&#39; locally
latest: Pulling from library/hello-world
2db29710123e: Pull complete 
Digest: sha256:2498fce14358aa50ead0cc6c19990fc6ff866ce72aeb5546e1d59caac3d0d60f
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
1. The Docker client contacted the Docker daemon.
2. The Docker daemon pulled the &quot;hello-world&quot; image from the Docker Hub.
	(amd64)
3. The Docker daemon created a new container from that image which runs the
	executable that produces the output you are currently reading.
4. The Docker daemon streamed that output to the Docker client, which sent it
	to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
$ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
https://hub.docker.com/

For more examples and ideas, visit:
https://docs.docker.com/get-started/
</code></pre><h3 id="_4-1-2-\u4E8C\u8FDB\u5236\u5305\u5B89\u88C5docker" tabindex="-1"><a class="header-anchor" href="#_4-1-2-\u4E8C\u8FDB\u5236\u5305\u5B89\u88C5docker" aria-hidden="true">#</a> 4.1.2.\u4E8C\u8FDB\u5236\u5305\u5B89\u88C5docker</h3><pre><code>\u521B\u5EFA\u5B58\u653Edocker\u5B89\u88C5\u5305\u7684\u76EE\u5F55-&gt;\u5207\u6362\u76EE\u5F55-&gt;\u5728\u8BE5\u76EE\u5F55\u4E2D\u4E0B\u8F7Ddocker\u4E8C\u8FDB\u5236\u5B89\u88C5\u5305-&gt;\u89E3\u538B\u5230/usr/bin/
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir -p  /opt/software/package/ &amp;&amp;
cd /opt/software/package/ &amp;&amp;
curl -fL -u software-1659095503164:3316a6a052e6f17880d37a00d38454342aceffdf \\
&quot;https://lingwh-generic.pkg.coding.net/coding-drive/software/docker-20.10.9.tgz?version=latest&quot; \\
-o docker-20.10.9.tgz &amp;&amp;
tar -xf docker-20.10.9.tgz &amp;&amp; mv docker/* /usr/bin/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u914D\u7F6Edocker\u79C1\u6709\u955C\u50CF	
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo mkdir -p /etc/docker &amp;&amp;
sudo tee /etc/docker/daemon.json &lt;&lt;-&#39;EOF&#39;
{
    &quot;registry-mirrors&quot;: [
        &quot;https://5pfmrxk8.mirror.aliyuncs.com&quot;,
        &quot;http://hub-mirror.c.163.com&quot;,
        &quot;https://docker.mirrors.ustc.edu.cn&quot;,
        &quot;https://registry.docker-cn.com&quot;
    ]
}
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u914D\u7F6Edocker.service\u6587\u4EF6
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u5237\u65B0\u914D\u7F6E\u6587\u4EF6\u540E\u542F\u52A8\u4E09\u53F0\u673A\u5668\u4E0A\u7684docker\u5E76\u8BBE\u7F6E\u4E3A\u5F00\u673A\u542F\u52A8
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl daemon-reload &amp;&amp;
systemctl start docker &amp;&amp;
systemctl enable docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u67E5\u770B\u542F\u52A8\u72B6\u6001
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl status docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u542F\u52A8\u6545\u969C\u6392\u67E5
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl status docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u6D4B\u8BD5docker
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker run hello-world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u5B89\u88C5\u6210\u529F\u5219\u8FD4\u56DE\u4E0B\u9762\u4FE1\u606F
[root@localhost ~]# docker run hello-world
Unable to find image &#39;hello-world:latest&#39; locally
latest: Pulling from library/hello-world
2db29710123e: Pull complete 
Digest: sha256:2498fce14358aa50ead0cc6c19990fc6ff866ce72aeb5546e1d59caac3d0d60f
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
1. The Docker client contacted the Docker daemon.
2. The Docker daemon pulled the &quot;hello-world&quot; image from the Docker Hub.
	(amd64)
3. The Docker daemon created a new container from that image which runs the
	executable that produces the output you are currently reading.
4. The Docker daemon streamed that output to the Docker client, which sent it
	to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
$ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
https://hub.docker.com/

For more examples and ideas, visit:
https://docs.docker.com/get-started/
</code></pre><h2 id="_4-2-docker\u542F\u52A8\u6545\u969C\u89E3\u51B3" tabindex="-1"><a class="header-anchor" href="#_4-2-docker\u542F\u52A8\u6545\u969C\u89E3\u51B3" aria-hidden="true">#</a> 4.2.docker\u542F\u52A8\u6545\u969C\u89E3\u51B3</h2><pre><code>\u9519\u8BEF\u4FE1\u606F
Job for docker.service failed because the control process exited with error code. 
See &quot;systemctl status docker.service&quot; and &quot;journalctl -xe&quot; for details.

\u89E3\u51B3\u65B9\u5F0F1\uFF1A\u4F7Fdocker\u4E0Efirewall\u5171\u5B58
\u5173\u95EDdocker
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl stop docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u8BBE\u7F6Efirewall\u4E0D\u62E6\u622Adocker
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>firewall-cmd --zone=trusted --remove-interface=docker0 --permanent
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u91CD\u65B0\u52A0\u8F7D\u9632\u706B\u5899\u914D\u7F6E
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>firewall-cmd --reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u91CD\u65B0\u542F\u52A8\u9632\u706B\u5899
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl restart firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u91CD\u65B0\u542F\u52A8docker
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl restart docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u89E3\u51B3\u65B9\u5F0F2\uFF1A\u68C0\u67E5daemon.json\u914D\u7F6E\u662F\u5426\u6B63\u786E
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>	cat /etc/docker/daemon.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u770B\u914D\u7F6E\u7684registry-mirrors\u662F\u5426\u6B63\u786E\uFF0C\u5982\u79C1\u670D\u524D\u662F\u5426\u5FD8\u8BB0\u4E86\u52A0http://
</code></pre><h2 id="_4-3-docker\u5BB9\u5668\u53EF\u89C6\u5316" tabindex="-1"><a class="header-anchor" href="#_4-3-docker\u5BB9\u5668\u53EF\u89C6\u5316" aria-hidden="true">#</a> 4.3.docker\u5BB9\u5668\u53EF\u89C6\u5316</h2><pre><code>\u67E5\u8BE2\u5F53\u524D\u6709\u54EA\u4E9Bportainer\u955C\u50CF
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker search portainer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u4E0B\u8F7Dportainer\u955C\u50CF
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker pull portainer/portainer:1.24.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u542F\u52A8\u5355\u673A\u7248portainer(\u9488\u5BF9\u5355\u673A\u7248docker)
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker run -d --name portainer \\
	-p 9000:9000 \\
	--restart=always \\
	-v /var/run/docker.sock:/var/run/docker.sock \\
	--privileged=true \\
	portainer/portainer:1.24.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u767B\u5F55portainer
\u767B\u5F55\u5730\u5740\uFF1Ahttp://192.168.0.4:9000/
\u7528\u6237\u540D/\u5BC6\u7801\uFF1Aadmin/portainer
\u5355\u673A\u7248\u9009\u62E9local\u5373\u53EF
</code></pre><h2 id="_4-4-\u642D\u5EFAdocke\u79C1\u670D" tabindex="-1"><a class="header-anchor" href="#_4-4-\u642D\u5EFAdocke\u79C1\u670D" aria-hidden="true">#</a> 4.4.\u642D\u5EFAdocke\u79C1\u670D</h2><h2 id="_4-4-1\u642D\u5EFAdocke\u5B98\u65B9\u79C1\u670D-\u4E0D\u5E26\u6709\u7528\u6237\u540D\u548C\u5BC6\u7801\u6821\u9A8C" tabindex="-1"><a class="header-anchor" href="#_4-4-1\u642D\u5EFAdocke\u5B98\u65B9\u79C1\u670D-\u4E0D\u5E26\u6709\u7528\u6237\u540D\u548C\u5BC6\u7801\u6821\u9A8C" aria-hidden="true">#</a> 4.4.1\u642D\u5EFAdocke\u5B98\u65B9\u79C1\u670D\uFF08\u4E0D\u5E26\u6709\u7528\u6237\u540D\u548C\u5BC6\u7801\u6821\u9A8C\uFF09</h2><pre><code>\u62C9\u53D6\u4ED3\u5E93\u955C\u50CF
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker pull registry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u542F\u52A8\u6CE8\u518C\u4ED3\u5E93\u670D\u52A1\u5668
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker run -d --name registry_official \\
	-p 5000:5000 \\
	--restart=always \\
	-v /registry/public/repos:/var/lib/registry \\
	--privileged=true \\
	registry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u914D\u7F6E\u79C1\u670D\u5730\u5740\u548C\u955C\u50CF\u6E90\u5730\u5740\u5E76\u4E14\u5C06\u79C1\u670D\u5730\u5740\u52A0\u5165\u5230\u955C\u50CF\u6E90\u5217\u8868\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u4ECE\u79C1\u670D\u4E2D\u62C9\u53D6\u955C\u50CF\u4E86

\u7ED9docker\u914D\u7F6E\u79C1\u670D
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>	vim /etc/docker/daemon.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
	&quot;insecure-registries&quot;:[&quot;192.168.0.4:5000&quot;,&quot;192.168.0.4:5001&quot;],
	&quot;registry-mirrors&quot;: [
			&quot;https://5pfmrxk8.mirror.aliyuncs.com&quot;,
			&quot;http://hub-mirror.c.163.com&quot;,
			&quot;https://docker.mirrors.ustc.edu.cn&quot;,
			&quot;https://registry.docker-cn.com&quot;,
			&quot;http://192.168.0.4:5000&quot;,
			&quot;http://192.168.0.4:5001&quot;
	]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u6216
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo mkdir -p /etc/docker &amp;&amp;
sudo tee /etc/docker/daemon.json &lt;&lt;-&#39;EOF&#39;
{
	&quot;insecure-registries&quot;:[&quot;192.168.0.4:5000&quot;,&quot;192.168.0.4:5001&quot;],
	&quot;registry-mirrors&quot;: [
			&quot;https://5pfmrxk8.mirror.aliyuncs.com&quot;,
			&quot;http://hub-mirror.c.163.com&quot;,
			&quot;https://docker.mirrors.ustc.edu.cn&quot;,
			&quot;https://registry.docker-cn.com&quot;,
			&quot;http://192.168.0.4:5000&quot;,
			&quot;http://192.168.0.4:5001&quot;
	]
}
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>daemon.json\u914D\u7F6E\u8BF4\u660E
insecure-registries\uFF1Adocker\u4FE1\u4EFB\u7684\u79C1\u670D\u5730\u5740
registry-mirrors\uFF1Adocker\u56FD\u5185\u955C\u50CF\u6E90\u5730\u5740

daemon.json\u914D\u7F6E\u6CE8\u610F\u4E8B\u9879\uFF1A\u628A\u79C1\u670D\u914D\u7F6E\u5230registry-mirrors\u65F6\uFF0C\u4E00\u5B9A\u8981\u6B63\u786E\u7684\u52A0\u4E0A http://\u524D\u7F00\uFF1A	
\u6B63\u786E\u683C\u5F0F: http://192.168.0.4:5000
\u9519\u8BEF\u683C\u5F0F: 192.168.0.4:5001

\u653E\u884C5000\u7AEF\u53E3\u5E76\u4FDD\u8BC15000\u7AEF\u53E3\u786E\u5B9E\u88AB\u653E\u5F00
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>firewall-cmd --permanent --add-port=5000/tcp &amp;&amp;
firewall-cmd --reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u5237\u65B0daemon\u5E76\u91CD\u542Fdocker
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl daemon-reload &amp;&amp; 
systemctl restart docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u9A8C\u8BC1\u4ED3\u5E93\u662F\u5426\u642D\u5EFA\u6210\u529F
\u8BBF\u95EE:http://192.168.0.4:5000/v2/_catalog\uFF0C\u770B\u5230{&quot;repositories&quot;:[]}\u8868\u793A\u79C1\u6709\u4ED3\u5E93\u642D\u5EFA\u6210\u529F\u4E14\u5185\u5BB9\u4E3A\u7A7A

\u5F7B\u5E95\u5220\u9664\u79C1\u670D\u4E2D\u7684\u955C\u50CF:\u6CE8\u610F\u8FD9\u4E2A\u8DEF\u5F84\u662F\u8981\u770Bregistry\u5177\u4F53\u6302\u8F7D\u5230linux\u4E0A\u4EC0\u4E48\u4F4D\u7F6E\u7684
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>rm -rf /registry/public/repos/docker/registry/v2/repositories/springcloud-eureka/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-4-2\u642D\u5EFAdocke\u5B98\u65B9\u79C1\u670D-\u5E26\u6709\u7528\u6237\u540D\u548C\u5BC6\u7801\u6821\u9A8C" tabindex="-1"><a class="header-anchor" href="#_4-4-2\u642D\u5EFAdocke\u5B98\u65B9\u79C1\u670D-\u5E26\u6709\u7528\u6237\u540D\u548C\u5BC6\u7801\u6821\u9A8C" aria-hidden="true">#</a> 4.4.2\u642D\u5EFAdocke\u5B98\u65B9\u79C1\u670D\uFF08\u5E26\u6709\u7528\u6237\u540D\u548C\u5BC6\u7801\u6821\u9A8C\uFF09</h2><pre><code>\u62C9\u53D6\u4ED3\u5E93\u955C\u50CF
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker pull registry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u52A0\u5BC6\u8BA4\u8BC1\u914D\u7F6E
\u521B\u5EFA\u5B58\u653E\u52A0\u5BC6\u540E\u7528\u6237\u4FE1\u606F\u7684\u7528\u6237\u540D\u5BC6\u7801
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir -p /opt/docker/auth/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u5B89\u88C5httpd\u5DE5\u5177
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum -y install httpd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u751F\u6210\u5E26\u6709\u52A0\u5BC6\u540E\u7528\u6237\u4FE1\u606F\u7684\u7528\u6237\u540D\u5BC6\u7801
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>htpasswd -Bbn docker 123456  &gt;/opt/docker/auth/htpasswd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u542F\u52A8\u6CE8\u518C\u4ED3\u5E93\u670D\u52A1\u5668(-p:\u7B2C\u4E00\u4E2A5000\u662F\u672C\u5730\u673A\u5668\u7AEF\u53E3,\u7B2C\u4E8C\u4E2A5000\u662Fdocker\u5BB9\u5668\u4E2D\u7AEF\u53E3)
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker run -d --name registry_official_auth  \\
	-p 5000:5000 --restart=always \\
	-v \`pwd\`/opt/docker/auth:/opt/docker/auth  \\
	-v /opt/docker/registry:/var/lib/registry  \\
	-e &quot;REGISTRY_AUTH=htpasswd&quot;  \\
	-e &quot;REGISTRY_AUTH_HTPASSWD_REALM=Registry Realm&quot;  \\
	-e REGISTRY_AUTH_HTPASSWD_PATH=/opt/docker/auth/htpasswd \\
	registry:latest	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u7ED9docker\u914D\u7F6E\u79C1\u670D
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>	vim /etc/docker/daemon.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
	&quot;insecure-registries&quot;:[&quot;192.168.0.4:5000&quot;,&quot;192.168.0.4:5001&quot;],
	&quot;registry-mirrors&quot;: [
			&quot;https://5pfmrxk8.mirror.aliyuncs.com&quot;,
			&quot;http://hub-mirror.c.163.com&quot;,
			&quot;https://docker.mirrors.ustc.edu.cn&quot;,
			&quot;https://registry.docker-cn.com&quot;,
			&quot;http://192.168.0.4:5000&quot;,
			&quot;http://192.168.0.4:5001&quot;
	]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>daemon.json\u914D\u7F6E\u8BF4\u660E
insecure-registries\uFF1Adocker\u4FE1\u4EFB\u7684\u79C1\u670D\u5730\u5740
registry-mirrors\uFF1Adocker\u56FD\u5185\u955C\u50CF\u6E90\u5730\u5740

daemon.json\u914D\u7F6E\u6CE8\u610F\u4E8B\u9879\uFF1A\u628A\u79C1\u670D\u914D\u7F6E\u5230registry-mirrors\u65F6\uFF0C\u4E00\u5B9A\u8981\u6B63\u786E\u7684\u52A0\u4E0A http://\u524D\u7F00\uFF1A	
\u6B63\u786E\u683C\u5F0F: http://192.168.0.4:5000
\u9519\u8BEF\u683C\u5F0F: 192.168.0.4:5001
\u653E\u884C5000\u7AEF\u53E3\u5E76\u4FDD\u8BC15000\u7AEF\u53E3\u786E\u5B9E\u88AB\u653E\u5F00
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>firewall-cmd --permanent --add-port=5000/tcp &amp;&amp;
firewall-cmd --reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u5237\u65B0docker daemon\u5E76\u91CD\u542Fdocker
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl daemon-reload &amp;&amp; systemctl restart docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u9A8C\u8BC1\u4ED3\u5E93\u662F\u5426\u642D\u5EFA\u6210\u529F
\u8BBF\u95EE:http://192.168.0.4:5000/v2/_catalog\uFF0C\u770B\u5230{&quot;repositories&quot;:[]}\u8868\u793A\u79C1\u6709\u4ED3\u5E93\u642D\u5EFA\u6210\u529F\u4E14\u5185\u5BB9\u4E3A\u7A7A

\u5F7B\u5E95\u5220\u9664\u79C1\u670D\u4E2D\u7684\u955C\u50CF:\u6CE8\u610F\u8FD9\u4E2A\u8DEF\u5F84\u662F\u8981\u770Bregistry\u5177\u4F53\u6302\u8F7D\u5230linux\u4E0A\u4EC0\u4E48\u4F4D\u7F6E\u7684
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>rm -rf /registry/public/repos/docker/registry/v2/repositories/springcloud-eureka/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-4-3-\u642D\u5EFAharbor\u79C1\u670D" tabindex="-1"><a class="header-anchor" href="#_4-4-3-\u642D\u5EFAharbor\u79C1\u670D" aria-hidden="true">#</a> 4.4.3.\u642D\u5EFAharbor\u79C1\u670D</h2><h3 id="_4-4-3-1-harbor\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_4-4-3-1-harbor\u7B80\u4ECB" aria-hidden="true">#</a> 4.4.3.1.harbor\u7B80\u4ECB</h3><pre><code>Harbor\u662F\u4E00\u4E2A\u7528\u4E8E\u5B58\u50A8\u548C\u5206\u53D1Docker\u955C\u50CF\u7684\u4F01\u4E1A\u7EA7Registry\u670D\u52A1\u5668\uFF0C\u867D\u7136Docker\u5B98\u65B9\u4E5F\u63D0\u4F9B\u4E86\u516C\u5171\u7684\u955C\u50CF\u4ED3\u5E93\uFF0C\u4F46\u662F
\u4ECE\u5B89\u5168\u548C\u6548\u7387\u7B49\u65B9\u9762\u8003\u8651\uFF0C\u90E8\u7F72\u4F01\u4E1A\u5185\u90E8\u7684\u79C1\u6709\u73AF\u5883Registry\u662F\u975E\u5E38\u5FC5\u8981\u7684\uFF0Charbor\u548Cdocker\u4E2D\u592E\u4ED3\u5E93\u7684\u5173\u7CFB\u5C31\u7C7B\u4F3C\u4E8E
nexus\u548CMaven\u4E2D\u592E\u4ED3\u5E93\u7684\u5173\u7CFB\uFF0Charbor\u9664\u4E86\u5B58\u50A8\u548C\u5206\u53D1\u955C\u50CF\u5916\u8FD8\u5177\u6709\u7528\u6237\u7BA1\u7406\uFF0C\u9879\u76EE\u7BA1\u7406\uFF0C\u914D\u7F6E\u7BA1\u7406\u548C\u65E5\u5FD7\u67E5\u8BE2\uFF0C\u9AD8\u53EF
\u7528\u90E8\u7F72\u7B49\u4E3B\u8981\u529F\u80FD\u3002		
</code></pre><h3 id="_4-4-3-2-\u642D\u5EFAdocker-compose" tabindex="-1"><a class="header-anchor" href="#_4-4-3-2-\u642D\u5EFAdocker-compose" aria-hidden="true">#</a> 4.4.3.2.\u642D\u5EFAdocker-compose</h3><pre><code>\u7248\u672C\u8BF4\u660E
	2.6.1
	
\u4E0B\u8F7Ddocker-compose
\u5728github\u4E0B\u8F7Ddocker-compose2.6.1

\u4E0A\u4F20\u5230\u670D\u52A1\u5668
\u4E0A\u4F20\u5230/opt/software/package

\u8D4B\u4E88\u8FD0\u884C\u6743\u9650\u5E76\u590D\u5236\u5230/usr/local/bin/docker-compose
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd /opt/software/package &amp;&amp;
sudo chmod +x docker-compose-linux-x86_64 &amp;&amp;
cp docker-compose-linux-x86_64 /usr/local/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u67E5\u770B\u662F\u5426\u5B89\u88C5\u6210\u529F
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker-compose --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-4-3-3-\u5B89\u88C5harbor" tabindex="-1"><a class="header-anchor" href="#_4-4-3-3-\u5B89\u88C5harbor" aria-hidden="true">#</a> 4.4.3.3.\u5B89\u88C5harbor</h3><pre><code>\u7279\u522B\u6CE8\u610F
\u6CE8\u610Fdocker\u7684\u7248\u672C,\u4F4E\u7248\u672C\u7684docker\u4E0D\u80FD\u8FD0\u884Charbor2.5
	
\u7248\u672C\u8BF4\u660E
	2.5
	
\u5728github\u4E0B\u8F7Dharbor2.5.2\uFF0C\u4E0A\u4F20\u5230/opt/software/package
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd /opt/software/package
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u89E3\u538B\u5230/opt/software/install
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>tar -zxvf harbor-offline-installer-v2.5.2.tgz -C /opt/software/install
cd /opt/software/install/harbor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u590D\u5236\u4E00\u4EFDharbor.yml.tmpl\uFF0C\u91CD\u547D\u540D\u4E3Aharbor.yml\u5E76\u4FEE\u6539harbor.yml
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cp harbor.yml.tmpl harbor.yml &amp;&amp;
vim harbor.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u4FEE\u6539harbor.yml
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>	\u5177\u4F53\u4FEE\u6539\u4EE5\u4E0B\u5185\u5BB9
	\u4FEE\u6539hostname
	hostname: 192.168.0.4
	\u4FEE\u6539\u7AEF\u53E3
	port:5001
	\u6CE8\u91CA\u6389https\u76F8\u5173\u90E8\u5206
	#https:
		# https port for harbor, default is 443
		# port: 443
		# The path of cert and key files for nginx
		#certificate: /your/certificate/path
		#private_key: /your/private/key/path
	\u4FEE\u6539\u5BC6\u7801
		harbor_admin_password: 123456
	
	\u5B89\u88C5docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>./install.sh</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>	\u6267\u884C\u5B8C\u6210\u540E\uFF0C\u4F7F\u7528docker images\u67E5\u770Bharbor\u76F8\u5173\u955C\u50CF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>docker images</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>	\u542F\u52A8harbor
	\u4E00\u6B21\u6027\u542F\u52A8\u6240\u6709harbor\u76F8\u5173\u7684\u5BB9\u5668,\u4E00\u822C\u6267\u884C\u5B8C./install.sh\u5C31\u5DF2\u7ECF\u542F\u52A8\u4E86\u76F8\u5173\u7684\u5BB9\u5668
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>docker-compose up -d</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>	\u8BA9docker\u4FE1\u4EFBharbor\u79C1\u670D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>vim /etc/docker/daemon.json,\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>	\u914D\u7F6EDocker(Register)\u6CE8\u518C\u4ED3\u5E93\u670D\u52A1\u5668\u4FE1\u4EFB192.168.0.4:5001:
	{&quot;insecure-registries&quot;:[&quot;192.168.0.4:5001&quot;]}
	
	\u91CD\u65B0\u52A0\u8F7Ddocker daemon\u914D\u7F6E\u6587\u4EF6\u5E76\u91CD\u542Fdocker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>systemctl daemon-reload &amp;&amp; systemctl restart docker</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>	\u767B\u5F55harbor\u9996\u9875(\u5BC6\u7801\u53EF\u4EE5\u53BBharbor.yml\u4E2D\u67E5\u770B)
	\u8BBF\u95EE\u5730\u5740\uFF1Ahttp://192.168.0.4:5001/
	\u7528\u6237\u540D/\u5BC6\u7801\uFF1Aadmin/123456
		
	\u5728Harbor\u4E2D\u521B\u5EFA\u9879\u76EE,\u63A8\u9001\u7684\u65F6\u5019\u53EF\u4EE5\u7528
	\u5982:springcloud-eureka	

## 4.5.docker\u5B98\u65B9\u79C1\u670D\u53EF\u89C6\u5316
### 4.5.1docker-registry-web\u65B9\u6848
	\u4E0B\u8F7Ddocker pull hyper/docker-registry-web\u955C\u50CF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker pull hyper/docker-registry-web</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>	\u542F\u52A8docker-registry-web
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,267),f=n("docker run -d --restart=always "),y=e("br",null,null,-1),q=n(" -p 9002:8080 "),_=e("br",null,null,-1),E=n(" --name registry-web "),I=e("br",null,null,-1),N=n(" --link registry_default "),T=e("br",null,null,-1),S=n(" -e REGISTRY_URL="),w={href:"http://192.168.0.4:5000/v2",target:"_blank",rel:"noopener noreferrer"},R=n("http://192.168.0.4:5000/v2"),A=n(),C=e("br",null,null,-1),O=n(" -e REGISTRY_NAME=192.168.0.4:5000 "),P=e("br",null,null,-1),M=n(" hyper/docker-registry-web:latest"),D=d(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
## 4.6.\u5236\u4F5Cdocker\u955C\u50CF\u5E76\u4E0A\u4F20\u5230\u79C1\u670D

### 4.6.1.\u5236\u4F5CDokcer\u955C\u50CF		
	\u8FDB\u5165/opt/software/package\uFF0C\u5E76\u5728\u8FD9\u4E2A\u76EE\u5F55\u4E2D\u4E0B\u8F7Djdk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),L=n("cd /opt/software/package && wget "),U={href:"https://repo.huaweicloud.com/java/jdk/8u181-b13/jdk-8u181-linux-x64.tar.gz",target:"_blank",rel:"noopener noreferrer"},j=n("https://repo.huaweicloud.com/java/jdk/8u181-b13/jdk-8u181-linux-x64.tar.gz"),F=d(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>	\u7F16\u5199Dockerfile(Dockerfile\u5185\u5BB9\u5982\u4E0B)	
	
	#\u57FA\u4E8Ecentos\u57FA\u7840\u955C\u50CF\u6784\u5EFA
	FROM centos	
	#\u4F5C\u8005
	MAINTAINER lingwh
	#\u5C06jdk\u6DFB\u52A0\u5230\u57FA\u7840\u955C\u50CF\u4E2D
	ADD jdk-8u181-linux-x64.tar.gz /usr/local
	#\u8BBE\u7F6Ejava\u76F8\u5173\u7684\u73AF\u5883\u53D8\u91CF
	ENV JAVA_HOME /usr/local/jdk1.8.0_181
	ENV JRE_HOME \${JAVA_HOME}/jre
	ENV CLASSPATH .:\${JAVA_HOME}/lib:\${JRE_HOME}/lib
	ENV PATH \${JAVA_HOME}/bin:$PATH
	#\u8F93\u51FAJava\u7248\u672C\u4FE1\u606F
	CMD [&quot;java&quot;,&quot;-version&quot;]		
					
	\u5728\u5F53\u524D\u76EE\u5F55\u4E2D\u6267\u884C\u6784\u5EFA\u955C\u50CF\u7684\u547D\u4EE4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker build -t=&#39;jdk/jdk1.8.0_181&#39; .</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>	\u67E5\u770B\u5230\u521A\u624D\u5236\u4F5C\u597D\u7684\u955C\u50CF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>docker images</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>	\u521B\u5EFA\u5BB9\u5668
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>docker run -it --name=myjdk8 \u955C\u50CFid /bin/bash</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
### 4.6.2.\u4E0A\u4F20\u672C\u5730jdk\u955C\u50CF\u5230\u79C1\u670D
	\u7ED9\u955C\u50CF\u6253\u6807\u7B7E
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker tag jdk/jdk1.8.0_181 192.168.0.4:5000/jdk/jdk1.8.0_181:latest #\u66F4\u6539\u955C\u50CF\u7684TAG\u6807\u7B7E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>	\u4E0A\u4F20\u6807\u8BB0\u7684\u955C\u50CF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>docker push 192.168.0.4:5000/jdk/jdk1.8.0_181:latest</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>	\u67E5\u770B\u63A8\u9001\u5230\u79C1\u670D\u4E2D\u7684\u955C\u50CF
	\u8BBF\u95EE:http://192.168.0.4:5000/v2/_catalog,\u770B\u5230:{&quot;repositories&quot;:[&quot;jdk/jdk1.8.0_181&quot;]}

## 4.7.Docker\u4E2D\u5B89\u88C5\u5E38\u7528\u8F6F\u4EF6
### 4.7.1.Docker\u5B89\u88C5mysql
	\u4E0B\u8F7Dmysql\u955C\u50CF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker pull mysql</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>	\u542F\u52A8mysql\u5BB9\u5668
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>docker run -di --name mysql -p 3306:3306 --restart=always -e MYSQL_ROOT_PASSWORD=123456 mysql</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>	\u5173\u95EDdocker\u4E2D\u7684mysql\u5BB9\u5668
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>myqldocker exec -it mysql bash</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>### 4.7.2.Docker\u4E2D\u5B89\u88C5consul
	\u4E0B\u8F7Dconsul\u955C\u50CF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>docker pull consul</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>	\u542F\u52A8consul\u5BB9\u5668
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>docker run -d --name=consul <br> -p 8500:8500 <br> --restart=always <br> agent -server -bootstrap -ui -node=1 -client=&#39;0.0.0.0&#39; <br> consul:latest</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
### 4.7.3.Docker\u5BB9\u5668\u4E2D\u5B89\u88C5vim	 
	\u8FDB\u5165\u5BB9\u5668\u5185\u90E8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker exec -it \u5BB9\u5668id /bin/bash</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>	\u5907\u4EFD\u65E7\u7684\u6E90
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>mv /etc/apt/sources.list /etc/apt/sources.list.bak</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>	\u5199\u5165\u65B0\u7684\u6E90
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,25),V=n('echo "deb '),B={href:"http://mirrors.163.com/debian/",target:"_blank",rel:"noopener noreferrer"},K=n("http://mirrors.163.com/debian/"),W=n(' jessie main non-free contrib" '),G=e("br",null,null,-1),$=n(' >> /etc/apt/sources.list && echo "deb '),H={href:"http://mirrors.163.com/debian/",target:"_blank",rel:"noopener noreferrer"},z=n("http://mirrors.163.com/debian/"),Y=n(' jessie-proposed-updates main non-free contrib" '),J=e("br",null,null,-1),Q=n(' >>/etc/apt/sources.list && echo "deb-src '),X={href:"http://mirrors.163.com/debian/",target:"_blank",rel:"noopener noreferrer"},Z=n("http://mirrors.163.com/debian/"),ee=n(' jessie main non-free contrib" '),ne=e("br",null,null,-1),ie=n(' >>/etc/apt/sources.list && echo "deb-src '),se={href:"http://mirrors.163.com/debian/",target:"_blank",rel:"noopener noreferrer"},de=n("http://mirrors.163.com/debian/"),re=n(' jessie-proposed-updates main non-free contrib" '),te=e("br",null,null,-1),ae=n(" >>/etc/apt/sources.list"),le=d(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
	\u66F4\u65B0\u6E90
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>apt update</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>	\u5B89\u88C5vim
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>apt-get install vim</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
### 4.7.3.docker\u5B89\u88C5elk
	\u4E0B\u8F7Delk\u955C\u50CF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker pull sebp/elk:6.8.22</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>	\u542F\u52A8ELK\u5BB9\u5668\uFF0C\u6307\u5B9A\u6700\u5C0F\u5185\u5B58\u548C\u6700\u5927\u5185\u5B58\uFF0C\u5E76\u6620\u5C04\u76F8\u5173\u7AEF\u53E3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>docker run -d --name elk <br> --restart always <br> -p 5601:5601 <br> -p 9200:9200 <br> -p 5044:5044 <br> -e ES_MIN_MEM=1024m <br> -e ES_MAX_MEM=2048 <br> sebp/elk:6.8.22</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>	\u5F00\u653Eelk\u9700\u8981\u7528\u7684\u7AEF\u53E3,\u5E76\u4E14\u91CD\u65B0\u8F7D\u5165\u7AEF\u53E3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>firewall-cmd --add-port=5601/tcp --permanent &amp;&amp; firewall-cmd --reload &amp;&amp; firewall-cmd --add-port=9200/tcp --permanent &amp;&amp; firewall-cmd --reload &amp;&amp; firewall-cmd --add-port=5044/tcp --permanent &amp;&amp; firewall-cmd --reload</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>	\u8BBF\u95EEKibana
	192.168.0.4:5601
	
	\u8FDB\u5165ELK\u4E2D\u8FDB\u884C\u914D\u7F6E
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker exec -it elk /bin/bash</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>	\u4FEE\u6539logstash\u914D\u7F6E,\u628A\u4E0B\u9762\u5185\u5BB9\u7C98\u8D34\u8FDB\u53BB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>vim /etc/logstash/conf.d/02-beats-input.conf</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div><p>input{ tcp{ host =&gt; &quot;0.0.0.0&quot; port =&gt; 5044 codec=&gt; json_lines } } output{ elasticsearch{ hosts =&gt; [&quot;192.168.0.4:9200&quot;] action =&gt; &quot;index&quot; index =&gt; &quot;%{[appName]}-%{+YYYY.MM.dd}&quot; } }</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>	\u914D\u7F6E\u8BF4\u660E:
	input\u4EE3\u8868\u6570\u636E\u8F93\u5165\u914D\u7F6E \uFF0C logstatsh\u7684\u5F00\u653E\u7AEF\u53E3\u662F 5044
	output\u4EE3\u8868\u6570\u636E\u8F93\u51FA\u914D\u7F6E\uFF0C\u8F93\u51FA\u5230elasticsearch, hosts\u662Fes\u7684\u5730\u5740192.168.0.4:9200
	
	\u9000\u51FA\u5BB9\u5668
\`\`	
exit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u91CD\u542FELK\u5BB9\u5668
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker restart elk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u6CE8\u610F\u4E8B\u9879	
\u5F53\u628Adocker\u548Ccentos7\u7684\u51B2\u7A81\u89E3\u51B3\u540E,\u9700\u8981\u8BA9centos\u653E\u884Celk(\u5177\u4F53\u662Fes)\u7684\u90E8\u7F72\u5730\u5740

\u67E5\u770B\u5BB9\u5668\u8BE6\u7EC6\u4FE1\u606F
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker inspect \u5BB9\u5668id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u67E5\u627E\u5230elk(\u5177\u4F53\u662Fes)\u5BB9\u5668\u7684ip,\u5047\u8BBE\u4E3A172.17.0.2

\u6267\u884C\u653E\u884C\u64CD\u4F5C
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>firewall-cmd --zone=trusted --add-source=172.17.0.2/16 --permanent
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u91CD\u65B0\u8F7D\u5165\u9632\u706B\u5899\u914D\u7F6E
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>firewall-cmd --reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u91CD\u542F\u9632\u706B\u5899
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl restart firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>docker\u542F\u52A8elk\u62A5\u9519/\u6216\u4E00\u76F4\u91CD\u542F\u6545\u969C\u89E3\u51B3
\u9519\u8BEF\u65E5\u5FD7\uFF1A
max virtual memory areas vm.max_map_count [65530] is too low, increase to at least
\u89E3\u51B3\u65B9\u5F0F\uFF0C\u5728\u5BBF\u4E3B\u673A\u6267\u884C
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo sysctl -w vm.max_map_count=262144
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_5-centos\u642D\u5EFArancher" tabindex="-1"><a class="header-anchor" href="#_5-centos\u642D\u5EFArancher" aria-hidden="true">#</a> 5.Centos\u642D\u5EFARancher</h1><pre><code>\u4E0B\u8F7Drancher
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker pull rancher/server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u542F\u52A8rancher
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker run -di --name=rancher -p9003:8080 rancher/server:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u4F7F\u7528rancher\u6269\u5BB9/\u7F29\u5BB9\u6CE8\u610F\u4E8B\u9879
\u5982\u679C\u8981\u4F7F\u7528\u6269\u5BB9\u6216\u8005\u7F29\u5BB9\u529F\u80FD,\u4E0D\u8981\u914D\u7F6Eeureka\u7684\u5982\u4E0B\u4FE1\u606F
eureka:
  instance:
	#\u4F7F\u7528rancher\u6269\u5BB9\u4E0D\u80FD\u914D\u7F6Einstance-id,\u5426\u5219\u4F1A\u51FA\u95EE\u9898
	#instance-id: \${spring.application.name} 
	#\u4F7F\u7528rancher\u6269\u5BB9\u4E0D\u80FD\u914D\u7F6Eiip-address,\u5426\u5219\u4F1A\u51FA\u95EE\u9898
	#ip-address: 192.168.0.4				
</code></pre><h1 id="_6-centos\u642D\u5EFAminikube" tabindex="-1"><a class="header-anchor" href="#_6-centos\u642D\u5EFAminikube" aria-hidden="true">#</a> 6.Centos\u642D\u5EFAMinikube</h1><h2 id="_6-1-minikube\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_6-1-minikube\u4ECB\u7ECD" aria-hidden="true">#</a> 6.1.minikube\u4ECB\u7ECD</h2><pre><code>Minikube\u8FD9\u4E2A\u5DE5\u5177\u652F\u6301\u5728\u865A\u62DF\u673A\u4E0A\u8FD0\u884C\u4E00\u5957\u5355\u8282\u70B9\u7684k8s\u96C6\u7FA4
</code></pre><h2 id="_6-2-\u7248\u672C\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_6-2-\u7248\u672C\u8BF4\u660E" aria-hidden="true">#</a> 6.2.\u7248\u672C\u8BF4\u660E</h2><pre><code>minikube:1.2.6 kubectl client:1.18.0
</code></pre><h2 id="_6-3-\u5F00\u542Fvmware\u865A\u62DF\u5316" tabindex="-1"><a class="header-anchor" href="#_6-3-\u5F00\u542Fvmware\u865A\u62DF\u5316" aria-hidden="true">#</a> 6.3.\u5F00\u542FVmware\u865A\u62DF\u5316</h2><pre><code>\u67E5\u770B\u662F\u5426\u652F\u6301\u865A\u62DF\u5316\uFF0C\u5F00\u59CB\u5B89\u88C5\u524D\uFF0C\u5148\u67E5\u770B\u672C\u5730\u673A\u5668\u662F\u5426\u652F\u6301\u865A\u62DF\u5316\uFF0C\u6709\u8F93\u51FA\u5C31\u652F\u6301
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>grep -E --color &#39;vmx|svm&#39; /proc/cpuinfo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u5F00\u542F\u865A\u62DF\u5316
Vmware Workstation -&gt;Centos 64\u53F3\u952E\u83DC\u5355 \u2014&gt; \u8BBE\u7F6E 
	-&gt; \u5904\u7406\u5668 -&gt;\u52FE\u9009 \u865A\u62DF\u5316IntelVT-x/EPT \u6216 ADM-V/RVI(V)

\u8BBE\u7F6E\u5904\u7406\u5668\u6570\u91CF\u8BBE\u7F6E\u4E3A\u5927\u4E8E\u7B49\u4E8E2,\u5185\u5B58\u5927\u4E8E\u7B49\u4E8E2G
</code></pre><h2 id="_6-4-\u5B89\u88C5kubectl" tabindex="-1"><a class="header-anchor" href="#_6-4-\u5B89\u88C5kubectl" aria-hidden="true">#</a> 6.4.\u5B89\u88C5kubectl</h2><pre><code>\u7B80\u4ECB
kubectl \u662F\u4E00\u4E2A\u7528\u6765\u8DDF K8S \u96C6\u7FA4\u8FDB\u884C\u4EA4\u4E92\u7684\u547D\u4EE4\u884C\u5DE5\u5177
	
\u4E0B\u8F7Dkubectl\uFF0C\u4E0A\u4F20\u5230/opt/software/package\uFF0C\u8D4B\u4E88\u53EF\u8FD0\u884C\u6743\u9650,\u5E76\u653E\u5165/usr/local/bin/\u76EE\u5F55\u4E0B
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>chmod +x ./kubectl &amp;&amp; cp ./kubectl /usr/local/bin/kubectl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u67E5\u770Bkubectl\u7248\u672C
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl version --client
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_6-5-\u5B89\u88C5minikube" tabindex="-1"><a class="header-anchor" href="#_6-5-\u5B89\u88C5minikube" aria-hidden="true">#</a> 6.5.\u5B89\u88C5minikube</h2><pre><code>\u4E0B\u8F7Dminikube
\u5230 https://github.com/kubernetes/minikube/releases \u627E\u5230minikube-linux-amd64\u5E76\u4E0B\u8F7D

\u4E0A\u4F20\u5230/opt/software/package

\u8D4B\u4E88\u8FD0\u884C\u6743\u9650\u5E76\u590D\u5236\u5230/usr/local/bin/minikube
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>chmod +x ./minikube-linux-amd64 &amp;&amp; cp ./minikube-linux-amd64 /usr/local/bin/minikube
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_6-6-\u4F7F\u7528\u963F\u91CC\u4E91\u52A0\u901Fdocker-hub" tabindex="-1"><a class="header-anchor" href="#_6-6-\u4F7F\u7528\u963F\u91CC\u4E91\u52A0\u901Fdocker-hub" aria-hidden="true">#</a> 6.6.\u4F7F\u7528\u963F\u91CC\u4E91\u52A0\u901Fdocker hub</h2><pre><code>\u767B\u5F55\u963F\u91CC\u4E91docker\u76F8\u5173\u9875\u9762
\u8BBF\u95EE\uFF1Ahttps://cr.console.aliyun.com/cn-hangzhou/instances/mirrors
\u767B\u9646-&gt;\u5DE6\u4FA7\u83DC\u5355\u9009\u4E2D\u955C\u50CF\u52A0\u901F\u5668-&gt;\u67E5\u770B\u52A0\u901F\u955C\u50CF\u5730\u5740 https://ngviu28h.mirror.aliyuncs.com
</code></pre><h2 id="_6-7-\u542F\u52A8minikube" tabindex="-1"><a class="header-anchor" href="#_6-7-\u542F\u52A8minikube" aria-hidden="true">#</a> 6.7.\u542F\u52A8minikube</h2><pre><code>\u6CE8\u610F\u4E8B\u9879
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-8-minikube\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_6-8-minikube\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> 6.8.minikube\u5E38\u7528\u547D\u4EE4</h2><pre><code>\u67E5\u770Bminikube\u65E5\u5FD7
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_7-kubeadm\u642D\u5EFAkubernetes" tabindex="-1"><a class="header-anchor" href="#_7-kubeadm\u642D\u5EFAkubernetes" aria-hidden="true">#</a> 7.kubeadm\u642D\u5EFAKubernetes</h1><h2 id="_7-1-\u7279\u522B\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_7-1-\u7279\u522B\u8BF4\u660E" aria-hidden="true">#</a> 7.1.\u7279\u522B\u8BF4\u660E</h2><pre><code>\u4F7F\u7528kubeadm\u642D\u5EFAKubernetes
</code></pre><h2 id="_7-2-\u6240\u6709\u8282\u70B9\u8BBE\u7F6E\u5BF9\u5E94\u4E3B\u673A\u540D" tabindex="-1"><a class="header-anchor" href="#_7-2-\u6240\u6709\u8282\u70B9\u8BBE\u7F6E\u5BF9\u5E94\u4E3B\u673A\u540D" aria-hidden="true">#</a> 7.2.\u6240\u6709\u8282\u70B9\u8BBE\u7F6E\u5BF9\u5E94\u4E3B\u673A\u540D</h2><pre><code>master\u8282\u70B9
hostnamectl set-hostname master
slave1\u8282\u70B9
hostnamectl set-hostname slave1
slave2\u8282\u70B9	
hostnamectl set-hostname slave2
</code></pre><h2 id="_7-3-\u6240\u6709\u8282\u70B9\u4FEE\u6539hosts" tabindex="-1"><a class="header-anchor" href="#_7-3-\u6240\u6709\u8282\u70B9\u4FEE\u6539hosts" aria-hidden="true">#</a> 7.3.\u6240\u6709\u8282\u70B9\u4FEE\u6539hosts</h2><pre><code>vim /etc/hosts
192.168.0.6 master
192.168.0.7 slave1
192.168.0.8 slave2
</code></pre><h2 id="_7-4-\u6240\u6709\u8282\u70B9\u5173\u95EDselinux" tabindex="-1"><a class="header-anchor" href="#_7-4-\u6240\u6709\u8282\u70B9\u5173\u95EDselinux" aria-hidden="true">#</a> 7.4.\u6240\u6709\u8282\u70B9\u5173\u95EDSELinux</h2><pre><code>\u6682\u65F6\u5173\u95ED
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>setenforce 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u6C38\u4E45\u5173\u95ED
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sed -i --follow-symlinks &#39;s/SELINUX=enforcing/SELINUX=disabled/g&#39; \\
/etc/sysconfig/selinux
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-5-\u6240\u6709\u8282\u70B9\u5173\u95ED\u9632\u706B\u5899" tabindex="-1"><a class="header-anchor" href="#_7-5-\u6240\u6709\u8282\u70B9\u5173\u95ED\u9632\u706B\u5899" aria-hidden="true">#</a> 7.5.\u6240\u6709\u8282\u70B9\u5173\u95ED\u9632\u706B\u5899</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl stop firewalld &amp;&amp;
systemctl disable firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-6-\u6240\u6709\u8282\u70B9\u5B89\u88C5docker" tabindex="-1"><a class="header-anchor" href="#_7-6-\u6240\u6709\u8282\u70B9\u5B89\u88C5docker" aria-hidden="true">#</a> 7.6.\u6240\u6709\u8282\u70B9\u5B89\u88C5docker</h2><pre><code>\u5B89\u88C5docker
\u8BE6\u7EC6\u53C2\u80034.1&gt;.\u5B89\u88C5docker

\u4FEE\u6539docker\u914D\u7F6E
vim /etc/docker/daemon.json\uFF0C\u5E76\u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9\uFF1A
#kubernetes\u5B98\u65B9\u63A8\u8350 docker\u7B49\u4F7F\u7528systemd\u4F5C\u4E3Acgroupdriver\uFF0C\u5426\u5219 kubelet \u542F\u52A8\u4E0D\u4E86
&quot;exec-opts&quot;: [&quot;native.cgroupdriver=systemd&quot;]&quot;

\u91CD\u65B0\u8F7D\u5165docker\u914D\u7F6E\u5E76\u91CD\u542Fdocker
systemctl daemon-reload &amp;&amp; systemctl restart docker
</code></pre><h2 id="_7-7-\u6240\u6709\u8282\u70B9\u5B89\u88C5k8s\u6240\u9700\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_7-7-\u6240\u6709\u8282\u70B9\u5B89\u88C5k8s\u6240\u9700\u7EC4\u4EF6" aria-hidden="true">#</a> 7.7.\u6240\u6709\u8282\u70B9\u5B89\u88C5k8s\u6240\u9700\u7EC4\u4EF6</h2><pre><code>\u6DFB\u52A0k8s\u5B89\u88C5\u6E90
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_7-8-\u6240\u6709\u8282\u70B9\u542F\u52A8kubelet\u548Cdocker" tabindex="-1"><a class="header-anchor" href="#_7-8-\u6240\u6709\u8282\u70B9\u542F\u52A8kubelet\u548Cdocker" aria-hidden="true">#</a> 7.8.\u6240\u6709\u8282\u70B9\u542F\u52A8kubelet\u548Cdocker</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl enable kubelet &amp;&amp; 
systemctl start kubelet &amp;&amp;
systemctl enable docker &amp;&amp;
systemctl start docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-9-\u6240\u6709\u5173\u95EDswap" tabindex="-1"><a class="header-anchor" href="#_7-9-\u6240\u6709\u5173\u95EDswap" aria-hidden="true">#</a> 7.9.\u6240\u6709\u5173\u95EDswap</h2><pre><code>\u4E34\u65F6\u5173\u95EDswap\u5206\u533A
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>swapoff /mnt/swap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u6C38\u4E45\u5173\u95EDswap\u5206\u533A
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sed -ri &#39;s/.*swap.*/#&amp;/&#39; /etc/fstab &amp;&amp; systemctl reboot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u67E5\u770Bswap\u5206\u533A\u662F\u5426\u5173\u95ED	
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>free -m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_7-10-\u7528kubeadm-\u521D\u59CB\u5316\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#_7-10-\u7528kubeadm-\u521D\u59CB\u5316\u96C6\u7FA4" aria-hidden="true">#</a> 7.10. \u7528kubeadm \u521D\u59CB\u5316\u96C6\u7FA4</h2><pre><code>\u7279\u522B\u6CE8\u610F
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
</code></pre><h2 id="_7-11-\u5176\u4ED6\u8282\u70B9\u8FDE\u63A5\u5230master\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#_7-11-\u5176\u4ED6\u8282\u70B9\u8FDE\u63A5\u5230master\u8282\u70B9" aria-hidden="true">#</a> 7.11.\u5176\u4ED6\u8282\u70B9\u8FDE\u63A5\u5230Master\u8282\u70B9</h2><pre><code>\u5728\u4E24\u4E2A\u4E0ASlave\u8282\u70B9\u8F93\u5165\u7B2C9&gt;&gt;.\u6B65\u9AA4\u5728\u4E3B\u8282\u70B9\u4E0A\u83B7\u53D6\u7684\u79D8\u94A5
\u5982\uFF1Akubeadm join 192.168.0.6:6443 \\
	--token e60qrb.6321jolakk1aix90 \\
	--discovery-token-ca-cert-hash \\
	sha256:02829b33a24eef53805ffedef79c0371cb4d9ac0d04bfad7fe26eb022cb638ac
	
\u52A0\u5165\u6210\u529F\u540E\u770B\u5230:
	This node has joined the cluster
</code></pre><h2 id="_7-12-\u5728master\u8282\u70B9\u4E0A\u67E5\u770B\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#_7-12-\u5728master\u8282\u70B9\u4E0A\u67E5\u770B\u96C6\u7FA4" aria-hidden="true">#</a> 7.12.\u5728master\u8282\u70B9\u4E0A\u67E5\u770B\u96C6\u7FA4</h2><pre><code>mater\u8282\u70B9\u548C\u4E24\u4E2Aslave\u8282\u70B9STATUS\u662FNOTReady
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl get nodes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>[root@master ~]# kubectl get nodes
NAME     STATUS     ROLES                  AGE     VERSION
master   NotReady      control-plane,master   9m32s   v1.22.4
slave1   NotReady   &lt;none&gt;                 5m51s   v1.22.4
slave2   NotReady      &lt;none&gt;                 2m31s   v1.22.4
</code></pre><h2 id="_7-13-\u5B89\u88C5\u7F51\u7EDC\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#_7-13-\u5B89\u88C5\u7F51\u7EDC\u63D2\u4EF6" aria-hidden="true">#</a> 7.13.\u5B89\u88C5\u7F51\u7EDC\u63D2\u4EF6</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl apply -f \\
	https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-14-\u5728master\u4E0A\u67E5\u770B\u96C6\u7FA4\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#_7-14-\u5728master\u4E0A\u67E5\u770B\u96C6\u7FA4\u8282\u70B9" aria-hidden="true">#</a> 7.14.\u5728master\u4E0A\u67E5\u770B\u96C6\u7FA4\u8282\u70B9</h2><pre><code>\u518D\u6B21\u6267\u884C\u547D\u4EE4\u67E5\u770B\u96C6\u7FA4\u547D\u4EE4\uFF0Cmater\u8282\u70B9STATUS\u662FReady\uFF0C\u4E24\u4E2Aslave\u8282\u70B9STATUS\u662F\u90FD\u662FReady
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl get nodes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>[root@master ~]# kubectl get nodes
NAME     STATUS     ROLES                  AGE     VERSION
master   Ready      control-plane,master   9m32s   v1.22.4
slave1   Ready   &lt;none&gt;                 5m51s   v1.22.4
slave2   Ready      &lt;none&gt;                 2m31s   v1.22.4	
\u6CE8\u610F\u4E8B\u9879
\u5982\u679C\u4E24\u4E2A\u4ECE\u8282\u70B9\u4E2D\u6709\u4E00\u4E2A\u8282\u70B9\u72B6\u6001\u662FNotReady\uFF0C\u53E6\u4E00\u4E2A\u8282\u70B9\u72B6\u6001\u662FReady\uFF0C\u4E0D\u8981\u7740\u6025\uFF0C\u8981\u591A\u7B49\u4E00\u4F1A\u513F
\u518D\u4F7F\u7528\u547D\u4EE4kubectl get nodes\u67E5\u770B\u96C6\u7FA4\u8282\u70B9\uFF0C\u5C31\u53EF\u4EE5\u770B\u5230\u6240\u6709\u8282\u70B9\u90FD\u662FReady
</code></pre><h2 id="_7-15-\u542F\u52A8\u6545\u969C\u89E3\u51B3" tabindex="-1"><a class="header-anchor" href="#_7-15-\u542F\u52A8\u6545\u969C\u89E3\u51B3" aria-hidden="true">#</a> 7.15.\u542F\u52A8\u6545\u969C\u89E3\u51B3</h2><pre><code>\u67E5\u770B\u6240\u6709\u547D\u540D\u7A7A\u95F4\u7684\u6240\u6709\u7684pod
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl get pods -o wide --all-namespaces
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u67E5\u770B\u542F\u52A8\u5931\u8D25\u7684pod\u7684\u65E5\u5FD7\uFF0C\u5176\u4E2DPODNAME\u4E3A\u542F\u52A8\u5931\u8D25\u7684pod\u7684name
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl -n kube-system logs PODNAME
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u91CD\u7F6Ekubeadm
\u53EF\u4F7F\u7528kubeadm reset\u547D\u4EE4\u91CD\u542Fkubeadm\uFF0C\u518D\u4ECE\u7B2C9&gt;&gt;.\u6B65\u9AA4\u5F00\u59CB\u91CD\u65B0\u6267\u884C
</code></pre><h2 id="_7-16-\u57FA\u7840\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_7-16-\u57FA\u7840\u547D\u4EE4" aria-hidden="true">#</a> 7.16.\u57FA\u7840\u547D\u4EE4</h2><pre><code>\u67E5\u770Bkubeadm\u9700\u8981\u7684\u7EC4\u4EF6\u7684\u7248\u672C
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubeadm config images list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u67E5\u770B\u6240\u6709\u8282\u70B9
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl get nodes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u67E5\u770Bpod
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl get pod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u67E5\u770B\u6240\u6709\u547D\u540D\u7A7A\u95F4\u7684\u6240\u6709pod
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl get pods -o wide --all-namespaces
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u67E5\u770Bpod\u65E5\u5FD7
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl describe pod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_7-17-\u90E8\u7F72\u7B2C\u4E00\u4E2A\u7A0B\u5E8F\u5230k8s\u4E2D" tabindex="-1"><a class="header-anchor" href="#_7-17-\u90E8\u7F72\u7B2C\u4E00\u4E2A\u7A0B\u5E8F\u5230k8s\u4E2D" aria-hidden="true">#</a> 7.17.\u90E8\u7F72\u7B2C\u4E00\u4E2A\u7A0B\u5E8F\u5230k8s\u4E2D</h2><pre><code>\u5F00\u59CB\u8FD0\u884C guestbook
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
</code></pre><h2 id="_7-18-\u53EF\u89C6\u5316\u9762\u677Fkuboard" tabindex="-1"><a class="header-anchor" href="#_7-18-\u53EF\u89C6\u5316\u9762\u677Fkuboard" aria-hidden="true">#</a> 7.18.\u53EF\u89C6\u5316\u9762\u677Fkuboard</h2><pre><code>\u5B89\u88C5
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_8-\u4E8C\u8FDB\u5236\u5305\u642D\u5EFAkubernetes" tabindex="-1"><a class="header-anchor" href="#_8-\u4E8C\u8FDB\u5236\u5305\u642D\u5EFAkubernetes" aria-hidden="true">#</a> 8.\u4E8C\u8FDB\u5236\u5305\u642D\u5EFAKubernetes</h1><h2 id="_8-1-\u73AF\u5883\u914D\u7F6E\u6E05\u5355" tabindex="-1"><a class="header-anchor" href="#_8-1-\u73AF\u5883\u914D\u7F6E\u6E05\u5355" aria-hidden="true">#</a> 8.1.\u73AF\u5883\u914D\u7F6E\u6E05\u5355</h2><pre><code>\u64CD\u4F5C\u7CFB\u7EDF									centos7
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
</code></pre><h2 id="_8-2-\u670D\u52A1\u5668\u89C4\u5212\u548Cip\u5730\u5740\u89C4\u5212" tabindex="-1"><a class="header-anchor" href="#_8-2-\u670D\u52A1\u5668\u89C4\u5212\u548Cip\u5730\u5740\u89C4\u5212" aria-hidden="true">#</a> 8.2.\u670D\u52A1\u5668\u89C4\u5212\u548CIP\u5730\u5740\u89C4\u5212</h2><h3 id="_8-2-1\u670D\u52A1\u5668\u89C4\u5212" tabindex="-1"><a class="header-anchor" href="#_8-2-1\u670D\u52A1\u5668\u89C4\u5212" aria-hidden="true">#</a> 8.2.1\u670D\u52A1\u5668\u89C4\u5212</h3><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F\u4E8B\u9879</p><p>\u5982\u679C\u8981\u642D\u5EFA\u4E00\u4E3B\u591A\u4ECE\u975E\u9AD8\u53EF\u7528Kubernetes\u96C6\u7FA4\uFF0C\u4F7F\u7528\u670D\u52A1\u5668\u89C4\u52121<br> \u5982\u679C\u8981\u642D\u5EFA\u591A\u4E3B\u591A\u4ECE\u9AD8\u53EF\u7528Kubernetes\u96C6\u7FA4\uFF0C\u4F7F\u7528\u670D\u52A1\u5668\u89C4\u52122</p></div><pre><code>\u670D\u52A1\u5668\u89C4\u52121\uFF1A\u4E00\u4E3B\u591A\u4ECE\u670D\u52A1\u5668\u89C4\u5212
</code></pre><table><thead><tr><th style="text-align:left;">\u89D2\u8272</th><th style="text-align:left;">IP</th><th style="text-align:center;">\u7EC4\u4EF6</th></tr></thead><tbody><tr><td style="text-align:left;">binary-k8s-master1</td><td style="text-align:left;">192.168.0.9</td><td style="text-align:center;">etcd <br> docker <br> kube-apiserver kube-controller-manager kube-scheduler<br> kubelet kube-proxy</td></tr><tr><td style="text-align:left;">binary-k8s-worker1</td><td style="text-align:left;">192.168.0.10</td><td style="text-align:center;">etcd <br> docker <br> kubelet kube-proxy</td></tr><tr><td style="text-align:left;">binary-k8s-worker1</td><td style="text-align:left;">192.168.0.11</td><td style="text-align:center;">etcd <br> docker <br> kubelet kube-proxy</td></tr></tbody></table><pre><code>\u670D\u52A1\u5668\u89C4\u52122\uFF1A\u591A\u4E3B\u591A\u4ECE\u9AD8\u53EF\u7528\u670D\u52A1\u5668\u89C4\u5212
</code></pre><table><thead><tr><th style="text-align:left;">\u89D2\u8272</th><th style="text-align:left;">IP</th><th style="text-align:center;">\u7EC4\u4EF6</th></tr></thead><tbody><tr><td style="text-align:left;">binary-k8s-master1</td><td style="text-align:left;">192.168.0.9</td><td style="text-align:center;">etcd <br> docker <br> kube-apiserver kube-controller-manager kube-scheduler <br> kubelet kube-proxy <br> nginx keepalived</td></tr><tr><td style="text-align:left;">binary-k8s-master2</td><td style="text-align:left;">192.168.0.12</td><td style="text-align:center;">etcd <br> docker <br> kube-apiserver kube-controller-manager kube-scheduler <br> kubelet kube-proxy <br> nginx keepalived</td></tr><tr><td style="text-align:left;">binary-k8s-worker1</td><td style="text-align:left;">192.168.0.10</td><td style="text-align:center;">etcd <br> docker <br> kubelet kube-proxy</td></tr><tr><td style="text-align:left;">binary-k8s-worker2</td><td style="text-align:left;">192.168.0.11</td><td style="text-align:center;">etcd <br> docker <br> kubelet kube-proxy</td></tr><tr><td style="text-align:left;">\u8D1F\u8F7D\u5747\u8861\u5668(\u865A\u62DFIP)</td><td style="text-align:left;">192.168.0.88</td><td style="text-align:center;"></td></tr></tbody></table><h3 id="_8-2-2-ip\u5730\u5740\u89C4\u5212" tabindex="-1"><a class="header-anchor" href="#_8-2-2-ip\u5730\u5740\u89C4\u5212" aria-hidden="true">#</a> 8.2.2.IP\u5730\u5740\u89C4\u5212</h3><pre><code>IP\u5730\u5740\u89C4\u5212
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
</code></pre><h2 id="_8-3-\u5B89\u88C5\u524D\u51C6\u5907\u5DE5\u4F5C" tabindex="-1"><a class="header-anchor" href="#_8-3-\u5B89\u88C5\u524D\u51C6\u5907\u5DE5\u4F5C" aria-hidden="true">#</a> 8.3.\u5B89\u88C5\u524D\u51C6\u5907\u5DE5\u4F5C</h2><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F\u4E8B\u9879</p><p>8.3\u7AE0\u8282\u6D89\u53CA\u5230\u7684\u64CD\u4F5C\u6240\u6709\u7684Master\u8282\u70B9\u548CWorker Node\u90FD\u8981\u6267\u884C\uFF0C\u4E0B\u8F7D\u6240\u6709\u7528\u5230\u7684\u8F6F\u4EF6\u5305\u5305\u53EA\u9700\u8981\u5728Mater Node1\u8FDB\u884C\u5C31\u53EF\u4EE5\u4E86</p></div><h3 id="_8-3-1\u64CD\u4F5C\u7CFB\u7EDF\u521D\u59CB\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#_8-3-1\u64CD\u4F5C\u7CFB\u7EDF\u521D\u59CB\u8BBE\u7F6E" aria-hidden="true">#</a> 8.3.1\u64CD\u4F5C\u7CFB\u7EDF\u521D\u59CB\u8BBE\u7F6E</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl stop firewalld &amp;&amp; systemctl disable firewalld #\u5173\u95ED\u7CFB\u7EDF\u9632\u706B\u5899
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
</code></pre><h3 id="_8-3-2\u4E0B\u8F7D\u6240\u6709\u7528\u5230\u7684\u8F6F\u4EF6\u5305" tabindex="-1"><a class="header-anchor" href="#_8-3-2\u4E0B\u8F7D\u6240\u6709\u7528\u5230\u7684\u8F6F\u4EF6\u5305" aria-hidden="true">#</a> 8.3.2\u4E0B\u8F7D\u6240\u6709\u7528\u5230\u7684\u8F6F\u4EF6\u5305</h3><pre><code>\u5B89\u88C5curl
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-4-\u5B89\u88C5cfssl\u8BC1\u4E66\u751F\u6210\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#_8-4-\u5B89\u88C5cfssl\u8BC1\u4E66\u751F\u6210\u5DE5\u5177" aria-hidden="true">#</a> 8.4.\u5B89\u88C5cfssl\u8BC1\u4E66\u751F\u6210\u5DE5\u5177</h2><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F\u4E8B\u9879</p><p>8.4\u7AE0\u8282\u6D89\u53CA\u5230\u7684\u64CD\u4F5C\u53EA\u5728Master Node1\u8282\u70B9\u4E0A\u8FDB\u884C\u64CD\u4F5C</p></div><pre><code>cfssl\u7B80\u4ECB
cfssl\u662F\u4E00\u4E2A\u5F00\u6E90\u7684\u8BC1\u4E66\u7BA1\u7406\u5DE5\u5177\uFF0C\u4F7F\u7528json\u6587\u4EF6\u751F\u6210\u8BC1\u4E66\uFF0C\u76F8\u6BD4openssl\u66F4\u65B9\u4FBF\u4F7F\u7528,\u8FD9\u91CC\u5728Master Node1\u8282\u70B9\u64CD\u4F5C\u540E\u590D
\u5236\u5230\u5176\u4ED6\u8282\u70B9\uFF0C\u4E0D\u9700\u8981\u5728\u6240\u6709\u8282\u70B9\u4E0A\u64CD\u4F5C\u3002

\u5207\u6362\u5230\u5B58\u653Ecfssl-utils\u7684\u76EE\u5F55\u4E2D\uFF0C\u7ED9cfssl-utils\u8D4B\u4E88\u8FD0\u884C\u6743\u9650\u5E76\u62F7\u8D1D\u4E00\u4EFD\u5230/usr/bin/\u76EE\u5F55\u4E2D
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd /opt/k8s/package/cfssl-utils &amp;&amp; chmod +x * &amp;&amp;
cp cfssl_linux-amd64 /usr/local/bin/cfssl &amp;&amp;
cp cfssljson_linux-amd64 /usr/local/bin/cfssljson &amp;&amp;
cp cfssl-certinfo_linux-amd64 /usr/bin/cfssl-certinfo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-5-\u642D\u5EFAetcd\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#_8-5-\u642D\u5EFAetcd\u96C6\u7FA4" aria-hidden="true">#</a> 8.5.\u642D\u5EFAetcd\u96C6\u7FA4</h2><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F\u4E8B\u9879</p><p>8.5\u7AE0\u8282\u6D89\u53CA\u5230\u7684\u64CD\u4F5C\u4E0D\u8981\u4E00\u6B21\u6027\u5728\u6240\u6709\u8282\u70B9\u4E0A\u64CD\u4F5C\uFF0C\u5728Master1\u64CD\u4F5C\u540E\u590D\u5236\u5230\u5176\u4ED6\u8282\u70B9\uFF0C\u8FD9\u6837\u6BD4\u76F4\u63A5\u5728\u6240\u6709\u8282\u70B9\u4E0A\u64CD\u4F5C\u8981\u5FEB</p></div><h3 id="_8-5-1\u751F\u6210ca\u8BC1\u4E66\u548Chttps\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#_8-5-1\u751F\u6210ca\u8BC1\u4E66\u548Chttps\u8BC1\u4E66" aria-hidden="true">#</a> 8.5.1\u751F\u6210CA\u8BC1\u4E66\u548Chttps\u8BC1\u4E66</h3><pre><code>\u521B\u5EFA\u5B58\u653Eetcd\u8BC1\u4E66\u914D\u7F6E\u6587\u4EF6\u548C\u751F\u6210\u8BC1\u4E66\u7684\u76EE\u5F55
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-5-2-\u90E8\u7F72etcd\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#_8-5-2-\u90E8\u7F72etcd\u96C6\u7FA4" aria-hidden="true">#</a> 8.5.2.\u90E8\u7F72etcd\u96C6\u7FA4</h3><pre><code>etcd\u7B80\u4ECB
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
</code></pre><h3 id="_8-5-4-\u62F7\u8D1Detcd\u6240\u9700\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#_8-5-4-\u62F7\u8D1Detcd\u6240\u9700\u8BC1\u4E66" aria-hidden="true">#</a> 8.5.4.\u62F7\u8D1Detcd\u6240\u9700\u8BC1\u4E66</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cp ~/TLS/etcd/{server.pem,server-key.pem,ca.pem} /opt/etcd/ssl/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_8-5-5-\u8BA9systemd\u7BA1\u7406etcd" tabindex="-1"><a class="header-anchor" href="#_8-5-5-\u8BA9systemd\u7BA1\u7406etcd" aria-hidden="true">#</a> 8.5.5.\u8BA9systemd\u7BA1\u7406etcd</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; /usr/lib/systemd/system/etcd.service &lt;&lt; EOF
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-5-6-\u62F7\u8D1Detcd\u5B89\u88C5\u6587\u4EF6\u5230worker-node" tabindex="-1"><a class="header-anchor" href="#_8-5-6-\u62F7\u8D1Detcd\u5B89\u88C5\u6587\u4EF6\u5230worker-node" aria-hidden="true">#</a> 8.5.6.\u62F7\u8D1Detcd\u5B89\u88C5\u6587\u4EF6\u5230Worker Node</h3><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F\u4E8B\u9879</p><p>\u5728Master1 Node\u4E0A\u6267\u884C\u4E0B\u9762\u64CD\u4F5C\uFF0C\u53EA\u9700\u8981\u62F7\u8D1D\u5230Worker Node1\u548CWorker Node2\u5373\u53EF\uFF0C\u4E0D\u9700\u8981\u62F7\u8D1D\u5230Master Node2</p></div><pre><code>\u5728Worker Node1\u4E0A\u548CWorker Node2\u4E0A\u521B\u5EFAetcd\u5DE5\u4F5C\u76EE\u5F55
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
</code></pre><h3 id="_8-5-7-\u542F\u52A8\u4E09\u4E2Aetcd\u5E76\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F" tabindex="-1"><a class="header-anchor" href="#_8-5-7-\u542F\u52A8\u4E09\u4E2Aetcd\u5E76\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F" aria-hidden="true">#</a> 8.5.7.\u542F\u52A8\u4E09\u4E2Aetcd\u5E76\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F</h3><pre><code>\u542F\u52A8\u591A\u4E2A\u8282\u70B9\u7684etcd
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_8-6-\u5B89\u88C5\u914D\u7F6Edocker" tabindex="-1"><a class="header-anchor" href="#_8-6-\u5B89\u88C5\u914D\u7F6Edocker" aria-hidden="true">#</a> 8.6.\u5B89\u88C5\u914D\u7F6EDocker</h2><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F\u4E8B\u9879</p><p>\u6240\u6709\u8282\u70B9\u90FD\u9700\u8981\u5B89\u88C5docker\uFF0C\u53EF\u4EE5\u5148\u5728Master Node1\u4E0A\u5B89\u88C5\uFF0C\u62F7\u8D1D\u4E00\u90E8\u5206\u5B89\u88C5\u5185\u5BB9\u5230Worker Node1\u548CWorker Node2\uFF0C\u518D\u5728Worker Node1\u548CWorker Node2\u5B8C\u6210\u5269\u4F59\u7684\u5B89\u88C5\u64CD\u4F5C\uFF0C\u8FD9\u6837\u6BD4\u76F4\u63A5\u5728\u4E09\u53F0\u673A\u5668\u4E0A\u5B8C\u6210\u5168\u90E8\u64CD\u4F5C\u8981\u5FEB\u5F88\u591A</p></div><h3 id="_8-6-1\u5728master1\u4E0A\u5B89\u88C5docker" tabindex="-1"><a class="header-anchor" href="#_8-6-1\u5728master1\u4E0A\u5B89\u88C5docker" aria-hidden="true">#</a> 8.6.1\u5728Master1\u4E0A\u5B89\u88C5docker</h3><pre><code>\u5207\u6362\u76EE\u5F55\u5E76\u5728\u8BE5\u76EE\u5F55\u5E76\u5C06\u8BE5\u76EE\u5F55\u4E2D\u7684docker\u4E8C\u8FDB\u5236\u5B89\u88C5\u6587\u4EF6\u89E3\u538B\u5230\u6307\u5B9A\u76EE\u5F55
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-6-2\u5728\u6240\u6709worker-node\u4E0A\u5B89\u88C5docker" tabindex="-1"><a class="header-anchor" href="#_8-6-2\u5728\u6240\u6709worker-node\u4E0A\u5B89\u88C5docker" aria-hidden="true">#</a> 8.6.2\u5728\u6240\u6709Worker Node\u4E0A\u5B89\u88C5docker</h3><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F\u4E8B\u9879</p><p>\u53EA\u9700\u8981\u5728Master Node1\u4E0A\u5B89\u88C5Docker\uFF0C\u7136\u540E\u5C06\u6240\u6709\u5B89\u88C5\u6587\u4EF6\u4ECEMaster Node1\u4E0A\u62F7\u8D1D\u5230Worker Node1\u548CWorker Node2\u4E0A</p></div><pre><code>\u5728Worker Node1\u548CWorker Node2\u4E0A\u521B\u5EFA\u5B58\u653Edocker\u5B89\u88C5\u6587\u4EF6\u7684\u76EE\u5F55
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-6-3\u542F\u52A8\u4E09\u53F0\u673A\u5668\u4E0A\u7684docker" tabindex="-1"><a class="header-anchor" href="#_8-6-3\u542F\u52A8\u4E09\u53F0\u673A\u5668\u4E0A\u7684docker" aria-hidden="true">#</a> 8.6.3\u542F\u52A8\u4E09\u53F0\u673A\u5668\u4E0A\u7684docker</h3><pre><code>\u5237\u65B0\u914D\u7F6E\u6587\u4EF6\u540E\u542F\u52A8\u4E09\u53F0\u673A\u5668\u4E0A\u7684docker\u5E76\u8BBE\u7F6E\u4E3A\u5F00\u673A\u542F\u52A8
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl daemon-reload &amp;&amp;
systemctl start docker &amp;&amp;
systemctl enable docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u67E5\u770B\u542F\u52A8\u72B6\u6001
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl status docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u542F\u52A8\u6545\u969C\u6392\u67E5
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl status docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_8-7-\u642D\u5EFAkube-apiserver" tabindex="-1"><a class="header-anchor" href="#_8-7-\u642D\u5EFAkube-apiserver" aria-hidden="true">#</a> 8.7.\u642D\u5EFAkube-apiserver</h2><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F\u4E8B\u9879</p><p>8.7\u7AE0\u8282\u6240\u6709\u64CD\u4F5C\u53EA\u5728Master Node1\u8282\u70B9\u64CD\u4F5C\uFF0C\u4E0D\u9700\u8981\u5728\u5176\u4ED6\u8282\u70B9\u64CD\u4F5C\uFF0C\u56E0\u4E3Akube-apiserver\u662FMaster\u8282\u70B9\u7684\u4E13\u7528\u7EC4\u4EF6\uFF0CWorker Node\u4E0D\u9700\u8981\u4F7F\u7528\u8FD9\u4E2A\u7EC4\u4EF6</p></div><h3 id="_8-7-1-\u751F\u6210ca\u8BC1\u4E66\u548Chttps\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#_8-7-1-\u751F\u6210ca\u8BC1\u4E66\u548Chttps\u8BC1\u4E66" aria-hidden="true">#</a> 8.7.1.\u751F\u6210CA\u8BC1\u4E66\u548CHttps\u8BC1\u4E66</h3><pre><code>\u5207\u6362\u76EE\u5F55
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-7-2-\u5728master-node1\u4E0A\u90E8\u7F72kube-apiserver" tabindex="-1"><a class="header-anchor" href="#_8-7-2-\u5728master-node1\u4E0A\u90E8\u7F72kube-apiserver" aria-hidden="true">#</a> 8.7.2.\u5728Master Node1\u4E0A\u90E8\u7F72kube-apiserver</h3><pre><code>\u521B\u5EFAkube-apiserver\u5DE5\u4F5C\u76EE\u5F55
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
</code></pre><h3 id="_8-7-3-\u62F7\u8D1D\u6240\u9700\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#_8-7-3-\u62F7\u8D1D\u6240\u9700\u8BC1\u4E66" aria-hidden="true">#</a> 8.7.3.\u62F7\u8D1D\u6240\u9700\u8BC1\u4E66</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cp ~/TLS/k8s/ca*pem ~/TLS/k8s/server*pem /opt/kubernetes/ssl/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_8-7-4-\u542F\u7528tls-bootstrapping" tabindex="-1"><a class="header-anchor" href="#_8-7-4-\u542F\u7528tls-bootstrapping" aria-hidden="true">#</a> 8.7.4.\u542F\u7528TLS bootstrapping</h3><pre><code>TLS Bootstraping\u4ECB\u7ECD
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
</code></pre><h3 id="_8-7-5-\u8BA9systemd\u7BA1\u7406apiserver" tabindex="-1"><a class="header-anchor" href="#_8-7-5-\u8BA9systemd\u7BA1\u7406apiserver" aria-hidden="true">#</a> 8.7.5.\u8BA9systemd\u7BA1\u7406apiserver</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; /usr/lib/systemd/system/kube-apiserver.service &lt;&lt; EOF
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-7-6-\u542F\u52A8kube-apiserver" tabindex="-1"><a class="header-anchor" href="#_8-7-6-\u542F\u52A8kube-apiserver" aria-hidden="true">#</a> 8.7.6.\u542F\u52A8kube-apiserver</h3><pre><code>\u5237\u65B0\u914D\u7F6E\u6587\u4EF6\u540E\u542F\u52A8kube-apiserver\u5E76\u8BBE\u7F6E\u4E3A\u5F00\u673A\u542F\u52A8\u72B6\u6001
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl daemon-reload &amp;&amp;
systemctl start kube-apiserver &amp;&amp;
systemctl enable kube-apiserver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u67E5\u770B\u542F\u52A8\u72B6\u6001
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl status kube-apiserver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u542F\u52A8\u6545\u969C\u6392\u67E5
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat /var/log/messages|grep kube-apiserver|grep -i error
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_8-8-\u5728master-node1\u4E0A\u90E8\u7F72kube-controller-manager" tabindex="-1"><a class="header-anchor" href="#_8-8-\u5728master-node1\u4E0A\u90E8\u7F72kube-controller-manager" aria-hidden="true">#</a> 8.8.\u5728Master Node1\u4E0A\u90E8\u7F72kube-controller-manager</h2><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F\u4E8B\u9879</p><p>8.8\u7AE0\u8282\u6240\u6709\u64CD\u4F5C\u53EA\u5728Master Node1\u8282\u70B9\u64CD\u4F5C\uFF0C\u4E0D\u9700\u8981\u5728\u5176\u4ED6\u8282\u70B9\u64CD\u4F5C\uFF0C\u56E0\u4E3Akube-controller-manager\u662FMaster\u8282\u70B9\u7684\u4E13\u7528\u7EC4\u4EF6\uFF0CWorker Node\u4E0D\u9700\u8981\u4F7F\u7528\u8FD9\u4E2A\u7EC4\u4EF6</p></div><h3 id="_8-8-1-\u5207\u6362\u76EE\u5F55\u5E76\u62F7\u8D1Dkube-controller-manager\u76F8\u5173\u6587\u4EF6\u5230-opt-kubernetes-bin" tabindex="-1"><a class="header-anchor" href="#_8-8-1-\u5207\u6362\u76EE\u5F55\u5E76\u62F7\u8D1Dkube-controller-manager\u76F8\u5173\u6587\u4EF6\u5230-opt-kubernetes-bin" aria-hidden="true">#</a> 8.8.1.\u5207\u6362\u76EE\u5F55\u5E76\u62F7\u8D1Dkube-controller-manager\u76F8\u5173\u6587\u4EF6\u5230/opt/kubernetes/bin</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cp /opt/k8s/package/kubernetes/server/bin/kube-controller-manager /opt/kubernetes/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_8-8-2-\u751F\u6210\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#_8-8-2-\u751F\u6210\u8BC1\u4E66" aria-hidden="true">#</a> 8.8.2.\u751F\u6210\u8BC1\u4E66</h3><pre><code>\u5207\u6362\u5DE5\u4F5C\u76EE\u5F55
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-8-2-\u521B\u5EFAkube-controller-manager\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_8-8-2-\u521B\u5EFAkube-controller-manager\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 8.8.2.\u521B\u5EFAkube-controller-manager\u914D\u7F6E\u6587\u4EF6</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; /opt/kubernetes/cfg/kube-controller-manager.conf &lt;&lt; EOF
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
</code></pre><h3 id="_8-8-3-\u751F\u6210\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_8-8-3-\u751F\u6210\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 8.8.3.\u751F\u6210\u914D\u7F6E\u6587\u4EF6</h3><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F\u4E8B\u9879</p><p>\u4EE5\u4E0B\u662Fshell\u547D\u4EE4,\u76F4\u63A5\u5728shell\u7EC8\u7AEF\u6267\u884C</p></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>KUBE_CONFIG=&quot;/opt/kubernetes/cfg/kube-controller-manager.kubeconfig&quot;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-8-4-\u8BA9systemd\u7BA1\u7406controller-manager" tabindex="-1"><a class="header-anchor" href="#_8-8-4-\u8BA9systemd\u7BA1\u7406controller-manager" aria-hidden="true">#</a> 8.8.4.\u8BA9systemd\u7BA1\u7406controller-manager</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; /usr/lib/systemd/system/kube-controller-manager.service &lt;&lt; EOF
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-8-5-\u542F\u52A8kube-controller-manager" tabindex="-1"><a class="header-anchor" href="#_8-8-5-\u542F\u52A8kube-controller-manager" aria-hidden="true">#</a> 8.8.5.\u542F\u52A8kube-controller-manager</h3><pre><code>\u5237\u65B0\u914D\u7F6E\u6587\u4EF6\u540E\u542F\u52A8kube-controller-manager\u5E76\u8BBE\u7F6E\u4E3A\u5F00\u673A\u542F\u52A8
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl daemon-reload &amp;&amp;
systemctl start kube-controller-manager &amp;&amp;
systemctl enable kube-controller-manager
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u67E5\u770Bkube-controller-manager\u542F\u52A8\u72B6\u6001
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl status kube-controller-manager
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u542F\u52A8\u6545\u969C\u6392\u67E5
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat /var/log/messages|grep kube-controller-manager|grep -i error
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_8-9-\u90E8\u7F72kube-scheduler" tabindex="-1"><a class="header-anchor" href="#_8-9-\u90E8\u7F72kube-scheduler" aria-hidden="true">#</a> 8.9.\u90E8\u7F72kube-scheduler</h2><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F\u4E8B\u9879</p><p>8.9\u7AE0\u8282\u6240\u6709\u64CD\u4F5C\u53EA\u5728Master Node1\u8282\u70B9\u64CD\u4F5C\uFF0C\u4E0D\u9700\u8981\u5728\u5176\u4ED6\u8282\u70B9\u64CD\u4F5C\uFF0C\u56E0\u4E3Akube-scheduler\u662FMaster\u8282\u70B9\u7684\u4E13\u7528\u7EC4\u4EF6\uFF0CWorker Node\u4E0D\u9700\u8981\u4F7F\u7528\u8FD9\u4E2A\u7EC4\u4EF6</p></div><h3 id="_8-8-1-\u5207\u6362\u76EE\u5F55\u5E76\u62F7\u8D1Dkube-dcheduler\u76F8\u5173\u6587\u4EF6\u5230-opt-kubernetes-bin" tabindex="-1"><a class="header-anchor" href="#_8-8-1-\u5207\u6362\u76EE\u5F55\u5E76\u62F7\u8D1Dkube-dcheduler\u76F8\u5173\u6587\u4EF6\u5230-opt-kubernetes-bin" aria-hidden="true">#</a> 8.8.1 \u5207\u6362\u76EE\u5F55\u5E76\u62F7\u8D1Dkube-dcheduler\u76F8\u5173\u6587\u4EF6\u5230/opt/kubernetes/bin</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cp /opt/k8s/package/kubernetes/server/bin/kube-scheduler /opt/kubernetes/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_8-9-2-\u751F\u6210\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#_8-9-2-\u751F\u6210\u8BC1\u4E66" aria-hidden="true">#</a> 8.9.2.\u751F\u6210\u8BC1\u4E66</h3><pre><code>\u5207\u6362\u5DE5\u4F5C\u76EE\u5F55
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-9-3-\u521B\u5EFAkube-scheduler-conf\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_8-9-3-\u521B\u5EFAkube-scheduler-conf\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 8.9.3.\u521B\u5EFAkube-scheduler.conf\u914D\u7F6E\u6587\u4EF6</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; /opt/kubernetes/cfg/kube-scheduler.conf &lt;&lt; EOF
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
</code></pre><h3 id="_8-9-4-\u751F\u6210kube-scheduler-kubeconfig\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_8-9-4-\u751F\u6210kube-scheduler-kubeconfig\u6587\u4EF6" aria-hidden="true">#</a> 8.9.4.\u751F\u6210kube-scheduler.kubeconfig\u6587\u4EF6</h3><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F\u4E8B\u9879</p><p>\u5728shell\u4E2D\u6267\u884C\u76F4\u63A5\u6267\u884C\u4E0B\u9762\u547D\u4EE4</p></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>	mkdir ~/.kube
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-9-5-\u8BA9systemd\u7BA1\u7406kube-scheduler" tabindex="-1"><a class="header-anchor" href="#_8-9-5-\u8BA9systemd\u7BA1\u7406kube-scheduler" aria-hidden="true">#</a> 8.9.5.\u8BA9systemd\u7BA1\u7406kube-scheduler</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; /usr/lib/systemd/system/kube-scheduler.service &lt;&lt; EOF
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-9-6-\u542F\u52A8\u5E76\u8BBE\u7F6E\u5F00\u673A\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#_8-9-6-\u542F\u52A8\u5E76\u8BBE\u7F6E\u5F00\u673A\u542F\u52A8" aria-hidden="true">#</a> 8.9.6.\u542F\u52A8\u5E76\u8BBE\u7F6E\u5F00\u673A\u542F\u52A8</h3><pre><code>\u5237\u65B0\u914D\u7F6E\u6587\u4EF6\u540E\u542F\u52A8kube-scheduler\u5E76\u8BBE\u7F6E\u4E3A\u5F00\u673A\u542F\u52A8
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl daemon-reload &amp;&amp;
systemctl start kube-scheduler &amp;&amp;
systemctl enable kube-scheduler
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u67E5\u770B\u542F\u52A8\u72B6\u6001
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl status kube-scheduler
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u542F\u52A8\u6545\u969C\u6392\u67E5
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat /var/log/messages|grep kube-scheduler|grep -i error
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_8-10-\u4F7F\u7528kubectl\u67E5\u770B\u96C6\u7FA4\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#_8-10-\u4F7F\u7528kubectl\u67E5\u770B\u96C6\u7FA4\u72B6\u6001" aria-hidden="true">#</a> 8.10.\u4F7F\u7528kubectl\u67E5\u770B\u96C6\u7FA4\u72B6\u6001</h2><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F\u4E8B\u9879</p><p>8.10\u7AE0\u8282\u6240\u6709\u64CD\u4F5C\u53EA\u5728Master1\u8282\u70B9\u64CD\u4F5C\uFF0C\u4E0D\u9700\u8981\u5728\u5176\u4ED6\u8282\u70B9\u64CD\u4F5C\uFF0C\u56E0\u4E3Akubectl\u662FMaster\u8282\u70B9\u7684\u4E13\u7528\u7EC4\u4EF6\uFF0CWorker Node\u4E0D\u9700\u8981\u4F7F\u7528\u8FD9\u4E2A\u7EC4\u4EF6</p></div><h3 id="_8-10-1-\u751F\u6210\u6240\u9700\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#_8-10-1-\u751F\u6210\u6240\u9700\u8BC1\u4E66" aria-hidden="true">#</a> 8.10.1.\u751F\u6210\u6240\u9700\u8BC1\u4E66</h3><pre><code>\u5207\u6362\u5DE5\u4F5C\u76EE\u5F55
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-10-2-\u5728-kube\u6587\u4EF6\u5939\u4E2D\u751F\u6210config\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_8-10-2-\u5728-kube\u6587\u4EF6\u5939\u4E2D\u751F\u6210config\u6587\u4EF6" aria-hidden="true">#</a> 8.10.2.\u5728.kube\u6587\u4EF6\u5939\u4E2D\u751F\u6210config\u6587\u4EF6</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir /root/.kube

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-10-3-\u901A\u8FC7kubectl\u5DE5\u5177\u67E5\u770B\u96C6\u7FA4\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_8-10-3-\u901A\u8FC7kubectl\u5DE5\u5177\u67E5\u770B\u96C6\u7FA4\u7EC4\u4EF6" aria-hidden="true">#</a> 8.10.3.\u901A\u8FC7kubectl\u5DE5\u5177\u67E5\u770B\u96C6\u7FA4\u7EC4\u4EF6</h3><pre><code>\u547D\u4EE4
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl get cs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>Master1\u8282\u70B9\u7EC4\u4EF6\u8FD0\u884C\u6B63\u5E38\u4F1A\u663E\u793A\u5982\u4E0B\u7ED3\u679C
NAME                 STATUS    MESSAGE             ERROR
controller-manager   Healthy   ok                  
scheduler            Healthy   ok                  
etcd-0               Healthy   {&quot;health&quot;:&quot;true&quot;}   
etcd-2               Healthy   {&quot;health&quot;:&quot;true&quot;}   
etcd-1               Healthy   {&quot;health&quot;:&quot;true&quot;} 
</code></pre><h3 id="_8-10-4-\u6388\u6743kubelet-bootstrap\u7528\u6237\u5141\u8BB8\u8BF7\u6C42\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#_8-10-4-\u6388\u6743kubelet-bootstrap\u7528\u6237\u5141\u8BB8\u8BF7\u6C42\u8BC1\u4E66" aria-hidden="true">#</a> 8.10.4.\u6388\u6743kubelet-bootstrap\u7528\u6237\u5141\u8BB8\u8BF7\u6C42\u8BC1\u4E66</h3><pre><code>\u521B\u5EFA\u6388\u6743\u7528\u6237kubelet-bootstrap
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
</code></pre><h2 id="_8-11-\u5728master-node1\u4E0A\u90E8\u7F72\u7B2C\u4E00\u4E2Aworker-node" tabindex="-1"><a class="header-anchor" href="#_8-11-\u5728master-node1\u4E0A\u90E8\u7F72\u7B2C\u4E00\u4E2Aworker-node" aria-hidden="true">#</a> 8.11.\u5728Master Node1\u4E0A\u90E8\u7F72\u7B2C\u4E00\u4E2AWorker Node</h2><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F\u4E8B\u9879</p><p>8.11.\u7AE0\u8282\u6240\u6709\u64CD\u4F5C\u53EA\u5728Master Node1\u8282\u70B9\u64CD\u4F5C\uFF0C\u5373\u5F53Master Node1\u65E2\u5145\u5F53Master Node,\u4E5F\u5F53Worker Node</p></div><pre><code>\u5C06Master Node1\u8282\u70B9\u7684k8s-server\u8F6F\u4EF6\u5305\u62F7\u8D1D\u5230\u6240\u6709Worker Node
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd /opt/k8s/package/kubernetes/server/bin/
cp kubelet  kube-proxy /opt/kubernetes/bin/ &amp;&amp;
scp kubelet  kube-proxy root@192.168.0.10:/opt/kubernetes/bin/ &amp;&amp;
scp kubelet  kube-proxy root@192.168.0.11:/opt/kubernetes/bin/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-11-2-\u5728master-node1\u90E8\u7F72kubelet" tabindex="-1"><a class="header-anchor" href="#_8-11-2-\u5728master-node1\u90E8\u7F72kubelet" aria-hidden="true">#</a> 8.11.2.\u5728Master Node1\u90E8\u7F72kubelet</h3><h4 id="_8-11-2-1-\u521B\u5EFAkubelet\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_8-11-2-1-\u521B\u5EFAkubelet\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 8.11.2.1.\u521B\u5EFAkubelet\u914D\u7F6E\u6587\u4EF6</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; /opt/kubernetes/cfg/kubelet.conf &lt;&lt; EOF
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
</code></pre><h4 id="_8-11-2-2-\u521B\u5EFAkubelet\u7F16\u6392\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_8-11-2-2-\u521B\u5EFAkubelet\u7F16\u6392\u6587\u4EF6" aria-hidden="true">#</a> 8.11.2.2.\u521B\u5EFAkubelet\u7F16\u6392\u6587\u4EF6</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; /opt/kubernetes/cfg/kubelet-config.yml &lt;&lt; EOF
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-11-2-3-\u751F\u6210kubelet\u521D\u6B21\u52A0\u5165\u96C6\u7FA4\u5F15\u5BFCkubeconfig\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_8-11-2-3-\u751F\u6210kubelet\u521D\u6B21\u52A0\u5165\u96C6\u7FA4\u5F15\u5BFCkubeconfig\u6587\u4EF6" aria-hidden="true">#</a> 8.11.2.3.\u751F\u6210kubelet\u521D\u6B21\u52A0\u5165\u96C6\u7FA4\u5F15\u5BFCkubeconfig\u6587\u4EF6</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>KUBE_CONFIG=&quot;/opt/kubernetes/cfg/bootstrap.kubeconfig&quot;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-11-2-4-systemd\u7BA1\u7406kubelet" tabindex="-1"><a class="header-anchor" href="#_8-11-2-4-systemd\u7BA1\u7406kubelet" aria-hidden="true">#</a> 8.11.2.4.systemd\u7BA1\u7406kubelet</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; /usr/lib/systemd/system/kubelet.service &lt;&lt; EOF
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-11-3-5-\u542F\u52A8kubelet\u5E76\u8BBE\u7F6E\u5F00\u673A\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#_8-11-3-5-\u542F\u52A8kubelet\u5E76\u8BBE\u7F6E\u5F00\u673A\u542F\u52A8" aria-hidden="true">#</a> 8.11.3.5.\u542F\u52A8kubelet\u5E76\u8BBE\u7F6E\u5F00\u673A\u542F\u52A8</h4><pre><code>\u5237\u65B0\u914D\u7F6E\u6587\u4EF6\u540E\u542F\u52A8kubelet\u5E76\u8BBE\u7F6E\u5F00\u673A\u542F\u52A8
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl daemon-reload &amp;&amp;
systemctl start kubelet &amp;&amp;
systemctl enable kubelet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u67E5\u770B\u542F\u52A8\u72B6\u6001
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl status kubelet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u542F\u52A8\u6545\u969C\u6392\u67E5
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat /var/log/messages|grep kubelet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_8-11-2-6-\u5141\u8BB8kubelet\u8BC1\u4E66\u7533\u8BF7\u5E76\u52A0\u5165\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#_8-11-2-6-\u5141\u8BB8kubelet\u8BC1\u4E66\u7533\u8BF7\u5E76\u52A0\u5165\u96C6\u7FA4" aria-hidden="true">#</a> 8.11.2.6.\u5141\u8BB8kubelet\u8BC1\u4E66\u7533\u8BF7\u5E76\u52A0\u5165\u96C6\u7FA4</h4><pre><code>\u67E5\u770Bkubelet\u8BC1\u4E66\u7B7E\u540D\u8BF7\u6C42
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
</code></pre><h3 id="_8-11-3-\u90E8\u7F72kube-proxy" tabindex="-1"><a class="header-anchor" href="#_8-11-3-\u90E8\u7F72kube-proxy" aria-hidden="true">#</a> 8.11.3.\u90E8\u7F72kube-proxy</h3><h4 id="_8-11-3-1-\u521B\u5EFAkube-proxy\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_8-11-3-1-\u521B\u5EFAkube-proxy\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 8.11.3.1.\u521B\u5EFAkube-proxy\u914D\u7F6E\u6587\u4EF6</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; /opt/kubernetes/cfg/kube-proxy.conf &lt;&lt; EOF
KUBE_PROXY_OPTS=&quot;--logtostderr=false \\\\
--v=2 \\\\
--log-dir=/opt/kubernetes/logs \\\\
--config=/opt/kubernetes/cfg/kube-proxy-config.yml&quot;
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-11-3-2-\u914D\u7F6E\u53C2\u6570\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_8-11-3-2-\u914D\u7F6E\u53C2\u6570\u6587\u4EF6" aria-hidden="true">#</a> 8.11.3.2.\u914D\u7F6E\u53C2\u6570\u6587\u4EF6</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; /opt/kubernetes/cfg/kube-proxy-config.yml &lt;&lt; EOF
kind: KubeProxyConfiguration
apiVersion: kubeproxy.config.k8s.io/v1alpha1
bindAddress: 0.0.0.0
metricsBindAddress: 0.0.0.0:10249
clientConnection:
  kubeconfig: /opt/kubernetes/cfg/kube-proxy.kubeconfig
hostnameOverride: binary-k8s-master1
clusterCIDR: 10.244.0.0/16
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-11-3-3-\u751F\u6210kube-proxy\u8BC1\u4E66\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_8-11-3-3-\u751F\u6210kube-proxy\u8BC1\u4E66\u6587\u4EF6" aria-hidden="true">#</a> 8.11.3.3.\u751F\u6210kube-proxy\u8BC1\u4E66\u6587\u4EF6</h4><pre><code>\u5207\u6362\u5DE5\u4F5C\u76EE\u5F55
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-11-3-4-\u751F\u6210kube-proxy-kubeconfig\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_8-11-3-4-\u751F\u6210kube-proxy-kubeconfig\u6587\u4EF6" aria-hidden="true">#</a> 8.11.3.4.\u751F\u6210kube-proxy.kubeconfig\u6587\u4EF6</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>KUBE_CONFIG=&quot;/opt/kubernetes/cfg/kube-proxy.kubeconfig&quot;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-11-3-5-systemd\u7BA1\u7406kube-proxy" tabindex="-1"><a class="header-anchor" href="#_8-11-3-5-systemd\u7BA1\u7406kube-proxy" aria-hidden="true">#</a> 8.11.3.5.systemd\u7BA1\u7406kube-proxy</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; /usr/lib/systemd/system/kube-proxy.service &lt;&lt; EOF
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-10-3-6-\u542F\u52A8kube-proxy\u5E76\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F" tabindex="-1"><a class="header-anchor" href="#_8-10-3-6-\u542F\u52A8kube-proxy\u5E76\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F" aria-hidden="true">#</a> 8.10.3.6.\u542F\u52A8kube-proxy\u5E76\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F</h4><pre><code>\u5237\u65B0\u914D\u7F6E\u6587\u4EF6\u540E\u542F\u52A8kube-proxy\u5E76\u8BBE\u7F6E\u5F00\u673A\u542F\u52A8
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl daemon-reload &amp;&amp;
systemctl start kube-proxy &amp;&amp;
systemctl enable kube-proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u542F\u52A8\u72B6\u6001\u67E5\u8BE2
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>	systemctl status kube-proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_8-11-4-\u90E8\u7F72\u7F51\u7EDC\u7EC4\u4EF6-calico" tabindex="-1"><a class="header-anchor" href="#_8-11-4-\u90E8\u7F72\u7F51\u7EDC\u7EC4\u4EF6-calico" aria-hidden="true">#</a> 8.11.4.\u90E8\u7F72\u7F51\u7EDC\u7EC4\u4EF6(Calico)</h3><pre><code>Calico\u7B80\u4ECB
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
</code></pre><h3 id="_8-11-5-\u6388\u6743apiserver\u8BBF\u95EEkubelet" tabindex="-1"><a class="header-anchor" href="#_8-11-5-\u6388\u6743apiserver\u8BBF\u95EEkubelet" aria-hidden="true">#</a> 8.11.5.\u6388\u6743apiserver\u8BBF\u95EEkubelet</h3><pre><code>\u5E94\u7528\u573A\u666F\uFF1A\u5982kubectl logs

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_8-12-\u589E\u52A0worker-node" tabindex="-1"><a class="header-anchor" href="#_8-12-\u589E\u52A0worker-node" aria-hidden="true">#</a> 8.12.\u589E\u52A0Worker Node</h2><h3 id="_8-12-1-\u5728\u6240\u6709worker-node\u521B\u5EFA\u5DE5\u4F5C\u76EE\u5F55\u5E76\u62F7\u8D1D\u4E8C\u8FDB\u5236\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_8-12-1-\u5728\u6240\u6709worker-node\u521B\u5EFA\u5DE5\u4F5C\u76EE\u5F55\u5E76\u62F7\u8D1D\u4E8C\u8FDB\u5236\u6587\u4EF6" aria-hidden="true">#</a> 8.12.1.\u5728\u6240\u6709Worker Node\u521B\u5EFA\u5DE5\u4F5C\u76EE\u5F55\u5E76\u62F7\u8D1D\u4E8C\u8FDB\u5236\u6587\u4EF6</h3><pre><code>\u5728\u6240\u6709Worker Node1\u548CWorker Node2\u4E2D\u521B\u5EFA\u5DE5\u4F5C\u76EE\u5F55
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir -p /opt/kubernetes/bin &amp;&amp;
mkdir -p /opt/kubernetes/cfg &amp;&amp;
mkdir -p /opt/kubernetes/ssl &amp;&amp;
mkdir -p /opt/kubernetes/logs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-12-2\u62F7\u8D1Dmaster-node1\u4E0A\u90E8\u7F72\u597D\u7684\u6587\u4EF6\u5230worker-node" tabindex="-1"><a class="header-anchor" href="#_8-12-2\u62F7\u8D1Dmaster-node1\u4E0A\u90E8\u7F72\u597D\u7684\u6587\u4EF6\u5230worker-node" aria-hidden="true">#</a> 8.12.2\u62F7\u8D1DMaster Node1\u4E0A\u90E8\u7F72\u597D\u7684\u6587\u4EF6\u5230Worker Node</h3><pre><code>\u8FDB\u5165Master Node1\uFF0C\u6267\u884C\u4E0B\u9762\u64CD\u4F5C\uFF0C\u955C\u76F8\u5173\u6587\u4EF6\u62F7\u8D1D\u5230Worker Node1\u548CWorker Node2
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-12-3-\u5220\u9664\u6240\u6709worker-node\u4E2Dkubelet\u8BC1\u4E66\u548Ckubeconfig\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_8-12-3-\u5220\u9664\u6240\u6709worker-node\u4E2Dkubelet\u8BC1\u4E66\u548Ckubeconfig\u6587\u4EF6" aria-hidden="true">#</a> 8.12.3.\u5220\u9664\u6240\u6709Worker Node\u4E2Dkubelet\u8BC1\u4E66\u548Ckubeconfig\u6587\u4EF6</h3><pre><code>Worker Node1\u8282\u70B9\uFF08192.168.0.10\uFF09
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>rm -f /opt/kubernetes/cfg/kubelet.kubeconfig &amp;&amp;
rm -f /opt/kubernetes/ssl/kubelet*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>Worker Node2\u8282\u70B9\uFF08192.168.0.11\uFF09
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>rm -f /opt/kubernetes/cfg/kubelet.kubeconfig &amp;&amp;
rm -f /opt/kubernetes/ssl/kubelet*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u8BF4\u660E:
\u8FD9\u51E0\u4E2A\u6587\u4EF6\u662F\u8BC1\u4E66\u7533\u8BF7\u5BA1\u6279\u540E\u81EA\u52A8\u751F\u6210\u7684,\u6BCF\u4E2ANode\u4E0D\u540C,\u5FC5\u987B\u5220\u9664
</code></pre><h3 id="_8-12-4-\u4FEE\u6539worker-node1\u548Cworker-node2\u4E3B\u673A\u540D" tabindex="-1"><a class="header-anchor" href="#_8-12-4-\u4FEE\u6539worker-node1\u548Cworker-node2\u4E3B\u673A\u540D" aria-hidden="true">#</a> 8.12.4. \u4FEE\u6539Worker Node1\u548CWorker Node2\u4E3B\u673A\u540D</h3><pre><code>Worker Node1\uFF08192.168.0.10\uFF09
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sed -i &#39;s/--hostname-override=binary-k8s-master1/--hostname-override=binary-k8s-worker1/g&#39; \\
/opt/kubernetes/cfg/kubelet.conf #\u4FEE\u6539--hostname-override\u7684\u503C\u4E3Abinary-k8s-worker1
sed -i &#39;s/hostnameOverride: binary-k8s-master1/hostnameOverride: binary-k8s-worker1/g&#39; \\
/opt/kubernetes/cfg/kube-proxy-config.yml #\u4FEE\u6539hostnameOverride\u7684\u503Cbinary-k8s-worker1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>Worker Node2\uFF08192.168.0.11\uFF09
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sed -i &#39;s/--hostname-override=binary-k8s-master1/--hostname-override=binary-k8s-worker2/g&#39; \\
/opt/kubernetes/cfg/kubelet.conf #\u4FEE\u6539--hostname-override\u7684\u503C\u4E3Abinary-k8s-worker2
sed -i &#39;s/hostnameOverride: binary-k8s-master1/hostnameOverride: binary-k8s-worker2/g&#39; \\
/opt/kubernetes/cfg/kube-proxy-config.yml #\u4FEE\u6539hostnameOverride\u7684\u503Cbinary-k8s-worker2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-12-5-\u542F\u52A8worker-node1\u548Cworker-node2\u4E2Dkubelet\u5E76\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F" tabindex="-1"><a class="header-anchor" href="#_8-12-5-\u542F\u52A8worker-node1\u548Cworker-node2\u4E2Dkubelet\u5E76\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F" aria-hidden="true">#</a> 8.12.5.\u542F\u52A8Worker Node1\u548CWorker Node2\u4E2Dkubelet\u5E76\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl daemon-reload &amp;&amp; 
systemctl start kubelet kube-proxy &amp;&amp; 
systemctl enable kubelet kube-proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u67E5\u770B\u542F\u52A8\u72B6\u6001
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl status kubelet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl status kube-proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u542F\u52A8\u6545\u969C\u89E3\u51B3
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat /var/log/messages|grep kube-proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_8-12-6-\u5728master1\u4E0A\u540C\u610F\u65B0\u7684node-kubelet\u8BC1\u4E66\u7533\u8BF7" tabindex="-1"><a class="header-anchor" href="#_8-12-6-\u5728master1\u4E0A\u540C\u610F\u65B0\u7684node-kubelet\u8BC1\u4E66\u7533\u8BF7" aria-hidden="true">#</a> 8.12.6.\u5728Master1\u4E0A\u540C\u610F\u65B0\u7684Node kubelet\u8BC1\u4E66\u7533\u8BF7</h3><pre><code>\u67E5\u770B\u8BC1\u4E66\u8BF7\u6C42
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
</code></pre><h3 id="_8-12-7-\u5728master1\u4E0A\u90E8\u7F72kubernetes-dashboard" tabindex="-1"><a class="header-anchor" href="#_8-12-7-\u5728master1\u4E0A\u90E8\u7F72kubernetes-dashboard" aria-hidden="true">#</a> 8.12.7.\u5728Master1\u4E0A\u90E8\u7F72kubernetes-dashboard</h3><pre><code>\u5207\u6362\u76EE\u5F55\u5E76\u5728\u8BE5\u76EE\u5F55\u4E2D\u4E0B\u8F7Dkubernetes-dashboard\u5B89\u88C5\u6240\u9700\u8981\u7684yaml\u6587\u4EF6	
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
</code></pre><h3 id="_8-12-8-\u5728master1\u4E0A\u90E8\u7F72coredns" tabindex="-1"><a class="header-anchor" href="#_8-12-8-\u5728master1\u4E0A\u90E8\u7F72coredns" aria-hidden="true">#</a> 8.12.8.\u5728Master1\u4E0A\u90E8\u7F72CoreDNS</h3><pre><code>\u4ECB\u7ECD
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
</code></pre><h2 id="_8-13-\u589E\u52A0master2\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#_8-13-\u589E\u52A0master2\u8282\u70B9" aria-hidden="true">#</a> 8.13.\u589E\u52A0Master2\u8282\u70B9</h2><div class="custom-container danger"><p class="custom-container-title">\u7279\u522B\u7279\u522B\u6CE8\u610F</p><p>\u4E00\u5B9A\u8981\u5148\u6267\u884C\u6700\u5F00\u59CB\u76848.1\u7AE0\u8282\u516C\u5171\u6B65\u9AA4\uFF0C\u5982\u5173\u95ED\u9632\u706B\u5899\u7B49\u64CD\u4F5C\uFF0C\u5426\u5219\u662F\u6210\u529F\u6DFB\u52A0Master2\u8282\u70B9\u7684</p></div><h3 id="_8-13-1-kubernetes\u96C6\u7FA4\u67B6\u6784\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_8-13-1-kubernetes\u96C6\u7FA4\u67B6\u6784\u7B80\u4ECB" aria-hidden="true">#</a> 8.13.1.Kubernetes\u96C6\u7FA4\u67B6\u6784\u7B80\u4ECB</h3><pre><code>Kubernetes\u4F5C\u4E3A\u5BB9\u5668\u96C6\u7FA4\u7CFB\u7EDF\uFF0C\u901A\u8FC7\u5065\u5EB7\u68C0\u67E5+\u91CD\u542F\u7B56\u7565\u5B9E\u73B0\u4E86Pod\u6545\u969C\u81EA\u6211\u4FEE\u590D\u80FD\u529B\uFF0C\u901A\u8FC7\u8C03\u5EA6\u7B97\u6CD5
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
</code></pre><table><thead><tr><th style="text-align:left;">\u89D2\u8272</th><th style="text-align:left;">IP</th><th style="text-align:center;">\u7EC4\u4EF6</th></tr></thead><tbody><tr><td style="text-align:left;">binary-k8s-master1</td><td style="text-align:left;">192.168.0.9</td><td style="text-align:center;">etcd <br> docker <br> kube-apiserver kube-controller-manager kube-scheduler <br> kubelet kube-proxy <br> nginx keepalived</td></tr><tr><td style="text-align:left;">binary-k8s-master2</td><td style="text-align:left;">192.168.0.12</td><td style="text-align:center;">etcd <br> docker <br> kube-apiserver kube-controller-manager kube-scheduler <br> kubelet kube-proxy <br> nginx keepalived</td></tr><tr><td style="text-align:left;">binary-k8s-worker1</td><td style="text-align:left;">192.168.0.10</td><td style="text-align:center;">etcd <br> docker <br> kubelet kube-proxy</td></tr><tr><td style="text-align:left;">binary-k8s-worker2</td><td style="text-align:left;">192.168.0.11</td><td style="text-align:center;">etcd <br> docker <br> kubelet kube-proxy</td></tr><tr><td style="text-align:left;">\u8D1F\u8F7D\u5747\u8861\u5668(\u865A\u62DFIP)</td><td style="text-align:left;">192.168.0.88</td><td style="text-align:center;"></td></tr></tbody></table><div class="custom-container tip"><p class="custom-container-title">\u7279\u522B\u8BF4\u660E</p><p>\u73B0\u5728\u9700\u8981\u518D\u589E\u52A0\u4E00\u53F0\u65B0\u670D\u52A1\u5668\uFF0C\u4F5C\u4E3AMaster2 Node\uFF0CIP\u662F192.168.0.12\u3002Master Node2 \u4E0E\u5DF2\u90E8\u7F72\u7684 Master Node1\u6240\u6709\u64CD\u4F5C\u4E00\u81F4\u3002\u6240\u4EE5\u6211\u4EEC\u53EA\u9700\u5C06Master1\u6240\u6709K8s\u6587\u4EF6\u62F7\u8D1D\u8FC7\u6765\uFF0C\u518D\u4FEE\u6539\u4E0B\u670D\u52A1\u5668IP\u548C\u4E3B\u673A\u540D \u542F\u52A8\u5373\u53EF\u3002</p></div><h3 id="_8-13-2-\u7ED9master-node2\u5B89\u88C5docker" tabindex="-1"><a class="header-anchor" href="#_8-13-2-\u7ED9master-node2\u5B89\u88C5docker" aria-hidden="true">#</a> 8.13.2.\u7ED9Master Node2\u5B89\u88C5Docker</h3><pre><code>\u8FDB\u5165Master Node1\uFF0C\u5C06docker\u5B89\u88C5\u6587\u4EF6\u62F7\u8D1D\u5230Master Node2
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_8-13-5-\u7ED9master-node2\u8282\u70B9\u62F7\u8D1D\u6240\u6709\u9700\u8981\u7684\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#_8-13-5-\u7ED9master-node2\u8282\u70B9\u62F7\u8D1D\u6240\u6709\u9700\u8981\u7684\u8BC1\u4E66" aria-hidden="true">#</a> 8.13.5.\u7ED9Master Node2\u8282\u70B9\u62F7\u8D1D\u6240\u6709\u9700\u8981\u7684\u8BC1\u4E66</h3><pre><code>\u5728Master Node2\u4E0A\u521B\u5EFAetcd\u8BC1\u4E66\u76EE\u5F55
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
</code></pre><h3 id="_8-13-6-\u542F\u52A8master\u6240\u6709\u670D\u52A1\u5E76\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F" tabindex="-1"><a class="header-anchor" href="#_8-13-6-\u542F\u52A8master\u6240\u6709\u670D\u52A1\u5E76\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F" aria-hidden="true">#</a> 8.13.6.\u542F\u52A8Master\u6240\u6709\u670D\u52A1\u5E76\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl daemon-reload &amp;&amp;
systemctl start kube-apiserver &amp;&amp;
systemctl start kube-controller-manager &amp;&amp;
systemctl start kube-scheduler &amp;&amp;
systemctl start kubelet kube-proxy &amp;&amp;
systemctl enable kube-apiserver &amp;&amp;
systemctl enable kube-controller-manager &amp;&amp;
systemctl enable kube-scheduler &amp;&amp;
systemctl enable kubelet &amp;&amp;
systemctl enable kube-proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-13-7-\u5728master\u67E5\u770B\u96C6\u7FA4\u7EC4\u4EF6\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#_8-13-7-\u5728master\u67E5\u770B\u96C6\u7FA4\u7EC4\u4EF6\u72B6\u6001" aria-hidden="true">#</a> 8.13.7.\u5728Master\u67E5\u770B\u96C6\u7FA4\u7EC4\u4EF6\u72B6\u6001</h3><pre><code>\u6CE8\u610F\uFF1A\u5982\u679C\u4E0A\u9762\u64CD\u4F5C\u65E0\u8BEF\u5219\u8FD9\u4E00\u6B65\u5C31\u53EF\u4EE5\u67E5\u770B\u5230\u96C6\u7FA4\u4E2D\u7EC4\u4EF6\u7684\u8FD0\u884C\u72B6\u6001\u4E86

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
</code></pre><h3 id="_8-13-8-\u5BA1\u6279\u6240\u6709worker-node\u4E0A\u7684kubelet\u8BC1\u4E66\u7533\u8BF7" tabindex="-1"><a class="header-anchor" href="#_8-13-8-\u5BA1\u6279\u6240\u6709worker-node\u4E0A\u7684kubelet\u8BC1\u4E66\u7533\u8BF7" aria-hidden="true">#</a> 8.13.8.\u5BA1\u6279\u6240\u6709Worker Node\u4E0A\u7684kubelet\u8BC1\u4E66\u7533\u8BF7</h3><pre><code>\u67E5\u770B\u8BC1\u4E66\u7533\u8BF7
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
</code></pre><h2 id="_8-14-\u90E8\u7F72nginx-keepalived\u9AD8\u53EF\u7528\u8D1F\u8F7D\u5747\u8861\u5668" tabindex="-1"><a class="header-anchor" href="#_8-14-\u90E8\u7F72nginx-keepalived\u9AD8\u53EF\u7528\u8D1F\u8F7D\u5747\u8861\u5668" aria-hidden="true">#</a> 8.14.\u90E8\u7F72Nginx+Keepalived\u9AD8\u53EF\u7528\u8D1F\u8F7D\u5747\u8861\u5668</h2><h3 id="_8-14-1-nginx\u548Ckeepalived\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_8-14-1-nginx\u548Ckeepalived\u7B80\u4ECB" aria-hidden="true">#</a> 8.14.1.Nginx\u548CKeepalived\u7B80\u4ECB</h3><pre><code>Nginx\u662F\u4E00\u4E2A\u4E3B\u6D41Web\u670D\u52A1\u548C\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u8FD9\u91CC\u7528\u56DB\u5C42\u5B9E\u73B0\u5BF9apiserver\u5B9E\u73B0\u8D1F\u8F7D\u5747\u8861\u3002Keepalived\u662F\u4E00\u4E2A\u4E3B\u6D41\u9AD8\u53EF
\u7528\u8F6F\u4EF6\uFF0C\u57FA\u4E8EVIP\u7ED1\u5B9A\u5B9E\u73B0\u670D\u52A1\u5668\u53CC\u673A\u70ED\u5907\uFF0C\u5728\u4E0A\u8FF0\u62D3\u6251\u4E2D\uFF0CKeepalived\u4E3B\u8981\u6839\u636ENginx\u8FD0\u884C\u72B6\u6001\u5224\u65AD\u662F\u5426\u9700\u8981\u6545\u969C\u8F6C\u79FB
\uFF08\u6F02\u79FBVIP\uFF09\uFF0C\u4F8B\u5982\u5F53Nginx\u4E3B\u8282\u70B9\u6302\u6389\uFF0CVIP\u4F1A\u81EA\u52A8\u7ED1\u5B9A\u5728Nginx\u5907\u8282\u70B9\uFF0C\u4ECE\u800C\u4FDD\u8BC1VIP\u4E00\u76F4\u53EF\u7528\uFF0C\u5B9E\u73B0Nginx\u9AD8\u53EF\u7528\u3002
\u5982\u679C\u4F60\u662F\u5728\u516C\u6709\u4E91\u4E0A\uFF0C\u4E00\u822C\u90FD\u4E0D\u652F\u6301keepalived\uFF0C\u90A3\u4E48\u4F60\u53EF\u4EE5\u76F4\u63A5\u7528\u5B83\u4EEC\u7684\u8D1F\u8F7D\u5747\u8861\u5668\u4EA7\u54C1\uFF0C\u76F4\u63A5\u8D1F\u8F7D\u5747\u8861\u591A\u53F0Master 
kube-apiserver\uFF0C\u67B6\u6784\u4E0E\u4E0A\u9762\u4E00\u6837\u3002
</code></pre><h3 id="_8-14-2-\u5728\u4E24\u53F0master-node\u4E0A\u5B89\u88C5\u8F6F\u4EF6" tabindex="-1"><a class="header-anchor" href="#_8-14-2-\u5728\u4E24\u53F0master-node\u4E0A\u5B89\u88C5\u8F6F\u4EF6" aria-hidden="true">#</a> 8.14.2.\u5728\u4E24\u53F0Master Node\u4E0A\u5B89\u88C5\u8F6F\u4EF6</h3><pre><code>\u4E0B\u8F7Dnginx\u548Ckeepalived
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B \u914D\u7F6E\u8BF4\u660E \u200B keepalived\u6839\u636E\u811A\u672C\u8FD4\u56DE\u72B6\u6001\u7801\uFF080\u4E3A\u5DE5\u4F5C\u6B63\u5E38\uFF0C\u975E0\u4E0D\u6B63\u5E38\uFF09\u5224\u65AD\u662F\u5426\u6545\u969C\u8F6C\u79FB\u3002</p><h3 id="_8-14-3-nginx\u589E\u52A0steam\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#_8-14-3-nginx\u589E\u52A0steam\u6A21\u5757" aria-hidden="true">#</a> 8.14.3.Nginx\u589E\u52A0Steam\u6A21\u5757</h3><h4 id="_8-14-3-1-\u67E5\u770Bnginx\u7248\u672C\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#_8-14-3-1-\u67E5\u770Bnginx\u7248\u672C\u6A21\u5757" aria-hidden="true">#</a> 8.14.3.1.\u67E5\u770BNginx\u7248\u672C\u6A21\u5757</h4><pre><code>nginx -V
\u6CE8\u610F\uFF1A\u5982\u679C\u5DF2\u7ECF\u5B89\u88C5 --with-stream\u6A21\u5757,\u540E\u9762\u7684\u6B65\u9AA4\u53EF\u4EE5\u8DF3\u8FC7
</code></pre><h4 id="_8-14-3-2-master1\u548Cmaster2\u5B89\u88C5stream\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#_8-14-3-2-master1\u548Cmaster2\u5B89\u88C5stream\u6A21\u5757" aria-hidden="true">#</a> 8.14.3.2.Master1\u548CMaster2\u5B89\u88C5Stream\u6A21\u5757</h4><pre><code>\u5907\u4EFDMaster Node1\u548CMaster Node2\u4E0A\u539F\u6765\u7684Nginx\u6587\u4EF6
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-14-4-\u542F\u52A8nginx\u3001keepalived\u5E76\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F-master1-master2" tabindex="-1"><a class="header-anchor" href="#_8-14-4-\u542F\u52A8nginx\u3001keepalived\u5E76\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F-master1-master2" aria-hidden="true">#</a> 8.14.4.\u542F\u52A8nginx\u3001keepalived\u5E76\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F(master1/master2)</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl daemon-reload &amp;&amp;
systemctl start nginx keepalived &amp;&amp;
systemctl enable nginx keepalived
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-14-5-\u67E5\u770Bkeepalived\u5DE5\u4F5C\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#_8-14-5-\u67E5\u770Bkeepalived\u5DE5\u4F5C\u72B6\u6001" aria-hidden="true">#</a> 8.14.5.\u67E5\u770Bkeepalived\u5DE5\u4F5C\u72B6\u6001</h3><pre><code>\u67E5\u770BMaster1\u7F51\u5361\u8BE6\u7EC6\u4FE1\u606F
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
</code></pre><h3 id="_8-14-6-nginx-keepalived\u9AD8\u53EF\u7528\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_8-14-6-nginx-keepalived\u9AD8\u53EF\u7528\u6D4B\u8BD5" aria-hidden="true">#</a> 8.14.6.Nginx+keepalived\u9AD8\u53EF\u7528\u6D4B\u8BD5</h3><pre><code>\u5728\u4E3B\u8282\u70B9Master Node1\u8282\u70B9\u6267\u884C\u5173\u95EDnginx
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
</code></pre><h3 id="_8-14-7-\u6D4B\u8BD5\u8D1F\u8F7D\u5747\u8861\u5668" tabindex="-1"><a class="header-anchor" href="#_8-14-7-\u6D4B\u8BD5\u8D1F\u8F7D\u5747\u8861\u5668" aria-hidden="true">#</a> 8.14.7.\u6D4B\u8BD5\u8D1F\u8F7D\u5747\u8861\u5668</h3><pre><code>\u627EK8s\u96C6\u7FA4\u4E2D\u4EFB\u610F\u4E00\u4E2A\u8282\u70B9\uFF0C\u4F7F\u7528curl\u67E5\u770BK8s\u7248\u672C\u6D4B\u8BD5\uFF0C\u4F7F\u7528VIP\u8BBF\u95EE
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
</code></pre><h3 id="_8-14-8-\u4FEE\u6539\u6240\u6709\u7684worker-node\u8FDE\u63A5lb-vip" tabindex="-1"><a class="header-anchor" href="#_8-14-8-\u4FEE\u6539\u6240\u6709\u7684worker-node\u8FDE\u63A5lb-vip" aria-hidden="true">#</a> 8.14.8.\u4FEE\u6539\u6240\u6709\u7684Worker Node\u8FDE\u63A5LB VIP</h3><pre><code>\u4E3A\u4EC0\u4E48\u8981\u6539\u4E3A\u8FDE\u63A5LB VIP
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
</code></pre><h2 id="_8-15-\u90E8\u7F72\u5E38\u89C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_8-15-\u90E8\u7F72\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a> 8.15.\u90E8\u7F72\u5E38\u89C1\u95EE\u9898</h2><h3 id="_8-15-1\u7CFB\u7EDF\u65AD\u7535\u540E-\u67D0\u4E2Aetcd\u8282\u70B9\u65E0\u6CD5\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#_8-15-1\u7CFB\u7EDF\u65AD\u7535\u540E-\u67D0\u4E2Aetcd\u8282\u70B9\u65E0\u6CD5\u542F\u52A8" aria-hidden="true">#</a> 8.15.1\u7CFB\u7EDF\u65AD\u7535\u540E,\u67D0\u4E2Aetcd\u8282\u70B9\u65E0\u6CD5\u542F\u52A8</h3><pre><code>\u62A5\u9519\u4FE1\u606F
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-15-2-the-connection-to-the-server-localhost-8080-was-refused-did-you-specify-the-right-host-or-port" tabindex="-1"><a class="header-anchor" href="#_8-15-2-the-connection-to-the-server-localhost-8080-was-refused-did-you-specify-the-right-host-or-port" aria-hidden="true">#</a> 8.15.2 The connection to the server localhost:8080 was refused - did you specify the right host or port?</h3><pre><code>8.10.\u4F7F\u7528kubectl\u67E5\u770B\u96C6\u7FA4\u72B6\u6001\u7AE0\u8282\u6CA1\u6709\u6B63\u786E\u6267\u884C\u4F1A\u62A5\u8FD9\u4E2A\u9519
</code></pre><h2 id="_8-16-\u90E8\u7F72\u6D4B\u8BD5\u7A0B\u5E8F" tabindex="-1"><a class="header-anchor" href="#_8-16-\u90E8\u7F72\u6D4B\u8BD5\u7A0B\u5E8F" aria-hidden="true">#</a> 8.16.\u90E8\u7F72\u6D4B\u8BD5\u7A0B\u5E8F</h2><pre><code>\u521B\u5EFAguestbook
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
</code></pre>`,690);function ce(r,oe){const a=t("MyComponent"),s=t("ExternalLinkIcon");return c(),o("div",null,[v,i(a),m,e("iframe",{src:r.$withBase("/markmap/test.html"),width:"100%",height:"400",frameborder:"0",scrolling:"No",leftmargin:"0",topmargin:"0"},null,8,b),p,e("details",g,[x,e("iframe",{src:r.$withBase("/markmap/test.html"),width:"100%",height:"400",frameborder:"0",scrolling:"No",leftmargin:"0",topmargin:"0"},null,8,h)]),k,e("p",null,[f,y,q,_,E,I,N,T,S,e("a",w,[R,i(s)]),A,C,O,P,M]),D,e("p",null,[L,e("a",U,[j,i(s)])]),F,e("p",null,[V,e("a",B,[K,i(s)]),W,G,$,e("a",H,[z,i(s)]),Y,J,Q,e("a",X,[Z,i(s)]),ee,ne,ie,e("a",se,[de,i(s)]),re,te,ae]),le])}var ve=l(u,[["render",ce],["__file","centos7.html.vue"]]);export{ve as default};
