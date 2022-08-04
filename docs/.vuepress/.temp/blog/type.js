export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-47b2c842","v-54d40435","v-5a1b8662","v-871a354c","v-bda10792","v-69d1afba","v-6645be0a","v-e7846bea","v-f8cf1a96","v-4e4dd089","v-053b7631"]}},"encrypted":{"/":{"path":"/encrypted/","keys":[]}},"slide":{"/":{"path":"/slide/","keys":[]}},"star":{"/":{"path":"/star/","keys":["v-54d40435","v-871a354c","v-bda10792","v-69d1afba","v-6645be0a","v-e7846bea","v-f8cf1a96","v-4e4dd089","v-053b7631"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-54d40435","v-5a1b8662","v-871a354c","v-47b2c842","v-bda10792","v-69d1afba","v-6645be0a","v-e7846bea","v-f8cf1a96","v-4e4dd089","v-053b7631"]}}}

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
