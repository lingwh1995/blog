export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-9b26189c","v-4fc49975","v-a019f47a","v-a14300c2","v-47b2c842","v-2ea861fb","v-8f1460a0","v-13afedaa","v-f20c1198","v-8e849028","v-57ce5848","v-c88808ea","v-18ab4224","v-55680cba"]}},"encrypted":{"/":{"path":"/encrypted/","keys":[]}},"slide":{"/":{"path":"/slide/","keys":[]}},"star":{"/":{"path":"/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":["v-9b26189c","v-4fc49975","v-a019f47a","v-a14300c2","v-47b2c842","v-2ea861fb","v-8f1460a0","v-13afedaa","v-f20c1198","v-8e849028","v-57ce5848","v-c88808ea","v-18ab4224","v-55680cba"]}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogType) {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  })
}
