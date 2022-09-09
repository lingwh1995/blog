---
title: 基于Eureka搭建Springcloud微服务-20.综合案例
description: 本章节涉及主要内容有：综合案例简介,在父工程pom,搭建单节点版EUREKA注册中心,搭建服务提供者第一个节点,搭建服务提供者第二个节点,搭建服务消费者,搭建SpringBootAdminServer,测试适用于生产环境的微服务,具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试，可直接复制运行即可。
headerDepth: 4
isOriginal: true
category:
  - springcloud
star: false
tag:
  - 微服务综合案例
date: 2020-07-30
head:
  - - meta
    - name: keywords
      content: 本章节涉及主要内容有：综合案例简介,在父工程pom,搭建单节点版EUREKA注册中心,搭建服务提供者第一个节点,搭建服务提供者第二个节点,搭建服务消费者,搭建SpringBootAdminServer,测试适用于生产环境的微服务,具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试，可直接复制运行即可。
---

# 20.综合案例
@include(@src/public/enhance/guidance/backend/springcloud/springcloud-eureka/chapter/springcloud-eureka-guidance-chapter20.md)
## 20.3.综合案例简介
    综合案例会将前面所有章节提到的技术整合在一起,具体整合的技术有
    a.多环境相关配置
      多环境运行
      多环境打包
      多环境推送到Docker
    b.微服务监控技术
      SpringBootAdmin
    c.更完善的日志系统
      集成logback日志(输出到控制台+输出到文件)
      使用Logstash推送日志到ELK中
      在日志中输出调用链路信息(集成Zipkin+Sleuth,实现在日志中输出TraceId和SpanId和Span-Export)
    d.持续集成技术:
      持续集成到Docker
      持续集成到Kubernetes
    e.更好的使用OpenFeign
      实现OpenFeign动态服务名称和动态URL调用
## 20.4.在父工程pom.xml添加多环境配置
    如果父工程pom.xml已经添加了多环境相关的配置,则这一步骤可以省略,如没有添加,请在pom.xml中添加如下内容
```
<!--定义多种开发环境:开始-->
<profiles>
    <!--开发环境-->
    <profile>
        <!--不同环境的唯一id-->
        <id>dev</id>
        <properties>
            <!--profile.active对应application.yml中的@profile.active@-->
            <profile.active>dev</profile.active>
            <!--dev环境docker私服连接信息(使用docker官方提供的私服):开始-->
            <docker.registry.uri>192.168.0.4:5000</docker.registry.uri>
            <docker.registry.username>docker</docker.registry.username>
            <docker.registry.password>123456</docker.registry.password>
            <!--dev环境docker私服连接信息(使用docker官方提供的私服):结束-->
            <!--dev环境docker部署地址:端口-->
            <docker.host>tcp://192.168.0.4:2375</docker.host>
        </properties>
    </profile>

    <!--测试环境-->
    <profile>
        <id>test</id>
        <properties>
            <profile.active>test</profile.active>
            <!--test环境docker私服连接信息(vmware提供的私服的harbor私服):开始-->
            <docker.registry.uri>192.168.0.4:5001</docker.registry.uri>
            <docker.registry.username>admin</docker.registry.username>
            <docker.registry.password>123456</docker.registry.password>
            <!--dev环境docker私服连接信息(vmware提供的私服的harbor私服):结束-->
            <!--dev环境docker部署地址:端口-->
            <docker.host>tcp://192.168.0.4:2375</docker.host>
        </properties>
    </profile>

    <!--生产环境-->
    <profile>
        <id>prod</id>
        <properties>
            <profile.active>prod</profile.active>
            <!--prod环境docker私服连接信息(使用docker官方提供的私服):开始-->
            <docker.registry.uri>192.168.0.4:5000</docker.registry.uri>
            <docker.registry.username>docker</docker.registry.username>
            <docker.registry.password>123456</docker.registry.password>
            <!--prod环境docker私服连接信息(使用docker官方提供的私服):结束-->
            <!--prod环境docker部署地址:端口-->
            <docker.host>tcp://192.168.0.4:2375</docker.host>
        </properties>
        <activation>
            <!--默认激活环境-->
            <activeByDefault>true</activeByDefault>
        </activation>
    </profile>

    <!--rancher测试专用环境-->
    <profile>
        <id>rancher</id>
        <properties>
            <profile.active>rancher</profile.active>
            <!--rancher环境docker私服连接信息(vmware提供的私服的harbor私服):开始-->
            <docker.registry.uri>192.168.0.4:5001</docker.registry.uri>
            <docker.registry.username>admin</docker.registry.username>
            <docker.registry.password>123456</docker.registry.password>
            <!--rancher环境docker私服连接信息(vmware提供的私服的harbor私服):结束-->
            <!--rancher环境docker部署地址:端口-->
            <docker.host>tcp://192.168.0.4:2375</docker.host>
        </properties>
    </profile>
</profiles>
<!--定义多种开发环境:结束-->
```
## 20.5.搭建单节点版EUREKA注册中心
### 20.5.1.章节内容简介
    为综合案例搭建单节点版的Eureka注册中心
