---
title: 基于Eureka搭建Springcloud微服务-6.使用OpenFeign实现客户端负载均衡
description: 本章节涉及主要内容有：OpenFeign简介,通过配置Ribbon实现对OpenFeign的配置来实现负载均衡,通过直接配置OpenFeign实现对OpenFeign的配置来实现负载均衡,具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试，可直接复制运行即可。
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
      content: 本章节涉及主要内容有：OpenFeign简介,通过配置Ribbon实现对OpenFeign的配置来实现负载均衡,通过直接配置OpenFeign实现对OpenFeign的配置来实现负载均衡,具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试，可直接复制运行即可。
---

# 6.使用OpenFeign实现客户端负载均衡
@include(@src/public/enhance/guidance/backend/springcloud/springcloud-eureka/chapter/springcloud-eureka-guidance-chapter6.md)
## 6.3.OpenFeign简介 {#6_3_}
    Feign是SpringCloud组件中一个轻量级RESTful的HTTP服务客户端,Feign内置了Ribbon,用来做客户端负载均衡,去调用服务注册中心的服务。Feign的使用方式是: 使用Feign的注解定义接口,调用这个接口,就可以调用服务注册中心的服务。OpenFeign是SpringCloud在Feign的基础上支持了SpringMVC的注解,如@RequestMapping等。OpenFeign的@FeignClient可以解析SpringMVC的@RequestMapping注解下的接口,并通过动态代理的方式产生实现类,实现类中做负载均衡并调用其他服务。核心作用是为HTTP形式的Rest API提供了非常简洁高效的RPC调用方式,可以让编写远程调用代码就像编写本地Service一样简单。

<a href="https://docs.spring.io/spring-cloud-openfeign/docs/2.2.10.BUILD-SNAPSHOT/reference/html/"  target="_blank">官方网址(SPRING.IO)</a>
```
https://docs.spring.io/spring-cloud-openfeign/docs/2.2.10.BUILD-SNAPSHOT/reference/html/
```

## 6.4.通过配置Ribbon实现对OpenFeign的配置来实现负载均衡 {#6_4_}
### 6.4.1.模块简介 {#6_4_1_}
    通过配置Ribbon实现对OpenFeign的配置来实现的服务消费者,在YML中编写相关配置,之所以可以这样,是因为OpenFeign的底层实现就是Ribbon,启动端口: 80
### 6.4.2.模块目录结构 {#6_4_2_}
```md
@include(../projects/springcloud-eureka/springcloud-consumer-loadbalance-openfeign-configuration-ribbon-order80/tree.md)
```
### 6.4.3.创建模块 {#6_4_3_}
	在父工程(springcloud-eureka)中创建一个名为springcloud-consumer-loadbalance-openfeign-configuration-ribbon-order80的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息
### 6.4.4.编写模块pom.xml {#6_4_4_}
```xml
@include(../projects/springcloud-eureka/springcloud-consumer-loadbalance-openfeign-configuration-ribbon-order80/pom.xml)
```
### 6.4.5.编写模块application.yml {#6_4_5_}
```yml
@include(../projects/springcloud-eureka/springcloud-consumer-loadbalance-openfeign-configuration-ribbon-order80/src/main/resources/application.yml)
```
### 6.4.6.编写模块config {#6_4_6_}
```java
@include(../projects/springcloud-eureka/springcloud-consumer-loadbalance-openfeign-configuration-ribbon-order80/src/main/java/org/openatom/springcloud/config/OpenFeignConfig.java)
```
### 6.4.7.编写模块service {#6_4_7_}
```java
@include(../projects/springcloud-eureka/springcloud-consumer-loadbalance-openfeign-configuration-ribbon-order80/src/main/java/org/openatom/springcloud/service/PaymentServiceOpenFeign.java)
```
### 6.4.8.编写模块controller {#6_4_8_}
```java
@include(../projects/springcloud-eureka/springcloud-consumer-loadbalance-openfeign-configuration-ribbon-order80/src/main/java/org/openatom/springcloud/controller/OrderConsumerController.java)
```
### 6.4.9.编写模块主启动类 {#6_4_9_}
```java
@include(../projects/springcloud-eureka/springcloud-consumer-loadbalance-openfeign-configuration-ribbon-order80/src/main/java/org/openatom/springcloud/OrderServiceConsumerLoadBalanceOpenFeignConfigurationRibbon80.java)
```
### 6.4.10.测试模块 {#6_4_10_}
    启动相关服务
