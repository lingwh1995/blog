```java
//@include(./Account.java)
```





# 1.安装Linux操作系统

## 1.1.Linux重要目录介绍

	/usr → C:/Windows/ /*系统级的目录
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

## 1.2.Centos镜像下载
	如何是学习环境，建议安装centos mini版镜像，生产环境可以安装完整版
	下载地址

## 1.3.安装前Vmaware相关设置
**虚拟机联网设置**

	导航栏->编辑->虚拟网络编辑器->VMnet8NAT模式->更改设置->VMnet8NAT模式
		->更改底部子网:192.168.0.0，子网掩码:255.255.255.0->NAT设置->网关IP:192.168.0.2	
**Vmware网卡说明**

	VMnet0：用于虚拟桥接网络下的虚拟交换机
	VMnet1：用于虚拟Host-Only网络下的虚拟交换机
	VMnet8：用于虚拟NAT网络下的虚拟交换机
	VMware NetworkAdepter VMnet1：Host用于与Host-Only虚拟网络进行通信的虚拟网卡
	VMware NetworkAdepter VMnet8：Host用于与NAT虚拟网络进行通信的虚拟网卡
	
## 1.3.安装时分区大小设置
	/boot	/*存放系统启动引导文件，建议大小：512mb
	/swap 	/*交换区，建议大小：2g
	/*主分区，剩下的空间全部分给这个分区
	
# 2.Linux操作系统初始设置

## 2.1.配置静态IP地址
**修改网络配置**	
```bash
vi /etc/sysconfig/network-scripts/ifcfg-ens32(最后一个为网卡名称)	
```	
	修改后内容如下
	bootproto=static
	onboot=yes
	#在最后加上几行，IP地址、子网掩码、网关、dns服务器，注意：和网关IP处于同一个网段
	IPADDR=192.168.0.4
	NETMASK=255.255.255.0
	#和上面网关IP保持 一致
	GATEWAY=192.168.0.2
	DNS1=8.8.8.8
	DNS2=8.8.4.4
**重启网络**
```
systemctl restart network
```

## 2.2.解决远程连接无法连接的问题
**修改sshd配置文件**
```
vim /etc/ssh/sshd_config
```	
	说明：sshd_config里面的UseDNS=no【原本为yes】
**重启ssh服务**
```
systemctl restart sshd.service
```

## 2.3.设置系统环境变量
```
echo "export LC_ALL=en_US.UTF-8"  >>  /etc/profile &&
source /etc/profile
```

## 2.4.安装curl
	后面的操作需要curl，所以首先安装curl
```	
yum -y install curl
```

## 2.5.配置yml源
	下载阿里源，并上传到/opt/software/package
```	
curl http://mirrors.aliyun.com/repo/Centos-7.repo -o Centos-7.repo
```	
	进入/etc/yum.repos.d目录中，备份CentOS-Base.repo
```	
cd /etc/yum.repos.d && cp CentOS-Base.repo CentOS-Base.repo.bak
```	
	复制/opt/software/package/Centos-7.repo到当前目录并重命名为CentOS-Base.repo
```	
cp /opt/software/package/Centos-7.repo /CentOS-Base.repo
```	
	生成yum源缓存并更新yum源
```	
yum makecache && yum update
```

## 2.6.安装常用基础系统软件
### 2.6.1.手动安装常用软件
**vim**

	安装vim	
```		
yum -y install vim*
```	
	配置vim	
	set nu         # 设置显示行号
	set showmode   #设置在命令行界面最下面显示当前模式等
	set ruler      #在右下角显示光标所在的行数等信息
	set autoindent #设置每次单击Enter键后，光标移动到下一行时与上一行的起始字符对齐
	syntax on      #即设置语法检测，当编辑C或者Shell脚本时，关键字会用特殊颜色显示		
**wget**
```
yum -y install wget
```	
**telnet**
```
yum -y install telnet
yum -y install telnet-server
```	
**git**

	卸载旧版本	
```
yum remove git
```
	安装 yum 源的 Git 版本
```	
yum install -y git
```
	查看版本
```	
git version 
```
### 2.6.2.使用脚本安装常用软件
	脚本介绍
	这个脚本中包含了centos设置yum源并且安装了一些的常用软件，如vim、git、wget、curl、等，会定时更新

	安装curl
```	
yum -y install curl
```

	下载脚本并
```
curl https://gitee.com/lingwh1995/config-center/raw/master/centos/centos-init.sh -o centos-init.sh
```

	赋予可运行权限并运行该脚本
```
chmod +x centos-init.sh &&
./centos-init.sh
```
# 3.搭建基础开发环境

## 3.1.安装jdk
	查看当前安装的java版本

```
yum list installed | grep java
```
	卸载旧版本jdk
```
yum -y remove xxx
```
	创建存放安装包的目录->切换到该目录->在该目录中下载jdk
```
mkdir -p /opt/software/package &&
cd /opt/software/package &&
curl -fL -u software-1659088335906:c2e556a8a52386cbe0c6361ee3a7d8a21d3c9ca0 \
"https://lingwh-generic.pkg.coding.net/coding-drive/software/jdk-8u181-linux-x64.tar.gz?\
version=latest" -o jdk-8u181-linux-x64.tar.gz
```
	解压jdk后赋予权限并放入指定目录
```
tar -zxvf jdk-8u181-linux-x64.tar.gz &&
chmod +x jdk1.8.0_181
mv jdk1.8.0_181 /usr/local/bin/jdk1.8.0_181
```
	配置环境变量
```	
vim /etc/profile
```
	添加如下内容
``` 
export JAVA_HOME=/usr/local/bin/jdk1.8.0_181
export JRE_HOME=${JAVA_HOME}/jre
export CLASSPATH=.:${JAVA_HOME}/lib:${JRE_HOME}/lib
export PATH=${JAVA_HOME}/bin:$PATH
```	
	刷新环境变量文件
```	
source /etc/profile	
```
	查看java版本
```	
java -version
```

## 3.2.安装maven
	注意
	maven linux版和windows版并不通用

	创建存放安装包的目录->并切换到该目录->在该目录中下载maven
```
mkdir -p /opt/software/package &&
cd /opt/software/package &&
curl -fL -u software-1659088796431:ba211676fbe4a719c3b40b22083cd70388d41acc \
"https://lingwh-generic.pkg.coding.net/coding-drive/software/apache-maven-3.8.6-bin.tar.gz\
?version=latest" -o apache-maven-3.8.6-bin.tar.gz
```	
	解压到/usr/local/bin/目录下
```	
tar -zxvf apache-maven-3.8.6-bin.tar.gz -C /usr/local/bin
```	
	配置环境变量	
```
vim  /etc/profile
```
	添加如下内容
	注意事项
	不要修改原来的path，直接在下面添加新的PATH配置，使用$PATH引用上面的PATH
```
export M2_HOME=/usr/local/bin/apache-maven-3.8.6
export PATH=$PATH:$M2_HOME/bin
```	
	刷新配置文件
```	
source /etc/profile
```	
	查看maven版本
```	
mvn -v
```	
	修改maven的settings.xml，仓库源<mirrors></mirrors>中添加如下信息:
```
vim /usr/local/bin/apache-maven-3.8.6/conf/settings.xml
```	
```
<mirror>
	<id>alimaven</id>
	<name>aliyun maven</name>
	<url>http://maven.aliyun.com/nexus/content/groups/public/</url>
	<mirrorOf>central</mirrorOf>
</mirror>	
<mirror>
	<id>repo2</id>
	<name>Mirror from Maven Repo2</name>
	<url>http://repo2.maven.org/maven2/</url>
	<mirrorOf>central</mirrorOf>
</mirror>
```

## 3.3.安装mysql
<!-- 
	参考网站
	安装mysql
	https://blog.csdn.net/qq_38127559/article/details/121659232
	修改yum源
	https://blog.csdn.net/weixin_45836543/article/details/124906071
	官网下载mysql
	https://blog.csdn.net/xhmico/article/details/125197747
-->

	安装建议
	使用mysql官方yum源在线安装(不要使用rpm方式安装，非常难以安装成功)
	
	查看当前安装的mysql版本
```
yum list installed | grep mysql
```	
	或
```	
rpm -qa | grep mysql
```	
	卸载旧版本mysql
```	
yum -y remove xxx
```	
	Centos终端获取yum源安装包：
```
cd /opt/software/package &&
wget https://dev.mysql.com/get/mysql80-community-release-el7-3.noarch.rpm
```	
	安装mysql的yum源：（二选一）
```	
rpm -Uvh mysql80-community-release-el7-3.noarch.rpm
```
```
rpm -ivh mysql80-community-release-el7-3.noarch.rpm
```	
	查看刚才下载的mysql安装源，可以看到新增的两个mysql源
```	
ls /etc/yum.repos.d
```	
	[root@localhost package]# ls /etc/yum.repos.d
	CentOS-Base.repo      CentOS-Debuginfo.repo  CentOS-Vault.repo          mysql-community-source.repo
	CentOS-Base.repo.bak  CentOS-Media.repo      CentOS-fasttrack.repo      mysql-community.repo
	CentOS-CR.repo        CentOS-Sources.repo    CentOS-x86_64-kernel.repo
	
	修改源中的配置，将所有的gpgkey的值修改为https://repo.mysql.com/RPM-GPG-KEY-mysql-2022
```	
sed -i 's#file:///etc/pki/rpm-gpg/RPM-GPG-KEY-mysql#https://repo.mysql.com/\
RPM-GPG-KEY-mysql-2022#g' /etc/yum.repos.d/mysql-community.repo
```	
	使用yum在线安装mysql
```	
yum -y install mysql-community-server
```	
	启动mysql-server
```	
systemctl start mysqld.service &&
systemctl enable mysqld.service
```	
	查看mysql-server启动状态：
```
systemctl status mysqld
```	
	初始化mysql
```
mysqld --initialize
```	
	查看mysql8登录密码
```	
cat /var/log/mysqld.log | grep 'temporary password'
```	
	看到如下内容：
	2022-07-18T18:31:57.277661Z 6 [Note] [MY-010454] [Server]
		A temporary password is generated for root@localhost: %)4(26e++jaK
		
登录mysql
```
mysql -uroot -p'%)4(26e++jaK'
```	
	修改mysql初始密码，规则大小写字母、数字、特殊符号，最少8位
```	
ALTER USER USER() IDENTIFIED BY 'Mysql123456_';
FLUSH PRIVILEGES;
```	
	扩展或者添加远程用户权限:
```	
use mysql;	
update user set host='%' where user='root';
flush privileges;
```

# 4.Centos搭建docker
## 4.1.安装docker
### 4.1.1.在线安装docker

	以root身份更新yum，将yum包更新到最新
```
yum -y update
```	
	查看当前安装的docker版本
```
yum list installed | grep docker
```	
	containerd.io.x86_64 	 1.6.6-3.1.el7                  @docker-ce-stable				
	docker-ce.x86_64                   3:20.10.17-3.el7               @docker-ce-stable
	docker-ce-cli.x86_64               1:20.10.17-3.el7               @docker-ce-stable
	docker-ce-rootless-extras.x86_64   20.10.17-3.el7                 @docker-ce-stable
	docker-scan-plugin.x86_64          0.17.0-3.el7                   @docker-ce-stable
		
	卸载旧版本docker
```
yum -y remove docker-ce.x86_64
yum -y remove docker-scan-plugin.x86_64
yum -y remove docker-ce-cli.x86_64
yum -y remove docker-ce-rootless-extras.x86_64_64
yum -y remove containerd.io.x86_64
```	
	安装需要的软件包
```	
yum install -y yum-utils device-mapper-persistent-data lvm2
```	
	配置使用阿里的yum源
```
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```	
查看阿里云仓库中所有docker版本，并选择特定版本安装
```
yum list docker-ce --showduplicates | sort -r
```	
	安装最新版本docker-ce(docker社区、ee企业版 ce为社区版)
```	
yum -y install docker-ce
```	
	查看安装的docker版本
```	
docker version
```	
	给docker配置国内镜像源
```	
vim /etc/docker/daemon.json
```
	添加如下内容
```
sudo mkdir -p /etc/docker &&
sudo tee /etc/docker/daemon.json <<-'EOF'
{
    "registry-mirrors": [
        "https://5pfmrxk8.mirror.aliyuncs.com",
        "http://hub-mirror.c.163.com",
        "https://docker.mirrors.ustc.edu.cn",
        "https://registry.docker-cn.com"
    ]
}
EOF
````
	daemon.json配置说明
	registry-mirrors：docker国内镜像源地址
	
	刷新daemon.json配置启动docker并设置为开机自启动
```	
systemctl daemon-reload &&
systemctl start docker &&
systemctl enable docker
```
	查看启动状态
```	
systemctl status docker
```
	启动故障排查
```	
systemctl status docker
```
	测试docker
```	
docker run hello-world
```
	安装成功则返回下面信息
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
	2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
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

### 4.1.2.二进制包安装docker
	创建存放docker安装包的目录->切换目录->在该目录中下载docker二进制安装包->解压到/usr/bin/
```
mkdir -p  /opt/software/package/ &&
cd /opt/software/package/ &&
curl -fL -u software-1659095503164:3316a6a052e6f17880d37a00d38454342aceffdf \
"https://lingwh-generic.pkg.coding.net/coding-drive/software/docker-20.10.9.tgz?version=latest" \
-o docker-20.10.9.tgz &&
tar -xf docker-20.10.9.tgz && mv docker/* /usr/bin/
```

	配置docker私有镜像	
```
sudo mkdir -p /etc/docker &&
sudo tee /etc/docker/daemon.json <<-'EOF'
{
    "registry-mirrors": [
        "https://5pfmrxk8.mirror.aliyuncs.com",
        "http://hub-mirror.c.163.com",
        "https://docker.mirrors.ustc.edu.cn",
        "https://registry.docker-cn.com"
    ]
}
EOF
```
	配置docker.service文件
```
cat > /usr/lib/systemd/system/docker.service << EOF
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
```
	刷新配置文件后启动三台机器上的docker并设置为开机启动
```
systemctl daemon-reload &&
systemctl start docker &&
systemctl enable docker
```
	查看启动状态
```	
systemctl status docker
```
	启动故障排查
```	
systemctl status docker
```
	测试docker
```	
docker run hello-world
```
	安装成功则返回下面信息
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
	2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
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


## 4.2.docker启动故障解决		
	错误信息
	Job for docker.service failed because the control process exited with error code. 
	See "systemctl status docker.service" and "journalctl -xe" for details.
	
	解决方式1：使docker与firewall共存
	关闭docker
```
systemctl stop docker
```
	设置firewall不拦截docker
```
firewall-cmd --zone=trusted --remove-interface=docker0 --permanent
```
	重新加载防火墙配置
```
firewall-cmd --reload
```	
	重新启动防火墙
```
systemctl restart firewalld
```	
	重新启动docker
```	
systemctl restart docker
```	
	解决方式2：检查daemon.json配置是否正确
```	
	cat /etc/docker/daemon.json
```
	看配置的registry-mirrors是否正确，如私服前是否忘记了加http://

## 4.3.docker容器可视化	
	查询当前有哪些portainer镜像
```	
docker search portainer
```	
	下载portainer镜像
```	
docker pull portainer/portainer:1.24.2
```	
	启动单机版portainer(针对单机版docker)
```	
docker run -d --name portainer \
	-p 9000:9000 \
	--restart=always \
	-v /var/run/docker.sock:/var/run/docker.sock \
	--privileged=true \
	portainer/portainer:1.24.2
```	
	登录portainer
	登录地址：http://192.168.0.4:9000/
	用户名/密码：admin/portainer
	单机版选择local即可

## 4.4.搭建docke私服
## 4.4.1搭建docke官方私服（不带有用户名和密码校验）
	
	拉取仓库镜像
```	
docker pull registry
```	
	启动注册仓库服务器
```	
docker run -d --name registry_official \
	-p 5000:5000 \
	--restart=always \
	-v /registry/public/repos:/var/lib/registry \
	--privileged=true \
	registry
```
	配置私服地址和镜像源地址并且将私服地址加入到镜像源列表，这样就可以从私服中拉取镜像了
	
	给docker配置私服
```	
	vim /etc/docker/daemon.json
```
	添加如下内容
```	
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
```	
	或
```	
sudo mkdir -p /etc/docker &&
sudo tee /etc/docker/daemon.json <<-'EOF'
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
```	
	daemon.json配置说明
	insecure-registries：docker信任的私服地址
	registry-mirrors：docker国内镜像源地址
	
	daemon.json配置注意事项：把私服配置到registry-mirrors时，一定要正确的加上 http://前缀：	
	正确格式: http://192.168.0.4:5000
	错误格式: 192.168.0.4:5001
	
	放行5000端口并保证5000端口确实被放开
```	
firewall-cmd --permanent --add-port=5000/tcp &&
firewall-cmd --reload
```	
				
	刷新daemon并重启docker
```
systemctl daemon-reload && 
systemctl restart docker
```	
	验证仓库是否搭建成功
	访问:http://192.168.0.4:5000/v2/_catalog，看到{"repositories":[]}表示私有仓库搭建成功且内容为空
	
	彻底删除私服中的镜像:注意这个路径是要看registry具体挂载到linux上什么位置的
```
rm -rf /registry/public/repos/docker/registry/v2/repositories/springcloud-eureka/
```

## 4.4.2搭建docke官方私服（带有用户名和密码校验）	
	拉取仓库镜像
```	
docker pull registry
```	
	加密认证配置
	创建存放加密后用户信息的用户名密码
```
mkdir -p /opt/docker/auth/
```	
	安装httpd工具
```
yum -y install httpd
```
	生成带有加密后用户信息的用户名密码
```	
htpasswd -Bbn docker 123456  >/opt/docker/auth/htpasswd
```	
	启动注册仓库服务器(-p:第一个5000是本地机器端口,第二个5000是docker容器中端口)
```	
docker run -d --name registry_official_auth  \
	-p 5000:5000 --restart=always \
	-v `pwd`/opt/docker/auth:/opt/docker/auth  \
	-v /opt/docker/registry:/var/lib/registry  \
	-e "REGISTRY_AUTH=htpasswd"  \
	-e "REGISTRY_AUTH_HTPASSWD_REALM=Registry Realm"  \
	-e REGISTRY_AUTH_HTPASSWD_PATH=/opt/docker/auth/htpasswd \
	registry:latest	
```			
	给docker配置私服
```	
	vim /etc/docker/daemon.json
```	
	添加以下内容
```	
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
```	
	daemon.json配置说明
	insecure-registries：docker信任的私服地址
	registry-mirrors：docker国内镜像源地址
	
	daemon.json配置注意事项：把私服配置到registry-mirrors时，一定要正确的加上 http://前缀：	
	正确格式: http://192.168.0.4:5000
	错误格式: 192.168.0.4:5001
	放行5000端口并保证5000端口确实被放开
```	
firewall-cmd --permanent --add-port=5000/tcp &&
firewall-cmd --reload
```
	刷新docker daemon并重启docker
```	
systemctl daemon-reload && systemctl restart docker
```	
	验证仓库是否搭建成功
	访问:http://192.168.0.4:5000/v2/_catalog，看到{"repositories":[]}表示私有仓库搭建成功且内容为空
	
	彻底删除私服中的镜像:注意这个路径是要看registry具体挂载到linux上什么位置的
```	
rm -rf /registry/public/repos/docker/registry/v2/repositories/springcloud-eureka/
```

## 4.4.3.搭建harbor私服
### 4.4.3.1.harbor简介
	Harbor是一个用于存储和分发Docker镜像的企业级Registry服务器，虽然Docker官方也提供了公共的镜像仓库，但是
	从安全和效率等方面考虑，部署企业内部的私有环境Registry是非常必要的，harbor和docker中央仓库的关系就类似于
	nexus和Maven中央仓库的关系，harbor除了存储和分发镜像外还具有用户管理，项目管理，配置管理和日志查询，高可
	用部署等主要功能。		
### 4.4.3.2.搭建docker-compose
	版本说明
		2.6.1
		
	下载docker-compose
	在github下载docker-compose2.6.1
	
	上传到服务器
	上传到/opt/software/package
	
	赋予运行权限并复制到/usr/local/bin/docker-compose
```	
cd /opt/software/package &&
sudo chmod +x docker-compose-linux-x86_64 &&
cp docker-compose-linux-x86_64 /usr/local/bin/docker-compose
```	
	查看是否安装成功
```	
docker-compose --version
```
### 4.4.3.3.安装harbor
	特别注意
	注意docker的版本,低版本的docker不能运行harbor2.5
		
	版本说明
		2.5
		
	在github下载harbor2.5.2，上传到/opt/software/package
```	
cd /opt/software/package
```	
	解压到/opt/software/install
```
tar -zxvf harbor-offline-installer-v2.5.2.tgz -C /opt/software/install
cd /opt/software/install/harbor
```	
	复制一份harbor.yml.tmpl，重命名为harbor.yml并修改harbor.yml
```	
cp harbor.yml.tmpl harbor.yml &&
vim harbor.yml
```	
	修改harbor.yml
```	
	具体修改以下内容
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
```	
./install.sh
```	
	执行完成后，使用docker images查看harbor相关镜像
```
docker images
```	
	启动harbor
	一次性启动所有harbor相关的容器,一般执行完./install.sh就已经启动了相关的容器
```	
docker-compose up -d
```	
	让docker信任harbor私服
```	
vim /etc/docker/daemon.json,添加以下内容:
```
	配置Docker(Register)注册仓库服务器信任192.168.0.4:5001:
	{"insecure-registries":["192.168.0.4:5001"]}
	
	重新加载docker daemon配置文件并重启docker
```	
systemctl daemon-reload && systemctl restart docker
```	
	登录harbor首页(密码可以去harbor.yml中查看)
	访问地址：http://192.168.0.4:5001/
	用户名/密码：admin/123456
		
	在Harbor中创建项目,推送的时候可以用
	如:springcloud-eureka	

## 4.5.docker官方私服可视化
### 4.5.1docker-registry-web方案
	下载docker pull hyper/docker-registry-web镜像
```	
docker pull hyper/docker-registry-web
```	
	启动docker-registry-web
```	
docker run -d --restart=always \
	-p 9002:8080 \
	--name registry-web \
	--link registry_default \
	-e REGISTRY_URL=http://192.168.0.4:5000/v2 \
	-e REGISTRY_NAME=192.168.0.4:5000 \
	hyper/docker-registry-web:latest
```

## 4.6.制作docker镜像并上传到私服

### 4.6.1.制作Dokcer镜像		
	进入/opt/software/package，并在这个目录中下载jdk
```
cd /opt/software/package &&
wget https://repo.huaweicloud.com/java/jdk/8u181-b13/jdk-8u181-linux-x64.tar.gz
```	
	编写Dockerfile(Dockerfile内容如下)	
	
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
```	
docker build -t='jdk/jdk1.8.0_181' .
```	
	查看到刚才制作好的镜像
```	
docker images	
```
	创建容器
```	
docker run -it --name=myjdk8 镜像id /bin/bash
```

### 4.6.2.上传本地jdk镜像到私服
	给镜像打标签
```
docker tag jdk/jdk1.8.0_181 192.168.0.4:5000/jdk/jdk1.8.0_181:latest #更改镜像的TAG标签
```	
	上传标记的镜像
```	
docker push 192.168.0.4:5000/jdk/jdk1.8.0_181:latest	
```	
	查看推送到私服中的镜像
	访问:http://192.168.0.4:5000/v2/_catalog,看到:{"repositories":["jdk/jdk1.8.0_181"]}

## 4.7.Docker中安装常用软件
### 4.7.1.Docker安装mysql
	下载mysql镜像
```	
docker pull mysql
```	
	启动mysql容器
```
docker run -di --name mysql -p 3306:3306 --restart=always -e MYSQL_ROOT_PASSWORD=123456 mysql
```	
	关闭docker中的mysql容器
```	
myqldocker exec -it mysql bash	
```
### 4.7.2.Docker中安装consul
	下载consul镜像
```	
docker pull consul
```	
	启动consul容器
```	
docker run -d --name=consul \
	-p 8500:8500 \
	--restart=always \
	agent -server -bootstrap -ui -node=1 -client='0.0.0.0' \
	consul:latest
```

### 4.7.3.Docker容器中安装vim	 
	进入容器内部
```	
docker exec -it 容器id /bin/bash
```	
	备份旧的源
```	
mv /etc/apt/sources.list /etc/apt/sources.list.bak
```
	写入新的源
```	
echo "deb http://mirrors.163.com/debian/ jessie main non-free contrib" \
	>> 	/etc/apt/sources.list &&
echo "deb http://mirrors.163.com/debian/ jessie-proposed-updates main non-free contrib" \
	>>/etc/apt/sources.list &&
echo "deb-src http://mirrors.163.com/debian/ jessie main non-free contrib" \
	>>/etc/apt/sources.list &&
echo "deb-src http://mirrors.163.com/debian/ jessie-proposed-updates main non-free contrib" \
	>>/etc/apt/sources.list
```

	更新源
```	
apt update
```	
	安装vim
```	
apt-get install vim
```

### 4.7.3.docker安装elk
	下载elk镜像
```
docker pull sebp/elk:6.8.22
```	
	启动ELK容器，指定最小内存和最大内存，并映射相关端口
```	
docker run -d --name elk \
	--restart always \
	-p 5601:5601 \
	-p 9200:9200 \
	-p 5044:5044 \
	-e ES_MIN_MEM=1024m \
	-e ES_MAX_MEM=2048 \
	sebp/elk:6.8.22
```		
	开放elk需要用的端口,并且重新载入端口
```	
firewall-cmd --add-port=5601/tcp --permanent &&
firewall-cmd --reload &&
firewall-cmd --add-port=9200/tcp --permanent &&
firewall-cmd --reload &&
firewall-cmd --add-port=5044/tcp --permanent &&
firewall-cmd --reload
```	
	访问Kibana
	192.168.0.4:5601
	
	进入ELK中进行配置
```	
docker exec -it elk /bin/bash
```
	修改logstash配置,把下面内容粘贴进去
```	
vim /etc/logstash/conf.d/02-beats-input.conf
```
```
input{
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
```	
	配置说明:
	input代表数据输入配置 ， logstatsh的开放端口是 5044
	output代表数据输出配置，输出到elasticsearch, hosts是es的地址192.168.0.4:9200
	
	退出容器
``	
exit
```	
	重启ELK容器
```	
docker restart elk
```	
	注意事项	
	当把docker和centos7的冲突解决后,需要让centos放行elk(具体是es)的部署地址
	
	查看容器详细信息
```	
docker inspect 容器id
```	
	查找到elk(具体是es)容器的ip,假设为172.17.0.2
	
	执行放行操作
```	
firewall-cmd --zone=trusted --add-source=172.17.0.2/16 --permanent
```	
	重新载入防火墙配置
```	
firewall-cmd --reload
```	
	重启防火墙
```
systemctl restart firewalld
```	
	docker启动elk报错/或一直重启故障解决
	错误日志：
	max virtual memory areas vm.max_map_count [65530] is too low, increase to at least
	解决方式，在宿主机执行
```	
sudo sysctl -w vm.max_map_count=262144
```

# 5.Centos搭建Rancher
	下载rancher
```	
docker pull rancher/server
```	
	启动rancher
```	
docker run -di --name=rancher -p9003:8080 rancher/server:latest
```	
	使用rancher扩容/缩容注意事项
	如果要使用扩容或者缩容功能,不要配置eureka的如下信息
	eureka:
	  instance:
		#使用rancher扩容不能配置instance-id,否则会出问题
		#instance-id: ${spring.application.name} 
		#使用rancher扩容不能配置iip-address,否则会出问题
		#ip-address: 192.168.0.4				

# 6.Centos搭建Minikube
## 6.1.minikube介绍
	Minikube这个工具支持在虚拟机上运行一套单节点的k8s集群

## 6.2.版本说明
	minikube:1.2.6 kubectl client:1.18.0

## 6.3.开启Vmware虚拟化
	查看是否支持虚拟化，开始安装前，先查看本地机器是否支持虚拟化，有输出就支持
```
grep -E --color 'vmx|svm' /proc/cpuinfo
```	
	开启虚拟化
	Vmware Workstation ->Centos 64右键菜单 —> 设置 
		-> 处理器 ->勾选 虚拟化IntelVT-x/EPT 或 ADM-V/RVI(V)
	
	设置处理器数量设置为大于等于2,内存大于等于2G

## 6.4.安装kubectl	
	简介
	kubectl 是一个用来跟 K8S 集群进行交互的命令行工具
		
	下载kubectl，上传到/opt/software/package，赋予可运行权限,并放入/usr/local/bin/目录下
```	
chmod +x ./kubectl && cp ./kubectl /usr/local/bin/kubectl
```	
	查看kubectl版本
```	
kubectl version --client
```

## 6.5.安装minikube
	下载minikube
	到 https://github.com/kubernetes/minikube/releases 找到minikube-linux-amd64并下载
	
	上传到/opt/software/package
	
	赋予运行权限并复制到/usr/local/bin/minikube
```
chmod +x ./minikube-linux-amd64 && cp ./minikube-linux-amd64 /usr/local/bin/minikube
```

## 6.6.使用阿里云加速docker hub
	登录阿里云docker相关页面
	访问：https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors
	登陆->左侧菜单选中镜像加速器->查看加速镜像地址 https://ngviu28h.mirror.aliyuncs.com

## 6.7.启动minikube
	注意事项
	启动minikube之前需要先启动docker，如无法启动加上--kubernetes-version=v具体版本号
	
	使用docker作为虚拟化引擎(需要先安装Docker)
```
minikube start --driver=docker --force \
	--image-mirror-country='cn' \
	--image-repository='registry.cn-hangzhou.aliyuncs.com/google_containers' \
	--registry-mirror='https://ngviu28h.mirror.aliyuncs.com' \
	--kubernetes-version=v1.23.8
```		
	使用virtualbox作为虚拟化引擎(需要先安装Virtualbox)
	
	下载Centos7版VirtualBox
	访问：https://www.virtualbox.org/wiki/Downloads，选择AMD64版本下载
	上传到/opt/software/package中
```	
VirtualBox-6.1-6.1.34_150636_el7-2.x86_64.rpm
```	
	安装问题解决(virtualbox内核无法编译)
```
sudo yum install gcc kernel kernel-devel -y
```	
	重启机器
```	
systemctl reboot
```
	安装VirtualBox
```	
yum install VirtualBox-6.1-6.1.34_150636_el7-2.x86_64.rpm -y
```		
	补充内容：Centos版VirtualBox操作命令						
	VBoxManage list runningvms //查看机器列表
	VBoxHeadless -startvm "虚拟机名" //启动虚拟机
	测试VirtualBox是否安装成功
```	
virtualbox
rcvboxdrv setup
```							
	使用virtualbox作为虚拟化引擎
```	
minikube start --driver=virtualbox --force \
	--image-mirror-country='cn' \
	--image-repository='registry.cn-hangzhou.aliyuncs.com/google_containers' \
	--registry-mirror='https://ngviu28h.mirror.aliyuncs.com' \
	--kubernetes-version=v1.23.8
```

## 6.8.minikube常用命令	
	查看minikube日志
```	
minikube logs
```	
	查看minikube状态
```	
minikube status								
```	
	查看节点				
```	
minikube kubectl -- get po -A
```	
	停止集群
```	
minikube stop
```	
	清空集群
```	
minikube delete --all
```	
	安装集群可视化 Web UI 控制台
```	
minikube dashboard
```	
	卸载minikube
	停止运行
```	
minikube stop
```
	执行卸载命令
```	
minikube delete
```
	删除 ~/.minikube 目录缓存的文件
```	
rm -rf ~/.minikube	
```

# 7.kubeadm搭建Kubernetes

## 7.1.特别说明
	使用kubeadm搭建Kubernetes

## 7.2.所有节点设置对应主机名
	master节点
	hostnamectl set-hostname master
	slave1节点
	hostnamectl set-hostname slave1
	slave2节点	
	hostnamectl set-hostname slave2

## 7.3.所有节点修改hosts
	vim /etc/hosts
	192.168.0.6 master
	192.168.0.7 slave1
	192.168.0.8 slave2

## 7.4.所有节点关闭SELinux
	暂时关闭
```	
setenforce 0
```
	永久关闭
```
sed -i --follow-symlinks 's/SELINUX=enforcing/SELINUX=disabled/g' \
/etc/sysconfig/selinux
```
## 7.5.所有节点关闭防火墙
```
systemctl stop firewalld &&
systemctl disable firewalld
```
## 7.6.所有节点安装docker
	安装docker
	详细参考4.1>.安装docker
	
	修改docker配置
	vim /etc/docker/daemon.json，并添加如下内容：
	#kubernetes官方推荐 docker等使用systemd作为cgroupdriver，否则 kubelet 启动不了
	"exec-opts": ["native.cgroupdriver=systemd"]"
	
	重新载入docker配置并重启docker
	systemctl daemon-reload && systemctl restart docker

## 7.7.所有节点安装k8s所需组件
	添加k8s安装源
```	
cat <<EOF > kubernetes.repo
[kubernetes]
name=Kubernetes
baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64
enabled=1
gpgcheck=0
repo_gpgcheck=0
gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg 
https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
EOF
```	
	使用k8s安装源
```	
mv kubernetes.repo /etc/yum.repos.d/
```				
	安装所需组件
```	
yum install -y kubelet-1.22.4 kubectl-1.22.4 kubeadm-1.22.4
```	
	查看各组件版本
```	
kubelet --version
```
```
kubectl	--version
```
```
kubeadm --version
```

## 7.8.所有节点启动kubelet和docker
```
systemctl enable kubelet && 
systemctl start kubelet &&
systemctl enable docker &&
systemctl start docker
```
## 7.9.所有关闭swap
	临时关闭swap分区
```	
swapoff /mnt/swap
```
	永久关闭swap分区
```	
sed -ri 's/.*swap.*/#&/' /etc/fstab && systemctl reboot
```
	查看swap分区是否关闭	
```	
free -m
```

## 7.10.用kubeadm 初始化集群
	特别注意
	只在Master节点操作
	
	初始化集群控制台 Control plane，失败了可以用 kubeadm reset 重置
	
	初始化集群命令
```	
kubeadm init \
	--apiserver-advertise-address=192.168.0.6 \
	--image-repository registry.aliyuncs.com/google_containers \
	--kubernetes-version v1.22.4 \
	--service-cidr=10.96.0.0/12 \
	--pod-network-cidr=10.244.0.0/16 \
	--ignore-preflight-errors=all
