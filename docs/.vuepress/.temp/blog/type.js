export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-a019f47a","v-47b2c842","v-c0f26340","v-7f66e0c3","v-69cf1afd","v-181a1557","v-871a354c","v-053b7631","v-0ec41535","v-761c876e","v-6f1df080","v-6645be0a","v-69d1afba","v-bda10792","v-55680cba","v-0d8f245b","v-0d502c98","v-30dcdb84"]}},"encrypted":{"/":{"path":"/encrypted/","keys":[]}},"slide":{"/":{"path":"/slide/","keys":[]}},"star":{"/":{"path":"/star/","keys":["v-a019f47a","v-47b2c842"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-a019f47a","v-47b2c842","v-c0f26340","v-7f66e0c3","v-69cf1afd","v-181a1557","v-871a354c","v-053b7631","v-0ec41535","v-761c876e","v-6f1df080","v-6645be0a","v-69d1afba","v-bda10792","v-55680cba","v-0d8f245b"]}}}

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
