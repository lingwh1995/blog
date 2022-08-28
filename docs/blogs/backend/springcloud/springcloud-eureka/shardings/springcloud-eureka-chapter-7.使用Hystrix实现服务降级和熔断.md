---
title: 基于Eureka搭建Springcloud微服务-7.使用Hystrix实现服务降级和熔断
description: 本章节涉及主要内容有：Hystrix简介,搭建服务提供者第一个节点(Hystrix),搭建服务提供者第二个节点(Hystrix),搭建服务消费者(Hystrix),测试服务降级和服务熔断(Hystrix),具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试，可直接复制运行即可。
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
      content: 本章节涉及主要内容有：Hystrix简介,搭建服务提供者第一个节点(Hystrix),搭建服务提供者第二个节点(Hystrix),搭建服务消费者(Hystrix),测试服务降级和服务熔断(Hystrix),具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试，可直接复制运行即可。
---

# 7.使用Hystrix实现服务降级和熔断
@include(@src/public/enhance/guidance/backend/springcloud/springcloud-eureka/chapter/springcloud-eureka-guidance-chapter7.md)
## 7.3.Hystrix简介 {#_7_3_}
    Hystrix是由Netflix开源的一个服务隔离组件,通过服务隔离来避免由于依赖延迟、异常,引起资源耗尽导致系统不可用的解决方案。这说的有点儿太官方了,它的功能主要有以下三个:
    服务降级
    当服务调用发生异常时，快速返回一个事先设置好的值,针对系统全局稳定性考虑,消费端和服务端都可以做

    服务熔断
    当调用服务发生多次异常时服务会会熔断,如数据库连接故障,当故障修复时服务又会恢复到正常状态,针对服务提供端稳定性考虑
    
    服务限流
    对访问的流量进行限制
    
<a href="https://github.com/Netflix/Hystrix"  target="_blank">官方网站</a>
```
https://github.com/Netflix/Hystrix
```

## 7.4.搭建服务提供者第一个节点(Hystrix) {#_7_4_}
### 7.4.1.模块简介 {#_7_4_1_}
    具有服务熔断和服务降级功能的服务提供者的第一个节点,启动端口: 8003
### 7.4.2.模块目录结构 {#_7_4_2_}
```md
@include(../projects/springcloud-eureka/springcloud-provider-hystrix-cluster-node-payment8003/tree.md)
```
### 7.4.3.创建模块 {#_7_4_3_}
	在父工程(springcloud-eureka)中创建一个名为springcloud-provider-hystrix-cluster-node-payment8003的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息
### 7.4.4.编写模块pom.xml {#_7_4_4_}
```xml
@include(../projects/springcloud-eureka/springcloud-provider-hystrix-cluster-node-payment8003/pom.xml)
```
### 7.4.5.编写模块application.yml {#_7_4_5_}
```yml
@include(../projects/springcloud-eureka/springcloud-provider-hystrix-cluster-node-payment8003/src/main/resources/application.yml)
```
### 7.4.6.编写模块Mybatis配置文件 {#_7_4_6_}
```xml
@include(../projects/springcloud-eureka/springcloud-provider-hystrix-cluster-node-payment8003/src/main/resources/mapper/PaymentMapper.xml)
```
### 7.4.7.编写模块dao {#_7_4_7_}
```java
@include(../projects/springcloud-eureka/springcloud-provider-hystrix-cluster-node-payment8003/src/main/java/org/openatom/springcloud/dao/PaymentHystrixDao.java)
```
### 7.4.8.编写模块service {#_7_4_8_}
```java
@include(../projects/springcloud-eureka/springcloud-provider-hystrix-cluster-node-payment8003/src/main/java/org/openatom/springcloud/service/PaymentHystrixService.java)
```
### 7.4.9.编写模块service实现类 {#_7_4_9_}
```java
@include(../projects/springcloud-eureka/springcloud-provider-hystrix-cluster-node-payment8003/src/main/java/org/openatom/springcloud/service/impl/PaymentHystrixServiceImpl.java)
```
### 7.4.10.编写模块controller {#_7_4_10_}
```java
@include(../projects/springcloud-eureka/springcloud-provider-hystrix-cluster-node-payment8003/src/main/java/org/openatom/springcloud/controller/PaymentHystrixController.java)
```
### 7.4.11.编写模块主启动类 {#_7_4_11_}
```java
package org.openatom.springcloud;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.circuitbreaker.EnableCircuitBreaker;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

/**
 * 支付接口提供者
 *  使用Eureka作为注册中心
 */
@EnableEurekaClient
@SpringBootApplication
@EnableCircuitBreaker//服务提供端启用Hystrix
public class PaymentServiceProviderHystrixClusterNode8003 {

    public static void main(String[] args) {
        SpringApplication.run(PaymentServiceProviderHystrixClusterNode8003.class, args);
    }

}
```

