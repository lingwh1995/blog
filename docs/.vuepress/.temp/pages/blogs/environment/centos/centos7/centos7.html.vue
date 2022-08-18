<template><div><Banner localtion="/banner/particles/particles.html"/>
<h1 id="intro" tabindex="-1"><a class="header-anchor" href="#intro" aria-hidden="true">#</a> 博客内容介绍</h1>
<h2 id="博客内容概述" tabindex="-1"><a class="header-anchor" href="#博客内容概述" aria-hidden="true">#</a> 博客内容概述</h2>
<pre><code>本篇博客涉及主要内容有：
 1.安装Linux操作系统
 2.Linux操作系统初始设置
 3.搭建基础开发环境
 4.Centos搭建docker
 5.Centos搭建Rancher
 6.Centos搭建Minikube
 7.kubeadm搭建Kubernetes
 8.二进制包搭建Kubernetes
具体每个章节中包含的内容可使通过下面博客内容大纲进行查看，博客内容中图片较少，主要以实用为主，所有代码均经过严格测试，可直接复制运行即可。
</code></pre>
<h2 id="博客内容大纲" tabindex="-1"><a class="header-anchor" href="#博客内容大纲" aria-hidden="true">#</a> 博客内容大纲</h2>
<h3 id="简单版博客内容大纲" tabindex="-1"><a class="header-anchor" href="#简单版博客内容大纲" aria-hidden="true">#</a> <a href="/enhance/markmap/environment/centos/centos7/centos7-outline2.html" target="_blank">简单版博客内容大纲</a></h3>
<!--最深展示二级标题内容-->
<Markmap localtion="/enhance/markmap/environment/centos/centos7/centos7-outline2.html"/>
<blockquote></blockquote>
<!--最深展示五级标题内容-->
<h3 id="详细版博客内容大纲" tabindex="-1"><a class="header-anchor" href="#详细版博客内容大纲" aria-hidden="true">#</a> <a href="/enhance/markmap/environment/centos/centos7/centos7-outline3.html" target="_blank">详细版博客内容大纲</a></h3>
<Markmap localtion="/enhance/markmap/environment/centos/centos7/centos7-outline3.html"/>
<blockquote></blockquote>
<h1 id="1." tabindex="-1"><a class="header-anchor" href="#1." aria-hidden="true">#</a> 1.安装Linux操作系统</h1>
<h2 id="_1-1-章节内容概述" tabindex="-1"><a class="header-anchor" href="#_1-1-章节内容概述" aria-hidden="true">#</a> 1.1.章节内容概述</h2>
<pre><code>本章节涉及主要内容有：
 1.1.章节内容概述
 1.2.章节内容大纲
 1.3.Linux重要目录介绍
 1.4.Centos镜像下载
 1.5.安装前Vmaware相关设置
 1.6.安装时分区大小设置
