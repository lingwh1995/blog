export const data = JSON.parse("{\"key\":\"v-35f5db9e\",\"path\":\"/blog.html\",\"title\":\"博客主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"icon\":\"home\",\"title\":\"博客主页\",\"heroText\":\" \",\"bgImage\":\"/images/blogbg-08.jpg\",\"heroFullScreen\":false,\"layout\":\"Blog\",\"copyright\":false,\"summary\":\"\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-v2-demo.mrhope.site/blog.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"此生挚爱万宝路\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"博客主页\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[],\"readingTime\":{\"minutes\":0.07,\"words\":20},\"copyright\":\"著作权归lingwh所有\\n基于Copyright 2021 © open linux lingwh协议\\n原文链接：https://github.com/lingwh1995/blog.html\",\"filePathRelative\":\"blog.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
