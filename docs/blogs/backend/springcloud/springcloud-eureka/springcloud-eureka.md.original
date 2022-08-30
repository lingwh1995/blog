# 1.微服务简介
## <a href="https://martinfowler.com/articles/microservices.html" target="_blank">1.1.Martin Fowler微服务论文英文原版</a>
```
https://martinfowler.com/articles/microservices.html
```
## <a href="https://martinfowler.com/articles/microservices.html" target="_blank">1.2.Martin Fowler微服务论文国内译版</a>
	如需国内译版,请使用谷歌翻译插件翻译自行翻译

## 1.1.微服务架构图
<img src="./images/microservice_architecture.png"  width="100%"/>

## 1.2.CAP中占据情况
	Eureka在CAP中占据AP
<img src="./images/cap.png"  width="100%"/>

## 1.3.微服务架构落地实现方案
	微服务架构落地实现有很多种方案,本次介绍的方案技术栈如下:
	注册中心: EUREKA
## <a href="https://gitee.com/lingwh1995/springcloud-eureka.git"  target="_blank">1.6.项目源代码</a>
```
https://gitee.com/lingwh1995/springcloud-eureka.git
```

# 2.搭建项目基础设施
## 2.1.创建项目父工程
### 2.1.1.创建父工程
	在idea中创建一个名为springcloud-eureka的maven工程,创建完成后打开该工程,删除src文件夹
### 2.1.2.编写父工程pom.xml
    pom.xml中配置主要包括两部分内容,第一是对子模块依赖的jar包和使用到的插件的版本的统一规定,第二是规定了四种不同的环境,分别是: 1.开发环境(dev) 2.测试环境(test) 3.生产环境(prod) 4.rancher测试专用环境(rancher),关于这四种环境的详细内容会在本博客的最后一部分进行详细解析说明

    pom.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>