具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看，本章节内容中图片较少，主要以实用为主，所有代码均经过严格测试，可直接复制运行即可。
</code></pre>
<h2 id="_1-2-章节内容大纲" tabindex="-1"><a class="header-anchor" href="#_1-2-章节内容大纲" aria-hidden="true">#</a> <a href="/enhance/markmap/environment/centos/centos7/chapter/centos7-outline5-chapter1.html" target="_blank">1.2.章节内容大纲</a></h2>
<Markmap localtion="/enhance/markmap/environment/centos/centos7/chapter/centos7-outline5-chapter1.html"/>
<h2 id="_1-3-linux重要目录介绍" tabindex="-1"><a class="header-anchor" href="#_1-3-linux重要目录介绍" aria-hidden="true">#</a> 1.3.Linux重要目录介绍</h2>
<pre><code>/usr → C:/Windows/ /*系统级的目录
/usr/lib → C:/Windows/System32
/usr/local → C:/Progrem Files/ /*用户级的程序目录，用户自己编译的软件默认会安装到这个目录下
/opt → D:/Software /*额外安装的可选应用程序包所放置的位置。一般情况下，我们可以把tomcat等都安装到这里。
/usr/src /*系统级的源码目录，linux内核的源代码就放在/usr/src/linux里。
/home 存放所有用户文件的根目录，是用户主目录的基点，比如用户user的主目录就是/home/user，可以用~user表示
/root 超级用户（系统管理员）的主目录（特权阶级^o^）
/mnt 系统管理员安装临时文件系统的安装点，系统提供这个目录是让用户临时挂载其他的文件系统。
/boot 存放用于系统引导时使用的各种文件
/tmp 用于存放各种临时文件，是公用的临时文件存储点。
/var 存放临时文件，如各种服务的日志文件。
</code></pre>
<h2 id="_1-4-centos镜像下载" tabindex="-1"><a class="header-anchor" href="#_1-4-centos镜像下载" aria-hidden="true">#</a> 1.4.Centos镜像下载</h2>
<pre><code>如果是学习环境，建议安装centos mini版镜像，生产环境可以安装完整版本

下载地址
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>http://ftp.sjtu.edu.cn/centos/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_1-5-安装前vmaware相关设置" tabindex="-1"><a class="header-anchor" href="#_1-5-安装前vmaware相关设置" aria-hidden="true">#</a> 1.5.安装前Vmaware相关设置</h2>
<pre><code>虚拟机联网设置
导航栏-&gt;编辑-&gt;虚拟网络编辑器-&gt;VMnet8NAT模式-&gt;更改设置-&gt;VMnet8NAT模式
	-&gt;更改底部子网:192.168.0.0，子网掩码:255.255.255.0-&gt;NAT设置-&gt;网关IP:192.168.0.2

Vmware网卡说明
VMnet0：用于虚拟桥接网络下的虚拟交换机
VMnet1：用于虚拟Host-Only网络下的虚拟交换机
VMnet8：用于虚拟NAT网络下的虚拟交换机
VMware NetworkAdepter VMnet1：Host用于与Host-Only虚拟网络进行通信的虚拟网卡
VMware NetworkAdepter VMnet8：Host用于与NAT虚拟网络进行通信的虚拟网卡
</code></pre>
<h2 id="_1-6-安装时分区大小设置" tabindex="-1"><a class="header-anchor" href="#_1-6-安装时分区大小设置" aria-hidden="true">#</a> 1.6.安装时分区大小设置</h2>
<pre><code>/boot	/*存放系统启动引导文件，建议大小：512mb
/swap 	/*交换区，建议大小：2g
/*主分区，剩下的空间全部分给这个分区
</code></pre>
<h1 id="2." tabindex="-1"><a class="header-anchor" href="#2." aria-hidden="true">#</a> 2.Linux操作系统初始设置</h1>
<h2 id="_2-1-章节内容概述" tabindex="-1"><a class="header-anchor" href="#_2-1-章节内容概述" aria-hidden="true">#</a> 2.1.章节内容概述</h2>
<pre><code>本章节涉及主要内容有：
 2.1.章节内容概述
 2.2.章节内容大纲
 2.3.配置静态IP地址
 2.4.解决远程连接无法连接的问题
 2.5.设置系统环境变量
 2.6.安装curl
 2.7.配置yml源
 2.8.安装常用基础系统软件
具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看，本章节内容中图片较少，主要以实用为主，所有代码均经过严格测试，可直接复制运行即可。
</code></pre>
<h2 id="_2-2-章节内容大纲" tabindex="-1"><a class="header-anchor" href="#_2-2-章节内容大纲" aria-hidden="true">#</a> <a href="/enhance/markmap/environment/centos/centos7/chapter/centos7-outline5-chapter2.html" target="_blank">2.2.章节内容大纲</a></h2>
<Markmap localtion="/enhance/markmap/environment/centos/centos7/chapter/centos7-outline5-chapter2.html"/>
<h2 id="_2-3-配置静态ip地址" tabindex="-1"><a class="header-anchor" href="#_2-3-配置静态ip地址" aria-hidden="true">#</a> 2.3.配置静态IP地址</h2>
<pre><code>修改网络配置
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vi /etc/sysconfig/network-scripts/ifcfg-ens32(最后一个为网卡名称)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>修改后内容如下
bootproto=static
onboot=yes
#在最后加上几行，IP地址、子网掩码、网关、dns服务器，注意：和网关IP处于同一个网段
IPADDR=192.168.0.4
NETMASK=255.255.255.0
#和上面网关IP保持 一致
GATEWAY=192.168.0.2
DNS1=8.8.8.8
DNS2=8.8.4.4

重启网络
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>systemctl restart network
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-4-解决远程连接无法连接的问题" tabindex="-1"><a class="header-anchor" href="#_2-4-解决远程连接无法连接的问题" aria-hidden="true">#</a> 2.4.解决远程连接无法连接的问题</h2>
<pre><code>修改sshd配置文件
说明：sshd_config里面的UseDNS=no【原本为yes】
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vim /etc/ssh/sshd_config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>重启ssh服务
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>systemctl restart sshd.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-5-设置系统环境变量" tabindex="-1"><a class="header-anchor" href="#_2-5-设置系统环境变量" aria-hidden="true">#</a> 2.5.设置系统环境变量</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>echo "export LC_ALL=en_US.UTF-8"  >>  /etc/profile &amp;&amp;
source /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-6-安装curl" tabindex="-1"><a class="header-anchor" href="#_2-6-安装curl" aria-hidden="true">#</a> 2.6.安装curl</h2>
<pre><code>后面的操作需要curl，所以首先安装curl
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yum -y install curl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-7-配置yml源" tabindex="-1"><a class="header-anchor" href="#_2-7-配置yml源" aria-hidden="true">#</a> 2.7.配置yml源</h2>
<pre><code>下载阿里源，并上传到/opt/software/package
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>curl http://mirrors.aliyun.com/repo/Centos-7.repo -o Centos-7.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>进入/etc/yum.repos.d目录中，备份CentOS-Base.repo
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cd /etc/yum.repos.d &amp;&amp; cp CentOS-Base.repo CentOS-Base.repo.bak
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>复制/opt/software/package/Centos-7.repo到当前目录并重命名为CentOS-Base.repo
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cp /opt/software/package/Centos-7.repo /CentOS-Base.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>生成yum源缓存并更新yum源
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yum makecache &amp;&amp; yum update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-8-安装常用基础系统软件" tabindex="-1"><a class="header-anchor" href="#_2-8-安装常用基础系统软件" aria-hidden="true">#</a> 2.8.安装常用基础系统软件</h2>
<h3 id="_2-8-1-手动安装常用软件" tabindex="-1"><a class="header-anchor" href="#_2-8-1-手动安装常用软件" aria-hidden="true">#</a> 2.8.1.手动安装常用软件</h3>
<pre><code>安装vim
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yum -y install vim*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>配置vim
set nu         # 设置显示行号
set showmode   #设置在命令行界面最下面显示当前模式等
set ruler      #在右下角显示光标所在的行数等信息
set autoindent #设置每次单击Enter键后，光标移动到下一行时与上一行的起始字符对齐
syntax on      #即设置语法检测，当编辑C或者Shell脚本时，关键字会用特殊颜色显示		

wget
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yum -y install wget
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>telnet
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yum -y install telnet
yum -y install telnet-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>git
卸载旧版本
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yum remove git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>安装git
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yum install -y git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>查看版本
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-8-2-使用脚本安装常用软件" tabindex="-1"><a class="header-anchor" href="#_2-8-2-使用脚本安装常用软件" aria-hidden="true">#</a> 2.8.2.使用脚本安装常用软件</h3>
<pre><code>脚本介绍
这个脚本中包含了centos设置yum源并且安装了一些的常用软件，如vim、git、wget、curl、等，会定时更新

安装curl
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yum -y install curl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>下载脚本
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>curl https://gitee.com/lingwh1995/config-center/raw/master/centos/centos-init.sh -o centos-init.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>赋予可运行权限并运行该脚本
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>chmod +x centos-init.sh &amp;&amp;
./centos-init.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="3." tabindex="-1"><a class="header-anchor" href="#3." aria-hidden="true">#</a> 3.搭建基础开发环境</h1>
<h2 id="_3-1-章节内容概述" tabindex="-1"><a class="header-anchor" href="#_3-1-章节内容概述" aria-hidden="true">#</a> 3.1.章节内容概述</h2>
<pre><code>本章节涉及主要内容有：
 3.1.章节内容概述
 3.2.章节内容大纲
 3.3.安装jdk
 3.4.安装maven
 3.5.安装mysql
具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看，本章节内容中图片较少，主要以实用为主，所有代码均经过严格测试，可直接复制运行即可。
</code></pre>
<h2 id="_3-2-章节内容大纲" tabindex="-1"><a class="header-anchor" href="#_3-2-章节内容大纲" aria-hidden="true">#</a> <a href="/enhance/markmap/environment/centos/centos7/chapter/centos7-outline5-chapter3.html" target="_blank">3.2.章节内容大纲</a></h2>
<Markmap localtion="/enhance/markmap/environment/centos/centos7/chapter/centos7-outline5-chapter3.html"/>
<h2 id="_3-3-安装jdk" tabindex="-1"><a class="header-anchor" href="#_3-3-安装jdk" aria-hidden="true">#</a> 3.3.安装jdk</h2>
<pre><code>查看当前安装的java版本
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yum list installed | grep java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>卸载旧版本jdk
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yum -y remove xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>创建存放安装包的目录-&gt;切换到该目录-&gt;在该目录中下载jdk
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mkdir -p /opt/software/package &amp;&amp;
cd /opt/software/package &amp;&amp;
curl -fL -u software-1659088335906:c2e556a8a52386cbe0c6361ee3a7d8a21d3c9ca0 \
"https://lingwh-generic.pkg.coding.net/coding-drive/software/jdk-8u181-linux-x64.tar.gz?\
version=latest" -o jdk-8u181-linux-x64.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>解压jdk后赋予权限并放入指定目录
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>tar -zxvf jdk-8u181-linux-x64.tar.gz &amp;&amp;
chmod +x jdk1.8.0_181
mv jdk1.8.0_181 /usr/local/bin/jdk1.8.0_181
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>配置环境变量
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vim /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>添加如下内容
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>export JAVA_HOME=/usr/local/bin/jdk1.8.0_181
export JRE_HOME=${JAVA_HOME}/jre
export CLASSPATH=.:${JAVA_HOME}/lib:${JRE_HOME}/lib
export PATH=${JAVA_HOME}/bin:$PATH
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>刷新环境变量文件
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>source /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>查看java版本
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>java -version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-4-安装maven" tabindex="-1"><a class="header-anchor" href="#_3-4-安装maven" aria-hidden="true">#</a> 3.4.安装maven</h2>
<pre><code>注意
maven linux版和windows版并不通用

创建存放安装包的目录-&gt;并切换到该目录-&gt;在该目录中下载maven
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mkdir -p /opt/software/package &amp;&amp;
cd /opt/software/package &amp;&amp;
curl -fL -u software-1659088796431:ba211676fbe4a719c3b40b22083cd70388d41acc \
"https://lingwh-generic.pkg.coding.net/coding-drive/software/apache-maven-3.8.6-bin.tar.gz\
?version=latest" -o apache-maven-3.8.6-bin.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>解压到/usr/local/bin/目录下
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>tar -zxvf apache-maven-3.8.6-bin.tar.gz -C /usr/local/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>配置环境变量
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vim  /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>添加如下内容
注意事项
不要修改原来的path，直接在下面添加新的PATH配置，使用$PATH引用上面的PATH
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>export M2_HOME=/usr/local/bin/apache-maven-3.8.6
export PATH=$PATH:$M2_HOME/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>刷新配置文件
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>source /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>查看maven版本
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mvn -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>修改maven的settings.xml，仓库源&lt;mirrors&gt;&lt;/mirrors&gt;中添加如下信息:
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vim /usr/local/bin/apache-maven-3.8.6/conf/settings.xml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;mirror>
	&lt;id>alimaven&lt;/id>
	&lt;name>aliyun maven&lt;/name>
	&lt;url>http://maven.aliyun.com/nexus/content/groups/public/&lt;/url>
	&lt;mirrorOf>central&lt;/mirrorOf>
&lt;/mirror>
&lt;mirror>
	&lt;id>repo2&lt;/id>
	&lt;name>Mirror from Maven Repo2&lt;/name>
	&lt;url>http://repo2.maven.org/maven2/&lt;/url>
	&lt;mirrorOf>central&lt;/mirrorOf>
&lt;/mirror>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-5-安装mysql" tabindex="-1"><a class="header-anchor" href="#_3-5-安装mysql" aria-hidden="true">#</a> 3.5.安装mysql</h2>
<!--
	参考网站
	安装mysql
	https://blog.csdn.net/qq_38127559/article/details/121659232
	修改yum源
	https://blog.csdn.net/weixin_45836543/article/details/124906071
	官网下载mysql
	https://blog.csdn.net/xhmico/article/details/125197747
-->
<pre><code>安装建议
使用mysql官方yum源在线安装(不要使用rpm方式安装，非常难以安装成功)

查看当前安装的mysql版本
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yum list installed | grep mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>或
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>rpm -qa | grep mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>卸载旧版本mysql
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yum -y remove xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>Centos终端获取yum源安装包：
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cd /opt/software/package &amp;&amp;
wget https://dev.mysql.com/get/mysql80-community-release-el7-3.noarch.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>安装mysql的yum源：（二选一）
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>rpm -Uvh mysql80-community-release-el7-3.noarch.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>rpm -ivh mysql80-community-release-el7-3.noarch.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>查看刚才下载的mysql安装源，可以看到新增的两个mysql源
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ls /etc/yum.repos.d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>[root@localhost package]# ls /etc/yum.repos.d
CentOS-Base.repo      CentOS-Debuginfo.repo  CentOS-Vault.repo          mysql-community-source.repo
CentOS-Base.repo.bak  CentOS-Media.repo      CentOS-fasttrack.repo      mysql-community.repo
CentOS-CR.repo        CentOS-Sources.repo    CentOS-x86_64-kernel.repo

修改源中的配置，将所有的gpgkey的值修改为https://repo.mysql.com/RPM-GPG-KEY-mysql-2022
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>sed -i 's#file:///etc/pki/rpm-gpg/RPM-GPG-KEY-mysql#https://repo.mysql.com/\
RPM-GPG-KEY-mysql-2022#g' /etc/yum.repos.d/mysql-community.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>使用yum在线安装mysql
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yum -y install mysql-community-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>启动mysql-server
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>systemctl start mysqld.service &amp;&amp;
systemctl enable mysqld.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>查看mysql-server启动状态：
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>systemctl status mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>初始化mysql
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mysqld --initialize
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>查看mysql8登录密码
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cat /var/log/mysqld.log | grep 'temporary password'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>看到如下内容：
2022-07-18T18:31:57.277661Z 6 [Note] [MY-010454] [Server]
	A temporary password is generated for root@localhost: %)4(26e++jaK
</code></pre>
<p>登录mysql</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mysql -uroot -p'%)4(26e++jaK'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>修改mysql初始密码，规则大小写字母、数字、特殊符号，最少8位
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ALTER USER USER() IDENTIFIED BY 'Mysql123456_';
FLUSH PRIVILEGES;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>扩展或者添加远程用户权限:
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>use mysql;
update user set host='%' where user='root';
flush privileges;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="4." tabindex="-1"><a class="header-anchor" href="#4." aria-hidden="true">#</a> 4.Centos搭建docker</h1>
<h2 id="_4-1-章节内容概述" tabindex="-1"><a class="header-anchor" href="#_4-1-章节内容概述" aria-hidden="true">#</a> 4.1.章节内容概述</h2>
<pre><code>本章节涉及主要内容有：
 4.1.章节内容概述
 4.2.章节内容大纲
 4.3.安装docker
 4.4.docker启动故障解决
 4.5.docker容器可视化
 4.6.搭建docke私服
 4.7.docker官方私服可视化
 4.8.制作docker镜像并上传到私服
 4.9.Docker中安装常用软件
具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看，本章节内容中图片较少，主要以实用为主，所有代码均经过严格测试，可直接复制运行即可。
</code></pre>
<h2 id="_4-2-章节内容大纲" tabindex="-1"><a class="header-anchor" href="#_4-2-章节内容大纲" aria-hidden="true">#</a> <a href="/enhance/markmap/environment/centos/centos7/chapter/centos7-outline5-chapter4.html" target="_blank">4.2.章节内容大纲</a></h2>
<Markmap localtion="/enhance/markmap/environment/centos/centos7/chapter/centos7-outline5-chapter4.html"/>
<h2 id="_4-3-安装docker" tabindex="-1"><a class="header-anchor" href="#_4-3-安装docker" aria-hidden="true">#</a> 4.3.安装docker</h2>
<h3 id="_4-3-1-在线安装docker" tabindex="-1"><a class="header-anchor" href="#_4-3-1-在线安装docker" aria-hidden="true">#</a> 4.3.1.在线安装docker</h3>
<pre><code>以root身份更新yum，将yum包更新到最新
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yum -y update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>查看当前安装的docker版本
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yum list installed | grep docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>containerd.io.x86_64 	           1.6.6-3.1.el7                  @docker-ce-stable				
docker-ce.x86_64                   3:20.10.17-3.el7               @docker-ce-stable
docker-ce-cli.x86_64               1:20.10.17-3.el7               @docker-ce-stable
docker-ce-rootless-extras.x86_64   20.10.17-3.el7                 @docker-ce-stable
docker-scan-plugin.x86_64          0.17.0-3.el7                   @docker-ce-stable

卸载旧版本docker
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yum -y remove docker-ce.x86_64
yum -y remove docker-scan-plugin.x86_64
yum -y remove docker-ce-cli.x86_64
yum -y remove docker-ce-rootless-extras.x86_64_64
yum -y remove containerd.io.x86_64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>安装需要的软件包
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yum install -y yum-utils device-mapper-persistent-data lvm2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>配置使用阿里的yum源
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>查看阿里云仓库中所有docker版本，并选择特定版本安装
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yum list docker-ce --showduplicates | sort -r
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>安装最新版本docker-ce(docker社区、ee企业版 ce为社区版)
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yum -y install docker-ce
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>查看安装的docker版本
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>给docker配置国内镜像源
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>sudo mkdir -p /etc/docker &amp;&amp;
sudo tee /etc/docker/daemon.json &lt;&lt;-'EOF'
{
    "registry-mirrors": [
        "https://5pfmrxk8.mirror.aliyuncs.com",
        "http://hub-mirror.c.163.com",
        "https://docker.mirrors.ustc.edu.cn",
        "https://registry.docker-cn.com"
    ]
}
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>daemon.json配置说明
registry-mirrors：docker国内镜像源地址

刷新daemon.json配置启动docker并设置为开机自启动
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>systemctl daemon-reload &amp;&amp;
systemctl start docker &amp;&amp;
systemctl enable docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>查看启动状态
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>systemctl status docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>启动故障排查
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>systemctl status docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>测试docker
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker run hello-world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>安装成功则返回下面信息
[root@localhost ~]# docker run hello-world
Unable to find image 'hello-world:latest' locally
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
</code></pre>
<h3 id="_4-3-2-二进制包安装docker" tabindex="-1"><a class="header-anchor" href="#_4-3-2-二进制包安装docker" aria-hidden="true">#</a> 4.3.2.二进制包安装docker</h3>
<pre><code>创建存放docker安装包的目录-&gt;切换目录-&gt;在该目录中下载docker二进制安装包-&gt;解压到/usr/bin/
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mkdir -p  /opt/software/package/ &amp;&amp;
cd /opt/software/package/ &amp;&amp;
curl -fL -u software-1659095503164:3316a6a052e6f17880d37a00d38454342aceffdf \
"https://lingwh-generic.pkg.coding.net/coding-drive/software/docker-20.10.9.tgz?version=latest" \
-o docker-20.10.9.tgz &amp;&amp;
tar -xf docker-20.10.9.tgz &amp;&amp; mv docker/* /usr/bin/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>配置docker私有镜像
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>sudo mkdir -p /etc/docker &amp;&amp;
sudo tee /etc/docker/daemon.json &lt;&lt;-'EOF'
{
    "registry-mirrors": [
        "https://5pfmrxk8.mirror.aliyuncs.com",
        "http://hub-mirror.c.163.com",
        "https://docker.mirrors.ustc.edu.cn",
        "https://registry.docker-cn.com"
    ]
}
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>配置docker.service文件
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cat > /usr/lib/systemd/system/docker.service &lt;&lt; EOF
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>刷新配置文件后启动三台机器上的docker并设置为开机启动
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>systemctl daemon-reload &amp;&amp;
systemctl start docker &amp;&amp;
systemctl enable docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>查看启动状态
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>systemctl status docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>启动故障排查
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>systemctl status docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>测试docker
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker run hello-world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>安装成功则返回下面信息
[root@localhost ~]# docker run hello-world
Unable to find image 'hello-world:latest' locally
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
</code></pre>
<h2 id="_4-4-docker启动故障解决" tabindex="-1"><a class="header-anchor" href="#_4-4-docker启动故障解决" aria-hidden="true">#</a> 4.4.docker启动故障解决</h2>
<pre><code>错误信息
Job for docker.service failed because the control process exited with error code. 
See &quot;systemctl status docker.service&quot; and &quot;journalctl -xe&quot; for details.

解决方式1：使docker与firewall共存
关闭docker
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>systemctl stop docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>设置firewall不拦截docker
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>firewall-cmd --zone=trusted --remove-interface=docker0 --permanent
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>重新加载防火墙配置
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>firewall-cmd --reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>重新启动防火墙
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>systemctl restart firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>重新启动docker
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>systemctl restart docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>解决方式2：检查daemon.json配置是否正确
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cat /etc/docker/daemon.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>看配置的registry-mirrors是否正确，如私服前是否忘记了加http://
</code></pre>
<h2 id="_4-5-docker容器可视化" tabindex="-1"><a class="header-anchor" href="#_4-5-docker容器可视化" aria-hidden="true">#</a> 4.5.docker容器可视化</h2>
<pre><code>查询当前有哪些portainer镜像
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker search portainer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>下载portainer镜像
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker pull portainer/portainer:1.24.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>启动单机版portainer(针对单机版docker)
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker run -d --name portainer \
	-p 9000:9000 \
	--restart=always \
	-v /var/run/docker.sock:/var/run/docker.sock \
	--privileged=true \
	portainer/portainer:1.24.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>登录portainer
登录地址：http://192.168.0.4:9000/
用户名/密码：admin/portainer
单机版选择local即可
</code></pre>
<h2 id="_4-6-搭建docke私服" tabindex="-1"><a class="header-anchor" href="#_4-6-搭建docke私服" aria-hidden="true">#</a> 4.6.搭建docke私服</h2>
<h3 id="_4-6-1-搭建docke官方私服-不带有用户名和密码校验" tabindex="-1"><a class="header-anchor" href="#_4-6-1-搭建docke官方私服-不带有用户名和密码校验" aria-hidden="true">#</a> 4.6.1.搭建docke官方私服（不带有用户名和密码校验）</h3>
<pre><code>拉取仓库镜像
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker pull registry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>启动注册仓库服务器
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker run -d --name registry_official \
	-p 5000:5000 \
	--restart=always \
	-v /registry/public/repos:/var/lib/registry \
	--privileged=true \
	registry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>配置私服地址和镜像源地址并且将私服地址加入到镜像源列表，这样就可以从私服中拉取镜像了

给docker配置私服
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vim /etc/docker/daemon.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>添加如下内容
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>{
	"insecure-registries":["192.168.0.4:5000","192.168.0.4:5001"],
	"registry-mirrors": [
			"https://5pfmrxk8.mirror.aliyuncs.com",
			"http://hub-mirror.c.163.com",
			"https://docker.mirrors.ustc.edu.cn",
			"https://registry.docker-cn.com",
			"http://192.168.0.4:5000",
			"http://192.168.0.4:5001"
	]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>或
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>sudo mkdir -p /etc/docker &amp;&amp;
sudo tee /etc/docker/daemon.json &lt;&lt;-'EOF'
{
	"insecure-registries":["192.168.0.4:5000","192.168.0.4:5001"],
	"registry-mirrors": [
			"https://5pfmrxk8.mirror.aliyuncs.com",
			"http://hub-mirror.c.163.com",
			"https://docker.mirrors.ustc.edu.cn",
			"https://registry.docker-cn.com",
			"http://192.168.0.4:5000",
			"http://192.168.0.4:5001"
	]
}
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>daemon.json配置说明
insecure-registries：docker信任的私服地址
registry-mirrors：docker国内镜像源地址

daemon.json配置注意事项：把私服配置到registry-mirrors时，一定要正确的加上 http://前缀：	
正确格式: http://192.168.0.4:5000
错误格式: 192.168.0.4:5001

放行5000端口并保证5000端口确实被放开
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>firewall-cmd --permanent --add-port=5000/tcp &amp;&amp;
firewall-cmd --reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>刷新daemon并重启docker
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>systemctl daemon-reload &amp;&amp;
systemctl restart docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>验证仓库是否搭建成功
访问:http://192.168.0.4:5000/v2/_catalog，看到{&quot;repositories&quot;:[]}表示私有仓库搭建成功且内容为空

彻底删除私服中的镜像:注意这个路径是要看registry具体挂载到linux上什么位置的
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>rm -rf /registry/public/repos/docker/registry/v2/repositories/springcloud-eureka/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-6-2-搭建docke官方私服-带有用户名和密码校验" tabindex="-1"><a class="header-anchor" href="#_4-6-2-搭建docke官方私服-带有用户名和密码校验" aria-hidden="true">#</a> 4.6.2.搭建docke官方私服（带有用户名和密码校验）</h3>
<pre><code>拉取仓库镜像
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker pull registry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>加密认证配置
创建存放加密后用户信息的用户名密码
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mkdir -p /opt/docker/auth/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>安装httpd工具
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yum -y install httpd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>生成带有加密后用户信息的用户名密码
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>htpasswd -Bbn docker 123456  >/opt/docker/auth/htpasswd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>启动注册仓库服务器(-p:第一个5000是本地机器端口,第二个5000是docker容器中端口)
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker run -d --name registry_official_auth  \
	-p 5000:5000 --restart=always \
	-v `pwd`/opt/docker/auth:/opt/docker/auth  \
	-v /opt/docker/registry:/var/lib/registry  \
	-e "REGISTRY_AUTH=htpasswd"  \
	-e "REGISTRY_AUTH_HTPASSWD_REALM=Registry Realm"  \
	-e REGISTRY_AUTH_HTPASSWD_PATH=/opt/docker/auth/htpasswd \
	registry:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>给docker配置私服
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vim /etc/docker/daemon.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>添加以下内容
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>{
    "insecure-registries":["192.168.0.4:5000","192.168.0.4:5001"],
    "registry-mirrors": [
        "https://5pfmrxk8.mirror.aliyuncs.com",
        "http://hub-mirror.c.163.com",
        "https://docker.mirrors.ustc.edu.cn",
        "https://registry.docker-cn.com",
        "http://192.168.0.4:5000",
        "http://192.168.0.4:5001"
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>daemon.json配置说明
insecure-registries：docker信任的私服地址
registry-mirrors：docker国内镜像源地址

daemon.json配置注意事项：把私服配置到registry-mirrors时，一定要正确的加上 http://前缀：	
正确格式: http://192.168.0.4:5000
错误格式: 192.168.0.4:5001
放行5000端口并保证5000端口确实被放开
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>firewall-cmd --permanent --add-port=5000/tcp &amp;&amp;
firewall-cmd --reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>刷新docker daemon并重启docker
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>systemctl daemon-reload &amp;&amp;
systemctl restart docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>验证仓库是否搭建成功
访问:http://192.168.0.4:5000/v2/_catalog，看到{&quot;repositories&quot;:[]}表示私有仓库搭建成功且内容为空

彻底删除私服中的镜像:注意这个路径是要看registry具体挂载到linux上什么位置的
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>rm -rf /registry/public/repos/docker/registry/v2/repositories/springcloud-eureka/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-6-3-搭建harbor私服" tabindex="-1"><a class="header-anchor" href="#_4-6-3-搭建harbor私服" aria-hidden="true">#</a> 4.6.3.搭建harbor私服</h3>
<h4 id="_4-6-3-1-harbor简介" tabindex="-1"><a class="header-anchor" href="#_4-6-3-1-harbor简介" aria-hidden="true">#</a> 4.6.3.1.harbor简介</h4>
<pre><code>Harbor是一个用于存储和分发Docker镜像的企业级Registry服务器，虽然Docker官方也提供了公共的镜像仓库，但是
从安全和效率等方面考虑，部署企业内部的私有环境Registry是非常必要的，harbor和docker中央仓库的关系就类似于
nexus和Maven中央仓库的关系，harbor除了存储和分发镜像外还具有用户管理，项目管理，配置管理和日志查询，高可
用部署等主要功能。
</code></pre>
<h4 id="_4-6-3-2-搭建docker-compose" tabindex="-1"><a class="header-anchor" href="#_4-6-3-2-搭建docker-compose" aria-hidden="true">#</a> 4.6.3.2.搭建docker-compose</h4>
<pre><code>版本说明
本次使用的docker-compose版本为2.6.1

官方网址
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>https://github.com/docker/compose/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>安装docker-compose
创建运行文件夹-&gt;下载docker-compose-&gt;解压并重命名docker-compose-&gt;赋予运行权限并复制到/usr/local/bin/docker-compose
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mkdir -p /opt/software/package &amp;&amp;
cd /opt/software/package &amp;&amp;
curl -fL -u software-1660487881889:0c063752f28333a6e3bfb5e4e0e983835640aa5c \
"https://lingwh-generic.pkg.coding.net/coding-drive/software/docker-compose-2.6-linux-x86_64?version=latest" \
-o docker-compose-2.6-linux-x86_64 &amp;&amp;
sudo chmod +x docker-compose-2.6-linux-x86_64 &amp;&amp;
cp docker-compose-2.6-linux-x86_64 /usr/local/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>查看是否安装成功
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker-compose --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_4-6-3-3-安装harbor" tabindex="-1"><a class="header-anchor" href="#_4-6-3-3-安装harbor" aria-hidden="true">#</a> 4.6.3.3.安装harbor</h4>
<pre><code>版本说明
本次使用的harbor版本为2.5.2

特别注意
注意docker的版本,低版本的docker不能运行harbor2.5

官方网址
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div><pre><code>创建存放下载文件夹-&gt;下载harbor-&gt;创建运行文件夹-&gt;解压到运行文件夹
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mkdir -p /opt/software/package &amp;&amp;
cd /opt/software/package &amp;&amp;
curl -fL -u software-1660737546177:da4715201c1e37859c2473112e90af4d1615abb4 \
"https://lingwh-generic.pkg.coding.net/coding-drive/software/harbor-offline-installer-v2.5.2.tgz?version=latest" \
-o harbor-offline-installer-v2.5.2.tgz &amp;&amp;
mkdir -p /opt/software/install &amp;&amp;
tar -zxvf harbor-offline-installer-v2.5.2.tgz -C /opt/software/install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>复制一份harbor.yml.tmpl，重命名为harbor.yml并修改harbor.yml
cd /opt/software/install/harbor &amp;&amp;
cp harbor.yml.tmpl harbor.yml &amp;&amp;
vim harbor.yml

修改harbor.yml配置
修改hostname
hostname: 192.168.0.4
修改端口
port:5001
注释掉https相关部分
#https:
	# https port for harbor, default is 443
	# port: 443
	# The path of cert and key files for nginx
	#certificate: /your/certificate/path
	#private_key: /your/private/key/path
修改密码
	harbor_admin_password: 123456

安装harbor
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>./install.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>使用docker-compose启动harbor
一次性启动所有harbor相关的容器,一般执行完./install.sh就已经启动了相关的容器
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker-compose up -d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>让docker信任harbor私服
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vim /etc/docker/daemon.json,添加以下内容:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>配置Docker(Register)注册仓库服务器信任192.168.0.4:5001:
{&quot;insecure-registries&quot;:[&quot;192.168.0.4:5001&quot;]}

重新加载docker daemon配置文件并重启docker
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>systemctl daemon-reload &amp;&amp;
systemctl restart docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>登录harbor首页(密码可以去harbor.yml中查看)
访问地址：http://192.168.0.4:5001/
用户名/密码：admin/123456

在Harbor中创建项目,推送的时候可以用
如:springcloud-eureka
</code></pre>
<h2 id="_4-7-docker官方私服可视化" tabindex="-1"><a class="header-anchor" href="#_4-7-docker官方私服可视化" aria-hidden="true">#</a> 4.7.docker官方私服可视化</h2>
<h3 id="_4-7-1docker-registry-web方案" tabindex="-1"><a class="header-anchor" href="#_4-7-1docker-registry-web方案" aria-hidden="true">#</a> 4.7.1docker-registry-web方案</h3>
<pre><code>下载docker pull hyper/docker-registry-web镜像
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker pull hyper/docker-registry-web
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>启动docker-registry-web
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker run -d --restart=always \
	-p 9002:8080 \
	--name registry-web \
	--link registry_default \
	-e REGISTRY_URL=http://192.168.0.4:5000/v2 \
	-e REGISTRY_NAME=192.168.0.4:5000 \
	hyper/docker-registry-web:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-8-制作docker镜像并上传到私服" tabindex="-1"><a class="header-anchor" href="#_4-8-制作docker镜像并上传到私服" aria-hidden="true">#</a> 4.8.制作docker镜像并上传到私服</h2>
<h3 id="_4-8-1-制作dokcer镜像" tabindex="-1"><a class="header-anchor" href="#_4-8-1-制作dokcer镜像" aria-hidden="true">#</a> 4.8.1.制作Dokcer镜像</h3>
<pre><code>进入/opt/software/package，并在这个目录中下载jdk
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cd /opt/software/package &amp;&amp;
wget https://repo.huaweicloud.com/java/jdk/8u181-b13/jdk-8u181-linux-x64.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>编写Dockerfile(Dockerfile内容如下)

#基于centos基础镜像构建
FROM centos
#作者
MAINTAINER lingwh
#将jdk添加到基础镜像中
ADD jdk-8u181-linux-x64.tar.gz /usr/local
#设置java相关的环境变量
ENV JAVA_HOME /usr/local/jdk1.8.0_181
ENV JRE_HOME ${JAVA_HOME}/jre
ENV CLASSPATH .:${JAVA_HOME}/lib:${JRE_HOME}/lib
ENV PATH ${JAVA_HOME}/bin:$PATH
#输出Java版本信息
CMD [&quot;java&quot;,&quot;-version&quot;]

在当前目录中执行构建镜像的命令
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker build -t='jdk/jdk1.8.0_181' .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>查看到刚才制作好的镜像
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>创建容器
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker run -it --name=myjdk8 镜像id /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-8-2-上传本地jdk镜像到私服" tabindex="-1"><a class="header-anchor" href="#_4-8-2-上传本地jdk镜像到私服" aria-hidden="true">#</a> 4.8.2.上传本地jdk镜像到私服</h3>
<pre><code>给镜像打标签
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker tag jdk/jdk1.8.0_181 192.168.0.4:5000/jdk/jdk1.8.0_181:latest #更改镜像的TAG标签
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>上传标记的镜像
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker push 192.168.0.4:5000/jdk/jdk1.8.0_181:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>查看推送到私服中的镜像
访问:http://192.168.0.4:5000/v2/_catalog,看到:{&quot;repositories&quot;:[&quot;jdk/jdk1.8.0_181&quot;]}
</code></pre>
<h2 id="_4-9-docker中安装常用软件" tabindex="-1"><a class="header-anchor" href="#_4-9-docker中安装常用软件" aria-hidden="true">#</a> 4.9.Docker中安装常用软件</h2>
<h3 id="_4-9-1-docker安装mysql" tabindex="-1"><a class="header-anchor" href="#_4-9-1-docker安装mysql" aria-hidden="true">#</a> 4.9.1.Docker安装mysql</h3>
<pre><code>下载mysql镜像
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker pull mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>启动mysql容器
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker run -di --name mysql -p 3306:3306 --restart=always -e MYSQL_ROOT_PASSWORD=123456 mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>关闭docker中的mysql容器
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>myqldocker exec -it mysql bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-9-2-docker中安装consul" tabindex="-1"><a class="header-anchor" href="#_4-9-2-docker中安装consul" aria-hidden="true">#</a> 4.9.2.Docker中安装consul</h3>
<pre><code>下载consul镜像
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker pull consul
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>启动consul容器
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker run -d --name=consul \
	-p 8500:8500 \
	--restart=always \
	agent -server -bootstrap -ui -node=1 -client='0.0.0.0' \
	consul:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-9-3-docker容器中安装vim" tabindex="-1"><a class="header-anchor" href="#_4-9-3-docker容器中安装vim" aria-hidden="true">#</a> 4.9.3.Docker容器中安装vim</h3>
<pre><code>进入容器内部
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker exec -it 容器id /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>备份旧的源
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mv /etc/apt/sources.list /etc/apt/sources.list.bak
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>写入新的源
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>echo "deb http://mirrors.163.com/debian/ jessie main non-free contrib" \
	>> 	/etc/apt/sources.list &amp;&amp;
echo "deb http://mirrors.163.com/debian/ jessie-proposed-updates main non-free contrib" \
	>>/etc/apt/sources.list &amp;&amp;
echo "deb-src http://mirrors.163.com/debian/ jessie main non-free contrib" \
	>>/etc/apt/sources.list &amp;&amp;
echo "deb-src http://mirrors.163.com/debian/ jessie-proposed-updates main non-free contrib" \
	>>/etc/apt/sources.list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>更新源
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>apt update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>安装vim
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>apt-get install vim
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-9-3-docker安装elk" tabindex="-1"><a class="header-anchor" href="#_4-9-3-docker安装elk" aria-hidden="true">#</a> 4.9.3.docker安装elk</h3>
<pre><code>下载elk镜像
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker pull sebp/elk:6.8.22
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>启动ELK容器，指定最小内存和最大内存，并映射相关端口
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker run -d --name elk \
	--restart always \
	-p 5601:5601 \
	-p 9200:9200 \
	-p 5044:5044 \
	-e ES_MIN_MEM=1024m \
	-e ES_MAX_MEM=2048 \
	sebp/elk:6.8.22
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>开放elk需要用的端口,并且重新载入端口
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>firewall-cmd --add-port=5601/tcp --permanent &amp;&amp;
firewall-cmd --reload &amp;&amp;
firewall-cmd --add-port=9200/tcp --permanent &amp;&amp;
firewall-cmd --reload &amp;&amp;
firewall-cmd --add-port=5044/tcp --permanent &amp;&amp;
firewall-cmd --reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>访问Kibana
192.168.0.4:5601

进入ELK中进行配置
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker exec -it elk /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>修改logstash配置,把下面内容粘贴进去
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vim /etc/logstash/conf.d/02-beats-input.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>input{
	tcp{
		host => "0.0.0.0"
		port => 5044
		codec=> json_lines
	}
}
output{
	elasticsearch{
		hosts => ["192.168.0.4:9200"]
		action => "index"
		index => "%{[appName]}-%{+YYYY.MM.dd}"
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>配置说明:
input代表数据输入配置 ， logstatsh的开放端口是 5044
output代表数据输出配置，输出到elasticsearch, hosts是es的地址192.168.0.4:9200

退出容器
</code></pre>
<p>``	
exit</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	重启ELK容器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>docker restart elk</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	注意事项	
	当把docker和centos7的冲突解决后,需要让centos放行elk(具体是es)的部署地址
	
	查看容器详细信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker inspect 容器id</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	查找到elk(具体是es)容器的ip,假设为172.17.0.2
	
	执行放行操作
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>firewall-cmd --zone=trusted --add-source=172.17.0.2/16 --permanent</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	重新载入防火墙配置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>firewall-cmd --reload</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	重启防火墙
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>systemctl restart firewalld</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	docker启动elk报错/或一直重启故障解决
	错误日志：
	max virtual memory areas vm.max_map_count [65530] is too low, increase to at least
	解决方式，在宿主机执行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>sudo sysctl -w vm.max_map_count=262144</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
# 5.Centos搭建Rancher {#5.}

## 5.1.章节内容概述
    本章节涉及主要内容有：
     5.1.章节内容概述
     5.2.章节内容大纲

	具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看，本章节内容中图片较少，主要以实用为主，所有代码均经过严格测试，可直接复制运行即可。

## &lt;a href="/enhance/markmap/environment/centos/centos7/chapter/centos7-outline5-chapter5.html" target="_blank">5.2.章节内容大纲&lt;/a>

&lt;Markmap localtion="/enhance/markmap/environment/centos/centos7/chapter/centos7-outline5-chapter5.html"/>


	下载rancher
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker pull rancher/server</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	启动rancher
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>docker run -di --name=rancher -p9003:8080 rancher/server:latest</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	使用rancher扩容/缩容注意事项
	如果要使用扩容或者缩容功能,不要配置eureka的如下信息
	eureka:
	  instance:
		#使用rancher扩容不能配置instance-id,否则会出问题
		#instance-id: ${spring.application.name} 
		#使用rancher扩容不能配置iip-address,否则会出问题
		#ip-address: 192.168.0.4				

# 6.Centos搭建Minikube {#6.}

## 6.1.章节内容概述
    本章节涉及主要内容有：
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
	具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看，本章节内容中图片较少，主要以实用为主，所有代码均经过严格测试，可直接复制运行即可。

## &lt;a href="/enhance/markmap/environment/centos/centos7/chapter/centos7-outline5-chapter6.html" target="_blank">6.2.章节内容大纲&lt;/a>

&lt;Markmap localtion="/enhance/markmap/environment/centos/centos7/chapter/centos7-outline5-chapter6.html"/>


## 6.3.minikube介绍
	Minikube这个工具支持在虚拟机上运行一套单节点的k8s集群

## 6.4.版本说明
	minikube:1.2.6 kubectl client:1.18.0

## 6.5.开启Vmware虚拟化
	查看是否支持虚拟化，开始安装前，先查看本地机器是否支持虚拟化，有输出就支持
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>grep -E --color 'vmx|svm' /proc/cpuinfo</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	开启虚拟化
	Vmware Workstation ->Centos 64右键菜单 —> 设置 
		-> 处理器 ->勾选 虚拟化IntelVT-x/EPT 或 ADM-V/RVI(V)
	
	设置处理器数量设置为大于等于2,内存大于等于2G

## 6.6.安装kubectl	
	简介
	kubectl 是一个用来跟 K8S 集群进行交互的命令行工具
		
	下载kubectl，上传到/opt/software/package，赋予可运行权限,并放入/usr/local/bin/目录下
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>chmod +x ./kubectl &amp;&amp; cp ./kubectl /usr/local/bin/kubectl</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	查看kubectl版本
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>kubectl version --client</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
## 6.7.安装minikube
	下载minikube
	到 https://github.com/kubernetes/minikube/releases 找到minikube-linux-amd64并下载
	
	上传到/opt/software/package
	
	赋予运行权限并复制到/usr/local/bin/minikube
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>chmod +x ./minikube-linux-amd64 &amp;&amp; cp ./minikube-linux-amd64 /usr/local/bin/minikube</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
## 6.8.使用阿里云加速docker hub
	登录阿里云docker相关页面
	访问：https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors
	登陆->左侧菜单选中镜像加速器->查看加速镜像地址 https://ngviu28h.mirror.aliyuncs.com

## 6.9.启动minikube
	注意事项
	启动minikube之前需要先启动docker，如无法启动加上--kubernetes-version=v具体版本号
	
	使用docker作为虚拟化引擎(需要先安装Docker)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>minikube start --driver=docker --force <br>
--image-mirror-country='cn' <br>
--image-repository='registry.cn-hangzhou.aliyuncs.com/google_containers' <br>
--registry-mirror='https://ngviu28h.mirror.aliyuncs.com' <br>
--kubernetes-version=v1.23.8</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	使用virtualbox作为虚拟化引擎(需要先安装Virtualbox)
	
	下载Centos7版VirtualBox
	访问：https://www.virtualbox.org/wiki/Downloads，选择AMD64版本下载
	上传到/opt/software/package中
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>VirtualBox-6.1-6.1.34_150636_el7-2.x86_64.rpm</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	安装问题解决(virtualbox内核无法编译)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>sudo yum install gcc kernel kernel-devel -y</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	重启机器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>systemctl reboot</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	安装VirtualBox
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>yum install VirtualBox-6.1-6.1.34_150636_el7-2.x86_64.rpm -y</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	补充内容：Centos版VirtualBox操作命令						
	VBoxManage list runningvms //查看机器列表
	VBoxHeadless -startvm "虚拟机名" //启动虚拟机
	测试VirtualBox是否安装成功
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>virtualbox
rcvboxdrv setup</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	使用virtualbox作为虚拟化引擎
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>minikube start --driver=virtualbox --force <br>
--image-mirror-country='cn' <br>
--image-repository='registry.cn-hangzhou.aliyuncs.com/google_containers' <br>
--registry-mirror='https://ngviu28h.mirror.aliyuncs.com' <br>
--kubernetes-version=v1.23.8</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
## 6.10.minikube常用命令	
	查看minikube日志
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>minikube logs</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	查看minikube状态
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>minikube status</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	查看节点				
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>minikube kubectl -- get po -A</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	停止集群
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>minikube stop</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	清空集群
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>minikube delete --all</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	安装集群可视化 Web UI 控制台
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>minikube dashboard</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	卸载minikube
	停止运行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>minikube stop</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	执行卸载命令
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>minikube delete</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	删除 ~/.minikube 目录缓存的文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>rm -rf ~/.minikube</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
# 7.kubeadm搭建Kubernetes {#7.}

## 7.1.章节内容概述
    本章节涉及主要内容有：
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
     7.19.部署第一个程序到k8s中
     7.20.可视化面板kuboard
	具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看，本章节内容中图片较少，主要以实用为主，所有代码均经过严格测试，可直接复制运行即可。

## &lt;a href="/enhance/markmap/environment/centos/centos7/chapter/centos7-outline5-chapter7.html" target="_blank">7.2.章节内容大纲&lt;/a>

&lt;Markmap localtion="/enhance/markmap/environment/centos/centos7/chapter/centos7-outline5-chapter7.html"/>



## 7.3.特别说明
	使用kubeadm搭建Kubernetes

## 7.4.所有节点设置对应主机名
	master节点
	hostnamectl set-hostname master
	slave1节点
	hostnamectl set-hostname slave1
	slave2节点	
	hostnamectl set-hostname slave2

## 7.5.所有节点修改hosts
	vim /etc/hosts
	192.168.0.6 master
	192.168.0.7 slave1
	192.168.0.8 slave2

## 7.6.所有节点关闭SELinux
	暂时关闭
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>setenforce 0</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	永久关闭
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>sed -i --follow-symlinks 's/SELINUX=enforcing/SELINUX=disabled/g' <br>
/etc/sysconfig/selinux</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>## 7.7.所有节点关闭防火墙
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>systemctl stop firewalld &amp;&amp;
systemctl disable firewalld</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>## 7.8.所有节点安装docker
	安装docker
	详细参考4.1>.安装docker
	
	修改docker配置
	vim /etc/docker/daemon.json，并添加如下内容：
	#kubernetes官方推荐 docker等使用systemd作为cgroupdriver，否则 kubelet 启动不了
	"exec-opts": ["native.cgroupdriver=systemd"]"
	
	重新载入docker配置并重启docker
	systemctl daemon-reload &amp;&amp; systemctl restart docker

## 7.9.所有节点安装k8s所需组件
	添加k8s安装源
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- cat <<EOF > kubernetes.repo -->
<p>[kubernetes]
name=Kubernetes
baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64
enabled=1
gpgcheck=0
repo_gpgcheck=0
gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg
https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
EOF</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	使用k8s安装源
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>mv kubernetes.repo /etc/yum.repos.d/</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	安装所需组件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>yum install -y kubelet-1.22.4 kubectl-1.22.4 kubeadm-1.22.4</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	查看各组件版本
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>kubelet --version</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div><p>kubectl	--version</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div><p>kubeadm --version</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
## 7.10.所有节点启动kubelet和docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>systemctl enable kubelet &amp;&amp;
systemctl start kubelet &amp;&amp;
systemctl enable docker &amp;&amp;
systemctl start docker</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>## 7.11.所有关闭swap
	临时关闭swap分区
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>swapoff /mnt/swap</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	永久关闭swap分区
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>sed -ri 's/.<em>swap.</em>/#&amp;/' /etc/fstab &amp;&amp; systemctl reboot</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	查看swap分区是否关闭	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>free -m</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
## 7.12.用kubeadm 初始化集群
	特别注意
	只在Master节点操作
	
	初始化集群控制台 Control plane，失败了可以用 kubeadm reset 重置
	
	初始化集群命令
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>kubeadm init <br>
--apiserver-advertise-address=192.168.0.6 <br>
--image-repository registry.aliyuncs.com/google_containers <br>
--kubernetes-version v1.22.4 <br>
--service-cidr=10.96.0.0/12 <br>
--pod-network-cidr=10.244.0.0/16 <br>
--ignore-preflight-errors=all</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	命令说明：	
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

## 7.13.其他节点连接到Master节点
	在两个上Slave节点输入第9>>.步骤在主节点上获取的秘钥
	如：kubeadm join 192.168.0.6:6443 \
		--token e60qrb.6321jolakk1aix90 \
		--discovery-token-ca-cert-hash \
		sha256:02829b33a24eef53805ffedef79c0371cb4d9ac0d04bfad7fe26eb022cb638ac
		
	加入成功后看到:
		This node has joined the cluster

## 7.14.在master节点上查看集群
	mater节点和两个slave节点STATUS是NOTReady
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>kubectl get nodes</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	[root@master ~]# kubectl get nodes
	NAME     STATUS     ROLES                  AGE     VERSION
	master   NotReady      control-plane,master   9m32s   v1.22.4
	slave1   NotReady   &lt;none>                 5m51s   v1.22.4
	slave2   NotReady      &lt;none>                 2m31s   v1.22.4

## 7.15.安装网络插件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>kubectl apply -f <br>
https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>## 7.16.在master上查看集群节点			
	再次执行命令查看集群命令，mater节点STATUS是Ready，两个slave节点STATUS是都是Ready
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>kubectl get nodes</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	[root@master ~]# kubectl get nodes
	NAME     STATUS     ROLES                  AGE     VERSION
	master   Ready      control-plane,master   9m32s   v1.22.4
	slave1   Ready   &lt;none>                 5m51s   v1.22.4
	slave2   Ready      &lt;none>                 2m31s   v1.22.4	
	注意事项
	如果两个从节点中有一个节点状态是NotReady，另一个节点状态是Ready，不要着急，要多等一会儿
	再使用命令kubectl get nodes查看集群节点，就可以看到所有节点都是Ready

## 7.17.启动故障解决
	查看所有命名空间的所有的pod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>kubectl get pods -o wide --all-namespaces</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	查看启动失败的pod的日志，其中PODNAME为启动失败的pod的name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>kubectl -n kube-system logs PODNAME</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	重置kubeadm
	可使用kubeadm reset命令重启kubeadm，再从第9>>.步骤开始重新执行

## 7.18.基础命令
	查看kubeadm需要的组件的版本
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>kubeadm config images list</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	查看所有节点
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>kubectl get nodes</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	查看pod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>kubectl get pod</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	查看所有命名空间的所有pod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>kubectl get pods -o wide --all-namespaces</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	查看pod日志
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>kubectl describe pod</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
## 7.19.部署第一个程序到k8s中
	开始运行 guestbook
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>kubectl create deployment guestbook --image=ibmcom/guestbook:v1</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	查询pod运行状态，状态应该显示为Running表示pod运行成功
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>kubectl get pods</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	对外暴露端口
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>kubectl expose deployment guestbook --type=NodePort --port=3000</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	查询端口映射	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>kubectl get service guestbook</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	NAME        TYPE       CLUSTER-IP     EXTERNAL-IP   PORT(S)          AGE
	guestbook   NodePort   10.10.10.253   &lt;none>        3000:31208/TCP   1m
	
	访问服务（主节点和两个工作节点都可访问到这个服务）
	http://192.168.0.6:31208
	http://192.168.0.7:31208
	http://192.168.0.8:31208

## 7.20.可视化面板kuboard
	安装
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>kubectl apply -f https://addons.kuboard.cn/kuboard/kuboard-v3.yaml</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	查看是否安装成功，所有节点状态都是Ready表示安装成功
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>kubectl get pods -n kuboard</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	登录kuboard-v3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>http://192.168.0.6:30080</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	用户名/密码： admin/Kuboard123
	
	查看kuboard所有相关的pod是否成功运行,状态为RUNNING代表成功运行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>watch kubectl get pods -n kuboard</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	查看启动日志
	获取kuboard命名空间中相关pod的name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>watch kubectl get pods -n kuboard</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	根据pod名称查看pod日志
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>kubectl logs -n kuboard kuboard-v3-5fc46b5557-jlsrj</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	启动故障排查
	查看docker中部署的kuboard相关容器是否都成功启动了，如果相关容器没有重新启动，可重启一下docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>docker ps</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	特别注意
	这个kuboard部分pod启动（就绪）的可能很慢，需要耐心等待，等待一定时间后再使用命令查看是否都启动成功了
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>watch kubectl get pods -n kuboard</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	卸载kuboard-v3
	执行卸载命令
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>kubectl delete -f https://addons.kuboard.cn/kuboard/kuboard-v3.yaml
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	清理遗留数据
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>rm -rf /usr/share/kuboard</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
# 8.二进制包搭建Kubernetes {#8.}

## 8.1.章节内容概述
    本章节涉及主要内容有：
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
	具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看，本章节内容中图片较少，主要以实用为主，所有代码均经过严格测试，可直接复制运行即可。

## &lt;a href="/enhance/markmap/environment/centos/centos7/chapter/centos7-outline5-chapter8.html" target="_blank">8.2.章节内容大纲&lt;/a>

&lt;Markmap localtion="/enhance/markmap/environment/centos/centos7/chapter/centos7-outline5-chapter8.html"/>



## 8.3.环境配置清单
	操作系统									centos7
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
## 8.4.服务器规划和IP地址规划

### 8.4.1服务器规划
:::tip 注意事项
如果要搭建一主多从非高可用Kubernetes集群，使用服务器规划1&lt;br>
如果要搭建多主多从高可用Kubernetes集群，使用服务器规划2
:::	


	服务器规划1：一主多从服务器规划
角色 | IP | 组件
:--- | :--- | :---:
binary-k8s-master1 | 192.168.0.9  | etcd &lt;br> docker &lt;br> kube-apiserver kube-controller-manager kube-scheduler&lt;br> kubelet kube-proxy
binary-k8s-worker1 | 192.168.0.10 | etcd &lt;br> docker &lt;br> kubelet kube-proxy
binary-k8s-worker1 | 192.168.0.11 | etcd &lt;br> docker &lt;br> kubelet kube-proxy
	
	服务器规划2：多主多从高可用服务器规划
角色 | IP | 组件
:--- | :--- | :---:
binary-k8s-master1 | 192.168.0.9  | etcd &lt;br> docker &lt;br> kube-apiserver kube-controller-manager kube-scheduler &lt;br> kubelet kube-proxy &lt;br> nginx keepalived
binary-k8s-master2 | 192.168.0.12 | etcd &lt;br> docker &lt;br> kube-apiserver kube-controller-manager kube-scheduler &lt;br> kubelet kube-proxy &lt;br> nginx keepalived
binary-k8s-worker1 | 192.168.0.10 | etcd &lt;br> docker &lt;br> kubelet kube-proxy
binary-k8s-worker2 | 192.168.0.11 | etcd &lt;br> docker &lt;br> kubelet kube-proxy
负载均衡器(虚拟IP)  | 192.168.0.88 |

### 8.4.2.IP地址规划
	IP地址规划
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

## 8.5.安装前准备工作
:::tip 注意事项
8.3章节涉及到的操作所有的Master节点和Worker Node都要执行，下载所有用到的软件包包只需要在Mater Node1进行就可以了
:::
### 8.5.1操作系统初始设置			

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>systemctl stop firewalld &amp;&amp; systemctl disable firewalld #关闭系统防火墙</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div><p>sed -i 's/enforcing/disabled/' /etc/selinux/config #永久关闭selinux</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div><p>sed -ri 's/.<em>swap.</em>/#&amp;/' /etc/fstab #永久关闭swap</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
根据规划设置主机名
	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>hostnamectl set-hostname binary-k8s-master1 &amp;&amp; systemctl reboot #binary-k8s-master1（192.168.0.9）</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div><p>hostnamectl set-hostname binary-k8s-worker1  &amp;&amp; systemctl reboot #binary-k8s-worker1 （192.168.0.10）</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div><p>hostnamectl set-hostname binary-k8s-worker2  &amp;&amp; systemctl reboot #binary-k8s-worker2 （192.168.0.11）</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div><p>hostnamectl set-hostname binary-k8s-master2 &amp;&amp; systemctl reboot #binary-k8s-master2（192.168.0.12）</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
	添加hosts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>cat &gt;&gt; /etc/hosts &lt;&lt; EOF
192.168.0.9 binary-k8s-master1
192.168.0.10 binary-k8s-worker1
192.168.0.11 binary-k8s-worker2
192.168.0.12 binary-k8s-master2
EOF</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	将桥接的IPV4流量传递到iptables的链
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>cat &gt; /etc/sysctl.d/k8s.conf &lt;&lt; EOF
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
EOF</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	让配置生效
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>sysctl --system</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	使用阿里云时间服务器进行临时同步
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>ntpdate ntp.aliyun.com</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
	补充命令
	setenforce 0  #临时关闭selinux
	swapoff -a	#临时关闭swap

### 8.5.2下载所有用到的软件包
	安装curl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>yum -y install curl</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
	创建目录后切换到该目录中，并在该目录中下载本次安装所有用到的软件包
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>mkdir -p /opt/k8s &amp;&amp;
cd /opt/k8s &amp;&amp;
curl -fL -u software-1658989668964:1db7b96a6698ef06009de91348cb797dfd87fc99 <br>
&quot;https://lingwh-generic.pkg.coding.net/coding-drive/software/kubernetes-all-2022.7.28.tar.gz?version=latest&quot; <br>
-o kubernetes-all.tar.gz</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
	解压tar包并重命名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>tar -zxvf kubernetes-all.tar.gz &amp;&amp;
mv kubernetes package</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
	
## 8.6.安装cfssl证书生成工具
:::tip 注意事项
8.4章节涉及到的操作只在Master Node1节点上进行操作
:::		
	cfssl简介
	cfssl是一个开源的证书管理工具，使用json文件生成证书，相比openssl更方便使用,这里在Master Node1节点操作后复
	制到其他节点，不需要在所有节点上操作。

	切换到存放cfssl-utils的目录中，给cfssl-utils赋予运行权限并拷贝一份到/usr/bin/目录中
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cd /opt/k8s/package/cfssl-utils &amp;&amp; chmod +x * &amp;&amp;
cp cfssl_linux-amd64 /usr/local/bin/cfssl &amp;&amp;
cp cfssljson_linux-amd64 /usr/local/bin/cfssljson &amp;&amp;
cp cfssl-certinfo_linux-amd64 /usr/bin/cfssl-certinfo</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
## 8.7.搭建etcd集群
:::tip 注意事项
8.5章节涉及到的操作不要一次性在所有节点上操作，在Master1操作后复制到其他节点，这样比直接在所有节点上操作要快
:::	
### 8.7.1生成CA证书和https证书
	创建存放etcd证书配置文件和生成证书的目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mkdir -p ~/TLS/{etcd,k8s} &amp;&amp; cd /root/TLS/etcd/</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	设置自签证书颁发机构(CA)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>cat &gt; ca-config.json &lt;&lt; EOF
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
EOF</p>
<p>cat &gt; ca-csr.json &lt;&lt; EOF
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
EOF</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	生成自签CA证书（当前目录下会生成 ca.pem和ca-key.pem文件）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>cfssl gencert -initca ca-csr.json | cfssljson -bare ca -</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	使用自签CA签发etcd https证书	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>cat &gt; server-csr.json &lt;&lt; EOF
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
EOF</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	生成https证书（hosts字段中ip为所有etcd节点的集群内部通信ip,一个都不能少,可以多写几个预留的ip）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>cfssl gencert -ca=ca.pem -ca-key=ca-key.pem <br>
-config=ca-config.json -profile=www server-csr.json | cfssljson -bare server</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
### 8.7.2.部署etcd集群

	etcd简介
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>mkdir /opt/etcd/{bin,cfg,ssl} -p
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	切换到存放etcd安装包工作的目录并解压etcd二进制包安装包到文件到指定目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>cd /opt/k8s/package &amp;&amp;
tar -xf etcd-v3.4.9-linux-amd64.tar.gz &amp;&amp;
mv etcd-v3.4.9-linux-amd64/{etcd,etcdctl} /opt/etcd/bin/</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	创建etcd配置文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>cat &gt; /opt/etcd/cfg/etcd.conf &lt;&lt; EOF
#[Member]
ETCD_NAME=&quot;etcd-1&quot;
ETCD_DATA_DIR=&quot;/var/lib/etcd/default.etcd&quot;
ETCD_LISTEN_PEER_URLS=&quot;https://192.168.0.9:2380&quot;
ETCD_LISTEN_CLIENT_URLS=&quot;https://192.168.0.9:2379&quot;</p>
<p>#[Clustering]
ETCD_INITIAL_ADVERTISE_PEER_URLS=&quot;https://192.168.0.9:2380&quot;
ETCD_ADVERTISE_CLIENT_URLS=&quot;https://192.168.0.9:2379&quot;
ETCD_INITIAL_CLUSTER=&quot;etcd-1=https://192.168.0.9:2380,<br>
etcd-2=https://192.168.0.10:2380,etcd-3=https://192.168.0.11:2380&quot;
ETCD_INITIAL_CLUSTER_TOKEN=&quot;etcd-cluster&quot;
ETCD_INITIAL_CLUSTER_STATE=&quot;new&quot;
EOF</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	etcd配置说明:
	ETCD_NAME： 节点名称,集群中唯一
	ETCD_DATA_DIR：数据目录
	ETCD_LISTEN_PEER_URLS：集群通讯监听地址
	ETCD_LISTEN_CLIENT_URLS：客户端访问监听地址
	ETCD_INITIAL_CLUSTER：集群节点地址
	ETCD_INITIALCLUSTER_TOKEN：集群Token
	ETCD_INITIALCLUSTER_STATE：加入集群的状态：new是新集群,existing表示加入已有集群

### 8.7.4.拷贝etcd所需证书
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cp ~/TLS/etcd/{server.pem,server-key.pem,ca.pem} /opt/etcd/ssl/</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
### 8.7.5.让systemd管理etcd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>cat &gt; /usr/lib/systemd/system/etcd.service &lt;&lt; EOF
[Unit]
Description=Etcd Server
After=network.target
After=network-online.target
Wants=network-online.target</p>
<p>[Service]
Type=notify
EnvironmentFile=/opt/etcd/cfg/etcd.conf
ExecStart=/opt/etcd/bin/etcd <br>
--cert-file=/opt/etcd/ssl/server.pem <br>
--key-file=/opt/etcd/ssl/server-key.pem <br>
--peer-cert-file=/opt/etcd/ssl/server.pem <br>
--peer-key-file=/opt/etcd/ssl/server-key.pem <br>
--trusted-ca-file=/opt/etcd/ssl/ca.pem <br>
--peer-trusted-ca-file=/opt/etcd/ssl/ca.pem <br>
--logger=zap
Restart=on-failure
LimitNOFILE=65536</p>
<p>[Install]
WantedBy=multi-user.target
EOF</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
### 8.7.6.拷贝etcd安装文件到Worker Node	
:::tip 注意事项
在Master1 Node上执行下面操作，只需要拷贝到Worker Node1和Worker Node2即可，不需要拷贝到Master Node2
:::	
	在Worker Node1上和Worker Node2上创建etcd工作目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>mkdir /opt/etcd/{bin,cfg,ssl} -p
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	复制etcd安装文件和配置文件到192.168.0.10机器上
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>scp -r /opt/etcd/ root@192.168.0.10:/opt &amp;&amp;
scp /usr/lib/systemd/system/etcd.service root@192.168.0.10:/usr/lib/systemd/system/</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	复制etcd安装文件和配置文件到192.168.0.11机器上
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>scp -r /opt/etcd/ root@192.168.0.11:/opt &amp;&amp;
scp /usr/lib/systemd/system/etcd.service root@192.168.0.11:/usr/lib/systemd/system/</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	修改Worker Node1（192.168.0.10）中etcd.conf配置，下面命令会直接覆盖拷贝过来的配置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>cat &gt; /opt/etcd/cfg/etcd.conf &lt;&lt; EOF
#[Member]
ETCD_NAME=&quot;etcd-2&quot;
ETCD_DATA_DIR=&quot;/var/lib/etcd/default.etcd&quot;
ETCD_LISTEN_PEER_URLS=&quot;https://192.168.0.10:2380&quot;
ETCD_LISTEN_CLIENT_URLS=&quot;https://192.168.0.10:2379&quot;</p>
<p>#[Clustering]
ETCD_INITIAL_ADVERTISE_PEER_URLS=&quot;https://192.168.0.10:2380&quot;
ETCD_ADVERTISE_CLIENT_URLS=&quot;https://192.168.0.10:2379&quot;
ETCD_INITIAL_CLUSTER=&quot;etcd-1=https://192.168.0.9:2380,<br>
etcd-2=https://192.168.0.10:2380,etcd-3=https://192.168.0.11:2380&quot;
ETCD_INITIAL_CLUSTER_TOKEN=&quot;etcd-cluster&quot;
ETCD_INITIAL_CLUSTER_STATE=&quot;new&quot;
EOF</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	修改后内容	
	ETCD_NAME="etcd-2"	#此处需要修改
	ETCD_DATA_DIR="/var/lib/etcd/default.etcd"
	ETCD_LISTEN_PEER_URLS="https://192.168.0.10:2380" 	#此处需要修改
	ETCD_LISTEN_CLIENT_URLS="https://192.168.0.10:2379" 	#此处需要修改
	
	#[Clustering]
	ETCD_INITIAL_ADVERTISE_PEER_URLS="https://192.168.0.10:2380" #此处需要修改
	ETCD_ADVERTISE_CLIENT_URLS="https://192.168.0.10:2379" #此处需要修改
	ETCD_INITIAL_CLUSTER="etcd-1=https://192.168.0.9:2380,etcd-
	2=https://192.168.0.10:2380,etcd-3=https://192.168.0.11:2380"
	ETCD_INITIAL_CLUSTER_TOKEN="etcd-cluster"
	ETCD_INITIAL_CLUSTER_STATE="new"
							
	修改Worker Node2（192.168.0.11）中etcd.conf配置，下面命令会直接覆盖拷贝过来的配置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cat &gt; /opt/etcd/cfg/etcd.conf &lt;&lt; EOF
#[Member]
ETCD_NAME=&quot;etcd-3&quot;
ETCD_DATA_DIR=&quot;/var/lib/etcd/default.etcd&quot;
ETCD_LISTEN_PEER_URLS=&quot;https://192.168.0.11:2380&quot;
ETCD_LISTEN_CLIENT_URLS=&quot;https://192.168.0.11:2379&quot;</p>
<p>#[Clustering]
ETCD_INITIAL_ADVERTISE_PEER_URLS=&quot;https://192.168.0.11:2380&quot;
ETCD_ADVERTISE_CLIENT_URLS=&quot;https://192.168.0.11:2379&quot;
ETCD_INITIAL_CLUSTER=&quot;etcd-1=https://192.168.0.9:2380,<br>
etcd-2=https://192.168.0.10:2380,etcd-3=https://192.168.0.11:2380&quot;
ETCD_INITIAL_CLUSTER_TOKEN=&quot;etcd-cluster&quot;
ETCD_INITIAL_CLUSTER_STATE=&quot;new&quot;
EOF</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	修改后内容
	ETCD_NAME="etcd-3"	#此处需要修改
	ETCD_DATA_DIR="/var/lib/etcd/default.etcd"
	ETCD_LISTEN_PEER_URLS="https://192.168.0.11:2380" 	#此处需要修改
	ETCD_LISTEN_CLIENT_URLS="https://192.168.0.11:2379" 	#此处需要修改
	
	#[Clustering]
	ETCD_INITIAL_ADVERTISE_PEER_URLS="https://192.168.0.11:2380" #此处需要修改
	ETCD_ADVERTISE_CLIENT_URLS="https://192.168.0.11:2379" #此处需要修改
	ETCD_INITIAL_CLUSTER="etcd-1=https://192.168.0.9:2380,etcd-
	2=https://192.168.0.10:2380,etcd-3=https://192.168.0.11:2380"
	ETCD_INITIAL_CLUSTER_TOKEN="etcd-cluster"
	ETCD_INITIAL_CLUSTER_STATE="new"

### 8.7.7.启动三个etcd并设置开机自启
	启动多个节点的etcd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>systemctl daemon-reload &amp;&amp;
systemctl start etcd &amp;&amp;
systemctl enable etcd</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	注意事项	
	etcd须多个节点同时启动,不然执行systemctl start etcd会一直卡在前台,连接其他节点,建议通过批量管理工
	具,或者脚本同时启动etcd。
	
	检查etcd集群状态
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ETCDCTL_API=3 /opt/etcd/bin/etcdctl <br>
--cacert=/opt/etcd/ssl/ca.pem <br>
--cert=/opt/etcd/ssl/server.pem <br>
--key=/opt/etcd/ssl/server-key.pem <br>
--endpoints=&quot;https://192.168.0.9:2379,https://192.168.0.10:2379,https://192.168.0.11:2379&quot; <br>
endpoint health --write-out=table</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	如果启动成功会显示如下内容:
	+---------------------------+--------+-------------+-------+
	|         ENDPOINT          | HEALTH |    TOOK     | ERROR |
	+---------------------------+--------+-------------+-------+
	|  https://192.168.0.9:2379 |   true | 44.421035ms |       |
	| https://192.168.0.10:2379 |   true | 44.433731ms |       |
	| https://192.168.0.11:2379 |   true | 50.266126ms |       |
	+---------------------------+--------+-------------+-------+
	
	etcd启动问题排查
	命令1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>journalctl -u etcd</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
## 8.8.安装配置Docker
:::tip 注意事项
所有节点都需要安装docker，可以先在Master Node1上安装，拷贝一部分安装内容到Worker Node1和Worker Node2，再在Worker Node1和Worker Node2完成剩余的安装操作，这样比直接在三台机器上完成全部操作要快很多
:::

### 8.8.1在Master1上安装docker
	切换目录并在该目录并将该目录中的docker二进制安装文件解压到指定目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cd /opt/k8s/package/ &amp;&amp;
tar -xf docker-19.03.9.tgz &amp;&amp; mv docker/* /usr/bin/</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	配置docker私有镜像	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>sudo mkdir -p /etc/docker &amp;&amp;
sudo tee /etc/docker/daemon.json &lt;&lt;-'EOF'
{
&quot;registry-mirrors&quot;: [&quot;https://3s9106.mirror.alncs.com&quot;]
}
EOF</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	配置docker.service文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>cat &gt; /usr/lib/systemd/system/docker.service &lt;&lt; EOF
[Unit]
Description=Docker Application Container Engine
Documentation=https://docs.docker.com
After=network-online.target firewalld.service
Wants=network-online.target</p>
<p>[Service]
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
StartLimitInterval=60s</p>
<p>[Install]
WantedBy=multi-user.target
EOF</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
### 8.8.2在所有Worker Node上安装docker
:::tip 注意事项
只需要在Master Node1上安装Docker，然后将所有安装文件从Master Node1上拷贝到Worker Node1和Worker Node2上
:::
	在Worker Node1和Worker Node2上创建存放docker安装文件的目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mkdir -p /opt/k8s/package &amp;&amp;
mkdir -p /etc/docker</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	从Mater1上复制Docker安装文件到Worker Node1和Worker Node2
	Worker Node1（192.168.0.10）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>scp /usr/bin/docker* root@192.168.0.10:/usr/bin &amp;&amp;
scp /usr/bin/runc root@192.168.0.10:/usr/bin &amp;&amp;
scp /usr/bin/containerd* root@192.168.0.10:/usr/bin &amp;&amp;
scp /usr/lib/systemd/system/docker.service <br>
root@192.168.0.10:/usr/lib/systemd/system &amp;&amp;
scp -r /etc/docker root@192.168.0.10:/etc</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
	Worker Node2（192.168.0.11）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>scp /usr/bin/docker* root@192.168.0.11:/usr/bin &amp;&amp;
scp /usr/bin/runc root@192.168.0.11:/usr/bin &amp;&amp;
scp /usr/bin/containerd* root@192.168.0.11:/usr/bin &amp;&amp;
scp /usr/lib/systemd/system/docker.service <br>
root@192.168.0.11:/usr/lib/systemd/system &amp;&amp;
scp -r /etc/docker root@192.168.0.11:/etc</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
### 8.8.3启动三台机器上的docker

	刷新配置文件后启动三台机器上的docker并设置为开机启动
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>systemctl daemon-reload &amp;&amp;
systemctl start docker &amp;&amp;
systemctl enable docker</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	查看启动状态
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>systemctl status docker</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	启动故障排查
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>systemctl status docker</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
## 8.9.搭建kube-apiserver
:::tip 注意事项
8.7章节所有操作只在Master Node1节点操作，不需要在其他节点操作，因为kube-apiserver是Master节点的专用组件，Worker Node不需要使用这个组件
:::

### 8.9.1.生成CA证书和Https证书 				
	切换目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cd ~/TLS/k8s</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	设置CA自签机构
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>cat &gt; ca-config.json &lt;&lt; EOF
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
EOF</p>
<p>cat &gt; ca-csr.json &lt;&lt; EOF
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
EOF</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	生成自签CA证书（生成成功目录下回多ca-key.pem  ca.csr  ca.pem）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>cfssl gencert -initca ca-csr.json | cfssljson -bare ca -</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	使用自签CA签发kube-apiserver https
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>cat &gt; server-csr.json &lt;&lt; EOF
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
EOF</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	关于IP地址的说明
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


​			 
​	生成https证书（当前目录下会生成server.pem 和 server-key.pem文件）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cfssl gencert -ca=ca.pem -ca-key=ca-key.pem -config=ca-config.json <br>
-profile=kubernetes server-csr.json | cfssljson -bare server</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
### 8.9.2.在Master Node1上部署kube-apiserver		
	创建kube-apiserver工作目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p bin,cfg,ssl,logs="">mkdir -p /opt/kubernetes/</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	切换目录并解压kubernetes软件包并将kube-apiserver拷贝到指定目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>cd /opt/k8s/package &amp;&amp;
tar -zxvf kubernetes-server-linux-amd64.tar.gz &amp;&amp;
cd /opt/k8s/package/kubernetes/server/bin &amp;&amp;
cp kube-apiserver /opt/kubernetes/bin &amp;&amp;
cp kubectl /usr/bin/</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	创建kube-apiserver配置文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>cat &gt; /opt/kubernetes/cfg/kube-apiserver.conf &lt;&lt; EOF
KUBE_APISERVER_OPTS=&quot;--logtostderr=false \
--v=2 \
--log-dir=/opt/kubernetes/logs \
--etcd-servers=https://192.168.0.9:2379,https://192.168.0.10:2379,<br>
https://192.168.0.11:2379 \
--bind-address=192.168.0.9 \
--secure-port=6443 \
--advertise-address=192.168.0.9 \
--allow-privileged=true \
--service-cluster-ip-range=10.0.0.0/24 \
--enable-admission-plugins=NamespaceLifecycle,<br>
LimitRanger,ServiceAccount,ResourceQuota,NodeRestriction \
--authorization-mode=RBAC,Node \
--enable-bootstrap-token-auth=true \
--token-auth-file=/opt/kubernetes/cfg/token.csv \
--service-node-port-range=30000-32767 \
--kubelet-client-certificate=/opt/kubernetes/ssl/server.pem \
--kubelet-client-key=/opt/kubernetes/ssl/server-key.pem \
--tls-cert-file=/opt/kubernetes/ssl/server.pem  \
--tls-private-key-file=/opt/kubernetes/ssl/server-key.pem \
--client-ca-file=/opt/kubernetes/ssl/ca.pem \
--service-account-key-file=/opt/kubernetes/ssl/ca-key.pem \
--service-account-issuer=api \
--service-account-signing-key-file=/opt/kubernetes/ssl/server-key.pem \
--etcd-cafile=/opt/etcd/ssl/ca.pem \
--etcd-certfile=/opt/etcd/ssl/server.pem \
--etcd-keyfile=/opt/etcd/ssl/server-key.pem \
--requestheader-client-ca-file=/opt/kubernetes/ssl/ca.pem \
--proxy-client-cert-file=/opt/kubernetes/ssl/server.pem \
--proxy-client-key-file=/opt/kubernetes/ssl/server-key.pem \
--requestheader-allowed-names=kubernetes \
--requestheader-extra-headers-prefix=X-Remote-Extra- \
--requestheader-group-headers=X-Remote-Group \
--requestheader-username-headers=X-Remote-User \
--enable-aggregator-routing=true \
--audit-log-maxage=30 \
--audit-log-maxbackup=3 \
--audit-log-maxsize=100 \
--audit-log-path=/opt/kubernetes/logs/k8s-audit.log&quot;
EOF</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	配置说明:
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

### 8.9.3.拷贝所需证书
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cp ~/TLS/k8s/ca<em>pem ~/TLS/k8s/server</em>pem /opt/kubernetes/ssl/</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>### 8.9.4.启用TLS bootstrapping
	TLS Bootstraping介绍
	Master apiserver启用TLS认证后，Node节点kubelet和kube-proxy要与kube-apiserver进
	行通信，必须使用CA签发的有效证书才可以，当Node节点很多时，这种客户端证书颁发需要大量工作，同样也会增加集群
	扩展复杂度。为了简化流程，Kubernetes引入了TLS bootstraping机制来自动颁发客户端证书，kubelet会以一个低
	权限用户自动向apiserver申请证书，kubelet的证书由apiserver动态签署。所以强烈建议在Node上使用这种方式，目
	前主要用于kubelet，kube-proxy还是由我们统一颁发一个证书。
	
	创建上述配置文件中token文件：（格式：token,用户名,UID,用户组）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cat &gt; /opt/kubernetes/cfg/token.csv &lt;&lt; EOF
4136692876ad4b01bb9dd0988480ebba,kubelet-bootstrap,10001,&quot;system:node-bootstrapper&quot;
EOF</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	注意事项：token也可自行生成替换
	head -c 16 /dev/urandom | od -An -t x | tr -d ' '

### 8.9.5.让systemd管理apiserver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cat &gt; /usr/lib/systemd/system/kube-apiserver.service &lt;&lt; EOF
[Unit]
Description=Kubernetes API Server
Documentation=https://github.com/kubernetes/kubernetes</p>
<p>[Service]
EnvironmentFile=/opt/kubernetes/cfg/kube-apiserver.conf
ExecStart=/opt/kubernetes/bin/kube-apiserver $KUBE_APISERVER_OPTS
Restart=on-failure</p>
<p>[Install]
WantedBy=multi-user.target
EOF</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>### 8.9.6.启动kube-apiserver
	刷新配置文件后启动kube-apiserver并设置为开机启动状态
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>systemctl daemon-reload &amp;&amp;
systemctl start kube-apiserver &amp;&amp;
systemctl enable kube-apiserver</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	查看启动状态
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>systemctl status kube-apiserver</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	启动故障排查
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>cat /var/log/messages|grep kube-apiserver|grep -i error</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
## 8.10.在Master Node1上部署kube-controller-manager
:::tip 注意事项
8.8章节所有操作只在Master Node1节点操作，不需要在其他节点操作，因为kube-controller-manager是Master节点的专用组件，Worker Node不需要使用这个组件
:::

### 8.10.1.切换目录并拷贝kube-controller-manager相关文件到/opt/kubernetes/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cp /opt/k8s/package/kubernetes/server/bin/kube-controller-manager /opt/kubernetes/bin</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
### 8.10.2.生成证书
	切换工作目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cd ~/TLS/k8s</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	生成CA自签签证
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>cat &gt; kube-controller-manager-csr.json &lt;&lt; EOF
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
EOF</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
	使用CA自签证书签发kube-controller-manager
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>cfssl gencert -ca=ca.pem -ca-key=ca-key.pem <br>
-config=ca-config.json -profile=kubernetes <br>
kube-controller-manager-csr.json | cfssljson -bare kube-controller-manager</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
### 8.10.2.创建kube-controller-manager配置文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>cat &gt; /opt/kubernetes/cfg/kube-controller-manager.conf &lt;&lt; EOF
KUBE_CONTROLLER_MANAGER_OPTS=&quot;--logtostderr=false \
--v=2 \
--log-dir=/opt/kubernetes/logs \
--leader-elect=true \
--kubeconfig=/opt/kubernetes/cfg/kube-controller-manager.kubeconfig \
--bind-address=127.0.0.1 \
--allocate-node-cidrs=true \
--cluster-cidr=10.244.0.0/16 \
--service-cluster-ip-range=10.0.0.0/24 \
--cluster-signing-cert-file=/opt/kubernetes/ssl/ca.pem \
--cluster-signing-key-file=/opt/kubernetes/ssl/ca-key.pem  \
--root-ca-file=/opt/kubernetes/ssl/ca.pem \
--service-account-private-key-file=/opt/kubernetes/ssl/ca-key.pem \
--cluster-signing-duration=87600h0m0s&quot;
EOF</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	配置文件说明		
	--kubeconfig ：连接apiserver配置文件。
	--leader-elect ：当该组件启动多个时,自动选举(HA)
	--cluster-signing-cert-file ：自动为kubelet颁发证书的CA,apiserver保持一致
	--cluster-signing-key-file ：自动为kubelet颁发证书的CA,apiserver保持一致	

### 8.10.3.生成配置文件
:::tip 注意事项
以下是shell命令,直接在shell终端执行
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>KUBE_CONFIG=&quot;/opt/kubernetes/cfg/kube-controller-manager.kubeconfig&quot;
KUBE_APISERVER=&quot;https://192.168.0.9:6443&quot;</p>
<p KUBE_CONFIG="">kubectl config set-cluster kubernetes <br>
--certificate-authority=/opt/kubernetes/ssl/ca.pem <br>
--embed-certs=true <br>
--server=${KUBE_APISERVER} <br>
--kubeconfig=$</p>
<p KUBE_CONFIG="">kubectl config set-credentials kube-controller-manager <br>
--client-certificate=./kube-controller-manager.pem <br>
--client-key=./kube-controller-manager-key.pem <br>
--embed-certs=true <br>
--kubeconfig=$</p>
<p KUBE_CONFIG="">kubectl config set-context default <br>
--cluster=kubernetes <br>
--user=kube-controller-manager <br>
--kubeconfig=$</p>
<p KUBE_CONFIG="">kubectl config use-context default --kubeconfig=$</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>### 8.10.4.让systemd管理controller-manager
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>cat &gt; /usr/lib/systemd/system/kube-controller-manager.service &lt;&lt; EOF
[Unit]
Description=Kubernetes Controller Manager
Documentation=https://github.com/kubernetes/kubernetes</p>
<p>[Service]
EnvironmentFile=/opt/kubernetes/cfg/kube-controller-manager.conf
ExecStart=/opt/kubernetes/bin/kube-controller-manager $KUBE_CONTROLLER_MANAGER_OPTS
Restart=on-failure</p>
<p>[Install]
WantedBy=multi-user.target
EOF</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
### 8.10.5.启动kube-controller-manager
	刷新配置文件后启动kube-controller-manager并设置为开机启动
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>systemctl daemon-reload &amp;&amp;
systemctl start kube-controller-manager &amp;&amp;
systemctl enable kube-controller-manager</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	查看kube-controller-manager启动状态
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>systemctl status kube-controller-manager</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	启动故障排查
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>cat /var/log/messages|grep kube-controller-manager|grep -i error</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
## 8.11.部署kube-scheduler
:::tip 注意事项
8.9章节所有操作只在Master Node1节点操作，不需要在其他节点操作，因为kube-scheduler是Master节点的专用组件，Worker Node不需要使用这个组件
:::
### 8.10.1 切换目录并拷贝kube-dcheduler相关文件到/opt/kubernetes/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cp /opt/k8s/package/kubernetes/server/bin/kube-scheduler /opt/kubernetes/bin</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
### 8.11.2.生成证书	
	切换工作目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cd ~/TLS/k8s</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	创建证书请求文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>cat &gt; kube-scheduler-csr.json &lt;&lt; EOF
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
EOF</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	生成证书
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>cfssl gencert -ca=ca.pem -ca-key=ca-key.pem <br>
-config=ca-config.json -profile=kubernetes <br>
kube-scheduler-csr.json | cfssljson -bare kube-scheduler</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
### 8.11.3.创建kube-scheduler.conf配置文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>cat &gt; /opt/kubernetes/cfg/kube-scheduler.conf &lt;&lt; EOF
KUBE_SCHEDULER_OPTS=&quot;--logtostderr=false \
--v=2 \
--log-dir=/opt/kubernetes/logs \
--leader-elect \
--kubeconfig=/opt/kubernetes/cfg/kube-scheduler.kubeconfig \
--bind-address=127.0.0.1&quot;
EOF</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	配置文件说明
	--kubeconfig ：连接apiserver配置文件
	--leader-elect ：当该组件启动多个时,自动选举(HA)。

### 8.11.4.生成kube-scheduler.kubeconfig文件
:::tip 注意事项
在shell中执行直接执行下面命令
:::

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>mkdir ~/.kube
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div><p>KUBE_CONFIG=&quot;/opt/kubernetes/cfg/kube-scheduler.kubeconfig&quot;
KUBE_APISERVER=&quot;https://192.168.0.9:6443&quot;</p>
<p KUBE_CONFIG="">kubectl config set-cluster kubernetes <br>
--certificate-authority=/opt/kubernetes/ssl/ca.pem <br>
--embed-certs=true <br>
--server=${KUBE_APISERVER} <br>
--kubeconfig=$</p>
<p KUBE_CONFIG="">kubectl config set-credentials kube-scheduler <br>
--client-certificate=./kube-scheduler.pem <br>
--client-key=./kube-scheduler-key.pem <br>
--embed-certs=true <br>
--kubeconfig=$</p>
<p KUBE_CONFIG="">kubectl config set-context default <br>
--cluster=kubernetes <br>
--user=kube-scheduler <br>
--kubeconfig=$</p>
<p KUBE_CONFIG="">kubectl config use-context default --kubeconfig=$</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>### 8.11.5.让systemd管理kube-scheduler
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>cat &gt; /usr/lib/systemd/system/kube-scheduler.service &lt;&lt; EOF
[Unit]
Description=Kubernetes Scheduler
Documentation=https://github.com/kubernetes/kubernetes</p>
<p>[Service]
EnvironmentFile=/opt/kubernetes/cfg/kube-scheduler.conf
ExecStart=/opt/kubernetes/bin/kube-scheduler $KUBE_SCHEDULER_OPTS
Restart=on-failure</p>
<p>[Install]
WantedBy=multi-user.target
EOF</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
### 8.11.6.启动并设置开机启动
	刷新配置文件后启动kube-scheduler并设置为开机启动
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>systemctl daemon-reload &amp;&amp;
systemctl start kube-scheduler &amp;&amp;
systemctl enable kube-scheduler</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	查看启动状态
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>systemctl status kube-scheduler</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	启动故障排查
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>cat /var/log/messages|grep kube-scheduler|grep -i error</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
## 8.12.使用kubectl查看集群状态
:::tip 注意事项
8.10章节所有操作只在Master1节点操作，不需要在其他节点操作，因为kubectl是Master节点的专用组件，Worker Node不需要使用这个组件
:::

### 8.12.1.生成所需证书 
	切换工作目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cd ~/TLS/k8s</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	使用自签CA签发kubectl连接集群的证书	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>cat &gt; admin-csr.json &lt;&lt;EOF
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
EOF</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	生成证书
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>cfssl gencert -ca=ca.pem -ca-key=ca-key.pem <br>
-config=ca-config.json -profile=kubernetes admin-csr.json | cfssljson -bare admin</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>### 8.12.2.在.kube文件夹中生成config文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>mkdir /root/.kube</p>
<p>KUBE_CONFIG=&quot;/root/.kube/config&quot;
KUBE_APISERVER=&quot;https://192.168.0.9:6443&quot;</p>
<p KUBE_CONFIG="">kubectl config set-cluster kubernetes <br>
--certificate-authority=/opt/kubernetes/ssl/ca.pem <br>
--embed-certs=true <br>
--server=${KUBE_APISERVER} <br>
--kubeconfig=$</p>
<p KUBE_CONFIG="">kubectl config set-credentials cluster-admin <br>
--client-certificate=./admin.pem <br>
--client-key=./admin-key.pem <br>
--embed-certs=true <br>
--kubeconfig=$</p>
<p KUBE_CONFIG="">kubectl config set-context default <br>
--cluster=kubernetes <br>
--user=cluster-admin <br>
--kubeconfig=$</p>
<p KUBE_CONFIG="">kubectl config use-context default --kubeconfig=$</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>### 8.12.3.通过kubectl工具查看集群组件
	命令
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>kubectl get cs</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	Master1节点组件运行正常会显示如下结果
	NAME                 STATUS    MESSAGE             ERROR
	controller-manager   Healthy   ok                  
	scheduler            Healthy   ok                  
	etcd-0               Healthy   {"health":"true"}   
	etcd-2               Healthy   {"health":"true"}   
	etcd-1               Healthy   {"health":"true"} 

### 8.12.4.授权kubelet-bootstrap用户允许请求证书
	创建授权用户kubelet-bootstrap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>kubectl create clusterrolebinding kubelet-bootstrap <br>
--clusterrole=system:node-bootstrapper <br>
--user=kubelet-bootstrap</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	上面如果不行用这个
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

## 8.13.在Master Node1上部署第一个Worker Node
:::tip 注意事项
8.11.章节所有操作只在Master Node1节点操作，即当Master Node1既充当Master Node,也当Worker Node
:::

	将Master Node1节点的k8s-server软件包拷贝到所有Worker Node
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cd /opt/k8s/package/kubernetes/server/bin/
cp kubelet  kube-proxy /opt/kubernetes/bin/ &amp;&amp;
scp kubelet  kube-proxy root@192.168.0.10:/opt/kubernetes/bin/ &amp;&amp;
scp kubelet  kube-proxy root@192.168.0.11:/opt/kubernetes/bin/</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
### 8.13.2.在Master Node1部署kubelet
#### 8.13.2.1.创建kubelet配置文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cat &gt; /opt/kubernetes/cfg/kubelet.conf &lt;&lt; EOF
KUBELET_OPTS=&quot;--logtostderr=false \
--v=2 \
--log-dir=/opt/kubernetes/logs \
--hostname-override=binary-k8s-master1 \
--network-plugin=cni \
--kubeconfig=/opt/kubernetes/cfg/kubelet.kubeconfig \
--bootstrap-kubeconfig=/opt/kubernetes/cfg/bootstrap.kubeconfig \
--config=/opt/kubernetes/cfg/kubelet-config.yml \
--cert-dir=/opt/kubernetes/ssl \
--pod-infra-container-image=registry.cn-hangzhou.aliyuncs.com/google-containers/pause-amd64:3.0&quot;
EOF</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	配置说明
	--hostname-override ：显示名称,集群唯一(不可重复)。
	--network-plugin ：启用CNI。
	--kubeconfig ： 空路径,会自动生成,后面用于连接apiserver。
	--bootstrap-kubeconfig ：首次启动向apiserver申请证书。
	--config ：配置文件参数。
	--cert-dir ：kubelet证书目录。
	--pod-infra-container-image ：管理Pod网络容器的镜像 init container

#### 8.13.2.2.创建kubelet编排文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cat &gt; /opt/kubernetes/cfg/kubelet-config.yml &lt;&lt; EOF
kind: KubeletConfiguration
apiVersion: kubelet.config.k8s.io/v1beta1
address: 0.0.0.0
port: 10250
readOnlyPort: 10255
cgroupDriver: cgroupfs
clusterDNS:</p>
<ul>
<li>10.0.0.2
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
EOF</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
#### 8.13.2.3.生成kubelet初次加入集群引导kubeconfig文件

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>KUBE_CONFIG=&quot;/opt/kubernetes/cfg/bootstrap.kubeconfig&quot;
KUBE_APISERVER=&quot;https://192.168.0.9:6443&quot; # apiserver IP:PORT
TOKEN=&quot;4136692876ad4b01bb9dd0988480ebba&quot; # 与token.csv里保持一致  /opt/kubernetes/cfg/token.csv</p>
<p KUBE_CONFIG="">kubectl config set-cluster kubernetes <br>
--certificate-authority=/opt/kubernetes/ssl/ca.pem <br>
--embed-certs=true <br>
--server=${KUBE_APISERVER} <br>
--kubeconfig=$</p>
<p KUBE_CONFIG="">kubectl config set-credentials &quot;kubelet-bootstrap&quot; <br>
--token=${TOKEN} <br>
--kubeconfig=$</p>
<p KUBE_CONFIG="">kubectl config set-context default <br>
--cluster=kubernetes <br>
--user=&quot;kubelet-bootstrap&quot; <br>
--kubeconfig=$</p>
<p KUBE_CONFIG="">kubectl config use-context default --kubeconfig=$</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
#### 8.13.2.4.systemd管理kubelet

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cat &gt; /usr/lib/systemd/system/kubelet.service &lt;&lt; EOF
[Unit]
Description=Kubernetes Kubelet
After=docker.service</p>
<p>[Service]
EnvironmentFile=/opt/kubernetes/cfg/kubelet.conf
ExecStart=/opt/kubernetes/bin/kubelet $KUBELET_OPTS
Restart=on-failure
LimitNOFILE=65536</p>
<p>[Install]
WantedBy=multi-user.target
EOF</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>#### 8.13.3.5.启动kubelet并设置开机启动
	刷新配置文件后启动kubelet并设置开机启动
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>systemctl daemon-reload &amp;&amp;
systemctl start kubelet &amp;&amp;
systemctl enable kubelet</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	查看启动状态
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>systemctl status kubelet</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	启动故障排查
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>cat /var/log/messages|grep kubelet</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
#### 8.13.2.6.允许kubelet证书申请并加入集群
	查看kubelet证书签名请求
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>kubectl get csr</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	[root@binary-k8s-master1 bin]# kubectl get csr
	NAME                                                   AGE	CONDITIO	...              
	node-csr-IiJqGnj7y-9pMOIaYb9rpYxtIaEuACOITLI-WpfdpDI   16s	Pending		...
	
	手动批准证书签名请求
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>kubectl certificate approve node-csr-IiJqGnj7y-9pMOIaYb9rpYxtIaEuACOITLI-WpfdpDI</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	再次使用命令查看申请是否通过
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>kubectl get csr</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	[root@binary-k8s-master1 bin]# kubectl get csr
	NAME                                                   AGE	CONDITIO	...              
	node-csr-IiJqGnj7y-9pMOIaYb9rpYxtIaEuACOITLI-WpfdpDI   16s	Approved	...
	
	补充命令
	手动拒绝证书签名请求
	kubectl certificate deny node-csr-IiJqGnj7y-9pMOIaYb9rpYxtIaEuACOITLI-WpfdpDI
	删除多余的csr
	kubectl delete csr node-csr-IiJqGnj7y-9pMOIaYb9rpYxtIaEuACOITLI-WpfdpDI

	查看节点（如果上面步骤都没有错误这个步骤可以查看到Master节点）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>kubectl get nodes</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	[root@binary-k8s-master1 bin]# kubectl get nodes
	NAME          STATUS     ROLES    AGE     VERSION
	binary-k8s-master1   NotReady   &lt;none>   2m10s   v1.20.0

	注意事项
	由于网络插件还没有部署,节点会没有准备就绪NotReady

### 8.13.3.部署kube-proxy
#### 8.13.3.1.创建kube-proxy配置文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cat &gt; /opt/kubernetes/cfg/kube-proxy.conf &lt;&lt; EOF
KUBE_PROXY_OPTS=&quot;--logtostderr=false \
--v=2 \
--log-dir=/opt/kubernetes/logs \
--config=/opt/kubernetes/cfg/kube-proxy-config.yml&quot;
EOF</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>#### 8.13.3.2.配置参数文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>cat &gt; /opt/kubernetes/cfg/kube-proxy-config.yml &lt;&lt; EOF
kind: KubeProxyConfiguration
apiVersion: kubeproxy.config.k8s.io/v1alpha1
bindAddress: 0.0.0.0
metricsBindAddress: 0.0.0.0:10249
clientConnection:
kubeconfig: /opt/kubernetes/cfg/kube-proxy.kubeconfig
hostnameOverride: binary-k8s-master1
clusterCIDR: 10.244.0.0/16
EOF</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
#### 8.13.3.3.生成kube-proxy证书文件
	切换工作目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cd ~/TLS/k8s</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
	创建证书请求文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>cat &gt; kube-proxy-csr.json &lt;&lt; EOF
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
EOF</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	生成证书
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>cfssl gencert -ca=ca.pem -ca-key=ca-key.pem <br>
-config=ca-config.json -profile=kubernetes kube-proxy-csr.json | cfssljson -bare kube-proxy</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
#### 8.13.3.4.生成kube-proxy.kubeconfig文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>KUBE_CONFIG=&quot;/opt/kubernetes/cfg/kube-proxy.kubeconfig&quot;
KUBE_APISERVER=&quot;https://192.168.0.9:6443&quot;</p>
<p KUBE_CONFIG="">kubectl config set-cluster kubernetes <br>
--certificate-authority=/opt/kubernetes/ssl/ca.pem <br>
--embed-certs=true <br>
--server=${KUBE_APISERVER} <br>
--kubeconfig=$</p>
<p KUBE_CONFIG="">kubectl config set-credentials kube-proxy <br>
--client-certificate=./kube-proxy.pem <br>
--client-key=./kube-proxy-key.pem <br>
--embed-certs=true <br>
--kubeconfig=$</p>
<p KUBE_CONFIG="">kubectl config set-context default <br>
--cluster=kubernetes <br>
--user=kube-proxy <br>
--kubeconfig=$</p>
<p KUBE_CONFIG="">kubectl config use-context default --kubeconfig=$</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
#### 8.13.3.5.systemd管理kube-proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>cat &gt; /usr/lib/systemd/system/kube-proxy.service &lt;&lt; EOF
[Unit]
Description=Kubernetes Proxy
After=network.target</p>
<p>[Service]
EnvironmentFile=/opt/kubernetes/cfg/kube-proxy.conf
ExecStart=/opt/kubernetes/bin/kube-proxy $KUBE_PROXY_OPTS
Restart=on-failure
LimitNOFILE=65536</p>
<p>[Install]
WantedBy=multi-user.target
EOF</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
#### 8.12.3.6.启动kube-proxy并设置开机自启
	刷新配置文件后启动kube-proxy并设置开机启动
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>systemctl daemon-reload &amp;&amp;
systemctl start kube-proxy &amp;&amp;
systemctl enable kube-proxy</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
	启动状态查询
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>systemctl status kube-proxy
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>### 8.13.4.部署网络组件(Calico)
	Calico简介
	Calico是一个纯三层的数据中心网络方案，是目前Kubernetes主流的网络方案。
	
	切换目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cd /root/TLS/k8s</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
	获取Calico.yaml文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>wget http://docs.projectcalico.org/v3.8/manifests/calico.yaml</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	备份calico.yaml并修改calico.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>cp calico.yaml calico.yaml.bak &amp;&amp;
sed -i 's/192.168.0.0/10.244.0.0/g' calico.yaml</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
	查询修改结果
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>grep &quot;IPV4POOL_CIDR&quot; calico.yaml  -A 1 <br>
- name: CALICO_IPV4POOL_CIDR	\</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	正常会显示线面值
	value: "10.244.0.0/16"

	部署Calico
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>kubectl apply -f calico.yaml</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	等待8分钟左右后查看Calico的Pod运行状态（正常是STATUS是Running）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>kubectl get pods -n kube-system</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	[root@binary-k8s-master1 k8s]# kubectl get pods -n kube-system
	NAME                                      READY   STATUS    RESTARTS   AGE
	calico-kube-controllers-bcc6f659f-r28g7   1/1     Running   0          18m
	calico-node-dkjn6                         1/1     Running   6          18m
	
	注意事项
	calico部署很慢，不过不用等8分钟，执行kubectl apply命令后稍等一会儿就可以通过kubectl get nodes
	查看节点状态了

	查看集群节点（正常是STATUS是Ready）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>kubectl get nodes</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	[root@binary-k8s-master1 k8s]# kubectl get nodes
	NAME          		  STATUS   ROLES    AGE   VERSION
	binary-k8s-master1    Ready    &lt;none>   34m   v1.20.0

### 8.13.5.授权apiserver访问kubelet
	应用场景：如kubectl logs
	
	创建配置文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cat &gt; apiserver-to-kubelet-rbac.yaml &lt;&lt; EOF
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
annotations:
rbac.authorization.kubernetes.io/autoupdate: &quot;true&quot;
labels:
kubernetes.io/bootstrapping: rbac-defaults
name: system:kube-apiserver-to-kubelet
rules:</p>
<ul>
<li>apiGroups:
<ul>
<li>&quot;&quot;
resources:</li>
<li>nodes/proxy</li>
<li>nodes/stats</li>
<li>nodes/log</li>
<li>nodes/spec</li>
<li>nodes/metrics</li>
<li>pods/log
verbs:</li>
<li>&quot;*&quot;</li>
</ul>
</li>
</ul>
<hr>
<p>apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
name: system:kube-apiserver
namespace: &quot;&quot;
roleRef:
apiGroup: rbac.authorization.k8s.io
kind: ClusterRole
name: system:kube-apiserver-to-kubelet
subjects:</p>
<ul>
<li>apiGroup: rbac.authorization.k8s.io
kind: User
name: kubernetes
EOF</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	应用配置文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>kubectl apply -f apiserver-to-kubelet-rbac.yaml</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
## 8.14.增加Worker Node

### 8.14.1.在所有Worker Node创建工作目录并拷贝二进制文件
	在所有Worker Node1和Worker Node2中创建工作目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mkdir -p /opt/kubernetes/bin &amp;&amp;
mkdir -p /opt/kubernetes/cfg &amp;&amp;
mkdir -p /opt/kubernetes/ssl &amp;&amp;
mkdir -p /opt/kubernetes/logs</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
### 8.14.2拷贝Master Node1上部署好的文件到Worker Node
	进入Master Node1，执行下面操作，镜相关文件拷贝到Worker Node1和Worker Node2
	拷贝到Worker Node1（192.168.0.10）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>scp -r /opt/kubernetes root@192.168.0.10:/opt/ &amp;&amp;
scp -r /usr/lib/systemd/system/{kubelet,kube-proxy}.service <br>
root@192.168.0.10:/usr/lib/systemd/system &amp;&amp;
scp -r /opt/kubernetes/ssl/ca.pem root@192.168.0.10:/opt/kubernetes/ssl/</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	拷贝到Worker Node2（192.168.0.11）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>scp -r /opt/kubernetes root@192.168.0.11:/opt/ &amp;&amp;
scp -r /usr/lib/systemd/system/{kubelet,kube-proxy}.service <br>
root@192.168.0.11:/usr/lib/systemd/system &amp;&amp;
scp -r /opt/kubernetes/ssl/ca.pem root@192.168.0.11:/opt/kubernetes/ssl/</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
### 8.14.3.删除所有Worker Node中kubelet证书和kubeconfig文件
	Worker Node1节点（192.168.0.10）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>rm -f /opt/kubernetes/cfg/kubelet.kubeconfig &amp;&amp;
rm -f /opt/kubernetes/ssl/kubelet*</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	Worker Node2节点（192.168.0.11）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>rm -f /opt/kubernetes/cfg/kubelet.kubeconfig &amp;&amp;
rm -f /opt/kubernetes/ssl/kubelet*</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	说明:
	这几个文件是证书申请审批后自动生成的,每个Node不同,必须删除

### 8.14.4. 修改Worker Node1和Worker Node2主机名
	Worker Node1（192.168.0.10）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>sed -i 's/--hostname-override=binary-k8s-master1/--hostname-override=binary-k8s-worker1/g' <br>
/opt/kubernetes/cfg/kubelet.conf #修改--hostname-override的值为binary-k8s-worker1
sed -i 's/hostnameOverride: binary-k8s-master1/hostnameOverride: binary-k8s-worker1/g' <br>
/opt/kubernetes/cfg/kube-proxy-config.yml #修改hostnameOverride的值binary-k8s-worker1</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	
	Worker Node2（192.168.0.11）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>sed -i 's/--hostname-override=binary-k8s-master1/--hostname-override=binary-k8s-worker2/g' <br>
/opt/kubernetes/cfg/kubelet.conf #修改--hostname-override的值为binary-k8s-worker2
sed -i 's/hostnameOverride: binary-k8s-master1/hostnameOverride: binary-k8s-worker2/g' <br>
/opt/kubernetes/cfg/kube-proxy-config.yml #修改hostnameOverride的值binary-k8s-worker2</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
### 8.14.5.启动Worker Node1和Worker Node2中kubelet并设置开机自启
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>systemctl daemon-reload &amp;&amp;
systemctl start kubelet kube-proxy &amp;&amp;
systemctl enable kubelet kube-proxy</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
	查看启动状态
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>systemctl status kubelet</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div><p>systemctl status kube-proxy</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	启动故障解决
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>cat /var/log/messages|grep kube-proxy</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
### 8.14.6.在Master1上同意新的Node kubelet证书申请
	查看证书请求
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>kubectl get csr</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	[root@binary-k8s-master1 k8s]# kubectl get csr
	
	NAME                                                    ... CONDITION         ...
	node-csr-IiJqGnj7y-9pMOIaYb9rpYxtIaEuACOITLI-WpfdpDI    ... Approved,Issued   ...
	node-csr-TlSHYrzacOBQbJyQcfVwuArXPKRbjcoMESZykQ3Qr0w   ... Pending            ...
	node-csr-vb-rAPL-grn0NxFGBs-_5pScCDkICmvHRnbhn_bRdsc    ... Pending           ...
	
	手动批准证书签名请求
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>kubectl certificate approve node-csr-TlSHYrzacOBQbJyQcfVwuArXPKRbjcoMESZykQ3Qr0w</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div><p>kubectl certificate approve node-csr-vb-rAPL-grn0NxFGBs-_5pScCDkICmvHRnbhn_bRdsc</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
	查看所有Node状态(要稍等会才会变成ready,会下载一些初始化镜像)
	注意事项
	刚加入Worker Node1和Worker Node2时使用kubectl get nodes查看可能会出现Worker Node NotReady状态，等
	待大概三分钟左右再使用kubectl get nodes就可以看到所有节点状态都已经就绪了
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>kubectl get nodes</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	[root@binary-k8s-master1 ~]# kubectl get nodes
	NAME                  STATUS   ROLES    AGE   VERSION
	binary-k8s-master1    Ready    &lt;none>   79s   v1.20.0
	binary-k8s-worker1    Ready    &lt;none>   26m   v1.20.0
	binary-k8s-worker2    Ready    &lt;none>   26m   v1.20.0
	
	补充命令
	删除多余的csr
	kubectl delete csr node-csr-Rd_0WEaOFSkRT7geRKfz__I1v6E-CQfJpYwMTDEK-mw

### 8.14.7.在Master1上部署kubernetes-dashboard
	切换目录并在该目录中下载kubernetes-dashboard安装所需要的yaml文件	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cd /opt/k8s/package &amp;&amp;
wget https://raw.githubusercontent.com/kubernetes/dashboard/v2.4.0/aio/deploy/recommended.yaml</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
	修改配置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>vim recommended.yaml</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	给名称为kubernetes-dashboard的Service中添加type: NodePort参数，大概在245行左右
	kind: Service
	name: kubernetes-dashboard
	spec:
	  type: NodePort
	  
	安装kubernetes-dashboard
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>kubectl apply -f recommended.yaml</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	查看部署情况
	注意事项，等待大约2分钟使用kubectl get pods,svc -n kubernetes-dashboard才能看到所有pods,svc状态正常
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>kubectl get pods,svc -n kubernetes-dashboard</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	[root@binary-k8s-master1 package]# kubectl get pods,svc -n kubernetes-dashboard
	NAME                                             READY   STATUS    RESTARTS   AGE
	pod/dashboard-metrics-scraper-5b8896d7fc-jj8vp   1/1     Running   0          60m
	pod/kubernetes-dashboard-897c7599f-pdk9g         1/1     Running   0          60m
	
	NAME                                TYPE        CLUSTER-IP  	 PORT(S)         AGE
	service/dashboard-metrics-scraper   ClusterIP   10.0.0.254       8000/TCP        60m
	service/kubernetes-dashboard        NodePort    10.0.0.173       443:30441/TCP   60m
	
	创建dashboard-admin使用的service account并绑定默认cluster-admin管理员集群角色
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>kubectl create serviceaccount dashboard-admin -n kube-system
kubectl create clusterrolebinding dashboard-admin <br>
--clusterrole=cluster-admin --serviceaccount=kube-system:dashboard-admin
kubectl describe secrets -n kube-system <br>
$(kubectl -n kube-system get secret | awk '/dashboard-admin/{print $1}')</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	查询token
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>kubectl describe secrets -n kube-system <br>
$(kubectl -n kube-system get secret | awk '/dashboard-admin/{print $1}')</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	访问kubernetes-dashboard,输入刚才获得的token登录kubernetes-dashboard
	https://192.168.0.9:30441/
	https://192.168.0.10:30441/
	https://192.168.0.11:30441/

### 8.14.8.在Master1上部署CoreDNS
	介绍
	CoreDNS主要用于集群内部Service名称解析。
	
	从kubernetes源码包中获取coredns.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cd /opt/k8s/package/kubernetes &amp;&amp;
mkdir  kubernetes-src &amp;&amp;
tar fx kubernetes-src.tar.gz -C ./kubernetes-src &amp;&amp;
cd kubernetes-src/cluster/addons/dns/coredns/ &amp;&amp;
cp coredns.yaml.base coredns.yaml</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	修改coredns.yaml配置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>CLUSTER_DNS_DOMAIN=&quot;cluster.local&quot;
CLUSTER_DNS_SVC_IP=&quot;10.0.0.2&quot;
CLUSTER_DNS_LIMIT_MEMORY=&quot;170Mi&quot;</p>
<p>sed -i -e &quot;s@<strong>DNS__DOMAIN</strong>@${CLUSTER_DNS_DOMAIN}@&quot; <br>
-e &quot;s@<strong>DNS__SERVER</strong>@${CLUSTER_DNS_SVC_IP}@&quot; <br>
-e &quot;s@<strong>DNS__MEMORY__LIMIT</strong>@${CLUSTER_DNS_LIMIT_MEMORY}@&quot; <br>
coredns.yaml</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	注意：CLUSTER_DNS_DOMAIN和CLUSTER_DNS_SVC_IP的值要和在node节点的kubelet-config.yaml/kubelet-
	config.yal中clusterDNS和clusterDomain的值保持一致
	
	修改coredns.yaml中coredns镜像仓库地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vim coredns.yaml</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	将135行k8s.gcr.io/coredns:1.6.7修改为registry.aliyuncs.com/google_containers/coredns:v1.8.6
	
	创建coredns使用的service account并绑定默认cluster-admin管理员集群角色
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>kubectl create serviceaccount coredns -n kube-system
kubectl create clusterrolebinding coredns <br>
--clusterrole=cluster-admin --serviceaccount=kube-system:coredns</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
	部署coredns
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>kubectl apply -f coredns.yaml</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	查看coredns的pod是否正常
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>kubectl get pods -n kube-system</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	[root@k8s-master1 yaml]# kubectl get pods -n kube-system
	NAME                                      READY   STATUS    RESTARTS   AGE
	calico-kube-controllers-97769f7c7-zcz5d   1/1     Running   1          47h
	calico-node-5tnll                         1/1     Running   1          47h
	calico-node-m8sdg                         1/1     Running   0          42m
	calico-node-pqvk9                         1/1     Running   0          56m
	coredns-6cc56c94bd-5hvfb                  1/1     Running   0          37s

	启动故障排查
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>kubectl logs PODNAME -n kube-system</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
	给coredns增加副本，增强高可用性（也可以修改配置文件）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>kubectl scale deployment coredns --replicas=2 -n kube-system</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
	创建 kubernetes用户
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>kubectl create clusterrolebinding kube-apiserver:kubelet-apis <br>
--clusterrole=system:kubelet-api-admin --user kubernetes</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
	使用busybox测试解析是否正常

	部署busybox
	编写busybox编排文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cat &gt; busybox.yaml &lt;&lt; EOF
apiVersion: v1
kind: Pod
metadata:
name: busybox
namespace: default
spec:
containers:</p>
<ul>
<li>name: busybox
image: busybox:1.28.4
command:
<ul>
<li>sleep</li>
<li>&quot;3600&quot;
imagePullPolicy: IfNotPresent
restartPolicy: Always
EOF</li>
</ul>
</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	创建busybox
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>kubectl create -f busybox.yaml</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	进入busybox中
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>kubectl exec -it busybox -- sh</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
	使用busybox测试coredns是否部署成功
	If you don't see a command prompt, try pressing enter.
	/ # ns
	nsenter   nslookup
	/ # nslookup kubernetes
	Server:    10.0.0.2
	Address 1: 10.0.0.2 kube-dns.kube-system.svc.cluster.local
	
	查看coredns一共部署了几个副本
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>kubectl get deployments -n kube-system</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	[root@binary-k8s-master2 ~]# kubectl get deployments -n kube-system
	NAME                      READY   UP-TO-DATE   AVAILABLE   AGE
	calico-kube-controllers   1/1     1            1           168m
	coredns                   2/2     2            2           147m

## 8.15.增加Master2节点
:::danger 特别特别注意
一定要先执行最开始的8.1章节公共步骤，如关闭防火墙等操作，否则是成功添加Master2节点的
:::

### 8.15.1.Kubernetes集群架构简介	
	Kubernetes作为容器集群系统，通过健康检查+重启策略实现了Pod故障自我修复能力，通过调度算法
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
角色 | IP | 组件
:--- | :--- | :---:
binary-k8s-master1 | 192.168.0.9  | etcd &lt;br> docker &lt;br> kube-apiserver kube-controller-manager kube-scheduler &lt;br> kubelet kube-proxy &lt;br> nginx keepalived
binary-k8s-master2 | 192.168.0.12 | etcd &lt;br> docker &lt;br> kube-apiserver kube-controller-manager kube-scheduler &lt;br> kubelet kube-proxy &lt;br> nginx keepalived
binary-k8s-worker1 | 192.168.0.10 | etcd &lt;br> docker &lt;br> kubelet kube-proxy
binary-k8s-worker2 | 192.168.0.11 | etcd &lt;br> docker &lt;br> kubelet kube-proxy
负载均衡器(虚拟IP)  | 192.168.0.88 |

:::tip 特别说明
现在需要再增加一台新服务器，作为Master2 Node，IP是192.168.0.12。Master Node2 与已部署的
Master Node1所有操作一致。所以我们只需将Master1所有K8s文件拷贝过来，再修改下服务器IP和主机名
启动即可。
:::

### 8.15.2.给Master Node2安装Docker

	进入Master Node1，将docker安装文件拷贝到Master Node2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>scp /usr/bin/docker* root@192.168.0.12:/usr/bin &amp;&amp;
scp /usr/bin/runc root@192.168.0.12:/usr/bin &amp;&amp;
scp /usr/bin/containerd* root@192.168.0.12:/usr/bin &amp;&amp;
scp /usr/lib/systemd/system/docker.service <br>
root@192.168.0.12:/usr/lib/systemd/system &amp;&amp;
scp -r /etc/docker root@192.168.0.12:/etc</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	启动Mater Node2上的Docker并设置开机自启
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>systemctl daemon-reload &amp;&amp; systemctl start docker &amp;&amp; systemctl enable docker</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	查看启动状态
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>systemctl status docker
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
### 8.15.5.给Master Node2节点拷贝所有需要的证书
	在Master Node2上创建etcd证书目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mkdir -p /opt/etcd/ssl</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	在Master1上拷贝Master1上所有k8s文件和etcd证书到Master2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>scp -r /opt/kubernetes root@192.168.0.12:/opt &amp;&amp;
scp -r /opt/etcd/ssl root@192.168.0.12:/opt/etcd &amp;&amp;
scp /usr/lib/systemd/system/kube* <br>
root@192.168.0.12:/usr/lib/systemd/system &amp;&amp;
scp /usr/bin/kubectl  root@192.168.0.12:/usr/bin &amp;&amp;
scp -r ~/.kube root@192.168.0.12:~</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
	在Master Node2上删除旧的证书（删除kubelet和kubeconfig文件）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>rm -f /opt/kubernetes/cfg/kubelet.kubeconfig &amp;&amp;
rm -f /opt/kubernetes/ssl/kubelet*</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
	修改Master2修改配置文件和主机名
	修改apiserver、kubelet和kube-proxy配置文件为本地IP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vi /opt/kubernetes/cfg/kube-apiserver.conf</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	...
	--bind-address=192.168.0.12 \
	--advertise-address=192.168.0.12 \
	...
	
	修改kube-controller-manager配置文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vi /opt/kubernetes/cfg/kube-controller-manager.kubeconfig</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	server: https://192.168.0.12:6443
	
	修改kube-scheduler配置文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vi /opt/kubernetes/cfg/kube-scheduler.kubeconfig</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	server: https://192.168.0.12:6443
	修改kubelet配置文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>vi /opt/kubernetes/cfg/kubelet.conf</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	--hostname-override=binary-k8s-master2
	
	修改kube-proxy配置文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vi /opt/kubernetes/cfg/kube-proxy-config.yml</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	hostnameOverride: binary-k8s-master2

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>vi ~/.kube/config</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	...
	server: https://192.168.0.12:6443

### 8.15.6.启动Master所有服务并设置开机自启
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>systemctl daemon-reload &amp;&amp;
systemctl start kube-apiserver &amp;&amp;
systemctl start kube-controller-manager &amp;&amp;
systemctl start kube-scheduler &amp;&amp;
systemctl start kubelet kube-proxy &amp;&amp;
systemctl enable kube-apiserver &amp;&amp;
systemctl enable kube-controller-manager &amp;&amp;
systemctl enable kube-scheduler &amp;&amp;
systemctl enable kubelet &amp;&amp;
systemctl enable kube-proxy</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
### 8.15.7.在Master查看集群组件状态
	注意：如果上面操作无误则这一步就可以查看到集群中组件的运行状态了
	
	查看组件状态
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>kubectl get cs</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	[root@localhost ~]# kubectl get cs
	Warning: v1 ComponentStatus is deprecated in v1.19+
	NAME                 STATUS    MESSAGE             ERROR
	controller-manager   Healthy   ok 
	scheduler            Healthy   ok   
	etcd-2               Healthy   {"health":"true"}
	etcd-1               Healthy   {"health":"true"}
	etcd-0               Healthy   {"health":"true"}

### 8.15.8.审批所有Worker  Node上的kubelet证书申请
	查看证书申请
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>kubectl get csr</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	[root@localhost ~]# kubectl get csr
	NAME                                                   ... CONDITION ...
	node-csr-Pkp1fPd9NZApJVRqRFlIIjskZ_gL_qDmcSWGvSuN-VQ   ... Pending	 ...
	
	同意证书申请
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>kubectl certificate approve node-csr-Pkp1fPd9NZApJVRqRFlIIjskZ_gL_qDmcSWGvSuN-VQ</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	再次查看证书申请
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>kubectl get csr</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	[root@localhost ~]# kubectl get csr
	NAME                                                  ... CONDITION 	  ...
	node-csr-Pkp1fPd9NZApJVRqRFlIIjskZ_gL_qDmcSWGvSuN-VQ  ... Approved,Issued ...	
	
	查看节点加入状态没等到所有pods状态都已经变为Running，执行下一步操作
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>kubectl get pods -n kube-system</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	[root@binary-k8s-master1 ~]# kubectl get pods -n kube-system
	NAME                                      READY   STATUS     RESTARTS   AGE
	calico-kube-controllers-bcc6f659f-7mf9n   1/1     Running    1          141m
	calico-node-768sf                         1/1     Running    0          97m
	calico-node-crhh4                         0/1     Init:2/3   0          2m7s
	calico-node-hwbm9                         1/1     Running    0          98m
	calico-node-vl4db                         1/1     Running    1          141m
	coredns-7c878fc47b-n9nfd                  1/1     Running    0          75m
	coredns-7c878fc47b-sxvz2                  1/1     Running    0          76m

	查看Node
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>kubectl get nodes</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	binary-k8s-master1   Ready    &lt;none>   153m   v1.20.0
	binary-k8s-master2   Ready    &lt;none>   17m    v1.20.0
	binary-k8s-worker1   Ready    &lt;none>   142m   v1.20.0
	binary-k8s-worker2   Ready    &lt;none>   141m   v1.20.0
	
	至此一个双Master节点k8s集群已经部署完毕，再添加新的Master节点步骤和上面的是相同的

## 8.16.部署Nginx+Keepalived高可用负载均衡器

### 8.16.1.Nginx和Keepalived简介
	Nginx是一个主流Web服务和反向代理服务器，这里用四层实现对apiserver实现负载均衡。Keepalived是一个主流高可
	用软件，基于VIP绑定实现服务器双机热备，在上述拓扑中，Keepalived主要根据Nginx运行状态判断是否需要故障转移
	（漂移VIP），例如当Nginx主节点挂掉，VIP会自动绑定在Nginx备节点，从而保证VIP一直可用，实现Nginx高可用。
	如果你是在公有云上，一般都不支持keepalived，那么你可以直接用它们的负载均衡器产品，直接负载均衡多台Master 
	kube-apiserver，架构与上面一样。

### 8.16.2.在两台Master Node上安装软件
	下载nginx和keepalived
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>yum install epel-release -y &amp;&amp;
yum install nginx keepalived -y</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	Nginx配置文件（Master Node1和Master Node2相同）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>cat &gt; /etc/nginx/nginx.conf &lt;&lt; &quot;EOF&quot;
user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log;
pid /run/nginx.pid;</p>
<p>include /usr/share/nginx/modules/*.conf;</p>
<p>events {
worker_connections 1024;
}</p>
<p>stream {</p>
<pre><code>log_format main '$remote_addr $upstream_addr - [$time_local] $status $upstream_bytes_sent';

access_log  /var/log/nginx/k8s-access.log  main;

upstream k8s-apiserver {
   server 192.168.0.9:6443;   # Master1 APISERVER IP:PORT
   server 192.168.0.12:6443;   # Master2 APISERVER IP:PORT
}

server {
   listen 16443; # 由于nginx与master节点复用，这个监听端口不能是6443，否则会冲突
   proxy_pass k8s-apiserver;
}
</code></pre>
<p>}</p>
<p>http {
log_format  main  '$remote_addr - $remote_user [$time_local] &quot;$request&quot; '
'$status $body_bytes_sent &quot;$http_referer&quot; '
'&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;';</p>
<pre><code>access_log  /var/log/nginx/access.log  main;

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
</code></pre>
<p>}
EOF</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	Master Node1上的keepalived配置文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>cat &gt; /etc/keepalived/keepalived.conf &lt;&lt; EOF
global_defs {
notification_email {
acassen@firewall.loc
failover@firewall.loc
sysadmin@firewall.loc
}
notification_email_from Alexandre.Cassen@firewall.loc<br>
smtp_server 127.0.0.1
smtp_connect_timeout 30
router_id NGINX_MASTER
}</p>
<p>vrrp_script check_nginx {
script &quot;/etc/keepalived/check_nginx.sh&quot;
}</p>
<p>vrrp_instance VI_1 {
state MASTER
interface ens33  # 修改为实际网卡名
virtual_router_id 51 # VRRP 路由 ID实例，每个实例是唯一的
priority 100    # 优先级，备服务器设置 90
advert_int 1    # 指定VRRP 心跳包通告间隔时间，默认1秒
authentication {
auth_type PASS<br>
auth_pass 1111
}<br>
# 虚拟IP
virtual_ipaddress {
192.168.0.88/24
}
track_script {
check_nginx
}
}
EOF</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>​	
​	Master Node2的keepalived配置文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>cat &gt; /etc/keepalived/keepalived.conf &lt;&lt; EOF
global_defs {
notification_email {
acassen@firewall.loc
failover@firewall.loc
sysadmin@firewall.loc
}
notification_email_from Alexandre.Cassen@firewall.loc<br>
smtp_server 127.0.0.1
smtp_connect_timeout 30
router_id NGINX_BACKUP
}</p>
<p>vrrp_script check_nginx {
script &quot;/etc/keepalived/check_nginx.sh&quot;
}</p>
<p>vrrp_instance VI_1 {
state BACKUP
interface ens33
virtual_router_id 51 # VRRP 路由 ID实例，每个实例是唯一的
priority 90
advert_int 1
authentication {
auth_type PASS<br>
auth_pass 1111
}<br>
virtual_ipaddress {
192.168.0.88/24
}
track_script {
check_nginx
}
}
EOF</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	配置说明
	​vrrp_script：指定检查nginx工作状态脚本（根据nginx状态判断是否故障转移）
	​virtual_ipaddress：虚拟IP（VIP）
	​
	​准备上述配置文件中检查nginx运行状态的脚本（Master Node1和Master Node2相同）

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cat &gt; /etc/keepalived/check_nginx.sh  &lt;&lt; &quot;EOF&quot;
#!/bin/bash
count=$(ss -antp |grep 16443 |egrep -cv &quot;grep|$$&quot;)</p>
<p>if [ &quot;$count&quot; -eq 0 ];then
exit 1
else
exit 0
fi
EOF</p>
<p>chmod +x /etc/keepalived/check_nginx.sh</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
​	配置说明
​	keepalived根据脚本返回状态码（0为工作正常，非0不正常）判断是否故障转移。

### 8.16.3.Nginx增加Steam模块
#### 8.16.3.1.查看Nginx版本模块
	nginx -V
	注意：如果已经安装 --with-stream模块,后面的步骤可以跳过
#### 8.16.3.2.Master1和Master2安装Stream模块	
	备份Master Node1和Master Node2上原来的Nginx文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p ,.bak="">mv /usr/sbin/nginx /usr/sbin/nginx.bak &amp;&amp;
cp -r /etc/nginx</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
	切换目录并在该目录中下载nginx（注意这里下载的nginx版本要和之前nginx -v查看的版本保持一致，这里我们之前已经下载
	好了，存放在Master Node1上，直接使用就可以了）

	在Master Node1上切换目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cd /opt/k8s/package/</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	Master Node1编译环境准备
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>yum -y install libxml2 libxml2-dev libxslt-devel
yum -y install gd-devel
yum -y install perl-devel perl-ExtUtils-Embed
yum -y install GeoIP GeoIP-devel GeoIP-data
yum -y install pcre-devel
yum -y install openssl openssl-devel
yum -y install gcc make</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	编译nginx，加上本次需新增的模块: --with-stream
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>tar -xf nginx-1.20.1.tar.gz
cd nginx-1.20.1/
./configure --prefix=/usr/share/nginx --sbin-path=/usr/sbin/nginx <br>
--modules-path=/usr/lib64/nginx/modules --conf-path=/etc/nginx/nginx.conf  --with-stream
make</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	说明:
	make完成后不要继续输入“make install”，以免现在的nginx出现问题
	以上完成后，会在objs目录下生成一个nginx文件，先验证
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>./objs/nginx -t</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
	[root@binary-k8s-master1 nginx-1.20.1]# ./objs/nginx -t
	nginx: [alert] could not open error log file: open() "/usr/share/nginx/logs/error.log" failed (2: No such file or directory)
	nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
	nginx: configuration file /etc/nginx/nginx.conf test is successful
	
	替换nginx到Master1/Master2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cp ./objs/nginx /usr/sbin/ &amp;&amp;
scp objs/nginx root@192.168.0.12:/usr/sbin/</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
	修改nginx服务文件（Master Node1和Master Node2）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>rm -rf /usr/lib/systemd/system/nginx.service &amp;&amp;
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
EOF</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
### 8.16.4.启动nginx、keepalived并设置开机自启(master1/master2)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>systemctl daemon-reload &amp;&amp;
systemctl start nginx keepalived &amp;&amp;
systemctl enable nginx keepalived</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>### 8.16.5.查看keepalived工作状态
	查看Master1网卡详细信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>ip addr</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	[root@binary-k8s-master1 ~]# ip addr
	...
	2: ens33: &lt;BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast 
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ip addr</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	[root@binary-k8s-master1 ~]# ip addr
	...
	2: ens33: &lt;BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state 
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

### 8.16.6.Nginx+keepalived高可用测试

	在主节点Master Node1节点执行关闭nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>pkill nginx</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	查看虚拟IP是否漂移到备节点服务器（Master Node2）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>ip addr</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	[root@binary-k8s-master1 ~]# ip addr
	...
	2: ens33: &lt;BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast 
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

### 8.16.7.测试负载均衡器
	找K8s集群中任意一个节点，使用curl查看K8s版本测试，使用VIP访问
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>curl -k https://192.168.0.88:16443/version</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	Master Node1机器
	[root@binary-k8s-master1 ~]# curl -k https://192.168.0.88:16443/version
	{
	  "major": "1",
	  "minor": "20",
	  "gitVersion": "v1.20.10",
	  "gitCommit": "8152330a2b6ca3621196e62966ef761b8f5a61bb",
	  "gitTreeState": "clean",
	  "buildDate": "2021-08-11T18:00:37Z",
	  "goVersion": "go1.15.15",
	  "compiler": "gc",
	  "platform": "linux/amd64"
	}
	
	Master Node2机器
	[root@binary-k8s-master2 ~]# curl -k https://192.168.0.88:16443/version
	{
	  "major": "1",
	  "minor": "20",
	  "gitVersion": "v1.20.10",
	  "gitCommit": "8152330a2b6ca3621196e62966ef761b8f5a61bb",
	  "gitTreeState": "clean",
	  "buildDate": "2021-08-11T18:00:37Z",
	  "goVersion": "go1.15.15",
	  "compiler": "gc",
	  "platform": "linux/amd64"
	}
	
	Worker Node1机器
	[root@binary-k8s-worker1 ~]# curl -k https://192.168.0.88:16443/version
	{
	  "major": "1",
	  "minor": "20",
	  "gitVersion": "v1.20.10",
	  "gitCommit": "8152330a2b6ca3621196e62966ef761b8f5a61bb",
	  "gitTreeState": "clean",
	  "buildDate": "2021-08-11T18:00:37Z",
	  "goVersion": "go1.15.15",
	  "compiler": "gc",
	  "platform": "linux/amd64"
	}
	
	Worker Node2机器
	[root@binary-k8s-worker2 ~]# curl -k https://192.168.0.88:16443/version
	{
	  "major": "1",
	  "minor": "20",
	  "gitVersion": "v1.20.10",
	  "gitCommit": "8152330a2b6ca3621196e62966ef761b8f5a61bb",
	  "gitTreeState": "clean",
	  "buildDate": "2021-08-11T18:00:37Z",
	  "goVersion": "go1.15.15",
	  "compiler": "gc",
	  "platform": "linux/amd64"
	}
	
	如何确定负载均衡器是否搭建正常
	如果所有节点可以正确获取到K8s版本信息，说明负载均衡器搭建正常。
	该请求数据流程：curl -> vip(nginx) -> apiserver
	
	通过查看Nginx日志也可以看到转发apiserver IP：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>tailf /var/log/nginx/k8s-access.log</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	[root@binary-k8s-master1 ~]# tailf /var/log/nginx/k8s-access.log 
	192.168.242.55 192.168.0.9:6443 - [26/Jul/2022:01:28:51 -0400] 200 428
	192.168.211.128 192.168.0.9:6443 - [26/Jul/2022:01:28:58 -0400] 200 428
	192.168.95.192 192.168.0.12:6443 - [26/Jul/2022:01:30:12 -0400] 200 428
	192.168.63.192 192.168.0.9:6443 - [26/Jul/2022:01:30:14 -0400] 200 428
	192.168.242.55 192.168.0.9:6443 - [26/Jul/2022:01:30:36 -0400] 200 428
	192.168.242.55 192.168.0.12:6443 - [26/Jul/2022:01:30:42 -0400] 200 428

### 8.16.8.修改所有的Worker Node连接LB VIP
	为什么要改为连接LB VIP
	试想下，虽然我们增加了Master2 Node和负载均衡器，但是我们是从单Master架构扩容的，也就是
	说目前所有的Worker Node组件连接都还是Master1 Node，如果不改为连接VIP走负载均衡器，那么
	Master还是单点故障。因此接下来就是要改所有Worker Node（kubectl get node命令查看到的节
	点）组件配置文件，由原来192.168.0.9修改为192.168.242.55（VIP）。
	
	在所有Worker Node执行
	注意事项
	这里除了Worker Node1和Worker Node2，Master Node1和Master Node2这两个节点也充当了Worker Node，所以所有的四个节点
	上都要执行下面的命令
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>sed -i 's#192.168.0.9:6443#192.168.0.88:16443#' /opt/kubernetes/cfg/* &amp;&amp;
systemctl restart kubelet kube-proxy</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	检查节点状态
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>kubectl get nodes</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	[root@binary-k8s-master1 cfg]# kubectl get nodes
	NAME                 STATUS   ROLES    AGE     VERSION
	binary-k8s-master1   Ready    &lt;none>   5h13m   v1.20.0
	binary-k8s-master2   Ready    &lt;none>   177m    v1.20.0
	binary-k8s-worker1    Ready    &lt;none>   5h1m    v1.20.0
	binary-k8s-worker2    Ready    &lt;none>   5h1m    v1.20.0
	
	为了确保配置成功，重启集群中所有机器，再次在Master Node1和Master Node2中查看节点状态，如一切部署无误结果如下所示
	[root@binary-k8s-master1 cfg]# kubectl get nodes
	NAME                 STATUS   ROLES    AGE     VERSION
	binary-k8s-master1   Ready    &lt;none>   5h13m   v1.20.0
	binary-k8s-master2   Ready    &lt;none>   177m    v1.20.0
	binary-k8s-worker1    Ready    &lt;none>   5h1m    v1.20.0
	binary-k8s-worker2    Ready    &lt;none>   5h1m    v1.20.0

	至此,一套高可用的k8s二进制可用集群就部署完成了~
	^_^

## 8.17.部署常见问题
### 8.17.1系统断电后,某个etcd节点无法启动
	报错信息
	publish error: etcdserver: request timed out
	
	解决方法(如果没有重要数据,或者刚进行完初始化)
	检查日志发现并没有特别明显的错误，根据经验来讲，etcd 节点坏掉一个其实对集群没有大的影响，
	这时集群已经可以正常使用了，但是这个坏掉的 etcd 节点并没有启动
	
	#进入 etcd 的数据存储目录进行备份 备份原有数据：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cd /var/lib/etcd/default.etcd/member/ &amp;&amp;
cp * /data/bak/</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	#删除这个目录下的所有数据文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>rm -rf /var/lib/etcd/default.etcd/member/*</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	#停止另外两台 etcd 节点，因为 etcd 节点启动时需要所有节点一起启动，启动成功后即可使用。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>systemctl stop etcd &amp;&amp;
systemctl restart etcd</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>### 8.17.2 The connection to the server localhost:8080 was refused - did you specify the right host or port?
	8.10.使用kubectl查看集群状态章节没有正确执行会报这个错


## 8.18.部署测试程序
	创建guestbook
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>kubectl create deployment guestbook --image=ibmcom/guestbook:v1</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	查询pod运行状态，状态应该显示为Running表示pod运行成功
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>kubectl get pods</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	对外暴露端口
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>kubectl expose deployment guestbook --type=NodePort --port=3000</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	查询端口映射
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>kubectl get service guestbook</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	NAME        TYPE       CLUSTER-IP     EXTERNAL-IP   PORT(S)          AGE
	guestbook   NodePort   10.10.10.253   &lt;none>        3000:31208/TCP   1m
	
	访问服务（主节点和两个工作节点都可访问到这个服务）
	http://192.168.0.6:31208
	http://192.168.0.7:31208
	http://192.168.0.8:31208
 
		 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