## 7.5.搭建服务提供者第二个节点(Hystrix) {#_7_5_}
### 7.5.1.模块简介 {#_7_5_1_}
    具有服务熔断和服务降级功能的服务提供者的第二个节点,启动端口: 8004
### 7.5.2.模块目录结构 {#_7_5_2_}
```md
@include(../projects/springcloud-eureka/springcloud-provider-hystrix-cluster-node-payment8004/tree.md)
```
### 7.5.3.创建模块 {#_7_5_3_}
	在父工程(springcloud-eureka)中创建一个名为springcloud-provider-hystrix-cluster-node-payment8004的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息
### 7.5.4.编写模块pom.xml {#_7_5_4_}
```xml
@include(../projects/springcloud-eureka/springcloud-provider-hystrix-cluster-node-payment8004/pom.xml)
```
### 7.5.5.编写模块application.yml {#_7_5_5_}
```yml
@include(../projects/springcloud-eureka/springcloud-provider-hystrix-cluster-node-payment8004/src/main/resources/application.yml)
```
### 7.5.6.编写模块Mybatis配置文件 {#_7_5_6_}
```xml
@include(../projects/springcloud-eureka/springcloud-provider-hystrix-cluster-node-payment8004/src/main/resources/mapper/PaymentMapper.xml)
```
### 7.5.7.编写模块dao {#_7_5_7_}
```java
@include(../projects/springcloud-eureka/springcloud-provider-hystrix-cluster-node-payment8004/src/main/java/org/openatom/springcloud/dao/PaymentHystrixDao.java)
```
### 7.5.8.编写模块service {#_7_5_8_}
```java
@include(../projects/springcloud-eureka/springcloud-provider-hystrix-cluster-node-payment8004/src/main/java/org/openatom/springcloud/service/PaymentHystrixService.java)
```
### 7.5.9.编写模块service实现类 {#_7_5_9_}
```java
@include(../projects/springcloud-eureka/springcloud-provider-hystrix-cluster-node-payment8004/src/main/java/org/openatom/springcloud/service/impl/PaymentHystrixServiceImpl.java)
```
### 7.5.10.编写模块controller {#_7_5_10_}
```java
@include(../projects/springcloud-eureka/springcloud-provider-hystrix-cluster-node-payment8004/src/main/java/org/openatom/springcloud/controller/PaymentHystrixController.java)
```
### 7.5.11.编写模块主启动类 {#_7_5_11_}
```java
package org.openatom.springcloud;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.circuitbreaker.EnableCircuitBreaker;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

/**
 * 支付接口提供者
 *  使用Eureka作为注册中心
 */
@EnableEurekaClient
@SpringBootApplication
@EnableCircuitBreaker//服务提供端启用Hystrix
public class PaymentServiceProviderHystrixClusterNode8004 {

    public static void main(String[] args) {
        SpringApplication.run(PaymentServiceProviderHystrixClusterNode8004.class, args);
    }

}
```

## 7.6.搭建服务消费者(Hystrix) {#_7_6_}
### 7.6.1.模块简介 {#_7_6_1_}
    具有服务熔断和服务降级功能的服务消费者,启动端口: 80
### 7.6.2.模块目录结构 {#_7_6_2_}
```md
@include(../projects/springcloud-eureka/springcloud-consumer-hystrix-loadbalance-openfeign-configuration-order80/tree.md)
```
### 7.6.3.创建模块 {#_7_6_3_}
	在父工程(springcloud-eureka)中创建一个名为springcloud-consumer-hystrix-loadbalance-openfeign-configuration-order80的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息
