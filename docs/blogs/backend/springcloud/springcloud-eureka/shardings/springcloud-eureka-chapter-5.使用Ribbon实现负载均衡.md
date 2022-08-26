---
title: 基于Eureka搭建Springcloud微服务-5.使用Ribbon实现负载均衡
description: 本章节涉及主要内容有：Ribbon简介,硬编码配置方式使用Ribbon实现负载均衡(使用Ribbon自带的负载均衡策略),声明式配置方式使用Ribbon实现负载均衡(使用Ribbon自带的负载均衡策略),硬编码配置方式使用Ribbon实现负载均衡(使用自定义的Ribbon负载均衡策略),声明式配置方式使用Ribbon实现负载均衡(使用自定义的Ribbon负载均衡策略),具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试，可直接复制运行即可。
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
      content: 本章节涉及主要内容有：Ribbon简介,硬编码配置方式使用Ribbon实现负载均衡(使用Ribbon自带的负载均衡策略),声明式配置方式使用Ribbon实现负载均衡(使用Ribbon自带的负载均衡策略),硬编码配置方式使用Ribbon实现负载均衡(使用自定义的Ribbon负载均衡策略),声明式配置方式使用Ribbon实现负载均衡(使用自定义的Ribbon负载均衡策略),具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试，可直接复制运行即可。
---

# 5.使用Ribbon实现负载均衡
@include(@src/public/enhance/guidance/backend/springcloud/springcloud-eureka/chapter/springcloud-eureka-guidance-chapter5.md)

## 5.3.Ribbon简介
    Ribbon是Netflix发布的开源项目，主要功能是提供客户端的软件负载均衡算法，将Netflix的中间层服务连接在一起。Ribbon客户端组件提供一系列完善的配置项如连接超时，重试等。简单的说，就是在配置文件中列出Load Balancer（简称LB）后面所有的机器，Ribbon会自动的帮助你基于某种规则（如简单轮询，随即连接等）去连接这些机器,也可以使用Ribbon实现自定义的负载均衡算法。

## <a href="https://github.com/Netflix/ribbon">5.2.官方网址</a>
```
https://github.com/Netflix/ribbon
```

## 5.5.硬编码配置方式使用Ribbon实现负载均衡(使用Ribbon自带的负载均衡策略)
### 5.5.1.模块简介
    基于Ribbon官方组件以硬编码配置方式实现的服务消费者,启动端口: 80
### 5.5.2.模块目录结构
```
@include(../project_springcloud-eureka/springcloud-consumer-loadbalance-ribbon-hardcode-order80/tree.md)
```
### 5.5.3.创建模块
	在父工程(springcloud-eureka)中创建一个名为springcloud-consumer-loadbalance-ribbon-hardcode-order80的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息
### 5.5.4.编写模块pom.xml
```xml
@include(../project_springcloud-eureka/springcloud-consumer-loadbalance-ribbon-hardcode-order80/pom.xml)
```
### 5.5.5.编写模块application.yml
```yml
@include(../project_springcloud-eureka/springcloud-consumer-loadbalance-ribbon-hardcode-order80/src/main/resources/application.yml)
```
### 5.5.6.编写模块config
```java
@include(../project_springcloud-eureka/springcloud-consumer-loadbalance-ribbon-hardcode-order80/src/main/java/org/openatom/springcloud/config/ApplicationContextConfig.java)
```
### 5.5.7.编写模块controller
```java
@include(../project_springcloud-eureka/springcloud-consumer-loadbalance-ribbon-hardcode-order80/src/main/java/org/openatom/springcloud/controller/OrderConsumerController.java)
```
### 5.5.8.编写负载均衡规则配置类
```java
@include(../project_springcloud-eureka/springcloud-consumer-loadbalance-ribbon-hardcode-order80/src/main/java/org/openatom/myrule/MySelfRule.java)
```
    这里使用return new RandomRule();,这代表使用的负载均衡算法是RandomRule,Ribbon默认提供了七种负载均衡的算法策略,具体使用哪一种,请根据实际需求灵活选择,这里提供关于七种负载均衡算法的介绍

- [x] RoundRobinRule(轮询策略,轮询是Ribbon默认使用的负载均衡算法)
    第一次到A,第二次就到B,第三次又到A,第四次又到B......
    具体实现是一个负载均衡算法: 第N次请求 % 服务器集群的总数 = 实际调用服务器位置的下标

- [x] RandomRule(随机策略)
    从服务提供者的列表中随机选择一个服务实例进行调用
- [x] RetryRule(轮询重试策略)
    按照轮询策略来获取服务,如果获取的服务实例为null或已经失效,则在指定的时间之内不断地进行重试来获取服务,如果超过指定时间依然没获取到服务实例则返回null。
- [x] WeightedResponseTimeRule(响应速度决定权重策略)
    根据每个服务提供者的响应时间分配一个权重,响应时间越长,权重越小,被选中的可能性也就越低。它的实现原理是,刚开始使用轮询策略并开启一个计时器,每一段时间收集一次所有服务提供者的平均响应时间,然后再给每个服务提供者附上一个权重,权重越高被选中的概率也越大。
