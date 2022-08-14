#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

#引入公共的工具包
source ./enhance/lib/tools.sh

#持续集成的时候首先更新node版本
function updateNodeVersionWhenCI {
    npm config set registry https://registry.npm.taobao.org
    npm cache clean -f
    npm install -g n
    n stable
    npm i
}

#执行./init.sh脚本
function executeInitScript() {
    chmod +x ./init.sh
    bash ./init.sh
}

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
    # 生成静态文件
    npm run docs:build
    # 进入生成的文件夹
    cd docs/.vuepress/dist
    #删除上一次操作产生的.git文件
    rm -rf .git
    # 如果是发布到自定义域名
    # echo 'www.example.com' > CNAME

    git init 
    git add -A
    git commit -m 'deploy'
}

#在本地 以正常模式发布
function deployNormalLocalhost() {
    #修改配置文件
    sed -i 's/pure:.*,/pure: false,/g' docs/.vuepress/theme.ts
    sed -i 's/base:.*,/base:\"\/\",/g' docs/.vuepress/config.ts
    
    #执行构建操作
    build

    echo '开始以正常模式推送到githuhb......'
    #如果发布到 https://<USERNAME>.github.io  USERNAME=你的用户名
    git push -f git@github.com:lingwh1995/lingwh1995.github.io.git master
    #回到上一次操作的目录
    cd -
    echo '完成以正常模式推送到github......'
}

#使用持续集成 以正常模式发布
function deployNormalCI() {
    #修改配置文件
    sed -i 's/pure:.*,/pure: false,/g' docs/.vuepress/theme.ts
    sed -i 's/base:.*,/base:\"\/\",/g' docs/.vuepress/config.ts
    
    #执行构建操作
    build

    echo '开始以正常模式推送到githuhb......'
    # 如果发布到 https://<USERNAME>.github.io  USERNAME=你的用户名
    git push -f https://lingwh1995:$1@github.com/lingwh1995/lingwh1995.github.io.git HEAD:master
    #回到上一次操作的目录
    cd -
    echo '完成以正常模式推送到github......'
}

#在本地以 纯净模式发布
function deployPureLocalhost() {
    echo '开始以pure模式推送到github......................'
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
    echo '完成以pure模式推送到github......................'
}

#持续集成以 纯净模式发布
function deployPureCI() {
    echo '开始以pure模式推送到github......................'
    if [ $PLUGIN_ENABLE_STATE == "true" ]
    then
        #修改配置文件
        sed -i 's/pure:.*,/pure: true,/g' docs/.vuepress/theme.ts
        sed -i 's/base:.*,/base:\"\/pure\/\",/g' docs/.vuepress/config.ts

        #执行构建操作
        build
        
        # 如果发布到 https://<USERNAME>.github.io/<REPO>  REPO=github上的项目,需要开启gitpages服务
        git push -f https://lingwh1995:$1@github.com/lingwh1995/pure.git HEAD:master
        #回到上一次操作的目录
        cd -
    fi
    echo '完成以pure模式推送到github......................'
}

function afterBuildAndDeploy() {
    if [ $PLUGIN_ENABLE_STATE == "true" ]
    then
        #注释掉替换RepoLink组件为Pure组件的相关代码
        sed -i 's#\(.@theme-hope/module/navbar/components/RepoLink.*,\)#/*\1*/#g' docs/.vuepress/config.ts
    fi
}

#本地发布模式
function deployLocalhost() {
    beforeBuildAndDeploy
    deployPureLocalhost
    deployNormalLocalhost
    afterBuildAndDeploy
}

#持续集成发布模式
function deployCI() {
    updateNodeVersionWhenCI
    executeInitScript
    beforeBuildAndDeploy
    deployPureCI $1
    deployNormalCI $1
    afterBuildAndDeploy
}

#判断系统类型
uNames=`uname -s`
osName=${uNames: 0: 4}
if [ "$osName" == "Linu" ] # Linux
then
    #代表持续集成环境
    echo "GNU/Linux"
    #获取纯模式启动状态
    AUTODEPLOY_ENABLE_STATE=( $( parsePluginIni plugin-004 enable) )
    if [ $AUTODEPLOY_ENABLE_STATE == "true" ]
    then
        echo "当前是持续集成发布模式"
        deployCI $1
    fi
elif [ "$osName" == "MING" ] # MINGW, windows, git-bash
then
    #代表本地环境
	echo "Windows, git-bash"
	echo "当前是本地发布模式"
    deployLocalhost
else
	echo "unknown os"
fi