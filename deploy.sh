#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

#引入公共的工具包
source ./enhance/lib/tools.sh

#持续集成的时候首先更新node版本
function updateNodeVersionWhenCI {
    NATIVE_JENKINS_SUPPORT_ENABLE_STATE=( $( parsePluginIni plugin-005 enable) )
    if [ $NATIVE_JENKINS_SUPPORT_ENABLE_STATE == "false" ]
    then
        echo '开始更新node版本........'
        npm config set registry https://registry.npm.taobao.org
        #步骤1:需要先安装node
        #步骤2:更新node版本(方式一)
        npm install -g npm
        #步骤2:更新node版本(方式2)
        #npm install -g n
        #n stable
        echo '完成更新node版本........'
    fi
    #安装项目依赖
    npm i
}

#执行./init.sh脚本
function executeInitScript() {
    chmod +x ./init.sh
    bash ./init.sh
}

#替换md文件中引用的超连接的值为纯模式中正确的href值
function generateHrefValueForPure() {
    #获取$ENHANCE_BOOT_PATH/中以boot-xxx.ini格式命名的文件总共有多少个,每个配置文件对应一个xxx.md文件
    BOOT_FILE_COUNTS=`ls $ENHANCE_BOOT_PATH/ | grep '^boot-.*\.ini$' | wc -w`
    echo '引导文件的总数目: '$BOOT_FILE_COUNTS

    for((a=1;a<=$BOOT_FILE_COUNTS;a++))
    do
        #从bootstrap.ini中获取xxx.md的enhance状态
        ENHANCE_STATE=( $( parseBootstrapIni markdown-$a enhance) )
        #如果xxx.md启用了enhance功能,则继续执行下一步
        if [ $ENHANCE_STATE == "true" ]  || [ $ENHANCE_STATE == "stable" ]
        then
            #获取xxx.md文件的名称
            MD_FILE_NAME=( $( parseBootstrapIni markdown-$a fileName) )
            #获取xx.md文件的相对路径
            MD_FILE_RELATIVE_PATH=( $( parseBootstrapIni markdown-$a relativePath) )
            #获取xxx.md文件引用的代码的项目名称
            INCLUDE_CODE_PROJECT_NAME=( $( parseBootstrapIni markdown-$a includeCodeProjectName) )
            #修改xxx.md中的href的值
            sed -i 's#\(.*<a.*href="\).*/blogs#\1/pure/blogs#g' docs/blogs/$MD_FILE_RELATIVE_PATH/$MD_FILE_NAME.md
            #修改所有章节分片中href的值
            grep 'chapter' -rl docs/blogs/$MD_FILE_RELATIVE_PATH/shardings/*-chapter-*.md | xargs sed -i 's#\(.*<a.*href="\).*/blogs#\1/pure/blogs#g'
        fi
    done
}

#替换md文件中引用的超连接的值为正确的值
function generateHrefValueForNormal() {
    #获取$ENHANCE_BOOT_PATH/中以boot-xxx.ini格式命名的文件总共有多少个,每个配置文件对应一个xxx.md文件
    BOOT_FILE_COUNTS=`ls $ENHANCE_BOOT_PATH/ | grep '^boot-.*\.ini$' | wc -w`
    echo '引导文件的总数目: '$BOOT_FILE_COUNTS

    for((a=1;a<=$BOOT_FILE_COUNTS;a++))
    do
        #从bootstrap.ini中获取xxx.md的enhance状态
        ENHANCE_STATE=( $( parseBootstrapIni markdown-$a enhance) )
        #如果xxx.md启用了enhance功能,则继续执行下一步
        if [ $ENHANCE_STATE == "true" ] || [ $ENHANCE_STATE == "stable" ]
        then
            #获取xxx.md文件的名称
            MD_FILE_NAME=( $( parseBootstrapIni markdown-$a fileName) )
            #获取xx.md文件的相对路径
            MD_FILE_RELATIVE_PATH=( $( parseBootstrapIni markdown-$a relativePath) )
            #获取xxx.md文件引用的代码的项目名称
            INCLUDE_CODE_PROJECT_NAME=( $( parseBootstrapIni markdown-$a includeCodeProjectName) )
            #修改xxx.md中的href的值
            sed -i 's#\(.*<a.*href="\).*/blogs#\1/blogs#g' docs/blogs/$MD_FILE_RELATIVE_PATH/$MD_FILE_NAME.md
            #修改所有章节分片中href的值
            grep 'chapter' -rl docs/blogs/$MD_FILE_RELATIVE_PATH/shardings/*-chapter-*.md | xargs sed -i 's#\(.*<a.*href="\).*/blogs#\1/blogs#g'
        fi
    done
}

