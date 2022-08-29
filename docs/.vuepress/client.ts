import { defineClientConfig } from "@vuepress/client";
//导入xxx.vue报错 https://blog.csdn.net/longan_97/article/details/124549562
import Markmap from "./components/Markmap.vue";
import ScrollIntoPageView from "./components/ScrollIntoPageView.vue";
import HideSideBar from "./components/HideSideBar.vue";
import Popup from "./components/Popup.vue";
import Banner from "./components/Banner.vue";
import Pure from "./components/Pure.vue";
import JumpToChapter from "./components/JumpToChapter.vue";
import JumpToOriginal from "./components/JumpToOriginal.vue";

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.component("Markmap", Markmap);
    app.component("ScrollIntoPageView", ScrollIntoPageView);
    app.component("HideSideBar", HideSideBar);
    app.component("Popup", Popup);
    app.component("Banner", Banner);
    app.component("Pure", Pure);
    app.component("JumpToChapter", JumpToChapter);
    app.component("JumpToOriginal", JumpToOriginal);
  },
});
