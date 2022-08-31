---
title: 基于Eureka搭建Springcloud微服务-14.设计适用于生产环境的日志系统
description: 本章节涉及主要内容有：适用于生产环境的日志系统简介,ELK简介,搭建具有适用于生产环境的日志系统的服务消费端,搭建ELK,测试适用于生产环境的日志系统简介,具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试，可直接复制运行即可。
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
      content: 本章节涉及主要内容有：适用于生产环境的日志系统简介,ELK简介,搭建具有适用于生产环境的日志系统的服务消费端,搭建ELK,测试适用于生产环境的日志系统简介,具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试，可直接复制运行即可。
---

# 14.设计适用于生产环境的日志系统
@include(@src/public/enhance/guidance/backend/springcloud/springcloud-eureka/chapter/springcloud-eureka-guidance-chapter14.md)
## 14.3.适用于生产环境的日志系统简介
    在开发中,可以在idea控制台中实时查看系统输出的日志,这可以满足开发时的需求,但是仍然存在以下问题
      a.日志输出到控制台时没有指定格式,使用的默认的日志格式
      b.日志只输出到了控制台,没有输出到文件
      c.日志输出时没有包含调用链路信息
      d.日志只输出到了控制台,没有实时推送到ELK中
    为了解决以上问题,需要在搭建服务时将这些功能增加进去
## 14.4.ELK简介
    ELK是三个开源软件的缩写,分别表示: Elasticsearch,Logstash,Kibana,它们都是开源软件。

    Elasticsearch是个开源分布式搜索引擎，提供搜集、分析、存储数据三大功能。它的特点有: 分布式、零配置、自动发现、索引自动分片、索引副本机制、restful风格接口、多数据源、自动搜索负载等。
<a href="https://www.elastic.co/cn/elasticsearch/" target="_blank">官方网址</a>
```
https://www.elastic.co/cn/elasticsearch/
```
<a href="https://github.com/elastic/elasticsearch" target="_blank">官方网址(GITHUB)</a>
```
https://github.com/elastic/elasticsearch
```

    Logstash主要是用来日志的搜集、分析、过滤日志的工具,支持大量的数据获取方式。一般工作方式为c/s架构,client端安装在需要收集日志的主机上,server端负责将收到的各节点日志进行过滤、修改等操作在一并发往elasticsearch上去。
<a href="https://www.elastic.co/cn/logstash/" target="_blank">官方网址</a>
```
https://www.elastic.co/cn/logstash/
```
<a href="https://github.com/elastic/logstash" target="_blank">官方网址(GITHUB)</a>
```
https://github.com/elastic/logstash
```

    Kibana也是一个开源和免费的工具,Kibana可以为Logstash和ElasticSearch提供的日志分析友好的Web界面，可以帮助汇总、分析和搜索重要数据日志。
<a href="https://www.elastic.co/cn/kibana/" target="_blank">官方网址</a>
```
https://www.elastic.co/cn/kibana/
```
<a href="https://github.com/elastic/kibana" target="_blank">官方网址(GITHUB)</a>
```
https://github.com/elastic/kibana
```

## 14.5.搭建具有适用于生产环境的日志系统的服务消费端
### 14.5.1.模块简介
    适用于生产环境的日志系统的服务消费端,启动端口: 80
### 14.5.2.模块目录结构
```md
@include(../projects/springcloud-eureka/springcloud-consumer-loadbalance-openfeign-perfect-log-system-order80/tree.md)
```
### 14.5.3.创建模块
	在父工程(springcloud-eureka)中创建一个名为springcloud-consumer-loadbalance-openfeign-perfect-log-system-order80的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息