### 20.5.2.模块简介
    适用于生产环境的单节点版Eureka注册中心,启动端口: 7005
### 20.5.3.模块目录结构
```md
@include(../projects/springcloud-eureka/springcloud-basic-sample-register-center-single-node7005/tree.md)
```
### 20.5.4.创建模块
	在父工程(springcloud-eureka)中创建一个名为springcloud-basic-sample-register-center-single-node7005的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息
### 20.5.5.编写模块pom.xml
```xml
@include(../projects/springcloud-eureka/springcloud-basic-sample-register-center-single-node7005/pom.xml)
```
### 20.5.6.编写模块配置文件
    dev环境配置文件
    application.yml
```yml
@include(../projects/springcloud-eureka/springcloud-basic-sample-register-center-single-node7005/src/main/resources/dev/application.yml)
```
    application-dev.yml
```yml
@include(../projects/springcloud-eureka/springcloud-basic-sample-register-center-single-node7005/src/main/resources/dev/application-dev.yml)
```
    logback-custom.xml
```xml
@include(../projects/springcloud-eureka/springcloud-basic-sample-register-center-single-node7005/src/main/resources/dev/logback-custom.xml)
```

    prod环境配置文件
    application.yml
```yml
@include(../projects/springcloud-eureka/springcloud-basic-sample-register-center-single-node7005/src/main/resources/prod/application.yml)
```
    application-prod.yml
```yml
@include(../projects/springcloud-eureka/springcloud-basic-sample-register-center-single-node7005/src/main/resources/prod/application-prod.yml)
```
    logback-custom.xml
```xml
@include(../projects/springcloud-eureka/springcloud-basic-sample-register-center-single-node7005/src/main/resources/prod/logback-custom.xml)
```

    rancher环境配置文件
    application.yml
```yml
@include(../projects/springcloud-eureka/springcloud-basic-sample-register-center-single-node7005/src/main/resources/rancher/application.yml)
```
    application-rancher.yml
```yml
@include(../projects/springcloud-eureka/springcloud-basic-sample-register-center-single-node7005/src/main/resources/rancher/application-rancher.yml)
```
    logback-custom.xml
```xml
@include(../projects/springcloud-eureka/springcloud-basic-sample-register-center-single-node7005/src/main/resources/rancher/logback-custom.xml)
```

    test环境配置文件
    application.yml
```yml
@include(../projects/springcloud-eureka/springcloud-basic-sample-register-center-single-node7005/src/main/resources/test/application.yml)
```
    application-test.yml
```yml
@include(../projects/springcloud-eureka/springcloud-basic-sample-register-center-single-node7005/src/main/resources/test/application-test.yml)
```
    logback-custom.xml
```xml
@include(../projects/springcloud-eureka/springcloud-basic-sample-register-center-single-node7005/src/main/resources/test/logback-custom.xml)
```
### 20.5.7.编写模块config
```java
@include(../projects/springcloud-eureka/springcloud-basic-sample-register-center-single-node7005/src/main/java/org/openatom/springcloud/config/VirtualIpConfig.java)
```
### 20.5.8.编写模块主启动类
```java
@include(../projects/springcloud-eureka/springcloud-basic-sample-register-center-single-node7005/src/main/java/org/openatom/springcloud/BasicSampleRegisterCcenterSingleNode7005.java)
```
### 20.5.9.测试模块
    在浏览器中访问
```
http://localhost:7005/
```
    看到如下界面代表搭建成功
::: center
<div class="imgbg-customer">
<img src="../images/eureka7001.png"  width="100%"/>
</div>
:::

## 20.6.搭建服务提供者第一个节点
### 20.6.1.模块简介
    为综合案例搭建服务提供者的第一个节点,启动端口: 8009
### 20.6.2.模块目录结构
```md
@include(../projects/springcloud-eureka/springcloud-basic-sample-provider-cluster-node-payment8009/tree.md)
```
### 20.6.3.创建模块
	在父工程(springcloud-eureka)中创建一个名为springcloud-basic-sample-provider-cluster-node-payment8009的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息
### 20.6.4.编写模块pom.xml
```xml
@include(../projects/springcloud-eureka/springcloud-basic-sample-provider-cluster-node-payment8009/pom.xml)
```
/pom.xml"
### 20.6.5.编写模块配置文件
    dev环境配置文件
    application.yml
```yml
@include(../projects/springcloud-eureka/springcloud-basic-sample-provider-cluster-node-payment8009/src/main/resources/dev/application.yml)
```
    application-dev.yml
```yml
@include(../projects/springcloud-eureka/springcloud-basic-sample-provider-cluster-node-payment8009/src/main/resources/dev/application-dev.yml)
```
    logback-custom.xml
