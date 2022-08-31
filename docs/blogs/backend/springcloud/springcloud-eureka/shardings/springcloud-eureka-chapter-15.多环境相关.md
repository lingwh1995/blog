---
title: 基于Eureka搭建Springcloud微服务-15.多环境相关
description: 本章节涉及主要内容有：在父工程pom,具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试，可直接复制运行即可。
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
      content: 本章节涉及主要内容有：在父工程pom,具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试，可直接复制运行即可。
---

# 15.多环境相关
@include(@src/public/enhance/guidance/backend/springcloud/springcloud-eureka/chapter/springcloud-eureka-guidance-chapter15.md)
## 15.3.在父工程pom.xml添加多环境配置
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


<ScrollIntoPageView/>
<HideSideBar/>
