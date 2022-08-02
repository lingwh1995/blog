import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-v2-demo.mrhope.site",
  //全局的博主信息，所有文章如果不指定authoer就使用下面配置的信息
  author: {
    name: "lingwh",
    url: "https://github.com/lingwh1995"
  },
  darkmode: "toggle",
  //启用这个会在页面右侧展示出文章标题信息
  toc: true,
  iconAssets: "iconfont",
  //是否显示全屏按钮
  fullscreen: true,
  //主题色配置，配置了这个之后，会显出出切换不同主题色的按钮
  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },
  //是否开启纯净模式，纯净模式会禁用一些花哨的动画以及一些色彩，只提供功能
  pure: false,

  // 默认为 GitHub. 同时也可以是一个完整的 URL
  repo: "https://gitee.com/lingwh1995",
  // 自定义仓库链接文字。默认从 `repo` 中自动推断为
  // "GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
  repoLabel: "GitHub",
  // 是否在导航栏内显示仓库链接，默认为 `true`
  repoDisplay: true,

  docsDir: "demo/src",

  // navbar:如果要禁止显示navbar，将值配置为false
  navbar: navbar,
  
  //配置导航栏导航条目的位置
  navbarLayout: {
    left: ["Brand"],
    center: ["Links"],
    right: ["Language", "Repo", "Outlook", "Search"],
  },
  
  // sidebar
  sidebar: sidebar,

  //非首页页面页脚显示文字
  footer: "Copyright 2021 © <a href='https://github.com/lingwh1995' target='_blank'>lingwh</a>",
  //是否开启显示页脚
  displayFooter: true,

  //页面信息配置
  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],
  
  /**
   * 博客主页配置
   */
  //博客主页个人信息处头像
  logo: "/images/headshot.jpg",
  //博客主页个人简介信息
  blog: {
    //博客主页个人简介信息处博主名称
    name: "lingwh",
    description: "<h4 style='color:#4ABF8A;'>lingwh.walkman@hotmail.com</h4>",
    //intro: "/intro.html",
    medias: {
      Gitee: "https://gitee.com/lingwh1995",
      GitHub: "https://github.com/lingwh1995",
    },
    sidebarDisplay: "no",
    //每页显示的文章数目
    articlePerPage: 5,
    //是否将博客首页个人信息处头像裁剪成圆形
    roundAvatar: true,
    //点击博客主页时间线后出来的页面最顶部的文字
    timeline: "时间线", 
  },

  //文章加密配置
  encrypt: {
    config: {
      "/encrypt.html": ["123456"],
    },
  },

  /**
   * 页面元数据
   */
  //是否在文章页面底部左侧显示 编辑此页按钮
  editLink: false,
  //是否在文章页面底部右侧显示 文章的贡献者
  contributors: true,
  //插件配置
  plugins: {    
    blog: {
      //是否自动抽取文章摘要
      autoExcerpt: true,
    },

    // If you don't need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
      /**
       * Using Giscus
       */
      /*
      comment:true,
      provider: "Giscus",
      repo: "lingwh1995/blog-giscus",
      repoId: "R_kgDOHwPu-A",
      category: "Announcements",
      categoryId: "DIC_kwDOHwPu-M4CQkWT"
      */

      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      provider: "Waline",
      serverURL: "https://waline-test-90exfa19s-lingwh1995.vercel.app/",
    },
    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
    /**
    * 版权保护
    * triggerWords：触发版权数目的最小复制字数
    * global：是否全局开启版权保护
    * disableCopy 是否禁止复制文章，fasle：可以复制，true:不可以复制
    * disableSelection: 是否禁止页面文字选择 false:可以选中 true；无法选中
    * 
    * 
    */
    copyright: {
      author: "lingwh",
      hostname: "https://github.com/lingwh1995",
      license: "Copyright 2021 © open linux lingwh",
      triggerWords: 50,
      global: true,
      disableCopy: true,
      disableSelection: true
    }
  },
  // 默认值: true
  activeHeaderLinks: true,
});
