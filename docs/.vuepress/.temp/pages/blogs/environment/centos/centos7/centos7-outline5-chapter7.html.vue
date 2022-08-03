<template><div><h1 id="_7-kubeadm搭建kubernetes" tabindex="-1"><a class="header-anchor" href="#_7-kubeadm搭建kubernetes" aria-hidden="true">#</a> 7.kubeadm搭建Kubernetes</h1>
<h2 id="_7-1-特别说明" tabindex="-1"><a class="header-anchor" href="#_7-1-特别说明" aria-hidden="true">#</a> 7.1.特别说明</h2>
<h2 id="_7-2-所有节点设置对应主机名" tabindex="-1"><a class="header-anchor" href="#_7-2-所有节点设置对应主机名" aria-hidden="true">#</a> 7.2.所有节点设置对应主机名</h2>
<h2 id="_7-3-所有节点修改hosts" tabindex="-1"><a class="header-anchor" href="#_7-3-所有节点修改hosts" aria-hidden="true">#</a> 7.3.所有节点修改hosts</h2>
<h2 id="_7-4-所有节点关闭selinux" tabindex="-1"><a class="header-anchor" href="#_7-4-所有节点关闭selinux" aria-hidden="true">#</a> 7.4.所有节点关闭SELinux</h2>
<h2 id="_7-5-所有节点关闭防火墙" tabindex="-1"><a class="header-anchor" href="#_7-5-所有节点关闭防火墙" aria-hidden="true">#</a> 7.5.所有节点关闭防火墙</h2>
<h2 id="_7-6-所有节点安装docker" tabindex="-1"><a class="header-anchor" href="#_7-6-所有节点安装docker" aria-hidden="true">#</a> 7.6.所有节点安装docker</h2>
<h2 id="_7-7-所有节点安装k8s所需组件" tabindex="-1"><a class="header-anchor" href="#_7-7-所有节点安装k8s所需组件" aria-hidden="true">#</a> 7.7.所有节点安装k8s所需组件</h2>
<h2 id="_7-8-所有节点启动kubelet和docker" tabindex="-1"><a class="header-anchor" href="#_7-8-所有节点启动kubelet和docker" aria-hidden="true">#</a> 7.8.所有节点启动kubelet和docker</h2>
<h2 id="_7-9-所有关闭swap" tabindex="-1"><a class="header-anchor" href="#_7-9-所有关闭swap" aria-hidden="true">#</a> 7.9.所有关闭swap</h2>
<h2 id="_7-10-用kubeadm-初始化集群" tabindex="-1"><a class="header-anchor" href="#_7-10-用kubeadm-初始化集群" aria-hidden="true">#</a> 7.10.用kubeadm 初始化集群</h2>
<h2 id="_7-11-其他节点连接到master节点" tabindex="-1"><a class="header-anchor" href="#_7-11-其他节点连接到master节点" aria-hidden="true">#</a> 7.11.其他节点连接到Master节点</h2>
<h2 id="_7-12-在master节点上查看集群" tabindex="-1"><a class="header-anchor" href="#_7-12-在master节点上查看集群" aria-hidden="true">#</a> 7.12.在master节点上查看集群</h2>
<h2 id="_7-13-安装网络插件" tabindex="-1"><a class="header-anchor" href="#_7-13-安装网络插件" aria-hidden="true">#</a> 7.13.安装网络插件</h2>
<h2 id="_7-14-在master上查看集群节点" tabindex="-1"><a class="header-anchor" href="#_7-14-在master上查看集群节点" aria-hidden="true">#</a> 7.14.在master上查看集群节点</h2>
<h2 id="_7-15-启动故障解决" tabindex="-1"><a class="header-anchor" href="#_7-15-启动故障解决" aria-hidden="true">#</a> 7.15.启动故障解决</h2>
<h2 id="_7-16-基础命令" tabindex="-1"><a class="header-anchor" href="#_7-16-基础命令" aria-hidden="true">#</a> 7.16.基础命令</h2>
<h2 id="_7-17-部署第一个程序到k8s中" tabindex="-1"><a class="header-anchor" href="#_7-17-部署第一个程序到k8s中" aria-hidden="true">#</a> 7.17.部署第一个程序到k8s中</h2>
<h2 id="_7-18-可视化面板kuboard" tabindex="-1"><a class="header-anchor" href="#_7-18-可视化面板kuboard" aria-hidden="true">#</a> 7.18.可视化面板kuboard</h2>
</div></template>