```xml
@include(../projects/springcloud-eureka/springcloud-basic-sample-provider-cluster-node-payment8009/src/main/resources/dev/logback-custom.xml)
```
    PaymentMapper.xml
```xml
@include(../projects/springcloud-eureka/springcloud-basic-sample-provider-cluster-node-payment8009/src/main/resources/dev/mapper/PaymentMapper.xml)
```

    prod环境配置文件
    application.yml
```yml
@include(../projects/springcloud-eureka/springcloud-basic-sample-provider-cluster-node-payment8009/src/main/resources/prod/application.yml)
```
    application-prod.yml
```yml
@include(../projects/springcloud-eureka/springcloud-basic-sample-provider-cluster-node-payment8009/src/main/resources/prod/application-prod.yml)
```
    logback-custom.xml
```xml
@include(../projects/springcloud-eureka/springcloud-basic-sample-provider-cluster-node-payment8009/src/main/resources/prod/logback-custom.xml)
```
    PaymentMapper.xml
```xml
@include(../projects/springcloud-eureka/springcloud-basic-sample-provider-cluster-node-payment8009/src/main/resources/prod/mapper/PaymentMapper.xml)
```

    rancher环境配置文件
    application.yml
```yml
@include(../projects/springcloud-eureka/springcloud-basic-sample-provider-cluster-node-payment8009/src/main/resources/rancher/application.yml)
```
    application-rancher.yml
```yml
@include(../projects/springcloud-eureka/springcloud-basic-sample-provider-cluster-node-payment8009/src/main/resources/rancher/application-rancher.yml)
```
    logback-custom.xml
```xml
@include(../projects/springcloud-eureka/springcloud-basic-sample-provider-cluster-node-payment8009/src/main/resources/rancher/logback-custom.xml)
```
    PaymentMapper.xml
```xml
@include(../projects/springcloud-eureka/springcloud-basic-sample-provider-cluster-node-payment8009/src/main/resources/rancher/mapper/PaymentMapper.xml)
```

    test环境配置文件
    application.yml
```yml
@include(../projects/springcloud-eureka/springcloud-basic-sample-provider-cluster-node-payment8009/src/main/resources/test/application.yml)
```
    application-test.yml
```yml
@include(../projects/springcloud-eureka/springcloud-basic-sample-provider-cluster-node-payment8009/src/main/resources/test/application-test.yml)
```
    logback-custom.xml
```xml
@include(../projects/springcloud-eureka/springcloud-basic-sample-provider-cluster-node-payment8009/src/main/resources/test/logback-custom.xml)
```
    PaymentMapper.xml
```xml
@include(../projects/springcloud-eureka/springcloud-basic-sample-provider-cluster-node-payment8009/src/main/resources/dev/mapper/PaymentMapper.xml)
```
### 20.6.6.编写模块dao
```java
@include(../projects/springcloud-eureka/springcloud-basic-sample-provider-cluster-node-payment8009/src/main/java/org/openatom/springcloud/dao/PaymentDao.java)
```
### 20.6.7.编写模块service
```java
@include(../projects/springcloud-eureka/springcloud-basic-sample-provider-cluster-node-payment8009/src/main/java/org/openatom/springcloud/service/PaymentService.java)
```
### 20.6.8.编写模块service实现类
```java
@include(../projects/springcloud-eureka/springcloud-basic-sample-provider-cluster-node-payment8009/src/main/java/org/openatom/springcloud/service/impl/PaymentServiceImpl.java)
```
### 20.6.9.编写模块config
```java
@include(../projects/springcloud-eureka/springcloud-basic-sample-provider-cluster-node-payment8009/src/main/java/org/openatom/springcloud/config/VirtualIpConfig.java)
```
### 20.6.10.编写模块controller
```java
@include(../projects/springcloud-eureka/springcloud-basic-sample-provider-cluster-node-payment8009/src/main/java/org/openatom/springcloud/controller/PaymentController.java)
```
### 20.6.11.编写模块主启动类
```java
@include(../projects/springcloud-eureka/springcloud-basic-sample-provider-cluster-node-payment8009/src/main/java/org/openatom/springcloud/BasicSamplePaymentServiceProviderClusterNode8009.java)
```
## 20.7.搭建服务提供者第二个节点
### 20.7.1.模块简介
    为综合案例搭建服务提供者的第二个节点,启动端口: 8010
### 20.7.2.模块目录结构
```md
@include(../projects/springcloud-eureka/springcloud-basic-sample-provider-cluster-node-payment8010/tree.md)
```
### 20.7.3.创建模块
	在父工程(springcloud-eureka)中创建一个名为springcloud-basic-sample-provider-cluster-node-payment8010的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息
