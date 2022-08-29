<template><div><h1 id="_3-搭建基础开发环境" tabindex="-1"><a class="header-anchor" href="#_3-搭建基础开发环境" aria-hidden="true">#</a> 3.搭建基础开发环境</h1>
<h2 id="_3-1-章节内容概述" tabindex="-1"><a class="header-anchor" href="#_3-1-章节内容概述" aria-hidden="true">#</a> 3.1.章节内容概述</h2>
<pre><code>本章节涉及主要内容有：
 3.1.章节内容概述
 3.2.章节内容大纲
 3.3.安装jdk
 3.4.安装maven
 3.5.安装mysql
 3.6.安装nodejs
 3.7.安装fastgithub
 3.8.安装git
具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试,可直接复制运行即可。
</code></pre>
<h2 id="_3-2-章节内容大纲" tabindex="-1"><a class="header-anchor" href="#_3-2-章节内容大纲" aria-hidden="true">#</a> <a href="/enhance/markmap/environment/centos/centos7/chapter/centos7-outline5-chapter3.html" target="_blank">3.2.章节内容大纲</a></h2>
<Markmap localtion="/enhance/markmap/environment/centos/centos7/chapter/centos7-outline5-chapter3.html" height="500rem"/>
<h2 id="_3-3-安装jdk" tabindex="-1"><a class="header-anchor" href="#_3-3-安装jdk" aria-hidden="true">#</a> 3.3.安装jdk</h2>
<pre><code>查看当前安装的java版本
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>yum list installed | grep java
</code></pre></div><pre><code>卸载旧版本jdk
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>yum -y remove xxx
</code></pre></div><pre><code>创建存放安装包的目录-&gt;切换到该目录-&gt;在该目录中下载jdk
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>mkdir -p /opt/software/package &amp;&amp;
cd /opt/software/package &amp;&amp;
curl -fL -u software-1659088335906:c2e556a8a52386cbe0c6361ee3a7d8a21d3c9ca0 \
"https://lingwh-generic.pkg.coding.net/coding-drive/software/jdk-8u181-linux-x64.tar.gz?\
version=latest" -o jdk-8u181-linux-x64.tar.gz
</code></pre></div><pre><code>解压jdk后赋予权限并放入指定目录
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cd /opt/software/package &amp;&amp;
tar -zxvf jdk-8u181-linux-x64.tar.gz &amp;&amp;
chmod +x jdk1.8.0_181 &amp;&amp;
mv jdk1.8.0_181 /usr/local/bin/jdk1.8.0_181
</code></pre></div><pre><code>配置环境变量
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>vim /etc/profile
</code></pre></div><pre><code>添加如下内容
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>export JAVA_HOME=/usr/local/bin/jdk1.8.0_181
export JRE_HOME=${JAVA_HOME}/jre
export CLASSPATH=.:${JAVA_HOME}/lib:${JRE_HOME}/lib
export PATH=${JAVA_HOME}/bin:$PATH
</code></pre></div><pre><code>刷新环境变量文件
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>source /etc/profile
</code></pre></div><pre><code>查看java版本
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>java -version
</code></pre></div><h2 id="_3-4-安装maven" tabindex="-1"><a class="header-anchor" href="#_3-4-安装maven" aria-hidden="true">#</a> 3.4.安装maven</h2>
<pre><code>注意
maven linux版和windows版并不通用

