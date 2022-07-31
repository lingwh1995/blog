<template><div><p>3&gt;.kubectl命令合集
​		kubectl delete node k8s-master1
​			development控制器相关操作命令
​				使用development控制器创建pod步骤
​					创建pod-&gt;使用service暴露pod
​				创建
​					命令
​						kubectl create deployment deployment名称 --image=镜像在仓库中的名称 --replicas=副本数目
​					示例
​						kubectl create deployment first-app-nginx-kubectl-create --image=nginx --replicas=3
​				查看所有deployment
​					命令
​						kubectl get deployment
​				删除
​					命令
​						kubectl delete deployment deplopment名称
​					示例：
​						kubectl delete deployment  first-app-nginx-kubectl-create
​			service相关操作命令
​				创建service：使用service对外暴露pod同时提供负载均衡
​					方式一：
​						命令
​							kubectl expose deployment 应用名称  --port=k8s内部使用的端口 --target-port=服务运行端口，如nginx运行的端口是80 --type=NodePort
​						示例
​							kubectl expose deployment first-app-nginx-kubectl-create  --port=80 --target-port=80 --type=NodePort
​					方式二：生产中推荐使用
​						kubectl apply -f xxx.yaml
​				获取所有service信息
​					命令
​						kubectl get service
​					简写命令
​						kubectl get svc
​				获取某个具体service信息
​					命令
​						kubectl get service 应用名称
​					示例
​						kubectl get service first-app-nginx-kubectl-create
​				获取某个service关联的所有pod
​					第一步：到处yaml配置到控制台
​						命令
​							kubectl get service 应用名称 -o yaml
​						示例
​							kubectl get service guestbook -o yaml
​					第二步：查看该service对应pod的标签			
​						查看控制台显示的yaml中selector的值，这个值就是创建pod时设定的标签，可以用于k8s后续操作，如：
​						  selector:
​							app: guestbook
​					第三步：
​						根据标签选择出指定的pod，显示出来的pod就是该标签关联的pod
​						命令
​							kubectl get pods -l 标签key=标签value
​						示例
​							kubectl get pods -l app=guestbook
​			pod相关命令操作命令
​				创建pod
​					命令1:只做测试用，工作环境一般都要使用kubectl apply -f xxx.yam来创建
​						kubectl run nginx --image=nginx
​					命令2
​						kubectl apply -f xxx.yaml
​				查看当前命名空间的所有pod
​					#注意：加上-o=wide参数会查询出pod更详细的内容，如pod部署在哪个slave上，ip地址是什么等信息
​					kubectl get pods [-o=wide]
​				-o后参数详细内容	
​					-o=custom-columns=<spec>	根据自定义列名进行输出，以逗号分隔
​					-o=custom-colimns-file=<filename>	从文件中获取自定义列名进行输出
​					-o=json	以JSON格式显示结果
​					-o=jsonpath=<template>	输出jsonpath表达式定义的字段信息
​					-o=jsonpath-file=<filename>	输出jsonpath表达式定义的字段信息，来源于文件
​					-o=name	仅输出资源对象的名称
​					-o=wide	输出额外信息。对于Pod，将输出Pod所在的Node名，ip等额外信息
​					-o=yaml	以yaml格式显示结果
​				查看所有命名空间的所有pod
​					#注意：加上-o=wide参数会查询出pod更详细的内容，如pod部署在哪个slave上，ip地址是什么等信息
​					kubectl get pods --all-namespaces [-o=wide]
​				查看某个pod详细信息	
​					kubectl describe pod pod名称	
​				查看日志
​					当pod中只有一个容器时
​						查看容器中日志命令
​							kubectl logs pod名称
​						示例
​							kubectl logs guestbook-58df645464-p6fcl
​						实时查看容器中日志命令
​							kubectl logs pod名称 -f
​						示例
​							kubectl logs guestbook-58df645464-p6fcl -f	
​					当然器中包含多个容器时
​						查看某个容器日志命令
​							kubectl logs pod名称 容器名称
​						示例
​							kubectl logs guestbook-58df645464-p6fcl guestbook
​						实时查看某个容器日志命令
​							kubectl logs pod名称 容器名称 -f
​						示例
​							kubectl logs guestbook-58df645464-p6fcl guestbook -f	
​				进入容器终端
​					命令
​						该镜像中有bash支持时使用：
​							kubectl exec -it pod名称 -c 容器名称 --bash
​						该镜像中没有bash支持时使用：
​							kubectl exec -it pod名称 -c 容器名称 --sh
​					示例
​						kubectl exec -it test-pod-sharing-resource-ff5b47774-9vwzf -c nginx -- bash
​						kubectl exec -it test-pod-sharing-resource-ff5b47774-9vwzf -c busybox -- sh
​				删除pod（适用于非deployment创建的pod）
​					命令	
​						kubectl delete pod pod名称 [--force]，其中--force代表强制删除，是可选的
​					示例
​						kubectl delete pod second-app-nginx-kubectl-apply-57bcdf84cf-wghw4 [--force]					
​				获取k8s所有pod使用的内部ip和端口，注意这个ip和端口是供k8s内部使用的，外部是无法访问的
​					命令
​						kubectl get ep
​			查看每一个pod中定义了哪些标签
​				命令
​					kubectl get pods --show-labels
​			namespace相关操作命令
​				获取所有的命名空间
​					kubectl get namespace
​				操作时指定命名空间
​					命令
​						kubectl get pod -n namespace名称
​						kubectl logs -n namespace名称 pod名称
​					示例
​						kubectl get pod -n default
​						kubectl logs -n kuboard kuboard-v3-5fc46b5557-jlsrj
​	
​		4&gt;.部署应用的几种方式
​			方式一：kubectl create命令创建pod
​				create命令创建应用
​					kubectl expose deployment first-app-nginx-kubectl-create  --port=80 --target-port=80 --type=NodePort
​				暴露端口
​					kubectl expose deployment first-app-nginx-kubectl-create  --port=80 --target-port=80 --type=NodePort
​			方式二：kubectl apply命令创建pod
​				创建一个yaml文件，类似于docker-compose.yaml文件的作用，可以用来编排容器
​					详细见 config/k8s/second-app-nginx-kubectl-apply.yaml		
​				apply命令创建应用
​					kubectl apply -f  second-app-nginx-kubectl-apply.yaml
​				暴露端口
​					kubectl expose deployment second-app-nginx-kubectl-apply  --port=80 --target-port=80 --type=NodePort
​	
​		5&gt;.滚动升级应用版本（滚动升级版本好处 ：用户无感知）
​			方式1：使用编辑yaml文件，将nginx从 1.23升级到 1.7.9 版本
​				编辑配置文件，修改nginx版本			
​				vim second-app-nginx-kubectl-apply.yaml
​					升级命令：
​						kubectl apply -f  deployment名称 [--record=true]
​					示例	
​						#注意：加上--record=true指令后，查看历史升级版本时，后面不会显示<none>，会显示升级所使用的命令，这个可选，可加可不加
​						kubectl apply -f  second-app-nginx-kubectl-apply.yaml [--record=true]
​			方式2：直接在控制台使用命令修改镜像版本，将nginx从 1.7.9升级到 1.9.5 版本
​				不用编辑任何配置文件，直接使用命令行操作
​					升级命令
​						#注意：加上--record=true指令后，查看历史升级版本时，后面不会显示<none>，会显示升级所使用的命令，这个可选，可加可不加
​						kubectl set image deployment/pod名称 镜像名称=镜像信息 [--record=true]
​					示例
​						kubectl set image deployment/second-app-nginx-kubectl-apply nginx=nginx:1.9.5 [--record=true]
​			使用方式1和方式2升级镜像版本注意事项
​				镜像名称和版本号要和docker hub或者私服中镜像版本保持一致，特别注意镜像名称后面的冒号是英文状态下冒号，不是中文状态下冒号
​			查看升级历经的阶段
​				kubectl describe deployment second-app-nginx-kubectl-apply
​			查看是否成功升级应用/查看是否成功升级nginx版本
​				查看Response Headers中Server字段的值，这是值就是nginx 服务器的版本	
​		6&gt;.应用版本回滚（回滚是回滚到某次应用部署的状态 ，所有的配置都会回滚到那个版本）
​			为了方便测试版本回滚效果，先在5&gt;&gt;.步骤中将nginx版本进行两次升级，下面操作基于已经完成了nginx的两次版本升级
​	
​			查看所有历史发布版本
​				命令
​					kubectl rollout history deployment deployment名称
​				示例
​					kubectl rollout history deployment second-app-nginx-kubectl-apply
​			回滚上一个版本
​				命令
​					kubectl rollout undo deployment/应用名称
​				示例
​					kubectl rollout undo deployment/second-app-nginx-kubectl-apply
​			回滚到指定的历史版本	
​				命令
​					kubectl rollout undo deployment/应用名称 --to-revision=历史版本代号
​				示例:（回滚历史版本1，即nginx镜像版本为1.23的那个版本）
​					kubectl rollout undo deployment/second-app-nginx-kubectl-apply --to-revision=1
​		7&gt;.水平扩容缩容
​			方式一：修改配置文件并且重新发布配置文件
​				修改spec.replica：的值
​					值为1，一主二从的情况下，两台从机中的一台可以访问到这个服务
​					值为2，一主二从的情况下，两台从机都可以访问的到这个服务	
​					值为3，一主二从的情况下，两台从机都可以访问的到这个服务，其中一台从机部署了两份 ，另一台从机部署了一份	
​					值为3，一主二从的情况下，两台从机都可以访问的到这个服务，两台从机每一台从机上都部署了两份
​					
​					特别注意：master不跑任务，只有slave才跑任务
​					
​				执行命令（实际上就是重新发布一下）
​					kubectl apply -f  second-app-nginx-kubectl-apply.yaml [--record=true]		
​			方式二：直接使用命令行操作
​				扩容缩容命令：扩容就把原来的数据改大一些，缩容就把原来的数据改小一些
​					kubectl scale deployment deployment名称 --replicas=副本数目
​				示例：
​					kubectl scale deployment second-app-nginx-kubectl-apply --replicas=2
​			查看扩容缩容效果
​				执行命令后查询副本数目是否发生变化
​				 kubectl get pod
​			深入探讨为什么k8s和rancher扩容后外部可以访问到
​				假设有一个名为app端口为8080的应用程序部署在k8s和rancher中，扩容为三个副本后，k8s和rancher都会为app创建三个副本，并为每个副本提供一个内部的
​				虚拟ip，端口不变，使用虚拟ip+端口依然可以区分app服务的不同副本，这里k8s和rancher处理思路是一样的，假如k8s/rancher现在要对app进行扩容处理，
​				首先为app的三个副本分别配置的ip是	10.25.6.1，	10.25.6.2，	10.25.6.3，那么外部调用的app的时候，会根据服务名进行负载均衡，将请求均匀的分发
​				给三个副本进行处理，这样天然的实现了负载均衡
​			查看k8s分配每个pod和每个pod的多个副本的ip
​				命令：-w代表是否以实时监听模式查看
​					kubectl get ep [-w]
​			
​		8&gt;.服务下线
​			方式一：删除对应的deployment，注意不用删除pod，deployment相当于航母，pod相当于航母上的火炮，serveice相当于航母的护航舰队，
​						要击毁航母上的火炮，不要直接攻击航母上的火炮，击毁了还会重建，最好的方法是击毁航母和航母的护航舰队
​				命令：
​					kubectl delete deployment deplopment名称
​					kubectl delete service servic名称
​				示例
​					kubectl delete deployment  second-app-nginx-kubectl-apply
​					kubectl delete service second-app-nginx-kubectl-apply
​			命令二：删除k8s中对应的yaml配置，不是	rm -rf xxx配置文件
​				命令：
​					kubectl delete -f yaml配置文件名称
​				示例：	
​					kubectl delete -f second-app-nginx-kubectl-apply.yaml	
​			关于直接删除pod的一些解释
​				deployment是一个工作负载控制器，删除了pod之后deployment会以为是副本故障，会自动重建对应的pod
​				
​		9&gt;.pod相关概念
​			pod概念
​				pod是一个逻辑概念，k8s中管理和创建的最小单位，一个pod由一个容器和多个容器组成的
​			pod特点：
​				可以理解为是一个应用实例，提供服务
​				pod始终部署在一个node上
​				pod容器中共享网络资源、存储资源
​			pod存在意义以及pod和container（容器）
​				运行单个容器
​					可以看做是单个容器的抽象封装
​				运行多个容器
​					属于边车模式，在pod中定义多个容器，来对主业务容器进行辅助，如日志收集、应用监控，这样的好处是把主业务和和辅助功
​					能解耦，实现独立发布和能力重用
​			pod常用命令
​				创建pod
​					kubectl appy -f xxx.yaml
​				查看pod	
​			pod运行多容器共享网络和共享存储
​				共享存储
​					容器通过数据卷共享存储
​				共享网络
​					通过infra container容器实现共享网络，创建pod时先创建这个容器，负责管理这个pod的网络，所有自定义的容器都会加入
​					到这个pod定义的网络中
​				测试pod中共享存储和网络资源
​					创建包含两个容器的pod
​						创建一个yaml文件，类似于docker-compose.yaml文件的作用，里面创建两个容器
​						内容如下
​							详细见 config/k8s/test-pod-sharing-resource.yaml				
​					启动容器
​						kubectl apply -f test-pod-sharing-resource.yaml
​					验证存储共享						
​						操作nginx容器中
​							进入nginx容器		
​								kubectl exec -it test-pod-sharing-resource-ff5b47774-9vwzf -c nginx -- bash
​							执行ls命令，可以查看到一个名为data_nginx的文件夹
​								/ # ls
​								bin   data_nginx  docker-entrypoint.d   etc   lib    media  opt   root  sbin  sys  usr
​								boot  dev         <a href="http://docker-entrypoint.sh" target="_blank" rel="noopener noreferrer">docker-entrypoint.sh<ExternalLinkIcon/></a>  home  lib64  mnt    proc  run   srv   tmp  var
​							在nginx容器挂载的目录中创建文件
​								cd /data_nginx &amp;&amp; touch nginx_container.log	
​							执行ls命令，可以查看分别在两个容器中创建的文件，说明的确是共享的
​								/ # ls
​								busybox_container.log  nginx_container.log
​	
​						操作busybox容器		
​							进入pod中busybox容器
​								kubectl exec -it test-pod-sharing-resource-ff5b47774-9vwzf -c busybox -- sh
​							执行ls命令，可以查看到一个名为data_busybox的文件夹
​								/ # ls
​								bin           dev           home          root          tmp           var
​								data_busybox  etc           proc          sys           usr
​							在busybox容器挂载的目录中创建文件
​								cd /data_busybox &amp;&amp; touch busybox_container.log
​							执行ls命令，可以查看分别在两个容器中创建的文件，说明的确是共享的			
​								/ # ls
​								busybox_container.log  nginx_container.log							
​					验证网络共享
​						进入busybox容器，执行wget命令（127.0.0.1:80是nginx的首页）
​							wget 127.0.0.1:80
​		10&gt;.各种控制器	
​			service控制器
​				作用（用于对外暴露服务）：
​					1.使得本来只能在部署了k8s的机器上访问的内部接口暴露给外部访问
​					2.为多个pod提供负载均衡/统一访问入口
​				原理
​					创建一个service，通过标签选择器来选择将标签相同的pod归为一组，对外部提供一个服务接口供外部调用，类似springcloud的同
​					一个服务部署多份使用服务名调用，而不是使用ip调用，和springcloud不同之处是，springcloud不使用服务名使用IP也可可以直
​					接调用，但是无法实现负载均衡，而k8s在不使用service对外暴露服务的情况下，无法通过ip直接调用服务，因为k8s会给每一个pod
​					分配一个内部的ip，这个ip只能在部署了k8s的机器上进行调用，在外部环境是无法使用这个k8s内部ip进行调用的
​				两层负载均衡
​					service为多个pod提供负载均衡-&gt;访问其中一个pod时，这个pod的多个副本之间也是有负载均衡效果的					
​				类型
​					ClusterIP
​						基本解释
​							分配一个稳定的虚拟ip供集群内部使用，是service默认的类型，可以实现k8s内部的跨主机访问
​						特别注意: 1.k8s集群所有的节点可以访问这个ip  2.所有的pod可以访问这个ip
​					NodePort
​						基本解释
​							每个节点上启用一个端口来暴露服务，可以在集群外部访问，集群内部也会分配一个稳定的ip地址
​							访问地址：任意节点ip:NodePort
​							默认端口范围：30000-32767
​						不足之处
​							NodePort一个端口只能一个服务使用，需要提前规划
​							只支持四层负载均衡
​				测试使用service控制器 实现服务发现+负载均衡
​					创建三个pod
​						第一个pod：nginx版本为1.23
​							编写yaml文件
​								详细见 config/k8s/third-app-nginx-kubectl-apply.yaml
​							创建pod
​								kubectl apply -f third-app-nginx-kubectl-apply.yaml
​						第二个pod：nginx版本为1.7.9
​							编写yaml文件
​								详细见 config/k8s/fourth-app-nginx-kubectl-apply.yaml
​							创建pod
​								kubectl apply -f fourth-app-nginx-kubectl-apply.yaml
​						第三个pod：nginx版本为1.9.5
​							编写yaml文件
​								详细见 config/k8s/fifth-app-nginx-kubectl-apply.yaml
​							创建pod
​								kubectl apply -f fifth-app-nginx-kubectl-apply.yaml
​					查看三个pod的标签
​						命令
​							kubectl get pods --show-labels
​						结果：查看到三个pod的共同标签是app=test-service
​							fifth-app-nginx-kubectl-apply-7c6bfffd96-zvnlc   1/1     Running   0          6m13s   app=test-service,pod-template-hash=7c6bfffd96
​							fourth-app-nginx-kubectl-apply-9fb7849c9-d4j5s   1/1     Running   0          6m16s   app=test-service,pod-template-hash=9fb7849c9
​							second-app-nginx-kubectl-apply-75655d9c8-d8npw   1/1     Running   0          83m     app=nginx,pod-template-hash=75655d9c8
​					编写service相关的yaml
​						登录kubernetes官网，搜索service，搜索结果点进去第一个 Service | Kubernetes，往下拉就可以看到service.yaml模板
​							详细见 config/k8s/first-service.yaml
​						创建service
​							kubectl apply -f first-service.yaml
​						查看刚才创建的service
​							kubectl get service		/	kubectl get svc
​							
测试对外暴露的服务和负载均衡效果，注意：可以将负载分发到不同的主机上，在一定程度上可以实现负载均衡
缺点
1.是调度不是很均匀
2.由于重启后很容易导致pod的访问端口发生改变，因此使用ip+port进行负载均衡很难实现的
访问两台从机中的任意一台从机上部署的服务都可以，因为每个pod都部署了两个副本
<a href="http://192.168.0.7:8080" target="_blank" rel="noopener noreferrer">http://192.168.0.7:8080<ExternalLinkIcon/></a>
<a href="http://192.168.0.8:8080" target="_blank" rel="noopener noreferrer">http://192.168.0.8:8080<ExternalLinkIcon/></a></p>
<pre><code>		获取所有内部
		kubectl get ep
</code></pre>
</div></template>
