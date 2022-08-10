export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-47b2c842","v-871a354c","v-053b7631","v-4e4dd089","v-f8cf1a96","v-e7846bea","v-6645be0a","v-69d1afba","v-d9d17798","v-0d8f245b"]}},"encrypted":{"/":{"path":"/encrypted/","keys":[]}},"slide":{"/":{"path":"/slide/","keys":[]}},"star":{"/":{"path":"/star/","keys":["v-47b2c842"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-871a354c","v-053b7631","v-4e4dd089","v-f8cf1a96","v-e7846bea","v-6645be0a","v-69d1afba","v-d9d17798","v-47b2c842","v-0d8f245b"]}}}

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
