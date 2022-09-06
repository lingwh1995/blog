---
title: 基于Eureka搭建Springcloud微服务-19.使用rancher管理docker和Kubernetes
description: 本章节涉及主要内容有：使用rancher管理docker,使用rancher管理Kubernetes,具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试，可直接复制运行即可。
headerDepth: 4
isOriginal: true
category:
  - springcloud
star: false
tag:
  - rancher
date: 2020-07-25
head:
  - - meta
    - name: keywords
      content: 本章节涉及主要内容有：使用rancher管理docker,使用rancher管理Kubernetes,具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试，可直接复制运行即可。
---

# 19.使用rancher管理docker和Kubernetes
@include(@src/public/enhance/guidance/backend/springcloud/springcloud-eureka/chapter/springcloud-eureka-guidance-chapter19.md)
## 19.3.使用rancher管理docker
### 19.3.1.搭建rancher
    在192.168.0.4上搭建rancher
详细参考-> <a href="/blogs/environment/centos/centos7/shardings/centos7-chapter-5.搭建Rancher技术栈.html#_5-3-搭建rancher" target="_blank">搭建rancher</a>
### 19.3.2.搭建用于测试使用rancher管理docker的微服务
#### 19.3.2.1.模块简介
    测试持续集成微服务到docker中使用到的微服务
#### 19.3.2.2.模块目录结构
```md
@include(../projects/springcloud-eureka/springcloud-ci-docker-rancher80/tree.md)
```
#### 19.3.2.3.创建模块
	在父工程(springcloud-eureka)中创建一个名为springcloud-ci-docker-rancher80的maven模块,注意:当前模块创建成功后,在父工程pom.xml中<modules></modules>中会自动生成有关当前模块的信息
#### 19.3.2.4.编写模块pom.xml
```xml
@include(../projects/springcloud-eureka/springcloud-ci-docker-rancher80/pom.xml)
```
#### 19.3.2.5.编写模块配置文件
    application.yml
```yml
@include(../projects/springcloud-eureka/springcloud-ci-docker-rancher80/src/main/resources/application.yml)
```
    logback-custom.xml
```xml
@include(../projects/springcloud-eureka/springcloud-ci-docker-rancher80/src/main/resources/logback-custom.xml)
```
#### 19.3.2.6.编写模块controller
```java
@include(../projects/springcloud-eureka/springcloud-ci-docker-rancher80/src/main/java/org/openatom/springcloud/controller/CiDockerRancherController.java)
```
#### 19.3.2.7.编写模块config
```java
@include(../projects/springcloud-eureka/springcloud-ci-docker-rancher80/src/main/java/org/openatom/springcloud/config/VirtualIpConfig.java)
```
#### 19.3.2.8.编写模块主启动类
```java
@include(../projects/springcloud-eureka/springcloud-ci-docker-rancher80/src/main/java/org/openatom/springcloud/CiDockerRancher80.java)
```
#### 19.3.2.9.编写模块Dockerfile
    注意:需要先在 项目根目录/springcloud-ci-docker-rancher80下创建docker文件夹
@include(../projects/springcloud-eureka/springcloud-ci-docker-rancher80/docker/Dockerfile)
```
### 19.3.3.配置rancher连接docker
    访问rancher->点击右下角切换语言处切换为中文环境
```
http://192.168.0.4:9003/
```
::: center
<div class="imgbg-customer">
<img src="../images/rancher-9003.png"  width="100%"/>
</div>
:::

    添加主机
```mermaid
flowchart LR
    访问rancher-->点击基础架构
    点击基础架构-->点击主机
    点击主机-->点击添加主机
    点击添加主机-->根据情况输入主机注册地址
    根据情况输入主机注册地址-->点击保存
