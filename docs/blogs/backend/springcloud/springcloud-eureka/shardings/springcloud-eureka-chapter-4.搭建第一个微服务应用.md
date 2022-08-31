---
title: 基于Eureka搭建Springcloud微服务-4.搭建第一个微服务应用
description: 本章节涉及主要内容有：第一个微服务应用简介,搭建服务提供者第一个节点,搭建服务提供者第二个节点,搭建服务消费者,启动并测试第一个微服务应用,具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试，可直接复制运行即可。
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
      content: 本章节涉及主要内容有：第一个微服务应用简介,搭建服务提供者第一个节点,搭建服务提供者第二个节点,搭建服务消费者,启动并测试第一个微服务应用,具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试，可直接复制运行即可。
---

# 4.搭建第一个微服务应用
@include(@src/public/enhance/guidance/backend/springcloud/springcloud-eureka/chapter/springcloud-eureka-guidance-chapter4.md)
## 4.3.第一个微服务应用简介
    第一个微服务应用由四部分组成,分别是注册中心(单节点)、服务消费者(单节点)、服务提供者(两个节点)、运行所需要的数据库环境,这里的注册中心使用单节点版注册中心,如果需要使用集群版注册中心,只需要在application.yml将defaultZone的配置切换为集群版配置即可,服务提供者第一个节点和第二个节点是除了端口和模块名称之外其他所有代码均是相同的,之所以要创建两个相同的模块是为了模拟生产环境中一个服务部署在多个节点的情况,这里为了查看日志方便,直接创建了两个相同的服务提供者模块。
## 4.4.搭建服务提供者第一个节点
### 4.4.1.模块简介
    服务提供者第一个节点,启动端口: 8001
### 4.4.2.模块目录结构
```md
@include(../projects/springcloud-eureka/springcloud-provider-cluster-node-payment8001/tree.md)
```
### 4.4.3.创建模块
	在父工程(springcloud-eureka)中创建一个名为springcloud-provider-cluster-node-payment8001的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息
### 4.4.4.编写模块pom.xml
```xml
@include(../projects/springcloud-eureka/springcloud-provider-cluster-node-payment8001/pom.xml)
```
### 4.4.5.编写模块application.yml
```yml
@include(../projects/springcloud-eureka/springcloud-provider-cluster-node-payment8001/src/main/resources/application.yml)
```
### 4.4.6.编写模块Mybatis配置文件
```xml
@include(../projects/springcloud-eureka/springcloud-provider-cluster-node-payment8001/src/main/resources/mapper/PaymentMapper.xml)
```
### 4.4.7.编写模块dao
```java
@include(../projects/springcloud-eureka/springcloud-provider-cluster-node-payment8001/src/main/java//org/openatom/springcloud/dao/PaymentDao.java)
```
### 4.4.8.编写模块service
```java
@include(../projects/springcloud-eureka/springcloud-provider-cluster-node-payment8001/src/main/java//org/openatom/springcloud/service/PaymentService.java)
```
### 4.4.9.编写模块service实现类
```java
@include(../projects/springcloud-eureka/springcloud-provider-cluster-node-payment8001/src/main/java//org/openatom/springcloud/service/impl/PaymentServiceImpl.java)
```
### 4.4.10.编写模块controller
```java
@include(../projects/springcloud-eureka/springcloud-provider-cluster-node-payment8001/src/main/java//org/openatom/springcloud/controller/PaymentController.java)
```
### 4.4.11.编写模块主启动类
```java
@include(../projects/springcloud-eureka/springcloud-provider-cluster-node-payment8001/src/main/java//org/openatom/springcloud/PaymentServiceProviderClusterNode8001.java)
```

## 4.5.搭建服务提供者第二个节点
### 4.5.1.模块简介
    服务提供者第二个节点,启动端口: 8002
### 4.5.2.模块目录结构
```md
@include(../projects/springcloud-eureka/springcloud-provider-cluster-node-payment8002/tree.md)
```
### 4.5.3.创建模块
	在父工程(springcloud-eureka)中创建一个名为springcloud-provider-cluster-node-payment8002的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息
