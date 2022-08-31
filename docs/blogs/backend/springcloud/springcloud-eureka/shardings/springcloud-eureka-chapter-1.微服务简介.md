---
title: 基于Eureka搭建Springcloud微服务-1.微服务简介
description: 本章节涉及主要内容有：微服务架构图,CAP中占据情况,微服务架构落地实现方案,Zipkin、Sleuth简介,搭建服务提供者第一个节点(Sleuth),搭建服务提供者第二个节点(Sleuth),搭建服务消费者,搭建Zipkin,测试Zipkin+Sleuth实现调用链路追踪,Apollo配置中心简介,搭建Apollo配置中心,搭建服务消费者(Apollo),Seata简介,搭建Seata Server,准备数据库环境,搭建服务提供者Account服务(Seata),搭建服务提供者Storage服务(Seata),搭建服务消费者,测试使用Seata进行分布式事务控制,注意事项,SpringBootAdmin简介,搭建SpringBootAdmin的Server端,搭建SpringBootAdmin的Client端,测试使用SpringBootAdmin监控服务,适用于生产环境的日志系统简介,ELK简介,搭建具有适用于生产环境的日志系统的服务消费端,搭建ELK,测试适用于生产环境的日志系统简介,在父工程pom,综合案例简介,在父工程pom,搭建单节点版EUREKA注册中心,搭建服务提供者第一个节点,搭建服务提供者第二个节点,搭建服务消费者,搭建SpringBootAdminServer,测试适用于生产环境的微服务,具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试，可直接复制运行即可。
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
      content: 本章节涉及主要内容有：微服务架构图,CAP中占据情况,微服务架构落地实现方案,Zipkin、Sleuth简介,搭建服务提供者第一个节点(Sleuth),搭建服务提供者第二个节点(Sleuth),搭建服务消费者,搭建Zipkin,测试Zipkin+Sleuth实现调用链路追踪,Apollo配置中心简介,搭建Apollo配置中心,搭建服务消费者(Apollo),Seata简介,搭建Seata Server,准备数据库环境,搭建服务提供者Account服务(Seata),搭建服务提供者Storage服务(Seata),搭建服务消费者,测试使用Seata进行分布式事务控制,注意事项,SpringBootAdmin简介,搭建SpringBootAdmin的Server端,搭建SpringBootAdmin的Client端,测试使用SpringBootAdmin监控服务,适用于生产环境的日志系统简介,ELK简介,搭建具有适用于生产环境的日志系统的服务消费端,搭建ELK,测试适用于生产环境的日志系统简介,在父工程pom,综合案例简介,在父工程pom,搭建单节点版EUREKA注册中心,搭建服务提供者第一个节点,搭建服务提供者第二个节点,搭建服务消费者,搭建SpringBootAdminServer,测试适用于生产环境的微服务,具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试，可直接复制运行即可。
---

# 1.微服务简介
@include(@src/public/enhance/guidance/backend/springcloud/springcloud-eureka/chapter/springcloud-eureka-guidance-chapter1.md)
## <a href="https://martinfowler.com/articles/microservices.html" target="_blank">1.1.Martin Fowler微服务论文英文原版</a>
```
https://martinfowler.com/articles/microservices.html
```
## <a href="https://martinfowler.com/articles/microservices.html" target="_blank">1.2.Martin Fowler微服务论文国内译版</a>
	如需国内译版,请使用谷歌翻译插件翻译自行翻译

## 1.3.微服务架构图
::: center
<div class="imgbg-customer">
<img src="../images/microservice_architecture.png"  width="100%"/>
</div>
:::

## 1.4.CAP中占据情况
	Eureka在CAP中占据AP
::: center
<div class="imgbg-customer">
<img src="../images/cap.png"  width="100%"/>
</div>
:::

## 1.5.微服务架构落地实现方案
	微服务架构落地实现有很多种方案,本次介绍的方案技术栈如下
	注册中心: Eureka
    远程调用: Ribbon/OpenFeign
    客户端负载均衡: Ribbon/OpenFeign
    服务熔断/服务降级: Hystrix
    服务访问数据统计分析(单节点): Hystrix DashBoard
    服务访问数据统计分析(多节点): Turbine
    服务网关: Gateway
    调用链路追踪: Zipkin + Sleuth
    配置中心: Apollo
    分布式事务控制: Seata
    分布式日志系统: LogStash + ELK
    服务监控: SpringBootAdmin
    持续集成到Docker中: Docker的Maven插件 + Jenkins + Docker + Harbor
    持续集成到K8s中: Docker的Maven插件 + Jenkins + Docker + Harbor + K8s
## <a href="https://gitee.com/lingwh1995/springcloud-eureka.git"  target="_blank">1.6.项目源代码</a>
```
https://gitee.com/lingwh1995/springcloud-eureka.git
```


<ScrollIntoPageView/>
<HideSideBar/>
