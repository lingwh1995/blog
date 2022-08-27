import { sidebar } from "vuepress-theme-hope";
 
export default sidebar([
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
                      text: "8.使用Hystrix_DashBoard和Turbine对服务进行监控",
                      icon: "article",
                      link: "/blogs/backend/springcloud/springcloud-eureka/shardings/springcloud-eureka-chapter-8.使用Hystrix_DashBoard和Turbine对服务进行监控.md",
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
                      text: "8.使用Hystrix_DashBoard和Turbine对服务进行监控",
                      icon: "article",
                      link: "/blogs/backend/springcloud/springcloud-eureka/springcloud-eureka.md#8.",
                  },
              ]
          },
      ]
  }
]);
