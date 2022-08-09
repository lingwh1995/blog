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
              icon:"repo",
              collapsable: true,
              children:[
                  {
                      text: "",
                      link:"/blogs/environment/centos/centos7/博客内容介绍/centos7-chapter-0..md",
                      icon:"note",
                   },
                  {
                      text:"1.windows安装Linux操作系统",
                      icon:"article",
                      collapsable: true,
                      link:"/blogs/environment/centos/centos7/博客内容介绍/centos7-chapter-1.windows安装Linux操作系统.md",
                  },
                  {
                      text:"2.Linux操作系统初始设置",
                      icon:"article",
                      collapsable: true,
                      link:"/blogs/environment/centos/centos7/博客内容介绍/centos7-chapter-2.Linux操作系统初始设置.md",
                  },
                  {
                      text:"3.搭建基础开发环境",
                      icon:"article",
                      collapsable: true,
                      link:"/blogs/environment/centos/centos7/博客内容介绍/centos7-chapter-3.搭建基础开发环境.md",
                  },
                  {
                      text:"4.Centos搭建docker",
                      icon:"article",
                      collapsable: true,
                      link:"/blogs/environment/centos/centos7/博客内容介绍/centos7-chapter-4.Centos搭建docker.md",
                  },
                  {
                      text:"5.Centos搭建Rancher",
                      icon:"article",
                      collapsable: true,
                      link:"/blogs/environment/centos/centos7/博客内容介绍/centos7-chapter-5.Centos搭建Rancher.md",
                  },
                  {
                      text:"6.Centos搭建Minikube",
                      icon:"article",
                      collapsable: true,
                      link:"/blogs/environment/centos/centos7/博客内容介绍/centos7-chapter-6.Centos搭建Minikube.md",
                  },
                  {
                      text:"7.kubeadm搭建Kubernetes",
                      icon:"article",
                      collapsable: true,
                      link:"/blogs/environment/centos/centos7/博客内容介绍/centos7-chapter-7.kubeadm搭建Kubernetes.md",
                  },
                  {
                      text:"8.二进制包搭建Kubernetes",
                      icon:"article",
                      collapsable: true,
                      link:"/blogs/environment/centos/centos7/博客内容介绍/centos7-chapter-8.二进制包搭建Kubernetes.md",
                  },
              ]
          },
          {
              text: "章节内容合集",
              icon:"repo",
              collapsable: true,
              children:[
                  {
                      text: "",
                      link:"/blogs/environment/centos/centos7/centos7.md#intro",
                      icon:"note",
                  },
                  {
                      text:"1.windows安装Linux操作系统",
                      icon:"article",
                      collapsable: true,
                      link:"/blogs/environment/centos/centos7/centos7.md#1.",
                  },
                  {
                      text:"2.Linux操作系统初始设置",
                      icon:"article",
                      collapsable: true,
                      link:"/blogs/environment/centos/centos7/centos7.md#2.",
                  },
                  {
                      text:"3.搭建基础开发环境",
                      icon:"article",
                      collapsable: true,
                      link:"/blogs/environment/centos/centos7/centos7.md#3.",
                  },
                  {
                      text:"4.Centos搭建docker",
                      icon:"article",
                      collapsable: true,
                      link:"/blogs/environment/centos/centos7/centos7.md#4.",
                  },
                  {
                      text:"5.Centos搭建Rancher",
                      icon:"article",
                      collapsable: true,
                      link:"/blogs/environment/centos/centos7/centos7.md#5.",
                  },
                  {
                      text:"6.Centos搭建Minikube",
                      icon:"article",
                      collapsable: true,
                      link:"/blogs/environment/centos/centos7/centos7.md#6.",
                  },
                  {
                      text:"7.kubeadm搭建Kubernetes",
                      icon:"article",
                      collapsable: true,
                      link:"/blogs/environment/centos/centos7/centos7.md#7.",
                  },
                  {
                      text:"8.二进制包搭建Kubernetes",
                      icon:"article",
                      collapsable: true,
                      link:"/blogs/environment/centos/centos7/centos7.md#8.",
                  },
              ]
          },
      ]
  },
  {
      // 必要的，分组的标题文字
      text: "在Ubuntu2012上搭建开发环境",
      // 可选的, 分组标题对应的图标
      icon: "a-archivecatalogue-fill",
      // 可选的, 设置分组是否可以折叠，默认值是 false
      collapsable: true,
      // 必要的，分组的子项目
      children: [
          {
              text: "按照章节阅读",
              icon:"repo",
              collapsable: true,
              children:[
                  {
                      text: "",
                      link:"/blogs/environment/ubuntu/ubuntu2012/博客内容介绍/ubuntu2012-chapter-0..md",
                      icon:"note",
                   },
                  {
                      text:"1.安装Ubuntu操作系统",
                      icon:"article",
                      collapsable: true,
                      link:"/blogs/environment/ubuntu/ubuntu2012/博客内容介绍/ubuntu2012-chapter-1.安装Ubuntu操作系统.md",
                  },
                  {
                      text:"2.Ubuntu操作系统初始设置",
                      icon:"article",
                      collapsable: true,
                      link:"/blogs/environment/ubuntu/ubuntu2012/博客内容介绍/ubuntu2012-chapter-2.Ubuntu操作系统初始设置.md",
                  },
                  {
                      text:"3.Ubuntu搭建基础开发环境",
                      icon:"article",
                      collapsable: true,
                      link:"/blogs/environment/ubuntu/ubuntu2012/博客内容介绍/ubuntu2012-chapter-3.Ubuntu搭建基础开发环境.md",
                  },
                  {
                      text:"4.UbuntuCentos搭建docker",
                      icon:"article",
                      collapsable: true,
                      link:"/blogs/environment/ubuntu/ubuntu2012/博客内容介绍/ubuntu2012-chapter-4.UbuntuCentos搭建docker.md",
                  },
                  {
                      text:"5.UbuntuCentos搭建Rancher",
                      icon:"article",
                      collapsable: true,
                      link:"/blogs/environment/ubuntu/ubuntu2012/博客内容介绍/ubuntu2012-chapter-5.UbuntuCentos搭建Rancher.md",
                  },
                  {
                      text:"6.UbuntuCentos搭建Minikube",
                      icon:"article",
                      collapsable: true,
                      link:"/blogs/environment/ubuntu/ubuntu2012/博客内容介绍/ubuntu2012-chapter-6.UbuntuCentos搭建Minikube.md",
                  },
                  {
                      text:"7.Ubuntukubeadm搭建Kubernetes",
                      icon:"article",
                      collapsable: true,
                      link:"/blogs/environment/ubuntu/ubuntu2012/博客内容介绍/ubuntu2012-chapter-7.Ubuntukubeadm搭建Kubernetes.md",
                  },
                  {
                      text:"8.Ubuntu二进制包搭建Kubernetes",
                      icon:"article",
                      collapsable: true,
                      link:"/blogs/environment/ubuntu/ubuntu2012/博客内容介绍/ubuntu2012-chapter-8.Ubuntu二进制包搭建Kubernetes.md",
                  },
              ]
          },
          {
              text: "章节内容合集",
              icon:"repo",
              collapsable: true,
              children:[
                  {
                      text: "",
                      link:"/blogs/environment/ubuntu/ubuntu2012/ubuntu2012.md#intro",
                      icon:"note",
                  },
                  {
                      text:"1.安装Ubuntu操作系统",
                      icon:"article",
                      collapsable: true,
                      link:"/blogs/environment/ubuntu/ubuntu2012/ubuntu2012.md#1.",
                  },
                  {
                      text:"2.Ubuntu操作系统初始设置",
                      icon:"article",
                      collapsable: true,
                      link:"/blogs/environment/ubuntu/ubuntu2012/ubuntu2012.md#2.",
                  },
                  {
                      text:"3.Ubuntu搭建基础开发环境",
                      icon:"article",
                      collapsable: true,
                      link:"/blogs/environment/ubuntu/ubuntu2012/ubuntu2012.md#3.",
                  },
                  {
                      text:"4.UbuntuCentos搭建docker",
                      icon:"article",
                      collapsable: true,
                      link:"/blogs/environment/ubuntu/ubuntu2012/ubuntu2012.md#4.",
                  },
                  {
                      text:"5.UbuntuCentos搭建Rancher",
                      icon:"article",
                      collapsable: true,
                      link:"/blogs/environment/ubuntu/ubuntu2012/ubuntu2012.md#5.",
                  },
                  {
                      text:"6.UbuntuCentos搭建Minikube",
                      icon:"article",
                      collapsable: true,
                      link:"/blogs/environment/ubuntu/ubuntu2012/ubuntu2012.md#6.",
                  },
                  {
                      text:"7.Ubuntukubeadm搭建Kubernetes",
                      icon:"article",
                      collapsable: true,
                      link:"/blogs/environment/ubuntu/ubuntu2012/ubuntu2012.md#7.",
                  },
                  {
                      text:"8.Ubuntu二进制包搭建Kubernetes",
                      icon:"article",
                      collapsable: true,
                      link:"/blogs/environment/ubuntu/ubuntu2012/ubuntu2012.md#8.",
                  },
              ]
          },
      ]
  },
  {
      // 必要的，分组的标题文字
      text: "springcloud-eureka合集",
      // 可选的, 分组标题对应的图标
      icon: "a-archivecatalogue-fill",
      // 可选的, 设置分组是否可以折叠，默认值是 false
      collapsable: true,
      // 必要的，分组的子项目
      children: [
          {
              text: "按照章节阅读",
              icon:"repo",
              collapsable: true,
              children:[
                  {
                      text: "",
                      link:"/blogs/backend/springcloud/springcloud-eureka/博客内容介绍/springcloud-eureka-chapter-0..md",
                      icon:"note",
                   },
                  {
                      text:"1.安装SpringCloud-Eureka操作系统",
                      icon:"article",
                      collapsable: true,
                      link:"/blogs/backend/springcloud/springcloud-eureka/博客内容介绍/springcloud-eureka-chapter-1.安装SpringCloud-Eureka操作系统.md",
                  },
                  {
                      text:"2.SpringCloud-Eureka操作系统初始设置",
                      icon:"article",
                      collapsable: true,
                      link:"/blogs/backend/springcloud/springcloud-eureka/博客内容介绍/springcloud-eureka-chapter-2.SpringCloud-Eureka操作系统初始设置.md",
                  },
                  {
                      text:"3.SpringCloud-Eureka搭建基础开发环境",
                      icon:"article",
                      collapsable: true,
                      link:"/blogs/backend/springcloud/springcloud-eureka/博客内容介绍/springcloud-eureka-chapter-3.SpringCloud-Eureka搭建基础开发环境.md",
                  },
                  {
                      text:"4.SpringCloud-EurekaCentos搭建docker",
                      icon:"article",
                      collapsable: true,
                      link:"/blogs/backend/springcloud/springcloud-eureka/博客内容介绍/springcloud-eureka-chapter-4.SpringCloud-EurekaCentos搭建docker.md",
                  },
                  {
                      text:"5.SpringCloud-EurekaCentos搭建Rancher",
                      icon:"article",
                      collapsable: true,
                      link:"/blogs/backend/springcloud/springcloud-eureka/博客内容介绍/springcloud-eureka-chapter-5.SpringCloud-EurekaCentos搭建Rancher.md",
                  },
                  {
                      text:"6.SpringCloud-EurekaCentos搭建Minikube",
                      icon:"article",
                      collapsable: true,
                      link:"/blogs/backend/springcloud/springcloud-eureka/博客内容介绍/springcloud-eureka-chapter-6.SpringCloud-EurekaCentos搭建Minikube.md",
                  },
                  {
                      text:"7.SpringCloud-Eurekakubeadm搭建Kubernetes",
                      icon:"article",
                      collapsable: true,
                      link:"/blogs/backend/springcloud/springcloud-eureka/博客内容介绍/springcloud-eureka-chapter-7.SpringCloud-Eurekakubeadm搭建Kubernetes.md",
                  },
                  {
                      text:"8.SpringCloud-Eureka二进制包搭建Kubernetes",
                      icon:"article",
                      collapsable: true,
                      link:"/blogs/backend/springcloud/springcloud-eureka/博客内容介绍/springcloud-eureka-chapter-8.SpringCloud-Eureka二进制包搭建Kubernetes.md",
                  },
              ]
          },
          {
              text: "章节内容合集",
              icon:"repo",
              collapsable: true,
              children:[
                  {
                      text: "",
                      link:"/blogs/backend/springcloud/springcloud-eureka/springcloud-eureka.md#intro",
                      icon:"note",
                  },
                  {
                      text:"1.安装SpringCloud-Eureka操作系统",
                      icon:"article",
                      collapsable: true,
                      link:"/blogs/backend/springcloud/springcloud-eureka/springcloud-eureka.md#1.",
                  },
                  {
                      text:"2.SpringCloud-Eureka操作系统初始设置",
                      icon:"article",
                      collapsable: true,
                      link:"/blogs/backend/springcloud/springcloud-eureka/springcloud-eureka.md#2.",
                  },
                  {
                      text:"3.SpringCloud-Eureka搭建基础开发环境",
                      icon:"article",
                      collapsable: true,
                      link:"/blogs/backend/springcloud/springcloud-eureka/springcloud-eureka.md#3.",
                  },
                  {
                      text:"4.SpringCloud-EurekaCentos搭建docker",
                      icon:"article",
                      collapsable: true,
                      link:"/blogs/backend/springcloud/springcloud-eureka/springcloud-eureka.md#4.",
                  },
                  {
                      text:"5.SpringCloud-EurekaCentos搭建Rancher",
                      icon:"article",
                      collapsable: true,
                      link:"/blogs/backend/springcloud/springcloud-eureka/springcloud-eureka.md#5.",
                  },
                  {
                      text:"6.SpringCloud-EurekaCentos搭建Minikube",
                      icon:"article",
                      collapsable: true,
                      link:"/blogs/backend/springcloud/springcloud-eureka/springcloud-eureka.md#6.",
                  },
                  {
                      text:"7.SpringCloud-Eurekakubeadm搭建Kubernetes",
                      icon:"article",
                      collapsable: true,
                      link:"/blogs/backend/springcloud/springcloud-eureka/springcloud-eureka.md#7.",
                  },
                  {
                      text:"8.SpringCloud-Eureka二进制包搭建Kubernetes",
                      icon:"article",
                      collapsable: true,
                      link:"/blogs/backend/springcloud/springcloud-eureka/springcloud-eureka.md#8.",
                  },
              ]
          },
      ]
  },
]);
