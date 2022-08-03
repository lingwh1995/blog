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
        text: "博客内容介绍",
        link:"docs/blogs/environment/centos/centos7/shardings/centos7-chapter-0.8.二进制包搭建Kubernetes.md",
        icon:"note",
      },
      {
        text:"1.安装Linux操作系统",
        link:"docs/blogs/environment/centos/centos7/shardings/centos7-chapter-1.安装Linux操作系统.md",
        icon:"note",
      },
      {
        text:"2.Linux操作系统初始设置",
        link:"docs/blogs/environment/centos/centos7/shardings/centos7-chapter-2.Linux操作系统初始设置.md",
        icon:"note",
      },
      {
        text:"3.搭建基础开发环境",
        link:"docs/blogs/environment/centos/centos7/shardings/centos7-chapter-3.搭建基础开发环境.md",
        icon:"note",
      },
      {
        text:"4.Centos搭建docker",
        link:"docs/blogs/environment/centos/centos7/shardings/centos7-chapter-4.Centos搭建docker.md",
        icon:"note",
      },
      {
        text:"5.Centos搭建Rancher",
        link:"docs/blogs/environment/centos/centos7/shardings/centos7-chapter-5.Centos搭建Rancher.md",
        icon:"note",
      },
      {
        text:"6.Centos搭建Minikube",
        link:"docs/blogs/environment/centos/centos7/shardings/centos7-chapter-6.Centos搭建Minikube.md",
        icon:"note",
      },
      {
        text:"7.kubeadm搭建Kubernetes",
        link:"docs/blogs/environment/centos/centos7/shardings/centos7-chapter-7.kubeadm搭建Kubernetes.md",
        icon:"note",
      },
      {
        text:"8.二进制包搭建Kubernetes",
        link:"docs/blogs/environment/centos/centos7/shardings/centos7-chapter-8.二进制包搭建Kubernetes.md",
        icon:"note",
      },
      {
        text: "9.一次阅读全部内容",
        link: "docs/blogs/environment/centos/centos7/centos7.md",
        icon:"folder",
      }
    ],
  },




]);
