---
title: 基于Eureka搭建Springcloud微服务-章节内容合集
description: 本章节涉及主要内容有：具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试，可直接复制运行即可。
headerDepth: 4
isOriginal: true
category:
  - springcloud
star: 2
tag:
  - springcloud
  - springcloud-eureka
  - 微服务
  - 微服务入门
date: 2021-03-20
sticky: 2
icon: linux
head:
  - - meta
    - name: keywords
      content: 微服务简介,使用Eureka作为注册中心,
---
@include(@src/public/enhance/guidance/backend/springcloud/springcloud-eureka/springcloud-eureka-guidance.md)

# 1.微服务简介 {#1.}
@include(@src/public/enhance/guidance/backend/springcloud/springcloud-eureka/chapter/springcloud-eureka-guidance-chapter1.md)
## 1.3.Martin Fowler微服务论文英文原版
```
https://martinfowler.com/articles/microservices.html
```
## 1.4.Martin Fowler微服务论文国内译版
	如需国内译版,请使用谷歌翻译插件翻译自行翻译

## 1.5.微服务架构图
<img src="./images/microservice_architecture.png"  width="100%" height="800rem" />

## 1.6.微服务架构落地实现方案

# 2.使用Eureka作为注册中心 {#2.}
@include(@src/public/enhance/guidance/backend/springcloud/springcloud-eureka/chapter/springcloud-eureka-guidance-chapter2.md)
## 2.3.Eureka注册中心简介
	Eureka是Netflix公司开发的服务发现框架,Spring Cloud对它提供了支持,将它集成在了自己spring-cloud-netflix子项目中,用来实现Spring Cloud的服务发现功能,核心功能是为实现服务发现提供了基础支持。
	<a href="https://github.com/Netflix/eureka">官方网站(GITHUB)</a>
```
https://github.com/Netflix/eureka
```
	<a href="https://spring.io/projects/spring-cloud-netflix">官方网站(SPRING.IO)</a>
```
https://spring.io/projects/spring-cloud-netflix
```

	EUREKA架构图
<img src="./images/eureka_architecture.png"  width="80%" height="400rem" />

	Eureka的基础组件
	服务提供者(Service Provide): 服务提供方将自身服务注册到Eureka,从而使服务消费方能够找到
	服务消费者(Service Consumer): 服务消费方从Eureka获取注册服务列表,从而能够消费服务
	服务中介(Eureka Server): 是服务提供者和服务消费者之间的桥梁，服务提供者可以把自己注册到服务中介那里，而服务消费者如需要消费一些服务(使用一些功能)就可以在服务中介中寻找注册在服务中介的服务提供者。

	Eureka的提供了哪些功能?
	服务注册(Service Register)
	当Eureka客户端向Eureka Server注册时,它提供自身的元数据,比如IP地址、端口,运行状况指示符URL等
	服务续约(Service Renew)
	Eureka客户会每隔30秒(默认情况下)发送一次心跳来续约。通过续约来告知 Eureka Server该Eureka客户仍然存在,没有出现问题。正常情况下,如果 Eureka Server在90秒没有收到Eureka客户的续约,它会将实例从其注册表中删除
	获取注册列表信息(Service Fetch Registries)
	Eureka 客户端从服务器获取注册表信息,并将其缓存在本地。客户端会使用该信息查找其他服务,从而进行远程调用。该注册列表信息定期(每30 秒钟)更新一次。每次返回注册列表信息可能与Eureka客户端的缓存信息不同,Eureka客户端自动处理。如果由于某种原因导致注册列表信息不能及时匹配,Eureka 客户端则会重新获取整个注册表信息。Eureka 服务器缓存注册列表信息,整个注册表以及每个应用程序的信息进行了压缩,压缩内容和没有压缩的内容完全相同。Eureka客户端和Eureka服务器可以使用JSON/XML格式进行通讯。在默认的情况下 Eureka客户端使用压缩JSON 格式来获取注册列表的信息。
	服务下线(Service Cancel)
	Eureka 客户端在程序关闭时向 Eureka 服务器发送取消请求。发送请求后,该客户端实例信息将从服务器的实例注册表中删除。该下线请求不会自动完成,它需要调用以下内容:DiscoveryManager.getInstance().shutdownComponent();
	服务剔除(Service Eviction)
	在默认的情况下,当Eureka客户端连续90秒(3个续约周期)没有向Eureka服务器发送服务续约,即心跳,Eureka 服务器会将该服务实例从服务注册列表删除,即服务剔除。

## 2.3.Linux重要目录介绍
	/usr → C:/Windows/ /*系统级的目录
	/usr/lib → C:/Windows/System32
	/usr/local → C:/Progrem Files/ /*用户级的程序目录，用户自己编译的软件默认会安装到这个目录下
	/opt → D:/Software /*额外安装的可选应用程序包所放置的位置。一般情况下，我们可以把tomcat等都安装到这里。
	/usr/src /*系统级的源码目录，linux内核的源代码就放在/usr/src/linux里。
	/home 存放所有用户文件的根目录，是用户主目录的基点，比如用户user的主目录就是/home/user，可以用~user表示
	/root 超级用户（系统管理员）的主目录（特权阶级^o^）
	/mnt 系统管理员安装临时文件系统的安装点，系统提供这个目录是让用户临时挂载其他的文件系统。
	/boot 存放用于系统引导时使用的各种文件
	/tmp 用于存放各种临时文件，是公用的临时文件存储点。
	/var 存放临时文件，如各种服务的日志文件。

## 2.4.Centos镜像下载
	如果是学习环境，建议安装centos mini版镜像，生产环境可以安装完整版本

```
@include(project_springcloud-eureka/pom.xml)
```java
