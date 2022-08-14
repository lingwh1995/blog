<template><div><h1 id="_4-centos搭建docker" tabindex="-1"><a class="header-anchor" href="#_4-centos搭建docker" aria-hidden="true">#</a> 4.Centos搭建docker</h1>
<h2 id="_4-1-章节内容概述" tabindex="-1"><a class="header-anchor" href="#_4-1-章节内容概述" aria-hidden="true">#</a> 4.1.章节内容概述</h2>
<pre><code>本章节涉及主要内容有：
 4.1.章节内容概述
 4.2.章节内容大纲
 4.3.安装docker
 4.4.docker启动故障解决		
 4.5.docker容器可视化	
 4.6.搭建docke私服
 4.6.1搭建docke官方私服（不带有用户名和密码校验）
 4.6.2搭建docke官方私服（带有用户名和密码校验）	
 4.6.3.搭建harbor私服
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
<h2 id="_4-6-1搭建docke官方私服-不带有用户名和密码校验" tabindex="-1"><a class="header-anchor" href="#_4-6-1搭建docke官方私服-不带有用户名和密码校验" aria-hidden="true">#</a> 4.6.1搭建docke官方私服（不带有用户名和密码校验）</h2>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-6-2搭建docke官方私服-带有用户名和密码校验" tabindex="-1"><a class="header-anchor" href="#_4-6-2搭建docke官方私服-带有用户名和密码校验" aria-hidden="true">#</a> 4.6.2搭建docke官方私服（带有用户名和密码校验）</h2>
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
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	vim /etc/docker/daemon.json
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
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>systemctl daemon-reload &amp;&amp; systemctl restart docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>验证仓库是否搭建成功
访问:http://192.168.0.4:5000/v2/_catalog，看到{&quot;repositories&quot;:[]}表示私有仓库搭建成功且内容为空

彻底删除私服中的镜像:注意这个路径是要看registry具体挂载到linux上什么位置的
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>rm -rf /registry/public/repos/docker/registry/v2/repositories/springcloud-eureka/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-6-3-搭建harbor私服" tabindex="-1"><a class="header-anchor" href="#_4-6-3-搭建harbor私服" aria-hidden="true">#</a> 4.6.3.搭建harbor私服</h2>
<h3 id="_4-6-3-1-harbor简介" tabindex="-1"><a class="header-anchor" href="#_4-6-3-1-harbor简介" aria-hidden="true">#</a> 4.6.3.1.harbor简介</h3>
<pre><code>Harbor是一个用于存储和分发Docker镜像的企业级Registry服务器，虽然Docker官方也提供了公共的镜像仓库，但是
从安全和效率等方面考虑，部署企业内部的私有环境Registry是非常必要的，harbor和docker中央仓库的关系就类似于
nexus和Maven中央仓库的关系，harbor除了存储和分发镜像外还具有用户管理，项目管理，配置管理和日志查询，高可
用部署等主要功能。		
</code></pre>
<h3 id="_4-6-3-2-搭建docker-compose" tabindex="-1"><a class="header-anchor" href="#_4-6-3-2-搭建docker-compose" aria-hidden="true">#</a> 4.6.3.2.搭建docker-compose</h3>
<pre><code>版本说明
本次使用的docker-compose版本为2.6.1
	
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-6-3-3-安装harbor" tabindex="-1"><a class="header-anchor" href="#_4-6-3-3-安装harbor" aria-hidden="true">#</a> 4.6.3.3.安装harbor</h3>
<pre><code>特别注意
注意docker的版本,低版本的docker不能运行harbor2.5
	
版本说明
	2.5
	
在github下载harbor2.5.2，上传到/opt/software/package
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cd /opt/software/package
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>解压到/opt/software/install
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>tar -zxvf harbor-offline-installer-v2.5.2.tgz -C /opt/software/install
cd /opt/software/install/harbor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>复制一份harbor.yml.tmpl，重命名为harbor.yml并修改harbor.yml
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cp harbor.yml.tmpl harbor.yml &amp;&amp;
vim harbor.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>修改harbor.yml
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	具体修改以下内容
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
	
	安装docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>./install.sh</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	执行完成后，使用docker images查看harbor相关镜像
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>docker images</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	启动harbor
	一次性启动所有harbor相关的容器,一般执行完./install.sh就已经启动了相关的容器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>docker-compose up -d</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	让docker信任harbor私服
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>vim /etc/docker/daemon.json,添加以下内容:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	配置Docker(Register)注册仓库服务器信任192.168.0.4:5001:
	{"insecure-registries":["192.168.0.4:5001"]}
	
	重新加载docker daemon配置文件并重启docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>systemctl daemon-reload &amp;&amp; systemctl restart docker</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	登录harbor首页(密码可以去harbor.yml中查看)
	访问地址：http://192.168.0.4:5001/
	用户名/密码：admin/123456
		
	在Harbor中创建项目,推送的时候可以用
	如:springcloud-eureka	

## 4.7.docker官方私服可视化
### 4.7.1docker-registry-web方案
	下载docker pull hyper/docker-registry-web镜像
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker pull hyper/docker-registry-web</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	启动docker-registry-web
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>docker run -d --restart=always <br>
-p 9002:8080 <br>
--name registry-web <br>
--link registry_default <br>
-e REGISTRY_URL=http://192.168.0.4:5000/v2 <br>
-e REGISTRY_NAME=192.168.0.4:5000 <br>
hyper/docker-registry-web:latest</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
## 4.8.制作docker镜像并上传到私服

