import { sidebar } from "vuepress-theme-hope";

export default sidebar([
  {
      // 必要的，分组的标题文字
      text: "在Centos7上搭建开发环境",
      // 可选的, 分组标题对应的图标
      icon: "a-archivecatalogue-fill",
      // 可选的, 设置分组是否可以折叠，默认值是 false
      collapsable: true,
      // 必要的，分组的子项目
      children: [
          {
              text: "按照章节阅读",
              icon: "list",
              collapsable: true,
              children:[
                  {
                      text: "博客内容介绍",
                      icon: "article",
                      link: "/blogs/environment/centos/centos7/shardings/centos7-chapter-0.博客内容介绍.md",
                   },
                  {
                      text: "1.安装Linux操作系统",
                      icon: "article",
                      link: "/blogs/environment/centos/centos7/shardings/centos7-chapter-1.安装Linux操作系统.md",
                  },
                  {
                      text: "2.Linux操作系统初始设置",
                      icon: "article",
                      link: "/blogs/environment/centos/centos7/shardings/centos7-chapter-2.Linux操作系统初始设置.md",
                  },
                  {
                      text: "3.搭建基础开发环境",
                      icon: "article",
                      link: "/blogs/environment/centos/centos7/shardings/centos7-chapter-3.搭建基础开发环境.md",
                  },
                  {
                      text: "4.搭建docker技术栈",
                      icon: "article",
                      link: "/blogs/environment/centos/centos7/shardings/centos7-chapter-4.搭建docker技术栈.md",
                  },
                  {
                      text: "5.搭建Rancher技术栈",
                      icon: "article",
                      link: "/blogs/environment/centos/centos7/shardings/centos7-chapter-5.搭建Rancher技术栈.md",
                  },
                  {
                      text: "6.搭建Minikube",
                      icon: "article",
                      link: "/blogs/environment/centos/centos7/shardings/centos7-chapter-6.搭建Minikube.md",
                  },
                  {
                      text: "7.kubeadm搭建Kubernetes",
                      icon: "article",
                      link: "/blogs/environment/centos/centos7/shardings/centos7-chapter-7.kubeadm搭建Kubernetes.md",
                  },
                  {
                      text: "8.二进制包搭建Kubernetes",
                      icon: "article",
                      link: "/blogs/environment/centos/centos7/shardings/centos7-chapter-8.二进制包搭建Kubernetes.md",
                  },
                  {
                      text: "9.搭建持续集成环境",
                      icon: "article",
                      link: "/blogs/environment/centos/centos7/shardings/centos7-chapter-9.搭建持续集成环境.md",
                  },
                  {
                      text: "10.搭建Mycat技术栈",
                      icon: "article",
                      link: "/blogs/environment/centos/centos7/shardings/centos7-chapter-10.搭建Mycat技术栈.md",
                  },
                  {
                      text: "11.搭建常用私服环境",
                      icon: "article",
                      link: "/blogs/environment/centos/centos7/shardings/centos7-chapter-11.搭建常用私服环境.md",
                  },
                  {
                      text: "12.搭建SpringCloud技术栈所需组件",
                      icon: "article",
                      link: "/blogs/environment/centos/centos7/shardings/centos7-chapter-12.搭建SpringCloud技术栈所需组件.md",
                  },
              ]
          },
          {
              text: "章节内容合集",
              icon: "repo",
              collapsable: true,
              children:[
                  {
                      text: "博客内容介绍",
                      icon: "article",
                      link: "/blogs/environment/centos/centos7/centos7.md#intro",
                  },
                  {
                      text: "1.安装Linux操作系统",
                      icon: "article",
                      link: "/blogs/environment/centos/centos7/centos7.md#1.",
                  },
                  {
                      text: "2.Linux操作系统初始设置",
                      icon: "article",
                      link: "/blogs/environment/centos/centos7/centos7.md#2.",
                  },
                  {
                      text: "3.搭建基础开发环境",
                      icon: "article",
                      link: "/blogs/environment/centos/centos7/centos7.md#3.",
                  },
                  {
                      text: "4.搭建docker技术栈",
                      icon: "article",
                      link: "/blogs/environment/centos/centos7/centos7.md#4.",
                  },
                  {
                      text: "5.搭建Rancher技术栈",
                      icon: "article",
                      link: "/blogs/environment/centos/centos7/centos7.md#5.",
                  },
                  {
                      text: "6.搭建Minikube",
                      icon: "article",
                      link: "/blogs/environment/centos/centos7/centos7.md#6.",
                  },
                  {
                      text: "7.kubeadm搭建Kubernetes",
                      icon: "article",
                      link: "/blogs/environment/centos/centos7/centos7.md#7.",
                  },
                  {
                      text: "8.二进制包搭建Kubernetes",
                      icon: "article",
                      link: "/blogs/environment/centos/centos7/centos7.md#8.",
                  },
                  {
                      text: "9.搭建持续集成环境",
                      icon: "article",
                      link: "/blogs/environment/centos/centos7/centos7.md#9.",
                  },
                  {
                      text: "10.搭建Mycat技术栈",
                      icon: "article",
                      link: "/blogs/environment/centos/centos7/centos7.md#10.",
                  },
                  {
                      text: "11.搭建常用私服环境",
                      icon: "article",
                      link: "/blogs/environment/centos/centos7/centos7.md#11.",
                  },
                  {
                      text: "12.搭建SpringCloud技术栈所需组件",
                      icon: "article",
                      link: "/blogs/environment/centos/centos7/centos7.md#12.",
                  },
              ]
          },
      ]
  },
  {
      // 必要的，分组的标题文字
      text: "在WindowsServer2016上搭建开发环境",
      // 可选的, 分组标题对应的图标
      icon: "a-archivecatalogue-fill",
      // 可选的, 设置分组是否可以折叠，默认值是 false
      collapsable: true,
      // 必要的，分组的子项目
      children: [
          {
              text: "按照章节阅读",
              icon: "list",
              collapsable: true,
              children:[
                  {
                      text: "博客内容介绍",
                      icon: "article",
                      link: "/blogs/environment/windows/windows-server2016/shardings/windows-server2016-chapter-0.博客内容介绍.md",
                   },
                  {
                      text: "1.搭建基础开发环境",
                      icon: "article",
                      link: "/blogs/environment/windows/windows-server2016/shardings/windows-server2016-chapter-1.搭建基础开发环境.md",
                  },
                  {
                      text: "2.搭建SpringCloud技术栈所需组件",
                      icon: "article",
                      link: "/blogs/environment/windows/windows-server2016/shardings/windows-server2016-chapter-2.搭建SpringCloud技术栈所需组件.md",
                  },
              ]
          },
          {
              text: "章节内容合集",
              icon: "repo",
              collapsable: true,
              children:[
                  {
                      text: "博客内容介绍",
                      icon: "article",
                      link: "/blogs/environment/windows/windows-server2016/windows-server2016.md#intro",
                  },
                  {
                      text: "1.搭建基础开发环境",
                      icon: "article",
                      link: "/blogs/environment/windows/windows-server2016/windows-server2016.md#1.",
                  },
                  {
                      text: "2.搭建SpringCloud技术栈所需组件",
                      icon: "article",
                      link: "/blogs/environment/windows/windows-server2016/windows-server2016.md#2.",
                  },
              ]
          },
      ]
  },
  {
      // 必要的，分组的标题文字
      text: "基于Eureka搭建Springcloud微服务",
      // 可选的, 分组标题对应的图标
      icon: "a-archivecatalogue-fill",
      // 可选的, 设置分组是否可以折叠，默认值是 false
      collapsable: true,
      // 必要的，分组的子项目
      children: [
          {
              text: "按照章节阅读",
              icon: "list",
              collapsable: true,
              children:[
                  {
                      text: "博客内容介绍",
                      icon: "article",
                      link: "/blogs/backend/springcloud/springcloud-eureka/shardings/springcloud-eureka-chapter-0.博客内容介绍.md",
                   },
                  {
                      text: "1.微服务简介",
                      icon: "article",
                      link: "/blogs/backend/springcloud/springcloud-eureka/shardings/springcloud-eureka-chapter-1.微服务简介.md",
                  },
                  {
                      text: "2.搭建项目基础设施",
                      icon: "article",
                      link: "/blogs/backend/springcloud/springcloud-eureka/shardings/springcloud-eureka-chapter-2.搭建项目基础设施.md",
                  },
                  {
                      text: "3.使用Eureka作为注册中心",
                      icon: "article",
                      link: "/blogs/backend/springcloud/springcloud-eureka/shardings/springcloud-eureka-chapter-3.使用Eureka作为注册中心.md",
                  },
                  {
                      text: "4.搭建第一个微服务应用",
                      icon: "article",
                      link: "/blogs/backend/springcloud/springcloud-eureka/shardings/springcloud-eureka-chapter-4.搭建第一个微服务应用.md",
                  },
                  {
                      text: "5.使用Ribbon实现客户端负载均衡",
                      icon: "article",
                      link: "/blogs/backend/springcloud/springcloud-eureka/shardings/springcloud-eureka-chapter-5.使用Ribbon实现客户端负载均衡.md",
                  },
                  {
                      text: "6.使用OpenFeign实现客户端负载均衡",
                      icon: "article",
                      link: "/blogs/backend/springcloud/springcloud-eureka/shardings/springcloud-eureka-chapter-6.使用OpenFeign实现客户端负载均衡.md",
                  },
                  {
                      text: "7.使用Hystrix实现服务降级和熔断",
                      icon: "article",
                      link: "/blogs/backend/springcloud/springcloud-eureka/shardings/springcloud-eureka-chapter-7.使用Hystrix实现服务降级和熔断.md",
                  },
                  {
                      text: "8.使用DashBoard和Turbine对服务访问流量进行统计",
                      icon: "article",
                      link: "/blogs/backend/springcloud/springcloud-eureka/shardings/springcloud-eureka-chapter-8.使用DashBoard和Turbine对服务访问流量进行统计.md",
                  },
                  {
                      text: "9.使用GateWay实现网关功能",
                      icon: "article",
                      link: "/blogs/backend/springcloud/springcloud-eureka/shardings/springcloud-eureka-chapter-9.使用GateWay实现网关功能.md",
                  },
                  {
                      text: "10.使用Zipkin+Sleuth实现调用链路追踪",
                      icon: "article",
                      link: "/blogs/backend/springcloud/springcloud-eureka/shardings/springcloud-eureka-chapter-10.使用Zipkin+Sleuth实现调用链路追踪.md",
                  },
                  {
                      text: "11.使用Apollo配置中心管理配置",
                      icon: "article",
                      link: "/blogs/backend/springcloud/springcloud-eureka/shardings/springcloud-eureka-chapter-11.使用Apollo配置中心管理配置.md",
                  },
                  {
                      text: "12.使用Seata进行分布式事务控制",
                      icon: "article",
                      link: "/blogs/backend/springcloud/springcloud-eureka/shardings/springcloud-eureka-chapter-12.使用Seata进行分布式事务控制.md",
                  },
                  {
                      text: "13.使用SpringBootAdmin监控服务",
                      icon: "article",
                      link: "/blogs/backend/springcloud/springcloud-eureka/shardings/springcloud-eureka-chapter-13.使用SpringBootAdmin监控服务.md",
                  },
                  {
                      text: "14.设计适用于生产环境的日志系统",
                      icon: "article",
                      link: "/blogs/backend/springcloud/springcloud-eureka/shardings/springcloud-eureka-chapter-14.设计适用于生产环境的日志系统.md",
                  },
                  {
                      text: "15.多环境相关",
                      icon: "article",
                      link: "/blogs/backend/springcloud/springcloud-eureka/shardings/springcloud-eureka-chapter-15.多环境相关.md",
                  },
                  {
                      text: "16.综合案例",
                      icon: "article",
                      link: "/blogs/backend/springcloud/springcloud-eureka/shardings/springcloud-eureka-chapter-16.综合案例.md",
                  },
              ]
          },
          {
              text: "章节内容合集",
              icon: "repo",
              collapsable: true,
              children:[
                  {
                      text: "博客内容介绍",
                      icon: "article",
                      link: "/blogs/backend/springcloud/springcloud-eureka/springcloud-eureka.md#intro",
                  },
                  {
                      text: "1.微服务简介",
                      icon: "article",
                      link: "/blogs/backend/springcloud/springcloud-eureka/springcloud-eureka.md#1.",
                  },
                  {
                      text: "2.搭建项目基础设施",
                      icon: "article",
                      link: "/blogs/backend/springcloud/springcloud-eureka/springcloud-eureka.md#2.",
                  },
                  {
                      text: "3.使用Eureka作为注册中心",
                      icon: "article",
                      link: "/blogs/backend/springcloud/springcloud-eureka/springcloud-eureka.md#3.",
                  },
                  {
                      text: "4.搭建第一个微服务应用",
                      icon: "article",
                      link: "/blogs/backend/springcloud/springcloud-eureka/springcloud-eureka.md#4.",
                  },
                  {
                      text: "5.使用Ribbon实现客户端负载均衡",
                      icon: "article",
                      link: "/blogs/backend/springcloud/springcloud-eureka/springcloud-eureka.md#5.",
                  },
                  {
                      text: "6.使用OpenFeign实现客户端负载均衡",
                      icon: "article",
                      link: "/blogs/backend/springcloud/springcloud-eureka/springcloud-eureka.md#6.",
                  },
                  {
                      text: "7.使用Hystrix实现服务降级和熔断",
                      icon: "article",
                      link: "/blogs/backend/springcloud/springcloud-eureka/springcloud-eureka.md#7.",
                  },
                  {
                      text: "8.使用DashBoard和Turbine对服务访问流量进行统计",
                      icon: "article",
                      link: "/blogs/backend/springcloud/springcloud-eureka/springcloud-eureka.md#8.",
                  },
                  {
                      text: "9.使用GateWay实现网关功能",
                      icon: "article",
                      link: "/blogs/backend/springcloud/springcloud-eureka/springcloud-eureka.md#9.",
                  },
                  {
                      text: "10.使用Zipkin+Sleuth实现调用链路追踪",
                      icon: "article",
                      link: "/blogs/backend/springcloud/springcloud-eureka/springcloud-eureka.md#10.",
                  },
                  {
                      text: "11.使用Apollo配置中心管理配置",
                      icon: "article",
                      link: "/blogs/backend/springcloud/springcloud-eureka/springcloud-eureka.md#11.",
                  },
                  {
                      text: "12.使用Seata进行分布式事务控制",
                      icon: "article",
                      link: "/blogs/backend/springcloud/springcloud-eureka/springcloud-eureka.md#12.",
                  },
                  {
                      text: "13.使用SpringBootAdmin监控服务",
                      icon: "article",
                      link: "/blogs/backend/springcloud/springcloud-eureka/springcloud-eureka.md#13.",
                  },
                  {
                      text: "14.设计适用于生产环境的日志系统",
                      icon: "article",
                      link: "/blogs/backend/springcloud/springcloud-eureka/springcloud-eureka.md#14.",
                  },
                  {
                      text: "15.多环境相关",
                      icon: "article",
                      link: "/blogs/backend/springcloud/springcloud-eureka/springcloud-eureka.md#15.",
                  },
                  {
                      text: "16.综合案例",
                      icon: "article",
                      link: "/blogs/backend/springcloud/springcloud-eureka/springcloud-eureka.md#16.",
                  },
              ]
          },
      ]
  }
]);
