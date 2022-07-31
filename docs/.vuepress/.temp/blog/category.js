export const categoryMap = {"category":{"/":{"path":"/category/","map":{"环境搭建":{"path":"/category/%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA/","keys":["v-185b2644"]}}}},"tag":{"/":{"path":"/tag/","map":{"linux":{"path":"/tag/linux/","keys":["v-185b2644"]},"安装jdk":{"path":"/tag/%E5%AE%89%E8%A3%85jdk/","keys":["v-185b2644"]},"安装maven":{"path":"/tag/%E5%AE%89%E8%A3%85maven/","keys":["v-185b2644"]}}}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  })
}
