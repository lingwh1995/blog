springcloud-basic-sample-provider-cluster-node-payment8009
|-- docker
|   `-- Dockerfile
|-- pom.xml
|-- src
|   `-- main
|       |-- java
|       |   `-- org
|       |       `-- openatom
|       |           `-- springcloud
|       |               |-- PaymentServiceProviderClusterNode8009.java
|       |               |-- config
|       |               |   `-- VirtualIpConfig.java
|       |               |-- controller
|       |               |   |-- PaymentController.java
|       |               |   `-- SpringCloudServiceDiscoveryController.java
|       |               |-- dao
|       |               |   `-- PaymentDao.java
|       |               `-- service
|       |                   |-- PaymentService.java
|       |                   `-- impl
|       |                       `-- PaymentServiceImpl.java
|       `-- resources
|           |-- dev
|           |   |-- application-dev.yml
|           |   |-- application.yml
|           |   |-- logback-custom.xml
|           |   `-- mapper
|           |       `-- PaymentMapper.xml
|           |-- prod
|           |   |-- application-prod.yml
|           |   |-- application.yml
|           |   |-- logback-custom.xml
|           |   `-- mapper
|           |       `-- PaymentMapper.xml
|           |-- rancher
|           |   |-- application-rancher.yml
|           |   |-- application.yml
|           |   |-- logback-custom.xml
|           |   `-- mapper
|           |       `-- PaymentMapper.xml
|           `-- test
|               |-- application-test.yml
|               |-- application.yml
|               |-- logback-custom.xml
|               `-- mapper
|                   `-- PaymentMapper.xml
`-- tree.md

21 directories, 26 files
