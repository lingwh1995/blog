# 5.Centos搭建Rancher
@include(@src/public/enhance/guidance/environment/centos/centos7/chapter/centos7-guidance-chapter5.md)
	下载rancher
```	
docker pull rancher/server
```	
	启动rancher
```	
docker run -di --name=rancher -p9003:8080 rancher/server:latest
```	
	使用rancher扩容/缩容注意事项
	如果要使用扩容或者缩容功能,不要配置eureka的如下信息
	eureka:
	  instance:
		#使用rancher扩容不能配置instance-id,否则会出问题
		#instance-id: ${spring.application.name} 
		#使用rancher扩容不能配置iip-address,否则会出问题
		#ip-address: 192.168.0.4				