<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>org.openatom</groupId>
    <artifactId>springcloud-eureka</artifactId>
    <version>1.0-SNAPSHOT</version>
    <packaging>pom</packaging>

    <!--引入所有模块：开始-->
    <modules>
    </modules>
    <!--引入所有模块：结束-->

    <!--统一定义依赖具体版本：开始 -->
    <properties>
        <!--依赖版本-->
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <maven.compiler.source>1.8</maven.compiler.source>
        <maven.compiler.target>1.8</maven.compiler.target>
        <junit.version>4.12</junit.version>
        <log4j.version>1.2.17</log4j.version>
        <lombok.version>1.16.18</lombok.version>
        <mysql.connector.version>8.0.28</mysql.connector.version>
        <spring.boot.version>2.2.2.RELEASE</spring.boot.version>
        <druid.spring.boot.version>1.1.10</druid.spring.boot.version>
        <spring.cloud.version>Hoxton.SR1</spring.cloud.version>
        <mybatis.spring.boot.version>1.3.0</mybatis.spring.boot.version>
        <org.openatom.api.commons.version>1.0-SNAPSHOT</org.openatom.api.commons.version>
        <com.ctrip.framework.apollo.apollo-client.version>2.0.1</com.ctrip.framework.apollo.apollo-client.version>
        <io.seata.version>1.4.2</io.seata.version>
        <spring.cloud.alibaba.version>2.2.0.RELEASE</spring.cloud.alibaba.version>
        <net.logstash.logback.logstash-logback-encoder.version>5.2</net.logstash.logback.logstash-logback-encoder.version>
        <spring.boot.admin.version>2.2.1</spring.boot.admin.version>

        <!--插件版本-->
        <org.springframework.boot.spring-boot-maven-plugin.version>2.2.2.RELEASE</org.springframework.boot.spring-boot-maven-plugin.version>
        <org.apache.maven.plugins.maven-resources-plugin.version>3.2.0</org.apache.maven.plugins.maven-resources-plugin.version>
        <io.fabric8.docker-maven-plugin.version>0.39.1</io.fabric8.docker-maven-plugin.version>
        <org.apache.maven.plugins.maven-antrun-plugin.version>1.8</org.apache.maven.plugins.maven-antrun-plugin.version>
    </properties>
    <!--统一定义依赖具体版本：结束 -->

    <!--统一定义依赖版本：开始-->
    <dependencyManagement>
        <dependencies>
            <!--spring boot 2.2.2-->
            <dependency>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-dependencies</artifactId>
                <version>${spring.boot.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
            <!--spring cloud Hoxton.SR1-->
            <dependency>
                <groupId>org.springframework.cloud</groupId>
                <artifactId>spring-cloud-dependencies</artifactId>
                <version>${spring.cloud.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
            <!--spring cloud alibaba 2.1.0.RELEASE-->
            <dependency>
                <groupId>com.alibaba.cloud</groupId>
                <artifactId>spring-cloud-alibaba-dependencies</artifactId>
                <version>${spring.cloud.alibaba.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
            <dependency>
                <groupId>mysql</groupId>
                <artifactId>mysql-connector-java</artifactId>
                <version>${mysql.connector.version}</version>
            </dependency>
            <dependency>
                <groupId>org.mybatis.spring.boot</groupId>
                <artifactId>mybatis-spring-boot-starter</artifactId>
                <version>${mybatis.spring.boot.version}</version>
            </dependency>
            <dependency>
                <groupId>com.alibaba</groupId>
                <artifactId>druid-spring-boot-starter</artifactId>
                <version>${druid.spring.boot.version}</version>
            </dependency>
            <dependency>
                <groupId>junit</groupId>
                <artifactId>junit</artifactId>
                <version>${junit.version}</version>
            </dependency>
            <dependency>
                <groupId>log4j</groupId>
                <artifactId>log4j</artifactId>
                <version>${log4j.version}</version>
            </dependency>
            <dependency>
                <groupId>org.projectlombok</groupId>
                <artifactId>lombok</artifactId>
                <version>${lombok.version}</version>
            </dependency>
            <!--定义公共的工程版本-->
            <dependency>
                <groupId>org.openatom</groupId>
                <artifactId>springcloud-api-commons</artifactId>
                <version>${org.openatom.api.commons.version}</version>
            </dependency>
            <!--Apollo客户端-->
            <dependency>
                <groupId>com.ctrip.framework.apollo</groupId>
                <artifactId>apollo-client</artifactId>
                <version>${com.ctrip.framework.apollo.apollo-client.version}</version>
            </dependency>
            <!--Seata客户端-->
            <dependency>
                <groupId>io.seata</groupId>
                <artifactId>seata-spring-boot-starter</artifactId>
                <version>${io.seata.version}</version>
            </dependency>
            <!--springboot admin server端-->
            <dependency>
                <groupId>de.codecentric</groupId>
                <artifactId>spring-boot-admin-starter-server</artifactId>
                <version>${spring.boot.admin.version}</version>
            </dependency>
            <!--springboot admin client端-->
            <dependency>
                <groupId>de.codecentric</groupId>
                <artifactId>spring-boot-admin-starter-client</artifactId>
                <version>${spring.boot.admin.version}</version>
            </dependency>
            <!--logstah-->
            <dependency>
                <groupId>net.logstash.logback</groupId>
                <artifactId>logstash-logback-encoder</artifactId>
                <version>${net.logstash.logback.logstash-logback-encoder.version}</version>
            </dependency>
        </dependencies>
    </dependencyManagement>
    <!--统一定义依赖版本：结束-->

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

    <!--统一定义插件版本：开始-->
    <build>
        <!--spring-boot-maven-plugin插件-->
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <version>${org.springframework.boot.spring-boot-maven-plugin.version}</version>
            </plugin>
            <!--支持yaml读取pom的参数-->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-resources-plugin</artifactId>
                <version>${org.apache.maven.plugins.maven-resources-plugin.version}</version>
            </plugin>
            <!--执行maven命令时执行删除jar包和复制jar包操作-->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-antrun-plugin</artifactId>
                <version>${org.apache.maven.plugins.maven-antrun-plugin.version}</version>
            </plugin>
            <!--docker maven插件-->
            <plugin>
                <groupId>io.fabric8</groupId>
                <artifactId>docker-maven-plugin</artifactId>
                <version>${io.fabric8.docker-maven-plugin.version}</version>
            </plugin>
        </plugins>
    </build>
    <!--统一定义插件版本：结束-->
</project>
```

## 2.2.创建项目依赖的公共模块
### 2.2.1.模块目录结构
@import "./projects/springcloud-eureka/springcloud-api-commons/tree.md"
### 2.2.2.创建模块
	在父工程(springcloud-eureka)中创建一个名为springcloud-api-commons的maven模块,这个模块中包含了一些公共的Java实体和一些公共的插件,后面的每个模块都要引入这个公共模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息
### 2.2.3.编写模块pom.xml
@import "./projects/springcloud-eureka/springcloud-api-commons/pom.xml"
### 2.2.4.编写模块中实体类
    Payment.java
@import "./projects/springcloud-eureka/springcloud-api-commons//src/main/java/org/openatom/springcloud/entities/Payment.java"

## 2.3.准备项目需要的数据库
### 2.3.1.安装mysql数据库
详细参考-> <a href="/blogs/environment/centos/centos7/shardings/centos7-chapter-3.搭建基础开发环境.html#_3-5-安装mysql" target="_blank">安装mysql(8.x版本)</a>

### 2.3.2.创建项目需要的数据库
    导入数据库脚本(application.yml中数据库配置和mysql部署机器信息保持一致)
@import "./projects/springcloud-eureka/script/payment.sql"

## 2.4.配置使用热部署
    在公共模块的pom.xml中添加热部署依赖和相关配置(上一步已经添加进去了,这里只是展示热部署部分的代码),将热部署相关插件和配置放在公共模块的好处是,其他的模块引用公共模块的时候就已经引入了热部署相关插件和配置,无需额外引入
```xml
    <dependencies>
        <!--热部署插件-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-devtools</artifactId>
            <scope>runtime</scope>
            <!--是否依赖传递:true,依赖不传递,false:依赖传递,这是maven的特性-->
            <optional>false</optional>
        </dependency>
    </dependencies>

    <!--热部署需要加这个-->
    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <configuration>
                    <fork>true</fork>
                    <addResources>true</addResources>
                </configuration>
            </plugin>
        </plugins>
    </build>
```
    更改idea设置
<img src="./images/idea设置热部署-1.png"  width="100%"/>
<img src="./images/idea设置热部署-2.png"  width="100%"/>

    热部署注意事项
    开发阶段开启热部署,发布阶段一定要关闭热部署
    开启热部署功能:spring.devtools.restart.enabled: true
    关闭热部署功能:spring.devtools.restart.enabled: false

# 3.使用Eureka作为注册中心
## 3.1.Eureka注册中心简介
	Eureka是Netflix公司开发的服务发现框架,Spring Cloud对它提供了支持,将它集成在了自己spring-cloud-netflix子项目中,用来实现Spring Cloud的服务发现功能,核心功能是为实现服务发现提供了基础支持。本次将搭建一个单节点版的Eureka注册中心和一个集群(高可用)版的Eureka注册中心,用来实现服务发现功能。

<a href="https://github.com/Netflix/eureka" target="_blank">官方网站(GITHUB)</a>
```
https://github.com/Netflix/eureka
```

<a href="https://spring.io/projects/spring-cloud-netflix" target="_blank">官方网站(SPRING.IO)</a>
```
https://spring.io/projects/spring-cloud-netflix
```

	EUREKA架构图
<img src="./images/eureka_architecture.png"  width="80%"/>

	Eureka的基础组件
	服务提供者(Service Provide): 服务提供端将自身服务注册到Eureka,从而使服务消费端能够找到
	服务消费者(Service Consumer): 服务消费端从Eureka获取注册服务列表,从而能够消费服务
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

## 3.2.单节点版EUREKA注册中心搭建
### 3.2.1.章节内容简介
    本章节会展示如何搭建一个单节点版的Eureka注册中心
### 3.2.2.模块简介
    单节点版Eureka注册中心,启动端口: 7001
### 3.2.3.模块目录结构
@import "./projects/springcloud-eureka/springcloud-register-center-single-node7001/tree.md"
### 3.2.4.创建模块
	在父工程(springcloud-eureka)中创建一个名为springcloud-register-center-single-node7001的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息
### 3.2.5.编写模块pom.xml
@import "./projects/springcloud-eureka/springcloud-register-center-single-node7001/pom.xml"
### 3.2.6.编写模块application.yml
@import "./projects/springcloud-eureka/springcloud-register-center-single-node7001/src/main/resources/application.yml"
### 3.2.7.编写模块主启动类
@import "./projects/springcloud-eureka/springcloud-register-center-single-node7001/src/main/java/org/openatom/springcloud/RegisterCcenterSingleNode7001.java"
### 3.2.8.测试模块
    在浏览器中访问
```
http://localhost:7001/
```
    看到如下界面代表搭建成功
<img src="./images/eureka7001.png"  width="100%"/>

## 3.3.集群(高可用)版EUREKA注册中心搭建
### 3.3.1.章节内容简介
    本章节会展示如何搭建一个集群(高可用)版的Eureka注册中心,共有三个节点,Eureka注册中心集群的原理是多个Eureka Server之间相互注册,从而组成一个集群。
### 3.3.2.搭建Eureka集群中第一个节点
    模块简介
    集群(高可用)版Eureka注册中心中第一个节点,启动端口: 7002

    模块目录结构
@import "./projects/springcloud-eureka/springcloud-register-center-cluster-node7002/tree.md"

    创建模块
	在父工程(springcloud-eureka)中创建一个名为springcloud-register-center-cluster-node7002的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息

    编写模块pom.xml
@import "./projects/springcloud-eureka/springcloud-register-center-cluster-node7002/pom.xml"

    编写模块application.yml
@import "./projects/springcloud-eureka/springcloud-register-center-cluster-node7002/src/main/resources/application.yml"

    编写模块主启动类
@import "./projects/springcloud-eureka/springcloud-register-center-cluster-node7002/src/main/java/org/openatom/springcloud/RegisterCcenterClusterNode7002.java"

### 3.3.3.搭建Eureka集群中第二个节点
    模块简介
    集群(高可用)版Eureka注册中心中第二个节点,启动端口: 7003

    模块目录结构
@import "./projects/springcloud-eureka/springcloud-register-center-cluster-node7003/tree.md"

    创建模块
	在父工程(springcloud-eureka)中创建一个名为springcloud-register-center-cluster-node7003的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息

    编写模块pom.xml
@import "./projects/springcloud-eureka/springcloud-register-center-cluster-node7003/pom.xml"

    编写模块application.yml
@import "./projects/springcloud-eureka/springcloud-register-center-cluster-node7003/src/main/resources/application.yml"

    编写模块主启动类
@import "./projects/springcloud-eureka/springcloud-register-center-cluster-node7003/src/main/java/org/openatom/springcloud/RegisterCcenterClusterNode7003.java"

### 3.3.4.搭建Eureka集群中第三个节点
    模块简介
    集群(高可用)版Eureka注册中心中第三个节点,启动端口: 7004

    模块目录结构
@import "./projects/springcloud-eureka/springcloud-register-center-cluster-node7004/tree.md"

    创建模块
	在父工程(springcloud-eureka)中创建一个名为springcloud-register-center-cluster-node7004的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息

    编写模块pom.xml
@import "./projects/springcloud-eureka/springcloud-register-center-cluster-node7004/pom.xml"

    编写模块application.yml
@import "./projects/springcloud-eureka/springcloud-register-center-cluster-node7004/src/main/resources/application.yml"

    编写模块主启动类
@import "./projects/springcloud-eureka/springcloud-register-center-cluster-node7004/src/main/java/org/openatom/springcloud/RegisterCcenterClusterNode7004.java"

### 3.3.5.配置host
    修改host文件,C:\Windows\System32\drivers\etc\host
    添加如下内容:
    127.0.0.1		eureka7002
    127.0.0.1		eureka7003
    127.0.0.1		eureka7004

### 3.3.6.测试集群模块
    测试集群中的第一个节点(7002),浏览器访问
```
http://eureka7002:7002/
```

<img src="./images/eureka7002.png"  width="100%"/>

    测试集群中的第二个节点(7003),浏览器访问
```
http://eureka7003:7003/
```
<img src="./images/eureka7003.png"  width="100%"/>

    测试集群中的第三个节点(7004),浏览器访问
```
http://eureka7004:7004/
```
<img src="./images/eureka7004.png"  width="100%"/>

    可以看到,在每个节点和都和其他两个节点相互注册,这代表集群搭建成功

# 4.搭建第一个微服务应用
## 4.1.第一个微服务应用简介
    第一个微服务应用由四部分组成,分别是注册中心(单节点)、服务消费者(单节点)、服务提供者(两个节点)、运行所需要的数据库环境,这里的注册中心使用单节点版注册中心,如果需要使用集群版注册中心,只需要在application.yml将defaultZone的配置切换为集群版配置即可,服务提供者第一个节点和第二个节点是除了端口和模块名称之外其他所有代码均是相同的,之所以要创建两个相同的模块是为了模拟生产环境中一个服务部署在多个节点的情况,这里为了查看日志方便,直接创建了两个相同的服务提供者模块。
## 4.2.搭建服务提供者第一个节点
### 4.2.1.模块简介
    服务提供者第一个节点,启动端口: 8001
### 4.2.2.模块目录结构
@import "./projects/springcloud-eureka/springcloud-provider-cluster-node-payment8001/tree.md"
### 4.2.3.创建模块
	在父工程(springcloud-eureka)中创建一个名为springcloud-provider-cluster-node-payment8001的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息
### 4.2.4.编写模块pom.xml
@import "./projects/springcloud-eureka/springcloud-provider-cluster-node-payment8001/pom.xml"
### 4.2.5.编写模块application.yml
@import "./projects/springcloud-eureka/springcloud-provider-cluster-node-payment8001/src/main/resources/application.yml"
### 4.2.6.编写模块Mybatis配置文件
@import "./projects/springcloud-eureka/springcloud-provider-cluster-node-payment8001/src/main/resources/mapper/PaymentMapper.xml"
### 4.2.7.编写模块dao
@import "./projects/springcloud-eureka/springcloud-provider-cluster-node-payment8001/src/main/java//org/openatom/springcloud/dao/PaymentDao.java"
### 4.2.8.编写模块service
@import "./projects/springcloud-eureka/springcloud-provider-cluster-node-payment8001/src/main/java//org/openatom/springcloud/service/PaymentService.java"
### 4.2.9.编写模块service实现类
@import "./projects/springcloud-eureka/springcloud-provider-cluster-node-payment8001/src/main/java//org/openatom/springcloud/service/impl/PaymentServiceImpl.java"
### 4.2.10.编写模块controller
@import "./projects/springcloud-eureka/springcloud-provider-cluster-node-payment8001/src/main/java//org/openatom/springcloud/controller/PaymentController.java"
### 4.2.11.编写模块主启动类
@import "./projects/springcloud-eureka/springcloud-provider-cluster-node-payment8001/src/main/java//org/openatom/springcloud/PaymentServiceProviderClusterNode8001.java"

## 4.3.搭建服务提供者第二个节点
### 4.3.1.模块简介
    服务提供者第二个节点,启动端口: 8002
### 4.3.2.模块目录结构
@import "./projects/springcloud-eureka/springcloud-provider-cluster-node-payment8002/tree.md"
### 4.3.3.创建模块
	在父工程(springcloud-eureka)中创建一个名为springcloud-provider-cluster-node-payment8002的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息
### 4.3.4.编写模块pom.xml
@import "./projects/springcloud-eureka/springcloud-provider-cluster-node-payment8002/pom.xml"
### 4.3.5.编写模块application.yml
@import "./projects/springcloud-eureka/springcloud-provider-cluster-node-payment8002/src/main/resources/application.yml"
### 4.3.6.编写模块Mybatis配置文件
@import "./projects/springcloud-eureka/springcloud-provider-cluster-node-payment8002/src/main/resources/mapper/PaymentMapper.xml"
### 4.3.7.编写模块dao
@import "./projects/springcloud-eureka/springcloud-provider-cluster-node-payment8002/src/main/java//org/openatom/springcloud/dao/PaymentDao.java"
### 4.3.8.编写模块service
@import "./projects/springcloud-eureka/springcloud-provider-cluster-node-payment8002/src/main/java//org/openatom/springcloud/service/PaymentService.java"
### 4.3.9.编写模块service实现类
@import "./projects/springcloud-eureka/springcloud-provider-cluster-node-payment8002/src/main/java//org/openatom/springcloud/service/impl/PaymentServiceImpl.java"
### 4.3.10.编写模块controller
@import "./projects/springcloud-eureka/springcloud-provider-cluster-node-payment8002/src/main/java//org/openatom/springcloud/controller/PaymentController.java"
### 4.3.11.编写模块主启动类
@import "./projects/springcloud-eureka/springcloud-provider-cluster-node-payment8002/src/main/java//org/openatom/springcloud/PaymentServiceProviderClusterNode8002.java"

## 4.4.搭建服务消费者
### 4.4.1.模块简介
    基于SpringCloud官方默认组件实现的服务消费者,启动端口: 80
### 4.4.2.模块目录结构
    @import "./projects/springcloud-eureka/springcloud-consumer-loadbalance-default-order80/tree.md"
### 4.4.3.创建模块
	在父工程(springcloud-eureka)中创建一个名为springcloud-consumer-loadbalance-default-order80的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息
### 4.4.4.编写模块pom.xml
@import "./projects/springcloud-eureka/springcloud-consumer-loadbalance-default-order80/pom.xml"
### 4.4.5.编写模块application.yml
@import "./projects/springcloud-eureka/springcloud-consumer-loadbalance-default-order80/src/main/resources/application.yml"
### 4.4.6.编写模块config
@import "./projects/springcloud-eureka/springcloud-consumer-loadbalance-default-order80/src/main/java/org/openatom/springcloud/config/ApplicationContextConfig.java"
### 4.4.7.编写模块controller
@import "./projects/springcloud-eureka/springcloud-consumer-loadbalance-default-order80/src/main/java/org/openatom/springcloud/controller/OrderConsumerController.java"
### 4.4.8.编写模块主启动类
@import "./projects/springcloud-eureka/springcloud-consumer-loadbalance-default-order80/src/main/java/org/openatom/springcloud/OrderServiceConsumerLoadBalanceDefault80.java"

## 4.5.启动并测试第一个微服务应用
### 4.5.1.启动第一个微服务应用
```mermaid
flowchart LR
    准备好数据库环境-->启动Eureka注册中心
    启动Eureka注册中心-->启动服务提供者第一个节点
    启动服务提供者第一个节点-->启动服务提供者第二个节点
    启动服务提供者第二个节点-->启动当前模块服务消费者
```
### 4.5.2.测试第一个微服务应用
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

# 5.使用Ribbon实现客户端负载均衡

## 5.1.Ribbon简介
    Ribbon是Netflix发布的开源项目，主要功能是提供客户端的软件负载均衡算法，将Netflix的中间层服务连接在一起。Ribbon客户端组件提供一系列完善的配置项如连接超时，重试等。简单的说，就是在配置文件中列出Load Balancer（简称LB）后面所有的机器，Ribbon会自动的帮助你基于某种规则（如简单轮询，随即连接等）去连接这些机器,也可以使用Ribbon实现自定义的负载均衡算法。

<a href="https://github.com/Netflix/ribbon" target="_blank">官方网址</a>
```
https://github.com/Netflix/ribbon
```

## 5.2.硬编码配置方式使用Ribbon实现负载均衡(使用Ribbon自带的负载均衡策略)
### 5.2.1.模块简介
    基于Ribbon以硬编码配置方式实现的服务消费者,使用Ribbon自带的负载均衡策略,启动端口: 80
### 5.2.2.模块目录结构
@import "./projects/springcloud-eureka/springcloud-consumer-loadbalance-ribbon-hardcode-order80/tree.md"
### 5.2.3.创建模块
	在父工程(springcloud-eureka)中创建一个名为springcloud-consumer-loadbalance-ribbon-hardcode-order80的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息
### 5.2.4.编写模块pom.xml
@import "./projects/springcloud-eureka/springcloud-consumer-loadbalance-ribbon-hardcode-order80/pom.xml"
### 5.2.5.编写模块application.yml
@import "./projects/springcloud-eureka/springcloud-consumer-loadbalance-ribbon-hardcode-order80/src/main/resources/application.yml"
### 5.2.6.编写模块config
@import "./projects/springcloud-eureka/springcloud-consumer-loadbalance-ribbon-hardcode-order80/src/main/java/org/openatom/springcloud/config/ApplicationContextConfig.java"
### 5.2.7.编写模块controller
@import "./projects/springcloud-eureka/springcloud-consumer-loadbalance-ribbon-hardcode-order80/src/main/java/org/openatom/springcloud/controller/OrderConsumerController.java"
### 5.2.8.编写负载均衡规则配置类
@import "./projects/springcloud-eureka/springcloud-consumer-loadbalance-ribbon-hardcode-order80/src/main/java/org/openatom/myrule/MySelfRule.java"
    这里使用return new RandomRule();,这代表使用的负载均衡算法是RandomRule,Ribbon默认提供了七种负载均衡的算法策略,具体使用哪一种,请根据实际需求灵活选择,这里提供关于七种负载均衡算法的介绍

    RoundRobinRule(轮询策略,轮询是Ribbon默认使用的负载均衡算法)
    第一次到A,第二次就到B,第三次又到A,第四次又到B......
    具体实现是一个负载均衡算法: 第N次请求 % 服务器集群的总数 = 实际调用服务器位置的下标

    RandomRule(随机策略)
    从服务提供者的列表中随机选择一个服务实例进行调用

    RetryRule(轮询重试策略)
    按照轮询策略来获取服务,如果获取的服务实例为null或已经失效,则在指定的时间之内不断地进行重试来获取服务,如果超过指定时间依然没获取到服务实例则返回null。

    WeightedResponseTimeRule(响应速度决定权重策略)
    根据每个服务提供者的响应时间分配一个权重,响应时间越长,权重越小,被选中的可能性也就越低。它的实现原理是,刚开始使用轮询策略并开启一个计时器,每一段时间收集一次所有服务提供者的平均响应时间,然后再给每个服务提供者附上一个权重,权重越高被选中的概率也越大。

    BestAvailableRule(最优可用策略)
    判断最优其实用的是并发连接数。选择并发连接数较小的server发送请求。

    AvailabilityFilteringRule(可用性敏感策略)
    先过滤掉非健康的服务实例，然后再选择连接数较小的服务实例。

    ZoneAvoidanceRule(区域内可用性能最优策略)
    基于AvailabilityFilteringRule基础上做的,首先判断一个zone的运行性能是否可用.剔除不可用的区域zone的所有server,然后再利用AvailabilityPredicate过滤并发连接过多的server。

### 5.2.9.编写模块主启动类
@import "./projects/springcloud-eureka/springcloud-consumer-loadbalance-ribbon-hardcode-order80/src/main/java/org/openatom/springcloud/OrderServiceConsumerLoadBalanceRibbonHardcode80.java"
### 5.2.10.测试模块
    启动相关服务
```mermaid
flowchart LR
    准备好数据库环境-->启动Eureka注册中心
    启动Eureka注册中心-->启动服务提供者8001节点
    启动服务提供者8001节点-->启动服务提供者8002节点
    启动服务提供者8002节点-->启动当前模块服务消费者
```
    测试硬编码配置方式使用Ribbon实现负载均衡(使用Ribbon自带的负载均衡策略)
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
    第二次访问返回结果
```json
{"code":200,"message":"查询成功,serverPort:  8002","data":{"id":1,"serial":"15646546546"}}
```
    第四次访问返回结果
```json
{"code":200,"message":"查询成功,serverPort:  8001","data":{"id":1,"serial":"15646546546"}}
```
    可以看到四次访问返回的结果中,四次返回结果是没有规律的,因为采用的RandomRule(随机策略),实际返回结果可能不是上面的情况,但是一定是随机进行服务调用的

## 5.3.声明式配置方式使用Ribbon实现负载均衡(使用Ribbon自带的负载均衡策略)
### 5.3.1.模块简介
    基于Ribbon以声明式配置方式实现的服务消费者,使用Ribbon自带的负载均衡策略,启动端口: 80
### 5.3.2.模块目录结构
@import "./projects/springcloud-eureka/springcloud-consumer-loadbalance-ribbon-configuration-order80/tree.md"
### 5.3.3.创建模块
	在父工程(springcloud-eureka)中创建一个名为springcloud-consumer-loadbalance-ribbon-configuration-order80的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息
### 5.3.4.编写模块pom.xml
@import "./projects/springcloud-eureka/springcloud-consumer-loadbalance-ribbon-configuration-order80/pom.xml"
### 5.3.5.编写模块application.yml
@import "./projects/springcloud-eureka/springcloud-consumer-loadbalance-ribbon-configuration-order80/src/main/resources/application.yml"

    yml中关于Ribbon负载均衡策略的配置
    SPRINGCLOUD-PROVIDER-PAYMENT-SERVICE-CLUSTER:
    ribbon:
        NFLoadBalancerRuleClassName: com.netflix.loadbalancer.RandomRule 
    这里使用com.netflix.loadbalancer.RandomRule ,这代表使用的负载均衡算法是RandomRule,Ribbon默认提供了七种负载均衡的算法策略,具体使用哪一种,请根据实际需求灵活选择,这里提供关于七种负载均衡算法的介绍

    RoundRobinRule(轮询策略,轮询是Ribbon默认使用的负载均衡算法)
    第一次到A,第二次就到B,第三次又到A,第四次又到B......
    具体实现是一个负载均衡算法: 第N次请求 % 服务器集群的总数 = 实际调用服务器位置的下标

    RandomRule(随机策略)
    从服务提供者的列表中随机选择一个服务实例进行调用

    RetryRule(轮询重试策略)
    按照轮询策略来获取服务,如果获取的服务实例为null或已经失效,则在指定的时间之内不断地进行重试来获取服务,如果超过指定时间依然没获取到服务实例则返回null。

    WeightedResponseTimeRule(响应速度决定权重策略)
    根据每个服务提供者的响应时间分配一个权重,响应时间越长,权重越小,被选中的可能性也就越低。它的实现原理是,刚开始使用轮询策略并开启一个计时器,每一段时间收集一次所有服务提供者的平均响应时间,然后再给每个服务提供者附上一个权重,权重越高被选中的概率也越大。

    BestAvailableRule(最优可用策略)
    判断最优其实用的是并发连接数。选择并发连接数较小的server发送请求。

    AvailabilityFilteringRule(可用性敏感策略)
    先过滤掉非健康的服务实例，然后再选择连接数较小的服务实例。

    ZoneAvoidanceRule(区域内可用性能最优策略)
    基于AvailabilityFilteringRule基础上做的,首先判断一个zone的运行性能是否可用.剔除不可用的区域zone的所有server,然后再利用AvailabilityPredicate过滤并发连接过多的server。

### 5.3.6.编写模块config
@import "./projects/springcloud-eureka/springcloud-consumer-loadbalance-ribbon-configuration-order80/src/main/java/org/openatom/springcloud/config/ApplicationContextConfig.java"
### 5.3.7.编写模块controller
@import "./projects/springcloud-eureka/springcloud-consumer-loadbalance-ribbon-configuration-order80/src/main/java/org/openatom/springcloud/controller/OrderConsumerController.java"
### 5.3.8.编写模块主启动类
@import "./projects/springcloud-eureka/springcloud-consumer-loadbalance-ribbon-configuration-order80/src/main/java/org/openatom/springcloud/OrderServiceConsumerLoadBalanceRibbonConfiguration80.java"
### 5.3.9.测试模块
    启动相关服务
```mermaid
flowchart LR
    准备好数据库环境-->启动Eureka注册中心
    启动Eureka注册中心-->启动服务提供者8001节点
    启动服务提供者8001节点-->启动服务提供者8002节点
    启动服务提供者8002节点-->启动当前模块服务消费者
```
    测试硬编码配置方式使用Ribbon实现负载均衡(使用Ribbon自带的负载均衡策略)
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
    可以看到四次访问返回的结果中,四次返回结果是没有规律的,因为采用的RandomRule(随机策略),实际返回结果可能不是上面的情况,但是一定是随机进行服务调用的

## 5.4.硬编码配置方式使用Ribbon实现负载均衡(使用自定义的Ribbon负载均衡策略)
### 5.4.1.模块简介
    基于Ribbon以硬编码式配置方式实现的服务消费者,使用自定义的Ribbon负载均衡策略,启动端口: 80
### 5.4.2.模块目录结构
@import "./projects/springcloud-eureka/springcloud-consumer-loadbalance-ribbon-custom-strategy-hardcode-order80/tree.md"
### 5.4.3.创建模块
	在父工程(springcloud-eureka)中创建一个名为springcloud-consumer-loadbalance-ribbon-custom-strategy-hardcode-order80的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息
### 5.4.4.编写模块pom.xml
@import "./projects/springcloud-eureka/springcloud-consumer-loadbalance-ribbon-custom-strategy-hardcode-order80/pom.xml"
### 5.4.5.编写模块application.yml
@import "./projects/springcloud-eureka/springcloud-consumer-loadbalance-ribbon-custom-strategy-hardcode-order80/src/main/resources/application.yml"
### 5.4.6.编写模块config
@import "./projects/springcloud-eureka/springcloud-consumer-loadbalance-ribbon-custom-strategy-hardcode-order80/src/main/java/org/openatom/springcloud/config/ApplicationContextConfig.java"
### 5.4.7.编写模块controller
@import "./projects/springcloud-eureka/springcloud-consumer-loadbalance-ribbon-custom-strategy-hardcode-order80/src/main/java/org/openatom/springcloud/controller/OrderConsumerController.java"
### 5.4.8.编写自定义的负载均衡算法策略
@import "./projects/springcloud-eureka/springcloud-consumer-loadbalance-ribbon-custom-strategy-hardcode-order80/src/main/java/org/openatom/springcloud/loadbalance/MyRoundRobinRule.java"
### 5.4.9.编写模块主启动类
@import "./projects/springcloud-eureka/springcloud-consumer-loadbalance-ribbon-custom-strategy-hardcode-order80/src/main/java/org/openatom/springcloud/OrderServiceConsumerLoadBalanceRibbonCustomerStrategyHardcode80.java"
### 5.4.10.测试模块
    启动相关服务
```mermaid
flowchart LR
    准备好数据库环境-->启动Eureka注册中心
    启动Eureka注册中心-->启动服务提供者8001节点
    启动服务提供者8001节点-->启动服务提供者8002节点
    启动服务提供者8002节点-->启动当前模块服务消费者
```
    测试硬编码配置方式使用Ribbon实现负载均衡(使用Ribbon自带的负载均衡策略)
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

## 5.5.声明式配置方式使用Ribbon实现负载均衡(使用自定义的Ribbon负载均衡策略)
### 5.5.1.模块简介
    基于Ribbon以声明式配置方式实现的服务消费者,使用自定义的Ribbon负载均衡策略,启动端口: 80
### 5.5.2.模块目录结构
@import "./projects/springcloud-eureka/springcloud-consumer-loadbalance-ribbon-custom-strategy-configuration-order80/tree.md"
### 5.5.3.创建模块
	在父工程(springcloud-eureka)中创建一个名为springcloud-consumer-loadbalance-ribbon-custom-strategy-configuration-order80的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息
### 5.5.4.编写模块pom.xml
@import "./projects/springcloud-eureka/springcloud-consumer-loadbalance-ribbon-custom-strategy-configuration-order80/pom.xml"
### 5.5.5.编写模块application.yml
@import "./projects/springcloud-eureka/springcloud-consumer-loadbalance-ribbon-custom-strategy-configuration-order80/src/main/resources/application.yml"
### 5.5.6.编写模块config
@import "./projects/springcloud-eureka/springcloud-consumer-loadbalance-ribbon-custom-strategy-configuration-order80/src/main/java/org/openatom/springcloud/config/ApplicationContextConfig.java"
### 5.5.7.编写模块controller
@import "./projects/springcloud-eureka/springcloud-consumer-loadbalance-ribbon-custom-strategy-configuration-order80/src/main/java/org/openatom/springcloud/controller/OrderConsumerController.java"
### 5.5.8.编写自定义的负载均衡算法策略
@import "./projects/springcloud-eureka/springcloud-consumer-loadbalance-ribbon-custom-strategy-configuration-order80/src/main/java/org/openatom/springcloud/loadbalance/MyRoundRobinRule.java"
### 5.5.9.编写模块主启动类
@import "./projects/springcloud-eureka/springcloud-consumer-loadbalance-ribbon-custom-strategy-configuration-order80/src/main/java/org/openatom/springcloud/OrderServiceConsumerLoadBalanceRibbonCustomerStrategyConfiguration80.java"
### 5.5.10.测试模块
    启动相关服务
```mermaid
flowchart LR
    准备好数据库环境-->启动Eureka注册中心
    启动Eureka注册中心-->启动服务提供者8001节点
    启动服务提供者8001节点-->启动服务提供者8002节点
    启动服务提供者8002节点-->启动当前模块服务消费者
```
    测试硬编码配置方式使用Ribbon实现负载均衡(使用Ribbon自带的负载均衡策略)
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

# 6.使用OpenFeign实现客户端负载均衡
## 6.1.OpenFeign简介
    Feign是SpringCloud组件中一个轻量级RESTful的HTTP服务客户端,Feign内置了Ribbon,用来做客户端负载均衡,去调用服务注册中心的服务。Feign的使用方式是: 使用Feign的注解定义接口,调用这个接口,就可以调用服务注册中心的服务。OpenFeign是SpringCloud在Feign的基础上支持了SpringMVC的注解,如@RequestMapping等。OpenFeign的@FeignClient可以解析SpringMVC的@RequestMapping注解下的接口,并通过动态代理的方式产生实现类,实现类中做负载均衡并调用其他服务。核心作用是为HTTP形式的Rest API提供了非常简洁高效的RPC调用方式,可以让编写远程调用代码就像编写本地Service一样简单。

<a href="https://docs.spring.io/spring-cloud-openfeign/docs/2.2.10.BUILD-SNAPSHOT/reference/html/"  target="_blank">官方网址(SPRING.IO)</a>
```
https://docs.spring.io/spring-cloud-openfeign/docs/2.2.10.BUILD-SNAPSHOT/reference/html/
```

## 6.2.通过配置Ribbon实现对OpenFeign的配置来实现负载均衡
### 6.2.1.模块简介
    通过配置Ribbon实现对OpenFeign的配置来实现的服务消费者,在YML中编写相关配置,之所以可以这样,是因为OpenFeign的底层实现就是Ribbon,启动端口: 80
### 6.2.2.模块目录结构
@import "./projects/springcloud-eureka/springcloud-consumer-loadbalance-openfeign-configuration-ribbon-order80/tree.md"
### 6.2.3.创建模块
	在父工程(springcloud-eureka)中创建一个名为springcloud-consumer-loadbalance-openfeign-configuration-ribbon-order80的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息
### 6.2.4.编写模块pom.xml
@import "./projects/springcloud-eureka/springcloud-consumer-loadbalance-openfeign-configuration-ribbon-order80/pom.xml"
### 6.2.5.编写模块application.yml
@import "./projects/springcloud-eureka/springcloud-consumer-loadbalance-openfeign-configuration-ribbon-order80/src/main/resources/application.yml"
### 6.2.6.编写模块config
@import "./projects/springcloud-eureka/springcloud-consumer-loadbalance-openfeign-configuration-ribbon-order80/src/main/java/org/openatom/springcloud/config/OpenFeignConfig.java"
### 6.2.7.编写模块service
@import "./projects/springcloud-eureka/springcloud-consumer-loadbalance-openfeign-configuration-ribbon-order80/src/main/java/org/openatom/springcloud/service/PaymentServiceOpenFeign.java"
### 6.2.8.编写模块controller
@import "./projects/springcloud-eureka/springcloud-consumer-loadbalance-openfeign-configuration-ribbon-order80/src/main/java/org/openatom/springcloud/controller/OrderConsumerController.java"
### 6.2.9.编写模块主启动类
@import "./projects/springcloud-eureka/springcloud-consumer-loadbalance-openfeign-configuration-ribbon-order80/src/main/java/org/openatom/springcloud/OrderServiceConsumerLoadBalanceOpenFeignConfigurationRibbon80.java"
### 6.2.10.测试模块
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

### 6.2.11.注意事项
    OpenFeign和RestTemplate
    使用OpenFeign实现远程调用时,容器中注入不用注入RestTemplate,OpenFeign已经在底层对RestTemplate做了封装

    在application.yml中配置开启OpenFeign增强日志
```yml
logging: #OpenFeign增强日志配置
    level:
    org.openatom.springcloud.services.PaymentServiceOpenFeign: debug  #OpenFeign日志以什么级别监控哪个接口
```

## 6.3.通过直接配置OpenFeign实现对OpenFeign的配置来实现负载均衡
### 6.3.1.模块简介
    通过直接配置OpenFeign实现对OpenFeign的配置来实现的服务消费者,在YML中编写相关配置,之前在YML配置的Ribbon的相关配置现在直接配置在了YML中OpenFeign部分,启动端口: 80
### 6.3.2.模块目录结构
@import "./projects/springcloud-eureka/springcloud-consumer-loadbalance-openfeign-configuration-openfeign-order80/tree.md"
### 6.3.3.创建模块
	在父工程(springcloud-eureka)中创建一个名为springcloud-consumer-loadbalance-openfeign-configuration-openfeign-order80的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息
### 6.3.4.编写模块pom.xml
@import "./projects/springcloud-eureka/springcloud-consumer-loadbalance-openfeign-configuration-openfeign-order80/pom.xml"
### 6.3.5.编写模块application.yml
@import "./projects/springcloud-eureka/springcloud-consumer-loadbalance-openfeign-configuration-openfeign-order80/src/main/resources/application.yml"
### 6.3.6.编写模块config
@import "./projects/springcloud-eureka/springcloud-consumer-loadbalance-openfeign-configuration-openfeign-order80/src/main/java/org/openatom/springcloud/config/OpenFeignConfig.java"
### 6.3.7.编写模块service
@import "./projects/springcloud-eureka/springcloud-consumer-loadbalance-openfeign-configuration-openfeign-order80/src/main/java/org/openatom/springcloud/service/PaymentServiceOpenFeign.java"
### 6.3.8.编写模块controller
@import "./projects/springcloud-eureka/springcloud-consumer-loadbalance-openfeign-configuration-openfeign-order80/src/main/java/org/openatom/springcloud/controller/OrderConsumerController.java"
### 6.3.9.编写模块主启动类
@import "./projects/springcloud-eureka/springcloud-consumer-loadbalance-openfeign-configuration-openfeign-order80/src/main/java/org/openatom/springcloud/OrderServiceConsumerLoadBalanceOpenFeignConfigurationOpenfeign80.java"
### 6.3.10.测试模块
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
### 6.3.11.注意事项
    OpenFeign和RestTemplate
    容器中注入不用注入RestTemplate,OpenFeign已经在底层对RestTemplate做了封装

    在application.yml中配置开启OpenFeign增强日志
```yml
logging: #OpenFeign增强日志配置
    level:
    org.openatom.springcloud.services.PaymentServiceOpenFeign: debug  #OpenFeign日志以什么级别监控哪个接口
```

# 7.使用Hystrix实现服务降级和熔断
## 7.1.Hystrix简介
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

## 7.2.搭建服务提供者第一个节点(Hystrix)
### 7.2.1.模块简介
    具有服务熔断和服务降级功能的服务提供者的第一个节点,启动端口: 8003
### 7.2.2.模块目录结构
@import "./projects/springcloud-eureka/springcloud-provider-hystrix-cluster-node-payment8003/tree.md"
### 7.2.3.创建模块
	在父工程(springcloud-eureka)中创建一个名为springcloud-provider-hystrix-cluster-node-payment8003的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息
### 7.2.4.编写模块pom.xml
@import "./projects/springcloud-eureka/springcloud-provider-hystrix-cluster-node-payment8003/pom.xml"
### 7.2.5.编写模块application.yml
@import "./projects/springcloud-eureka/springcloud-provider-hystrix-cluster-node-payment8003/src/main/resources/application.yml"
### 7.2.6.编写模块Mybatis配置文件
@import "./projects/springcloud-eureka/springcloud-provider-hystrix-cluster-node-payment8003/src/main/resources/mapper/PaymentMapper.xml"
### 7.2.7.编写模块dao
@import "./projects/springcloud-eureka/springcloud-provider-hystrix-cluster-node-payment8003/src/main/java/org/openatom/springcloud/dao/PaymentHystrixDao.java"
### 7.2.8.编写模块service
@import "./projects/springcloud-eureka/springcloud-provider-hystrix-cluster-node-payment8003/src/main/java/org/openatom/springcloud/service/PaymentHystrixService.java"
### 7.2.9.编写模块service实现类
@import "./projects/springcloud-eureka/springcloud-provider-hystrix-cluster-node-payment8003/src/main/java/org/openatom/springcloud/service/impl/PaymentHystrixServiceImpl.java"
### 7.2.10.编写模块controller
@import "./projects/springcloud-eureka/springcloud-provider-hystrix-cluster-node-payment8003/src/main/java/org/openatom/springcloud/controller/PaymentHystrixController.java"
### 7.2.11.编写模块主启动类
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

## 7.3.搭建服务提供者第二个节点(Hystrix)
### 7.3.1.模块简介
    具有服务熔断和服务降级功能的服务提供者的第二个节点,启动端口: 8004
### 7.3.2.模块目录结构
@import "./projects/springcloud-eureka/springcloud-provider-hystrix-cluster-node-payment8004/tree.md"
### 7.3.3.创建模块
	在父工程(springcloud-eureka)中创建一个名为springcloud-provider-hystrix-cluster-node-payment8004的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息
### 7.3.4.编写模块pom.xml
@import "./projects/springcloud-eureka/springcloud-provider-hystrix-cluster-node-payment8004/pom.xml"
### 7.3.5.编写模块application.yml
@import "./projects/springcloud-eureka/springcloud-provider-hystrix-cluster-node-payment8004/src/main/resources/application.yml"
### 7.3.6.编写模块Mybatis配置文件
@import "./projects/springcloud-eureka/springcloud-provider-hystrix-cluster-node-payment8004/src/main/resources/mapper/PaymentMapper.xml"
### 7.3.7.编写模块dao
@import "./projects/springcloud-eureka/springcloud-provider-hystrix-cluster-node-payment8004/src/main/java/org/openatom/springcloud/dao/PaymentHystrixDao.java"
### 7.3.8.编写模块service
@import "./projects/springcloud-eureka/springcloud-provider-hystrix-cluster-node-payment8004/src/main/java/org/openatom/springcloud/service/PaymentHystrixService.java"
### 7.3.9.编写模块service实现类
@import "./projects/springcloud-eureka/springcloud-provider-hystrix-cluster-node-payment8004/src/main/java/org/openatom/springcloud/service/impl/PaymentHystrixServiceImpl.java"
### 7.3.10.编写模块controller
@import "./projects/springcloud-eureka/springcloud-provider-hystrix-cluster-node-payment8004/src/main/java/org/openatom/springcloud/controller/PaymentHystrixController.java"
### 7.3.11.编写模块主启动类
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

## 7.4.搭建服务消费者(Hystrix)
### 7.4.1.模块简介
    具有服务熔断和服务降级功能的服务消费者,启动端口: 80
### 7.4.2.模块目录结构
@import "./projects/springcloud-eureka/springcloud-consumer-hystrix-loadbalance-openfeign-configuration-order80/tree.md"
### 7.4.3.创建模块
	在父工程(springcloud-eureka)中创建一个名为springcloud-consumer-hystrix-loadbalance-openfeign-configuration-order80的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息
### 7.4.4.编写模块pom.xml
@import "./projects/springcloud-eureka/springcloud-consumer-hystrix-loadbalance-openfeign-configuration-order80/pom.xml"
### 7.4.5.编写模块application.yml
@import "./projects/springcloud-eureka/springcloud-consumer-hystrix-loadbalance-openfeign-configuration-order80/src/main/resources/application.yml"
### 7.4.6.编写模块config
@import "./projects/springcloud-eureka/springcloud-consumer-hystrix-loadbalance-openfeign-configuration-order80/src/main/java/org/openatom/springcloud/config/FeignConfig.java"
### 7.4.7.编写模块service
@import "./projects/springcloud-eureka/springcloud-consumer-hystrix-loadbalance-openfeign-configuration-order80/src/main/java/org/openatom/springcloud/service/PaymentServiceHystrixOpenFeign.java"
### 7.4.8.编写模块service实现类
@import "./projects/springcloud-eureka/springcloud-consumer-hystrix-loadbalance-openfeign-configuration-order80/src/main/java/org/openatom/springcloud/service/impl/PaymentServiceHystrixOpenFeignImpl.java"
### 7.4.9.编写模块controller
@import "./projects/springcloud-eureka/springcloud-consumer-hystrix-loadbalance-openfeign-configuration-order80/src/main/java/org/openatom/springcloud/controller/OrderConsumerHystrixController.java"
### 7.4.10.编写模块主启动类
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
## 7.5.测试服务降级和服务熔断(Hystrix)
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

# 8.使用DashBoard和Turbine对服务进行监控
## 8.1.使用Hystrix DashBoard对服务单个节点进行监控
### 8.1.1.Hystrix DashBoard简介
    DashBoard全称Hystrix Dashboard,是Spring Cloud的仪表盘组件,可以查看Hystrix实例的执行情况,支持查看单个实例和查看集群实例,但是需要结合spring-boot-actuator一起使用。Hystrix Dashboard主要用来实时监控Hystrix的各项指标信息。Hystrix Dashboard可以有效地反映出每个Hystrix实例的运行情况，帮助我们快速发现系统中的问题，从而采取对应措施。
### 8.1.2.模块简介
    Hystrix DashBoard,启动端口: 9001
### 8.1.3.模块目录结构
@import "./projects/springcloud-eureka/springcloud-mointor-hystrix-dashboard9001/tree.md"
### 8.1.4.创建模块
	在父工程(springcloud-eureka)中创建一个名为springcloud-mointor-hystrix-dashboard9001的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息
### 8.1.5.编写模块pom.xml
@import "./projects/springcloud-eureka/springcloud-mointor-hystrix-dashboard9001/pom.xml"
### 8.1.6.编写模块application.yml
@import "./projects/springcloud-eureka/springcloud-mointor-hystrix-dashboard9001/src/main/resources/application.yml"
### 8.1.7.编写模块主启动类
@import "./projects/springcloud-eureka/springcloud-mointor-hystrix-dashboard9001/src/main/java/org/openatom/springcloud/MointorHystrixDashboard9001.java"
### 8.1.8.修改服务提供者8003主启动类
    使用Hystrix Dashboard监控服务,被监控的服务提供者和服务消费者必须满足以下条件
    pom.xml中引入如下依赖
```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-hystrix</artifactId>
</dependency>
```
    在主启动类中注册ServletRegistrationBean这个Bean
```
@Bean
public ServletRegistrationBean getServlet() {
    HystrixMetricsStreamServlet streamServlet = new HystrixMetricsStreamServlet();
    ServletRegistrationBean registrationBean = new ServletRegistrationBean(streamServlet);
    registrationBean.setLoadOnStartup(1);
    registrationBean.addUrlMappings("/hystrix.stream");
    registrationBean.setName("HystrixMetricsStreamServlet");
    return registrationBean;
}
```

    修改后的主启动类如下
@import "./projects/springcloud-eureka/springcloud-provider-hystrix-cluster-node-payment8003/src/main/java/org/openatom/springcloud/PaymentServiceProviderHystrixClusterNode8003.java"

### 8.1.9.修改服务提供者8004主启动类
    使用Hystrix Dashboard监控服务,被监控的服务提供者和服务消费者必须满足以下条件
    pom.xml中引入如下依赖
```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-hystrix</artifactId>
</dependency>
```
    在主启动类中注册ServletRegistrationBean这个Bean
```
@Bean
public ServletRegistrationBean getServlet() {
    HystrixMetricsStreamServlet streamServlet = new HystrixMetricsStreamServlet();
    ServletRegistrationBean registrationBean = new ServletRegistrationBean(streamServlet);
    registrationBean.setLoadOnStartup(1);
    registrationBean.addUrlMappings("/hystrix.stream");
    registrationBean.setName("HystrixMetricsStreamServlet");
    return registrationBean;
}
```

    修改后的主启动类如下
@import "./projects/springcloud-eureka/springcloud-provider-hystrix-cluster-node-payment8004/src/main/java/org/openatom/springcloud/PaymentServiceProviderHystrixClusterNode8004.java"

### 8.1.10.修改服务消费者80主启动类
    使用Hystrix Dashboard监控服务,被监控的服务提供者和服务消费者必须满足以下条件
    pom.xml中引入如下依赖
```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-hystrix</artifactId>
</dependency>
```
    在主启动类中注册ServletRegistrationBean这个Bean
```
@Bean
public ServletRegistrationBean getServlet() {
    HystrixMetricsStreamServlet streamServlet = new HystrixMetricsStreamServlet();
    ServletRegistrationBean registrationBean = new ServletRegistrationBean(streamServlet);
    registrationBean.setLoadOnStartup(1);
    registrationBean.addUrlMappings("/hystrix.stream");
    registrationBean.setName("HystrixMetricsStreamServlet");
    return registrationBean;
}
```

    修改后的主启动类如下
@import "./projects/springcloud-eureka/springcloud-consumer-hystrix-loadbalance-openfeign-configuration-order80/src/main/java/org/openatom/springcloud/OrderServiceConsumerHystrixLoadBalanceOpenFeignConfiguration80.java"

### 8.1.11.测试模块
    启动相关服务
```mermaid
flowchart LR
    准备好数据库环境-->启动Eureka注册中心
    启动Eureka注册中心-->启动服务提供者8003节点
    启动服务提供者8003节点-->启动服务提供者8004节点
    启动服务提供者8004节点-->启动使用了Hystrix功能的服务消费者
    启动使用了Hystrix功能的服务消费者-->启动Hystrix_Dashboard监控模块
```
    注意事项
    Hystrix DashBoard只能监控设置了服务降级或服务熔断的方法,未设置降级或者熔断的方法是无法监控到的,也是说未设置降级和熔断的方法调用后是不会和Hystrix DashBoard产生任何关系的

    测试使用Hystrix DashBoard对单个服务进行监控
访问Hystrix DashBoard
```
http://localhost:9001/hystrix
```
<img src="./images/hystrix_dashboard.png"  width="100%"/>

    监控服务消费端
```mermaid
flowchart LR
    访问Hystrix_DashBoard-->填写http://localhost/hystrix.stream
    填写http://localhost/hystrix.stream-->点击Monitor_Stream
    点击Monitor_Stream-->访问服务消费端任何一个服务
```
    Hystrix DashBoard参数
```
http://localhost/hystrix.stream
```
    示例服务URL
```
http://localhost/consumer/payment/circuitbreaker/get/1
```
    可以看到界面自动统计出了消费端某个服务的访问情况
<img src="./images/hystrix_dashboard_mointor_consumer.png"  width="100%"/>

    监控服务提供端8003
```mermaid
flowchart LR
    访问Hystrix_DashBoard-->填写http://localhost:8003/hystrix.stream
    填写http://localhost:8003/hystrix.stream-->点击Monitor_Stream
    点击Monitor_Stream-->访问服务提供端8003任何一个服务
```
    Hystrix DashBoard参数
```
http://localhost:8003/hystrix.stream
```
    示例服务URL(访问这个服务消费端的服务,会自动调用服务提供端8003的服务,不是每次都调用,每次在8003和8004随机选择一个节点进行调用)
```
http://localhost/consumer/payment/circuitbreaker/get/1
```
    可以看到界面自动统计出了提供端8003某个服务的访问情况
<img src="./images/hystrix_dashboard_mointor_provider8003.png"  width="100%"/>

    监控服务提供端8004
```mermaid
flowchart LR
    访问Hystrix_DashBoard-->填写http://localhost:8004/hystrix.stream
    填写http://localhost:8004/hystrix.stream-->点击Monitor_Stream
    点击Monitor_Stream-->访问服务提供端8003任何一个服务
```
    Hystrix DashBoard参数
```
http://localhost:8004/hystrix.stream
```
    示例服务URL(访问这个服务消费端的服务,会自动调用服务提供端8003的服务,不是每次都调用,每次在8003和8004随机选择一个节点进行调用)
```
http://localhost/consumer/payment/circuitbreaker/get/1
```
    可以看到界面自动统计出了提供端8004某个服务的访问情况
<img src="./images/hystrix_dashboard_mointor_provider8004.png"  width="100%"/>

## 8.2.使用Turbine汇聚服务提供端多个节点访问统计数据
### 8.2.1.Turbine简介
    Turbine是聚合服务器发送事件流数据的一个工具,Hystrix DashBoard的监控中,只能监控单个节点,实际生产中都为集群,每个服务都会部署在多个节点上,因此可以通过Turbine来监控集群服务,将Hystrix DashBoard收集到的服务访问统计数据汇集在一起并以图形化界面展示出来。
### 8.2.2.模块简介
    使用Turbine汇聚Hystrix DashBoard监控到的所有节点访问统计数据,启动端口: 9002
### 8.2.3.模块目录结构
@import "./projects/springcloud-eureka/springcloud-mointor-hystrix-dashboard-turbine9002/tree.md"
### 8.2.4.创建模块
	在父工程(springcloud-eureka)中创建一个名为springcloud-mointor-hystrix-dashboard-turbine9002的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息
### 8.2.5.编写模块pom.xml
@import "./projects/springcloud-eureka/springcloud-mointor-hystrix-dashboard-turbine9002/pom.xml"
### 8.2.6.编写模块application.yml
@import "./projects/springcloud-eureka/springcloud-mointor-hystrix-dashboard-turbine9002/src/main/resources/application.yml"
### 8.2.7.编写模块主启动类
@import "./projects/springcloud-eureka/springcloud-mointor-hystrix-dashboard-turbine9002/src/main/java/org/openatom/springcloud/MointorHystrixDashboardTurbine9002.java"
### 8.2.8.修改服务提供者8003主启动类
    使用Turbine聚合Hystrix Dashboard监控数据,被监控的服务提供者和服务消费者必须满足以下条件
    pom.xml中引入如下依赖
```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-hystrix</artifactId>
</dependency>
```
    在主启动类中注册ServletRegistrationBean这个Bean
```
@Bean
public ServletRegistrationBean getServlet() {
    HystrixMetricsStreamServlet streamServlet = new HystrixMetricsStreamServlet();
    ServletRegistrationBean registrationBean = new ServletRegistrationBean(streamServlet);
    registrationBean.setLoadOnStartup(1);
    registrationBean.addUrlMappings("/hystrix.stream");
    registrationBean.setName("HystrixMetricsStreamServlet");
    return registrationBean;
}
```

    修改后的主启动类如下
@import "./projects/springcloud-eureka/springcloud-provider-hystrix-cluster-node-payment8003/src/main/java/org/openatom/springcloud/PaymentServiceProviderHystrixClusterNode8003.java"

### 8.2.9.修改服务提供者8004主启动类
    使用Turbine聚合Hystrix Dashboard监控数据,被监控的服务提供者和服务消费者必须满足以下条件
    pom.xml中引入如下依赖
```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-hystrix</artifactId>
</dependency>
```
    在主启动类中注册ServletRegistrationBean这个Bean
```
@Bean
public ServletRegistrationBean getServlet() {
    HystrixMetricsStreamServlet streamServlet = new HystrixMetricsStreamServlet();
    ServletRegistrationBean registrationBean = new ServletRegistrationBean(streamServlet);
    registrationBean.setLoadOnStartup(1);
    registrationBean.addUrlMappings("/hystrix.stream");
    registrationBean.setName("HystrixMetricsStreamServlet");
    return registrationBean;
}
```

    修改后的主启动类如下
@import "./projects/springcloud-eureka/springcloud-provider-hystrix-cluster-node-payment8004/src/main/java/org/openatom/springcloud/PaymentServiceProviderHystrixClusterNode8004.java"

### 8.2.10.修改服务消费端80主启动类
    使用Turbine聚合Hystrix Dashboard监控数据,被监控的服务提供者和服务消费者必须满足以下条件
    pom.xml中引入如下依赖
```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-hystrix</artifactId>
</dependency>
```
    在主启动类中注册ServletRegistrationBean这个Bean
```
@Bean
public ServletRegistrationBean getServlet() {
    HystrixMetricsStreamServlet streamServlet = new HystrixMetricsStreamServlet();
    ServletRegistrationBean registrationBean = new ServletRegistrationBean(streamServlet);
    registrationBean.setLoadOnStartup(1);
    registrationBean.addUrlMappings("/hystrix.stream");
    registrationBean.setName("HystrixMetricsStreamServlet");
    return registrationBean;
}
```

    修改后的主启动类如下
@import "./projects/springcloud-eureka/springcloud-consumer-hystrix-loadbalance-openfeign-configuration-order80/src/main/java/org/openatom/springcloud/OrderServiceConsumerHystrixLoadBalanceOpenFeignConfiguration80.java"

### 8.2.11.测试模块
    启动相关服务
```mermaid
flowchart LR
    准备好数据库环境-->启动Eureka注册中心
    启动Eureka注册中心-->启动服务提供者8003节点
    启动服务提供者8003节点-->启动服务提供者8004节点
    启动服务提供者8004节点-->启动使用了Hystrix功能的服务消费者
    启动使用了Hystrix功能的服务消费者-->启动Tunbine监控模块
```
    注意事项
    Hystrix DashBoard只能监控设置了服务降级或服务熔断的方法,未设置降级或者熔断的方法是无法监控到的,也是说未设置降级和熔断的方法调用后是不会和Hystrix DashBoard产生任何关系的,因为Tunbine是汇聚来自Hystrix DashBoard的数据,所以Tunbine也只能汇聚Hystrix DashBoard可以监控到的数据
    集成了Turbine的项目修改后需要手动重启,目前发现热加载会报错

    测试使用Turbine汇聚服务提供端多个节点访问统计数据
    访问Turbine(Turbine主页面和Hystrix DashBoard主界面是相同的,只是填写的参数不同)
```
http://localhost:9002/hystrix
```
<img src="./images/turbine.png"  width="100%"/>

    使用Turbine汇聚服务提供端多个节点访问统计数据(汇聚Hystrix DashBoard监控到的服务提供端8003节点的数据和服务提供端8004节点的数据)
```mermaid
flowchart LR
    访问Turbine-->填写http://localhost:9002/turbine.stream
    填写http://localhost:9002/turbine.stream-->点击Monitor_Stream
    点击Monitor_Stream-->访问服务消费端任何一个服务
```
    Turbine参数
```
http://localhost:9002/turbine.stream
```
    示例服务URL(访问这个服务消费端的服务,会自动随机调用服务提供端服务,每次在服务提供端8003节点和服务提供端8004节点随机选择一个节点进行调用)
```
http://localhost/consumer/payment/circuitbreaker/get/1
```
    可以看到界面一次性自动统计出了服务提供端8003节点和服务提供端8004节点访问统计数据
<img src="./images/turbine_mointor_provider_allnode.png"  width="100%"/>

    使用Turbine前
    连续访问http://localhost/consumer/payment/circuitbreaker/get/1这个测试URL 10次,监控服务提供端8003节点的Hystrix DashBoard中可以统计到的访问次数为3,监控服务提供端8004节点的Hystrix DashBoard中统计到的访问次数值为7,因为服务消费端会随机选择一个节点进行调用,把服务提供端8003节点和服务提供端8004节点中统计到的访问次数的值加起来一定是10

    使用Turbine后
    连续访问http://localhost/consumer/payment/circuitbreaker/get/1这个测试URL 10次,Turbine中统计到的访问次数的值直接就是10

# 9.使用GateWay实现网关功能
## 9.1.GateWay简介
    Gateway全称SpringCloud Gateway,它旨在为微服务架构提供一种简单有效的统一的API路由管理方式。作为Spring Cloud生态系统中的网关,目标是替代Zuul,为了提升网关的性能,SpringCloud Gateway是基于WebFlux框架实现的,而WebFlux框架底层则使用了高性能的Reactor模式通信框架Netty。主要功能包含认证、鉴权、路由转发、安全策略、防刷、流量控制、监控日志等。
    为什么要使用SpringCloud Gateway?
    以鉴权为例,一个大的应用由很多服务组成,不可能为每一个服务都加上鉴权的代码,这样仅是鉴权部分的代码维护工作就是非常庞大的工作量,同时如果为所有的微服务都加上鉴权代码,这样会破坏REST服务的无状态特征,有一个思路是把鉴权的代码写在一个公共的模块,所有的模块都引入这个模块,但是这样仅仅是实现了鉴权操作,所以最好的处理方案是把认证、鉴权、路由转发、安全策略、防刷、流量控制、监控日志等功能都放在网关中实现,网关在进行请求转发的同时还实现一个负载均衡的效果,服务消费端在调用服务提供端的时候可以调用同一个服务提供端的不同节点,进而实现负载均衡,而网关可以在进行请求转发的时候将请求转发到多个服务消费端,实现服务消费端的负载均衡调用。

<a href="https://github.com/spring-cloud/spring-cloud-gateway" target="_blank">官方网站(SPRING.IO)</a>
```
https://github.com/spring-cloud/spring-cloud-gateway
```

<a href="https://spring.io/projects/spring-cloud-gateway/" target="_blank">官方网站(SPRING.IO)</a>
```
https://spring.io/projects/spring-cloud-gateway/
```

## 9.2.硬编码配置方式使用GateWay(非负载均衡模式)
### 9.2.1.模块简介
    使用SpringCloud Gateway实现网关功能,配置方式为硬编码配置,实现了简单的请求转发功能,即请求经过网关之后会转发到单个服务消费者的单个节点,没有实现在请求转发的同时做负载均衡处理,启动端口: 9527
### 9.2.2.模块目录结构
@import "./projects/springcloud-eureka/springcloud-router-connect-direct-hardcode-gateway9527/tree.md"
### 9.2.3.创建模块
	在父工程(springcloud-eureka)中创建一个名为springcloud-router-connect-direct-hardcode-gateway9527的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息
### 9.2.4.编写模块pom.xml
@import "./projects/springcloud-eureka/springcloud-router-connect-direct-hardcode-gateway9527/pom.xml"
### 9.2.5.编写模块application.yml
@import "./projects/springcloud-eureka/springcloud-router-connect-direct-hardcode-gateway9527/src/main/resources/application.yml"
### 9.2.6.编写模块config
@import "./projects/springcloud-eureka/springcloud-router-connect-direct-hardcode-gateway9527/src/main/java/org/openatom/springcloud/config/GateWayConfig.java"
### 9.2.7.编写鉴权LoginFilter
@import "./projects/springcloud-eureka/springcloud-router-connect-direct-hardcode-gateway9527/src/main/java/org/openatom/springcloud/filter/LoginFilter.java"
### 9.2.8.编写模块主启动类
@import "./projects/springcloud-eureka/springcloud-router-connect-direct-hardcode-gateway9527/src/main/java/org/openatom/springcloud/RouterConnectDirectHardcodeGateWay9527.java"

### 9.2.7.测试模块
    启动相关服务
```mermaid
flowchart LR
    准备好数据库环境-->启动Eureka注册中心
    启动Eureka注册中心-->启动服务提供者8003节点
    启动服务提供者8003节点-->启动服务提供者8004节点
    启动服务提供者8004节点-->启动使用了Hystrix功能的服务消费者
    启动使用了Hystrix功能的服务消费者-->启动当前GateWay模块
```

    在浏览器中访问
```
http://localhost:9527/consumer/payment/ok/get/1?uname=zhangsan
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
    可以看到四次访问返回的结果中,第一次和第三次是相同的,第二次和第四次是相同的,之所以会出现这样的结果,是因为上面编写RestTemplate时使用了默认的配置,默认的配置使用负载均衡策略是轮询策略,所以接连访问该服务四次会出现上面的情况。但是要注意,这里并没有直接访问服务消费者,而是访问了网关,这些返回的数据是服务消费端返回给网关,网关返回给浏览器的。

## 9.3.声明式配置方式使用GateWay(非负载均衡模式)
### 9.3.1.模块简介
    使用SpringCloud Gateway实现网关功能,配置方式为声明式配置,实现了简单的请求转发功能,即请求经过网关之后会转发到单个服务消费者的单个节点,没有实现在请求转发的同时做负载均衡处理,启动端口: 9527
### 9.3.2.模块目录结构
@import "./projects/springcloud-eureka/springcloud-router-connect-direct-configuration-gateway9527/tree.md"
### 9.3.3.创建模块
	在父工程(springcloud-eureka)中创建一个名为springcloud-router-connect-direct-configuration-gateway9527的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息
### 9.3.4.编写模块pom.xml
@import "./projects/springcloud-eureka/springcloud-router-connect-direct-configuration-gateway9527/pom.xml"
### 9.3.5.编写模块application.yml
@import "./projects/springcloud-eureka/springcloud-router-connect-direct-configuration-gateway9527/src/main/resources/application.yml"
### 9.3.6.编写鉴权LoginFilter
@import "./projects/springcloud-eureka/springcloud-router-connect-direct-configuration-gateway9527/src/main/java/org/openatom/springcloud/filter/LoginFilter.java"
### 9.3.7.编写模块主启动类
@import "./projects/springcloud-eureka/springcloud-router-connect-direct-configuration-gateway9527/src/main/java/org/openatom/springcloud/RouterConnectDirectConfigurationGateWay9527.java"
### 9.3.8.测试模块
    启动相关服务
```mermaid
flowchart LR
    准备好数据库环境-->启动Eureka注册中心
    启动Eureka注册中心-->启动服务提供者8003节点
    启动服务提供者8003节点-->启动服务提供者8004节点
    启动服务提供者8004节点-->启动使用了Hystrix功能的服务消费者
    启动使用了Hystrix功能的服务消费者-->启动当前GateWay模块
```

    在浏览器中访问
```
http://localhost:9527/consumer/payment/ok/get/1?uname=zhangsan
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
    可以看到四次访问返回的结果中,第一次和第三次是相同的,第二次和第四次是相同的,之所以会出现这样的结果,是因为上面编写RestTemplate时使用了默认的配置,默认的配置使用负载均衡策略是轮询策略,所以接连访问该服务四次会出现上面的情况。但是要注意,这里并没有直接访问服务消费者,而是访问了网关,这些返回的数据是服务消费端返回给网关网关返回给浏览器的。

## 9.4.硬编码配置方式使用GateWay(负载均衡模式)
### 9.4.1.模块简介
    使用SpringCloud Gateway实现网关功能,配置方式为硬编码配置,实现了简单的请求转发功能,即请求经过网关之后会转发到单个服务消费者的单个节点,实现了在请求转发的同时做负载均衡处理,启动端口: 9527
### 9.4.2.模块目录结构
@import "./projects/springcloud-eureka/springcloud-router-connect-loadbalance-hardcode-gateway9527/tree.md"
### 9.4.3.创建模块
	在父工程(springcloud-eureka)中创建一个名为springcloud-router-connect-loadbalance-hardcode-gateway9527的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息
### 9.4.4.编写模块pom.xml
@import "./projects/springcloud-eureka/springcloud-router-connect-loadbalance-hardcode-gateway9527/pom.xml"
### 9.4.5.编写模块application.yml
@import "./projects/springcloud-eureka/springcloud-router-connect-loadbalance-hardcode-gateway9527/src/main/resources/application.yml"
### 9.4.6.编写config
@import "./projects/springcloud-eureka/springcloud-router-connect-loadbalance-hardcode-gateway9527/src/main/java/org/openatom/springcloud/config/GateWayConfig.java"
### 9.4.7.编写鉴权LoginFilter
@import "./projects/springcloud-eureka/springcloud-router-connect-loadbalance-hardcode-gateway9527/src/main/java/org/openatom/springcloud/filter/LoginFilter.java"
### 9.4.8.编写模块主启动类
@import "./projects/springcloud-eureka/springcloud-router-connect-loadbalance-hardcode-gateway9527/src/main/java/org/openatom/springcloud/RouterConnectLoadbalanceHardcodeGateWay9527.java"
### 9.4.9.测试模块
    启动相关服务
```mermaid
flowchart LR
    准备好数据库环境-->启动Eureka注册中心
    启动Eureka注册中心-->启动服务提供者8003节点
    启动服务提供者8003节点-->启动服务提供者8004节点
    启动服务提供者8004节点-->启动使用了Hystrix功能的服务消费者
    启动使用了Hystrix功能的服务消费者-->启动当前GateWay模块
```

    在浏览器中访问
```
http://localhost:9527/consumer/payment/ok/get/1?uname=zhangsan
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
    可以看到四次访问返回的结果中,第一次和第三次是相同的,第二次和第四次是相同的,之所以会出现这样的结果,是因为上面编写RestTemplate时使用了默认的配置,默认的配置使用负载均衡策略是轮询策略,所以接连访问该服务四次会出现上面的情况。但是要注意,这里并没有直接访问服务消费者,而是访问了网关,这些返回的数据是服务消费端返回给网关网关返回给浏览器的。

## 9.5.声明式配置方式使用GateWay(负载均衡模式)
### 9.5.1.模块简介
    使用SpringCloud Gateway实现网关功能,配置方式为声明式配置,实现了简单的请求转发功能,即请求经过网关之后会转发到单个服务消费者的单个节点,实现了在请求转发的同时做负载均衡处理,启动端口: 9527
### 9.5.2.模块目录结构
@import "./projects/springcloud-eureka/springcloud-router-connect-loadbalance-configuration-gateway9527/tree.md"
### 9.5.3.创建模块
	在父工程(springcloud-eureka)中创建一个名为springcloud-router-connect-loadbalance-configuration-gateway9527的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息
### 9.5.4.编写模块pom.xml
@import "./projects/springcloud-eureka/springcloud-router-connect-loadbalance-configuration-gateway9527/pom.xml"
### 9.5.5.编写模块application.yml
@import "./projects/springcloud-eureka/springcloud-router-connect-loadbalance-configuration-gateway9527/src/main/resources/application.yml"
### 9.5.6.编写config
@import "./projects/springcloud-eureka/springcloud-router-connect-loadbalance-configuration-gateway9527/src/main/java/org/openatom/springcloud/config/GateWayConfig.java"
### 9.5.7.编写鉴权LoginFilter
@import "./projects/springcloud-eureka/springcloud-router-connect-loadbalance-configuration-gateway9527/src/main/java/org/openatom/springcloud/filter/LoginFilter.java"
### 9.5.8.编写模块主启动类
@import "./projects/springcloud-eureka/springcloud-router-connect-loadbalance-configuration-gateway9527/src/main/java/org/openatom/springcloud/RouterConnectLoadbalanceConfigurationGateWay9527.java"
### 9.5.9.测试模块
    启动相关服务
```mermaid
flowchart LR
    准备好数据库环境-->启动Eureka注册中心
    启动Eureka注册中心-->启动服务提供者8003节点
    启动服务提供者8003节点-->启动服务提供者8004节点
    启动服务提供者8004节点-->启动使用了Hystrix功能的服务消费者
    启动使用了Hystrix功能的服务消费者-->启动当前GateWay模块
```

    在浏览器中访问
```
http://localhost:9527/consumer/payment/ok/get/1?uname=zhangsan
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
    可以看到四次访问返回的结果中,第一次和第三次是相同的,第二次和第四次是相同的,之所以会出现这样的结果,是因为上面编写RestTemplate时使用了默认的配置,默认的配置使用负载均衡策略是轮询策略,所以接连访问该服务四次会出现上面的情况。但是要注意,这里并没有直接访问服务消费者,而是访问了网关,这些返回的数据是服务消费端返回给网关网关返回给浏览器的。

# 10.使用Zipkin+Sleuth实现调用链路追踪
## 10.1.Zipkin、Sleuth简介
    Sleuth简介
    Sleuth可以解决分布式系统的追踪问题。
<a href="https://github.com/spring-cloud/spring-cloud-sleuth" target="_blank">官方网址(GITHUB)</a>
```
https://github.com/spring-cloud/spring-cloud-sleuth
```
<a href="https://spring.io/projects/spring-cloud-sleuth" target="_blank">官方网站(SPRING.IO)</a>
```
https://spring.io/projects/spring-cloud-sleuth
```
    Zipkin简介
    Zipkin是Twitter的一个开源项目,基于 Google Dapper实现。可以使用它来收集各个服务器上请求链路的跟踪数据,并通过它提供的REST API接口来辅助我们查询跟踪数据以实现对分布式系统的监控程序,从而及时地发现系统中出现的延迟升高问题并找出系统性能瓶颈的根源。除了面向开发的API接口之外,它也提供了方便的UI组件帮助我们直观的搜索跟踪信息和分析请求链路明细,比如: 可以查询某段时间内各用户请求的处理时间等。
<a href="https://zipkin.io/" target="_blank">官方网址</a>
```
https://zipkin.io/
```
<a href="https://github.com/openzipkin/zipkin" target="_blank">官方网址(GITHUB)</a>
```
https://github.com/openzipkin/zipkin
```

## 10.2.搭建服务提供者第一个节点(Sleuth)
### 10.2.1.模块简介
    具有调用链路追踪功能的服务提供者的第一个节点,启动端口: 8005
### 10.2.2.模块目录结构
@import "./projects/springcloud-eureka/springcloud-provider-sleuth_zipkin-cluster-node-payment8005/tree.md"
### 10.2.3.创建模块
	在父工程(springcloud-eureka)中创建一个名为springcloud-provider-sleuth_zipkin-cluster-node-payment8005的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息
### 10.2.4.编写模块pom.xml
@import "./projects/springcloud-eureka/springcloud-provider-sleuth_zipkin-cluster-node-payment8005/pom.xml"
### 10.2.5.编写模块application.yml
@import "./projects/springcloud-eureka/springcloud-provider-sleuth_zipkin-cluster-node-payment8005/src/main/resources/application.yml"
### 10.2.6.编写模块Mybatis配置文件
@import "./projects/springcloud-eureka/springcloud-provider-sleuth_zipkin-cluster-node-payment8005/src/main/resources/mapper/PaymentMapper.xml"
### 10.2.7.编写模块dao
@import "./projects/springcloud-eureka/springcloud-provider-sleuth_zipkin-cluster-node-payment8005/src/main/java/org/openatom/springcloud/dao/PaymentDao.java"
### 10.2.8.编写模块service
@import "./projects/springcloud-eureka/springcloud-provider-sleuth_zipkin-cluster-node-payment8005/src/main/java/org/openatom/springcloud/service/PaymentService.java"
### 10.2.9.编写模块service实现类
@import "./projects/springcloud-eureka/springcloud-provider-sleuth_zipkin-cluster-node-payment8005/src/main/java/org/openatom/springcloud/service/impl/PaymentServiceImpl.java"
### 10.2.10.编写模块controller
@import "./projects/springcloud-eureka/springcloud-provider-sleuth_zipkin-cluster-node-payment8005/src/main/java/org/openatom/springcloud/controller/PaymentController.java"
### 10.2.11.编写模块主启动类
@import "./projects/springcloud-eureka/springcloud-provider-sleuth_zipkin-cluster-node-payment8005/src/main/java/org/openatom/springcloud/PaymentServiceProviderSleuthAndZipkinClusterNode8005.java"

## 10.3.搭建服务提供者第二个节点(Sleuth)
### 10.3.1.模块简介
    具有调用链路追踪功能的服务提供者的第二个节点,启动端口: 8006
### 10.3.2.模块目录结构
@import "./projects/springcloud-eureka/springcloud-provider-sleuth_zipkin-cluster-node-payment8006/tree.md"
### 10.3.3.创建模块
	在父工程(springcloud-eureka)中创建一个名为springcloud-provider-sleuth_zipkin-cluster-node-payment8006的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息
### 10.3.4.编写模块pom.xml
@import "./projects/springcloud-eureka/springcloud-provider-sleuth_zipkin-cluster-node-payment8006/pom.xml"
### 10.3.5.编写模块application.yml
@import "./projects/springcloud-eureka/springcloud-provider-sleuth_zipkin-cluster-node-payment8006/src/main/resources/application.yml"
### 10.3.6.编写模块Mybatis配置文件
@import "./projects/springcloud-eureka/springcloud-provider-sleuth_zipkin-cluster-node-payment8006/src/main/resources/mapper/PaymentMapper.xml"
### 10.3.7.编写模块dao
@import "./projects/springcloud-eureka/springcloud-provider-sleuth_zipkin-cluster-node-payment8006/src/main/java/org/openatom/springcloud/dao/PaymentDao.java"
### 10.3.8.编写模块service
@import "./projects/springcloud-eureka/springcloud-provider-sleuth_zipkin-cluster-node-payment8006/src/main/java/org/openatom/springcloud/service/PaymentService.java"
### 10.3.9.编写模块service实现类
@import "./projects/springcloud-eureka/springcloud-provider-sleuth_zipkin-cluster-node-payment8006/src/main/java/org/openatom/springcloud/service/impl/PaymentServiceImpl.java"
### 10.3.10.编写模块controller
@import "./projects/springcloud-eureka/springcloud-provider-sleuth_zipkin-cluster-node-payment8006/src/main/java/org/openatom/springcloud/controller/PaymentController.java"
### 10.3.11.编写模块主启动类
@import "./projects/springcloud-eureka/springcloud-provider-sleuth_zipkin-cluster-node-payment8006/src/main/java/org/openatom/springcloud/PaymentServiceProviderSleuthAndZipkinClusterNode8006.java"

## 10.4.搭建服务消费者
### 10.4.1.模块简介
    具有调用链路追踪功能的服务消费者,启动端口: 80
### 10.4.2.模块目录结构
@import "./projects/springcloud-eureka/springcloud-consumer-sleuth_zipkin-loadbalance-default-order80/tree.md"
### 10.4.3.创建模块
	在父工程(springcloud-eureka)中创建一个名为springcloud-consumer-sleuth_zipkin-loadbalance-default-order80的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息
### 10.4.4.编写模块pom.xml
@import "./projects/springcloud-eureka/springcloud-consumer-sleuth_zipkin-loadbalance-default-order80/pom.xml"
### 10.4.5.编写模块application.yml
@import "./projects/springcloud-eureka/springcloud-consumer-sleuth_zipkin-loadbalance-default-order80/src/main/resources/application.yml"
### 10.4.6.编写模块config
@import "./projects/springcloud-eureka/springcloud-consumer-sleuth_zipkin-loadbalance-default-order80/src/main/java/org/openatom/springcloud/config/ApplicationContextConfig.java"
### 10.4.7.编写模块controller
@import "./projects/springcloud-eureka/springcloud-consumer-sleuth_zipkin-loadbalance-default-order80/src/main/java/org/openatom/springcloud/controller/OrderConsumerController.java"
### 10.4.8.编写模块主启动类
@import "./projects/springcloud-eureka/springcloud-consumer-sleuth_zipkin-loadbalance-default-order80/src/main/java/org/openatom/springcloud/OrderServiceConsumerSleuthAndZipkinLoadBalanceDefault80.java"

## 10.5.搭建Zipkin
详细参考-> <a href="/blogs/environment/centos/centos7/shardings/centos7-chapter-12.搭建SpringCloud技术栈所需组件.html#_12-3-搭建zipkin" target="_blank">搭建Zipkin</a>

## 10.6.测试Zipkin+Sleuth实现调用链路追踪
    启动相关服务
```mermaid
flowchart LR
    准备好数据库环境-->启动Eureka注册中心
    启动Eureka注册中心-->启动服务提供者8005节点
    启动服务提供者8005节点-->启动服务提供者8006节点
    启动服务提供者8006节点-->启动使用了Sleuth功能的服务消费者
    启动使用了Sleuth功能的服务消费者-->启动Zipkin
```

    在浏览器中访问下面两个URL
```
http://localhost/consumer/payment/get/1
```
```
http://localhost/consumer/payment/timeout/get/1
```
    查看调用链路
```
http://192.168.0.5:9411/zipkin/
```
```mermaid
flowchart LR
    点击红色加号-->选择serviceName
    选择serviceName-->弹出框选择服务消费端
    弹出框选择服务消费端-->点击RUN_QUERY
```
<img src="./images/zipkin.png" width="100%"/>

    通过上图的链路追踪可以清晰的查看到两个服务调用花费的时间情况

# 11.使用Apollo配置中心管理配置
## 11.1.Apollo配置中心简介
	Apollo(阿波罗)是一款可靠的分布式配置管理中心，诞生于携程框架研发部，能够集中化管理应用不同环境、不同集群的配置，配置修改后能够实时推送到应用端，并且具备规范的权限、流程治理等特性，适用于微服务配置管理场景。

<a href="https://www.apolloconfig.com" target="_blank">官方网址</a>
```
https://www.apolloconfig.com
```
<a href="https://github.com/apolloconfig" target="_blank">官网网址(GITHUB)</a>
```
https://github.com/apolloconfig
```

## 11.2.搭建Apollo配置中心
<a href="/blogs/environment/windows/windows-server2016/shardings/windows-server2016-chapter-2.搭建SpringCloud技术栈所需组件.html#_2-4-3-1-单环境版" target="_blank">基于独立部署的Eureka搭建Apollo配置中心-单环境版(Windows版)</a>

## 11.3.搭建服务消费者(Apollo)
### 11.3.1.章节内容简介
    本章节会展示如何使用Apollo配置中心来管理配置
### 11.3.2.模块简介
    使用了Apollo配置中心的服务消费者,启动端口: 80
### 11.3.3.模块目录结构
@import "./projects/springcloud-eureka/springcloud-config-apollo-loadbalance-openfeign-configuration-order80/tree.md"
### 11.3.4.创建模块
	在父工程(springcloud-eureka)中创建一个名为springcloud-config-apollo-loadbalance-openfeign-configuration-order80的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息
### 11.3.5.编写模块pom.xml
@import "./projects/springcloud-eureka/springcloud-config-apollo-loadbalance-openfeign-configuration-order80/pom.xml"
### 11.3.6.编写模块application.yml
@import "./projects/springcloud-eureka/springcloud-config-apollo-loadbalance-openfeign-configuration-order80/src/main/resources/application.yml"
### 11.3.7.编写模块Apollo配置文件
@import "./projects/springcloud-eureka/springcloud-config-apollo-loadbalance-openfeign-configuration-order80/src/main/resources/apollo-env.properties"
### 11.3.8.编写模块config
@import "./projects/springcloud-eureka/springcloud-config-apollo-loadbalance-openfeign-configuration-order80/src/main/java/org/openatom/springcloud/config/OpenFeignConfig.java"
### 11.3.9.编写模块service
@import "./projects/springcloud-eureka/springcloud-config-apollo-loadbalance-openfeign-configuration-order80/src/main/java/org/openatom/springcloud/service/PaymentServiceOpenFeign.java"
### 11.3.10.编写模块listener
@import "./projects/springcloud-eureka/springcloud-config-apollo-loadbalance-openfeign-configuration-order80/src/main/java/org/openatom/springcloud/listener/ApolloPropertiesChangedListener.java"
### 11.3.11.编写模块controller
    ApolloConfigController.java
@import "./projects/springcloud-eureka/springcloud-config-apollo-loadbalance-openfeign-configuration-order80/src/main/java/org/openatom/springcloud/controller/ApolloConfigController.java"
    OrderConsumerController.java
@import "./projects/springcloud-eureka/springcloud-config-apollo-loadbalance-openfeign-configuration-order80/src/main/java/org/openatom/springcloud/controller/OrderConsumerController.java"
### 11.3.12.编写模块主启动类
@import "./projects/springcloud-eureka/springcloud-config-apollo-loadbalance-openfeign-configuration-order80/src/main/java/org/openatom/springcloud/OrderServiceConsumerApolloLoadBalanceOpenFeignConfiguration80.java"
### 11.3.13.测试模块
#### 11.3.13.1.访问Apollo主界面
    启动相关服务
```mermaid
flowchart LR
    启动Eureka注册中心-->启动Apollo
```

    Eureka注册中心
```
http://localhost:7001/
```
    看到如下界面代表apollo的adminservice服务和configservice服务启动成功
<img src="./images/apollo-eureka7001.png"  width="100%"/>

    Apollo配置中心
```
http://localhost:8070/
```
<img src="./images/apollo8070.png"  width="100%"/>
    登录用户名/密码: apollo/admin

#### 11.3.13.2.配置Apollo系统参数
    添加系统参数
```mermaid
flowchart LR
    启动Apollo-->访问http://localhost:8070/
	访问http://localhost:8070/-->登录Apollo
    登录Apollo-->管理员工具
    管理员工具-->系统参数
    系统参数-->输入key值/Value值
```

	添加新部门(可选)
	key
```
organizations
```
	value
```
[{"orgId":"TEST1","orgName":"样例部门1"},{"orgId":"TEST2","orgName":"样例部门2"},{"orgId":"micro_service","orgName":"微服务部门"}]
```

#### 11.3.13.3.在Apollo中创建项目
    创建项目
```mermaid
flowchart LR
    登录Apollo-->创建应用
    创建应用-->填写应用信息
    填写应用信息-->提交
```
    应用信息中AppId值和application.yml中保持一致
    app:
      id: springcloud-eureka

    新增配置
```mermaid
flowchart LR
    新增配置-->随意填写key和value
    随意填写key和value-->提交
```

    编辑配置
```mermaid
flowchart LR
    切换表格为文本-->修改配置
    修改配置-->粘贴配置文本
    粘贴配置文本-->提交修改
    提交修改-->发布
```

    具体文本配置内容如下
```
server.port = 80
eureka.client.service-url.defaultZone = http://localhost:7001/eureka
eureka.client.fetchRegistry = true
eureka.instance.prefer-ip-address = false
feign.client.config.SPRINGCLOUD-PROVIDER-PAYMENT-SERVICE-CLUSTER.connectTimeout = 5000
feign.client.config.SPRINGCLOUD-PROVIDER-PAYMENT-SERVICE-CLUSTER.readTimeout = 5000
logging.level.org.openatom.springcloud.services.PaymentServiceOpenFeign = debug
spring.application.name = SPRINGCLOUD-APOLLO-LOADBALANCE-OPENFEIGN-CONFIGURATION-ORDER80
spring.devtools.restart.enabled = true
spring.logging.level = info
SPRINGCLOUD-PROVIDER-PAYMENT-SERVICE-CLUSTER.ribbon.NFLoadBalancerRuleClassName = com.netflix.loadbalancer.RandomRule
eureka.client.register-with-eureka = true
```
    此时界面上显示出了刚才添加的配置
<img src="./images/apollo-config-springcloud-eureka.png"  width="100%"/>

#### 11.3.13.4.启动当前模块
    在idea中给当前模块配置jvm启动参数
```
    -Denv=DEV -Dapollo.cacheDir=D:\repository\cache\apollo -Dapollo.cluster=DEFAULT
```
    -Denv=DEV代表可以获取到Apollo中DEV环境的参数

    配置好jvm参数后,在idea中启动当前模块,如果项目可以正常启动,说明已经从Apollo中读取到了配置
#### 11.3.13.5.测试Apollo
    在浏览器中访问
```
http://localhost/consumer/apollo/test
```
    返回结果
SPRINGCLOUD-APOLLO-LOADBALANCE-OPENFEIGN-CONFIGURATION-ORDER80
    这个结果是从Apollo中获取到的服务名

    在Apollo中修改spring.application.name的值为
    SPRINGCLOUD-APOLLO-LOADBALANCE-OPENFEIGN-CONFIGURATION-ORDER80-XXX
    再次访问
```
http://localhost/consumer/apollo/test
```
    返回结果
    SPRINGCLOUD-APOLLO-LOADBALANCE-OPENFEIGN-CONFIGURATION-ORDER80-XXX
    此时获取到的服务名已经变成了刚才修改后的服务名

    到idea控制台中查看
    a.输出了如下内容,这说明监听器也监听到了Apollo中配置文件的变化
    ConfigChange{namespace='application', propertyName='spring.application.name', oldValue='SPRINGCLOUD-APOLLO-LOADBALANCE-OPENFEIGN-CONFIGURATION-ORDER80', newValue='SPRINGCLOUD-APOLLO-LOADBALANCE-OPENFEIGN-CONFIGURATION-ORDER80-XXX', changeType=MODIFIED}
    b.服务自动重启了
    这是因为在编写当前模块的监听器时,里面的逻辑是当监听到了Apollo中配置文件的变化,就自动重启服务

    拓展:如何实现SpringCloud项目的自动重启
    a.application.yml中添加配置
```
server:
  tomcat:
    mbeanregistry:
      enabled: true

management:
  endpoint:
    restart:
      enabled: true
```
    b.编写重启方法
```
    @Autowired
    private RestartEndpoint restartEndpoint;

    /**
     * 访问这个地址可以重启SpringBoot项目
     */
    public String restartApplication(){
        restartEndpoint.restart();
        return "请稍后,应用程序正在重启...";
    }
```
    这个方法可以直接调用触发(如当前模块中由在监听器中调用触发重启的方法),可以通过REST API触发,如
@import "./projects/springcloud-eureka/springcloud-config-apollo-loadbalance-openfeign-configuration-order80/src/main/java/org/openatom/springcloud/controller/RestartApplicationController.java"

# 12.使用Seata进行分布式事务控制
## 12.1.Seata简介
    Seata 是一款开源的分布式事务解决方案，致力于提供高性能和简单易用的分布式事务服务。Seata 将为用户提供了 AT、TCC、SAGA 和 XA 事务模式，为用户打造一站式的分布式解决方案。
<a href="https://seata.io/zh-cn/" target="_blank">官方网址</a>
```
https://seata.io/zh-cn/
```

## 12.2.搭建Seata Server
详细参考-> <a href="/blogs/environment/centos/centos7/shardings/centos7-chapter-12.搭建SpringCloud技术栈所需组件.html#_12-3-搭建zipkin" target="_blank">搭建Seate-Server(Windows版)</a>
## 12.3.准备数据库环境
    导入数据库脚本(application.yml中数据库配置和mysql部署机器信息保持一致)
@import "./projects/springcloud-eureka/script/payment.sql"
## 12.4.搭建服务提供者Account服务(Seata)
### 12.4.1.模块简介
    具有分布式事务控制功能的服务提供者Account服务,启动端口: 8007
### 12.4.2.模块目录结构
@import "./projects/springcloud-provider-seata-account8007/tree.md"
### 12.4.3.创建模块
	在父工程(springcloud-eureka)中创建一个名为springcloud-provider-seata-account8007的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息
### 12.4.4.编写模块pom.xml
@import "./projects/springcloud-eureka/springcloud-provider-seata-account8007/pom.xml"
### 12.4.5.编写模块application.yml
@import "./projects/springcloud-eureka/springcloud-provider-seata-account8007/src/main/resources/application.yml"
### 12.4.6.编写Apollo配置文件
@import "./projects/springcloud-eureka/springcloud-provider-seata-account8007/src/main/resources/apollo-env.properties"
### 12.4.7.编写模块Mybatis配置文件
@import "./projects/springcloud-eureka/springcloud-provider-seata-account8007/src/main/resources/mapper/AccountMapper.xml"
### 12.4.8.编写模块dao
@import "./projects/springcloud-eureka/springcloud-provider-seata-account8007/src/main/java/org/openatom/springcloud/dao/AccountDao.java"
### 12.4.9.编写模块service
@import "./projects/springcloud-eureka/springcloud-provider-seata-account8007/src/main/java/org/openatom/springcloud/service/AccountService.java"
### 12.4.10.编写模块service实现类
@import "./projects/springcloud-eureka/springcloud-provider-seata-account8007/src/main/java/org/openatom/springcloud/service/impl/AccountServiceImpl.java"
### 12.4.11.编写模块listener
@import "./projects/springcloud-eureka/springcloud-provider-seata-account8007/src/main/java/org/openatom/springcloud/listener/ApolloPropertiesChangedListener.java"
### 12.4.12.编写模块config
@import "./projects/springcloud-eureka/springcloud-provider-seata-account8007/src/main/java/org/openatom/springcloud/conf/DataSourceProxyConfig.java"
### 12.4.13.编写模块controller
@import "./projects/springcloud-eureka/springcloud-provider-seata-account8007/src/main/java/org/openatom/springcloud/controller/AccountController.java"
### 12.4.14.编写模块主启动类
@import "./projects/springcloud-eureka/springcloud-provider-seata-account8007/src/main/java/org/openatom/springcloud/AccountServiceProviderSeatal8007.java"
## 12.4.搭建服务提供者Storage服务(Seata)
### 12.5.1.模块简介
    具有分布式事务控制功能的服务提供者Storage服务,启动端口: 8008
### 12.5.2.模块目录结构
@import "./projects/springcloud-provider-seata-storage8008/tree.md"
### 12.5.3.创建模块
	在父工程(springcloud-eureka)中创建一个名为springcloud-provider-seata-storage8008的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息
### 12.5.4.编写模块pom.xml
@import "./projects/springcloud-eureka/springcloud-provider-seata-storage8008/pom.xml"
### 12.5.5.编写模块application.yml
@import "./projects/springcloud-eureka/springcloud-provider-seata-storage8008/src/main/resources/application.yml"
### 12.5.6.编写Apollo配置文件
@import "./projects/springcloud-eureka/springcloud-provider-seata-storage8008/src/main/resources/apollo-env.properties"
### 12.5.7.编写模块Mybatis配置文件
@import "./projects/springcloud-eureka/springcloud-provider-seata-storage8008/src/main/resources/mapper/StorageMapper.xml"
### 12.5.8.编写模块dao
@import "./projects/springcloud-eureka/springcloud-provider-seata-storage8008/src/main/java/org/openatom/springcloud/dao/StorageDao.java"
### 12.5.9.编写模块service
@import "./projects/springcloud-eureka/springcloud-provider-seata-storage8008/src/main/java/org/openatom/springcloud/service/StorageService.java"
### 12.5.10.编写模块service实现类
@import "./projects/springcloud-eureka/springcloud-provider-seata-storage8008/src/main/java/org/openatom/springcloud/service/impl/StorageServiceImpl.java"
### 12.5.11.编写模块listener
@import "./projects/springcloud-eureka/springcloud-provider-seata-storage8008/src/main/java/org/openatom/springcloud/listener/ApolloPropertiesChangedListener.java"
### 12.5.12.编写模块config
@import "./projects/springcloud-eureka/springcloud-provider-seata-storage8008/src/main/java/org/openatom/springcloud/conf/DataSourceProxyConfig.java"
### 12.5.13.编写模块controller
@import "./projects/springcloud-eureka/springcloud-provider-seata-storage8008/src/main/java/org/openatom/springcloud/controller/StorageController.java"
### 12.5.14.编写模块主启动类
@import "./projects/springcloud-eureka/springcloud-provider-seata-storage8008/src/main/java/org/openatom/springcloud/StorageServiceProviderSeatal8008.java"
## 12.6.搭建服务消费者
### 12.6.1.模块简介
    具有分布式事务控制功能的服务消费者Order服务,启动端口: 80
### 12.6.2.模块目录结构
@import "./projects/springcloud-consumer-seata-loadbalance-openfeign-configuration-order80/tree.md"
### 12.6.3.创建模块
	在父工程(springcloud-eureka)中创建一个名为springcloud-consumer-seata-loadbalance-openfeign-configuration-order80的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息
### 12.6.4.编写模块pom.xml
@import "./projects/springcloud-eureka/springcloud-consumer-seata-loadbalance-openfeign-configuration-order80/pom.xml"
### 12.6.5.编写模块application.yml
@import "./projects/springcloud-eureka/springcloud-consumer-seata-loadbalance-openfeign-configuration-order80/src/main/resources/application.yml"
### 12.6.6.编写Apollo配置文件
@import "./projects/springcloud-eureka/springcloud-consumer-seata-loadbalance-openfeign-configuration-order80/src/main/resources/apollo-env.properties"
### 12.6.7.编写模块Mybatis配置文件
@import "./projects/springcloud-eureka/springcloud-consumer-seata-loadbalance-openfeign-configuration-order80/src/main/resources/mapper/OrderMapper.xml"
### 12.6.8.编写模块dao
@import "./projects/springcloud-eureka/springcloud-consumer-seata-loadbalance-openfeign-configuration-order80/src/main/java/org/openatom/springcloud/dao/OrderDao.java"
### 12.6.9.编写模块service
    AccountService.java
@import "./projects/springcloud-eureka/springcloud-consumer-seata-loadbalance-openfeign-configuration-order80/src/main/java/org/openatom/springcloud/service/AccountService.java"
    OrderService.java
@import "./projects/springcloud-eureka/springcloud-consumer-seata-loadbalance-openfeign-configuration-order80/src/main/java/org/openatom/springcloud/service/OrderService.java"
    StorageService.java
@import "./projects/springcloud-eureka/springcloud-consumer-seata-loadbalance-openfeign-configuration-order80/src/main/java/org/openatom/springcloud/service/StorageService.java"
### 12.6.10.编写模块service实现类
@import "./projects/springcloud-eureka/springcloud-consumer-seata-loadbalance-openfeign-configuration-order80/src/main/java/org/openatom/springcloud/service/impl/OrderServiceImpl.java"
### 12.6.11.编写模块listener
@import "./projects/springcloud-eureka/springcloud-consumer-seata-loadbalance-openfeign-configuration-order80/src/main/java/org/openatom/springcloud/listener/ApolloPropertiesChangedListener.java"
### 12.6.12.编写模块config
    DataSourceProxyConfig.java
@import "./projects/springcloud-eureka/springcloud-consumer-seata-loadbalance-openfeign-configuration-order80/src/main/java/org/openatom/springcloud/conf/DataSourceProxyConfig.java"
    FeignConfig.java
@import "./projects/springcloud-eureka/springcloud-consumer-seata-loadbalance-openfeign-configuration-order80/src/main/java/org/openatom/springcloud/conf/FeignConfig.java"
### 12.6.13.编写模块controller
@import "./projects/springcloud-eureka/springcloud-consumer-seata-loadbalance-openfeign-configuration-order80/src/main/java/org/openatom/springcloud/controller/OrderController.java"
### 12.6.14.编写模块主启动类
@import "./projects/springcloud-eureka/springcloud-consumer-seata-loadbalance-openfeign-configuration-order80/src/main/java/org/openatom/springcloud/OrderServiceConsumerSeatalLoadBalanceOpenFeignConfiguration80.java"
## 12.6.测试使用Seata进行分布式事务控制
    启动相关服务
```mermaid
flowchart LR
    启动Eureka注册中心-->启动Apollo
	启动Apollo-->启动Seata-Server
    启动服务提供者Account服务8007-->启动服务提供者Storage服务8008
    启动服务提供者Storage服务8008-->启动服务消费者Order服务
```
    在seate-server控制台查看,三个服务已经被成功注册
<img src="./images/seate-server-console.png"  width="100%"/>

    测试使用Seata控制实现分布式事务回滚
    调用接口前查看数据库中数据
    a.t_account表
    mysql> SELECT * FROM seata_account.t_account;
    +----+---------+-------+------+---------+
    | id | user_id | total | used | residue |
    +----+---------+-------+------+---------+
    |  1 |       1 |  1000 |    0 |    1000 |
    +----+---------+-------+------+---------+
    1 row in set (0.00 sec)

    b.t_storage表
    mysql> SELECT * FROM seata_storage.t_storage;
    +----+------------+-------+------+---------+
    | id | product_id | total | used | residue |
    +----+------------+-------+------+---------+
    |  1 |          1 |   100 |    0 |     100 |
    +----+------------+-------+------+---------+
    1 row in set (0.00 sec)

    c.t_order表
    mysql> SELECT * FROM seata_order.t_order;
    Empty set (0.00 sec)

    在浏览器访问引发异常的接口
```
http://localhost/order/create?userId=1&productId=1&count=10&money=100
```
    由于在调用Account服务时会报异常,浏览器页面会直接报错,seata会自动进行回滚

    调用接口前查看数据库中数据
    a.t_account表
    mysql> SELECT * FROM seata_account.t_account;
    +----+---------+-------+------+---------+
    | id | user_id | total | used | residue |
    +----+---------+-------+------+---------+
    |  1 |       1 |  1000 |    0 |    1000 |
    +----+---------+-------+------+---------+
    1 row in set (0.00 sec)

    b.t_storage表
    mysql> SELECT * FROM seata_storage.t_storage;
    +----+------------+-------+------+---------+
    | id | product_id | total | used | residue |
    +----+------------+-------+------+---------+
    |  1 |          1 |   100 |    0 |     100 |
    +----+------------+-------+------+---------+
    1 row in set (0.00 sec)

    c.t_order表
    mysql> SELECT * FROM seata_order.t_order;
    Empty set (0.00 sec)

    如果想要更明显的查看Seata在项目中起的作用,可使用如下方式
    a.关闭seata-server,在浏览器中访问服务,再去数据库中查看,可以发现表中的数据发生了改变
    b.在调用的时候打端点,可以观察到表中的数据会先发生变化,放开断点后,又会因为发生异常触发回滚导致表中的数据恢复到初始状态
## 12.7.注意事项
    在这个案例中,三个服务和seata-server在Apollo注册中接入在同一个项目中,依靠namespace的值区分三个不同服务和seata-server,这样就可以让三个不同的服务和seata-server同时使用apollo,因为application.yml中app.id这个配置项只能配置一个值,如果不这样处理,三个服务只能使用seata进行分布式事务控制,并不能使用apollo管理配置

# 12.在生产环境中更好的使用SpringCloud

使用SpingBootAdmin监控微服务