### 7.6.4.编写模块pom.xml {#_7_6_4_}
```xml
@include(../projects/springcloud-eureka/springcloud-consumer-hystrix-loadbalance-openfeign-configuration-order80/pom.xml)
```
### 7.6.5.编写模块application.yml {#_7_6_5_}
```yml
@include(../projects/springcloud-eureka/springcloud-consumer-hystrix-loadbalance-openfeign-configuration-order80/src/main/resources/application.yml)
```
### 7.6.6.编写模块config {#_7_6_6_}
```java
@include(../projects/springcloud-eureka/springcloud-consumer-hystrix-loadbalance-openfeign-configuration-order80/src/main/java/org/openatom/springcloud/config/FeignConfig.java)
```
### 7.6.7.编写模块service {#_7_6_7_}
```java
@include(../projects/springcloud-eureka/springcloud-consumer-hystrix-loadbalance-openfeign-configuration-order80/src/main/java/org/openatom/springcloud/service/PaymentServiceHystrixOpenFeign.java)
```
### 7.6.8.编写模块service实现类 {#_7_6_8_}
```java
@include(../projects/springcloud-eureka/springcloud-consumer-hystrix-loadbalance-openfeign-configuration-order80/src/main/java/org/openatom/springcloud/service/impl/PaymentServiceHystrixOpenFeignImpl.java)
```
### 7.6.9.编写模块controller {#_7_6_9_}
```java
@include(../projects/springcloud-eureka/springcloud-consumer-hystrix-loadbalance-openfeign-configuration-order80/src/main/java/org/openatom/springcloud/controller/OrderConsumerHystrixController.java)
```
### 7.6.10.编写模块主启动类 {#_7_6_10_}
```java
package org.openatom.springcloud;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.hystrix.EnableHystrix;
import org.springframework.cloud.openfeign.EnableFeignClients;


@EnableEurekaClient
@SpringBootApplication
@EnableFeignClients
@EnableHystrix //消费者端启用Hystrix
public class OrderServiceConsumerHystrixLoadBalanceOpenFeignConfiguration80 {
    public static void main(String[] args) {
        SpringApplication.run(OrderServiceConsumerHystrixLoadBalanceOpenFeignConfiguration80.class, args);
    }
    
}
```
## 7.7.测试服务降级和服务熔断(Hystrix) {#_7_7_}
    启动相关服务
```mermaid
flowchart LR
    准备好数据库环境-->启动Eureka注册中心
    启动Eureka注册中心-->启动服务提供者8003节点
    启动服务提供者8003节点-->启动服务提供者8004节点
    启动服务提供者8004节点-->启动当前模块服务消费者
```

    测试未做降级和熔断的服务
```
http://localhost/consumer/payment/ok/get/1
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

    测试在服务提供端对服务进行降级
    在浏览器中访问
```
http://localhost/consumer/payment/degradation_in_provider/get/1
```
    返回结果
```json
{"code":200,"message":"查询成功,serverPort:  8003","data":{"id":1,"serial":"服务提供端:服务降级成功"}}
```
    具体降级过程,请根据访问地址追踪代码,查看具体降级是如何处理的,代码中有详细的注释

    测试在服务消费端对服务进行降级
    在浏览器中访问
```
http://localhost/consumer/payment/degradation_in_consumer/get/1
```
    返回结果
```json
{"code":10000,"message":"我是服务消费端","data":{"id":1,"serial":"服务消费端:降级成功"}}
```
    具体降级过程,请根据访问地址追踪代码,查看具体降级是如何处理的,代码中有详细的注释

    测试全局范围内默认的降级回调方法(这种处理方式可以应用于服务提供端和服务消费端,这里演示的是在服务消费端进行处理)
    在浏览器中访问
```
http://localhost:/consumer/payment/degradation_in_consumer_default/get/1
```
    返回结果
```json
{"code":10000,"message":"我是服务消费端 ","data":{"id":null,"serial":"服务消费端:全局范围内默认的降级回调方法...."}}
```
    具体降级过程,请根据访问地址追踪代码,查看具体降级是如何处理的,代码中有详细的注释
    
    测试在服务提供端Service层实现服务降级
    本次测试较为特殊,首先关闭服务提供者8003和服务提供者8004,模拟服务提供者8003和服务提供者8004发生了宕机
    在浏览器中访问
```
http://localhost:/consumer/payment/degradation_in_consumer_service/get/1
```
    返回结果
```json
{"code":10000,"message":"发生了错误","data":{"id":null,"serial":"服务消费端:服务提供者宕机了,在服务消费端中Service层对这个服务进行服务降级处理...."}}
```
    具体降级过程,请根据访问地址追踪代码,查看具体降级是如何处理的,代码中有详细的注释

    测试在服务提供端实现服务熔断
    模拟发生异常熔断服务,路径1:
```
http://localhost/consumer/payment/circuitbreaker/get/-1
```
    模拟不发生异常让服务自动恢复,路径2:
```
http://localhost/consumer/payment/circuitbreaker/get/1
```
    测试方式:先多次访问路径1，将服务熔断,再多次访问路径2,刚开始访问依然返回的是异常信息,多次访问后可以看到服务恢复正常

    服务熔断(下游服务发生了异常)->断路器半开(放开一定的访问流量,探测一下服务是否恢复正常)->断路器全开(放开全部访问流量)->服务恢复正常


<ScrollIntoPageView/>
