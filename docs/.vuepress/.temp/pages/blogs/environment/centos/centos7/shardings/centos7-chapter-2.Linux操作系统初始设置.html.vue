<template><div><h1 id="_2-linux操作系统初始设置" tabindex="-1"><a class="header-anchor" href="#_2-linux操作系统初始设置" aria-hidden="true">#</a> 2.Linux操作系统初始设置</h1>
<h2 id="_2-1-章节内容概述" tabindex="-1"><a class="header-anchor" href="#_2-1-章节内容概述" aria-hidden="true">#</a> 2.1.章节内容概述</h2>
<pre><code>本章节涉及主要内容有：
 2.1.章节内容概述
 2.2.章节内容大纲
 2.3.配置静态IP地址
 2.4.解决远程连接无法连接的问题
 2.5.设置系统环境变量
 2.6.安装curl
 2.7.配置yml源
 2.7.同步时间
 2.8.安装常用基础系统软件
具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看。
</code></pre>
<h2 id="_2-2-章节内容大纲" tabindex="-1"><a class="header-anchor" href="#_2-2-章节内容大纲" aria-hidden="true">#</a> <a href="/enhance/markmap/environment/centos/centos7/chapter/centos7-outline5-chapter2.html" target="_blank">2.2.章节内容大纲</a></h2>
<Markmap localtion="/enhance/markmap/environment/centos/centos7/chapter/centos7-outline5-chapter2.html" height="500rem"/>
<h2 id="_2-3-配置静态ip地址" tabindex="-1"><a class="header-anchor" href="#_2-3-配置静态ip地址" aria-hidden="true">#</a> 2.3.配置静态IP地址</h2>
<pre><code>修改网络配置
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>vi /etc/sysconfig/network-scripts/ifcfg-ens32(最后一个为网卡名称)
</code></pre></div><pre><code>修改后内容如下
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
<div class="language-text ext-text"><pre v-pre class="language-text"><code>systemctl restart network
</code></pre></div><h2 id="_2-4-解决远程连接无法连接的问题" tabindex="-1"><a class="header-anchor" href="#_2-4-解决远程连接无法连接的问题" aria-hidden="true">#</a> 2.4.解决远程连接无法连接的问题</h2>
<pre><code>修改sshd配置文件
说明：sshd_config里面的UseDNS=no【原本为yes】
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>vim /etc/ssh/sshd_config
</code></pre></div><pre><code>重启ssh服务
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>systemctl restart sshd.service
</code></pre></div><h2 id="_2-5-设置系统环境变量" tabindex="-1"><a class="header-anchor" href="#_2-5-设置系统环境变量" aria-hidden="true">#</a> 2.5.设置系统环境变量</h2>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>echo "export LC_ALL=en_US.UTF-8"  >>  /etc/profile &amp;&amp;
source /etc/profile
</code></pre></div><h2 id="_2-6-安装curl" tabindex="-1"><a class="header-anchor" href="#_2-6-安装curl" aria-hidden="true">#</a> 2.6.安装curl</h2>
<pre><code>后面的操作需要curl，所以首先安装curl
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>yum -y install curl
</code></pre></div><h2 id="_2-7-配置yml源" tabindex="-1"><a class="header-anchor" href="#_2-7-配置yml源" aria-hidden="true">#</a> 2.7.配置yml源</h2>
<pre><code>下载阿里源，并上传到/opt/software/package
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>curl http://mirrors.aliyun.com/repo/Centos-7.repo -o Centos-7.repo
</code></pre></div><pre><code>进入/etc/yum.repos.d目录中，备份CentOS-Base.repo
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cd /etc/yum.repos.d &amp;&amp; cp CentOS-Base.repo CentOS-Base.repo.bak
</code></pre></div><pre><code>复制/opt/software/package/Centos-7.repo到当前目录并重命名为CentOS-Base.repo
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cp /opt/software/package/Centos-7.repo /CentOS-Base.repo
</code></pre></div><pre><code>生成yum源缓存并更新yum源
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>yum makecache &amp;&amp; yum update
</code></pre></div><p>执行下面的命令设置时区</p>
<h2 id="_2-7-同步时间" tabindex="-1"><a class="header-anchor" href="#_2-7-同步时间" aria-hidden="true">#</a> 2.7.同步时间</h2>
<pre><code>设置硬件时钟调整为与本地时钟一致并设置时区为上海
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>timedatectl set-local-rtc 1 &amp;&amp;
timedatectl set-timezone Asia/Shanghai
</code></pre></div><pre><code>使用ntpdate同步时间
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>yum -y install ntpdate &amp;&amp;
ntpdate -u  pool.ntp.org
</code></pre></div><h2 id="_2-8-安装常用基础系统软件" tabindex="-1"><a class="header-anchor" href="#_2-8-安装常用基础系统软件" aria-hidden="true">#</a> 2.8.安装常用基础系统软件</h2>
<h3 id="_2-8-1-手动安装常用基础软件" tabindex="-1"><a class="header-anchor" href="#_2-8-1-手动安装常用基础软件" aria-hidden="true">#</a> 2.8.1.手动安装常用基础软件</h3>
<pre><code>安装vim
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>yum -y install vim*
</code></pre></div><pre><code>配置vim
set nu         # 设置显示行号
set showmode   #设置在命令行界面最下面显示当前模式等
set ruler      #在右下角显示光标所在的行数等信息
set autoindent #设置每次单击Enter键后，光标移动到下一行时与上一行的起始字符对齐
syntax on      #即设置语法检测，当编辑C或者Shell脚本时，关键字会用特殊颜色显示

wget
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>yum -y install wget
</code></pre></div><pre><code>telnet
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>yum -y install telnet
yum -y install telnet-server
</code></pre></div><h3 id="_2-8-2-使用脚本安装常用软件" tabindex="-1"><a class="header-anchor" href="#_2-8-2-使用脚本安装常用软件" aria-hidden="true">#</a> 2.8.2.使用脚本安装常用软件</h3>
<pre><code>脚本介绍
这个脚本中包含了centos设置yum源并且安装了一些的常用软件，如vim、git、wget、curl、等，会定时更新

安装curl
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>yum -y install curl
</code></pre></div><pre><code>下载脚本
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>curl https://gitee.com/lingwh1995/config-center/raw/master/centos/centos7/centos7-init.sh -o centos7-init.sh
</code></pre></div><pre><code>赋予可运行权限并运行该脚本
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>chmod +x centos7-init.sh &amp;&amp;
./centos7-init.sh
</code></pre></div><ScrollIntoPageView/>
<HideSideBar/>
</div></template>