### 14.5.4.编写模块pom.xml
```xml
@include(../projects/springcloud-eureka/springcloud-consumer-loadbalance-openfeign-perfect-log-system-order80/pom.xml)
```
### 14.5.5.编写模块application.yml
```yml
@include(../projects/springcloud-eureka/springcloud-consumer-loadbalance-openfeign-perfect-log-system-order80/src/main/resources/application.yml)
```
### 14.5.6.编写模块logback-custom.xml
```xml
@include(../projects/springcloud-eureka/springcloud-consumer-loadbalance-openfeign-perfect-log-system-order80/src/main/resources/logback-custom.xml)
```
### 14.5.7.编写模块config
```java
@include(../projects/springcloud-eureka/springcloud-consumer-loadbalance-openfeign-perfect-log-system-order80/src/main/java/org/openatom/springcloud/config/OpenFeignConfig.java)
```
### 14.5.8.编写模块service
```java
@include(../projects/springcloud-eureka/springcloud-consumer-loadbalance-openfeign-perfect-log-system-order80/src/main/java/org/openatom/springcloud/service/PaymentServiceOpenFeign.java)
```
### 14.5.9.编写模块主启动类
```java
@include(../projects/springcloud-eureka/springcloud-consumer-loadbalance-openfeign-perfect-log-system-order80/src/main/java/org/openatom/springcloud/OrderServiceConsumerLoadBalanceOpenFeignPerfectLogSystem80.java)
```
## 14.6.搭建ELK
    在192.168.0.5上搭建ELK
详细参考-> <a href="/blogs/environment/centos/centos7/centos7.html#_4-9-3-安装elk" target="_blank" target="_blank">Docker中安装ELK</a>
## 14.7.测试适用于生产环境的日志系统简介
### 14.7.1.启动相关服务
```mermaid
flowchart LR
    启动Zipkin-->启动ELK
    启动ELK-->启动Eureka注册中心
    启动Eureka注册中心-->启动服务消费者
```
### 14.7.2.测试日志输出到控制台时自定义日志格式
    在idea控制台中查看输入的日志格式,这个格式使用的是自定义的日志格式,不是默认的日志格式,请自行在idea控制台查看日志格式,这里不再赘述
### 14.7.3.测试日志输出文件
    在当前项目根目录执行命令
```
ls -R log
```
    log:
    localhost

    log/localhost:
    192.168.1.4

    log/localhost/192.168.1.4:
    HISTORY                                                                          SPRINGCLOUD-CONSUMER-LOADBALANCE-OPENFEIGN-PERFECT-LOG-SYSTEM-ORDER80-error.log
    SPRINGCLOUD-CONSUMER-LOADBALANCE-OPENFEIGN-PERFECT-LOG-SYSTEM-ORDER80-debug.log  SPRINGCLOUD-CONSUMER-LOADBALANCE-OPENFEIGN-PERFECT-LOG-SYSTEM-ORDER80-info.log 

    log/localhost/192.168.1.4/HISTORY:
    SPRINGCLOUD-CONSUMER-LOADBALANCE-OPENFEIGN-PERFECT-LOG-SYSTEM-ORDER80-debug-2022-08-31-index0.log
    SPRINGCLOUD-CONSUMER-LOADBALANCE-OPENFEIGN-PERFECT-LOG-SYSTEM-ORDER80-error-2022-08-31-index0.log
    SPRINGCLOUD-CONSUMER-LOADBALANCE-OPENFEIGN-PERFECT-LOG-SYSTEM-ORDER80-info-2022-08-31-index0.log

    查询出来的结果就是服务消费者模块输出到文件的日志
### 14.7.4.测试在日志输出中包含服务调用链路信息
    日志输出到控制台、输出到文件或推送到ELK中时日志内容中都包含调用链路信息,以输出到控台为例,在控制台查看任意一行日志,都包含了[TraceId: SpanId: Span-Export:]这个内容,这三个字段就是服务调用链路信息,需要注意的是当未调用服务时,没有生成调用链路信息,这三个字段的值都是空的,当调用了服务后,生成了调用链路信息,这三个字段的值就不为空了
### 14.7.3.测试将日志实时推送到ELK中
    访问kibana
```
http://192.168.0.5:5601/
```
::: center
<div class="imgbg-customer">
<img src="../images/kibana.png"  width="100%"/>
</div>
:::

    为推送到ELK中的日志文件创建索引
```mermaid
flowchart LR
    访问kibana-->点击左侧Discover
    点击左侧Discover-->在Create_Index_pattern输入springcloud-eureka-*
    在Create_Index_pattern输入springcloud-eureka-*-->点击Next_Step
    点击Next_Step-->下拉框选择@timestap
    下拉框选择@timestap-->点击Create_Index_Pattern
    点击Create_Index_Pattern-->再次点击Discover
```
    注意:如果点击Discover没有显示日志,请确定ELK部署机器中的时区和时间是否正确,如果不正确,将时区和时间修改正确后再次启动项目,重新执行创建索引的操作

<ScrollIntoPageView/>
<HideSideBar/>
