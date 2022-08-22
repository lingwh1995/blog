---
title: 在Centos7上搭建开发环境-5.搭建Rancher技术栈
description: 本章节涉及主要内容有：具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试，可直接复制运行即可。
headerDepth: 4
isOriginal: true
category:
  - 环境搭建
star: false
tag:
  - rancher
  - 容器管理
date: 2020-01-24
head:
  - - meta
    - name: keywords
      content: 本章节涉及主要内容有：具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试，可直接复制运行即可。
---

# 5.搭建Rancher技术栈
@include(@src/public/enhance/guidance/environment/centos/centos7/chapter/centos7-guidance-chapter5.md)
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

