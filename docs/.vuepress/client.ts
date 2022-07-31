// .vuepress/client.ts
import { defineClientConfig } from "@vuepress/client";
//导入xxx.vue报错 https://blog.csdn.net/longan_97/article/details/124549562
import MyComponent from "./components/MyComponent.vue";

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.component("MyComponent", MyComponent);
  },
});
