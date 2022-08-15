import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";
import { path } from "@vuepress/utils";

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
  //主题色配置，配置了这个之后，会显出切换不同主题色的按钮
  themeColor: {
    steelblue: "#336699",
    grey: "#1c1c1c",
    darkblue: "#00008B", 
    orange: "#DE4815",
    darkcyan: "#008B8B",
    skyblue: "#2196f3",
    red: "#EE0000"
  },
  //是否开启纯净模式，开启后切换主题色的功能将被禁用
  pure: false,

  // 默认为 GitHub. 同时也可以是一个完整的 URL
  repo: "https://gitee.com/lingwh1995/blog",
  // 自定义仓库链接文字。默认从 `repo` 中自动推断为
  // "GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
  repoLabel: "Github",
  // 是否在导航栏内显示仓库链接，默认为 `true`
  repoDisplay: true,  

  //暂时不知道是干什么的
  docsDir: "blog/docs",

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

  //全局关闭显示copyright，使用footer信息来充当copyright信息
  copyright: false,
  //非首页页面页脚显示文字
  footer: "Copyright 2021 © lingwh 欢迎访问",
  //是否开启显示页脚
  displayFooter: true,
  
  //页面信息配置
  pageInfo: ["Author", "Original", "Date", "ReadingTime", "Word", "Category", "Tag"],
  
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
    //博客主页文章列表文章主要内容简介下面的显示的都有什么信息，配置顺序决定显示顺序
    articleInfo: ["Author", "Original", "Date", "ReadingTime", "Word", "Category", "Tag", "PageView"],
  },

  //文章加密配置
  encrypt: {
    config: {
      "/encrypt.html": ["123456"],
    },
  },

  //配置是否启用文章最顶部的路径导航
  breadcrumb: true,
  //是否在路径导航信息中显示图标
  breadcrumbIcon: true,

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
      serverURL: "https://discuss-waline-qzh21gpbj-lingwh1995.vercel.app/",
      meta: ['nick', 'mail', 'link'],
      //是否waline的版权信息
      copyright: false
    },
    /**
     * 是否启用vuepress自带组件
     * Badge 开启在MD文件中支持自定义颜色的徽章功能
     * CodePen 开启在MD文件中嵌入演示功能
     * FontIcon 开启在MD文件中嵌入FontIcon功能
     * PDF 开启在MD文件中嵌入PDF功能
     * StackBlitz 开启在MD文件中嵌入StackBlitz代码演示功能
     * YouTube 开启在MD文件中嵌入YouTube视频功能
     */
    components: ["Badge","FontIcon"],
    mdEnhance: {
      //启用全部的md增强功能
      //enableAll: true,
      //根据需要启动md增强功能
      //启用幻灯片支持
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      //启用导入文件功能，并添加 `@src` 别名支持
      include: {
        getPath: (file) => {
          if (file.startsWith("@src"))
            return file.replace("@src", path.resolve(__dirname, "."));
          return file;
        },
      },
      //启用标记功能，使用 == == 进行标记。请注意两边需要有空格
      mark: true,
      //启用对添加提示、注释、信息、注意、警告和详情自定义容器的支持
      container: true,
      vpre: true,
      /**
       * 启用自自定义对齐，语法
       * 
       *  ::: center/middle/righe
       *  重大的变动。
       *  :::
       */
      align: true,
      //启用属性增强，在md文件中添加属性，生成的dom上就有属性
      attrs: true,
      //是否启用任务列表
      tasklist: true,
      //启用懒加载md中的图片
      lazyLoad: true,
      //配置你的 playground
      playground: {
        mode: "external", // 使用外置模式
        external: {
          base: "https://sfc.vuejs.org/", // 使用 vue sfc playground.
          defaultImportsMap: "./import-map.json",
        },
        internal: {
          defaultImportsMap: "import-map.json",
          showCode: false, // 不显示代码
          showCompileOutput: false, // 不显示 js, css, ssr 面板
          showImportMap: true, // 显示 import map
          clearConsole: false, // 不清空控制台
        },
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
      triggerWords: 200,
      global: true,
      disableCopy: false,
      disableSelection: false
    },
    /**是否开启seo*/
    seo: true,
    /**PWA:提供渐进式 Web 应用程序支持 */
    pwa: {
      //是否在 Service Worker 首次成功注册时显示 PWA 安装按钮
      showInstall: true,
      favicon: "/images/headshot.jpg",
      //PWA应用程序图标
      manifest: {
        icons: [{src: "/images/headshot.jpg",sizes: "192x192",type: "image/jpg"}],
      },
      //允许缓存的最大大小 (以 KB 为单位)
      maxSize: 2048,
      //PWA应用主题色，默认绿色
      themeColor: "#46bd87",
      //是否缓存图片
      cachePic: false,
      //是否缓存主页和 404 错误页之外的 HTML 文件
      cacheHTML: false,
      //图片允许缓存的最大大小 (以 KB 为单位)
      maxPicSize: 2048,
      //显示更新内容可用提示，并允许用户立即刷新。当新的 SW 成功注册后，将转为更新内容就绪弹窗
      update: "hint",
      install: "安装我吧"
    }
  },
  //当用户通过滚动查看页面的不同部分时，嵌套的标题链接和 URL 中的 Hash 值会实时更新，默认值: true,没发现有什么用
  activeHeaderLinks: true,
  //切换页面时的进度条
  nprogress: true,
});
