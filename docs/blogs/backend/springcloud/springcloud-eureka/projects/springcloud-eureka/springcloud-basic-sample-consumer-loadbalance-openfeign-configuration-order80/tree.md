springcloud-basic-sample-consumer-loadbalance-openfeign-configuration-order80
|-- docker
|   •-- Dockerfile
|-- src
|   •-- main
|       |-- java
|       |   •-- org
|       |       •-- openatom
|       |           •-- springcloud
|       |               |-- config
|       |               |   |-- DynamicFeignClientFactoryConfig.java
|       |               |   |-- OpenFeignConfig.java
|       |               |   •-- VirtualIpConfig.java
|       |               |-- controller
|       |               |   |-- OrderConsumerController.java
|       |               |   •-- OrderConsumerControllerDynamicFeignClientFactory.java
|       |               |-- interceptor
|       |               |   •-- FeignClientRequestInterceptor.java
|       |               |-- service
|       |               |   |-- PaymentServiceOpenFeign.java
|       |               |   •-- PaymentServiceOpenFeignDynamicFeignClientFactory.java
|       |               •-- BasicSampleOrderServiceConsumerLoadBalanceOpenFeignConfiguration80.java
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