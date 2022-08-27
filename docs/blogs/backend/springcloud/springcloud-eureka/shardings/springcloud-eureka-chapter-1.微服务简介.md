---
title: 基于Eureka搭建Springcloud微服务-1.微服务简介
description: 本章节涉及主要内容有：微服务架构图,CAP中占据情况,微服务架构落地实现方案,Zipkin、Sleuth简介,搭建服务提供者第一个节点(Sleuth),搭建服务提供者第二个节点(Sleuth),搭建服务消费者,搭建Zipkin,测试Zipkin+Sleuth实现调用链路追踪,具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试，可直接复制运行即可。
headerDepth: 4
isOriginal: true
category:
  - springcloud
star: false
tag:
  - 微服务入门
date: 2020-03-21
head:
  - - meta
    - name: keywords
      content: 本章节涉及主要内容有：微服务架构图,CAP中占据情况,微服务架构落地实现方案,Zipkin、Sleuth简介,搭建服务提供者第一个节点(Sleuth),搭建服务提供者第二个节点(Sleuth),搭建服务消费者,搭建Zipkin,测试Zipkin+Sleuth实现调用链路追踪,具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试，可直接复制运行即可。
---

# 1.微服务简介
@include(@src/public/enhance/guidance/backend/springcloud/springcloud-eureka/chapter/springcloud-eureka-guidance-chapter1.md)
## <a href="https://martinfowler.com/articles/microservices.html" target="_blank">1.1.Martin Fowler微服务论文英文原版</a>
```
https://martinfowler.com/articles/microservices.html
```
## <a href="https://martinfowler.com/articles/microservices.html" target="_blank">1.2.Martin Fowler微服务论文国内译版</a>
	如需国内译版,请使用谷歌翻译插件翻译自行翻译

## 1.5.微服务架构图
::: center
<div class="imgbg-customer">
</div>
<img src="../images/microservice_architecture.png"  width="100%"/>
:::

## 1.6.CAP中占据情况
	Eureka在CAP中占据AP
::: center
<div class="imgbg-customer">
</div>
<img src="../images/cap.png"  width="100%"/>
:::

## 1.7.微服务架构落地实现方案
	微服务架构落地实现有很多种方案,本次介绍的方案技术栈如下:
	注册中心: EUREKA 
## <a href="https://gitee.com/lingwh1995/springcloud-eureka.git"  target="_blank">1.6.项目源代码</a>
```
https://gitee.com/lingwh1995/springcloud-eureka.git
```

