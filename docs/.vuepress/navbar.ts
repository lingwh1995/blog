import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "个人主页",
    icon: "hacker",
    link: "/index.md"
  },
  {
    text: "博客主页",
    icon: "blog",
    link: "/blog.md"
  },
  {
    text: "放映厅",
    icon: "creative",
    link: "/cinema.md"
  },
  {
    text: "后端",
    icon: "java",
    children: [
      {
        text: "springcloud",
        children: [
          {
            text: "springcloud-eureka",
            icon: "cloud",
            link: "/blogs/backend/springcloud/springcloud-eureka/shardings/springcloud-eureka-chapter-0.博客内容介绍.md",
          },
          {
            text: "springcloud-zookeeper",
            icon: "cloud",
            link: "/blogs/backend/springcloud/springcloud-eureka/shardings/springcloud-eureka-chapter-0.博客内容介绍.md",
          },
          {
            text: "springcloud-consul",
            icon: "cloud",
            link: "/blogs/backend/springcloud/springcloud-eureka/shardings/springcloud-eureka-chapter-0.博客内容介绍.md",
          },
          {
            text: "springcloud-alibaba",
            icon: "cloud",
            link: "/blogs/backend/springcloud/springcloud-eureka/shardings/springcloud-eureka-chapter-0.博客内容介绍.md",
          }
        ],
      }
    ],
  },
  {
    text: "通用技能",
    icon: "stack",
    children: [
      {
        text: "设计模式",
        children: [
          {
            text: "Java语言构造",
            icon: "java",
            link: "/blogs/general/designpattern/designpattern-java/shardings/designpattern-java-chapter-0.博客内容介绍.md",
          },
        ],
      },
      {
        text: "数据结构",
        children: [
          {
            text: "Java语言构造",
            icon: "java",
            link: "/blogs/general/datastructure/datastructure-java/shardings/datastructure-java-chapter-0.博客内容介绍.md",
          },
        ],
      }
    ],
  },
  {
    text: "环境搭建",
    icon: "shell",
    children: [
      {
        text: "centos",
        children: [
          {
            text: "centos7",
            icon: "centos",
            link: "/blogs/environment/centos/centos7/shardings/centos7-chapter-0.博客内容介绍.md",
          },
        ],
      },
      {
        text: "windows",
        children: [
          {
            text: "windows server2016",
            icon: "windows",
            link: "/blogs/environment/windows/windows-server2016/shardings/windows-server2016-chapter-0.博客内容介绍.md",
          },
        ],
      }
    ],
  },
  {
    text: "基础支持",
    icon: "tool",
    children: [
      {
        text: "网站收藏",
        children: [
          {
            text: "工具类网站",
            icon: "repair",
            link: "/blogs/basicsupprot/tools.md",
          },
          {
            text: "知识类网站",
            icon: "study",
            link: "/blogs/basicsupprot/knowledge.md",
          },
          {
            text: "开发资源",
            icon: "dev",
            link: "/blogs/basicsupprot/devresource.md",
          },
        ],
      },
      {
        text: "工具软件",
        icon: "windows",
        link: "/blogs/environment/windows/windows.md",
      }
    ],
  },
  {
    text: "GITHUB",
    icon: "github",
    link: "https://github.com/lingwh1995",
  },
  {
    text: "GITEE",
    icon: "gitee",
    link: "https://gitee.com/lingwh1995",
  },
]);
