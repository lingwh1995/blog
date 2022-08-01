#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

#设置git，使git在clone可以创建过长的文件名
git config --global core.longpaths true

#执行init之前先关闭项目，执行完成之后在启动项目
#下载springcloud-eureka项目
#cd docs/blogs/backend/springcloud
#rm -rf springcloud-eureka
#git clone https://gitee.com/lingwh1995/springcloud-eureka.git

#安装markmap-cli 
#npm install -g markmap-cli

#为笔记生成markmap大纲

#用于记录日志的方法
function log() {
    echo -e "$(date '+%Y-%m-%d %H:%M:%S') $@"
}

#为xxx.md文件生成二级和三级目录大纲markmap文件
function createOutLineMarkmapHtml(){
    echo '开始为'$1'.md生成markmap文件......'

    #进入存放笔记md文件的目录
    cd $2
    
    #删除上一次操作后的md文件
    rm -rf $1.md

    #从副本恢复一份新的md文件
    cp $1.md.bak $1.md

    echo '开始为'$1'.md生成二级和三级目录大纲md文件......'
    #生成二级目录大纲md文件
    grep '^#\{1,2\} [1-9][0-9]\?' $1.md > $1-outline2.md
    #生成三级目录大纲md文件
    grep '^#\{1,3\} [1-9][0-9]\?' $1.md > $1-outline3.md
    echo '完成为'$1'.md生成二级和三级目录大纲md文件............'
    
    echo '开始为'$1'.md生成二级和三级目录大纲markmap文件......'
    #根据二级和三级目录大纲md文件创建对应的目录大纲html文件
    #--no-open：生成大纲后不打开，--no-toolbar：生成的目录大纲html文件不包含工具条
    markmap --no-open $1-outline2.md
    markmap --no-open $1-outline3.md
    echo '完成为'$1'.md生成二级和三级目录大纲markmap文件............'
    
    #进入上一次操作的目录，就是blog目录中
    cd -
    
    echo '开始删除'$1'.md生成的二级和三级目录大纲md文件......'
    #删除生成三级目录大纲md文件
    rm -rf $2/$1-outline*.md
    echo '完成删除'$1'.md生成的二级和三级目录大纲md文件............'

    echo '开始将'$1'.md生成二级和三级目录大纲markmap文件移动到指定目录......'
    mkdir -p $3
    #把二级和三级目录大纲文件移动到指定的目录中
    mv $2/$1-outline*.html $3
    echo '完成将'$1'.md生成二级和三级目录大纲markmap文件移动到指定目录............'

    echo '完成为'$1'.md生成二级和三级目录大纲md文件......' 
}