创建存放安装包的目录-&gt;并切换到该目录-&gt;在该目录中下载maven
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>mkdir -p /opt/software/package &amp;&amp;
cd /opt/software/package &amp;&amp;
curl -fL -u software-1659088796431:ba211676fbe4a719c3b40b22083cd70388d41acc \
"https://lingwh-generic.pkg.coding.net/coding-drive/software/apache-maven-3.8.6-bin.tar.gz\
?version=latest" -o apache-maven-3.8.6-bin.tar.gz
</code></pre></div><pre><code>解压到/usr/local/bin/目录下
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>tar -zxvf apache-maven-3.8.6-bin.tar.gz -C /usr/local/bin
</code></pre></div><pre><code>配置环境变量
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>vim  /etc/profile
</code></pre></div><pre><code>添加如下内容
注意事项
不要修改原来的path，直接在下面添加新的PATH配置，使用$PATH引用上面的PATH
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>export M2_HOME=/usr/local/bin/apache-maven-3.8.6
export PATH=$PATH:$M2_HOME/bin
</code></pre></div><pre><code>刷新配置文件
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>source /etc/profile
</code></pre></div><pre><code>查看maven版本
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>mvn -v
</code></pre></div><pre><code>修改maven的settings.xml，仓库源&lt;mirrors&gt;&lt;/mirrors&gt;中添加如下信息:
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>vim /usr/local/bin/apache-maven-3.8.6/conf/settings.xml
</code></pre></div><div class="language-text ext-text"><pre v-pre class="language-text"><code>&lt;mirror>
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
</code></pre></div><h2 id="_3-5-安装mysql" tabindex="-1"><a class="header-anchor" href="#_3-5-安装mysql" aria-hidden="true">#</a> 3.5.安装mysql</h2>
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
<div class="language-text ext-text"><pre v-pre class="language-text"><code>yum list installed | grep mysql
</code></pre></div><pre><code>或
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>rpm -qa | grep mysql
</code></pre></div><pre><code>卸载旧版本mysql
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>yum -y remove xxx
</code></pre></div><pre><code>Centos终端获取yum源安装包：
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cd /opt/software/package &amp;&amp;
wget https://dev.mysql.com/get/mysql80-community-release-el7-3.noarch.rpm
</code></pre></div><pre><code>安装mysql的yum源：（二选一）
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>rpm -Uvh mysql80-community-release-el7-3.noarch.rpm
</code></pre></div><div class="language-text ext-text"><pre v-pre class="language-text"><code>rpm -ivh mysql80-community-release-el7-3.noarch.rpm
</code></pre></div><pre><code>查看刚才下载的mysql安装源，可以看到新增的两个mysql源
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>ls /etc/yum.repos.d
</code></pre></div><pre><code>[root@localhost package]# ls /etc/yum.repos.d
CentOS-Base.repo      CentOS-Debuginfo.repo  CentOS-Vault.repo          mysql-community-source.repo
CentOS-Base.repo.bak  CentOS-Media.repo      CentOS-fasttrack.repo      mysql-community.repo
CentOS-CR.repo        CentOS-Sources.repo    CentOS-x86_64-kernel.repo

