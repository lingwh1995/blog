<template><div><h1 id="_1-安装linux操作系统" tabindex="-1"><a class="header-anchor" href="#_1-安装linux操作系统" aria-hidden="true">#</a> 1.安装Linux操作系统</h1>
<h2 id="_1-1-linux重要目录介绍" tabindex="-1"><a class="header-anchor" href="#_1-1-linux重要目录介绍" aria-hidden="true">#</a> 1.1.Linux重要目录介绍</h2>
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
<h2 id="_1-2-centos镜像下载" tabindex="-1"><a class="header-anchor" href="#_1-2-centos镜像下载" aria-hidden="true">#</a> 1.2.Centos镜像下载</h2>
<pre><code>如何是学习环境，建议安装centos mini版镜像，生产环境可以安装完整版
下载地址
</code></pre>
<h2 id="_1-3-安装前vmaware相关设置" tabindex="-1"><a class="header-anchor" href="#_1-3-安装前vmaware相关设置" aria-hidden="true">#</a> 1.3.安装前Vmaware相关设置</h2>
<p><strong>虚拟机联网设置</strong></p>
<pre><code>导航栏-&gt;编辑-&gt;虚拟网络编辑器-&gt;VMnet8NAT模式-&gt;更改设置-&gt;VMnet8NAT模式
	-&gt;更改底部子网:192.168.0.0，子网掩码:255.255.255.0-&gt;NAT设置-&gt;网关IP:192.168.0.2	
</code></pre>
<p><strong>Vmware网卡说明</strong></p>
<pre><code>VMnet0：用于虚拟桥接网络下的虚拟交换机
VMnet1：用于虚拟Host-Only网络下的虚拟交换机
VMnet8：用于虚拟NAT网络下的虚拟交换机
VMware NetworkAdepter VMnet1：Host用于与Host-Only虚拟网络进行通信的虚拟网卡
VMware NetworkAdepter VMnet8：Host用于与NAT虚拟网络进行通信的虚拟网卡
</code></pre>
<h2 id="_1-3-安装时分区大小设置" tabindex="-1"><a class="header-anchor" href="#_1-3-安装时分区大小设置" aria-hidden="true">#</a> 1.3.安装时分区大小设置</h2>
<pre><code>/boot	/*存放系统启动引导文件，建议大小：512mb
/swap 	/*交换区，建议大小：2g
/*主分区，剩下的空间全部分给这个分区
</code></pre>
<h1 id="_2-linux操作系统初始设置" tabindex="-1"><a class="header-anchor" href="#_2-linux操作系统初始设置" aria-hidden="true">#</a> 2.Linux操作系统初始设置</h1>
</div></template>
