[01;34mspringcloud-basic-sample-consumer-loadbalance-openfeign-dynamic-servicename-order80[00m
|-- [01;34mdocker[00m
|   `-- Dockerfile
|-- pom.xml
|-- [01;34msrc[00m
|   `-- [01;34mmain[00m
|       |-- [01;34mjava[00m
|       |   `-- [01;34morg[00m
|       |       `-- [01;34mopenatom[00m
|       |           `-- [01;34mspringcloud[00m
|       |               |-- OrderServiceConsumerLoadBalanceOpenFeignDynamicServiceName80.java
|       |               |-- [01;34mconfig[00m
|       |               |   |-- DynamicFeignClientFactory.java
|       |               |   |-- FeignClientRequestInterceptor.java
|       |               |   |-- OpenFeignConfig.java
|       |               |   `-- VirtualIpConfig.java
|       |               |-- [01;34mcontroller[00m
|       |               |   |-- OrderConsumerController.java
|       |               |   |-- OrderConsumerControllerDynamicFeignClientFactory.java
|       |               |   `-- SpringCloudServiceDiscoveryController.java
|       |               `-- [01;34mservices[00m
|       |                   |-- PaymentServiceOpenFeign.java
|       |                   `-- PaymentServiceOpenFeignDynamicFeignClientFactory.java
|       `-- [01;34mresources[00m
|           |-- [01;34mdev[00m
|           |   |-- application-dev.yml
|           |   |-- application.yml
|           |   `-- logback-custom.xml
|           |-- [01;34mprod[00m
|           |   |-- application-prod.yml
|           |   |-- application.yml
|           |   `-- logback-custom.xml
|           |-- [01;34mrancher[00m
|           |   |-- application-rancher.yml
|           |   |-- application.yml
|           |   `-- logback-custom.xml
|           `-- [01;34mtest[00m
|               |-- application-test.yml
|               |-- application.yml
|               `-- logback-custom.xml
`-- tree.md

15 directories, 25 files
