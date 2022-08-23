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
                      text: "2.创建项目",
                      icon: "article",
                      link: "/blogs/backend/springcloud/springcloud-eureka/shardings/springcloud-eureka-chapter-2.创建项目.md",
                  },
                  {
                      text: "3.使用Eureka作为注册中心",
                      icon: "article",
                      link: "/blogs/backend/springcloud/springcloud-eureka/shardings/springcloud-eureka-chapter-3.使用Eureka作为注册中心.md",
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
                      text: "2.创建项目",
                      icon: "article",
                      link: "/blogs/backend/springcloud/springcloud-eureka/springcloud-eureka.md#2.",
                  },
                  {
                      text: "3.使用Eureka作为注册中心",
                      icon: "article",
                      link: "/blogs/backend/springcloud/springcloud-eureka/springcloud-eureka.md#3.",
                  },
              ]
          },
      ]
  }
]);
