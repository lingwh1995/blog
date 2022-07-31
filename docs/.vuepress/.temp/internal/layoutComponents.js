import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("D:/repository/workspace/VSCode/GITHUB/blog-vuepress/node_modules/vuepress-theme-hope/lib/client/layouts/404.js")),
  "Layout": defineAsyncComponent(() => import("D:/repository/workspace/VSCode/GITHUB/blog-vuepress/node_modules/vuepress-theme-hope/lib/client/layouts/Layout.js")),
  "Slide": defineAsyncComponent(() => import("D:/repository/workspace/VSCode/GITHUB/blog-vuepress/node_modules/vuepress-theme-hope/lib/client/layouts/Slide.js")),
  "Blog": defineAsyncComponent(() => import("D:/repository/workspace/VSCode/GITHUB/blog-vuepress/node_modules/vuepress-theme-hope/lib/client/module/blog/layouts/Blog.js")),
}