### 20.7.4.编写模块pom.xml
```xml
@include(../projects/springcloud-eureka/springcloud-basic-sample-provider-cluster-node-payment8010/pom.xml)
```
### 20.7.5.编写模块配置文件
    dev环境配置文件
    application.yml
```yml
@include(../projects/springcloud-eureka/springcloud-basic-sample-provider-cluster-node-payment8010/src/main/resources/dev/application.yml)
```
    application-dev.yml
```yml
@include(../projects/springcloud-eureka/springcloud-basic-sample-provider-cluster-node-payment8010/src/main/resources/dev/application-dev.yml)
```
    logback-custom.xml
```xml
@include(../projects/springcloud-eureka/springcloud-basic-sample-provider-cluster-node-payment8010/src/main/resources/dev/logback-custom.xml)
```
    PaymentMapper.xml
```xml
@include(../projects/springcloud-eureka/springcloud-basic-sample-provider-cluster-node-payment8010/src/main/resources/dev/mapper/PaymentMapper.xml)
```

    prod环境配置文件
    application.yml
```yml
@include(../projects/springcloud-eureka/springcloud-basic-sample-provider-cluster-node-payment8010/src/main/resources/prod/application.yml)
```
    application-prod.yml
```yml
@include(../projects/springcloud-eureka/springcloud-basic-sample-provider-cluster-node-payment8010/src/main/resources/prod/application-prod.yml)
```
    logback-custom.xml
```xml
@include(../projects/springcloud-eureka/springcloud-basic-sample-provider-cluster-node-payment8010/src/main/resources/prod/logback-custom.xml)
```
    PaymentMapper.xml
```xml
@include(../projects/springcloud-eureka/springcloud-basic-sample-provider-cluster-node-payment8010/src/main/resources/prod/mapper/PaymentMapper.xml)
```

    rancher环境配置文件
    application.yml
```yml
@include(../projects/springcloud-eureka/springcloud-basic-sample-provider-cluster-node-payment8010/src/main/resources/rancher/application.yml)
```
    application-rancher.yml
```yml
@include(../projects/springcloud-eureka/springcloud-basic-sample-provider-cluster-node-payment8010/src/main/resources/rancher/application-rancher.yml)
```
    logback-custom.xml
```xml
@include(../projects/springcloud-eureka/springcloud-basic-sample-provider-cluster-node-payment8010/src/main/resources/rancher/logback-custom.xml)
```
    PaymentMapper.xml
```xml
@include(../projects/springcloud-eureka/springcloud-basic-sample-provider-cluster-node-payment8010/src/main/resources/rancher/mapper/PaymentMapper.xml)
```

    test环境配置文件
    application.yml
```yml
@include(../projects/springcloud-eureka/springcloud-basic-sample-provider-cluster-node-payment8010/src/main/resources/test/application.yml)
```
    application-test.yml
```yml
@include(../projects/springcloud-eureka/springcloud-basic-sample-provider-cluster-node-payment8010/src/main/resources/test/application-test.yml)
```
    logback-custom.xml
```xml
@include(../projects/springcloud-eureka/springcloud-basic-sample-provider-cluster-node-payment8010/src/main/resources/test/logback-custom.xml)
```
    PaymentMapper.xml
```xml
@include(../projects/springcloud-eureka/springcloud-basic-sample-provider-cluster-node-payment8010/src/main/resources/dev/mapper/PaymentMapper.xml)
```
### 20.7.6.编写模块dao
```java
@include(../projects/springcloud-eureka/springcloud-basic-sample-provider-cluster-node-payment8010/src/main/java/org/openatom/springcloud/dao/PaymentDao.java)
```
### 20.7.7.编写模块service
```java
@include(../projects/springcloud-eureka/springcloud-basic-sample-provider-cluster-node-payment8010/src/main/java/org/openatom/springcloud/service/PaymentService.java)
```
### 20.7.8.编写模块service实现类
```java
@include(../projects/springcloud-eureka/springcloud-basic-sample-provider-cluster-node-payment8010/src/main/java/org/openatom/springcloud/service/impl/PaymentServiceImpl.java)
```
### 20.7.9.编写模块config
```java
@include(../projects/springcloud-eureka/springcloud-basic-sample-provider-cluster-node-payment8010/src/main/java/org/openatom/springcloud/config/VirtualIpConfig.java)
```
### 20.7.10.编写模块controller
```java
@include(../projects/springcloud-eureka/springcloud-basic-sample-provider-cluster-node-payment8010/src/main/java/org/openatom/springcloud/controller/PaymentController.java)
```
### 20.7.11.编写模块主启动类
```java
@include(../projects/springcloud-eureka/springcloud-basic-sample-provider-cluster-node-payment8010/src/main/java/org/openatom/springcloud/BasicSamplePaymentServiceProviderClusterNode8010.java)
```
## 20.8.搭建服务消费者
### 20.8.1.模块简介
    为综合案例搭建服务消费者,启动端口: 80