```	  
	命令说明：	
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

## 7.11.其他节点连接到Master节点
	在两个上Slave节点输入第9>>.步骤在主节点上获取的秘钥
	如：kubeadm join 192.168.0.6:6443 \
		--token e60qrb.6321jolakk1aix90 \
		--discovery-token-ca-cert-hash \
		sha256:02829b33a24eef53805ffedef79c0371cb4d9ac0d04bfad7fe26eb022cb638ac
		
	加入成功后看到:
		This node has joined the cluster

## 7.12.在master节点上查看集群
	mater节点和两个slave节点STATUS是NOTReady
```	
kubectl get nodes
```
	[root@master ~]# kubectl get nodes
	NAME     STATUS     ROLES                  AGE     VERSION
	master   NotReady      control-plane,master   9m32s   v1.22.4
	slave1   NotReady   <none>                 5m51s   v1.22.4
	slave2   NotReady      <none>                 2m31s   v1.22.4

## 7.13.安装网络插件
```
kubectl apply -f \
	https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml
```
## 7.14.在master上查看集群节点			
	再次执行命令查看集群命令，mater节点STATUS是Ready，两个slave节点STATUS是都是Ready
```	
kubectl get nodes
```
	[root@master ~]# kubectl get nodes
	NAME     STATUS     ROLES                  AGE     VERSION
	master   Ready      control-plane,master   9m32s   v1.22.4
	slave1   Ready   <none>                 5m51s   v1.22.4
	slave2   Ready      <none>                 2m31s   v1.22.4	
	注意事项
	如果两个从节点中有一个节点状态是NotReady，另一个节点状态是Ready，不要着急，要多等一会儿
	再使用命令kubectl get nodes查看集群节点，就可以看到所有节点都是Ready

## 7.15.启动故障解决
	查看所有命名空间的所有的pod
```	
kubectl get pods -o wide --all-namespaces
```
	查看启动失败的pod的日志，其中PODNAME为启动失败的pod的name
```
kubectl -n kube-system logs PODNAME
```	
	重置kubeadm
	可使用kubeadm reset命令重启kubeadm，再从第9>>.步骤开始重新执行

## 7.16.基础命令
	查看kubeadm需要的组件的版本
```	
kubeadm config images list
```
	查看所有节点
```	
kubectl get nodes
```
	查看pod
```	
kubectl get pod
```
	查看所有命名空间的所有pod
```	
kubectl get pods -o wide --all-namespaces
```
	查看pod日志
```	
kubectl describe pod
```

## 7.17.部署第一个程序到k8s中
	开始运行 guestbook
```
kubectl create deployment guestbook --image=ibmcom/guestbook:v1
```	
	查询pod运行状态，状态应该显示为Running表示pod运行成功
```	
kubectl get pods
```	
	对外暴露端口
```	
kubectl expose deployment guestbook --type=NodePort --port=3000
```	
	查询端口映射	
```	
kubectl get service guestbook
```
	NAME        TYPE       CLUSTER-IP     EXTERNAL-IP   PORT(S)          AGE
	guestbook   NodePort   10.10.10.253   <none>        3000:31208/TCP   1m
	
	访问服务（主节点和两个工作节点都可访问到这个服务）
	http://192.168.0.6:31208
	http://192.168.0.7:31208
	http://192.168.0.8:31208

## 7.18.可视化面板kuboard
	安装
```	
kubectl apply -f https://addons.kuboard.cn/kuboard/kuboard-v3.yaml
```	
	查看是否安装成功，所有节点状态都是Ready表示安装成功
```	
kubectl get pods -n kuboard
```	
	登录kuboard-v3
```	
http://192.168.0.6:30080	
```
	用户名/密码： admin/Kuboard123
	
	查看kuboard所有相关的pod是否成功运行,状态为RUNNING代表成功运行
```	
watch kubectl get pods -n kuboard
```	
	查看启动日志
	获取kuboard命名空间中相关pod的name
```	
watch kubectl get pods -n kuboard
```
	根据pod名称查看pod日志
```	
kubectl logs -n kuboard kuboard-v3-5fc46b5557-jlsrj
```		
	启动故障排查
	查看docker中部署的kuboard相关容器是否都成功启动了，如果相关容器没有重新启动，可重启一下docker
```	
docker ps
```
	特别注意
	这个kuboard部分pod启动（就绪）的可能很慢，需要耐心等待，等待一定时间后再使用命令查看是否都启动成功了
```
watch kubectl get pods -n kuboard
```	
	卸载kuboard-v3
	执行卸载命令
```	
	kubectl delete -f https://addons.kuboard.cn/kuboard/kuboard-v3.yaml
