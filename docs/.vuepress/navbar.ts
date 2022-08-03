import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "个人主页",
    icon: "hacker",
    link: '/'
  },
  {
    text: "博客主页",
    icon: "blog",
    link: '/blog.md'
  },
  {
    text: "放映厅",
    icon: "creative",
    link: '/cinema.md'
  },
  {
    text: "后端",
    icon: "java",
    children: [
      {
        text: "springboot",
        children: [
          { 
            text: "springboot-1", 
            link: "/posts/article9"
          },
          { text: "springboot-2", 
            link: "/backend/springboot/article2" 
          },
        ],
      },
      {
        text: "springcloud",
        children: [
          {
            text: "springcloud-eureka",
            link: "/blogs/backend/springcloud/springcloud-eureka.md",
          },
          {
            text: "springcloud-zookeeper",
            link: "/backend/springcloud/article/article6",
          },
          {
            text: "springcloud-consul",
            link: "/backend/springcloud/article/article6",
          },
          {
            text: "springcloud-alibaba",
            link: "/backend/springcloud/article/article6",
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
        text: 'ECMAScript 5', 
        link: '/xxx'
      },
      { 
        text: 'ECMAScript 6', 
        link: '/xxx'
      },
      { 
        text: 'Framework', 
        link: '/xxx'
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
    text: "环境搭建",
    icon: "software",
    children: [
      { 
        text: 'centos',
        children: [
          { text: "centos7",
          link: '/blogs/environment/centos/centos7/centos7.md'
          },
        ],
      },
      { 
        text: 'windows', 
        link: '/blogs/environment/windows/windows.md'
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
