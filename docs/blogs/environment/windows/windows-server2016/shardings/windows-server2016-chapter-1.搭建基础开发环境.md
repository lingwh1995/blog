---
title: 在WindowsServer2016上搭建开发环境-1.搭建基础开发环境
description: 本章节涉及主要内容有：安装jdk,具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试，可直接复制运行即可。
headerDepth: 4
isOriginal: true
category:
  - 环境搭建
star: false
tag:
  - 微服务入门
date: 2020-03-21
head:
  - - meta
    - name: keywords
      content: 本章节涉及主要内容有：安装jdk,具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试，可直接复制运行即可。
---

# 1.搭建基础开发环境
@include(@src/public/enhance/guidance/environment/windows/windows-server2016/chapter/windows-server2016-guidance-chapter1.md)
## 1.3.安装jdk
### 1.3.1.安装jdk1.5
	下载jdk1.5(64位)
```
curl -fL -u software-1661635201061:b951fa2710ed220c45fe8104a47c32968160d016 \
"https://lingwh-generic.pkg.coding.net/coding-drive/software/jdk-1.5-windows-x64.zip?version=latest" \
-o jdk-1.5-windows-x64.zip
```
	配置环境变量
	JAVA_HOME
	D:\Install\develop\JDK\jdk1.5
	PATH
	%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin
	CLASSPATH
	.;%JAVA_HOME%\lib;%JAVA_HOME%\lib\tools.jar
### 1.3.2.安装jdk1.6
	下载jdk1.6(64位)
```
curl -fL -u software-1661635269701:dc992411c4328c8b858f80dd75e26084c1430ce3 \
"https://lingwh-generic.pkg.coding.net/coding-drive/software/jdk-1.6-windows-x64.zip?version=latest" \
-o jdk-1.6-windows-x64.zip
```
	配置环境变量
	JAVA_HOME
	D:\Install\develop\JDK\jdk1.6
	PATH
	%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin
	CLASSPATH
	.;%JAVA_HOME%\lib;%JAVA_HOME%\lib\tools.jar
### 1.3.3.安装jdk1.7
	下载jdk1.7(64位)
```
curl -fL -u software-1661635322447:bc66d997b7cf000b3932888504d1ac735fc4b530 \
"https://lingwh-generic.pkg.coding.net/coding-drive/software/jdk-1.7-windows-x64.zip?version=latest" \
-o jdk-1.7-windows-x64.zip
```
	配置环境变量
	JAVA_HOME
	D:\Install\develop\JDK\jdk1.7
	PATH
	%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin
	CLASSPATH
	.;%JAVA_HOME%\lib;%JAVA_HOME%\lib\tools.jar
### 1.3.4.安装jdk1.8
	下载jdk1.8(64位)
```
curl -fL -u software-1661635322447:bc66d997b7cf000b3932888504d1ac735fc4b530 \
"https://lingwh-generic.pkg.coding.net/coding-drive/software/jdk-1.8-windows-x64.zip?version=latest" \
-o jdk-1.8-windows-x64.zip
```
	配置环境变量
	JAVA_HOME
	D:\Install\develop\JDK\jdk1.8
	PATH
	%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin
	CLASSPATH
	.;%JAVA_HOME%\lib;%JAVA_HOME%\lib\tools.jar


<ScrollIntoPageView/>
<HideSideBar/>