### 20.8.2.模块目录结构
```md
@include(../projects/springcloud-eureka/springcloud-basic-sample-consumer-loadbalance-openfeign-configuration-order80/tree.md)
```
### 20.8.3.创建模块
	在父工程(springcloud-eureka)中创建一个名为springcloud-basic-sample-consumer-loadbalance-openfeign-configuration-order80的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息
### 20.8.4.编写模块pom.xml
```xml
@include(../projects/springcloud-eureka/springcloud-basic-sample-consumer-loadbalance-openfeign-configuration-order80/pom.xml)
```
### 20.8.5.编写模块配置文件
    dev环境配置文件
    application.yml
```yml
@include(../projects/springcloud-eureka/springcloud-basic-sample-consumer-loadbalance-openfeign-configuration-order80/src/main/resources/dev/application.yml)
```
    application-dev.yml
```yml
@include(../projects/springcloud-eureka/springcloud-basic-sample-consumer-loadbalance-openfeign-configuration-order80/src/main/resources/dev/application-dev.yml)
```
    logback-custom.xml
```xml
@include(../projects/springcloud-eureka/springcloud-basic-sample-consumer-loadbalance-openfeign-configuration-order80/src/main/resources/dev/logback-custom.xml)
```

    prod环境配置文件
    application.yml
```yml
@include(../projects/springcloud-eureka/springcloud-basic-sample-consumer-loadbalance-openfeign-configuration-order80/src/main/resources/prod/application.yml)
```
    application-prod.yml
```yml
@include(../projects/springcloud-eureka/springcloud-basic-sample-consumer-loadbalance-openfeign-configuration-order80/src/main/resources/prod/application-prod.yml)
```
    logback-custom.xml
```xml
@include(../projects/springcloud-eureka/springcloud-basic-sample-consumer-loadbalance-openfeign-configuration-order80/src/main/resources/prod/logback-custom.xml)
```

    rancher环境配置文件
    application.yml
```yml
@include(../projects/springcloud-eureka/springcloud-basic-sample-consumer-loadbalance-openfeign-configuration-order80/src/main/resources/rancher/application.yml)
```
    application-rancher.yml
```yml
@include(../projects/springcloud-eureka/springcloud-basic-sample-consumer-loadbalance-openfeign-configuration-order80/src/main/resources/rancher/application-rancher.yml)
```
    logback-custom.xml
```xml
@include(../projects/springcloud-eureka/springcloud-basic-sample-consumer-loadbalance-openfeign-configuration-order80/src/main/resources/rancher/logback-custom.xml)
```

    test环境配置文件
    application.yml
```yml
@include(../projects/springcloud-eureka/springcloud-basic-sample-consumer-loadbalance-openfeign-configuration-order80/src/main/resources/test/application.yml)
```
    application-test.yml
```yml
@include(../projects/springcloud-eureka/springcloud-basic-sample-consumer-loadbalance-openfeign-configuration-order80/src/main/resources/test/application-test.yml)
```
    logback-custom.xml
```xml
@include(../projects/springcloud-eureka/springcloud-basic-sample-consumer-loadbalance-openfeign-configuration-order80/src/main/resources/test/logback-custom.xml)
```
### 20.8.6.编写模块service实现类
    PaymentServiceOpenFeign.java
```java
@include(../projects/springcloud-eureka/springcloud-basic-sample-consumer-loadbalance-openfeign-configuration-order80/src/main/java/org/openatom/springcloud/service/PaymentServiceOpenFeign.java)
```
    PaymentServiceOpenFeignDynamicFeignClientFactory.java
```java
@include(../projects/springcloud-eureka/springcloud-basic-sample-consumer-loadbalance-openfeign-configuration-order80/src/main/java/org/openatom/springcloud/service/PaymentServiceOpenFeignDynamicFeignClientFactory.java)
```
### 20.8.7.编写模块controller
    OrderConsumerController.java
```java
@include(../projects/springcloud-eureka/springcloud-basic-sample-consumer-loadbalance-openfeign-configuration-order80/src/main/java/org/openatom/springcloud/controller/OrderConsumerController.java)
```
    OrderConsumerControllerDynamicFeignClientFactory.java
```java
@include(../projects/springcloud-eureka/springcloud-basic-sample-consumer-loadbalance-openfeign-configuration-order80/src/main/java/org/openatom/springcloud/controller/OrderConsumerControllerDynamicFeignClientFactory.java)
```
### 20.8.8.编写模块config
    VirtualIpConfig.java
```java
@include(../projects/springcloud-eureka/springcloud-basic-sample-consumer-loadbalance-openfeign-configuration-order80/src/main/java/org/openatom/springcloud/config/VirtualIpConfig.java)
```
    OpenFeignConfig.java
```java
@include(../projects/springcloud-eureka/springcloud-basic-sample-consumer-loadbalance-openfeign-configuration-order80/src/main/java/org/openatom/springcloud/config/OpenFeignConfig.java)
```
    DynamicFeignClientFactoryConfig.java