### 4.5.4.编写模块pom.xml
```xml
@include(../projects/springcloud-eureka/springcloud-provider-cluster-node-payment8002/pom.xml)
```
### 4.5.5.编写模块application.yml
```yml
@include(../projects/springcloud-eureka/springcloud-provider-cluster-node-payment8002/src/main/resources/application.yml)
```
### 4.5.6.编写模块Mybatis配置文件
```xml
@include(../projects/springcloud-eureka/springcloud-provider-cluster-node-payment8002/src/main/resources/mapper/PaymentMapper.xml)
```
### 4.5.7.编写模块dao
```java
@include(../projects/springcloud-eureka/springcloud-provider-cluster-node-payment8002/src/main/java//org/openatom/springcloud/dao/PaymentDao.java)
```
### 4.5.8.编写模块service
```java
@include(../projects/springcloud-eureka/springcloud-provider-cluster-node-payment8002/src/main/java//org/openatom/springcloud/service/PaymentService.java)
```
### 4.5.9.编写模块service实现类
```java
@include(../projects/springcloud-eureka/springcloud-provider-cluster-node-payment8002/src/main/java//org/openatom/springcloud/service/impl/PaymentServiceImpl.java)
```
### 4.5.10.编写模块controller
```java
@include(../projects/springcloud-eureka/springcloud-provider-cluster-node-payment8002/src/main/java//org/openatom/springcloud/controller/PaymentController.java)
```
### 4.5.11.编写模块主启动类
```java
@include(../projects/springcloud-eureka/springcloud-provider-cluster-node-payment8002/src/main/java//org/openatom/springcloud/PaymentServiceProviderClusterNode8002.java)
```

## 4.6.搭建服务消费者
### 4.6.1.模块简介
    基于SpringCloud官方默认组件实现的服务消费者,启动端口: 80
### 4.6.2.模块目录结构
    @include(../projects/springcloud-eureka/springcloud-consumer-loadbalance-default-order80/tree.md)
### 4.6.3.创建模块
	在父工程(springcloud-eureka)中创建一个名为springcloud-consumer-loadbalance-default-order80的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息
### 4.6.4.编写模块pom.xml
```xml
@include(../projects/springcloud-eureka/springcloud-consumer-loadbalance-default-order80/pom.xml)
```
### 4.6.5.编写模块application.yml
```yml
@include(../projects/springcloud-eureka/springcloud-consumer-loadbalance-default-order80/src/main/resources/application.yml)
```
### 4.6.6.编写模块config
```java
@include(../projects/springcloud-eureka/springcloud-consumer-loadbalance-default-order80/src/main/java/org/openatom/springcloud/config/ApplicationContextConfig.java)
```
### 4.6.7.编写模块controller
```java
@include(../projects/springcloud-eureka/springcloud-consumer-loadbalance-default-order80/src/main/java/org/openatom/springcloud/controller/OrderConsumerController.java)
```
### 4.6.8.编写模块主启动类
```java
@include(../projects/springcloud-eureka/springcloud-consumer-loadbalance-default-order80/src/main/java/org/openatom/springcloud/OrderServiceConsumerLoadBalanceDefault80.java)
```

## 4.7.启动并测试第一个微服务应用
### 4.7.1.启动第一个微服务应用
```mermaid
flowchart LR
    准备好数据库环境-->启动Eureka注册中心
    启动Eureka注册中心-->启动服务提供者第一个节点
    启动服务提供者第一个节点-->启动服务提供者第二个节点
    启动服务提供者第二个节点-->启动当前模块服务消费者
```
### 4.7.2.测试第一个微服务应用
    在浏览器中访问
```
http://localhost/consumer/payment/get/1
```
    第一次访问返回结果
```json
{"code":200,"message":"查询成功,serverPort:  8001","data":{"id":1,"serial":"15646546546"}}
```
    第二次访问返回结果
```json
{"code":200,"message":"查询成功,serverPort:  8002","data":{"id":1,"serial":"15646546546"}}
```
    第三次访问返回结果
```json
{"code":200,"message":"查询成功,serverPort:  8001","data":{"id":1,"serial":"15646546546"}}
```
    第四次访问返回结果
```json
{"code":200,"message":"查询成功,serverPort:  8002","data":{"id":1,"serial":"15646546546"}}
```
    可以看到四次访问返回的结果中,第一次和第三次是相同的,第二次和第四次是相同的,之所以会出现这样的结果,是因为上面编写RestTemplate时使用了默认的配置,默认的配置使用负载均衡策略是轮询策略,所以接连访问该服务四次会出现上面的情况。


<ScrollIntoPageView/>
<HideSideBar/>
