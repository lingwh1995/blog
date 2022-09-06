---
title: 基于Eureka搭建Springcloud微服务-15.OpenFeign高级用法
description: 本章节涉及主要内容有：搭建服务消费者,测试OpenFeign高级用法,具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试，可直接复制运行即可。
headerDepth: 4
isOriginal: true
category:
  - springcloud
star: false
tag:
  - openfeign高级用法
date: 2020-06-29
head:
  - - meta
    - name: keywords
      content: 本章节涉及主要内容有：搭建服务消费者,测试OpenFeign高级用法,具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试，可直接复制运行即可。
---

# 15.OpenFeign高级用法
@include(@src/public/enhance/guidance/backend/springcloud/springcloud-eureka/chapter/springcloud-eureka-guidance-chapter15.md)
## 15.3.搭建服务消费者
### 15.3.1.模块简介
    集成了OpenFeign高级用法服务消费者,包括OpenFeign拦截器和OpenFeign动态服务名调用,启动端口: 80
### 15.3.2.模块目录结构
```md
@include(../projects/springcloud-eureka/springcloud-consumer-loadbalance-openfeign-configuration-openfeign-senior-order80/tree.md)
```
### 15.3.3.创建模块
	在父工程(springcloud-eureka)中创建一个名为springcloud-consumer-loadbalance-openfeign-configuration-openfeign-senior-order80的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息
### 15.3.4.编写模块pom.xml
```xml
@include(../projects/springcloud-eureka/springcloud-consumer-loadbalance-openfeign-configuration-openfeign-senior-order80/pom.xml)
```
### 15.3.5.编写模块application.yml
```yml
@include(../projects/springcloud-eureka/springcloud-consumer-loadbalance-openfeign-configuration-openfeign-senior-order80/src/main/resources/application.yml)
```
### 15.3.6.编写模块service实现类
    PaymentServiceOpenFeign.java
```java
@include(../projects/springcloud-eureka/springcloud-consumer-loadbalance-openfeign-configuration-openfeign-senior-order80/src/main/java/org/openatom/springcloud/service/PaymentServiceOpenFeign.java)
```
    PaymentServiceOpenFeignDynamicFeignClientFactory.java
```java
@include(../projects/springcloud-eureka/springcloud-consumer-loadbalance-openfeign-configuration-openfeign-senior-order80/src/main/java/org/openatom/springcloud/service/PaymentServiceOpenFeignDynamicFeignClientFactory.java)
```
### 15.3.7.编写模块config
    OpenFeignConfig.java
```java
@include(../projects/springcloud-eureka/springcloud-consumer-loadbalance-openfeign-configuration-openfeign-senior-order80/src/main/java/org/openatom/springcloud/config/OpenFeignConfig.java)
```
    DynamicFeignClientFactoryConfig.java
```java
@include(../projects/springcloud-eureka/springcloud-consumer-loadbalance-openfeign-configuration-openfeign-senior-order80/src/main/java/org/openatom/springcloud/config/DynamicFeignClientFactoryConfig.java)
```
### 15.3.8.编写模块interceptor
```java
@include(../projects/springcloud-eureka/springcloud-consumer-loadbalance-openfeign-configuration-openfeign-senior-order80/src/main/java/org/openatom/springcloud/interceptor/FeignClientRequestInterceptor.java)
```
### 15.3.9.编写模块controller
    OrderConsumerController.java
```java
@include(../projects/springcloud-eureka/springcloud-consumer-loadbalance-openfeign-configuration-openfeign-senior-order80/src/main/java/org/openatom/springcloud/controller/OrderConsumerController.java)
```
    OrderConsumerControllerDynamicFeignClientFactory.java
```java
@include(../projects/springcloud-eureka/springcloud-consumer-loadbalance-openfeign-configuration-openfeign-senior-order80/src/main/java/org/openatom/springcloud/controller/OrderConsumerControllerDynamicFeignClientFactory.java)
```
### 15.3.10.编写模块主启动类
```java
@include(../projects/springcloud-eureka/springcloud-consumer-loadbalance-openfeign-configuration-openfeign-senior-order80/src/main/java/org/openatom/springcloud/OrderServiceConsumerLoadBalanceOpenFeignDynamicServiceName80.java)
```
## 15.4.测试OpenFeign高级用法
### 15.4.1.测试动态服务名
    在浏览器中访问
    非动态服务名调用(服务名配置在Service中使用@FeignClient配置)
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
    可以看到四次访问返回的结果中,四次返回结果是没有规律的,因为采用的RandomRule(随机策略),实际返回结果可能不是上面的情况,但是一定是随机进行服务调用的

    动态服务名调用(服务名配置在application.yml中配置)
```
http://localhost/consumer/dynamic/payment/get/1
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
    可以看到四次访问返回的结果中,四次返回结果是没有规律的,因为采用的RandomRule(随机策略),实际返回结果可能不是上面的情况,但是一定是随机进行服务调用的

    从配置文件中动态获取服务名有什么好处?
    有时候服务名可能会出现在代码中的两个地方,分别是@FeignClient中application.yml中,这意味着如果修改了服务名就要同时修改@FeignClient中application.yml中的配置,如果OpenFeign发起调用时,直接从application.yml中读取服务名称,那么当服务名发生了变化时,只需要修改application.yml中这一个地方的配置即可
### 15.4.2.测试openfeign拦截器
    在浏览器中访问
    非动态服务名调用(服务名配置在Service中使用@FeignClient配置)
```
http://localhost/consumer/payment/replace_router/get/1
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
    可以看到四次访问返回的结果中,四次返回结果是没有规律的,因为采用的RandomRule(随机策略),实际返回结果可能不是上面的情况,但是一定是随机进行服务调用的

    动态服务名调用(服务名配置在application.yml中配置)
```
http://localhost/consumer/dynamic/payment/replace_router/get/1
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
    可以看到四次访问返回的结果中,四次返回结果是没有规律的,因为采用的RandomRule(随机策略),实际返回结果可能不是上面的情况,但是一定是随机进行服务调用的


<ScrollIntoPageView/>
<HideSideBar/>