修改源中的配置，将所有的gpgkey的值修改为https://repo.mysql.com/RPM-GPG-KEY-mysql-2022
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>sed -i 's#file:///etc/pki/rpm-gpg/RPM-GPG-KEY-mysql#https://repo.mysql.com/\
RPM-GPG-KEY-mysql-2022#g' /etc/yum.repos.d/mysql-community.repo
</code></pre></div><pre><code>使用yum在线安装mysql
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>yum -y install mysql-community-server
</code></pre></div><pre><code>启动mysql-server
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>systemctl start mysqld.service &amp;&amp;
systemctl enable mysqld.service
</code></pre></div><pre><code>查看mysql-server启动状态：
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>systemctl status mysqld
</code></pre></div><pre><code>初始化mysql
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>mysqld --initialize
</code></pre></div><pre><code>查看mysql8登录密码
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>cat /var/log/mysqld.log | grep 'temporary password'
</code></pre></div><pre><code>看到如下内容：
2022-07-18T18:31:57.277661Z 6 [Note] [MY-010454] [Server]
	A temporary password is generated for root@localhost: %)4(26e++jaK
</code></pre>
<p>登录mysql</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>mysql -uroot -p'%)4(26e++jaK'
</code></pre></div><pre><code>修改mysql初始密码，规则大小写字母、数字、特殊符号，最少8位
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>ALTER USER USER() IDENTIFIED BY 'Mysql123456_';
FLUSH PRIVILEGES;
</code></pre></div><pre><code>扩展或者添加远程用户权限
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>use mysql;
update user set host='%' where user='root';
flush privileges;
</code></pre></div><h2 id="_3-6-安装nodejs" tabindex="-1"><a class="header-anchor" href="#_3-6-安装nodejs" aria-hidden="true">#</a> 3.6.安装nodejs</h2>
<pre><code>安装wget
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>yum -y install wget
</code></pre></div><pre><code>安装gcc
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>yum install gcc gcc-c++
</code></pre></div><pre><code>下载node国内镜像
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>wget https://registry.npmmirror.com/-/binary/node/v14.0.0/node-v14.0.0-linux-x64.tar.gz
</code></pre></div><pre><code>解压并重命名文件夹
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>tar -xvf node-v14.0.0-linux-x64.tar.gz &amp;&amp;
mv node-v14.0.0-linux-x64 node
</code></pre></div><pre><code>配置环境变量
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>vi /etc/profile
</code></pre></div><p>在文件最后添加以下配置</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>export NODE_HOME=/root/node
export PATH=$PATH:$NODE_HOME/bin
</code></pre></div><pre><code>刷新环境变量配置
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>source /etc/profile
</code></pre></div><pre><code>验证结果
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>node -v
</code></pre></div><div class="language-text ext-text"><pre v-pre class="language-text"><code>npm -v
</code></pre></div><h2 id="_3-7-安装fastgithub" tabindex="-1"><a class="header-anchor" href="#_3-7-安装fastgithub" aria-hidden="true">#</a> 3.7.安装fastgithub</h2>
<pre><code>下载依赖包
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>yum -y install libicu
</code></pre></div><pre><code>下载fastGithub
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>curl -fL -u fastgithub-1660864382041:5d8500249a7d3da57c34a3214397f54709cf55dc \
"https://lingwh-generic.pkg.coding.net/coding-drive/fastgithub/v2.1.4/fastgithub_win-x64.zip?version=2.1.4" \
-o fastgithub_win-x64.zip
</code></pre></div><pre><code>解压
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>unzip fastgithub_linux-x64.zip
</code></pre></div><pre><code>设置权限
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>chmod -r 777 fastgithub_linux-x64/dnscrypt-proxy &amp;&amp;
chmod +x fastgithub_linux-x64/fastgithub
</code></pre></div><pre><code>以服务形式运行fastGithub
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>sudo ./fastgithub_linux-x64/fastgithub start &amp;&amp;
systemctl enable fastgithub
</code></pre></div><pre><code>以服务形式停止fastgithub
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>sudo ./fastgithub_linux-x64/fastgithub stop
</code></pre></div><pre><code>测试运行效果
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>wget -c https://github.com/tanghaibao/goatools/blob/main/data/association.txt
</code></pre></div><pre><code>配置git使用代理（不配置无法提交代码）
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>git config --global http.proxy http://127.0.0.1:38457
git config --global https.proxy http://127.0.0.1:38457
</code></pre></div><h2 id="_3-8-安装git" tabindex="-1"><a class="header-anchor" href="#_3-8-安装git" aria-hidden="true">#</a> 3.8.安装git</h2>
<h3 id="_3-8-1-安装默认版本git" tabindex="-1"><a class="header-anchor" href="#_3-8-1-安装默认版本git" aria-hidden="true">#</a> 3.8.1.安装默认版本git</h3>
<pre><code>卸载旧版本
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>yum -y remove git
</code></pre></div><pre><code>安装git
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>yum install -y git
</code></pre></div><pre><code>查看版本
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>git version
</code></pre></div><h3 id="_3-8-2-安装指定版本git" tabindex="-1"><a class="header-anchor" href="#_3-8-2-安装指定版本git" aria-hidden="true">#</a> 3.8.2.安装指定版本git</h3>
<pre><code>下载需要安装的版本号
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>wget https://mirrors.edge.kernel.org/pub/software/scm/git/git-2.29.0.tar.gz
</code></pre></div><pre><code>安装需要的组件
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>yum -y install curl-devel expat-devel gettext-devel openssl-devel zlib-devel
</code></pre></div><pre><code>卸载Centos自带的git
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>yum -y remove git
</code></pre></div><pre><code>安装git
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>tar -zxf git-2.29.0.tar.gz &amp;&amp;
cd git-2.29.0 &amp;&amp;
make prefix=/usr/local/git all &amp;&amp;
make prefix=/usr/local/git install
</code></pre></div><pre><code>添加环境变量
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>echo export PATH=$PATH:/usr/local/git/bin >> /etc/profile
</code></pre></div><pre><code>刷新环境变量
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>source /etc/profile
</code></pre></div><pre><code>查看版本
</code></pre>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>git version
</code></pre></div><ScrollIntoPageView/>
<HideSideBar/>
</div></template>