#获取纯模式启动状态
PURE_MODE_PLUGIN_ENABLE_STATE=( $( parsePluginIni plugin-003 enable) )

#开启替换RepoLink组件为Pure组件
function beforeBuildAndDeploy() {
    if [ $PURE_MODE_PLUGIN_ENABLE_STATE == "true" ]
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
    # 如果是发布到自定义域名
    # echo 'www.example.com' > CNAME

    git init
    git add -A
    git commit -m 'deploy'
}

#在本地 以正常模式发布
function deployNormalLocalhost() {
    echo '开始执行以正常模式推送到github和gitee........................................................'
    #修改配置文件，恢复纯模式相关设置到正常
    echo '开始执行修改配置文件操作....................'
    sed -i 's/pure:.*,/pure: false,/g' docs/.vuepress/theme.ts
    sed -i 's/base:.*,/base:\"\/\",/g' docs/.vuepress/config.ts

    #修改纯模式PWA相关配置
    sed -i 's/name: "个人博客.*"/name: "个人博客"/' docs/.vuepress/theme.ts
    sed -i 's/short_name: "此生挚爱万宝路的个人博客.*"/short_name: "此生挚爱万宝路的个人博客"/' docs/.vuepress/theme.ts
    echo '完成执行修改配置文件操作....................'

    #替换所有的超链接
    generateHrefValueForNormal

    #执行构建操作
    echo '开始执行构建操作...........................'
    build
    echo '完成执行构建操作...........................'

    #如果发布到 https://<USERNAME>.github.io  USERNAME=你的用户名
    echo '开始执行推送操作...........................'
    #git fetch git@github.com:lingwh1995/lingwh1995.github.io.git
    git push -f git@github.com:lingwh1995/lingwh1995.github.io.git HEAD:master
    git push -f git@gitee.com:lingwh1995/lingwh1995.git HEAD:master
    echo '完成执行推送操作...........................'
    #回到上一次操作的目录
    cd -
    echo '完成执行以正常模式推送到github和gitee........................................................'
}

#使用持续集成 以正常模式发布
function deployNormalCI() {
    echo '开始执行以正常模式推送到github和gitee.................................................'
    #修改配置文件
    echo '开始执行修改配置文件操作....................'
    sed -i 's/pure:.*,/pure: false,/g' docs/.vuepress/theme.ts
    sed -i 's/base:.*,/base:\"\/\",/g' docs/.vuepress/config.ts

    #修改纯模式PWA相关配置
    sed -i 's/name: "个人博客.*"/name: "个人博客"/' docs/.vuepress/theme.ts
    sed -i 's/short_name: "此生挚爱万宝路的个人博客.*"/short_name: "此生挚爱万宝路的个人博客"/' docs/.vuepress/theme.ts
    echo '完成执行修改配置文件操作....................'

    #替换所有的超链接
    generateHrefValueForNormal

    #执行构建操作
    echo '开始执行构建操作...........................'
    build
    echo '完成执行构建操作...........................'

    # 如果发布到 https://<USERNAME>.github.io  USERNAME=你的用户名
    echo '开始执行推送操作...........................'
    #git fetch https://lingwh1995:$1@github.com/lingwh1995/lingwh1995.github.io.git
    git push -f https://lingwh1995:$1@github.com/lingwh1995/lingwh1995.github.io.git HEAD:master
    #git fetch https://lingwh1995:$2@gitee.com/lingwh1995/lingwh1995.git
    git push -f https://lingwh1995:$2@gitee.com/lingwh1995/lingwh1995.git HEAD:master
    echo '完成执行推送操作...........................'
    #回到上一次操作的目录
    cd -
    echo '完成执行以正常模式推送到github和gitee.................................................'
}

