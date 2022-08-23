springcloud-basic-sample-provider-cluster-node-payment8010
|-- docker
|   •-- Dockerfile
|-- src
|   •-- main
|       |-- java
|       |   •-- org
|       |       •-- openatom
|       |           •-- springcloud
|       |               |-- config
|       |               |   •-- VirtualIpConfig.java
|       |               |-- controller
|       |               |   |-- PaymentController.java
|       |               |   •-- SpringCloudServiceDiscoveryController.java
|       |               |-- dao
|       |               |   •-- PaymentDao.java
|       |               |-- service
|       |               |   |-- impl
|       |               |   |   •-- PaymentServiceImpl.java
|       |               |   •-- PaymentService.java
|       |               •-- PaymentServiceProviderClusterNode8010.java
|       •-- resources
|           |-- dev
|           |   |-- mapper
|           |   |   •-- PaymentMapper.xml
|           |   |-- application-dev.yml
|           |   |-- application.yml
|           |   •-- logback-custom.xml
|           |-- prod
|           |   |-- mapper
|           |   |   •-- PaymentMapper.xml
|           |   |-- application-prod.yml
|           |   |-- application.yml
|           |   •-- logback-custom.xml
|           |-- rancher
|           |   |-- mapper
|           |   |   •-- PaymentMapper.xml
|           |   |-- application-rancher.yml
|           |   |-- application.yml
|           |   •-- logback-custom.xml
|           •-- test
|               |-- mapper
|               |   •-- PaymentMapper.xml
|               |-- application-test.yml
|               |-- application.yml
|               •-- logback-custom.xml
•-- pom.xml

21 directories, 25 files