### 4.8.1.制作Dokcer镜像		
	进入/opt/software/package，并在这个目录中下载jdk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cd /opt/software/package &amp;&amp;
wget https://repo.huaweicloud.com/java/jdk/8u181-b13/jdk-8u181-linux-x64.tar.gz</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	编写Dockerfile(Dockerfile内容如下)	
	
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
	CMD ["java","-version"]		
					
	在当前目录中执行构建镜像的命令
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker build -t='jdk/jdk1.8.0_181' .</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	查看到刚才制作好的镜像
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>docker images</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	创建容器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>docker run -it --name=myjdk8 镜像id /bin/bash</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
### 4.8.2.上传本地jdk镜像到私服
	给镜像打标签
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker tag jdk/jdk1.8.0_181 192.168.0.4:5000/jdk/jdk1.8.0_181:latest #更改镜像的TAG标签</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	上传标记的镜像
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>docker push 192.168.0.4:5000/jdk/jdk1.8.0_181:latest</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	查看推送到私服中的镜像
	访问:http://192.168.0.4:5000/v2/_catalog,看到:{"repositories":["jdk/jdk1.8.0_181"]}

## 4.9.Docker中安装常用软件
### 4.9.1.Docker安装mysql
	下载mysql镜像
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker pull mysql</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	启动mysql容器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>docker run -di --name mysql -p 3306:3306 --restart=always -e MYSQL_ROOT_PASSWORD=123456 mysql</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	关闭docker中的mysql容器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>myqldocker exec -it mysql bash</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>### 4.9.2.Docker中安装consul
	下载consul镜像
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>docker pull consul</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	启动consul容器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>docker run -d --name=consul <br>
-p 8500:8500 <br>
--restart=always <br>
agent -server -bootstrap -ui -node=1 -client='0.0.0.0' <br>
consul:latest</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
### 4.9.3.Docker容器中安装vim	 
	进入容器内部
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker exec -it 容器id /bin/bash</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	备份旧的源
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>mv /etc/apt/sources.list /etc/apt/sources.list.bak</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	写入新的源
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>echo &quot;deb http://mirrors.163.com/debian/ jessie main non-free contrib&quot; <br>
&gt;&gt; 	/etc/apt/sources.list &amp;&amp;
echo &quot;deb http://mirrors.163.com/debian/ jessie-proposed-updates main non-free contrib&quot; <br>
&gt;&gt;/etc/apt/sources.list &amp;&amp;
echo &quot;deb-src http://mirrors.163.com/debian/ jessie main non-free contrib&quot; <br>
&gt;&gt;/etc/apt/sources.list &amp;&amp;
echo &quot;deb-src http://mirrors.163.com/debian/ jessie-proposed-updates main non-free contrib&quot; <br>
&gt;&gt;/etc/apt/sources.list</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
	更新源
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>apt update</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	安装vim
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>apt-get install vim</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
### 4.9.3.docker安装elk
	下载elk镜像
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker pull sebp/elk:6.8.22</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	启动ELK容器，指定最小内存和最大内存，并映射相关端口
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>docker run -d --name elk <br>
--restart always <br>
-p 5601:5601 <br>
-p 9200:9200 <br>
-p 5044:5044 <br>
-e ES_MIN_MEM=1024m <br>
-e ES_MAX_MEM=2048 <br>
sebp/elk:6.8.22</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	开放elk需要用的端口,并且重新载入端口
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>firewall-cmd --add-port=5601/tcp --permanent &amp;&amp;
firewall-cmd --reload &amp;&amp;
firewall-cmd --add-port=9200/tcp --permanent &amp;&amp;
firewall-cmd --reload &amp;&amp;
firewall-cmd --add-port=5044/tcp --permanent &amp;&amp;
firewall-cmd --reload</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	访问Kibana
	192.168.0.4:5601
	
	进入ELK中进行配置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker exec -it elk /bin/bash</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	修改logstash配置,把下面内容粘贴进去
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>vim /etc/logstash/conf.d/02-beats-input.conf</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div><p>input{
tcp{
host =&gt; &quot;0.0.0.0&quot;
port =&gt; 5044
codec=&gt; json_lines
}
}
output{
elasticsearch{
hosts =&gt; [&quot;192.168.0.4:9200&quot;]
action =&gt; &quot;index&quot;
index =&gt; &quot;%{[appName]}-%{+YYYY.MM.dd}&quot;
}
}</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	配置说明:
	input代表数据输入配置 ， logstatsh的开放端口是 5044
	output代表数据输出配置，输出到elasticsearch, hosts是es的地址192.168.0.4:9200
	
	退出容器
``	
exit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>重启ELK容器
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker restart elk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>注意事项	
当把docker和centos7的冲突解决后,需要让centos放行elk(具体是es)的部署地址

查看容器详细信息
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker inspect 容器id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>查找到elk(具体是es)容器的ip,假设为172.17.0.2

执行放行操作
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>firewall-cmd --zone=trusted --add-source=172.17.0.2/16 --permanent
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>重新载入防火墙配置
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>firewall-cmd --reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>重启防火墙
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>systemctl restart firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>docker启动elk报错/或一直重启故障解决
错误日志：
max virtual memory areas vm.max_map_count [65530] is too low, increase to at least
解决方式，在宿主机执行
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>sudo sysctl -w vm.max_map_count=262144
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>