```
    在docker主机上注册rancher
    上面步骤执行完成之后,复制弹出界面中第五步(将下列脚本拷贝到每一台主机上运行以注册 Rancher:)的代码到docker安装的主机上执行,执行完成后点击关闭按钮
```
sudo docker run --rm --privileged -v /var/run/docker.sock:/var/run/docker.sock \
-v /var/lib/rancher:/var/lib/rancher rancher/agent:v1.2.11 \
http://192.168.0.4:9003/v1/scripts/9F1C7A21277B3BBB9357:1640908800000:wdp8qKpCKNvXMXY3IYsICf0ovk
```
### 19.3.4.配置rancher连接harbor使用的认证
```mermaid
flowchart LR
    访问rancher-->点击基础架构
    点击基础架构-->点击镜像库
    点击镜像库-->点击Custom
    点击Custom-->填写镜像库信息
    填写镜像库信息-->点击创建
```
    镜像库信息
    a.地址*
    192.168.0.5:5000
    b.用户名
    admin
    c.密码
    123456
::: center
<div class="imgbg-customer">
<img src="../images/rancher-harbor-secret.png"  width="100%"/>
</div>
:::

### 19.3.5.使用docker的maven插件推送镜像到harbor
    启动相关服务
```mermaid
flowchart LR
    启动192.168.0.4上的docker-->启动192.168.0.5上的docker
    启动192.168.0.5上的docker-->启动192.168.0.5上的harbor
```

    在项目根目录下执行打包命令
```
mvn clean install
```

    在项目根目录下执行复制生成的jar包到指定位置
```
cp springcloud-ci-docker80/target/springcloud-ci-docker-rancher80.jar springcloud-ci-docker-rancher80/docker
```

    在idea中打开docker的maven插件操作面板
::: center
<div class="imgbg-customer">
<img src="../images/idea-docker-maven-plugin-cidockerrancher80.png"  width="100%"/>
</div>
:::

    制作Docker镜像并上传镜像到docker制作Docker镜像
    点击docker:build

    在harbor私服中创建springcloud-eureka项目
::: center
<div class="imgbg-customer">
<img src="../images/harbor-springcloud-eureka.png"  width="100%"/>
</div>
:::

    推送到harbor私服
    点击docker:build->点击docker:push
    登录harbor私服查看刚才推送上去的的服务
```
http://192.168.0.5:5000/harbor/projects
```
    点击springcloud-eureka这个项目
::: center
<div class="imgbg-customer">
<img src="../images/harbor-springcloud-eureka-cidockerrancher80.png"  width="100%"/>
</div>
:::
    可以看到当前模块微服务已经被推送到了harbor私服中

### 19.3.6.使用rancher管理docker容器
#### 19.3.6.1.添加docker容器
    访问rancher
```
http://192.168.0.4:9003/
```
    添加容器
```mermaid
flowchart LR
    访问rancher-->点击基础架构
    点击基础架构-->点击容器
    点击容器-->点击添加容器
```

    填写容器信息
    a.名称
    springcloud-ci-docker-rancher80
    b.选择镜像*
    192.168.0.5:5000/springcloud-eureka/springcloud-ci-docker-rancher80:latest
    c.端口映射
    公开主机端口 80
    私有容器端口 80
    协议 TCP
::: center
<div class="imgbg-customer">
<img src="../images/rancher-add-container-cidockerrancher80.png"  width="100%"/>
</div>
:::

    最后点击页面底部创建
#### 19.3.6.2.测试使用rancher管理docker容器
    浏览器访问
```
http://192.168.0.4/ci/docker/rancher
```
    返回结果
```
{"code":200,"message":"持续集成","data":"测试持续集成到Docker+测试Racnehr"}
```

### 19.3.7.使用rancher对应用进行扩容
#### 19.3.7.1.添加应用
    访问rancher
```
http://192.168.0.4:9003/
```

    添加应用
```mermaid
flowchart LR
    访问rancher-->点击应用
    点击应用-->点击添加应用
    点击添加应用-->输入应用信息
```

    填写应用信息
    a.名称
    springcloud-eureka

    进入界面后选择添加服务->填写容器信息
    a.名称
    springcloud-ci-docker-rancher80-plus
    b.选择镜像*
    192.168.0.5:5000/springcloud-eureka/springcloud-ci-docker-rancher80:latest
    c.端口映射
    特别注意: 这里不要配置端口映射
#### 19.3.7.2.配置WebHooks
    访问rancher
```
http://192.168.0.4:9003/
```

    添加接收器
```mermaid
flowchart LR
    访问rancher-->点击API
    点击API-->点击WebHooks
    点击WebHooks-->点击添加接收器
    点击添加接收器-->配置接收器信息
    配置接收器信息-->点击创建
