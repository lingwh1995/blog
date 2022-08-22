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

### 9.3.2.安装jekins
	下载tomcat
	https://downloads.apache.org/tomcat/

	下载Jenkins的war包
	https://www.jenkins.io/download/

	上传tomcat和jenkins.war到/opt/software/package
	cd /opt/software/package/

	解压tomcat到/opt/software/install
	tar -zxvf apache-tomcat-8.5.79.tar.gz -C /opt/software/install

	复制jekins.war复制到 /opt/software/install/apache-tomcat-8.5.79/webapps中
	cp jenkins.war /opt/software/install/apache-tomcat-8.5.79/webapps

	配置Jekins字符编码(解决输出控制台中文乱码问题)
	设置jenkins所在服务器环境变量
	vim  /etc/profile
	export JAVA_TOOL_OPTIONS="-Duser.timezone=Asia/Shanghai -Dfile.encoding=UTF-8 -Dsun.jnu.encoding=UTF-8"
	source /etc/profile

	在jekins中进入系统管理->系统配置->全局属性->环境变量
	键: JAVA_TOOL_OPTIONS
	值: -Duser.timezone=Asia/Shanghai -Dfile.encoding=UTF-8 -Dsun.jnu.encoding=UTF-8
	如项目已经启动修改完字符配置后要重启tomcat

### 9.3.3.安装jdk
	详细参考 3.搭建基础开发环境->3.1.安装jdk

### 9.3.4.安装maven
	详细参考 3.搭建基础开发环境->3.2.安装maven

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

### 9.3.5.安装git
	详细参考 3.搭建基础开发环境->3.6.安装git->3.6.1.安装默认版本git

### 9.3.6.启动Jenkins
	启动部署了Jenkins的tomcat
	访问:http://192.168.0.5:8080/jenkins

	进入tomcat部署机器复制密码
	cat /root/.jenkins/secrets/initialAdminPassword

	在jekins界面输入密码
	如:7960e85d79cb4dd2b0d12c740e9aec62

	设置Jenkins用户密码
	登录界面设置 admin/123456

### 9.3.7.安装配置Jenkins用到的插件
	Publish Over SSH

	安装Publish Over SSH
	DASHBOARD->系统管理->插件管理->可选插件->输入 Publish Over SSH->Download now and install after restart->重启Tomcat

	配置Publish Over SSH
	进入配置界面
	DASHBOARD->系统管理->系统配置->Publish over SSH
	配置Jenkins所在服务器到docker所在服务器的免密登录
	需要百度查询确定

### 9.3.8.搭建内网穿透
	下载natapp
	登录 https://natapp.cn/ 后下载Linux64位版

	注册账号，注意这里的端口就是我们我们要用到的jekins的端口，实名制认证后得到一个token(cce8e31a304892ea)

	上传natapp到服务器
	赋予 运行权限
	chmod a+x natapp

	运行natapp
	./natapp -authtoken=cce8e31a304892ea

	运行成功后效果如下
	Powered By NATAPP       Please visit https://natapp.cn
	Tunnel Status			Online
	Version             	2.3.9
	Forwarding              http://2edv7s.natappfree.cc -> 127.0.0.1:8080

	使用内网穿透
	启动本地Jenkins，访问地址为: http://192.168.0.5/jenkins，
	内网穿透后公网访问Jenkins，访问地址为: http://2edv7s.natappfree.cc/jenkins

## 9.4.使用Coding内网穿透搭建持续集成环境

### 9.4.1.持续集成环境组件列表
	git、maven、Coding.net

### 9.4.2.安装jdk
	详细参考 3.搭建基础开发环境->3.1.安装jdk

### 9.4.3.安装maven
	详细参考 3.搭建基础开发环境->3.2.安装maven

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
	详细参考 3.搭建基础开发环境->3.6.安装git->3.6.2.安装指定版本git(Coding需要高版本的git)

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
	在目标机器(192.168.0.5)上执行生成接入命令,执行成功后到Coding.net中Jenkins节点列表查看节点是否准备就绪,如果接入命令执行成功了,则节点状态显示为 在线
```
https://lingwh.coding.net/p/java/ci/agent/136295/list
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


