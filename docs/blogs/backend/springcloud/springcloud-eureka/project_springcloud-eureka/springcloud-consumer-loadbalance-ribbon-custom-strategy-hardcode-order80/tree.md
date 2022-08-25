springcloud-consumer-loadbalance-ribbon-custom-strategy-hardcode-order80
|-- src
|   •-- main
|       |-- java
|       |   •-- org
|       |       •-- openatom
|       |           •-- springcloud
|       |               |-- config
|       |               |   •-- ApplicationContextConfig.java
|       |               |-- controller
|       |               |   |-- OrderConsumerController.java
|       |               |   •-- SpringCloudServiceDiscoveryController.java
|       |               |-- loadbalance
|       |               |   •-- MyRoundRobinRule.java
|       |               •-- OrderServiceConsumerLoadBalanceRibbonCustomerStrategyHardcode80.java
|       •-- resources
|           •-- application.yml
•-- pom.xml