- [x] BestAvailableRule(最优可用策略)
    判断最优其实用的是并发连接数。选择并发连接数较小的server发送请求。
- [x] AvailabilityFilteringRule(可用性敏感策略)
    先过滤掉非健康的服务实例，然后再选择连接数较小的服务实例。
- [x] ZoneAvoidanceRule(区域内可用性能最优策略)
    基于AvailabilityFilteringRule基础上做的,首先判断一个zone的运行性能是否可用.剔除不可用的区域zone的所有server,然后再利用AvailabilityPredicate过滤并发连接过多的server。

### 5.5.9.编写模块主启动类
```java
@include(../project_springcloud-eureka/springcloud-consumer-loadbalance-ribbon-hardcode-order80/src/main/java/org/openatom/springcloud/OrderServiceConsumerLoadBalanceRibbonHardcode80.java)
```

## 5.6.声明式配置方式使用Ribbon实现负载均衡(使用Ribbon自带的负载均衡策略)
### 5.6.1.模块简介
    基于Ribbon官方组件以声明式配置方式实现的服务消费者,启动端口: 80
### 5.6.2.模块目录结构
```
@include(../project_springcloud-eureka/springcloud-consumer-loadbalance-ribbon-configuration-order80/tree.md)
```
### 5.6.3.创建模块
	在父工程(springcloud-eureka)中创建一个名为springcloud-consumer-loadbalance-ribbon-configuration-order80的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息
### 5.6.4.编写模块pom.xml
```xml
@include(../project_springcloud-eureka/springcloud-consumer-loadbalance-ribbon-configuration-order80/pom.xml)
```
### 5.6.5.编写模块application.yml
```yml
@include(../project_springcloud-eureka/springcloud-consumer-loadbalance-ribbon-configuration-order80/src/main/resources/application.yml)
```

    yml中关于Ribbon负载均衡策略的配置
    SPRINGCLOUD-PROVIDER-PAYMENT-SERVICE-CLUSTER:
    ribbon:
        NFLoadBalancerRuleClassName: com.netflix.loadbalancer.RandomRule 
    这里使用com.netflix.loadbalancer.RandomRule ,这代表使用的负载均衡算法是RandomRule,Ribbon默认提供了七种负载均衡的算法策略,具体使用哪一种,请根据实际需求灵活选择,这里提供关于七种负载均衡算法的介绍

- [x] RoundRobinRule(轮询策略,轮询是Ribbon默认使用的负载均衡算法)
    第一次到A,第二次就到B,第三次又到A,第四次又到B......
    具体实现是一个负载均衡算法: 第N次请求 % 服务器集群的总数 = 实际调用服务器位置的下标

- [x] RandomRule(随机策略)
    从服务提供者的列表中随机选择一个服务实例进行调用
- [x] RetryRule(轮询重试策略)
    按照轮询策略来获取服务,如果获取的服务实例为null或已经失效,则在指定的时间之内不断地进行重试来获取服务,如果超过指定时间依然没获取到服务实例则返回null。
- [x] WeightedResponseTimeRule(响应速度决定权重策略)
    根据每个服务提供者的响应时间分配一个权重,响应时间越长,权重越小,被选中的可能性也就越低。它的实现原理是,刚开始使用轮询策略并开启一个计时器,每一段时间收集一次所有服务提供者的平均响应时间,然后再给每个服务提供者附上一个权重,权重越高被选中的概率也越大。
- [x] BestAvailableRule(最优可用策略)
    判断最优其实用的是并发连接数。选择并发连接数较小的server发送请求。
- [x] AvailabilityFilteringRule(可用性敏感策略)
    先过滤掉非健康的服务实例，然后再选择连接数较小的服务实例。
- [x] ZoneAvoidanceRule(区域内可用性能最优策略)
    基于AvailabilityFilteringRule基础上做的,首先判断一个zone的运行性能是否可用.剔除不可用的区域zone的所有server,然后再利用AvailabilityPredicate过滤并发连接过多的server。

### 5.6.6.编写模块config
```java
@include(../project_springcloud-eureka/springcloud-consumer-loadbalance-ribbon-configuration-order80/src/main/java/org/openatom/springcloud/config/ApplicationContextConfig.java)
```
### 5.6.7.编写模块controller
```java
@include(../project_springcloud-eureka/springcloud-consumer-loadbalance-ribbon-configuration-order80/src/main/java/org/openatom/springcloud/controller/OrderConsumerController.java)
```
### 5.6.8.编写模块主启动类
```java
@include(../project_springcloud-eureka/springcloud-consumer-loadbalance-ribbon-configuration-order80/src/main/java/org/openatom/springcloud/OrderServiceConsumerLoadBalanceRibbonConfiguration80.java)
```

## 5.7.硬编码配置方式使用Ribbon实现负载均衡(使用自定义的Ribbon负载均衡策略)
