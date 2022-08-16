import { defineUserConfig } from "vuepress";
import theme from "./theme";
import { path } from "@vuepress/utils";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  //博客语言环境
  lang: "zh-CN",
  title: "此生挚爱万宝路",
  head: [
    [
        'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
        { rel: 'icon', href: '/images/headshot.jpg' }
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/c/font_3564358_nrgvwqy4sv.css",
      },
    ],
  ],
  description: "此生挚爱万宝路的技术博客",

  base:"/",
  theme,
  markdown: {
    //vuepress解析md标题的深度
    headers: {
      level : [1,2,3,4,5]
    },
  },
  //自定义的vue组件的别名
  alias: {
    "@Markmap": path.resolve(__dirname, "components/Markmap.vue"),
    "@ScrollIntoView": path.resolve(__dirname, "components/ScrollIntoView.vue"),
    "@Popup": path.resolve(__dirname, "components/Popup.vue"),
    "@Banner": path.resolve(__dirname, "components/Banner.vue"),
    "@JumpToChapter": path.resolve(__dirname, "components/JumpToChapter.vue"),
    "@JumpToOriginal": path.resolve(__dirname, "components/JumpToOriginal.vue"),
    //特别注意：下面这一行代码一定不能分开写到多行，否则影响sed执行效果
    "@theme-hope/module/navbar/components/RepoLink": path.resolve(__dirname,"components/Pure.vue"),
  },
  //开启PWA时将这个值设置为false
  shouldPrefetch: false,
});

