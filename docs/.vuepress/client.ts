// .vuepress/client.ts
import { defineClientConfig } from "@vuepress/client";
//导入xxx.vue报错 https://blog.csdn.net/longan_97/article/details/124549562
import Markmap from "./components/Markmap.vue";
import ScrollIntoView from "./components/ScrollIntoView.vue";
import Popup from "./components/Popup.vue";

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.component("Markmap", Markmap);
    app.component("ScrollIntoView", ScrollIntoView);
    app.component("Popup", Popup);
  },
});