```mermaid
flowchart LR
    准备好数据库环境-->启动Eureka注册中心
    启动Eureka注册中心-->启动服务提供者8001节点
    启动服务提供者8001节点-->启动服务提供者8002节点
    启动服务提供者8002节点-->启动当前模块服务消费者
```
    测试通过配置Ribbon实现对OpenFeign的配置来实现负载均衡
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
{"code":200,"message":"查询成功,serverPort:  8002","data":{"id":1,"serial":"15646546546"}}
```
    第四次访问返回结果
```json
{"code":200,"message":"查询成功,serverPort:  8001","data":{"id":1,"serial":"15646546546"}}
```
    可以看到四次访问返回的结果中,四次返回结果是没有规律的,因为采用的MyRoundRobinRule(自定义策略,这个策略的效果也是随机调用),实际返回结果可能不是上面的情况,但是一定是随机进行服务调用的

### 6.4.11.注意事项 {#6_4_11_}
    OpenFeign和RestTemplate
    使用OpenFeign实现远程调用时,容器中注入不用注入RestTemplate,OpenFeign已经在底层对RestTemplate做了封装

    在application.yml中配置开启OpenFeign增强日志
```yml
logging: #OpenFeign增强日志配置
    level:
    org.openatom.springcloud.services.PaymentServiceOpenFeign: debug  #OpenFeign日志以什么级别监控哪个接口
```

## 6.5.通过直接配置OpenFeign实现对OpenFeign的配置来实现负载均衡 {#6_5_}
### 6.5.1.模块简介 {#6_5_1_}
    通过直接配置OpenFeign实现对OpenFeign的配置来实现的服务消费者,在YML中编写相关配置,之前在YML配置的Ribbon的相关配置现在直接配置在了YML中OpenFeign部分,启动端口: 80
### 6.5.2.模块目录结构 {#6_5_2_}
```md
@include(../projects/springcloud-eureka/springcloud-consumer-loadbalance-openfeign-configuration-openfeign-order80/tree.md)
```
### 6.5.3.创建模块 {#6_5_3_}
	在父工程(springcloud-eureka)中创建一个名为springcloud-consumer-loadbalance-openfeign-configuration-openfeign-order80的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息
### 6.5.4.编写模块pom.xml {#6_5_4_}
```xml
@include(../projects/springcloud-eureka/springcloud-consumer-loadbalance-openfeign-configuration-openfeign-order80/pom.xml)
```
### 6.5.5.编写模块application.yml {#6_5_5_}
```yml
@include(../projects/springcloud-eureka/springcloud-consumer-loadbalance-openfeign-configuration-openfeign-order80/src/main/resources/application.yml)
```
### 6.5.6.编写模块config {#6_5_6_}
```java
@include(../projects/springcloud-eureka/springcloud-consumer-loadbalance-openfeign-configuration-openfeign-order80/src/main/java/org/openatom/springcloud/config/OpenFeignConfig.java)
```
### 6.5.7.编写模块service {#6_5_7_}
```java
@include(../projects/springcloud-eureka/springcloud-consumer-loadbalance-openfeign-configuration-openfeign-order80/src/main/java/org/openatom/springcloud/service/PaymentServiceOpenFeign.java)
```
### 6.5.8.编写模块controller {#6_5_8_}
```java
@include(../projects/springcloud-eureka/springcloud-consumer-loadbalance-openfeign-configuration-openfeign-order80/src/main/java/org/openatom/springcloud/controller/OrderConsumerController.java)
```
### 6.5.9.编写模块主启动类 {#6_5_9_}
```java
@include(../projects/springcloud-eureka/springcloud-consumer-loadbalance-openfeign-configuration-openfeign-order80/src/main/java/org/openatom/springcloud/OrderServiceConsumerLoadBalanceOpenFeignConfigurationOpenfeign80.java)
```
### 6.5.10.测试模块 {#6_5_10_}
    启动相关服务
```mermaid
flowchart LR
    准备好数据库环境-->启动Eureka注册中心
    启动Eureka注册中心-->启动服务提供者8001节点
    启动服务提供者8001节点-->启动服务提供者8002节点
    启动服务提供者8002节点-->启动当前模块服务消费者
```
    测试通过直接配置OpenFeign实现对OpenFeign的配置来实现负载均衡
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
{"code":200,"message":"查询成功,serverPort:  8002","data":{"id":1,"serial":"15646546546"}}
```
    第四次访问返回结果
```json
{"code":200,"message":"查询成功,serverPort:  8001","data":{"id":1,"serial":"15646546546"}}
```
    可以看到四次访问返回的结果中,四次返回结果是没有规律的,因为采用的MyRoundRobinRule(自定义策略,这个策略的效果也是随机调用),实际返回结果可能不是上面的情况,但是一定是随机进行服务调用的
### 6.5.11.注意事项 {#6_5_11_}
    OpenFeign和RestTemplate
    容器中注入不用注入RestTemplate,OpenFeign已经在底层对RestTemplate做了封装

    在application.yml中配置开启OpenFeign增强日志
```yml
logging: #OpenFeign增强日志配置
    level:
    org.openatom.springcloud.services.PaymentServiceOpenFeign: debug  #OpenFeign日志以什么级别监控哪个接口
```


<ScrollIntoPageView/>
