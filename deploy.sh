#!/usr/bin/env sh

set -e

#引入公共的工具包
source ./enhance/lib/tools.sh
# 确保脚本抛出遇到的错误

#获取纯模式启动状态
PLUGIN_ENABLE_STATE=( $( parsePluginIni plugin-003 enable) )

#开启替换RepoLink组件为Pure组件
function beforeBuildAndDeploy() {
    if [ $PLUGIN_ENABLE_STATE == "true" ]
    then
        #放开将RepoLink组件为Pure组件的注释
        sed -i 's#/\*\(.@theme-hope/module/navbar/components/RepoLink.*,\)\*/#\1#g' docs/.vuepress/config.ts
    fi
}    

#构建代码
function build() {
    
    #删除上一次操作产生的.git文件
    rm -rf .git

    # 生成静态文件
    npm run docs:build

    # 进入生成的文件夹
    cd docs/.vuepress/dist

    # 如果是发布到自定义域名
    # echo 'www.example.com' > CNAME

    git init 
    git add -A
    git commit -m 'deploy'
}

#正常模式发布
function deployNormal() {
    #修改配置文件
    sed -i 's/pure:.*,/pure: false,/g' docs/.vuepress/theme.ts
    sed -i 's/base:.*,/base:\"\/\",/g' docs/.vuepress/config.ts
    
    #执行构建操作
    build

    echo '开始以正常模式推送到lingwh1995/lingwh1995.github.io......'
    # 如果发布到 https://<USERNAME>.github.io  USERNAME=你的用户名
    git push -f git@github.com:lingwh1995/lingwh1995.github.io.git master
    #回到上一次操作的目录
    cd -
    echo '完成以正常模式推送到lingwh1995/lingwh1995.github.io......'
}

#纯净模式发布
function deployPure() {
    echo '开始以pure模式推送到lingwh1995/pure......................'
    if [ $PLUGIN_ENABLE_STATE == "true" ]
    then
        #修改配置文件
        sed -i 's/pure:.*,/pure: true,/g' docs/.vuepress/theme.ts
        sed -i 's/base:.*,/base:\"\/pure\/\",/g' docs/.vuepress/config.ts

        #执行构建操作
        build
        
        # 如果发布到 https://<USERNAME>.github.io/<REPO>  REPO=github上的项目,需要开启gitpages服务
        git push -f git@github.com:lingwh1995/pure.git master
        #回到上一次操作的目录
        cd -
    fi
    echo '完成以pure模式推送到lingwh1995/pure......................'
}

function afterBuildAndDeploy() {
    #注释掉替换RepoLink组件为Pure组件的相关代码
    sed -i 's#\(.@theme-hope/module/navbar/components/RepoLink.*,\)#/*\1*/#g' docs/.vuepress/config.ts
}

function deploy() {
    beforeBuildAndDeploy
    #注意：先执行发布纯模式的代码，再执行发布正常模式的代码，这样本地不用再额外重启一次也可以直接用正常模式来运行
    deployPure
    deployNormal
    afterBuildAndDeploy
}

deploy