```java
@include(../projects/springcloud-eureka/springcloud-basic-sample-consumer-loadbalance-openfeign-configuration-order80/src/main/java/org/openatom/springcloud/config/DynamicFeignClientFactoryConfig.java)
```
### 20.8.9.编写模块interceptor
    FeignClientRequestInterceptor.java
```java
@include(../projects/springcloud-eureka/springcloud-basic-sample-consumer-loadbalance-openfeign-configuration-order80/src/main/java/org/openatom/springcloud/interceptor/FeignClientRequestInterceptor.java)
```
### 20.8.10.编写模块主启动类
```java
@include(../projects/springcloud-eureka/springcloud-basic-sample-consumer-loadbalance-openfeign-configuration-order80/src/main/java/org/openatom/springcloud/BasicSampleOrderServiceConsumerLoadBalanceOpenFeignConfiguration80.java)
```

## 20.9.搭建SpringBootAdminServer
### 20.9.1.模块简介
    SpringBootAdmin的Server端,启动端口: 9004
### 20.9.2.模块目录结构
```md
@include(../projects/springcloud-eureka/springcloud-basic-sample-mointor-springboot-admin-server9004/tree.md)
```
### 20.9.3.创建模块
	在父工程(springcloud-eureka)中创建一个名为springcloud-basic-sample-mointor-springboot-admin-server9004的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息
### 20.9.4.编写模块pom.xml
```xml
@include(../projects/springcloud-eureka/springcloud-basic-sample-mointor-springboot-admin-server9004/pom.xml)
```
### 20.9.5.编写模块配置文件
    dev环境配置文件
    application.yml
```yml
@include(../projects/springcloud-eureka/springcloud-basic-sample-mointor-springboot-admin-server9004/src/main/resources/dev/application.yml)
```
    application-dev.yml
```yml
@include(../projects/springcloud-eureka/springcloud-basic-sample-mointor-springboot-admin-server9004/src/main/resources/dev/application-dev.yml)
```

    prod环境配置文件
    application.yml
```yml
@include(../projects/springcloud-eureka/springcloud-basic-sample-mointor-springboot-admin-server9004/src/main/resources/prod/application.yml)
```
    application-prod.yml
```yml
@include(../projects/springcloud-eureka/springcloud-basic-sample-mointor-springboot-admin-server9004/src/main/resources/prod/application-prod.yml)
```

    rancher环境配置文件
    application.yml
```yml
@include(../projects/springcloud-eureka/springcloud-basic-sample-mointor-springboot-admin-server9004/src/main/resources/rancher/application.yml)
```
    application-rancher.yml
```yml
@include(../projects/springcloud-eureka/springcloud-basic-sample-mointor-springboot-admin-server9004/src/main/resources/rancher/application-rancher.yml)
```

    test环境配置文件
    application.yml
```yml
@include(../projects/springcloud-eureka/springcloud-basic-sample-mointor-springboot-admin-server9004/src/main/resources/test/application.yml)
```
    application-test.yml
```yml
@include(../projects/springcloud-eureka/springcloud-basic-sample-mointor-springboot-admin-server9004/src/main/resources/test/application-test.yml)
```

### 20.9.6.编写模块主启动类
```java
@include(../projects/springcloud-eureka/springcloud-basic-sample-mointor-springboot-admin-server9004/src/main/java/org/openatom/springcloud/BasicSampleMointorSpringBootAdmin9004.java)
```

## 20.10.测试适用于生产环境的微服务
### 20.10.1.测试多环境相关配置
#### 20.10.1.1.测试多环境运行
    dev环境
```mermaid
flowchart LR
    将运行环境切换为dev环境-->重新导入项目依赖
    重新导入项目依赖-->启动Eureka注册中心
```
    在浏览器访问
```
http://localhost:7005/
```
::: center
<div class="imgbg-customer">
<img src="../images/eureka7005-dev.png"  width="100%"/>
</div>
:::
    可以看到服务名为SPRINGCLOUD-BASIC-SAMPLE-REGISTER-CENTER-SINGLE-NODE7005-DEV

    test环境
```mermaid
flowchart LR
    将运行环境切换为test环境-->重新导入项目依赖
    重新导入项目依赖-->启动Eureka注册中心
```
    在浏览器访问
```
http://localhost:7005/
```
::: center
<div class="imgbg-customer">
<img src="../images/eureka7005-test.png"  width="100%"/>
</div>
:::

#### 20.10.1.2.测试多环境打包
    dev环境
```mermaid
flowchart LR
    将运行环境切换为dev环境-->重新导入项目依赖
    重新导入项目依赖-->使用maven打包
    使用maven打包-->进入target目录中
```
    执行如下命令