```	
	清理遗留数据
```	
rm -rf /usr/share/kuboard
```

# 8.二进制包搭建Kubernetes

## 8.1.环境配置清单
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
## 8.2.服务器规划和IP地址规划

### 8.2.1服务器规划
:::tip 注意事项
如果要搭建一主多从非高可用Kubernetes集群，使用服务器规划1<br>
如果要搭建多主多从高可用Kubernetes集群，使用服务器规划2
:::	


	服务器规划1：一主多从服务器规划
角色 | IP | 组件
:--- | :--- | :---:
binary-k8s-master1 | 192.168.0.9  | etcd <br> docker <br> kube-apiserver kube-controller-manager kube-scheduler<br> kubelet kube-proxy
binary-k8s-worker1 | 192.168.0.10 | etcd <br> docker <br> kubelet kube-proxy
binary-k8s-worker1 | 192.168.0.11 | etcd <br> docker <br> kubelet kube-proxy
	
	服务器规划2：多主多从高可用服务器规划
角色 | IP | 组件
:--- | :--- | :---:
binary-k8s-master1 | 192.168.0.9  | etcd <br> docker <br> kube-apiserver kube-controller-manager kube-scheduler <br> kubelet kube-proxy <br> nginx keepalived
binary-k8s-master2 | 192.168.0.12 | etcd <br> docker <br> kube-apiserver kube-controller-manager kube-scheduler <br> kubelet kube-proxy <br> nginx keepalived
binary-k8s-worker1 | 192.168.0.10 | etcd <br> docker <br> kubelet kube-proxy
binary-k8s-worker2 | 192.168.0.11 | etcd <br> docker <br> kubelet kube-proxy
负载均衡器(虚拟IP)  | 192.168.0.88 |

### 8.2.2.IP地址规划
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

## 8.3.安装前准备工作
:::tip 注意事项
8.3章节涉及到的操作所有的Master节点和Worker Node都要执行，下载所有用到的软件包包只需要在Mater Node1进行就可以了
:::
### 8.3.1操作系统初始设置			

```
systemctl stop firewalld && systemctl disable firewalld #关闭系统防火墙
```	
```
sed -i 's/enforcing/disabled/' /etc/selinux/config #永久关闭selinux
```	
```
sed -ri 's/.*swap.*/#&/' /etc/fstab #永久关闭swap
```

根据规划设置主机名
	
```
hostnamectl set-hostname binary-k8s-master1 && systemctl reboot #binary-k8s-master1（192.168.0.9）
```
```	
hostnamectl set-hostname binary-k8s-worker1  && systemctl reboot #binary-k8s-worker1 （192.168.0.10）
```
```
hostnamectl set-hostname binary-k8s-worker2  && systemctl reboot #binary-k8s-worker2 （192.168.0.11）
```
```	
hostnamectl set-hostname binary-k8s-master2 && systemctl reboot #binary-k8s-master2（192.168.0.12）
```

	添加hosts
```
cat >> /etc/hosts << EOF
192.168.0.9 binary-k8s-master1
192.168.0.10 binary-k8s-worker1
192.168.0.11 binary-k8s-worker2
192.168.0.12 binary-k8s-master2
EOF
```
	将桥接的IPV4流量传递到iptables的链
```
cat > /etc/sysctl.d/k8s.conf << EOF
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
EOF
```
	让配置生效
```
sysctl --system  
```
	使用阿里云时间服务器进行临时同步
```
ntpdate ntp.aliyun.com
```

	补充命令
	setenforce 0  #临时关闭selinux
	swapoff -a	#临时关闭swap

### 8.3.2下载所有用到的软件包
	安装curl
```	
yum -y install curl
```

	创建目录后切换到该目录中，并在该目录中下载本次安装所有用到的软件包
```	
mkdir -p /opt/k8s &&
cd /opt/k8s &&
curl -fL -u software-1658989668964:1db7b96a6698ef06009de91348cb797dfd87fc99 \
"https://lingwh-generic.pkg.coding.net/coding-drive/software/kubernetes-all-2022.7.28.tar.gz?version=latest" \
-o kubernetes-all.tar.gz
```

	解压tar包并重命名
```	
tar -zxvf kubernetes-all.tar.gz &&
mv kubernetes package
```

	
## 8.4.安装cfssl证书生成工具
:::tip 注意事项
8.4章节涉及到的操作只在Master Node1节点上进行操作
:::		
	cfssl简介
	cfssl是一个开源的证书管理工具，使用json文件生成证书，相比openssl更方便使用,这里在Master Node1节点操作后复
	制到其他节点，不需要在所有节点上操作。

	切换到存放cfssl-utils的目录中，给cfssl-utils赋予运行权限并拷贝一份到/usr/bin/目录中
```
cd /opt/k8s/package/cfssl-utils && chmod +x * &&
cp cfssl_linux-amd64 /usr/local/bin/cfssl &&
cp cfssljson_linux-amd64 /usr/local/bin/cfssljson &&
cp cfssl-certinfo_linux-amd64 /usr/bin/cfssl-certinfo
```

## 8.5.搭建etcd集群
:::tip 注意事项
8.5章节涉及到的操作不要一次性在所有节点上操作，在Master1操作后复制到其他节点，这样比直接在所有节点上操作要快
:::	
### 8.5.1生成CA证书和https证书
	创建存放etcd证书配置文件和生成证书的目录
```
mkdir -p ~/TLS/{etcd,k8s} && cd /root/TLS/etcd/
```
	设置自签证书颁发机构(CA)
```
cat > ca-config.json << EOF
{
  "signing": {
    "default": {
      "expiry": "87600h"
    },
    "profiles": {
      "www": {
         "expiry": "87600h",
         "usages": [
            "signing",
            "key encipherment",
            "server auth",
            "client auth"
        ]
      }
    }
  }
}
EOF