```
::: center
<div class="imgbg-customer">
<img src="../images/rancher-manage-app.png"  width="100%"/>
</div>
:::

    点击创建后来到如下界面,点击复制按钮即可获取扩容触发api
::: center
<div class="imgbg-customer">
<img src="../images/rancher-manage-app-copy.png"  width="100%"/>
</div>
:::

#### 19.3.7.3.使用postman触发扩容
    使用postman触发扩容(点击两次,注意:请求方式一定是post方式)
::: center
<div class="imgbg-customer">
<img src="../images/rancher-manage-app-postman.png"  width="100%"/>
</div>
:::

    查看扩容效果
```mermaid
flowchart LR
    访问rancher-->点击基础架构
    点击基础架构-->点击容器
```
    即可查看到应用已经扩容为三份,缩容不再演示,详细请参考扩容自动配置
#### 19.3.7.4.为扩容后的应用添加负载均衡器
    在刚才创建应用的时候,没有配置端口映射,外部是无法访问这个服务的,如果外部要访问这个服务,则要配置负载均衡器
```mermaid
flowchart LR
    访问rancher-->点击应用
    点击应用-->点击用户
    点击用户-->点击springcloud-eureka
    点击springcloud-eureka-->点击添加服务旁小三角
    点击添加服务旁小三角-->点击添加负载均衡
    点击添加负载均衡-->填写负载均衡配置
    填写负载均衡配置-->点击创建
```
::: center
<div class="imgbg-customer">
<img src="../images/rancher-manage-app-loadbalance.png"  width="100%"/>
</div>
:::

    在浏览器访问
```
http://192.168.0.4/ci/docker/rancher
```

    返回结果
```
{"code":200,"message":"持续集成","data":"测试持续集成到Docker+测试Racnehr"}
```
#### 19.3.7.5.查看扩容后每个节点的日志
##### 19.3.7.5.1.在kibana为日志创建索引
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
    点击左侧Discover-->A("在Create Index pattern输入springcloud-eureka-*")
    A("在Create Index pattern输入springcloud-eureka-*")-->B("点击Next Step")
    B("点击Next Step")-->C("下拉框选择@timestap")
    C("下拉框选择@timestap")-->D("点击Create Index Pattern")
    D("点击Create Index Pattern")-->再次点击Discover
```
    注意:如果点击Discover没有显示日志,请确定ELK部署机器中的时区和时间是否正确,如果不正确,将时区和时间修改正确后再次启动项目,重新执行创建索引的操作,可以看到kibana中展示出来了推送到elk中日志
##### 19.3.7.5.2.获取扩容后节点的ip
    查看服务所有节点详细信息
```mermaid
flowchart LR
    访问rancher-->点击应用
    点击应用-->点击用户
    点击用户-->点击springcloud-eureka
    点击springcloud-eureka-->点击springcloud-ci-docker-rancher80-plus
```

    可以看到扩容后所有节点的ip信息
::: center
<div class="imgbg-customer">
<img src="../images/rancher-manage-app-nodes.png"  width="100%"/>
</div>
:::

##### 19.3.7.5.3.查看日志
    根据ip信息可以在kibana中过滤出不同节点的日志
::: center
<div class="imgbg-customer">
<img src="../images/rancher-manage-app-nodes-log.png"  width="100%"/>
</div>
:::

#### 19.3.7.6.为rancher设计扩容缩容算法
    使用java程序触发rancher的扩容或缩容,如根据时间节点扩容缩容,8:00-12:00这个时间范围内扩容,12:00-20:00这个时间内缩容,这只是一种思路,其他的更复杂的扩容缩容算法请自行根据业务设计

## 19.4.使用rancher管理Kubernetes


<ScrollIntoPageView/>
<HideSideBar/>
