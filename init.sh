#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

#设置git，使git在clone可以创建过长的文件名
git config --global core.longpaths true

#下载springcloud-eureka项目
cd docs/blogs/backend/springcloud
rm -rf springcloud-eureka
git clone https://gitee.com/lingwh1995/springcloud-eureka.git