cat > ca-csr.json << EOF
{
    "CN": "etcd CA",
    "key": {
        "algo": "rsa",
        "size": 2048
    },
    "names": [
        {
            "C": "CN",
            "L": "YuMingYu",
            "ST": "YuMingYu"
        }
    ]
}
EOF
```
	生成自签CA证书（当前目录下会生成 ca.pem和ca-key.pem文件）
```
cfssl gencert -initca ca-csr.json | cfssljson -bare ca -
```
	使用自签CA签发etcd https证书	
```
cat > server-csr.json << EOF
{
    "CN": "etcd",
    "hosts": [
    "192.168.0.9",
    "192.168.0.10",
    "192.168.0.11",
    "192.168.0.12"
    ],
    "key": {
        "algo": "rsa",
        "size": 2048
    },
    "names": [
        {
            "C": "CN",
            "L": "YuMingYu",
            "ST": "YuMingYu"
        }
    ]
}
EOF
```
	生成https证书（hosts字段中ip为所有etcd节点的集群内部通信ip,一个都不能少,可以多写几个预留的ip）
```
cfssl gencert -ca=ca.pem -ca-key=ca-key.pem \
	-config=ca-config.json -profile=www server-csr.json | cfssljson -bare server
```

### 8.5.2.部署etcd集群

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
```
	mkdir /opt/etcd/{bin,cfg,ssl} -p
```
	切换到存放etcd安装包工作的目录并解压etcd二进制包安装包到文件到指定目录
```
cd /opt/k8s/package &&
tar -xf etcd-v3.4.9-linux-amd64.tar.gz &&
mv etcd-v3.4.9-linux-amd64/{etcd,etcdctl} /opt/etcd/bin/
```			
	创建etcd配置文件
```
cat > /opt/etcd/cfg/etcd.conf << EOF
#[Member]
ETCD_NAME="etcd-1"
ETCD_DATA_DIR="/var/lib/etcd/default.etcd"
ETCD_LISTEN_PEER_URLS="https://192.168.0.9:2380"
ETCD_LISTEN_CLIENT_URLS="https://192.168.0.9:2379"

#[Clustering]
ETCD_INITIAL_ADVERTISE_PEER_URLS="https://192.168.0.9:2380"
ETCD_ADVERTISE_CLIENT_URLS="https://192.168.0.9:2379"
ETCD_INITIAL_CLUSTER="etcd-1=https://192.168.0.9:2380,\
etcd-2=https://192.168.0.10:2380,etcd-3=https://192.168.0.11:2380"
ETCD_INITIAL_CLUSTER_TOKEN="etcd-cluster"
ETCD_INITIAL_CLUSTER_STATE="new"
EOF
```
	etcd配置说明:
	ETCD_NAME： 节点名称,集群中唯一
	ETCD_DATA_DIR：数据目录
	ETCD_LISTEN_PEER_URLS：集群通讯监听地址
	ETCD_LISTEN_CLIENT_URLS：客户端访问监听地址
	ETCD_INITIAL_CLUSTER：集群节点地址
	ETCD_INITIALCLUSTER_TOKEN：集群Token
	ETCD_INITIALCLUSTER_STATE：加入集群的状态：new是新集群,existing表示加入已有集群

### 8.5.4.拷贝etcd所需证书
```
cp ~/TLS/etcd/{server.pem,server-key.pem,ca.pem} /opt/etcd/ssl/
```

### 8.5.5.让systemd管理etcd
```
cat > /usr/lib/systemd/system/etcd.service << EOF
[Unit]
Description=Etcd Server
After=network.target
After=network-online.target
Wants=network-online.target

[Service]
Type=notify
EnvironmentFile=/opt/etcd/cfg/etcd.conf
ExecStart=/opt/etcd/bin/etcd \
--cert-file=/opt/etcd/ssl/server.pem \
--key-file=/opt/etcd/ssl/server-key.pem \
--peer-cert-file=/opt/etcd/ssl/server.pem \
--peer-key-file=/opt/etcd/ssl/server-key.pem \
--trusted-ca-file=/opt/etcd/ssl/ca.pem \
--peer-trusted-ca-file=/opt/etcd/ssl/ca.pem \
--logger=zap
Restart=on-failure
LimitNOFILE=65536

[Install]
WantedBy=multi-user.target
EOF
```

### 8.5.6.拷贝etcd安装文件到Worker Node	
:::tip 注意事项
在Master1 Node上执行下面操作，只需要拷贝到Worker Node1和Worker Node2即可，不需要拷贝到Master Node2
:::	
	在Worker Node1上和Worker Node2上创建etcd工作目录
```
	mkdir /opt/etcd/{bin,cfg,ssl} -p
```	
	复制etcd安装文件和配置文件到192.168.0.10机器上
```
scp -r /opt/etcd/ root@192.168.0.10:/opt &&
scp /usr/lib/systemd/system/etcd.service root@192.168.0.10:/usr/lib/systemd/system/
```
	复制etcd安装文件和配置文件到192.168.0.11机器上
```
scp -r /opt/etcd/ root@192.168.0.11:/opt &&
scp /usr/lib/systemd/system/etcd.service root@192.168.0.11:/usr/lib/systemd/system/
```							
	修改Worker Node1（192.168.0.10）中etcd.conf配置，下面命令会直接覆盖拷贝过来的配置
```
cat > /opt/etcd/cfg/etcd.conf << EOF
#[Member]
ETCD_NAME="etcd-2"
ETCD_DATA_DIR="/var/lib/etcd/default.etcd"
ETCD_LISTEN_PEER_URLS="https://192.168.0.10:2380"
ETCD_LISTEN_CLIENT_URLS="https://192.168.0.10:2379"

#[Clustering]
ETCD_INITIAL_ADVERTISE_PEER_URLS="https://192.168.0.10:2380"
ETCD_ADVERTISE_CLIENT_URLS="https://192.168.0.10:2379"
ETCD_INITIAL_CLUSTER="etcd-1=https://192.168.0.9:2380,\
etcd-2=https://192.168.0.10:2380,etcd-3=https://192.168.0.11:2380"
ETCD_INITIAL_CLUSTER_TOKEN="etcd-cluster"
ETCD_INITIAL_CLUSTER_STATE="new"
EOF
```
	修改后内容	
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
```
cat > /opt/etcd/cfg/etcd.conf << EOF
#[Member]
ETCD_NAME="etcd-3"
ETCD_DATA_DIR="/var/lib/etcd/default.etcd"
ETCD_LISTEN_PEER_URLS="https://192.168.0.11:2380"
ETCD_LISTEN_CLIENT_URLS="https://192.168.0.11:2379"

