<template><div><h1 id="_5-centos搭建rancher" tabindex="-1"><a class="header-anchor" href="#_5-centos搭建rancher" aria-hidden="true">#</a> 5.Centos搭建Rancher</h1>
<h2 id="_5-1-章节内容概述" tabindex="-1"><a class="header-anchor" href="#_5-1-章节内容概述" aria-hidden="true">#</a> 5.1.章节内容概述</h2>
<pre><code>本章节涉及主要内容有：

具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看，本章节内容中图片较少，主要以实用为主，所有代码
均经过严格测试，可直接复制运行即可。
</code></pre>
<h2 id="_5-2-章节内容大纲" tabindex="-1"><a class="header-anchor" href="#_5-2-章节内容大纲" aria-hidden="true">#</a> 5.2.章节内容大纲</h2>
<Markmap localtion="/enhance/markmap/environment/centos/centos7/chapter/centos7-outline5-chapter5.html"/>
<pre><code>下载rancher
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker pull rancher/server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>启动rancher
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker run -di --name=rancher -p9003:8080 rancher/server:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>使用rancher扩容/缩容注意事项
如果要使用扩容或者缩容功能,不要配置eureka的如下信息
eureka:
  instance:
	#使用rancher扩容不能配置instance-id,否则会出问题
	#instance-id: ${spring.application.name} 
	#使用rancher扩容不能配置iip-address,否则会出问题
	#ip-address: 192.168.0.4				
</code></pre>
</div></template>
