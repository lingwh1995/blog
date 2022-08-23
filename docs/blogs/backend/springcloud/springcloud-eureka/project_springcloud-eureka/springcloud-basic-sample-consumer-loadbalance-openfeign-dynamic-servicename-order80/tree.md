springcloud-basic-sample-consumer-loadbalance-openfeign-dynamic-servicename-order80
|-- docker
|   •-- Dockerfile
|-- src
|   •-- main
|       |-- java
|       |   •-- org
|       |       •-- openatom
|       |           •-- springcloud
|       |               |-- config
|       |               |   |-- DynamicFeignClientFactory.java
|       |               |   |-- FeignClientRequestInterceptor.java
|       |               |   |-- OpenFeignConfig.java
|       |               |   •-- VirtualIpConfig.java
|       |               |-- controller
|       |               |   |-- OrderConsumerController.java
|       |               |   |-- OrderConsumerControllerDynamicFeignClientFactory.java
|       |               |   •-- SpringCloudServiceDiscoveryController.java
|       |               |-- services
|       |               |   |-- PaymentServiceOpenFeign.java
|       |               |   •-- PaymentServiceOpenFeignDynamicFeignClientFactory.java
|       |               •-- OrderServiceConsumerLoadBalanceOpenFeignDynamicServiceName80.java
|       •-- resources
|           |-- dev
|           |   |-- application-dev.yml
|           |   |-- application.yml
|           |   •-- logback-custom.xml
|           |-- prod
|           |   |-- application-prod.yml
|           |   |-- application.yml
|           |   •-- logback-custom.xml
|           |-- rancher
|           |   |-- application-rancher.yml
|           |   |-- application.yml
|           |   •-- logback-custom.xml
|           •-- test
|               |-- application-test.yml
|               |-- application.yml
|               •-- logback-custom.xml
•-- pom.xml

15 directories, 24 files
