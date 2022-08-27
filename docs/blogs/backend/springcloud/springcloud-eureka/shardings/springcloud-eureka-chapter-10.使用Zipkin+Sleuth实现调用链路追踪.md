---
title: 基于Eureka搭建Springcloud微服务-10.使用Zipkin+Sleuth实现调用链路追踪
description: 本章节涉及主要内容有：Zipkin、Sleuth简介,搭建服务提供者第一个节点(Sleuth),搭建服务提供者第二个节点(Sleuth),搭建服务消费者,搭建Zipkin,测试Zipkin+Sleuth实现调用链路追踪,具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试，可直接复制运行即可。
headerDepth: 4
isOriginal: true
category:
  - springcloud
star: false
tag:
date: 
head:
  - - meta
    - name: keywords
      content: 本章节涉及主要内容有：Zipkin、Sleuth简介,搭建服务提供者第一个节点(Sleuth),搭建服务提供者第二个节点(Sleuth),搭建服务消费者,搭建Zipkin,测试Zipkin+Sleuth实现调用链路追踪,具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试，可直接复制运行即可。
---

# 10.使用Zipkin+Sleuth实现调用链路追踪
@include(@src/public/enhance/guidance/backend/springcloud/springcloud-eureka/chapter/springcloud-eureka-guidance-chapter10.md)
## 10.3.Zipkin、Sleuth简介
    Sleuth简介
    Sleuth可以解决分布式系统的追踪问题。
<a href="https://github.com/spring-cloud/spring-cloud-sleuth" target="_blank">官方网址(GITHUB)</a>
```
https://github.com/spring-cloud/spring-cloud-sleuth
```
<a href="https://spring.io/projects/spring-cloud-sleuth" target="_blank">官方网站(SPRING.IO)</a>
```
https://spring.io/projects/spring-cloud-sleuth
```
    Zipkin简介
    Zipkin是Twitter的一个开源项目,基于 Google Dapper实现。可以使用它来收集各个服务器上请求链路的跟踪数据,并通过它提供的REST API接口来辅助我们查询跟踪数据以实现对分布式系统的监控程序,从而及时地发现系统中出现的延迟升高问题并找出系统性能瓶颈的根源。除了面向开发的API接口之外,它也提供了方便的UI组件帮助我们直观的搜索跟踪信息和分析请求链路明细,比如: 可以查询某段时间内各用户请求的处理时间等。
<a href="https://zipkin.io/" target="_blank">官方网址</a>
```
https://zipkin.io/
```
<a href="https://github.com/openzipkin/zipkin" target="_blank">官方网址(GITHUB)</a>
```
https://github.com/openzipkin/zipkin
```
    
## 10.4.搭建服务提供者第一个节点(Sleuth)
### 10.4.1.模块简介
    具有调用链路追踪功能的服务提供者的第一个节点,启动端口: 8005
### 10.4.2.模块目录结构
```
@include(../project_springcloud-eureka/springcloud-provider-sleuth_zipkin-cluster-node-payment8005/tree.md)
```
### 10.4.3.创建模块
	在父工程(springcloud-eureka)中创建一个名为springcloud-provider-sleuth_zipkin-cluster-node-payment8005的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息
### 10.4.4.编写模块pom.xml
```xml
@include(../project_springcloud-eureka/springcloud-provider-sleuth_zipkin-cluster-node-payment8005/pom.xml)
```
### 10.4.5.编写模块application.yml
```yml
@include(../project_springcloud-eureka/springcloud-provider-sleuth_zipkin-cluster-node-payment8005/src/main/resources/application.yml)
```
### 10.4.6.编写模块Mybatis配置文件
```xml
@include(../project_springcloud-eureka/springcloud-provider-sleuth_zipkin-cluster-node-payment8005/src/main/resources/mapper/PaymentMapper.xml)
```
### 10.4.7.编写模块dao
```java
@include(../project_springcloud-eureka/springcloud-provider-sleuth_zipkin-cluster-node-payment8005/src/main/java/org/openatom/springcloud/dao/PaymentDao.java)
```
### 10.4.8.编写模块service
```java
@include(../project_springcloud-eureka/springcloud-provider-sleuth_zipkin-cluster-node-payment8005/src/main/java/org/openatom/springcloud/service/PaymentService.java)
```
### 10.4.9.编写模块service实现类
```java
@include(../project_springcloud-eureka/springcloud-provider-sleuth_zipkin-cluster-node-payment8005/src/main/java/org/openatom/springcloud/service/impl/PaymentServiceImpl.java)
```
### 10.4.10.编写模块controller
```java
@include(../project_springcloud-eureka/springcloud-provider-sleuth_zipkin-cluster-node-payment8005/src/main/java/org/openatom/springcloud/controller/PaymentController.java)
```
### 10.4.11.编写模块主启动类
```java
@include(../project_springcloud-eureka/springcloud-provider-sleuth_zipkin-cluster-node-payment8005/src/main/java/org/openatom/springcloud/PaymentServiceProviderSleuthAndZipkinClusterNode8005.java)
```

