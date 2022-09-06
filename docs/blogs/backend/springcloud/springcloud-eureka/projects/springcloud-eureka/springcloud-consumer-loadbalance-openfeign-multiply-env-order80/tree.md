springcloud-consumer-loadbalance-openfeign-multiply-env-order80
|-- src
|   •-- main
|       |-- java
|       |   •-- org
|       |       •-- openatom
|       |           •-- springcloud
|       |               |-- config
|       |               |   |-- OpenFeignConfig.java
|       |               |   •-- VirtualIpConfig.java
|       |               |-- controller
|       |               |   •-- OrderConsumerController.java
|       |               |-- service
|       |               |   •-- PaymentServiceOpenFeign.java
|       |               •-- OrderServiceConsumerLoadBalanceOpenFeignMultiplyEnv80.java
|       •-- resources
|           |-- dev
|           |   |-- application-dev.yml
|           |   |-- application.yml
|           |   •-- logback-custom.xml
|           •-- test
|               |-- application-test.yml
|               |-- application.yml
|               •-- logback-custom.xml
•-- pom.xml