#为xxx.md文件的所有章节生成目录大纲markmap文件
function createChapterOutLineMarkmapHtml(){
    echo '开始为'$1'.md的所有章节生成markmap文件......'

    #进入存放笔记md文件的目录
    cd $2
    #获取一级标题总数
    MAX_CHAPTER_SEQUENCE=`grep '^#\{1\} [1-9]\+' $1.md | tail -1 | cut -c 3-4 | sed 's/\.//g'`
     
    for ((i=1; i<=$MAX_CHAPTER_SEQUENCE; i++))
    do
        echo '开始为'$1'.md第'$i'章生成目录大纲md文件，章节目录大纲标题深度：'$4'......'
        #为具体章节章节生成目录大纲md文件，标题深度由$4这个参数决定
        grep '^#\{1,'"$4"'\} '"$i"'' $1.md > $1-outline$4-chapter$i.md
        echo '完成为'$1'.md第'$i'章生成目录大纲md文件，章节目录大纲标题深度：'$4'............'

        echo '开始为'$1'.md第'$i'章节生成目录大纲markmap文件，markmap文件标题深度：'$4'......'
        #根据二级和三级目录大纲md文件创建对应的目录大纲html文件
        #--no-open：生成大纲后不打开，--no-toolbar：生成的目录大纲html文件不包含工具条
        markmap --no-open --no-toolbar $1-outline$4-chapter$i.md
        echo '完成为'$1'.md第'$i'章节生成目录大纲markmap文件，markmap文件标题深度：'$4'............'
    done
    
    #进入上一次操作的目录，就是
    cd -
     
    echo '开始删除'$1'.md所有章节生成的目录大纲md文件......'
    #删除生成三级目录大纲md文件
    rm -rf $2/$1-outline$4-chapter*.md
    echo '完成删除'$1'.md所有章节生成的目录大纲md文件............'

    echo '开始将'$1'.md所有章节生成的目录大纲markmap文件移动到指定目录......'
    mkdir -p $3/chapter
    #删除上次生成的目录大纲markmap文件
    rm  -rf $3/chapter/*
    #把二级和三级目录大纲markmap文件移动到指定的目录中
    mv $2/$1-outline$4-chapter*.html $3/chapter
    echo '完成将'$1'.md所有章节三级目录大纲markmap文件移动到指定目录............'

    echo '完成为'$1'.md的所有章节生成markmap文件......'
}

#生成xxx.md文件生成xxx-guidance.md
function createOutLineGuidanceMd(){
    echo '开始为'$1'.md生成guidance文件......'
    
    #进入存放笔记md文件的目录
    cd $2
    #创建xxx-guidance.md，并写入博客guidance内容
cat > $1-guidance.md  << EOF    
# 博客介绍
## 博客内容概述

	本篇博客的内容主要介绍安装Centos7操作系统、以及在Centos操作系统上搭建常见的开发环境，如Jdk、Maven、Docker、
    Rancher、Minikube、Kubernetes、nginx、等软件的详细搭建过程，博客内容中图片较少，主要以实用为主，所有代码均
	经过严格测试，可直接复制运行即可。
## 博客大纲
	
###	简单版博客内容大纲
<Markmap localtion="/markmap/environment/centos/$1-outline2.html"/>

###	详细版博客内容大纲
<Markmap localtion="/markmap/environment/centos/$1-outline3.html"/>
EOF

    #进入上一次操作的目录中，就是blog中
    cd -

    #创建存放guidance文件的文件夹
    mkdir -p $3
    echo $3

    #把生成的guidance文件移动到指定位置
    mv $2/$1-guidance.md $3
    echo '结束为'$1'.md生成guidance文件......'
}

#生成xxx.md文件所有章节生成xxx-guidance-chapter*.md
function createChapterOutLineGuidanceMd(){
    echo '开始为'$1'.md所有章节生成guidance文件......'

    #进入存放笔记md文件的目录
    cd $2
    #获取总共的章节数目
    MAX_CHAPTER_SEQUENCE=`grep '^#\{1\} [1-9][0-9]\?' $1.md | tail -1 | cut -c 3-4 | sed 's/\.//g'`

    for ((i=1; i<=$MAX_CHAPTER_SEQUENCE; i++))
    do

cat > $1-guidance-chapter$i.md  << EOF    

## $i.1章节大纲
	
<Markmap localtion="/markmap/environment/centos/chapter/$1-outline5-chapter$i.html"/>
EOF

    done

    cd -

    #创建存放所有章节guidance文件的文件夹
    mkdir -p $3/chapter

    #把当前目录下所有guidance文件移动到指定文件夹
    mv $2/$1-guidance-chapter*.md $3/chapter

    echo '结束为'$1'.md所有章节生成guidance文件......'
}

#二级标题序列增加1
function title2Increment(){
    echo '开始为'$1'.md中所有二级标题序列增加1......'

    #进入存放笔记md文件的目录
    cd $2
 
    #获取一级标题总数
    TOTAL_TITLE1_COUNTS=`grep '^# [1-9][0-9]\?' $1.md | tail -1 | cut -c 3-4 | sed 's/\.//g'`
    echo $1'.md初始文件中一级标题总数'$TOTAL_TITLE1_COUNTS
  
    for ((i=1; i<=$TOTAL_TITLE1_COUNTS; i++))
    do
        #根据一级标题获取二级标题总数
        TOTAL_TITLE2_COUNTS=`grep '^## '"$i"'' $1.md | tail -1 | cut -d. -f2`
        #遍历二级标题，让所有的二级标题在原来的基础上+1，如1.2.2->1.3.2
        #判断二级标题格式是否合格，如果不合格就跳过本次循环
        if [ -z "$TOTAL_TITLE2_COUNTS" ]
        then
            #输出错误日志
            echo 章节$i'中不包含二级标题......'
            continue
        else
            echo $1'.md初始文件中章节'$i'中二级标题总数:'$TOTAL_TITLE2_COUNTS 
        fi
        for ((j=$TOTAL_TITLE2_COUNTS; j>=1; j--))
        do
            #替换二级标题，在原来的基础上+1
            sed -i 's/(^\#\{2,4\} )'"$i"'.'"$j"'/^\#\{2,4\} '"$i"'.'"$[$j+1]"'/g' $1.md
        done
    done

    echo '完成为'$1'.md中所有二级标题序列增加1......' 
}

#给MD文件中插入MarkmapComponment（vue插件）
function insertMarkmapComponmentIntoMd(){
    echo '开始为'$1'.md中插入MarkmapComponment......'

    #获取一级标题总数
    TOTAL_TITLE1_COUNTS=`grep '^# [1-9][0-9]\?' $1.md | tail -1 | cut -c 3-4 | sed 's/\.//g'`
    echo '一级标题总数'$TOTAL_TITLE1_COUNTS
    
    for ((i=1; i<=$TOTAL_TITLE1_COUNTS; i++))
    do
        echo '开始给标题'$i'下面插入MarkmapComponment......'
        TARGET_LINE_NUMBER=`grep -n '^# '"$i"'' $1.md | cut -d ':' -f 1`
        echo '标题 # '$i.'所在行号：'$TARGET_LINE_NUMBER
        TARGET_STR="@include(@src/$3/chapter/$1-guidance-chapter$i.md)"
        sed -i ''"$TARGET_LINE_NUMBER"'a '"$TARGET_STR"'' $1.md
        echo '完成给标题'$i'下面插入MarkmapComponment......'
    done

    echo '完成为'$1'.md中插入MarkmapComponment......'
}
echo '开始增强MD文件......'

# 要操作的md文件的名称，不带文件后缀名
MD_FILE_NAME="centos7"
# 要操作的md文件的相对路径
MD_FILE_SOURCE_PATH="docs/blogs/environment/centos"
# 生成的所有markmap文件存放的目录路径
MD_FILE_MARKMAP_TARGET_PATH="docs/.vuepress/public/markmap/environment/centos"
# 为所有章节生成的markmap文件展示的标题层级深度
MD_FILE_CHAPTER_OUTLINE_MARKMAP_HTML_TITLE_DEPTH=5

echo '开始生成markmap文件......'
createOutLineMarkmapHtml $MD_FILE_NAME $MD_FILE_SOURCE_PATH $MD_FILE_MARKMAP_TARGET_PATH
createChapterOutLineMarkmapHtml $MD_FILE_NAME $MD_FILE_SOURCE_PATH $MD_FILE_MARKMAP_TARGET_PATH $MD_FILE_CHAPTER_OUTLINE_MARKMAP_HTML_TITLE_DEPTH
echo '结束生成markmap文件.............'

echo '开始生成guidance文件（guidance文件中引用了上一步骤生成的markmap文件）......'
# 生成的所有guidance文件存放的目录路径
MD_FILE_GUIDANCE_TARGET_PATH="docs/.vuepress/public/guidance/environment/centos"
createOutLineGuidanceMd $MD_FILE_NAME $MD_FILE_SOURCE_PATH $MD_FILE_GUIDANCE_TARGET_PATH
createChapterOutLineGuidanceMd $MD_FILE_NAME $MD_FILE_SOURCE_PATH $MD_FILE_GUIDANCE_TARGET_PATH
title2Increment $MD_FILE_NAME $MD_FILE_SOURCE_PATH
echo '结束生成guidance文件.............'

echo '开始给md文件中插入Markmap组件（Markmap组件中引用了上一步骤生成的guidance文件）......'
MD_FILE_GUIDANCE_VUECOMPONMENT_PATH="public/guidance/environment/centos"
insertMarkmapComponmentIntoMd $MD_FILE_NAME $MD_FILE_SOURCE_PATH $MD_FILE_GUIDANCE_VUECOMPONMENT_PATH
echo '结束给md文件中插入Markmap组件............'

echo '结束增强md文件............'
