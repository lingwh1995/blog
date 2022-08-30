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
        text: "springboot",
        children: [
          {
            icon: "leaf",
            text: "springboot",
            link: "/xxx",
          },
        ],
      },
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
            link: "/blogs/backend/springcloud/springcloud-zookeeper/shardings/springcloud-zookeeper-chapter-0.博客内容介绍.md",
          },
          {
            text: "springcloud-consul",
            icon: "cloud",
            link: "/blogs/backend/springcloud/springcloud-consul/shardings/springcloud-consul-chapter-0.博客内容介绍.md",
          },
          {
            text: "springcloud-alibaba",
            icon: "cloud",
            link: "/blogs/backend/springcloud/springcloud-alibaba/shardings/springcloud-alibaba-chapter-0.博客内容介绍.md",
          }
        ],
      }
    ],
  },
  {
    text: "前端",
    icon: "html",
    children: [
      {
        text: "ECMAScript 5",
        link: "/xxx"
      },
      {
        text: "ECMAScript 6",
        link: "/xxx"
      },
      {
        text: "Framework",
        link: "/xxx"
      }
    ],
  },
  {
    text: "数据库",
    icon: "database",
    children: [
      {
        text: "关系型数据库",
        children: [
          {
            text: "mysql",
            icon: "mysql",
            link: "/database/relational/article1"
          },
          {
            text: "oracle",
            link: "/database/relational/article2"
          },
        ],
      },
      {
        text: "nosql",
        children: [
          { text: "monogodb",
            link: "/database/nosql/article/article5"
          },
          { text: "redis",
            link: "/database/nosql/article/article6"
          },
          { text: "etcd",
            link: "/database/nosql/article/article6"
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
            link: "/blogs/environment/centos/centos7/shardings/centos7-chapter-0.博客内容介绍.md",
          },
        ],
      },
      {
        text: "数据结构",
        children: [
          {
            text: "Java语言构造",
            icon: "java",
            link: "/blogs/environment/windows/windows-server2016/shardings/windows-server2016-chapter-0.博客内容介绍.md",
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