```
jar xf springcloud-basic-sample-register-center-single-node7005.jar &&
ls BOOT-INF/classes/
```
    查看jar包中使用的配置文件
```
application.yml  application-dev.yml  logback-custom.xml  org
```
    只包含了application-dev.yml这个多环境配置文件,其他的多环境配置配置都没有被包含进来

    test环境
```mermaid
flowchart LR
    将运行环境切换为test环境-->重新导入项目依赖
    重新导入项目依赖-->使用maven打包
    使用maven打包-->进入target目录中
```
    执行如下命令
```
jar xf springcloud-basic-sample-register-center-single-node7005.jar &&
ls BOOT-INF/classes/
```
    查看jar包中使用的配置文件
```
application.yml  application-test.yml  logback-custom.xml  org
```
    只包含了application-test.yml这个多环境配置文件,其他的多环境配置配置都没有被包含进来
### 20.10.2.测试微服务监控技术
    启动相关服务
```mermaid
flowchart LR
    准备好数据库环境-->将运行环境切换为dev环境
    将运行环境切换为dev环境-->重新导入项目依赖
    重新导入项目依赖-->启动Eureka注册中心
    启动Eureka注册中心-->启动SpringBootAdminServer
    启动SpringBootAdminServer-->启动服务提供者8009节点
    启动服务提供者8009节点-->启动服务提供者8010节点
    启动服务提供者8010节点-->启动当前模块服务消费者
```

    在浏览器访问
```
http://localhost:7005/
```
::: center
<div class="imgbg-customer">
<img src="../images/springbootadmin-server.png"  width="100%"/>
</div>
:::
    可以看到SpringbootAdminServer中已经监控到了相关的服务,可以点击具体服务查看详细信息,这里不在继续做展示

### 20.10.3.测试更完善的日志系统
#### 20.10.3.1.测试输出日志到控制台
    在idea中启动项目时可以在控制台看到输出的日志,这个输出的日志的格式自定义的,不是使用的默认的格式,详细的日志格式查看logback-custom.xml,不同的环境输出的日志格式不一定相同,具体要看logback-custom.xml中针对具体的环境设置的格式
#### 20.10.3.2.测试输出日志到文件
    在当前项目根目录执行命令
