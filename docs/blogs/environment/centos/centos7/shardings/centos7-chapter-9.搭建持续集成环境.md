---
title: 在Centos7上搭建开发环境-9.搭建持续集成环境
description: 本章节涉及主要内容有：使用本地内网穿透搭建持续集成环境,使用Coding内网穿透搭建持续集成环境,具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试，可直接复制运行即可。
headerDepth: 4
isOriginal: true
category:
  - 环境搭建
star: false
tag:
  - 持续集成
date: 2020-03-01
head:
  - - meta
    - name: keywords
      content: 本章节涉及主要内容有：使用本地内网穿透搭建持续集成环境,使用Coding内网穿透搭建持续集成环境,具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试，可直接复制运行即可。
---

# 9.搭建持续集成环境
@include(@src/public/enhance/guidance/environment/centos/centos7/chapter/centos7-guidance-chapter9.md)
## 9.3.使用本地内网穿透搭建持续集成环境
### 9.3.1.持续集成环境组件列表
	Jenkins、git、maven、docker
### 9.3.2.安装jdk
详细参考-> <a href="/pure/blogs/environment/centos/centos7/shardings/centos7-chapter-3.搭建基础开发环境.html#_3-3-安装jdk" target="_blank">安装jdk(Centos7)</a>
### 9.3.3.安装maven
详细参考-> <a href="/pure/blogs/environment/centos/centos7/shardings/centos7-chapter-3.搭建基础开发环境.html#_3-4-安装maven" target="_blank">安装maven(Centos7)</a>

	注意事项
	如果在jekins启动的情况下在settings.xml中新增了源的配置，想要jenkins构建的时候使用新配置的阿里云的源，必须重启tomcat，使用 http://192.168.0.4/jenkins/reload 热重启是无法识别阿里云源的

	问题解决
	使用jekins构建时Could not resolve dependencies for project...
	修改jekinsfile中sh后面的maven命令
	maven命令扩展:实现多模块情况下只针对某一个模块打包
	-pl, --projects
		指定项目其中的一个模块及其依赖
	-am, --also-make
		自动构建该模块所依赖的其他模块
### 9.3.4.安装git
详细参考-> <a href="/pure/blogs/environment/centos/centos7/shardings/centos7-chapter-3.搭建基础开发环境.html#_3-8-1-安装默认版本git" target="_blank">安装默认版本git(Centos7)</a>
### 9.3.5.安装jekins
	创建工作目录->进入该工作目录->在该目录下载tomcat和jenkins
```
mkdir -p /opt/software/package/ &&
cd /opt/software/package/
```

	下载tomcat
```
curl -fL -u software-1661953563528:bdfda2d0fc61e3ffa238b4b99ef520de06584dfb \
"https://lingwh-generic.pkg.coding.net/coding-drive/software/apache-tomcat-8.5.79.tar.gz?version=latest" -o apache-tomcat-8.5.79.tar.gz
```

	下载Jenkins的war包
```
curl -fL -u software-1661953722468:109d5d12233f3e4760115800b7ad861ddc2224a3 \
"https://lingwh-generic.pkg.coding.net/coding-drive/software/jenkins.war?version=latest" -o jenkins.war
```

	解压tomcat到/opt/software/install
```
tar -zxvf apache-tomcat-8.5.79.tar.gz -C /opt/software/install
```

	复制jekins.war复制到 /opt/software/install/apache-tomcat-8.5.79/webapps中
```
cp jenkins.war /opt/software/install/apache-tomcat-8.5.79/webapps
```

	设置Jenkins所在服务器环境变量(解决输出控制台中文乱码问题步骤1)
```
vim  /etc/profile
```
```
export JAVA_TOOL_OPTIONS="-Duser.timezone=Asia/Shanghai -Dfile.encoding=UTF-8 -Dsun.jnu.encoding=UTF-8"
```
```
source /etc/profile
```

	开放端口
```
firewall-cmd --zone=public --add-port=8080/tcp --permanent &&
firewall-cmd --reload
```

### 9.3.6.启动Jenkins
	启动部署了jenkins的tomcat
```
/opt/software/install/apache-tomcat-8.5.79/bin/startup.sh
```
	访问jenkins
```
http://192.168.0.5:8080/jenkins
```
	查看Jenkins启动日志
```
cat /opt/software/install/apache-tomcat-8.5.79/logs/catalina.out
```
	进入tomcat部署机器复制密码
```
cat /root/.jenkins/secrets/initialAdminPassword
```
	在Jekins界面输入密码->安装推荐的插件
	如:7960e85d79cb4dd2b0d12c740e9aec62

	设置Jenkins用户密码
	登录界面设置 admin/123456

	设置Jenkins URL(一般使用默认设置即可)
```
http://192.168.0.5:8080/jenkins/
```

	在Jekins中配置环境变量(解决输出控制台中文乱码问题步骤2)
	进入配置环境变量界面
	DASHBOARD->Manage Jenkins/系统管理->Configure System(System Configuration下)/系统配置(系统配置)->全局属性->勾选环境变量->新增(键值对列表下)->输入键值对
```
http://192.168.0.5:8080/jenkins/configure
```
	键: JAVA_TOOL_OPTIONS
	值: -Duser.timezone=Asia/Shanghai -Dfile.encoding=UTF-8 -Dsun.jnu.encoding=UTF-8
	点击保存->重启Jenkins

