import { defineUserConfig } from "vuepress";
import theme from "./theme";
import { path } from "@vuepress/utils";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
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
    headers: {
      level : [1,2,3,4,5]
    },
  },
  alias: {
    "@Markmap": path.resolve(__dirname, "components/Markmap.vue"),
    "@ScrollIntoView": path.resolve(__dirname, "components/ScrollIntoView.vue"),
  },
  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    orange: "#fb9b5f",
    grey11: "#1c1c1c",
    darkblue: "#00008B",
    darkcyan: "#008B8B",
    red2: "#EE0000",
    dodgerblue: "#1E90FF",
    steelblue: "#4682B4"      
  },
  plugins: [
    mdEnhancePlugin({
      presentation: true,
      // 添加 `@src` 别名支持
      include: {
        getPath: (file) => {
          if (file.startsWith("@src"))
            return file.replace("@src", path.resolve(__dirname, "."));
          return file;
        },
      },
      container: true,
    }),
  ],
});

