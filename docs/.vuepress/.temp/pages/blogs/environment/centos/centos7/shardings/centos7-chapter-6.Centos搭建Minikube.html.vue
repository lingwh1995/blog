<template><div><h1 id="_6-centos搭建minikube" tabindex="-1"><a class="header-anchor" href="#_6-centos搭建minikube" aria-hidden="true">#</a> 6.Centos搭建Minikube</h1>
<h2 id="_6-1-章节内容概述" tabindex="-1"><a class="header-anchor" href="#_6-1-章节内容概述" aria-hidden="true">#</a> 6.1.章节内容概述</h2>
<pre><code>本章节涉及主要内容有：
 6.1.章节内容概述
 6.2.章节内容大纲
 6.3.minikube介绍
 6.4.版本说明
 6.5.开启Vmware虚拟化
 6.6.安装kubectl	
 6.7.安装minikube
 6.8.使用阿里云加速docker hub
 6.9.启动minikube
 6.10.minikube常用命令	
具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看，本章节内容中图片较少，主要以实用为主，所有代码
均经过严格测试，可直接复制运行即可。
</code></pre>
<h2 id="_6-2-章节内容大纲" tabindex="-1"><a class="header-anchor" href="#_6-2-章节内容大纲" aria-hidden="true">#</a> 6.2.章节内容大纲</h2>
<Markmap localtion="/enhance/markmap/environment/centos/centos7/chapter/centos7-outline5-chapter6.html"/>
<h2 id="_6-3-minikube介绍" tabindex="-1"><a class="header-anchor" href="#_6-3-minikube介绍" aria-hidden="true">#</a> 6.3.minikube介绍</h2>
<pre><code>Minikube这个工具支持在虚拟机上运行一套单节点的k8s集群
</code></pre>
<h2 id="_6-4-版本说明" tabindex="-1"><a class="header-anchor" href="#_6-4-版本说明" aria-hidden="true">#</a> 6.4.版本说明</h2>
<pre><code>minikube:1.2.6 kubectl client:1.18.0
</code></pre>
<h2 id="_6-5-开启vmware虚拟化" tabindex="-1"><a class="header-anchor" href="#_6-5-开启vmware虚拟化" aria-hidden="true">#</a> 6.5.开启Vmware虚拟化</h2>
<pre><code>查看是否支持虚拟化，开始安装前，先查看本地机器是否支持虚拟化，有输出就支持
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>grep -E --color 'vmx|svm' /proc/cpuinfo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>开启虚拟化
Vmware Workstation -&gt;Centos 64右键菜单 —&gt; 设置 
	-&gt; 处理器 -&gt;勾选 虚拟化IntelVT-x/EPT 或 ADM-V/RVI(V)

设置处理器数量设置为大于等于2,内存大于等于2G
</code></pre>
<h2 id="_6-6-安装kubectl" tabindex="-1"><a class="header-anchor" href="#_6-6-安装kubectl" aria-hidden="true">#</a> 6.6.安装kubectl</h2>
<pre><code>简介
kubectl 是一个用来跟 K8S 集群进行交互的命令行工具
	
下载kubectl，上传到/opt/software/package，赋予可运行权限,并放入/usr/local/bin/目录下
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>chmod +x ./kubectl &amp;&amp; cp ./kubectl /usr/local/bin/kubectl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>查看kubectl版本
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>kubectl version --client
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_6-7-安装minikube" tabindex="-1"><a class="header-anchor" href="#_6-7-安装minikube" aria-hidden="true">#</a> 6.7.安装minikube</h2>
<pre><code>下载minikube
到 https://github.com/kubernetes/minikube/releases 找到minikube-linux-amd64并下载

上传到/opt/software/package

赋予运行权限并复制到/usr/local/bin/minikube
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>chmod +x ./minikube-linux-amd64 &amp;&amp; cp ./minikube-linux-amd64 /usr/local/bin/minikube
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_6-8-使用阿里云加速docker-hub" tabindex="-1"><a class="header-anchor" href="#_6-8-使用阿里云加速docker-hub" aria-hidden="true">#</a> 6.8.使用阿里云加速docker hub</h2>
<pre><code>登录阿里云docker相关页面
访问：https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors
登陆-&gt;左侧菜单选中镜像加速器-&gt;查看加速镜像地址 https://ngviu28h.mirror.aliyuncs.com
</code></pre>
<h2 id="_6-9-启动minikube" tabindex="-1"><a class="header-anchor" href="#_6-9-启动minikube" aria-hidden="true">#</a> 6.9.启动minikube</h2>
<pre><code>注意事项
启动minikube之前需要先启动docker，如无法启动加上--kubernetes-version=v具体版本号

使用docker作为虚拟化引擎(需要先安装Docker)
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>minikube start --driver=docker --force \
	--image-mirror-country='cn' \
	--image-repository='registry.cn-hangzhou.aliyuncs.com/google_containers' \
	--registry-mirror='https://ngviu28h.mirror.aliyuncs.com' \
	--kubernetes-version=v1.23.8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>使用virtualbox作为虚拟化引擎(需要先安装Virtualbox)

下载Centos7版VirtualBox
访问：https://www.virtualbox.org/wiki/Downloads，选择AMD64版本下载
上传到/opt/software/package中
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>VirtualBox-6.1-6.1.34_150636_el7-2.x86_64.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>安装问题解决(virtualbox内核无法编译)
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>sudo yum install gcc kernel kernel-devel -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>重启机器
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>systemctl reboot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>安装VirtualBox
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yum install VirtualBox-6.1-6.1.34_150636_el7-2.x86_64.rpm -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>补充内容：Centos版VirtualBox操作命令						
VBoxManage list runningvms //查看机器列表
VBoxHeadless -startvm &quot;虚拟机名&quot; //启动虚拟机
测试VirtualBox是否安装成功
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>virtualbox
rcvboxdrv setup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>使用virtualbox作为虚拟化引擎
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>minikube start --driver=virtualbox --force \
	--image-mirror-country='cn' \
	--image-repository='registry.cn-hangzhou.aliyuncs.com/google_containers' \
	--registry-mirror='https://ngviu28h.mirror.aliyuncs.com' \
	--kubernetes-version=v1.23.8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-10-minikube常用命令" tabindex="-1"><a class="header-anchor" href="#_6-10-minikube常用命令" aria-hidden="true">#</a> 6.10.minikube常用命令</h2>
<pre><code>查看minikube日志
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>minikube logs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>查看minikube状态
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>minikube status								
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>查看节点				
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>minikube kubectl -- get po -A
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>停止集群
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>minikube stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>清空集群
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>minikube delete --all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>安装集群可视化 Web UI 控制台
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>minikube dashboard
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>卸载minikube
停止运行
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>minikube stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>执行卸载命令
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>minikube delete
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>删除 ~/.minikube 目录缓存的文件
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>rm -rf ~/.minikube	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>