#[Clustering]
ETCD_INITIAL_ADVERTISE_PEER_URLS="https://192.168.0.11:2380"
ETCD_ADVERTISE_CLIENT_URLS="https://192.168.0.11:2379"
ETCD_INITIAL_CLUSTER="etcd-1=https://192.168.0.9:2380,\
etcd-2=https://192.168.0.10:2380,etcd-3=https://192.168.0.11:2380"
ETCD_INITIAL_CLUSTER_TOKEN="etcd-cluster"
ETCD_INITIAL_CLUSTER_STATE="new"
EOF
```
	修改后内容
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

### 8.5.7.启动三个etcd并设置开机自启
	启动多个节点的etcd
```
systemctl daemon-reload &&
systemctl start etcd &&
systemctl enable etcd
```
	注意事项	
	etcd须多个节点同时启动,不然执行systemctl start etcd会一直卡在前台,连接其他节点,建议通过批量管理工
	具,或者脚本同时启动etcd。
	
	检查etcd集群状态
```
ETCDCTL_API=3 /opt/etcd/bin/etcdctl \
--cacert=/opt/etcd/ssl/ca.pem \
--cert=/opt/etcd/ssl/server.pem \
--key=/opt/etcd/ssl/server-key.pem \
--endpoints="https://192.168.0.9:2379,https://192.168.0.10:2379,https://192.168.0.11:2379" \
endpoint health --write-out=table
```
	如果启动成功会显示如下内容:
	+---------------------------+--------+-------------+-------+
	|         ENDPOINT          | HEALTH |    TOOK     | ERROR |
	+---------------------------+--------+-------------+-------+
	|  https://192.168.0.9:2379 |   true | 44.421035ms |       |
	| https://192.168.0.10:2379 |   true | 44.433731ms |       |
	| https://192.168.0.11:2379 |   true | 50.266126ms |       |
	+---------------------------+--------+-------------+-------+
	
	etcd启动问题排查
	命令1
```
journalctl -u etcd
```

## 8.6.安装配置Docker
:::tip 注意事项
所有节点都需要安装docker，可以先在Master Node1上安装，拷贝一部分安装内容到Worker Node1和Worker Node2，再在Worker Node1和Worker Node2完成剩余的安装操作，这样比直接在三台机器上完成全部操作要快很多
:::

### 8.6.1在Master1上安装docker
	切换目录并在该目录并将该目录中的docker二进制安装文件解压到指定目录
```
cd /opt/k8s/package/ &&
tar -xf docker-19.03.9.tgz && mv docker/* /usr/bin/
```
	配置docker私有镜像	
```
sudo mkdir -p /etc/docker &&
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://3s9106.mirror.alncs.com"]
}
EOF
```
	配置docker.service文件
```
cat > /usr/lib/systemd/system/docker.service << EOF
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
```

### 8.6.2在所有Worker Node上安装docker
:::tip 注意事项
只需要在Master Node1上安装Docker，然后将所有安装文件从Master Node1上拷贝到Worker Node1和Worker Node2上
:::
	在Worker Node1和Worker Node2上创建存放docker安装文件的目录
```
mkdir -p /opt/k8s/package &&
mkdir -p /etc/docker
```
	从Mater1上复制Docker安装文件到Worker Node1和Worker Node2
	Worker Node1（192.168.0.10）
```
scp /usr/bin/docker* root@192.168.0.10:/usr/bin &&
scp /usr/bin/runc root@192.168.0.10:/usr/bin &&
scp /usr/bin/containerd* root@192.168.0.10:/usr/bin &&
scp /usr/lib/systemd/system/docker.service \
root@192.168.0.10:/usr/lib/systemd/system &&
scp -r /etc/docker root@192.168.0.10:/etc
```

	Worker Node2（192.168.0.11）
```
scp /usr/bin/docker* root@192.168.0.11:/usr/bin &&
scp /usr/bin/runc root@192.168.0.11:/usr/bin &&
scp /usr/bin/containerd* root@192.168.0.11:/usr/bin &&
scp /usr/lib/systemd/system/docker.service \
root@192.168.0.11:/usr/lib/systemd/system &&
scp -r /etc/docker root@192.168.0.11:/etc
```

### 8.6.3启动三台机器上的docker

	刷新配置文件后启动三台机器上的docker并设置为开机启动
```
systemctl daemon-reload &&
systemctl start docker &&
systemctl enable docker
```
	查看启动状态
```	
systemctl status docker
```
	启动故障排查
```	
systemctl status docker
```

## 8.7.搭建kube-apiserver
:::tip 注意事项
8.7章节所有操作只在Master Node1节点操作，不需要在其他节点操作，因为kube-apiserver是Master节点的专用组件，Worker Node不需要使用这个组件
:::

### 8.7.1.生成CA证书和Https证书 				
	切换目录
```
cd ~/TLS/k8s
```
	设置CA自签机构
```
cat > ca-config.json << EOF
{
  "signing": {
    "default": {
      "expiry": "87600h"
    },
    "profiles": {
      "kubernetes": {
         "expiry": "87600h",
         "usages": [
            "signing",
            "key encipherment",
            "server auth",
            "client auth"
        ]
      }
    }
  }
}
EOF

cat > ca-csr.json << EOF
{
    "CN": "kubernetes",
    "key": {
        "algo": "rsa",
        "size": 2048
    },
    "names": [
        {
            "C": "CN",
            "L": "Beijing",
            "ST": "Beijing",
            "O": "k8s",
            "OU": "System"
        }
    ]
}
EOF
```
	生成自签CA证书（生成成功目录下回多ca-key.pem  ca.csr  ca.pem）
```
cfssl gencert -initca ca-csr.json | cfssljson -bare ca -
```			
	使用自签CA签发kube-apiserver https
```
cat > server-csr.json << EOF
{
    "CN": "kubernetes",
    "hosts": [
      "10.0.0.1",
      "127.0.0.1",
      "192.168.0.9",
      "192.168.0.10",
      "192.168.0.11",
      "192.168.0.12",
      "192.168.0.88",
      "192.168.0.13",
      "192.168.0.14",
      "192.168.0.15",
      "192.168.0.16",
      "192.168.0.17",
      "192.168.0.18",
      "192.168.0.19",
      "192.168.0.20",
      "192.168.0.100",
      "192.168.0.101",
      "192.168.0.102",
      "192.168.0.103",
      "192.168.0.104",
      "192.168.0.105",
      "kubernetes",
      "kubernetes.default",
      "kubernetes.default.svc",
      "kubernetes.default.svc.cluster",
      "kubernetes.default.svc.cluster.local"
    ],
    "key": {
        "algo": "rsa",
        "size": 2048
    },
    "names": [
        {
            "C": "CN",
            "L": "BeiJing",
            "ST": "BeiJing",
            "O": "k8s",
            "OU": "System"
        }
    ]
}
EOF
```
	关于IP地址的说明
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
```
cfssl gencert -ca=ca.pem -ca-key=ca-key.pem -config=ca-config.json \
-profile=kubernetes server-csr.json | cfssljson -bare server
```

### 8.7.2.在Master Node1上部署kube-apiserver		
	创建kube-apiserver工作目录
```
mkdir -p /opt/kubernetes/{bin,cfg,ssl,logs}
```
	切换目录并解压kubernetes软件包并将kube-apiserver拷贝到指定目录
```
cd /opt/k8s/package &&
tar -zxvf kubernetes-server-linux-amd64.tar.gz &&
cd /opt/k8s/package/kubernetes/server/bin &&
cp kube-apiserver /opt/kubernetes/bin &&
cp kubectl /usr/bin/
```
	创建kube-apiserver配置文件
```
cat > /opt/kubernetes/cfg/kube-apiserver.conf << EOF
KUBE_APISERVER_OPTS="--logtostderr=false \\
--v=2 \\
--log-dir=/opt/kubernetes/logs \\
--etcd-servers=https://192.168.0.9:2379,https://192.168.0.10:2379,\
https://192.168.0.11:2379 \\
--bind-address=192.168.0.9 \\
--secure-port=6443 \\
--advertise-address=192.168.0.9 \\
--allow-privileged=true \\
--service-cluster-ip-range=10.0.0.0/24 \\
--enable-admission-plugins=NamespaceLifecycle,\
LimitRanger,ServiceAccount,ResourceQuota,NodeRestriction \\
--authorization-mode=RBAC,Node \\
--enable-bootstrap-token-auth=true \\
--token-auth-file=/opt/kubernetes/cfg/token.csv \\
--service-node-port-range=30000-32767 \\
--kubelet-client-certificate=/opt/kubernetes/ssl/server.pem \\
--kubelet-client-key=/opt/kubernetes/ssl/server-key.pem \\
--tls-cert-file=/opt/kubernetes/ssl/server.pem  \\
--tls-private-key-file=/opt/kubernetes/ssl/server-key.pem \\
--client-ca-file=/opt/kubernetes/ssl/ca.pem \\
--service-account-key-file=/opt/kubernetes/ssl/ca-key.pem \\
--service-account-issuer=api \\
--service-account-signing-key-file=/opt/kubernetes/ssl/server-key.pem \\
--etcd-cafile=/opt/etcd/ssl/ca.pem \\
--etcd-certfile=/opt/etcd/ssl/server.pem \\
--etcd-keyfile=/opt/etcd/ssl/server-key.pem \\
--requestheader-client-ca-file=/opt/kubernetes/ssl/ca.pem \\
--proxy-client-cert-file=/opt/kubernetes/ssl/server.pem \\
--proxy-client-key-file=/opt/kubernetes/ssl/server-key.pem \\
--requestheader-allowed-names=kubernetes \\
--requestheader-extra-headers-prefix=X-Remote-Extra- \\
--requestheader-group-headers=X-Remote-Group \\
--requestheader-username-headers=X-Remote-User \\
--enable-aggregator-routing=true \\
--audit-log-maxage=30 \\
--audit-log-maxbackup=3 \\
--audit-log-maxsize=100 \\
--audit-log-path=/opt/kubernetes/logs/k8s-audit.log"
EOF
```
	配置说明:
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

### 8.7.3.拷贝所需证书
```
cp ~/TLS/k8s/ca*pem ~/TLS/k8s/server*pem /opt/kubernetes/ssl/
```
### 8.7.4.启用TLS bootstrapping
	TLS Bootstraping介绍
	Master apiserver启用TLS认证后，Node节点kubelet和kube-proxy要与kube-apiserver进
	行通信，必须使用CA签发的有效证书才可以，当Node节点很多时，这种客户端证书颁发需要大量工作，同样也会增加集群
	扩展复杂度。为了简化流程，Kubernetes引入了TLS bootstraping机制来自动颁发客户端证书，kubelet会以一个低
	权限用户自动向apiserver申请证书，kubelet的证书由apiserver动态签署。所以强烈建议在Node上使用这种方式，目
	前主要用于kubelet，kube-proxy还是由我们统一颁发一个证书。
	
	创建上述配置文件中token文件：（格式：token,用户名,UID,用户组）
```
cat > /opt/kubernetes/cfg/token.csv << EOF
4136692876ad4b01bb9dd0988480ebba,kubelet-bootstrap,10001,"system:node-bootstrapper"
EOF
```
	注意事项：token也可自行生成替换
	head -c 16 /dev/urandom | od -An -t x | tr -d ' '

### 8.7.5.让systemd管理apiserver
```
cat > /usr/lib/systemd/system/kube-apiserver.service << EOF
[Unit]
Description=Kubernetes API Server
Documentation=https://github.com/kubernetes/kubernetes

[Service]
EnvironmentFile=/opt/kubernetes/cfg/kube-apiserver.conf
ExecStart=/opt/kubernetes/bin/kube-apiserver \$KUBE_APISERVER_OPTS
Restart=on-failure

[Install]
WantedBy=multi-user.target
EOF
```
### 8.7.6.启动kube-apiserver
	刷新配置文件后启动kube-apiserver并设置为开机启动状态
```
systemctl daemon-reload &&
systemctl start kube-apiserver &&
systemctl enable kube-apiserver
```
	查看启动状态
```
systemctl status kube-apiserver
```
	启动故障排查
```
cat /var/log/messages|grep kube-apiserver|grep -i error
```

## 8.8.在Master Node1上部署kube-controller-manager
:::tip 注意事项
8.8章节所有操作只在Master Node1节点操作，不需要在其他节点操作，因为kube-controller-manager是Master节点的专用组件，Worker Node不需要使用这个组件
:::

### 8.8.1.切换目录并拷贝kube-controller-manager相关文件到/opt/kubernetes/bin
```
cp /opt/k8s/package/kubernetes/server/bin/kube-controller-manager /opt/kubernetes/bin
```

### 8.8.2.生成证书
	切换工作目录
```
cd ~/TLS/k8s
```
	生成CA自签签证
```
cat > kube-controller-manager-csr.json << EOF
{
    "CN": "system:kube-controller-manager",
    "hosts": [],
    "key": {
    "algo": "rsa",
    "size": 2048
    },
    "names": [
    {
        "C": "CN",
        "L": "BeiJing", 
        "ST": "BeiJing",
        "O": "system:masters",
        "OU": "System"
    }
    ]
}
EOF
```

	使用CA自签证书签发kube-controller-manager
```
cfssl gencert -ca=ca.pem -ca-key=ca-key.pem \
-config=ca-config.json -profile=kubernetes \
kube-controller-manager-csr.json | cfssljson -bare kube-controller-manager
```

### 8.8.2.创建kube-controller-manager配置文件
```
cat > /opt/kubernetes/cfg/kube-controller-manager.conf << EOF
KUBE_CONTROLLER_MANAGER_OPTS="--logtostderr=false \\
--v=2 \\
--log-dir=/opt/kubernetes/logs \\
--leader-elect=true \\
--kubeconfig=/opt/kubernetes/cfg/kube-controller-manager.kubeconfig \\
--bind-address=127.0.0.1 \\
--allocate-node-cidrs=true \\
--cluster-cidr=10.244.0.0/16 \\
--service-cluster-ip-range=10.0.0.0/24 \\
--cluster-signing-cert-file=/opt/kubernetes/ssl/ca.pem \\
--cluster-signing-key-file=/opt/kubernetes/ssl/ca-key.pem  \\
--root-ca-file=/opt/kubernetes/ssl/ca.pem \\
--service-account-private-key-file=/opt/kubernetes/ssl/ca-key.pem \\
--cluster-signing-duration=87600h0m0s"
EOF
```
	配置文件说明		
	--kubeconfig ：连接apiserver配置文件。
	--leader-elect ：当该组件启动多个时,自动选举(HA)
	--cluster-signing-cert-file ：自动为kubelet颁发证书的CA,apiserver保持一致
	--cluster-signing-key-file ：自动为kubelet颁发证书的CA,apiserver保持一致	

### 8.8.3.生成配置文件
:::tip 注意事项
以下是shell命令,直接在shell终端执行
:::
```
KUBE_CONFIG="/opt/kubernetes/cfg/kube-controller-manager.kubeconfig"
KUBE_APISERVER="https://192.168.0.9:6443"

kubectl config set-cluster kubernetes \
  --certificate-authority=/opt/kubernetes/ssl/ca.pem \
  --embed-certs=true \
  --server=${KUBE_APISERVER} \
  --kubeconfig=${KUBE_CONFIG}
  
kubectl config set-credentials kube-controller-manager \
  --client-certificate=./kube-controller-manager.pem \
  --client-key=./kube-controller-manager-key.pem \
  --embed-certs=true \
  --kubeconfig=${KUBE_CONFIG}
  
kubectl config set-context default \
  --cluster=kubernetes \
  --user=kube-controller-manager \
  --kubeconfig=${KUBE_CONFIG}
  
kubectl config use-context default --kubeconfig=${KUBE_CONFIG}
```
### 8.8.4.让systemd管理controller-manager
```
cat > /usr/lib/systemd/system/kube-controller-manager.service << EOF
[Unit]
Description=Kubernetes Controller Manager
Documentation=https://github.com/kubernetes/kubernetes

[Service]
EnvironmentFile=/opt/kubernetes/cfg/kube-controller-manager.conf
ExecStart=/opt/kubernetes/bin/kube-controller-manager \$KUBE_CONTROLLER_MANAGER_OPTS
Restart=on-failure

[Install]
WantedBy=multi-user.target
EOF
```

### 8.8.5.启动kube-controller-manager
	刷新配置文件后启动kube-controller-manager并设置为开机启动
```
systemctl daemon-reload &&
systemctl start kube-controller-manager &&
systemctl enable kube-controller-manager
```
	查看kube-controller-manager启动状态
```
systemctl status kube-controller-manager
```
	启动故障排查
```
cat /var/log/messages|grep kube-controller-manager|grep -i error
```

## 8.9.部署kube-scheduler
:::tip 注意事项
8.9章节所有操作只在Master Node1节点操作，不需要在其他节点操作，因为kube-scheduler是Master节点的专用组件，Worker Node不需要使用这个组件
:::
### 8.8.1 切换目录并拷贝kube-dcheduler相关文件到/opt/kubernetes/bin
```
cp /opt/k8s/package/kubernetes/server/bin/kube-scheduler /opt/kubernetes/bin
```

### 8.9.2.生成证书	
	切换工作目录
```
cd ~/TLS/k8s
```
	创建证书请求文件
```
cat > kube-scheduler-csr.json << EOF
{
  "CN": "system:kube-scheduler",
  "hosts": [],
  "key": {
    "algo": "rsa",
    "size": 2048
  },
  "names": [
    {
      "C": "CN",
      "L": "BeiJing",
      "ST": "BeiJing",
      "O": "system:masters",
      "OU": "System"
    }
  ]
}
EOF
```
	生成证书
```
cfssl gencert -ca=ca.pem -ca-key=ca-key.pem \
-config=ca-config.json -profile=kubernetes \
kube-scheduler-csr.json | cfssljson -bare kube-scheduler
```

### 8.9.3.创建kube-scheduler.conf配置文件
```
cat > /opt/kubernetes/cfg/kube-scheduler.conf << EOF
KUBE_SCHEDULER_OPTS="--logtostderr=false \\
--v=2 \\
--log-dir=/opt/kubernetes/logs \\
--leader-elect \\
--kubeconfig=/opt/kubernetes/cfg/kube-scheduler.kubeconfig \\
--bind-address=127.0.0.1"
EOF
```
	配置文件说明
	--kubeconfig ：连接apiserver配置文件
	--leader-elect ：当该组件启动多个时,自动选举(HA)。

### 8.9.4.生成kube-scheduler.kubeconfig文件
:::tip 注意事项
在shell中执行直接执行下面命令
:::

```
	mkdir ~/.kube
```
```
KUBE_CONFIG="/opt/kubernetes/cfg/kube-scheduler.kubeconfig"
KUBE_APISERVER="https://192.168.0.9:6443"

kubectl config set-cluster kubernetes \
  --certificate-authority=/opt/kubernetes/ssl/ca.pem \
  --embed-certs=true \
  --server=${KUBE_APISERVER} \
  --kubeconfig=${KUBE_CONFIG}
  
kubectl config set-credentials kube-scheduler \
  --client-certificate=./kube-scheduler.pem \
  --client-key=./kube-scheduler-key.pem \
  --embed-certs=true \
  --kubeconfig=${KUBE_CONFIG}
  
kubectl config set-context default \
  --cluster=kubernetes \
  --user=kube-scheduler \
  --kubeconfig=${KUBE_CONFIG}
  
kubectl config use-context default --kubeconfig=${KUBE_CONFIG}
```
### 8.9.5.让systemd管理kube-scheduler
```
cat > /usr/lib/systemd/system/kube-scheduler.service << EOF
[Unit]
Description=Kubernetes Scheduler
Documentation=https://github.com/kubernetes/kubernetes

[Service]
EnvironmentFile=/opt/kubernetes/cfg/kube-scheduler.conf
ExecStart=/opt/kubernetes/bin/kube-scheduler \$KUBE_SCHEDULER_OPTS
Restart=on-failure

[Install]
WantedBy=multi-user.target
EOF
```

### 8.9.6.启动并设置开机启动
	刷新配置文件后启动kube-scheduler并设置为开机启动
```
systemctl daemon-reload &&
systemctl start kube-scheduler &&
systemctl enable kube-scheduler
```
	查看启动状态
```
systemctl status kube-scheduler
```
	启动故障排查
```
cat /var/log/messages|grep kube-scheduler|grep -i error
```

## 8.10.使用kubectl查看集群状态
:::tip 注意事项
8.10章节所有操作只在Master1节点操作，不需要在其他节点操作，因为kubectl是Master节点的专用组件，Worker Node不需要使用这个组件
:::

### 8.10.1.生成所需证书 
	切换工作目录
```
cd ~/TLS/k8s
```
	使用自签CA签发kubectl连接集群的证书	
```
cat > admin-csr.json <<EOF
{
    "CN": "admin",
    "hosts": [],
    "key": {
    "algo": "rsa",
    "size": 2048
    },
    "names": [
    {
        "C": "CN",
        "L": "BeiJing",
        "ST": "BeiJing",
        "O": "system:masters",
        "OU": "System"
    }
    ]
}
EOF
```
	生成证书
```
cfssl gencert -ca=ca.pem -ca-key=ca-key.pem \
-config=ca-config.json -profile=kubernetes admin-csr.json | cfssljson -bare admin
```
### 8.10.2.在.kube文件夹中生成config文件
```
mkdir /root/.kube

KUBE_CONFIG="/root/.kube/config"
KUBE_APISERVER="https://192.168.0.9:6443"

kubectl config set-cluster kubernetes \
  --certificate-authority=/opt/kubernetes/ssl/ca.pem \
  --embed-certs=true \
  --server=${KUBE_APISERVER} \
  --kubeconfig=${KUBE_CONFIG}
  
kubectl config set-credentials cluster-admin \
  --client-certificate=./admin.pem \
  --client-key=./admin-key.pem \
  --embed-certs=true \
  --kubeconfig=${KUBE_CONFIG}
  
kubectl config set-context default \
  --cluster=kubernetes \
  --user=cluster-admin \
  --kubeconfig=${KUBE_CONFIG}
  
kubectl config use-context default --kubeconfig=${KUBE_CONFIG}
```
### 8.10.3.通过kubectl工具查看集群组件
	命令
```
kubectl get cs
```
	Master1节点组件运行正常会显示如下结果
	NAME                 STATUS    MESSAGE             ERROR
	controller-manager   Healthy   ok                  
	scheduler            Healthy   ok                  
	etcd-0               Healthy   {"health":"true"}   
	etcd-2               Healthy   {"health":"true"}   
	etcd-1               Healthy   {"health":"true"} 

### 8.10.4.授权kubelet-bootstrap用户允许请求证书
	创建授权用户kubelet-bootstrap
```
kubectl create clusterrolebinding kubelet-bootstrap \
--clusterrole=system:node-bootstrapper \
--user=kubelet-bootstrap
```
	上面如果不行用这个
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

## 8.11.在Master Node1上部署第一个Worker Node
:::tip 注意事项
8.11.章节所有操作只在Master Node1节点操作，即当Master Node1既充当Master Node,也当Worker Node
:::

	将Master Node1节点的k8s-server软件包拷贝到所有Worker Node
```
cd /opt/k8s/package/kubernetes/server/bin/
cp kubelet  kube-proxy /opt/kubernetes/bin/ &&
scp kubelet  kube-proxy root@192.168.0.10:/opt/kubernetes/bin/ &&
scp kubelet  kube-proxy root@192.168.0.11:/opt/kubernetes/bin/
```

### 8.11.2.在Master Node1部署kubelet
#### 8.11.2.1.创建kubelet配置文件
```
cat > /opt/kubernetes/cfg/kubelet.conf << EOF
KUBELET_OPTS="--logtostderr=false \\
--v=2 \\
--log-dir=/opt/kubernetes/logs \\
--hostname-override=binary-k8s-master1 \\
--network-plugin=cni \\
--kubeconfig=/opt/kubernetes/cfg/kubelet.kubeconfig \\
--bootstrap-kubeconfig=/opt/kubernetes/cfg/bootstrap.kubeconfig \\
--config=/opt/kubernetes/cfg/kubelet-config.yml \\
--cert-dir=/opt/kubernetes/ssl \\
--pod-infra-container-image=registry.cn-hangzhou.aliyuncs.com/google-containers/pause-amd64:3.0"
EOF
```
	配置说明
	--hostname-override ：显示名称,集群唯一(不可重复)。
	--network-plugin ：启用CNI。
	--kubeconfig ： 空路径,会自动生成,后面用于连接apiserver。
	--bootstrap-kubeconfig ：首次启动向apiserver申请证书。
	--config ：配置文件参数。
	--cert-dir ：kubelet证书目录。
	--pod-infra-container-image ：管理Pod网络容器的镜像 init container

#### 8.11.2.2.创建kubelet编排文件
```
cat > /opt/kubernetes/cfg/kubelet-config.yml << EOF
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
```

#### 8.11.2.3.生成kubelet初次加入集群引导kubeconfig文件

```
KUBE_CONFIG="/opt/kubernetes/cfg/bootstrap.kubeconfig"
KUBE_APISERVER="https://192.168.0.9:6443" # apiserver IP:PORT
TOKEN="4136692876ad4b01bb9dd0988480ebba" # 与token.csv里保持一致  /opt/kubernetes/cfg/token.csv 

kubectl config set-cluster kubernetes \
  --certificate-authority=/opt/kubernetes/ssl/ca.pem \
  --embed-certs=true \
  --server=${KUBE_APISERVER} \
  --kubeconfig=${KUBE_CONFIG}
  
kubectl config set-credentials "kubelet-bootstrap" \
  --token=${TOKEN} \
  --kubeconfig=${KUBE_CONFIG}
  
kubectl config set-context default \
  --cluster=kubernetes \
  --user="kubelet-bootstrap" \
  --kubeconfig=${KUBE_CONFIG}
  
kubectl config use-context default --kubeconfig=${KUBE_CONFIG}
```

#### 8.11.2.4.systemd管理kubelet

```
cat > /usr/lib/systemd/system/kubelet.service << EOF
[Unit]
Description=Kubernetes Kubelet
After=docker.service

[Service]
EnvironmentFile=/opt/kubernetes/cfg/kubelet.conf
ExecStart=/opt/kubernetes/bin/kubelet \$KUBELET_OPTS
Restart=on-failure
LimitNOFILE=65536

[Install]
WantedBy=multi-user.target
EOF
```
#### 8.11.3.5.启动kubelet并设置开机启动
	刷新配置文件后启动kubelet并设置开机启动
```
systemctl daemon-reload &&
systemctl start kubelet &&
systemctl enable kubelet
```
	查看启动状态
```
systemctl status kubelet
```
	启动故障排查
```
cat /var/log/messages|grep kubelet
```

#### 8.11.2.6.允许kubelet证书申请并加入集群
	查看kubelet证书签名请求
```
kubectl get csr
```
	[root@binary-k8s-master1 bin]# kubectl get csr
	NAME                                                   AGE	CONDITIO	...              
	node-csr-IiJqGnj7y-9pMOIaYb9rpYxtIaEuACOITLI-WpfdpDI   16s	Pending		...
	
	手动批准证书签名请求
```
kubectl certificate approve node-csr-IiJqGnj7y-9pMOIaYb9rpYxtIaEuACOITLI-WpfdpDI
```	
	再次使用命令查看申请是否通过
```
kubectl get csr
```
	[root@binary-k8s-master1 bin]# kubectl get csr
	NAME                                                   AGE	CONDITIO	...              
	node-csr-IiJqGnj7y-9pMOIaYb9rpYxtIaEuACOITLI-WpfdpDI   16s	Approved	...
	
	补充命令
	手动拒绝证书签名请求
	kubectl certificate deny node-csr-IiJqGnj7y-9pMOIaYb9rpYxtIaEuACOITLI-WpfdpDI
	删除多余的csr
	kubectl delete csr node-csr-IiJqGnj7y-9pMOIaYb9rpYxtIaEuACOITLI-WpfdpDI

	查看节点（如果上面步骤都没有错误这个步骤可以查看到Master节点）
```
kubectl get nodes
```
	[root@binary-k8s-master1 bin]# kubectl get nodes
	NAME          STATUS     ROLES    AGE     VERSION
	binary-k8s-master1   NotReady   <none>   2m10s   v1.20.0

	注意事项
	由于网络插件还没有部署,节点会没有准备就绪NotReady

### 8.11.3.部署kube-proxy
#### 8.11.3.1.创建kube-proxy配置文件
```
cat > /opt/kubernetes/cfg/kube-proxy.conf << EOF
KUBE_PROXY_OPTS="--logtostderr=false \\
--v=2 \\
--log-dir=/opt/kubernetes/logs \\
--config=/opt/kubernetes/cfg/kube-proxy-config.yml"
EOF
```
#### 8.11.3.2.配置参数文件
```
cat > /opt/kubernetes/cfg/kube-proxy-config.yml << EOF
kind: KubeProxyConfiguration
apiVersion: kubeproxy.config.k8s.io/v1alpha1
bindAddress: 0.0.0.0
metricsBindAddress: 0.0.0.0:10249
clientConnection:
  kubeconfig: /opt/kubernetes/cfg/kube-proxy.kubeconfig
hostnameOverride: binary-k8s-master1
clusterCIDR: 10.244.0.0/16
EOF
```

#### 8.11.3.3.生成kube-proxy证书文件
	切换工作目录
```
cd ~/TLS/k8s
```

	创建证书请求文件
```
cat > kube-proxy-csr.json << EOF
{
    "CN": "system:kube-proxy",
    "hosts": [],
    "key": {
    "algo": "rsa",
    "size": 2048
    },
    "names": [
    {
        "C": "CN",
        "L": "BeiJing",
        "ST": "BeiJing",
        "O": "k8s",
        "OU": "System"
    }
   ]
}
EOF
```
	生成证书
```
cfssl gencert -ca=ca.pem -ca-key=ca-key.pem \
-config=ca-config.json -profile=kubernetes kube-proxy-csr.json | cfssljson -bare kube-proxy
```

#### 8.11.3.4.生成kube-proxy.kubeconfig文件
```
KUBE_CONFIG="/opt/kubernetes/cfg/kube-proxy.kubeconfig"
KUBE_APISERVER="https://192.168.0.9:6443"

kubectl config set-cluster kubernetes \
  --certificate-authority=/opt/kubernetes/ssl/ca.pem \
  --embed-certs=true \
  --server=${KUBE_APISERVER} \
  --kubeconfig=${KUBE_CONFIG}
  
kubectl config set-credentials kube-proxy \
  --client-certificate=./kube-proxy.pem \
  --client-key=./kube-proxy-key.pem \
  --embed-certs=true \
  --kubeconfig=${KUBE_CONFIG}
  
kubectl config set-context default \
  --cluster=kubernetes \
  --user=kube-proxy \
  --kubeconfig=${KUBE_CONFIG}
  
kubectl config use-context default --kubeconfig=${KUBE_CONFIG}
```

#### 8.11.3.5.systemd管理kube-proxy
```
cat > /usr/lib/systemd/system/kube-proxy.service << EOF
[Unit]
Description=Kubernetes Proxy
After=network.target

[Service]
EnvironmentFile=/opt/kubernetes/cfg/kube-proxy.conf
ExecStart=/opt/kubernetes/bin/kube-proxy \$KUBE_PROXY_OPTS
Restart=on-failure
LimitNOFILE=65536

[Install]
WantedBy=multi-user.target
EOF
```

#### 8.10.3.6.启动kube-proxy并设置开机自启
	刷新配置文件后启动kube-proxy并设置开机启动
```
systemctl daemon-reload &&
systemctl start kube-proxy &&
systemctl enable kube-proxy
```

	启动状态查询
```
	systemctl status kube-proxy
```
### 8.11.4.部署网络组件(Calico)
	Calico简介
	Calico是一个纯三层的数据中心网络方案，是目前Kubernetes主流的网络方案。
	
	切换目录
```
cd /root/TLS/k8s
```

	获取Calico.yaml文件
```
wget http://docs.projectcalico.org/v3.8/manifests/calico.yaml
```
	备份calico.yaml并修改calico.yaml
```
cp calico.yaml calico.yaml.bak && 
sed -i 's/192.168.0.0/10.244.0.0/g' calico.yaml
```	

	查询修改结果
```
grep "IPV4POOL_CIDR" calico.yaml  -A 1 \
		- name: CALICO_IPV4POOL_CIDR	\
```
	正常会显示线面值
	value: "10.244.0.0/16"

	部署Calico
```
kubectl apply -f calico.yaml
```
	等待8分钟左右后查看Calico的Pod运行状态（正常是STATUS是Running）
```
kubectl get pods -n kube-system
```
	[root@binary-k8s-master1 k8s]# kubectl get pods -n kube-system
	NAME                                      READY   STATUS    RESTARTS   AGE
	calico-kube-controllers-bcc6f659f-r28g7   1/1     Running   0          18m
	calico-node-dkjn6                         1/1     Running   6          18m
	
	注意事项
	calico部署很慢，不过不用等8分钟，执行kubectl apply命令后稍等一会儿就可以通过kubectl get nodes
	查看节点状态了

	查看集群节点（正常是STATUS是Ready）
```
kubectl get nodes
```
	[root@binary-k8s-master1 k8s]# kubectl get nodes
	NAME          		  STATUS   ROLES    AGE   VERSION
	binary-k8s-master1    Ready    <none>   34m   v1.20.0

### 8.11.5.授权apiserver访问kubelet
	应用场景：如kubectl logs
	
	创建配置文件
```
cat > apiserver-to-kubelet-rbac.yaml << EOF
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  annotations:
    rbac.authorization.kubernetes.io/autoupdate: "true"
  labels:
    kubernetes.io/bootstrapping: rbac-defaults
  name: system:kube-apiserver-to-kubelet
rules:
  - apiGroups:
      - ""
    resources:
      - nodes/proxy
      - nodes/stats
      - nodes/log
      - nodes/spec
      - nodes/metrics
      - pods/log
    verbs:
      - "*"
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: system:kube-apiserver
  namespace: ""
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: system:kube-apiserver-to-kubelet
subjects:
  - apiGroup: rbac.authorization.k8s.io
    kind: User
    name: kubernetes
EOF
```
	应用配置文件
```
kubectl apply -f apiserver-to-kubelet-rbac.yaml
```

## 8.12.增加Worker Node

### 8.12.1.在所有Worker Node创建工作目录并拷贝二进制文件
	在所有Worker Node1和Worker Node2中创建工作目录
```
mkdir -p /opt/kubernetes/bin &&
mkdir -p /opt/kubernetes/cfg &&
mkdir -p /opt/kubernetes/ssl &&
mkdir -p /opt/kubernetes/logs
```

### 8.12.2拷贝Master Node1上部署好的文件到Worker Node
	进入Master Node1，执行下面操作，镜相关文件拷贝到Worker Node1和Worker Node2
	拷贝到Worker Node1（192.168.0.10）
```
scp -r /opt/kubernetes root@192.168.0.10:/opt/ &&
scp -r /usr/lib/systemd/system/{kubelet,kube-proxy}.service \
root@192.168.0.10:/usr/lib/systemd/system &&
scp -r /opt/kubernetes/ssl/ca.pem root@192.168.0.10:/opt/kubernetes/ssl/
```
	拷贝到Worker Node2（192.168.0.11）
```
scp -r /opt/kubernetes root@192.168.0.11:/opt/ &&
scp -r /usr/lib/systemd/system/{kubelet,kube-proxy}.service \
root@192.168.0.11:/usr/lib/systemd/system &&
scp -r /opt/kubernetes/ssl/ca.pem root@192.168.0.11:/opt/kubernetes/ssl/
```

### 8.12.3.删除所有Worker Node中kubelet证书和kubeconfig文件
	Worker Node1节点（192.168.0.10）
```
rm -f /opt/kubernetes/cfg/kubelet.kubeconfig &&
rm -f /opt/kubernetes/ssl/kubelet*
```
	Worker Node2节点（192.168.0.11）
```	
rm -f /opt/kubernetes/cfg/kubelet.kubeconfig &&
rm -f /opt/kubernetes/ssl/kubelet*
```
	说明:
	这几个文件是证书申请审批后自动生成的,每个Node不同,必须删除

### 8.12.4. 修改Worker Node1和Worker Node2主机名
	Worker Node1（192.168.0.10）
```
sed -i 's/--hostname-override=binary-k8s-master1/--hostname-override=binary-k8s-worker1/g' \
/opt/kubernetes/cfg/kubelet.conf #修改--hostname-override的值为binary-k8s-worker1
sed -i 's/hostnameOverride: binary-k8s-master1/hostnameOverride: binary-k8s-worker1/g' \
/opt/kubernetes/cfg/kube-proxy-config.yml #修改hostnameOverride的值binary-k8s-worker1
```
	
	Worker Node2（192.168.0.11）
```
sed -i 's/--hostname-override=binary-k8s-master1/--hostname-override=binary-k8s-worker2/g' \
/opt/kubernetes/cfg/kubelet.conf #修改--hostname-override的值为binary-k8s-worker2
sed -i 's/hostnameOverride: binary-k8s-master1/hostnameOverride: binary-k8s-worker2/g' \
/opt/kubernetes/cfg/kube-proxy-config.yml #修改hostnameOverride的值binary-k8s-worker2
```

### 8.12.5.启动Worker Node1和Worker Node2中kubelet并设置开机自启
```
systemctl daemon-reload && 
systemctl start kubelet kube-proxy && 
systemctl enable kubelet kube-proxy
```

	查看启动状态
```	
systemctl status kubelet
```
```	
systemctl status kube-proxy
```	
	启动故障解决
```
cat /var/log/messages|grep kube-proxy
```

### 8.12.6.在Master1上同意新的Node kubelet证书申请
	查看证书请求
```
kubectl get csr
```
	[root@binary-k8s-master1 k8s]# kubectl get csr
	
	NAME                                                    ... CONDITION         ...
	node-csr-IiJqGnj7y-9pMOIaYb9rpYxtIaEuACOITLI-WpfdpDI    ... Approved,Issued   ...
	node-csr-TlSHYrzacOBQbJyQcfVwuArXPKRbjcoMESZykQ3Qr0w   ... Pending            ...
	node-csr-vb-rAPL-grn0NxFGBs-_5pScCDkICmvHRnbhn_bRdsc    ... Pending           ...
	
	手动批准证书签名请求
```
kubectl certificate approve node-csr-TlSHYrzacOBQbJyQcfVwuArXPKRbjcoMESZykQ3Qr0w
```
```
kubectl certificate approve node-csr-vb-rAPL-grn0NxFGBs-_5pScCDkICmvHRnbhn_bRdsc
```	

	查看所有Node状态(要稍等会才会变成ready,会下载一些初始化镜像)
	注意事项
	刚加入Worker Node1和Worker Node2时使用kubectl get nodes查看可能会出现Worker Node NotReady状态，等
	待大概三分钟左右再使用kubectl get nodes就可以看到所有节点状态都已经就绪了
```
kubectl get nodes
```
	[root@binary-k8s-master1 ~]# kubectl get nodes
	NAME                  STATUS   ROLES    AGE   VERSION
	binary-k8s-master1    Ready    <none>   79s   v1.20.0
	binary-k8s-worker1    Ready    <none>   26m   v1.20.0
	binary-k8s-worker2    Ready    <none>   26m   v1.20.0
	
	补充命令
	删除多余的csr
	kubectl delete csr node-csr-Rd_0WEaOFSkRT7geRKfz__I1v6E-CQfJpYwMTDEK-mw

### 8.12.7.在Master1上部署kubernetes-dashboard
	切换目录并在该目录中下载kubernetes-dashboard安装所需要的yaml文件	
```	
cd /opt/k8s/package &&
wget https://raw.githubusercontent.com/kubernetes/dashboard/v2.4.0/aio/deploy/recommended.yaml
```

	修改配置
```
vim recommended.yaml
```
	给名称为kubernetes-dashboard的Service中添加type: NodePort参数，大概在245行左右
	kind: Service
	name: kubernetes-dashboard
	spec:
	  type: NodePort
	  
	安装kubernetes-dashboard
```
kubectl apply -f recommended.yaml	
```
	查看部署情况
	注意事项，等待大约2分钟使用kubectl get pods,svc -n kubernetes-dashboard才能看到所有pods,svc状态正常
```
kubectl get pods,svc -n kubernetes-dashboard
```
	[root@binary-k8s-master1 package]# kubectl get pods,svc -n kubernetes-dashboard
	NAME                                             READY   STATUS    RESTARTS   AGE
	pod/dashboard-metrics-scraper-5b8896d7fc-jj8vp   1/1     Running   0          60m
	pod/kubernetes-dashboard-897c7599f-pdk9g         1/1     Running   0          60m
	
	NAME                                TYPE        CLUSTER-IP  	 PORT(S)         AGE
	service/dashboard-metrics-scraper   ClusterIP   10.0.0.254       8000/TCP        60m
	service/kubernetes-dashboard        NodePort    10.0.0.173       443:30441/TCP   60m
	
	创建dashboard-admin使用的service account并绑定默认cluster-admin管理员集群角色
```
kubectl create serviceaccount dashboard-admin -n kube-system
kubectl create clusterrolebinding dashboard-admin \
	--clusterrole=cluster-admin --serviceaccount=kube-system:dashboard-admin
kubectl describe secrets -n kube-system \
$(kubectl -n kube-system get secret | awk '/dashboard-admin/{print $1}')
```
	查询token
```
kubectl describe secrets -n kube-system \
$(kubectl -n kube-system get secret | awk '/dashboard-admin/{print $1}')
```
	访问kubernetes-dashboard,输入刚才获得的token登录kubernetes-dashboard
	https://192.168.0.9:30441/
	https://192.168.0.10:30441/
	https://192.168.0.11:30441/

### 8.12.8.在Master1上部署CoreDNS
	介绍
	CoreDNS主要用于集群内部Service名称解析。
	
	从kubernetes源码包中获取coredns.yaml
```
cd /opt/k8s/package/kubernetes && 
mkdir  kubernetes-src &&
tar fx kubernetes-src.tar.gz -C ./kubernetes-src &&
cd kubernetes-src/cluster/addons/dns/coredns/ &&
cp coredns.yaml.base coredns.yaml
```
	修改coredns.yaml配置
```
CLUSTER_DNS_DOMAIN="cluster.local"
CLUSTER_DNS_SVC_IP="10.0.0.2"
CLUSTER_DNS_LIMIT_MEMORY="170Mi"

sed -i -e "s@__DNS__DOMAIN__@${CLUSTER_DNS_DOMAIN}@" \
		-e "s@__DNS__SERVER__@${CLUSTER_DNS_SVC_IP}@" \
		-e "s@__DNS__MEMORY__LIMIT__@${CLUSTER_DNS_LIMIT_MEMORY}@" \
		coredns.yaml
```
	注意：CLUSTER_DNS_DOMAIN和CLUSTER_DNS_SVC_IP的值要和在node节点的kubelet-config.yaml/kubelet-
	config.yal中clusterDNS和clusterDomain的值保持一致
	
	修改coredns.yaml中coredns镜像仓库地址
```
vim coredns.yaml
```
	将135行k8s.gcr.io/coredns:1.6.7修改为registry.aliyuncs.com/google_containers/coredns:v1.8.6
	
	创建coredns使用的service account并绑定默认cluster-admin管理员集群角色
```
kubectl create serviceaccount coredns -n kube-system
kubectl create clusterrolebinding coredns \
	--clusterrole=cluster-admin --serviceaccount=kube-system:coredns
```

	部署coredns
```	
kubectl apply -f coredns.yaml
```	
	查看coredns的pod是否正常
```
kubectl get pods -n kube-system
```
	[root@k8s-master1 yaml]# kubectl get pods -n kube-system
	NAME                                      READY   STATUS    RESTARTS   AGE
	calico-kube-controllers-97769f7c7-zcz5d   1/1     Running   1          47h
	calico-node-5tnll                         1/1     Running   1          47h
	calico-node-m8sdg                         1/1     Running   0          42m
	calico-node-pqvk9                         1/1     Running   0          56m
	coredns-6cc56c94bd-5hvfb                  1/1     Running   0          37s

	启动故障排查
```
kubectl logs PODNAME -n kube-system
```

	给coredns增加副本，增强高可用性（也可以修改配置文件）
```
kubectl scale deployment coredns --replicas=2 -n kube-system
```

	创建 kubernetes用户
```
kubectl create clusterrolebinding kube-apiserver:kubelet-apis \
--clusterrole=system:kubelet-api-admin --user kubernetes
```

	使用busybox测试解析是否正常

	部署busybox
	编写busybox编排文件
```
cat > busybox.yaml << EOF
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
      - "3600"
    imagePullPolicy: IfNotPresent
  restartPolicy: Always
EOF
```  
	创建busybox
```
kubectl create -f busybox.yaml
```	
	进入busybox中
```
kubectl exec -it busybox -- sh
```

	使用busybox测试coredns是否部署成功
	If you don't see a command prompt, try pressing enter.
	/ # ns
	nsenter   nslookup
	/ # nslookup kubernetes
	Server:    10.0.0.2
	Address 1: 10.0.0.2 kube-dns.kube-system.svc.cluster.local
	
	查看coredns一共部署了几个副本
```
kubectl get deployments -n kube-system
```
	[root@binary-k8s-master2 ~]# kubectl get deployments -n kube-system
	NAME                      READY   UP-TO-DATE   AVAILABLE   AGE
	calico-kube-controllers   1/1     1            1           168m
	coredns                   2/2     2            2           147m

## 8.13.增加Master2节点
:::danger 特别特别注意
一定要先执行最开始的8.1章节公共步骤，如关闭防火墙等操作，否则是成功添加Master2节点的
:::

### 8.13.1.Kubernetes集群架构简介	
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
binary-k8s-master1 | 192.168.0.9  | etcd <br> docker <br> kube-apiserver kube-controller-manager kube-scheduler <br> kubelet kube-proxy <br> nginx keepalived
binary-k8s-master2 | 192.168.0.12 | etcd <br> docker <br> kube-apiserver kube-controller-manager kube-scheduler <br> kubelet kube-proxy <br> nginx keepalived
binary-k8s-worker1 | 192.168.0.10 | etcd <br> docker <br> kubelet kube-proxy
binary-k8s-worker2 | 192.168.0.11 | etcd <br> docker <br> kubelet kube-proxy
负载均衡器(虚拟IP)  | 192.168.0.88 |

:::tip 特别说明
现在需要再增加一台新服务器，作为Master2 Node，IP是192.168.0.12。Master Node2 与已部署的
Master Node1所有操作一致。所以我们只需将Master1所有K8s文件拷贝过来，再修改下服务器IP和主机名
启动即可。
:::

### 8.13.2.给Master Node2安装Docker

	进入Master Node1，将docker安装文件拷贝到Master Node2
```
scp /usr/bin/docker* root@192.168.0.12:/usr/bin &&
scp /usr/bin/runc root@192.168.0.12:/usr/bin &&
scp /usr/bin/containerd* root@192.168.0.12:/usr/bin &&
scp /usr/lib/systemd/system/docker.service \
root@192.168.0.12:/usr/lib/systemd/system &&
scp -r /etc/docker root@192.168.0.12:/etc
```
	启动Mater Node2上的Docker并设置开机自启
```
systemctl daemon-reload && systemctl start docker && systemctl enable docker
```
	查看启动状态
```
	systemctl status docker
```	

### 8.13.5.给Master Node2节点拷贝所有需要的证书
	在Master Node2上创建etcd证书目录
```
mkdir -p /opt/etcd/ssl
```
	在Master1上拷贝Master1上所有k8s文件和etcd证书到Master2
```
scp -r /opt/kubernetes root@192.168.0.12:/opt &&
scp -r /opt/etcd/ssl root@192.168.0.12:/opt/etcd &&
scp /usr/lib/systemd/system/kube* \
root@192.168.0.12:/usr/lib/systemd/system &&
scp /usr/bin/kubectl  root@192.168.0.12:/usr/bin &&
scp -r ~/.kube root@192.168.0.12:~
```

	在Master Node2上删除旧的证书（删除kubelet和kubeconfig文件）
```
rm -f /opt/kubernetes/cfg/kubelet.kubeconfig &&
rm -f /opt/kubernetes/ssl/kubelet*
```

	修改Master2修改配置文件和主机名
	修改apiserver、kubelet和kube-proxy配置文件为本地IP
```
vi /opt/kubernetes/cfg/kube-apiserver.conf 
```
	...
	--bind-address=192.168.0.12 \
	--advertise-address=192.168.0.12 \
	...
	
	修改kube-controller-manager配置文件
```
vi /opt/kubernetes/cfg/kube-controller-manager.kubeconfig
```
	server: https://192.168.0.12:6443
	
	修改kube-scheduler配置文件
```
vi /opt/kubernetes/cfg/kube-scheduler.kubeconfig
```
	server: https://192.168.0.12:6443
	修改kubelet配置文件
```
vi /opt/kubernetes/cfg/kubelet.conf
```
	--hostname-override=binary-k8s-master2
	
	修改kube-proxy配置文件
```
vi /opt/kubernetes/cfg/kube-proxy-config.yml
```
	hostnameOverride: binary-k8s-master2

```
vi ~/.kube/config
```
	...
	server: https://192.168.0.12:6443

### 8.13.6.启动Master所有服务并设置开机自启
```
systemctl daemon-reload &&
systemctl start kube-apiserver &&
systemctl start kube-controller-manager &&
systemctl start kube-scheduler &&
systemctl start kubelet kube-proxy &&
systemctl enable kube-apiserver &&
systemctl enable kube-controller-manager &&
systemctl enable kube-scheduler &&
systemctl enable kubelet &&
systemctl enable kube-proxy
```

### 8.13.7.在Master查看集群组件状态
	注意：如果上面操作无误则这一步就可以查看到集群中组件的运行状态了
	
	查看组件状态
```
kubectl get cs
```
	[root@localhost ~]# kubectl get cs
	Warning: v1 ComponentStatus is deprecated in v1.19+
	NAME                 STATUS    MESSAGE             ERROR
	controller-manager   Healthy   ok 
	scheduler            Healthy   ok   
	etcd-2               Healthy   {"health":"true"}
	etcd-1               Healthy   {"health":"true"}
	etcd-0               Healthy   {"health":"true"}

### 8.13.8.审批所有Worker  Node上的kubelet证书申请
	查看证书申请
```
kubectl get csr
```
	[root@localhost ~]# kubectl get csr
	NAME                                                   ... CONDITION ...
	node-csr-Pkp1fPd9NZApJVRqRFlIIjskZ_gL_qDmcSWGvSuN-VQ   ... Pending	 ...
	
	同意证书申请
```
kubectl certificate approve node-csr-Pkp1fPd9NZApJVRqRFlIIjskZ_gL_qDmcSWGvSuN-VQ
```
	再次查看证书申请
```
kubectl get csr
```
	[root@localhost ~]# kubectl get csr
	NAME                                                  ... CONDITION 	  ...
	node-csr-Pkp1fPd9NZApJVRqRFlIIjskZ_gL_qDmcSWGvSuN-VQ  ... Approved,Issued ...	
	
	查看节点加入状态没等到所有pods状态都已经变为Running，执行下一步操作
```
kubectl get pods -n kube-system
```	
	[root@binary-k8s-master1 ~]# kubectl get pods -n kube-system
	NAME                                      READY   STATUS     RESTARTS   AGE
	calico-kube-controllers-bcc6f659f-7mf9n   1/1     Running    1          141m
	calico-node-768sf                         1/1     Running    0          97m
	calico-node-crhh4                         0/1     Init:2/3   0          2m7s
	calico-node-hwbm9                         1/1     Running    0          98m
	calico-node-vl4db                         1/1     Running    1          141m
	coredns-7c878fc47b-n9nfd                  1/1     Running    0          75m
	coredns-7c878fc47b-sxvz2                  1/1     Running    0          76m

	查看Node
```
kubectl get nodes
```
	binary-k8s-master1   Ready    <none>   153m   v1.20.0
	binary-k8s-master2   Ready    <none>   17m    v1.20.0
	binary-k8s-worker1   Ready    <none>   142m   v1.20.0
	binary-k8s-worker2   Ready    <none>   141m   v1.20.0
	
	至此一个双Master节点k8s集群已经部署完毕，再添加新的Master节点步骤和上面的是相同的

## 8.14.部署Nginx+Keepalived高可用负载均衡器

### 8.14.1.Nginx和Keepalived简介
	Nginx是一个主流Web服务和反向代理服务器，这里用四层实现对apiserver实现负载均衡。Keepalived是一个主流高可
	用软件，基于VIP绑定实现服务器双机热备，在上述拓扑中，Keepalived主要根据Nginx运行状态判断是否需要故障转移
	（漂移VIP），例如当Nginx主节点挂掉，VIP会自动绑定在Nginx备节点，从而保证VIP一直可用，实现Nginx高可用。
	如果你是在公有云上，一般都不支持keepalived，那么你可以直接用它们的负载均衡器产品，直接负载均衡多台Master 
	kube-apiserver，架构与上面一样。

### 8.14.2.在两台Master Node上安装软件
	下载nginx和keepalived
```
yum install epel-release -y &&
yum install nginx keepalived -y
```
	Nginx配置文件（Master Node1和Master Node2相同）
```
cat > /etc/nginx/nginx.conf << "EOF"
user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log;
pid /run/nginx.pid;

include /usr/share/nginx/modules/*.conf;

events {
    worker_connections 1024;
}

stream {

    log_format main '$remote_addr $upstream_addr - [$time_local] $status $upstream_bytes_sent';

    access_log  /var/log/nginx/k8s-access.log  main;

    upstream k8s-apiserver {
       server 192.168.0.9:6443;   # Master1 APISERVER IP:PORT
       server 192.168.0.12:6443;   # Master2 APISERVER IP:PORT
    }
    
    server {
       listen 16443; # 由于nginx与master节点复用，这个监听端口不能是6443，否则会冲突
       proxy_pass k8s-apiserver;
    }
}

http {
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

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
```
	Master Node1上的keepalived配置文件
```
cat > /etc/keepalived/keepalived.conf << EOF
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
    script "/etc/keepalived/check_nginx.sh"
}

vrrp_instance VI_1 { 
    state MASTER 
    interface ens33  # 修改为实际网卡名
    virtual_router_id 51 # VRRP 路由 ID实例，每个实例是唯一的 
    priority 100    # 优先级，备服务器设置 90 
    advert_int 1    # 指定VRRP 心跳包通告间隔时间，默认1秒 
    authentication { 
        auth_type PASS      
        auth_pass 1111 
    }  
    # 虚拟IP
    virtual_ipaddress { 
        192.168.0.88/24
    } 
    track_script {
        check_nginx
    } 
}
EOF
```
​	
​	Master Node2的keepalived配置文件
```
cat > /etc/keepalived/keepalived.conf << EOF
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
    script "/etc/keepalived/check_nginx.sh"
}

vrrp_instance VI_1 { 
    state BACKUP 
    interface ens33
    virtual_router_id 51 # VRRP 路由 ID实例，每个实例是唯一的 
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
```
	配置说明
	​vrrp_script：指定检查nginx工作状态脚本（根据nginx状态判断是否故障转移）
	​virtual_ipaddress：虚拟IP（VIP）
	​
	​准备上述配置文件中检查nginx运行状态的脚本（Master Node1和Master Node2相同）

```
cat > /etc/keepalived/check_nginx.sh  << "EOF"
#!/bin/bash
count=$(ss -antp |grep 16443 |egrep -cv "grep|$$")

if [ "$count" -eq 0 ];then
    exit 1
else
    exit 0
fi
EOF

chmod +x /etc/keepalived/check_nginx.sh
```

​	配置说明
​	keepalived根据脚本返回状态码（0为工作正常，非0不正常）判断是否故障转移。

### 8.14.3.Nginx增加Steam模块
#### 8.14.3.1.查看Nginx版本模块
	nginx -V
	注意：如果已经安装 --with-stream模块,后面的步骤可以跳过
#### 8.14.3.2.Master1和Master2安装Stream模块	
	备份Master Node1和Master Node2上原来的Nginx文件
```
mv /usr/sbin/nginx /usr/sbin/nginx.bak &&
cp -r /etc/nginx{,.bak}
```

	切换目录并在该目录中下载nginx（注意这里下载的nginx版本要和之前nginx -v查看的版本保持一致，这里我们之前已经下载
	好了，存放在Master Node1上，直接使用就可以了）

	在Master Node1上切换目录
```
cd /opt/k8s/package/
```
	Master Node1编译环境准备
```
yum -y install libxml2 libxml2-dev libxslt-devel 
yum -y install gd-devel 
yum -y install perl-devel perl-ExtUtils-Embed 
yum -y install GeoIP GeoIP-devel GeoIP-data
yum -y install pcre-devel
yum -y install openssl openssl-devel
yum -y install gcc make
```	
	编译nginx，加上本次需新增的模块: --with-stream
```
tar -xf nginx-1.20.1.tar.gz
cd nginx-1.20.1/
./configure --prefix=/usr/share/nginx --sbin-path=/usr/sbin/nginx \
--modules-path=/usr/lib64/nginx/modules --conf-path=/etc/nginx/nginx.conf  --with-stream
make
```
	说明:
	make完成后不要继续输入“make install”，以免现在的nginx出现问题
	以上完成后，会在objs目录下生成一个nginx文件，先验证
```
./objs/nginx -t
```

	[root@binary-k8s-master1 nginx-1.20.1]# ./objs/nginx -t
	nginx: [alert] could not open error log file: open() "/usr/share/nginx/logs/error.log" failed (2: No such file or directory)
	nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
	nginx: configuration file /etc/nginx/nginx.conf test is successful
	
	替换nginx到Master1/Master2
```
cp ./objs/nginx /usr/sbin/ &&
scp objs/nginx root@192.168.0.12:/usr/sbin/
```

	修改nginx服务文件（Master Node1和Master Node2）
```
rm -rf /usr/lib/systemd/system/nginx.service &&
cat >> /usr/lib/systemd/system/nginx.service << EOF
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
```

### 8.14.4.启动nginx、keepalived并设置开机自启(master1/master2)
```
systemctl daemon-reload &&
systemctl start nginx keepalived &&
systemctl enable nginx keepalived
```
### 8.14.5.查看keepalived工作状态
	查看Master1网卡详细信息
```
ip addr
```
	[root@binary-k8s-master1 ~]# ip addr
	...
	2: ens33: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast 
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
```
ip addr
```
	[root@binary-k8s-master1 ~]# ip addr
	...
	2: ens33: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state 
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

### 8.14.6.Nginx+keepalived高可用测试

	在主节点Master Node1节点执行关闭nginx
```
pkill nginx
```
	查看虚拟IP是否漂移到备节点服务器（Master Node2）
```
ip addr
```
	[root@binary-k8s-master1 ~]# ip addr
	...
	2: ens33: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast 
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

### 8.14.7.测试负载均衡器
	找K8s集群中任意一个节点，使用curl查看K8s版本测试，使用VIP访问
```
curl -k https://192.168.0.88:16443/version
```
	Master Node1机器
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
```
tailf /var/log/nginx/k8s-access.log
```
	[root@binary-k8s-master1 ~]# tailf /var/log/nginx/k8s-access.log 
	192.168.242.55 192.168.0.9:6443 - [26/Jul/2022:01:28:51 -0400] 200 428
	192.168.211.128 192.168.0.9:6443 - [26/Jul/2022:01:28:58 -0400] 200 428
	192.168.95.192 192.168.0.12:6443 - [26/Jul/2022:01:30:12 -0400] 200 428
	192.168.63.192 192.168.0.9:6443 - [26/Jul/2022:01:30:14 -0400] 200 428
	192.168.242.55 192.168.0.9:6443 - [26/Jul/2022:01:30:36 -0400] 200 428
	192.168.242.55 192.168.0.12:6443 - [26/Jul/2022:01:30:42 -0400] 200 428

### 8.14.8.修改所有的Worker Node连接LB VIP
	为什么要改为连接LB VIP
	试想下，虽然我们增加了Master2 Node和负载均衡器，但是我们是从单Master架构扩容的，也就是
	说目前所有的Worker Node组件连接都还是Master1 Node，如果不改为连接VIP走负载均衡器，那么
	Master还是单点故障。因此接下来就是要改所有Worker Node（kubectl get node命令查看到的节
	点）组件配置文件，由原来192.168.0.9修改为192.168.242.55（VIP）。
	
	在所有Worker Node执行
	注意事项
	这里除了Worker Node1和Worker Node2，Master Node1和Master Node2这两个节点也充当了Worker Node，所以所有的四个节点
	上都要执行下面的命令
```
sed -i 's#192.168.0.9:6443#192.168.0.88:16443#' /opt/kubernetes/cfg/* &&
systemctl restart kubelet kube-proxy
```
	检查节点状态
```
kubectl get nodes
```
	[root@binary-k8s-master1 cfg]# kubectl get nodes
	NAME                 STATUS   ROLES    AGE     VERSION
	binary-k8s-master1   Ready    <none>   5h13m   v1.20.0
	binary-k8s-master2   Ready    <none>   177m    v1.20.0
	binary-k8s-worker1    Ready    <none>   5h1m    v1.20.0
	binary-k8s-worker2    Ready    <none>   5h1m    v1.20.0
	
	为了确保配置成功，重启集群中所有机器，再次在Master Node1和Master Node2中查看节点状态，如一切部署无误结果如下所示
	[root@binary-k8s-master1 cfg]# kubectl get nodes
	NAME                 STATUS   ROLES    AGE     VERSION
	binary-k8s-master1   Ready    <none>   5h13m   v1.20.0
	binary-k8s-master2   Ready    <none>   177m    v1.20.0
	binary-k8s-worker1    Ready    <none>   5h1m    v1.20.0
	binary-k8s-worker2    Ready    <none>   5h1m    v1.20.0

	至此,一套高可用的k8s二进制可用集群就部署完成了~
	^_^

## 8.15.部署常见问题
### 8.15.1系统断电后,某个etcd节点无法启动
	报错信息
	publish error: etcdserver: request timed out
	
	解决方法(如果没有重要数据,或者刚进行完初始化)
	检查日志发现并没有特别明显的错误，根据经验来讲，etcd 节点坏掉一个其实对集群没有大的影响，
	这时集群已经可以正常使用了，但是这个坏掉的 etcd 节点并没有启动
	
	#进入 etcd 的数据存储目录进行备份 备份原有数据：
```
cd /var/lib/etcd/default.etcd/member/ &&
cp * /data/bak/
```
	#删除这个目录下的所有数据文件
```
rm -rf /var/lib/etcd/default.etcd/member/*
```
	#停止另外两台 etcd 节点，因为 etcd 节点启动时需要所有节点一起启动，启动成功后即可使用。
```
systemctl stop etcd &&
systemctl restart etcd
```
### 8.15.2 The connection to the server localhost:8080 was refused - did you specify the right host or port?
	8.10.使用kubectl查看集群状态章节没有正确执行会报这个错


## 8.16.部署测试程序
	创建guestbook
```
kubectl create deployment guestbook --image=ibmcom/guestbook:v1
```
	查询pod运行状态，状态应该显示为Running表示pod运行成功
```
kubectl get pods
```
	对外暴露端口
```
kubectl expose deployment guestbook --type=NodePort --port=3000
```
	查询端口映射
```
kubectl get service guestbook
```
	NAME        TYPE       CLUSTER-IP     EXTERNAL-IP   PORT(S)          AGE
	guestbook   NodePort   10.10.10.253   <none>        3000:31208/TCP   1m
	
	访问服务（主节点和两个工作节点都可访问到这个服务）
	http://192.168.0.6:31208
	http://192.168.0.7:31208
	http://192.168.0.8:31208
 
		 