#在本地以 纯净模式发布
function deployPureLocalhost() {
    if [ $PURE_MODE_PLUGIN_ENABLE_STATE == "true" ]
    then
        echo '开始执行以pure模式推送到github和gitee.................................................'
        #修改配置文件
        echo '开始执行修改配置文件操作....................'
        sed -i 's/pure:.*,/pure: true,/g' docs/.vuepress/theme.ts
        sed -i 's/base:.*,/base:\"\/pure\/\",/g' docs/.vuepress/config.ts

        #修改纯模式PWA相关配置
        sed -i 's/name: "个人博客.*"/name: "个人博客(纯模式)"/' docs/.vuepress/theme.ts
        sed -i 's/short_name: "此生挚爱万宝路的个人博客.*"/short_name: "此生挚爱万宝路的个人博客(纯模式)"/' docs/.vuepress/theme.ts
        echo '完成执行修改配置文件操作....................'

        #替换所有的超链接
        generateHrefValueForPure

        #执行构建操作
        echo '开始执行构建操作...........................'
        build
        echo '完成执行构建操作...........................'

        # 如果发布到 https://<USERNAME>.github.io/<REPO>  REPO=github上的项目,需要开启gitpages服务
        echo '开始执行推送操作...........................'
        #git fetch git@github.com:lingwh1995/pure.git
        git push -f git@github.com:lingwh1995/pure.git HEAD:master
        git push -f git@gitee.com:lingwh1995/pure.git HEAD:master
        echo '完成执行推送操作...........................'
        #回到上一次操作的目录
        cd -
        echo '完成执行以pure模式推送到github和gitee.................................................'
    fi
}

#持续集成以 纯净模式发布
function deployPureCI() {
    if [ $PURE_MODE_PLUGIN_ENABLE_STATE == "true" ]
    then
        echo '开始执行以pure模式推送到github和gitee.................................................'
        #修改配置文件
        echo '开始执行修改配置文件操作....................'
        sed -i 's/pure:.*,/pure: true,/g' docs/.vuepress/theme.ts
        sed -i 's/base:.*,/base:\"\/pure\/\",/g' docs/.vuepress/config.ts

        #修改纯模式PWA相关配置
        sed -i 's/name: "个人博客.*"/name: "个人博客(纯模式)"/' docs/.vuepress/theme.ts
        sed -i 's/short_name: "此生挚爱万宝路的个人博客.*"/short_name: "此生挚爱万宝路的个人博客(纯模式)"/' docs/.vuepress/theme.ts
        echo '完成执行修改配置文件操作....................'

        #替换所有的超链接
        generateHrefValueForPure

        #执行构建操作
        echo '开始执行构建操作...........................'
        build
        echo '完成执行构建操作...........................'

        # 如果发布到 https://<USERNAME>.github.io/<REPO>  REPO=github上的项目,需要开启gitpages服务
        echo '开始执行推送操作...........................'
        #git fetch https://lingwh1995:$1@github.com/lingwh1995/pure.git
        git push -f https://lingwh1995:$1@github.com/lingwh1995/pure.git HEAD:master
        #cd -
        #sed -i 's/base:.*,/base:\"\/\",/g' docs/.vuepress/config.ts
        #cd docs/.vuepress/dist
        #git fetch https://lingwh1995:$2@gitee.com/lingwh1995/pure.git
        git push -f https://lingwh1995:$2@gitee.com/lingwh1995/pure.git HEAD:master
        echo '完成执行推送操作...........................'
        #回到上一次操作的目录
        cd -
        echo '完成执行以pure模式推送到github和gitee.................................................'
    fi
}

function afterBuildAndDeploy() {
    if [ $PURE_MODE_PLUGIN_ENABLE_STATE == "true" ]
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
    deployPureCI $1 $2
    deployNormalCI $1 $2
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
        deployCI $1 $2
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