```
ls -R log
```
    log:
    localhost  tree.md

    log/localhost:
    192.168.0.1

    log/localhost/192.168.0.1:
    HISTORY
    SPRINGCLOUD-BASIC-SAMPLE-CONSUMER-LOADBALANCE-OPENFEIGN-DYNAMIC-SERVICENAME-ORDER80-DEV-debug.log
    SPRINGCLOUD-BASIC-SAMPLE-CONSUMER-LOADBALANCE-OPENFEIGN-DYNAMIC-SERVICENAME-ORDER80-DEV-error.log
    SPRINGCLOUD-BASIC-SAMPLE-CONSUMER-LOADBALANCE-OPENFEIGN-DYNAMIC-SERVICENAME-ORDER80-DEV-info.log
    SPRINGCLOUD-BASIC-SAMPLE-CONSUMER-LOADBALANCE-OPENFEIGN-DYNAMIC-SERVICENAME-ORDER80-TEST-debug.log
    SPRINGCLOUD-BASIC-SAMPLE-CONSUMER-LOADBALANCE-OPENFEIGN-DYNAMIC-SERVICENAME-ORDER80-TEST-error.log
    SPRINGCLOUD-BASIC-SAMPLE-CONSUMER-LOADBALANCE-OPENFEIGN-DYNAMIC-SERVICENAME-ORDER80-TEST-info.log
    SPRINGCLOUD-BASIC-SAMPLE-PROVIDER-PAYMENT-SERVICE-CLUSTER-DEV-debug.log
    SPRINGCLOUD-BASIC-SAMPLE-PROVIDER-PAYMENT-SERVICE-CLUSTER-DEV-error.log
    SPRINGCLOUD-BASIC-SAMPLE-PROVIDER-PAYMENT-SERVICE-CLUSTER-DEV-info.log
    SPRINGCLOUD-BASIC-SAMPLE-PROVIDER-PAYMENT-SERVICE-CLUSTER-TEST-debug.log
    SPRINGCLOUD-BASIC-SAMPLE-PROVIDER-PAYMENT-SERVICE-CLUSTER-TEST-error.log
    SPRINGCLOUD-BASIC-SAMPLE-PROVIDER-PAYMENT-SERVICE-CLUSTER-TEST-info.log
    SPRINGCLOUD-BASIC-SAMPLE-REGISTER-CENTER-SINGLE-NODE7005-DEV-debug.log
    SPRINGCLOUD-BASIC-SAMPLE-REGISTER-CENTER-SINGLE-NODE7005-DEV-error.log
    SPRINGCLOUD-BASIC-SAMPLE-REGISTER-CENTER-SINGLE-NODE7005-DEV-info.log
    SPRINGCLOUD-BASIC-SAMPLE-REGISTER-CENTER-SINGLE-NODE7005-TEST-debug.log
    SPRINGCLOUD-BASIC-SAMPLE-REGISTER-CENTER-SINGLE-NODE7005-TEST-error.log
    SPRINGCLOUD-BASIC-SAMPLE-REGISTER-CENTER-SINGLE-NODE7005-TEST-info.log

    log/localhost/192.168.0.1/HISTORY:
    SPRINGCLOUD-BASIC-SAMPLE-CONSUMER-LOADBALANCE-OPENFEIGN-DYNAMIC-SERVICENAME-ORDER80-DEV-debug-2022-08-30-index0.log
    SPRINGCLOUD-BASIC-SAMPLE-CONSUMER-LOADBALANCE-OPENFEIGN-DYNAMIC-SERVICENAME-ORDER80-DEV-error-2022-08-30-index0.log
    SPRINGCLOUD-BASIC-SAMPLE-CONSUMER-LOADBALANCE-OPENFEIGN-DYNAMIC-SERVICENAME-ORDER80-DEV-info-2022-08-30-index0.log
    SPRINGCLOUD-BASIC-SAMPLE-CONSUMER-LOADBALANCE-OPENFEIGN-DYNAMIC-SERVICENAME-ORDER80-TEST-debug-2022-07-17-index0.log
    SPRINGCLOUD-BASIC-SAMPLE-CONSUMER-LOADBALANCE-OPENFEIGN-DYNAMIC-SERVICENAME-ORDER80-TEST-error-2022-07-17-index0.log
    SPRINGCLOUD-BASIC-SAMPLE-CONSUMER-LOADBALANCE-OPENFEIGN-DYNAMIC-SERVICENAME-ORDER80-TEST-info-2022-07-17-index0.log
    SPRINGCLOUD-BASIC-SAMPLE-PROVIDER-PAYMENT-SERVICE-CLUSTER-DEV-debug-2022-08-30-index0.log
    SPRINGCLOUD-BASIC-SAMPLE-PROVIDER-PAYMENT-SERVICE-CLUSTER-DEV-error-2022-08-30-index0.log
    SPRINGCLOUD-BASIC-SAMPLE-PROVIDER-PAYMENT-SERVICE-CLUSTER-DEV-info-2022-08-30-index0.log
    SPRINGCLOUD-BASIC-SAMPLE-PROVIDER-PAYMENT-SERVICE-CLUSTER-TEST-debug-2022-07-17-index0.log
    SPRINGCLOUD-BASIC-SAMPLE-PROVIDER-PAYMENT-SERVICE-CLUSTER-TEST-error-2022-07-17-index0.log
    SPRINGCLOUD-BASIC-SAMPLE-PROVIDER-PAYMENT-SERVICE-CLUSTER-TEST-info-2022-07-17-index0.log
    SPRINGCLOUD-BASIC-SAMPLE-REGISTER-CENTER-SINGLE-NODE7005-DEV-debug-2022-08-30-index0.log
    SPRINGCLOUD-BASIC-SAMPLE-REGISTER-CENTER-SINGLE-NODE7005-DEV-error-2022-08-30-index0.log
    SPRINGCLOUD-BASIC-SAMPLE-REGISTER-CENTER-SINGLE-NODE7005-DEV-info-2022-08-30-index0.log
    SPRINGCLOUD-BASIC-SAMPLE-REGISTER-CENTER-SINGLE-NODE7005-TEST-debug-2022-07-17-index0.log
    SPRINGCLOUD-BASIC-SAMPLE-REGISTER-CENTER-SINGLE-NODE7005-TEST-debug-2022-08-30-index0.log
    SPRINGCLOUD-BASIC-SAMPLE-REGISTER-CENTER-SINGLE-NODE7005-TEST-error-2022-07-17-index0.log
    SPRINGCLOUD-BASIC-SAMPLE-REGISTER-CENTER-SINGLE-NODE7005-TEST-error-2022-08-30-index0.log
    SPRINGCLOUD-BASIC-SAMPLE-REGISTER-CENTER-SINGLE-NODE7005-TEST-info-2022-07-17-index0.log
    SPRINGCLOUD-BASIC-SAMPLE-REGISTER-CENTER-SINGLE-NODE7005-TEST-info-2022-08-30-index0.log

    查询出来的都是输出的文件的日志,输出日志到文件时和输出日志到控制台是一样的,不同的环境输出的日志格式不一定相同,具体要看logback-custom.xml中针对具体的环境设置的格式
#### 20.10.3.2.测试推送日志到ELK中
    在192.168.0.5上搭建ELK
详细参考-> <a href="/pure/blogs/environment/centos/centos7/centos7.html#_4-9-3-安装elk" target="_blank">docker中安装ELK</a> 
<HideSideBar/>

<ScrollIntoPageView/>
<HideSideBar/>
