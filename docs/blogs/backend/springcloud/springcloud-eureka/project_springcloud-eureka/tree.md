springcloud-eureka
|   |-- Jenkinsfile
|   •-- payment.sql
|-- springcloud-api-commons
|   |-- src
|   |   •-- main
|   |       |-- java
|   |       |   •-- org
|   |       |       •-- openatom
|   |       |           •-- springcloud
|   |       |               •-- entities
|   |       |                   |-- Account.java
|   |       |                   |-- CommonResult.java
|   |       |                   |-- Order.java
|   |       |                   |-- Payment.java
|   |       |                   •-- Storage.java
|   |       •-- resources
|   |           •-- application.yml
|   •-- pom.xml
|-- springcloud-basic-sample-consumer-loadbalance-openfeign-dynamic-servicename-order80
|   |-- docker
|   |   •-- Dockerfile
|   |-- src
|   |   •-- main
|   |       |-- java
|   |       |   •-- org
|   |       |       •-- openatom
|   |       |           •-- springcloud
|   |       |               |-- config
|   |       |               |   |-- DynamicFeignClientFactory.java
|   |       |               |   |-- FeignClientRequestInterceptor.java
|   |       |               |   |-- OpenFeignConfig.java
|   |       |               |   •-- VirtualIpConfig.java
|   |       |               |-- controller
|   |       |               |   |-- OrderConsumerController.java
|   |       |               |   |-- OrderConsumerControllerDynamicFeignClientFactory.java
|   |       |               |   •-- SpringCloudServiceDiscoveryController.java
|   |       |               |-- services
|   |       |               |   |-- PaymentServiceOpenFeign.java
|   |       |               |   •-- PaymentServiceOpenFeignDynamicFeignClientFactory.java
|   |       |               •-- OrderServiceConsumerLoadBalanceOpenFeignDynamicServiceName80.java
|   |       •-- resources
|   |           |-- dev
|   |           |   |-- application-dev.yml
|   |           |   |-- application.yml
|   |           |   •-- logback-custom.xml
|   |           |-- prod
|   |           |   |-- application-prod.yml
|   |           |   |-- application.yml
|   |           |   •-- logback-custom.xml
|   |           |-- rancher
|   |           |   |-- application-rancher.yml
|   |           |   |-- application.yml
|   |           |   •-- logback-custom.xml
|   |           •-- test
|   |               |-- application-test.yml
|   |               |-- application.yml
|   |               •-- logback-custom.xml
|   •-- pom.xml
|-- springcloud-basic-sample-provider-cluster-node-payment8009
|   |-- docker
|   |   •-- Dockerfile
|   |-- src
|   |   •-- main
|   |       |-- java
|   |       |   •-- org
|   |       |       •-- openatom
|   |       |           •-- springcloud
|   |       |               |-- config
|   |       |               |   •-- VirtualIpConfig.java
|   |       |               |-- controller
|   |       |               |   |-- PaymentController.java
|   |       |               |   •-- SpringCloudServiceDiscoveryController.java
|   |       |               |-- dao
|   |       |               |   •-- PaymentDao.java
|   |       |               |-- service
|   |       |               |   |-- impl
|   |       |               |   |   •-- PaymentServiceImpl.java
|   |       |               |   •-- PaymentService.java
|   |       |               •-- PaymentServiceProviderClusterNode8009.java
|   |       •-- resources
|   |           |-- dev
|   |           |   |-- mapper
|   |           |   |   •-- PaymentMapper.xml
|   |           |   |-- application-dev.yml
|   |           |   |-- application.yml
|   |           |   •-- logback-custom.xml
|   |           |-- prod
|   |           |   |-- mapper
|   |           |   |   •-- PaymentMapper.xml
|   |           |   |-- application-prod.yml
|   |           |   |-- application.yml
|   |           |   •-- logback-custom.xml
|   |           |-- rancher
|   |           |   |-- mapper
|   |           |   |   •-- PaymentMapper.xml
|   |           |   |-- application-rancher.yml
|   |           |   |-- application.yml
|   |           |   •-- logback-custom.xml
|   |           •-- test
|   |               |-- mapper
|   |               |   •-- PaymentMapper.xml
|   |               |-- application-test.yml
|   |               |-- application.yml
|   |               •-- logback-custom.xml
|   •-- pom.xml
|-- springcloud-basic-sample-provider-cluster-node-payment8010
|   |-- docker
|   |   •-- Dockerfile
|   |-- src
|   |   •-- main
|   |       |-- java
|   |       |   •-- org
|   |       |       •-- openatom
|   |       |           •-- springcloud
|   |       |               |-- config
|   |       |               |   •-- VirtualIpConfig.java
|   |       |               |-- controller
|   |       |               |   |-- PaymentController.java
|   |       |               |   •-- SpringCloudServiceDiscoveryController.java
|   |       |               |-- dao
|   |       |               |   •-- PaymentDao.java
|   |       |               |-- service
|   |       |               |   |-- impl
|   |       |               |   |   •-- PaymentServiceImpl.java
|   |       |               |   •-- PaymentService.java
|   |       |               •-- PaymentServiceProviderClusterNode8010.java
|   |       •-- resources
|   |           |-- dev
|   |           |   |-- mapper
|   |           |   |   •-- PaymentMapper.xml
|   |           |   |-- application-dev.yml
|   |           |   |-- application.yml
|   |           |   •-- logback-custom.xml
|   |           |-- prod
|   |           |   |-- mapper
|   |           |   |   •-- PaymentMapper.xml
|   |           |   |-- application-prod.yml
|   |           |   |-- application.yml
|   |           |   •-- logback-custom.xml
|   |           |-- rancher
|   |           |   |-- mapper
|   |           |   |   •-- PaymentMapper.xml
|   |           |   |-- application-rancher.yml
|   |           |   |-- application.yml
|   |           |   •-- logback-custom.xml
|   |           •-- test
|   |               |-- mapper
|   |               |   •-- PaymentMapper.xml
|   |               |-- application-test.yml
|   |               |-- application.yml
|   |               •-- logback-custom.xml
|   •-- pom.xml
|-- springcloud-basic-sample-register-center-single-node7005
|   |-- docker
|   |   •-- Dockerfile
|   |-- src
|   |   •-- main
|   |       |-- java
|   |       |   •-- org
|   |       |       •-- openatom
|   |       |           •-- springcloud
|   |       |               |-- config
|   |       |               |   •-- VirtualIpConfig.java
|   |       |               •-- RegisterCcenterSingleNode7005.java
|   |       •-- resources
|   |           |-- dev
|   |           |   |-- application-dev.yml
|   |           |   |-- application.yml
|   |           |   •-- logback-custom.xml
|   |           |-- prod
|   |           |   |-- application-prod.yml
|   |           |   |-- application.yml
|   |           |   •-- logback-custom.xml
|   |           |-- rancher
|   |           |   |-- application-rancher.yml
|   |           |   |-- application.yml
|   |           |   •-- logback-custom.xml
|   |           •-- test
|   |               |-- application-test.yml
|   |               |-- application.yml
|   |               •-- logback-custom.xml
|   •-- pom.xml
|-- springcloud-config-apollo-loadbalance-openfeign-configuration-order80
|   |-- src
|   |   •-- main
|   |       |-- java
|   |       |   •-- org
|   |       |       •-- openatom
|   |       |           •-- springcloud
|   |       |               |-- config
|   |       |               |   •-- OpenFeignConfig.java
|   |       |               |-- controller
|   |       |               |   |-- ApolloConfigController.java
|   |       |               |   |-- OrderConsumerController.java
|   |       |               |   |-- RestartApplicationController.java
|   |       |               |   •-- SpringCloudServiceDiscoveryController.java
|   |       |               |-- listener
|   |       |               |   |-- ApolloPropertiesChangedListener.java
|   |       |               |   •-- AutomaticApolloWatcher.java
|   |       |               |-- services
|   |       |               |   •-- PaymentServiceOpenFeign.java
|   |       |               •-- OrderServiceConsumerApolloLoadBalanceOpenFeignConfiguration80.java
|   |       •-- resources
|   |           |-- apollo-env.properties
|   |           •-- application.yml
|   •-- pom.xml
|-- springcloud-consumer-hystrix-loadbalance-openfeign-configuration-order80
|   |-- src
|   |   •-- main
|   |       |-- java
|   |       |   •-- org
|   |       |       •-- openatom
|   |       |           •-- springcloud
|   |       |               |-- config
|   |       |               |   •-- FeignConfig.java
|   |       |               |-- controller
|   |       |               |   |-- OrderConsumerHystrixController.java
|   |       |               |   •-- SpringCloudServiceDiscoveryController.java
|   |       |               |-- services
|   |       |               |   |-- impl
|   |       |               |   |   •-- PaymentServiceHystrixOpenFeignImpl.java
|   |       |               |   •-- PaymentServiceHystrixOpenFeign.java
|   |       |               •-- OrderServiceConsumerHystrixLoadBalanceOpenFeignConfiguration80.java
|   |       •-- resources
|   |           •-- application.yml
|   •-- pom.xml
|-- springcloud-consumer-loadbalance-default-order80
|   |-- src
|   |   •-- main
|   |       |-- java
|   |       |   •-- org
|   |       |       •-- openatom
|   |       |           •-- springcloud
|   |       |               |-- config
|   |       |               |   •-- ApplicationContextConfig.java
|   |       |               |-- controller
|   |       |               |   |-- OrderConsumerController.java
|   |       |               |   •-- SpringCloudServiceDiscoveryController.java
|   |       |               •-- OrderServiceConsumerLoadBalanceDefault80.java
|   |       •-- resources
|   |           •-- application.yml
|   •-- pom.xml
|-- springcloud-consumer-loadbalance-openfeign-configuration-openfeign-order80
|   |-- src
|   |   •-- main
|   |       |-- java
|   |       |   •-- org
|   |       |       •-- openatom
|   |       |           •-- springcloud
|   |       |               |-- config
|   |       |               |   •-- OpenFeignConfig.java
|   |       |               |-- controller
|   |       |               |   |-- OrderConsumerController.java
|   |       |               |   •-- SpringCloudServiceDiscoveryController.java
|   |       |               |-- service
|   |       |               |   •-- PaymentServiceOpenFeign.java
|   |       |               •-- OrderServiceConsumerLoadBalanceOpenFeignConfigurationOpenfeign80.java
|   |       •-- resources
|   |           •-- application.yml
|   •-- pom.xml
|-- springcloud-consumer-loadbalance-openfeign-configuration-ribbon-order80
|   |-- src
|   |   •-- main
|   |       |-- java
|   |       |   •-- org
|   |       |       •-- openatom
|   |       |           •-- springcloud
|   |       |               |-- config
|   |       |               |   •-- OpenFeignConfig.java
|   |       |               |-- controller
|   |       |               |   |-- OrderConsumerController.java
|   |       |               |   •-- SpringCloudServiceDiscoveryController.java
|   |       |               |-- service
|   |       |               |   •-- PaymentServiceOpenFeign.java
|   |       |               •-- OrderServiceConsumerLoadBalanceOpenFeignConfigurationRibbon80.java
|   |       •-- resources
|   |           •-- application.yml
|   •-- pom.xml
|-- springcloud-consumer-loadbalance-ribbon-configuration-order80
|   |-- src
|   |   •-- main
|   |       |-- java
|   |       |   •-- org
|   |       |       •-- openatom
|   |       |           •-- springcloud
|   |       |               |-- config
|   |       |               |   •-- ApplicationContextConfig.java
|   |       |               |-- controller
|   |       |               |   |-- OrderConsumerController.java
|   |       |               |   •-- SpringCloudServiceDiscoveryController.java
|   |       |               •-- OrderServiceConsumerLoadBalanceRibbonConfiguration80.java
|   |       •-- resources
|   |           •-- application.yml
|   •-- pom.xml
|-- springcloud-consumer-loadbalance-ribbon-custom-strategy-configuration-order80
|   |-- src
|   |   •-- main
|   |       |-- java
|   |       |   •-- org
|   |       |       •-- openatom
|   |       |           •-- springcloud
|   |       |               |-- config
|   |       |               |   •-- ApplicationContextConfig.java
|   |       |               |-- controller
|   |       |               |   |-- OrderConsumerController.java
|   |       |               |   •-- SpringCloudServiceDiscoveryController.java
|   |       |               |-- loadbalance
|   |       |               |   •-- MyRoundRobinRule.java
|   |       |               •-- OrderServiceConsumerLoadBalanceRibbonCustomerStrategyConfiguration80.java
|   |       •-- resources
|   |           •-- application.yml
|   •-- pom.xml
|-- springcloud-consumer-loadbalance-ribbon-custom-strategy-hardcode-order80
|   |-- src
|   |   •-- main
|   |       |-- java
|   |       |   •-- org
|   |       |       •-- openatom
|   |       |           •-- springcloud
|   |       |               |-- config
|   |       |               |   •-- ApplicationContextConfig.java
|   |       |               |-- controller
|   |       |               |   |-- OrderConsumerController.java
|   |       |               |   •-- SpringCloudServiceDiscoveryController.java
|   |       |               |-- loadbalance
|   |       |               |   •-- MyRoundRobinRule.java
|   |       |               •-- OrderServiceConsumerLoadBalanceRibbonCustomerStrategyHardcode80.java
|   |       •-- resources
|   |           •-- application.yml
|   •-- pom.xml
|-- springcloud-consumer-loadbalance-ribbon-hardcode-order80
|   |-- src
|   |   •-- main
|   |       |-- java
|   |       |   •-- org
|   |       |       •-- openatom
|   |       |           |-- myrule
|   |       |           |   •-- MySelfRule.java
|   |       |           •-- springcloud
|   |       |               |-- config
|   |       |               |   •-- ApplicationContextConfig.java
|   |       |               |-- controller
|   |       |               |   |-- OrderConsumerController.java
|   |       |               |   •-- SpringCloudServiceDiscoveryController.java
|   |       |               •-- OrderServiceConsumerLoadBalanceRibbonHardcode80.java
|   |       •-- resources
|   |           •-- application.yml
|   •-- pom.xml
|-- springcloud-consumer-seata-loadbalance-openfeign-configuration-order80
|   |-- src
|   |   •-- main
|   |       |-- java
|   |       |   •-- org
|   |       |       •-- openatom
|   |       |           •-- springcloud
|   |       |               |-- config
|   |       |               |   |-- DataSourceProxyConfig.java
|   |       |               |   •-- FeignConfig.java
|   |       |               |-- controller
|   |       |               |   •-- OrderController.java
|   |       |               |-- dao
|   |       |               |   •-- OrderDao.java
|   |       |               |-- listener
|   |       |               |   |-- ApolloPropertiesChangedListener.java
|   |       |               |   •-- AutomaticApolloWatcher.java
|   |       |               |-- service
|   |       |               |   |-- impl
|   |       |               |   |   •-- OrderServiceImpl.java
|   |       |               |   |-- AccountService.java
|   |       |               |   |-- OrderService.java
|   |       |               |   •-- StorageService.java
|   |       |               •-- OrderServiceConsumerSeatalLoadBalanceOpenFeignConfiguration80.java
|   |       •-- resources
|   |           |-- mapper
|   |           |   •-- OrderMapper.xml
|   |           |-- apollo-env.properties
|   |           •-- application.yml
|   •-- pom.xml
|-- springcloud-consumer-sleuth_zipkin-loadbalance-default-order80
|   |-- src
|   |   •-- main
|   |       |-- java
|   |       |   •-- org
|   |       |       •-- openatom
|   |       |           •-- springcloud
|   |       |               |-- config
|   |       |               |   •-- ApplicationContextConfig.java
|   |       |               |-- controller
|   |       |               |   |-- OrderConsumerController.java
|   |       |               |   •-- SpringCloudServiceDiscoveryController.java
|   |       |               •-- OrderServiceConsumerSleuthAndZipkinLoadBalanceDefault80.java
|   |       •-- resources
|   |           •-- application.yml
|   •-- pom.xml
|-- springcloud-mointor-hystrix-dashboard-turbine9002
|   |-- src
|   |   •-- main
|   |       |-- java
|   |       |   •-- org
|   |       |       •-- openatom
|   |       |           •-- springcloud
|   |       |               •-- MointorHystrixDashboardTurbine9002.java
|   |       •-- resources
|   |           •-- application.yml
|   •-- pom.xml
|-- springcloud-mointor-hystrix-dashboard9001
|   |-- src
|   |   •-- main
|   |       |-- java
|   |       |   •-- org
|   |       |       •-- openatom
|   |       |           •-- springcloud
|   |       |               •-- MointorHystrixDashboard9001.java
|   |       •-- resources
|   |           •-- application.yml
|   •-- pom.xml
|-- springcloud-mointor-springboot-admin-server9003
|   |-- src
|   |   •-- main
|   |       |-- java
|   |       |   •-- org
|   |       |       •-- openatom
|   |       |           |-- endpoint
|   |       |           |   •-- CoustomEndpoint.java
|   |       |           •-- MointorSpringBootAdmin9003.java
|   |       •-- resources
|   |           •-- application.yml
|   •-- pom.xml
|-- springcloud-provider-cluster-node-payment8001
|   |-- src
|   |   •-- main
|   |       |-- java
|   |       |   •-- org
|   |       |       •-- openatom
|   |       |           •-- springcloud
|   |       |               |-- controller
|   |       |               |   |-- PaymentController.java
|   |       |               |   •-- SpringCloudServiceDiscoveryController.java
|   |       |               |-- dao
|   |       |               |   •-- PaymentDao.java
|   |       |               |-- service
|   |       |               |   |-- impl
|   |       |               |   |   •-- PaymentServiceImpl.java
|   |       |               |   •-- PaymentService.java
|   |       |               •-- PaymentServiceProviderClusterNode8001.java
|   |       •-- resources
|   |           |-- mapper
|   |           |   •-- PaymentMapper.xml
|   |           •-- application.yml
|   •-- pom.xml
|-- springcloud-provider-cluster-node-payment8002
|   |-- src
|   |   •-- main
|   |       |-- java
|   |       |   •-- org
|   |       |       •-- openatom
|   |       |           •-- springcloud
|   |       |               |-- controller
|   |       |               |   |-- PaymentController.java
|   |       |               |   •-- SpringCloudServiceDiscoveryController.java
|   |       |               |-- dao
|   |       |               |   •-- PaymentDao.java
|   |       |               |-- service
|   |       |               |   |-- impl
|   |       |               |   |   •-- PaymentServiceImpl.java
|   |       |               |   •-- PaymentService.java
|   |       |               •-- PaymentServiceProviderClusterNode8002.java
|   |       •-- resources
|   |           |-- mapper
|   |           |   •-- PaymentMapper.xml
|   |           •-- application.yml
|   •-- pom.xml
|-- springcloud-provider-hystrix-cluster-node-payment8003
|   |-- src
|   |   •-- main
|   |       |-- java
|   |       |   •-- org
|   |       |       •-- openatom
|   |       |           •-- springcloud
|   |       |               |-- controller
|   |       |               |   |-- PaymentHystrixController.java
|   |       |               |   •-- SpringCloudServiceDiscoveryController.java
|   |       |               |-- dao
|   |       |               |   •-- PaymentHystrixDao.java
|   |       |               |-- service
|   |       |               |   |-- impl
|   |       |               |   |   •-- PaymentHystrixServiceImpl.java
|   |       |               |   •-- PaymentHystrixService.java
|   |       |               •-- PaymentServiceProviderHystrixClusterNode8003.java
|   |       •-- resources
|   |           |-- mapper
|   |           |   •-- PaymentMapper.xml
|   |           •-- application.yml
|   •-- pom.xml
|-- springcloud-provider-hystrix-cluster-node-payment8004
|   |-- src
|   |   •-- main
|   |       |-- java
|   |       |   •-- org
|   |       |       •-- openatom
|   |       |           •-- springcloud
|   |       |               |-- controller
|   |       |               |   |-- PaymentHystrixController.java
|   |       |               |   •-- SpringCloudServiceDiscoveryController.java
|   |       |               |-- dao
|   |       |               |   •-- PaymentHystrixDao.java
|   |       |               |-- service
|   |       |               |   |-- impl
|   |       |               |   |   •-- PaymentHystrixServiceImpl.java
|   |       |               |   •-- PaymentHystrixService.java
|   |       |               •-- PaymentServiceProviderHystrixClusterNode8004.java
|   |       •-- resources
|   |           |-- mapper
|   |           |   •-- PaymentMapper.xml
|   |           •-- application.yml
|   •-- pom.xml
|-- springcloud-provider-seata-account8007
|   |-- src
|   |   •-- main
|   |       |-- java
|   |       |   •-- org
|   |       |       •-- openatom
|   |       |           •-- springcloud
|   |       |               |-- config
|   |       |               |   •-- DataSourceProxyConfig.java
|   |       |               |-- controller
|   |       |               |   •-- AccountController.java
|   |       |               |-- dao
|   |       |               |   •-- AccountDao.java
|   |       |               |-- listener
|   |       |               |   |-- ApolloPropertiesChangedListener.java
|   |       |               |   •-- AutomaticApolloWatcher.java
|   |       |               |-- service
|   |       |               |   |-- impl
|   |       |               |   |   •-- AccountServiceImpl.java
|   |       |               |   •-- AccountService.java
|   |       |               •-- AccountServiceProviderSeatal8007.java
|   |       •-- resources
|   |           |-- mapper
|   |           |   •-- AccountMapper.xml
|   |           |-- apollo-env.properties
|   |           •-- application.yml
|   •-- pom.xml
|-- springcloud-provider-seata-storage8008
|   |-- src
|   |   •-- main
|   |       |-- java
|   |       |   •-- org
|   |       |       •-- openatom
|   |       |           •-- springcloud
|   |       |               |-- config
|   |       |               |   •-- DataSourceProxyConfig.java
|   |       |               |-- controller
|   |       |               |   •-- StorageController.java
|   |       |               |-- dao
|   |       |               |   •-- StorageDao.java
|   |       |               |-- listener
|   |       |               |   |-- ApolloPropertiesChangedListener.java
|   |       |               |   •-- AutomaticApolloWatcher.java
|   |       |               |-- service
|   |       |               |   |-- impl
|   |       |               |   |   •-- StorageServiceImpl.java
|   |       |               |   •-- StorageService.java
|   |       |               •-- StorageServiceProviderSeatal8008.java
|   |       •-- resources
|   |           |-- mapper
|   |           |   •-- StorageMapper.xml
|   |           |-- apollo-env.properties
|   |           •-- application.yml
|   •-- pom.xml
|-- springcloud-provider-sleuth_zipkin-cluster-node-payment8005
|   |-- src
|   |   •-- main
|   |       |-- java
|   |       |   •-- org
|   |       |       •-- openatom
|   |       |           •-- springcloud
|   |       |               |-- controller
|   |       |               |   |-- PaymentController.java
|   |       |               |   •-- SpringCloudServiceDiscoveryController.java
|   |       |               |-- dao
|   |       |               |   •-- PaymentDao.java
|   |       |               |-- service
|   |       |               |   |-- impl
|   |       |               |   |   •-- PaymentServiceImpl.java
|   |       |               |   •-- PaymentService.java
|   |       |               •-- PaymentServiceProviderSleuthAndZipkinClusterNode8005.java
|   |       •-- resources
|   |           |-- mapper
|   |           |   •-- PaymentMapper.xml
|   |           •-- application.yml
|   •-- pom.xml
|-- springcloud-provider-sleuth_zipkin-cluster-node-payment8006
|   |-- src
|   |   •-- main
|   |       |-- java
|   |       |   •-- org
|   |       |       •-- openatom
|   |       |           •-- springcloud
|   |       |               |-- controller
|   |       |               |   |-- PaymentController.java
|   |       |               |   •-- SpringCloudServiceDiscoveryController.java
|   |       |               |-- dao
|   |       |               |   •-- PaymentDao.java
|   |       |               |-- service
|   |       |               |   |-- impl
|   |       |               |   |   •-- PaymentServiceImpl.java
|   |       |               |   •-- PaymentService.java
|   |       |               •-- PaymentServiceProviderSleuthAndZipkinClusterNode8006.java
|   |       •-- resources
|   |           |-- mapper
|   |           |   •-- PaymentMapper.xml
|   |           •-- application.yml
|   •-- pom.xml
|-- springcloud-register-center-cluster-node7002
|   |-- src
|   |   •-- main
|   |       |-- java
|   |       |   •-- org
|   |       |       •-- openatom
|   |       |           •-- springcloud
|   |       |               •-- RegisterCcenterClusterNode7002.java
|   |       •-- resources
|   |           •-- application.yml
|   •-- pom.xml
|-- springcloud-register-center-cluster-node7003
|   |-- src
|   |   •-- main
|   |       |-- java
|   |       |   •-- org
|   |       |       •-- openatom
|   |       |           •-- springcloud
|   |       |               •-- RegisterCcenterClusterNode7003.java
|   |       •-- resources
|   |           •-- application.yml
|   •-- pom.xml
|-- springcloud-register-center-cluster-node7004
|   |-- src
|   |   •-- main
|   |       |-- java
|   |       |   •-- org
|   |       |       •-- openatom
|   |       |           •-- springcloud
|   |       |               •-- RegisterCcenterClusterNode7004.java
|   |       •-- resources
|   |           •-- application.yml
|   •-- pom.xml
|-- springcloud-register-center-single-node7001
|   |-- src
|   |   •-- main
|   |       |-- java
|   |       |   •-- org
|   |       |       •-- openatom
|   |       |           •-- springcloud
|   |       |               •-- RegisterCcenterSingleNode7001.java
|   |       •-- resources
|   |           •-- application.yml
|   •-- pom.xml
|-- springcloud-router-connect-direct-configuration-gateway9527
|   |-- src
|   |   •-- main
|   |       |-- java
|   |       |   •-- com
|   |       |       •-- atguigu
|   |       |           •-- springcloud
|   |       |               |-- filter
|   |       |               |   •-- LoginFilter.java
|   |       |               •-- RouterConnectDirectConfigurationGateWay9527.java
|   |       •-- resources
|   |           •-- application.yml
|   •-- pom.xml
|-- springcloud-router-connect-direct-hardcode-gateway9527
|   |-- src
|   |   •-- main
|   |       |-- java
|   |       |   •-- com
|   |       |       •-- atguigu
|   |       |           •-- springcloud
|   |       |               |-- config
|   |       |               |   •-- GateWayConfig.java
|   |       |               |-- filter
|   |       |               |   •-- LoginFilter.java
|   |       |               •-- RouterConnectDirectHardcodeGateWay9527.java
|   |       •-- resources
|   |           •-- application.yml
|   •-- pom.xml
|-- springcloud-router-connect-loadbalance-configuration-gateway9527
|   |-- src
|   |   •-- main
|   |       |-- java
|   |       |   •-- com
|   |       |       •-- atguigu
|   |       |           •-- springcloud
|   |       |               |-- config
|   |       |               |   •-- GateWayConfig.java
|   |       |               |-- filter
|   |       |               |   •-- LoginFilter.java
|   |       |               •-- RouterConnectLoadbalanceConfigurationGateWay9527.java
|   |       •-- resources
|   |           •-- application.yml
|   •-- pom.xml
|-- springcloud-router-connect-loadbalance-hardcode-gateway9527
|   |-- src
|   |   •-- main
|   |       |-- java
|   |       |   •-- com
|   |       |       •-- atguigu
|   |       |           •-- springcloud
|   |       |               |-- config
|   |       |               |   •-- GateWayConfig.java
|   |       |               |-- filter
|   |       |               |   •-- LoginFilter.java
|   |       |               •-- RouterConnectLoadbalanceHardcodeGateWay9527.java
|   |       •-- resources
|   |           •-- application.yml
|   •-- pom.xml
|-- Jenkinsfile
|-- docker-compose.yml
•-- pom.xml