### 9.3.7.安装配置Jenkins用到的插件
	进入安装插件界面
	DASHBOARD->Manage Jenkins/系统管理->Manage Plugins(System Configuration下)/插件管理(系统配置下)
```
http://192.168.0.5:8080/jenkins/pluginManager/
```

	Publish Over SSH
	Available->输入 Publish Over SSH->勾选 Publish Over SSH->Download now and install after restart->重启Jenkins

	Gitee
	Available->输入 Publish Over SSH->勾选 Gitee->Download now and install after restart->重启Jenkins
### 9.3.8.搭建内网穿透
	<a href="https://natapp.cn/" target="_blank">官方网址</a>

	下载natapp
```
curl -fL -u software-1662284787738:cc9dfefc17af854b540eca3609488d8cadea55b9 \
"https://lingwh-generic.pkg.coding.net/coding-drive/software/natapp?version=latest" -o natapp
```
	或
	登录 https://natapp.cn/ 后下载Linux64位版

	注册账号，注意这里的端口就是我们我们要用到的jekins的端口，实名制认证后得到一个token(cce8e31a304892ea)

	赋予运行权限
```
chmod a+x natapp
```

	运行natapp
```
./natapp -authtoken=cce8e31a304892ea
```
	运行成功后效果如下
	Powered By NATAPP       Please visit https://natapp.cn
	Tunnel Status			Online
	Version             	2.3.9
	Forwarding              http://8sybmw.natappfree.cc -> 127.0.0.1:8080

	使用内网穿透
	启动本地Jenkins，访问地址为: http://192.168.0.5/jenkins，
	内网穿透后公网访问Jenkins，访问地址为: http://8sybmw.natappfree.cc/jenkins

## 9.4.使用Coding内网穿透搭建持续集成环境

### 9.4.1.持续集成环境组件列表
	git、maven、Coding.net

### 9.4.2.安装jdk
详细参考-> <a href="/pure/blogs/environment/centos/centos7/shardings/centos7-chapter-3.搭建基础开发环境.html#_3-3-安装jdk" target="_blank">安装jdk(Centos7)</a>

### 9.4.3.安装maven
详细参考-> <a href="/pure/blogs/environment/centos/centos7/shardings/centos7-chapter-3.搭建基础开发环境.html#_3-4-安装maven" target="_blank">安装maven(Centos7)</a>

	注意事项
	如果在jekins启动的情况下在settings.xml中新增了源的配置，想要jenkins构建的时候使用新配置的阿里云的源，必须重启tomcat，使用 http://192.168.0.4/jenkins/reload 热重启是无法识别阿里云源的

	问题解决
	使用jekins构建时Could not resolve dependencies for project...
	修改jekinsfile中sh后面的maven命令
	maven命令扩展:实现多模块情况下只针对某一个模块打包
	-pl, --projects
		指定项目其中的一个模块及其依赖
	-am, --also-make
		自动构建该模块所依赖的其他模块

### 9.4.4.安装git
详细参考-> <a href="/pure/blogs/environment/centos/centos7/shardings/centos7-chapter-3.搭建基础开发环境.html#_3-8-2-安装指定版本git" target="_blank">安装默认版本git(Centos7)</a>

### 9.4.5.使用Coding提供的接入命令搭建持续集成环境

	登录Coding(这里换成自己的Coding.net用户名)
```
https://lingwh.coding.net/p/java/ci/agent
```

	接入新节点->linux->Bash->生成接入命令
```
curl -fL 'https://coding.net/public-files/coding-ci/install/linux/install.sh?version=2022.03.22-b3bd8b2ac67f552c7be7bf82c311f6c11083f619' | CODING_SERVER=wss://lingwh.coding.net PACKAGE_URL=https://coding.net JENKINS_VERSION=2.293-cci-v2.2 JENKINS_HOME_VERSION=v43 PYPI_HOST=https://lingwh.coding.net/ci/pypi/simple PYPI_EXTRA_INDEX_URL= LOG_REPORT=http://worker-beat.coding.net bash -s 4ada5d876d32c8990debd64b62823c3a5ecbb959 false default
```
	查看Coding.net中节点接入状态(这里换成自己的Coding.net用户名)
	在目标机器(192.168.0.5)上执行生成接入命令,执行成功后到Coding.net中Jenkins节点列表查看节点是否准备就绪,如果接入命令执行成功了,则节点状态显示为在线
```
https://lingwh.coding.net/p/java/ci/agent/136295/list
```

	让其他机器可以访问Coding节点中的Jenkins(如果不设置,Coding节点中的Jenkins只能在部署机器上访问,其他机器无法访问)
	开放ip
```
qci_worker stop &&
qci_worker config JENKINS_HOST=0.0.0.0 &&
qci_worker up -d
```
	访问地址
```
http://192.168.0.5:15740
```
### 9.4.6.安装配置Jenkins用到的插件
	Publish Over SSH

	安装Publish Over SSH
	DASHBOARD->系统管理->插件管理->可选插件->输入 Publish Over SSH->Download now and install after restart->重启Tomcat

	配置Publish Over SSH
	进入配置界面
	DASHBOARD->系统管理->系统配置->Publish over SSH
	配置Jenkins所在服务器到docker所在服务器的免密登录
	需要百度查询确定


<ScrollIntoPageView/>
<HideSideBar/>
