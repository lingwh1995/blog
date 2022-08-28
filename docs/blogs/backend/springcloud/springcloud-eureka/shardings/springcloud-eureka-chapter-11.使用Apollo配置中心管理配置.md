---
title: 基于Eureka搭建Springcloud微服务-11.使用Apollo配置中心管理配置
description: 本章节涉及主要内容有：具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试，可直接复制运行即可。
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
      content: 本章节涉及主要内容有：具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试，可直接复制运行即可。
---

# 11.使用Apollo配置中心管理配置
@include(@src/public/enhance/guidance/backend/springcloud/springcloud-eureka/chapter/springcloud-eureka-guidance-chapter11.md)
## 12.1.Apollo配置中心简介
	Apollo(阿波罗)是一款可靠的分布式配置管理中心，诞生于携程框架研发部，能够集中化管理应用不同环境、不同集群的配置，配置修改后能够实时推送到应用端，并且具备规范的权限、流程治理等特性，适用于微服务配置管理场景。

<a href="https://www.apolloconfig.com" target="_blank">官方网址</a>
```
https://www.apolloconfig.com
```
<a href="https://github.com/apolloconfig" target="_blank">官网网址(GITHUB)</a>
```
https://github.com/apolloconfig
```

## 12.2.搭建Apollo配置中心
<a href="/blogs/environment/windows/windows-server2016/shardings/windows-server2016-chapter-2.搭建SpringCloud技术栈所需组件.html#_2-4-3-1-单环境版" target="_blank">搭建Apollo配置中心(Windows版)</a>

## 12.3.搭建服务消费者(Apollo)
### 12.3.1.章节内容简介
    本章节会展示如何使用Apollo配置中心来管理配置
### 12.3.2.模块简介
    使用了Apollo配置中心的服务消费者,启动端口: 80
### 12.3.3.模块目录结构
```md
@include(../projects/springcloud-eureka/springcloud-config-apollo-loadbalance-openfeign-configuration-order80/tree.md)
```
### 12.3.4.创建模块
	在父工程(springcloud-eureka)中创建一个名为springcloud-config-apollo-loadbalance-openfeign-configuration-order80的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息
### 12.3.5.编写模块pom.xml
```xml
@include(../projects/springcloud-eureka/springcloud-config-apollo-loadbalance-openfeign-configuration-order80/pom.xml)
```
### 12.3.6.编写模块application.yml
```yml
@include(../projects/springcloud-eureka/springcloud-config-apollo-loadbalance-openfeign-configuration-order80/src/main/resources/application.yml)
```
### 12.3.7.编写模块Apollo配置文件
```sql
@include(../projects/springcloud-eureka/springcloud-config-apollo-loadbalance-openfeign-configuration-order80/src/main/resources/apollo-env.properties)
```
### 12.3.8.编写模块config
```java
@include(../projects/springcloud-eureka/springcloud-config-apollo-loadbalance-openfeign-configuration-order80/src/main/java/org/openatom/springcloud/config/OpenFeignConfig.java)
```
### 12.3.9.编写模块service
```java
@include(../projects/springcloud-eureka/springcloud-config-apollo-loadbalance-openfeign-configuration-order80/src/main/java/org/openatom/springcloud/service/PaymentServiceOpenFeign.java)
```
### 12.3.10.编写模块listener
```java
@include(../projects/springcloud-eureka/springcloud-config-apollo-loadbalance-openfeign-configuration-order80/src/main/java/org/openatom/springcloud/listener/ApolloPropertiesChangedListener.java)
```
### 12.3.11.编写模块controller
    ApolloConfigController.java
```java
@include(../projects/springcloud-eureka/springcloud-config-apollo-loadbalance-openfeign-configuration-order80/src/main/java/org/openatom/springcloud/controller/ApolloConfigController.java)
```
    OrderConsumerController.java
```java
@include(../projects/springcloud-eureka/springcloud-config-apollo-loadbalance-openfeign-configuration-order80/src/main/java/org/openatom/springcloud/controller/OrderConsumerController.java)
```
### 12.3.12.编写模块主启动类
```java
@include(../projects/springcloud-eureka/springcloud-config-apollo-loadbalance-openfeign-configuration-order80/src/main/java/org/openatom/springcloud/OrderServiceConsumerApolloLoadBalanceOpenFeignConfiguration80.java)
```
### 12.3.13.测试模块
    启动Apollo,在浏览器中访问
```
http://localhost:7001/
```
    看到如下界面代表搭建成功
::: center
<div class="imgbg-customer">
<img src="../images/eureka7001.png"  width="100%"/>
</div>
:::

<ScrollIntoPageView/>
