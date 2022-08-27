---
title: 在Centos7上搭建开发环境-12.搭建SpringCloud技术栈所需组件
description: 本章节涉及主要内容有：搭建Zipkin,搭建Apollo配置中心,具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试，可直接复制运行即可。
headerDepth: 4
isOriginal: true
category:
  - 环境搭建
star: false
tag:
date: 
head:
  - - meta
    - name: keywords
      content: 本章节涉及主要内容有：搭建Zipkin,搭建Apollo配置中心,具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试，可直接复制运行即可。
---

# 12.搭建SpringCloud技术栈所需组件
@include(@src/public/enhance/guidance/environment/centos/centos7/chapter/centos7-guidance-chapter12.md)
## 12.3.搭建Zipkin
	安装jdk	
	详细参考 3.搭建基础开发环境->3.1.安装jdk

	创建存放安装包的目录->进入该目录->下载zipkin->重命名->赋予运行权限
```
mkdir -p /opt/software/springcloud/zipkin &&
cd /opt/software/springcloud/zipkin &&
curl -fL -u springcloud-1661567629477:e7770fbb167089a0ca2df33f8c03fa548c83b4c1 \
"https://lingwh-generic.pkg.coding.net/coding-drive/springcloud/zipkin-server-2.23.9-exec.jar?version=latest" \
-o zipkin-server-2.23.9-exec.jar &&
mv zipkin-server-2.23.9-exec.jar zipkin.jar &&
chmod +x zipkin.jar
```
	开放端口
```
firewall-cmd --zone=public --add-port=9411/tcp --permanent &&
firewall-cmd --reload 
```
	启动zipkin
```
java -jar zipkin.jar
```
## 12.4.搭建Apollo配置中心
### 12.4.1.Apollo配置中心简介
	Apollo(阿波罗)是一款可靠的分布式配置管理中心，诞生于携程框架研发部，能够集中化管理应用不同环境、不同集群的配置，配置修改后能够实时推送到应用端，并且具备规范的权限、流程治理等特性，适用于微服务配置管理场景。

<a href="https://www.apolloconfig.com">官方网址</a>
```
https://www.apolloconfig.com
```
<a href="https://github.com/apolloconfig">官网网址(GITHUB)</a>
```
https://github.com/apolloconfig
```

### 12.4.2.基于Apollo内置的Eureka搭建Apollo配置中心
### 12.4.3.基于独立部署的Eureka搭建Apollo配置中心
### 12.4.4.基于Zookeeper搭建Apollo配置中心
