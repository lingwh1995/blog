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
    ]
  ],
  description: "此生挚爱万宝路的技术博客",

  base: "/",
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
  },
});