## 10.5.搭建服务提供者第二个节点(Sleuth)
### 10.5.1.模块简介
    具有调用链路追踪功能的服务提供者的第二个节点,启动端口: 8006
### 10.5.2.模块目录结构
```
@include(../project_springcloud-eureka/springcloud-provider-sleuth_zipkin-cluster-node-payment8006/tree.md)
```
### 10.5.3.创建模块
	在父工程(springcloud-eureka)中创建一个名为springcloud-provider-sleuth_zipkin-cluster-node-payment8006的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息
### 10.5.4.编写模块pom.xml
```xml
@include(../project_springcloud-eureka/springcloud-provider-sleuth_zipkin-cluster-node-payment8006/pom.xml)
```
### 10.5.5.编写模块application.yml
```yml
@include(../project_springcloud-eureka/springcloud-provider-sleuth_zipkin-cluster-node-payment8006/src/main/resources/application.yml)
```
### 10.5.6.编写模块Mybatis配置文件
```xml
@include(../project_springcloud-eureka/springcloud-provider-sleuth_zipkin-cluster-node-payment8006/src/main/resources/mapper/PaymentMapper.xml)
```
### 10.5.7.编写模块dao
```java
@include(../project_springcloud-eureka/springcloud-provider-sleuth_zipkin-cluster-node-payment8006/src/main/java/org/openatom/springcloud/dao/PaymentDao.java)
```
### 10.5.8.编写模块service
```java
@include(../project_springcloud-eureka/springcloud-provider-sleuth_zipkin-cluster-node-payment8006/src/main/java/org/openatom/springcloud/service/PaymentService.java)
```
### 10.5.9.编写模块service实现类
```java
@include(../project_springcloud-eureka/springcloud-provider-sleuth_zipkin-cluster-node-payment8006/src/main/java/org/openatom/springcloud/service/impl/PaymentServiceImpl.java)
```
### 10.5.10.编写模块controller
```java
@include(../project_springcloud-eureka/springcloud-provider-sleuth_zipkin-cluster-node-payment8006/src/main/java/org/openatom/springcloud/controller/PaymentController.java)
```
### 10.5.11.编写模块主启动类
```java
@include(../project_springcloud-eureka/springcloud-provider-sleuth_zipkin-cluster-node-payment8006/src/main/java/org/openatom/springcloud/PaymentServiceProviderSleuthAndZipkinClusterNode8006.java)
```

## 10.6.搭建服务消费者
### 10.6.1.模块简介
    具有调用链路追踪功能的服务消费者,启动端口: 80
### 10.6.2.模块目录结构
```
@include(../project_springcloud-eureka/springcloud-consumer-sleuth_zipkin-loadbalance-default-order80/tree.md)
```
### 10.6.3.创建模块
	在父工程(springcloud-eureka)中创建一个名为springcloud-consumer-sleuth_zipkin-loadbalance-default-order80的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息
### 10.6.4.编写模块pom.xml
```xml
@include(../project_springcloud-eureka/springcloud-consumer-sleuth_zipkin-loadbalance-default-order80/pom.xml)
```
### 10.6.5.编写模块application.yml
```yml
@include(../project_springcloud-eureka/springcloud-consumer-sleuth_zipkin-loadbalance-default-order80/src/main/resources/application.yml)
```
### 10.6.6.编写模块config
```java
@include(../project_springcloud-eureka/springcloud-consumer-sleuth_zipkin-loadbalance-default-order80/src/main/java/org/openatom/springcloud/config/ApplicationContextConfig.java)
```
### 10.6.7.编写模块controller
```java
@include(../project_springcloud-eureka/springcloud-consumer-sleuth_zipkin-loadbalance-default-order80/src/main/java/org/openatom/springcloud/controller/OrderConsumerController.java)
```
### 10.6.8.编写模块主启动类
```java
@include(../project_springcloud-eureka/springcloud-consumer-sleuth_zipkin-loadbalance-default-order80/src/main/java/org/openatom/springcloud/OrderServiceConsumerSleuthAndZipkinLoadBalanceDefault80.java)
```

## 10.7.搭建Zipkin
<a href="/blogs/environment/centos/centos7/shardings/centos7-chapter-3.%E6%90%AD%E5%BB%BA%E5%9F%BA%E7%A1%80%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83.html#_3-5-%E5%AE%89%E8%A3%85mysql" target="_blank">安装mysql</a>
## 10.8.测试Zipkin+Sleuth实现调用链路追踪

