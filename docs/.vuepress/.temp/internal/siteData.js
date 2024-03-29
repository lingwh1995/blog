export const siteData = JSON.parse("{\"base\":\"/pure/\",\"lang\":\"zh-CN\",\"title\":\"此生挚爱万宝路\",\"description\":\"此生挚爱万宝路的技术博客\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/images/headshot.jpg\"}],[\"link\",{\"rel\":\"stylesheet\",\"href\":\"//at.alicdn.com/t/c/font_3564358_fdvgdum1r.css\"}],[\"link\",{\"rel\":\"manifest\",\"href\":\"/pure/manifest.webmanifest\",\"crossorigin\":\"use-credentials\"}],[\"meta\",{\"name\":\"theme-color\",\"content\":\"#46bd87\"}],[\"link\",{\"rel\":\"apple-touch-icon\",\"href\":\"/images/pwa/128.png\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-capable\",\"content\":\"yes\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-status-bar-style\",\"content\":\"black\"}],[\"meta\",{\"name\":\"msapplication-TileImage\",\"content\":\"/images/pwa/128.png\"}],[\"meta\",{\"name\":\"msapplication-TileColor\",\"content\":\"#46bd87\"}],[\"meta\",{\"name\":\"viewport\",\"content\":\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
