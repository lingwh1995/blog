export const categoryMap = {"category":{"/":{"path":"/category/","map":{"环境搭建":{"path":"/category/%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA/","keys":["v-47b2c842","v-bda10792","v-69d1afba","v-6645be0a","v-e7846bea","v-f8cf1a96","v-4e4dd089","v-053b7631","v-871a354c"]}}}},"tag":{"/":{"path":"/tag/","map":{"linux":{"path":"/tag/linux/","keys":["v-47b2c842","v-bda10792","v-69d1afba","v-6645be0a","v-e7846bea","v-f8cf1a96","v-4e4dd089","v-053b7631","v-871a354c"]},"安装jdk":{"path":"/tag/%E5%AE%89%E8%A3%85jdk/","keys":["v-47b2c842"]},"安装maven":{"path":"/tag/%E5%AE%89%E8%A3%85maven/","keys":["v-47b2c842"]},"安装Linux操作系统":{"path":"/tag/%E5%AE%89%E8%A3%85linux%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/","keys":["v-bda10792"]},"Linux操作系统初始设置":{"path":"/tag/linux%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E5%88%9D%E5%A7%8B%E8%AE%BE%E7%BD%AE/","keys":["v-69d1afba"]},"搭建基础开发环境":{"path":"/tag/%E6%90%AD%E5%BB%BA%E5%9F%BA%E7%A1%80%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83/","keys":["v-6645be0a"]},"Centos搭建docker":{"path":"/tag/centos%E6%90%AD%E5%BB%BAdocker/","keys":["v-e7846bea"]},"Centos搭建Rancher":{"path":"/tag/centos%E6%90%AD%E5%BB%BArancher/","keys":["v-f8cf1a96"]},"Centos搭建Minikube":{"path":"/tag/centos%E6%90%AD%E5%BB%BAminikube/","keys":["v-4e4dd089"]},"kubeadm搭建Kubernetes":{"path":"/tag/kubeadm%E6%90%AD%E5%BB%BAkubernetes/","keys":["v-053b7631"]},"二进制包搭建Kubernetes":{"path":"/tag/%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%8C%85%E6%90%AD%E5%BB%BAkubernetes/","keys":["v-871a354c"]}}}}}

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
