springcloud-consumer-loadbalance-openfeign-configuration-openfeign-senior-order80
|-- src
|   •-- main
|       |-- java
|       |   •-- org
|       |       •-- openatom
|       |           •-- springcloud
|       |               |-- config
|       |               |   |-- DynamicFeignClientFactoryConfig.java
|       |               |   •-- OpenFeignConfig.java
|       |               |-- controller
|       |               |   |-- OrderConsumerController.java
|       |               |   •-- OrderConsumerControllerDynamicFeignClientFactory.java
|       |               |-- interceptor
|       |               |   •-- FeignClientRequestInterceptor.java
|       |               |-- service
|       |               |   |-- PaymentServiceOpenFeign.java
|       |               |   •-- PaymentServiceOpenFeignDynamicFeignClientFactory.java
|       |               •-- OrderServiceConsumerLoadBalanceOpenFeignDynamicServiceName80.java
|       •-- resources
|           •-- application.yml
•-- pom.xml