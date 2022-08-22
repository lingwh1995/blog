[01;34mspringcloud-basic-sample-provider-cluster-node-payment8010[00m
|-- [01;34mdocker[00m
|   `-- Dockerfile
|-- pom.xml
|-- [01;34msrc[00m
|   `-- [01;34mmain[00m
|       |-- [01;34mjava[00m
|       |   `-- [01;34morg[00m
|       |       `-- [01;34mopenatom[00m
|       |           `-- [01;34mspringcloud[00m
|       |               |-- PaymentServiceProviderClusterNode8010.java
|       |               |-- [01;34mconfig[00m
|       |               |   `-- VirtualIpConfig.java
|       |               |-- [01;34mcontroller[00m
|       |               |   |-- PaymentController.java
|       |               |   `-- SpringCloudServiceDiscoveryController.java
|       |               |-- [01;34mdao[00m
|       |               |   `-- PaymentDao.java
|       |               `-- [01;34mservice[00m
|       |                   |-- PaymentService.java
|       |                   `-- [01;34mimpl[00m
|       |                       `-- PaymentServiceImpl.java
|       `-- [01;34mresources[00m
|           |-- [01;34mdev[00m
|           |   |-- application-dev.yml
|           |   |-- application.yml
|           |   |-- logback-custom.xml
|           |   `-- [01;34mmapper[00m
|           |       `-- PaymentMapper.xml
|           |-- [01;34mprod[00m
|           |   |-- application-prod.yml
|           |   |-- application.yml
|           |   |-- logback-custom.xml
|           |   `-- [01;34mmapper[00m
|           |       `-- PaymentMapper.xml
|           |-- [01;34mrancher[00m
|           |   |-- application-rancher.yml
|           |   |-- application.yml
|           |   |-- logback-custom.xml
|           |   `-- [01;34mmapper[00m
|           |       `-- PaymentMapper.xml
|           `-- [01;34mtest[00m
|               |-- application-test.yml
|               |-- application.yml
|               |-- logback-custom.xml
|               `-- [01;34mmapper[00m
|                   `-- PaymentMapper.xml
`-- tree.md

21 directories, 26 files
