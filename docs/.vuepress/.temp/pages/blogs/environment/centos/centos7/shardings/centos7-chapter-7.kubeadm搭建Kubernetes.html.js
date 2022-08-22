export const data = JSON.parse("{\"key\":\"v-053b7631\",\"path\":\"/blogs/environment/centos/centos7/shardings/centos7-chapter-7.kubeadm%E6%90%AD%E5%BB%BAKubernetes.html\",\"title\":\"在Centos7上搭建开发环境-7.kubeadm搭建Kubernetes\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"在Centos7上搭建开发环境-7.kubeadm搭建Kubernetes\",\"description\":\"本章节涉及主要内容有：特别说明,所有节点设置对应主机名,所有节点修改hosts,所有节点关闭SELinux,所有节点关闭防火墙,所有节点安装docker,所有节点安装k8s所需组件,所有节点启动kubelet和docker,所有关闭swap,用kubeadm 初始化集群,其他节点连接到Master节点,在master节点上查看集群,安装网络插件,在master上查看集群节点,启动故障解决,基础命令,部署测试程序,可视化面板kuboard,具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试，可直接复制运行即可。\",\"headerDepth\":4,\"isOriginal\":true,\"category\":[\"环境搭建\"],\"star\":false,\"tag\":[\"kubeadm搭建k8s集群\",\"docker\",\"k8s网络插件\",\"k8s可视化\",\"etcd集群\",\"kube-apiserver\",\"kube-controller-manager\",\"kube-scheduler\",\"kubectl\",\"nginx\",\"keepalive\",\"高可用\"],\"date\":\"2020-02-15T00:00:00.000Z\",\"head\":[[\"meta\",{\"name\":\"keywords\",\"content\":\"本章节涉及主要内容有：特别说明,所有节点设置对应主机名,所有节点修改hosts,所有节点关闭SELinux,所有节点关闭防火墙,所有节点安装docker,所有节点安装k8s所需组件,所有节点启动kubelet和docker,所有关闭swap,用kubeadm 初始化集群,其他节点连接到Master节点,在master节点上查看集群,安装网络插件,在master上查看集群节点,启动故障解决,基础命令,部署测试程序,可视化面板kuboard,具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试，可直接复制运行即可。\"}],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-v2-demo.mrhope.site/blogs/environment/centos/centos7/shardings/centos7-chapter-7.kubeadm%E6%90%AD%E5%BB%BAKubernetes.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"此生挚爱万宝路\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"在Centos7上搭建开发环境-7.kubeadm搭建Kubernetes\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"本章节涉及主要内容有：特别说明,所有节点设置对应主机名,所有节点修改hosts,所有节点关闭SELinux,所有节点关闭防火墙,所有节点安装docker,所有节点安装k8s所需组件,所有节点启动kubelet和docker,所有关闭swap,用kubeadm 初始化集群,其他节点连接到Master节点,在master节点上查看集群,安装网络插件,在master上查看集群节点,启动故障解决,基础命令,部署测试程序,可视化面板kuboard,具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试，可直接复制运行即可。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"kubeadm搭建k8s集群\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"docker\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"k8s网络插件\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"k8s可视化\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"etcd集群\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"kube-apiserver\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"kube-controller-manager\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"kube-scheduler\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"kubectl\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"nginx\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"keepalive\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"高可用\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2020-02-15T00:00:00.000Z\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":1,\"title\":\"7.kubeadm搭建Kubernetes\",\"slug\":\"_7-kubeadm搭建kubernetes\",\"children\":[{\"level\":2,\"title\":\"7.1.章节内容概述\",\"slug\":\"_7-1-章节内容概述\",\"children\":[]},{\"level\":2,\"title\":\"7.2.章节内容大纲\",\"slug\":\"_7-2-章节内容大纲\",\"children\":[]},{\"level\":2,\"title\":\"7.3.特别说明\",\"slug\":\"_7-3-特别说明\",\"children\":[]},{\"level\":2,\"title\":\"7.4.所有节点设置对应主机名\",\"slug\":\"_7-4-所有节点设置对应主机名\",\"children\":[]},{\"level\":2,\"title\":\"7.5.所有节点修改hosts\",\"slug\":\"_7-5-所有节点修改hosts\",\"children\":[]},{\"level\":2,\"title\":\"7.6.所有节点关闭SELinux\",\"slug\":\"_7-6-所有节点关闭selinux\",\"children\":[]},{\"level\":2,\"title\":\"7.7.所有节点关闭防火墙\",\"slug\":\"_7-7-所有节点关闭防火墙\",\"children\":[]},{\"level\":2,\"title\":\"7.8.所有节点安装docker\",\"slug\":\"_7-8-所有节点安装docker\",\"children\":[]},{\"level\":2,\"title\":\"7.9.所有节点安装k8s所需组件\",\"slug\":\"_7-9-所有节点安装k8s所需组件\",\"children\":[]},{\"level\":2,\"title\":\"7.10.所有节点启动kubelet和docker\",\"slug\":\"_7-10-所有节点启动kubelet和docker\",\"children\":[]},{\"level\":2,\"title\":\"7.11.所有关闭swap\",\"slug\":\"_7-11-所有关闭swap\",\"children\":[]},{\"level\":2,\"title\":\"7.12.用kubeadm 初始化集群\",\"slug\":\"_7-12-用kubeadm-初始化集群\",\"children\":[]},{\"level\":2,\"title\":\"7.13.其他节点连接到Master节点\",\"slug\":\"_7-13-其他节点连接到master节点\",\"children\":[]},{\"level\":2,\"title\":\"7.14.在master节点上查看集群\",\"slug\":\"_7-14-在master节点上查看集群\",\"children\":[]},{\"level\":2,\"title\":\"7.15.安装网络插件\",\"slug\":\"_7-15-安装网络插件\",\"children\":[]},{\"level\":2,\"title\":\"7.16.在master上查看集群节点\",\"slug\":\"_7-16-在master上查看集群节点\",\"children\":[]},{\"level\":2,\"title\":\"7.17.启动故障解决\",\"slug\":\"_7-17-启动故障解决\",\"children\":[]},{\"level\":2,\"title\":\"7.18.基础命令\",\"slug\":\"_7-18-基础命令\",\"children\":[]},{\"level\":2,\"title\":\"7.19.部署测试程序\",\"slug\":\"_7-19-部署测试程序\",\"children\":[]},{\"level\":2,\"title\":\"7.20.可视化面板kuboard\",\"slug\":\"_7-20-可视化面板kuboard\",\"children\":[]}]}],\"readingTime\":{\"minutes\":6.74,\"words\":2021},\"copyright\":\"著作权归lingwh所有\\n基于Copyright 2021 © open linux lingwh协议\\n原文链接：https://github.com/lingwh1995/blogs/environment/centos/centos7/shardings/centos7-chapter-7.kubeadm%E6%90%AD%E5%BB%BAKubernetes.html\",\"filePathRelative\":\"blogs/environment/centos/centos7/shardings/centos7-chapter-7.kubeadm搭建Kubernetes.md\",\"localizedDate\":\"2020年2月15日\"}")

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
