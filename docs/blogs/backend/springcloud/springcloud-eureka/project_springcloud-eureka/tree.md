springcloud-eureka
|-- docker-compose.yml
|-- pom.xml
|-- script
|   `-- Jenkinsfile
|-- springcloud-api-commons
|   |-- pom.xml
|   `-- src
|       `-- main
|           |-- java
|           |   `-- org
|           |       `-- openatom
|           |           `-- springcloud
|           |               `-- entities
|           |                   |-- Account.java
|           |                   |-- CommonResult.java
|           |                   |-- Order.java
|           |                   |-- Payment.java
|           |                   `-- Storage.java
|           `-- resources
|               `-- application.yml
|-- springcloud-basic-sample-consumer-loadbalance-openfeign-dynamic-servicename-order80
|   |-- docker
|   |   `-- Dockerfile
|   |-- pom.xml
|   `-- src
|       `-- main
|           |-- java
|           |   `-- org
|           |       `-- openatom
|           |           `-- springcloud
|           |               |-- OrderServiceConsumerLoadBalanceOpenFeignDynamicServiceName80.java
|           |               |-- config
|           |               |   |-- DynamicFeignClientFactory.java
|           |               |   |-- FeignClientRequestInterceptor.java
|           |               |   |-- OpenFeignConfig.java
|           |               |   `-- VirtualIpConfig.java
|           |               |-- controller
|           |               |   |-- OrderConsumerController.java
|           |               |   |-- OrderConsumerControllerDynamicFeignClientFactory.java
|           |               |   `-- SpringCloudServiceDiscoveryController.java
|           |               `-- services
|           |                   |-- PaymentServiceOpenFeign.java
|           |                   `-- PaymentServiceOpenFeignDynamicFeignClientFactory.java
|           `-- resources
|               |-- dev
|               |   |-- application-dev.yml
|               |   |-- application.yml
|               |   `-- logback-custom.xml
|               |-- prod
|               |   |-- application-prod.yml
|               |   |-- application.yml
|               |   `-- logback-custom.xml
|               |-- rancher
|               |   |-- application-rancher.yml
|               |   |-- application.yml
|               |   `-- logback-custom.xml
|               `-- test
|                   |-- application-test.yml
|                   |-- application.yml
|                   `-- logback-custom.xml
|-- springcloud-basic-sample-provider-cluster-node-payment8009
|   |-- docker
|   |   `-- Dockerfile
|   |-- pom.xml
|   `-- src
|       `-- main
|           |-- java
|           |   `-- org
|           |       `-- openatom
|           |           `-- springcloud
|           |               |-- PaymentServiceProviderClusterNode8009.java
|           |               |-- config
|           |               |   `-- VirtualIpConfig.java
|           |               |-- controller
|           |               |   |-- PaymentController.java
|           |               |   `-- SpringCloudServiceDiscoveryController.java
|           |               |-- dao
|           |               |   `-- PaymentDao.java
|           |               `-- service
|           |                   |-- PaymentService.java
|           |                   `-- impl
|           |                       `-- PaymentServiceImpl.java
|           `-- resources
|               |-- dev
|               |   |-- application-dev.yml
|               |   |-- application.yml
|               |   |-- logback-custom.xml
|               |   `-- mapper
|               |       `-- PaymentMapper.xml
|               |-- prod
|               |   |-- application-prod.yml
|               |   |-- application.yml
|               |   |-- logback-custom.xml
|               |   `-- mapper
|               |       `-- PaymentMapper.xml
|               |-- rancher
|               |   |-- application-rancher.yml
|               |   |-- application.yml
|               |   |-- logback-custom.xml
|               |   `-- mapper
|               |       `-- PaymentMapper.xml
|               `-- test
|                   |-- application-test.yml
|                   |-- application.yml
|                   |-- logback-custom.xml
|                   `-- mapper
|                       `-- PaymentMapper.xml
|-- springcloud-basic-sample-provider-cluster-node-payment8010
|   |-- docker
|   |   `-- Dockerfile
|   |-- pom.xml
|   `-- src
|       `-- main
|           |-- java
|           |   `-- org
|           |       `-- openatom
|           |           `-- springcloud
|           |               |-- PaymentServiceProviderClusterNode8010.java
|           |               |-- config
|           |               |   `-- VirtualIpConfig.java
|           |               |-- controller
|           |               |   |-- PaymentController.java
|           |               |   `-- SpringCloudServiceDiscoveryController.java
|           |               |-- dao
|           |               |   `-- PaymentDao.java
|           |               `-- service
|           |                   |-- PaymentService.java
|           |                   `-- impl
|           |                       `-- PaymentServiceImpl.java
|           `-- resources
|               |-- dev
|               |   |-- application-dev.yml
|               |   |-- application.yml
|               |   |-- logback-custom.xml
|               |   `-- mapper
|               |       `-- PaymentMapper.xml
|               |-- prod
|               |   |-- application-prod.yml
|               |   |-- application.yml
|               |   |-- logback-custom.xml
|               |   `-- mapper
|               |       `-- PaymentMapper.xml
|               |-- rancher
|               |   |-- application-rancher.yml
|               |   |-- application.yml
|               |   |-- logback-custom.xml
|               |   `-- mapper
|               |       `-- PaymentMapper.xml
|               `-- test
|                   |-- application-test.yml
|                   |-- application.yml
|                   |-- logback-custom.xml
|                   `-- mapper
|                       `-- PaymentMapper.xml
|-- springcloud-basic-sample-register-center-single-node7005
|   |-- docker
|   |   `-- Dockerfile
|   |-- pom.xml
|   `-- src
|       `-- main
|           |-- java
|           |   `-- org
|           |       `-- openatom
|           |           `-- springcloud
|           |               |-- RegisterCcenterSingleNode7005.java
|           |               `-- config
|           |                   `-- VirtualIpConfig.java
|           `-- resources
|               |-- dev
|               |   |-- application-dev.yml
|               |   |-- application.yml
|               |   `-- logback-custom.xml
|               |-- prod
|               |   |-- application-prod.yml
|               |   |-- application.yml
|               |   `-- logback-custom.xml
|               |-- rancher
|               |   |-- application-rancher.yml
|               |   |-- application.yml
|               |   `-- logback-custom.xml
|               `-- test
|                   |-- application-test.yml
|                   |-- application.yml
|                   `-- logback-custom.xml
|-- springcloud-config-apollo-loadbalance-openfeign-configuration-order80
|   |-- pom.xml
|   `-- src
|       `-- main
|           |-- java
|           |   `-- org
|           |       `-- openatom
|           |           `-- springcloud
|           |               |-- OrderServiceConsumerApolloLoadBalanceOpenFeignConfiguration80.java
|           |               |-- config
|           |               |   `-- OpenFeignConfig.java
|           |               |-- controller
|           |               |   |-- ApolloConfigController.java
|           |               |   |-- OrderConsumerController.java
|           |               |   |-- RestartApplicationController.java
|           |               |   `-- SpringCloudServiceDiscoveryController.java
|           |               |-- listener
|           |               |   |-- ApolloPropertiesChangedListener.java
|           |               |   `-- AutomaticApolloWatcher.java
|           |               `-- services
|           |                   `-- PaymentServiceOpenFeign.java
|           `-- resources
|               |-- apollo-env.properties
|               `-- application.yml
|-- springcloud-consumer-hystrix-loadbalance-openfeign-configuration-order80
|   |-- pom.xml
|   `-- src
|       `-- main
|           |-- java
|           |   `-- org
|           |       `-- openatom
|           |           `-- springcloud
|           |               |-- OrderServiceConsumerHystrixLoadBalanceOpenFeignConfiguration80.java
|           |               |-- config
|           |               |   `-- FeignConfig.java
|           |               |-- controller
|           |               |   |-- OrderConsumerHystrixController.java
|           |               |   `-- SpringCloudServiceDiscoveryController.java
|           |               `-- services
|           |                   |-- PaymentServiceHystrixOpenFeign.java
|           |                   `-- impl
|           |                       `-- PaymentServiceHystrixOpenFeignImpl.java
|           `-- resources
|               `-- application.yml
|-- springcloud-consumer-loadbalance-default-order80
|   |-- pom.xml
|   `-- src
|       `-- main
|           |-- java
|           |   `-- org
|           |       `-- openatom
|           |           `-- springcloud
|           |               |-- OrderServiceConsumerLoadBalanceDefault80.java
|           |               |-- config
|           |               |   `-- ApplicationContextConfig.java
|           |               `-- controller
|           |                   |-- OrderConsumerController.java
|           |                   `-- SpringCloudServiceDiscoveryController.java
|           `-- resources
|               `-- application.yml
|-- springcloud-consumer-loadbalance-openfeign-configuration-order80
|   |-- pom.xml
|   `-- src
|       `-- main
|           |-- java
|           |   `-- org
|           |       `-- openatom
|           |           `-- springcloud
|           |               |-- OrderServiceConsumerLoadBalanceOpenFeignConfiguration80.java
|           |               |-- config
|           |               |   `-- OpenFeignConfig.java
|           |               |-- controller
|           |               |   |-- OrderConsumerController.java
|           |               |   `-- SpringCloudServiceDiscoveryController.java
|           |               `-- services
|           |                   `-- PaymentServiceOpenFeign.java
|           `-- resources
|               `-- application.yml
|-- springcloud-consumer-loadbalance-openfeign-hardcode-order80
|   |-- pom.xml
|   `-- src
|       `-- main
|           |-- java
|           |   `-- org
|           |       `-- openatom
|           |           `-- springcloud
|           |               |-- OrderServiceConsumerLoadBalanceOpenFeignHardcode80.java
|           |               |-- config
|           |               |   `-- OpenFeignConfig.java
|           |               |-- controller
|           |               |   |-- OrderConsumerController.java
|           |               |   `-- SpringCloudServiceDiscoveryController.java
|           |               `-- services
|           |                   `-- PaymentServiceOpenFeign.java
|           `-- resources
|               `-- application.yml
|-- springcloud-consumer-loadbalance-ribbon-configuration-order80
|   |-- pom.xml
|   `-- src
|       `-- main
|           |-- java
|           |   `-- org
|           |       `-- openatom
|           |           `-- springcloud
|           |               |-- OrderServiceConsumerLoadBalanceRibbonConfiguration80.java
|           |               |-- config
|           |               |   `-- ApplicationContextConfig.java
|           |               `-- controller
|           |                   |-- OrderConsumerController.java
|           |                   `-- SpringCloudServiceDiscoveryController.java
|           `-- resources
|               `-- application.yml
|-- springcloud-consumer-loadbalance-ribbon-custom-strategy-configuration-order80
|   |-- pom.xml
|   `-- src
|       `-- main
|           |-- java
|           |   `-- org
|           |       `-- openatom
|           |           `-- springcloud
|           |               |-- OrderServiceConsumerLoadBalanceRibbonCustomerStrategyConfiguration80.java
|           |               |-- config
|           |               |   `-- ApplicationContextConfig.java
|           |               |-- controller
|           |               |   |-- OrderConsumerController.java
|           |               |   `-- SpringCloudServiceDiscoveryController.java
|           |               `-- loadbalance
|           |                   `-- MyRoundRobinRule.java
|           `-- resources
|               `-- application.yml
|-- springcloud-consumer-loadbalance-ribbon-custom-strategy-hardcode-order80
|   |-- pom.xml
|   `-- src
|       `-- main
|           |-- java
|           |   `-- org
|           |       `-- openatom
|           |           `-- springcloud
|           |               |-- OrderServiceConsumerLoadBalanceRibbonCustomerStrategyHardcode80.java
|           |               |-- config
|           |               |   `-- ApplicationContextConfig.java
|           |               |-- controller
|           |               |   |-- OrderConsumerController.java
|           |               |   `-- SpringCloudServiceDiscoveryController.java
|           |               `-- loadbalance
|           |                   `-- MyRoundRobinRule.java
|           `-- resources
|               `-- application.yml
|-- springcloud-consumer-loadbalance-ribbon-hardcode-order80
|   |-- pom.xml
|   `-- src
|       `-- main
|           |-- java
|           |   `-- org
|           |       `-- openatom
|           |           |-- myrule
|           |           |   `-- MySelfRule.java
|           |           `-- springcloud
|           |               |-- OrderServiceConsumerLoadBalanceRibbonHardcode80.java
|           |               |-- config
|           |               |   `-- ApplicationContextConfig.java
|           |               `-- controller
|           |                   |-- OrderConsumerController.java
|           |                   `-- SpringCloudServiceDiscoveryController.java
|           `-- resources
|               `-- application.yml
|-- springcloud-consumer-seata-loadbalance-openfeign-configuration-order80
|   |-- pom.xml
|   `-- src
|       `-- main
|           |-- java
|           |   `-- org
|           |       `-- openatom
|           |           `-- springcloud
|           |               |-- OrderServiceConsumerSeatalLoadBalanceOpenFeignConfiguration80.java
|           |               |-- config
|           |               |   |-- DataSourceProxyConfig.java
|           |               |   `-- FeignConfig.java
|           |               |-- controller
|           |               |   `-- OrderController.java
|           |               |-- dao
|           |               |   `-- OrderDao.java
|           |               |-- listener
|           |               |   |-- ApolloPropertiesChangedListener.java
|           |               |   `-- AutomaticApolloWatcher.java
|           |               `-- service
|           |                   |-- AccountService.java
|           |                   |-- OrderService.java
|           |                   |-- StorageService.java
|           |                   `-- impl
|           |                       `-- OrderServiceImpl.java
|           `-- resources
|               |-- apollo-env.properties
|               |-- application.yml
|               `-- mapper
|                   `-- OrderMapper.xml
|-- springcloud-consumer-sleuth_zipkin-loadbalance-default-order80
|   |-- pom.xml
|   `-- src
|       `-- main
|           |-- java
|           |   `-- org
|           |       `-- openatom
|           |           `-- springcloud
|           |               |-- OrderServiceConsumerSleuthAndZipkinLoadBalanceDefault80.java
|           |               |-- config
|           |               |   `-- ApplicationContextConfig.java
|           |               `-- controller
|           |                   |-- OrderConsumerController.java
|           |                   `-- SpringCloudServiceDiscoveryController.java
|           `-- resources
|               `-- application.yml
|-- springcloud-mointor-hystrix-dashboard-turbine9002
|   |-- pom.xml
|   `-- src
|       `-- main
|           |-- java
|           |   `-- org
|           |       `-- openatom
|           |           `-- springcloud
|           |               `-- MointorHystrixDashboardTurbine9002.java
|           `-- resources
|               `-- application.yml
|-- springcloud-mointor-hystrix-dashboard9001
|   |-- pom.xml
|   `-- src
|       `-- main
|           |-- java
|           |   `-- org
|           |       `-- openatom
|           |           `-- springcloud
|           |               `-- MointorHystrixDashboard9001.java
|           `-- resources
|               `-- application.yml
|-- springcloud-mointor-springboot-admin-server9003
|   |-- pom.xml
|   `-- src
|       `-- main
|           |-- java
|           |   `-- org
|           |       `-- openatom
|           |           |-- MointorSpringBootAdmin9003.java
|           |           `-- endpoint
|           |               `-- CoustomEndpoint.java
|           `-- resources
|               `-- application.yml
|-- springcloud-provider-cluster-node-payment8001
|   |-- pom.xml
|   `-- src
|       `-- main
|           |-- java
|           |   `-- org
|           |       `-- openatom
|           |           `-- springcloud
|           |               |-- PaymentServiceProviderClusterNode8001.java
|           |               |-- controller
|           |               |   |-- PaymentController.java
|           |               |   `-- SpringCloudServiceDiscoveryController.java
|           |               |-- dao
|           |               |   `-- PaymentDao.java
|           |               `-- service
|           |                   |-- PaymentService.java
|           |                   `-- impl
|           |                       `-- PaymentServiceImpl.java
|           `-- resources
|               |-- application.yml
|               `-- mapper
|                   `-- PaymentMapper.xml
|-- springcloud-provider-cluster-node-payment8002
|   |-- pom.xml
|   `-- src
|       `-- main
|           |-- java
|           |   `-- org
|           |       `-- openatom
|           |           `-- springcloud
|           |               |-- PaymentServiceProviderClusterNode8002.java
|           |               |-- controller
|           |               |   |-- PaymentController.java
|           |               |   `-- SpringCloudServiceDiscoveryController.java
|           |               |-- dao
|           |               |   `-- PaymentDao.java
|           |               `-- service
|           |                   |-- PaymentService.java
|           |                   `-- impl
|           |                       `-- PaymentServiceImpl.java
|           `-- resources
|               |-- application.yml
|               `-- mapper
|                   `-- PaymentMapper.xml
|-- springcloud-provider-hystrix-cluster-node-payment8003
|   |-- pom.xml
|   `-- src
|       `-- main
|           |-- java
|           |   `-- org
|           |       `-- openatom
|           |           `-- springcloud
|           |               |-- PaymentServiceProviderHystrixClusterNode8003.java
|           |               |-- controller
|           |               |   |-- PaymentHystrixController.java
|           |               |   `-- SpringCloudServiceDiscoveryController.java
|           |               |-- dao
|           |               |   `-- PaymentHystrixDao.java
|           |               `-- service
|           |                   |-- PaymentHystrixService.java
|           |                   `-- impl
|           |                       `-- PaymentHystrixServiceImpl.java
|           `-- resources
|               |-- application.yml
|               `-- mapper
|                   `-- PaymentMapper.xml
|-- springcloud-provider-hystrix-cluster-node-payment8004
|   |-- pom.xml
|   `-- src
|       `-- main
|           |-- java
|           |   `-- org
|           |       `-- openatom
|           |           `-- springcloud
|           |               |-- PaymentServiceProviderHystrixClusterNode8004.java
|           |               |-- controller
|           |               |   |-- PaymentHystrixController.java
|           |               |   `-- SpringCloudServiceDiscoveryController.java
|           |               |-- dao
|           |               |   `-- PaymentHystrixDao.java
|           |               `-- service
|           |                   |-- PaymentHystrixService.java
|           |                   `-- impl
|           |                       `-- PaymentHystrixServiceImpl.java
|           `-- resources
|               |-- application.yml
|               `-- mapper
|                   `-- PaymentMapper.xml
|-- springcloud-provider-seata-account8007
|   |-- pom.xml
|   `-- src
|       `-- main
|           |-- java
|           |   `-- org
|           |       `-- openatom
|           |           `-- springcloud
|           |               |-- AccountServiceProviderSeatal8007.java
|           |               |-- config
|           |               |   `-- DataSourceProxyConfig.java
|           |               |-- controller
|           |               |   `-- AccountController.java
|           |               |-- dao
|           |               |   `-- AccountDao.java
|           |               |-- listener
|           |               |   |-- ApolloPropertiesChangedListener.java
|           |               |   `-- AutomaticApolloWatcher.java
|           |               `-- service
|           |                   |-- AccountService.java
|           |                   `-- impl
|           |                       `-- AccountServiceImpl.java
|           `-- resources
|               |-- apollo-env.properties
|               |-- application.yml
|               `-- mapper
|                   `-- AccountMapper.xml
|-- springcloud-provider-seata-storage8008
|   |-- pom.xml
|   `-- src
|       `-- main
|           |-- java
|           |   `-- org
|           |       `-- openatom
|           |           `-- springcloud
|           |               |-- StorageServiceProviderSeatal8008.java
|           |               |-- config
|           |               |   `-- DataSourceProxyConfig.java
|           |               |-- controller
|           |               |   `-- StorageController.java
|           |               |-- dao
|           |               |   `-- StorageDao.java
|           |               |-- listener
|           |               |   |-- ApolloPropertiesChangedListener.java
|           |               |   `-- AutomaticApolloWatcher.java
|           |               `-- service
|           |                   |-- StorageService.java
|           |                   `-- impl
|           |                       `-- StorageServiceImpl.java
|           `-- resources
|               |-- apollo-env.properties
|               |-- application.yml
|               `-- mapper
|                   `-- StorageMapper.xml
|-- springcloud-provider-sleuth_zipkin-cluster-node-payment8005
|   |-- pom.xml
|   `-- src
|       `-- main
|           |-- java
|           |   `-- org
|           |       `-- openatom
|           |           `-- springcloud
|           |               |-- PaymentServiceProviderSleuthAndZipkinClusterNode8005.java
|           |               |-- controller
|           |               |   |-- PaymentController.java
|           |               |   `-- SpringCloudServiceDiscoveryController.java
|           |               |-- dao
|           |               |   `-- PaymentDao.java
|           |               `-- service
|           |                   |-- PaymentService.java
|           |                   `-- impl
|           |                       `-- PaymentServiceImpl.java
|           `-- resources
|               |-- application.yml
|               `-- mapper
|                   `-- PaymentMapper.xml
|-- springcloud-provider-sleuth_zipkin-cluster-node-payment8006
|   |-- pom.xml
|   `-- src
|       `-- main
|           |-- java
|           |   `-- org
|           |       `-- openatom
|           |           `-- springcloud
|           |               |-- PaymentServiceProviderSleuthAndZipkinClusterNode8006.java
|           |               |-- controller
|           |               |   |-- PaymentController.java
|           |               |   `-- SpringCloudServiceDiscoveryController.java
|           |               |-- dao
|           |               |   `-- PaymentDao.java
|           |               `-- service
|           |                   |-- PaymentService.java
|           |                   `-- impl
|           |                       `-- PaymentServiceImpl.java
|           `-- resources
|               |-- application.yml
|               `-- mapper
|                   `-- PaymentMapper.xml
|-- springcloud-register-center-cluster-node7002
|   |-- pom.xml
|   `-- src
|       `-- main
|           |-- java
|           |   `-- org
|           |       `-- openatom
|           |           `-- springcloud
|           |               `-- RegisterCcenterClusterNode7002.java
|           `-- resources
|               `-- application.yml
|-- springcloud-register-center-cluster-node7003
|   |-- pom.xml
|   `-- src
|       `-- main
|           |-- java
|           |   `-- org
|           |       `-- openatom
|           |           `-- springcloud
|           |               `-- RegisterCcenterClusterNode7003.java
|           `-- resources
|               `-- application.yml
|-- springcloud-register-center-cluster-node7004
|   |-- pom.xml
|   `-- src
|       `-- main
|           |-- java
|           |   `-- org
|           |       `-- openatom
|           |           `-- springcloud
|           |               `-- RegisterCcenterClusterNode7004.java
|           `-- resources
|               `-- application.yml
|-- springcloud-register-center-single-node7001
|   |-- pom.xml
|   `-- src
|       `-- main
|           |-- java
|           |   `-- org.openatom.springcloud
|           |       `-- RegisterCcenterSingleNode7001.java
|           `-- resources
|               `-- application.yml
|-- springcloud-router-connect-direct-configuration-gateway9527
|   |-- pom.xml
|   `-- src
|       `-- main
|           |-- java
|           |   `-- com
|           |       `-- atguigu
|           |           `-- springcloud
|           |               |-- RouterConnectDirectConfigurationGateWay9527.java
|           |               `-- filter
|           |                   `-- LoginFilter.java
|           `-- resources
|               `-- application.yml
|-- springcloud-router-connect-direct-hardcode-gateway9527
|   |-- pom.xml
|   `-- src
|       `-- main
|           |-- java
|           |   `-- com
|           |       `-- atguigu
|           |           `-- springcloud
|           |               |-- RouterConnectDirectHardcodeGateWay9527.java
|           |               |-- config
|           |               |   `-- GateWayConfig.java
|           |               `-- filter
|           |                   `-- LoginFilter.java
|           `-- resources
|               `-- application.yml
|-- springcloud-router-connect-loadbalance-configuration-gateway9527
|   |-- pom.xml
|   `-- src
|       `-- main
|           |-- java
|           |   `-- com
|           |       `-- atguigu
|           |           `-- springcloud
|           |               |-- RouterConnectLoadbalanceConfigurationGateWay9527.java
|           |               |-- config
|           |               |   `-- GateWayConfig.java
|           |               `-- filter
|           |                   `-- LoginFilter.java
|           `-- resources
|               `-- application.yml
`-- springcloud-router-connect-loadbalance-hardcode-gateway9527
    |-- pom.xml
    `-- src
        `-- main
            |-- java
            |   `-- com
            |       `-- atguigu
            |           `-- springcloud
            |               |-- RouterConnectLoadbalanceHardcodeGateWay9527.java
            |               |-- config
            |               |   `-- GateWayConfig.java
            |               `-- filter
            |                   `-- LoginFilter.java
            `-- resources
                `-- application.yml

409 directories, 308 files
