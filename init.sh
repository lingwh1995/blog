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

:<< EOF
    $1:ini配置文件名称
    $2:ini配置文件名称中对象的名称
    $3:ini配置文件中键的名称
EOF

function parseIni() {
    INIFILE=$1; SECTION=$2; ITEM=$3
    result=`awk -F '=' '/\['$SECTION'\]/{a=1}a==1&&$1~/'$ITEM'/{print $2;exit}' $INIFILE`
    #使用echo返回解析结果
    echo ${result}
}

:<< EOF
    给xxx.md写入Frontmatter配置信息
    $1:$MD_FILE_NAME
    $2:$MD_FILE_SOURCE_PATH
EOF

function writeFrontmatterForOriginal() {
    #在写入内容之前先写入Frontmatter选项配置信息
    echo "---" >>  $2/$1.md
    
    #写入 博客列表展示的标题，这是地址栏上面的标题，同时也是博客列表中显示的标题
    #获取完整的的md文件中的Frontmatter选项配置信息中的title属性的值
   
    MD_FILE_ENSEMBLE_FRONTMATTER_TITLE=( $( parseIni ./config/config-$1.ini ensemble title) )
    echo "title: $MD_FILE_ENSEMBLE_FRONTMATTER_TITLE" >>  $2/$1.md

    #抽取所有一级标题，作为博客正文中博客内容概述的中的内容
    BLOG_CONTENT_INTRO=`grep '^# [1-9][0-9]\?\.' $2/$1.md | cut -d. -f2 | tr '\r\n' ','`
    #写入 博客列表展示的description，这是地址栏上面的标题，同时也是博客列表中显示的标题
    BLOG_CONTENT_INTRO='本篇博客涉及主要内容有：'$BLOG_CONTENT_INTRO'具体每个章节中包含的内容可使通过下面博客内容大纲进行查看，博客内容中图片较少，主要以实用为主，所有代码均经过严格测试，可直接复制运行即可。'
    
    #抽取所有一级标题，以此为根据创建博客FRONTMATTER配置中description的值
    BLOG_FRONTMATTER_DESCRIPTION=`grep '^# [1-9][0-9]\?\.'  $2/$1.md | cut -d '.' -f2 | tr '\r\n' ','`
    BLOG_FRONTMATTER_DESCRIPTION='本章节涉及主要内容有：'$BLOG_FRONTMATTER_DESCRIPTION'具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看，本章节内容中图片较少，主要以实用为主，所有代码均经过严格测试，可直接复制运行即可。'

    echo "description: $BLOG_FRONTMATTER_DESCRIPTION" >>  $2/$1.md
    
    #写入 右侧toc面板展示的标题深度
    #获取具体章节的的md文件中的Frontmatter选项配置信息中headerDepth的属性的值
    MD_FILE_ENSEMBLE_FRONTMATTER_HEADERDEPTH=( $( parseIni ./config/config-$1.ini ensemble headerDepth) )
    echo "headerDepth: $MD_FILE_ENSEMBLE_FRONTMATTER_HEADERDEPTH" >>  $2/$1.md

    #写入是否原创
    #获取具体章节的的md文件中的Frontmatter选项配置信息中isOriginal的属性的值
    MD_FILE_ENSEMBLE_FRONTMATTER_ISORIGINAL=( $( parseIni ./config/config-$1.ini ensemble isOriginal) )
    echo "isOriginal: $MD_FILE_ENSEMBLE_FRONTMATTER_ISORIGINAL" >>  $2/$1.md

    #写入分类信息
    #获取完整的章节的的md文件中的Frontmatter选项配置信息中category的属性的值

    MD_FILE_ENSEMBLE_FRONTMATTER_CATEGORY=( $( parseIni ./config/config-$1.ini ensemble category) )
    echo "category:" >>  $2/$1.md
    ENSEMBLE_CATEGORY=(`echo $MD_FILE_ENSEMBLE_FRONTMATTER_CATEGORY | tr ',' ' '` )
    for CATEGORY in ${ENSEMBLE_CATEGORY[@]}
    do
        echo "  - $CATEGORY" >>  $2/$1.md   
    done 
    
    #写入 是否被博客列表收藏，xxx.md切割出来的章节不用加入收藏列表，只把xxx.md加入收藏列表
    #获取具体章节的的md文件中的Frontmatter选项配置信息中star的属性的值
    MD_FILE_ENSEMBLE_FRONTMATTER_STAR=( $( parseIni ./config/config-$1.ini ensemble star) )
    echo "star: $MD_FILE_ENSEMBLE_FRONTMATTER_STAR" >>  $2/$1.md
            
    #写入 是否开启版权校验
    #获取具体章节的的md文件中的Frontmatter选项配置信息中的copyright属性的值
    MD_FILE_ENSEMBLEFRONTMATTER_COPYRIGHT=( $( parseIni ./config/config-$1.ini ensemble copyright) )
    echo "copyright: $MD_FILE_ENSEMBLEFRONTMATTER_COPYRIGHT" >>  $2/$1.md
    
    #写入 文章标签
    #获取具体章节的的md文件中的Frontmatter选项配置信息中的tag属性的值
    MD_FILE_ENSEMBLE_FRONTMATTER_TAG=( $( parseIni ./config/config-$1.ini ensemble tag) )
    echo "tag:" >>  $2/$1.md
    echo chapter-$i'的标签内容'$MD_FILE_ENSEMBLE_FRONTMATTER_TAG
    CHAPTER_TAGS=(`echo $MD_FILE_ENSEMBLE_FRONTMATTER_TAG | tr ',' ' '` )
    for TAG in ${CHAPTER_TAGS[@]}
    do
        echo "  - $TAG" >>    $2/$1.md   
    done 
    
    #写入 写作日期
    #获取具体章节的的md文件中的Frontmatter选项配置信息中date属性的值
    MD_FILE_ENSEMBLE_FRONTMATTER_DATE=( $( parseIni ./config/config-$1.ini ensemble date) )
    echo "date: $MD_FILE_ENSEMBLE_FRONTMATTER_DATE" >>  $2/$1.md
    
    #写入 是否置顶
    #获取具体章节的的md文件中的Frontmatter选项配置信息中date属性的值
    MD_FILE_ENSEMBLE_FRONTMATTER_STICKY=( $( parseIni ./config/config-$1.ini ensemble sticky) )
    echo "sticky: $MD_FILE_ENSEMBLE_FRONTMATTER_STICKY" >>  $2/$1.md
    
    #写入 icon
    #获取具体章节的的md文件中的Frontmatter选项配置信息中date属性的值
    MD_FILE_ENSEMBLE_FRONTMATTER_ICON=( $( parseIni ./config/config-$1.ini ensemble icon) )
    echo "icon: $MD_FILE_ENSEMBLE_FRONTMATTER_ICON" >>  $2/$1.md
    
    #写入SEO信息
    #抽取所有一级标题，以此为根据创建博客正文内容中博客内容概述的文字，作为SEO的关键词
    SEO_KEYWORDS=`grep '^# [1-9][0-9]\?\.'  $2/$1.md | cut -d '.' -f2 | tr '\r\n' ','`
    echo "head:" >>   $2/$1.md
    echo "  - - meta" >>   $2/$1.md
    echo "    - name: keywords" >>   $2/$1.md
    echo "      content: $SEO_KEYWORDS" >>  $2/$1.md

    echo "---" >>   $2/$1.md
    echo "" >>  $2/$1.md
}

:<< EOF
    为xxx.md和xxx.md的所有章节生成二级和三级目录大纲，并将这个目录大纲转换为markmap文件
    $1:$MD_FILE_NAME
    $2:$MD_FILE_SOURCE_PATH
EOF

function generateOutLineAndTransformOutLineToMarkmapForOriginal() {
    echo '生成markmap文件开始........................................................................'
    echo '开始为'$1'.md生成markmap文件........................'
  
    #删除上一次操作后的md文件
    rm -rf $2/$1.md
    echo '删除上一次操作后的'$1'.md文件'
    
    #调用写入Frontmatter配置的方法
   
    writeFrontmatterForOriginal $1 $2

    #从副本恢复一份新的md文件
    cp $2/$1.md.bak $2/$1.md
    echo '从副本恢复一份新的'$1'.md文件'

    echo '开始为'$1'.md生成二级和三级目录大纲md文件......'
    #生成二级目录大纲md文件
    grep '^#\{1,2\} [1-9][0-9]\?' $2/$1.md > $2/$1-outline2.md
    #生成三级目录大纲md文件
    grep '^#\{1,3\} [1-9][0-9]\?' $2/$1.md > $2/$1-outline3.md
    echo '完成为'$1'.md生成二级和三级目录大纲md文件............'
    
    echo '开始为'$1'.md生成二级和三级目录大纲markmap文件，并输出到指定文件夹中......'

    #创建存放为xxx.md生成的markmap文件的文件夹
    mkdir -p $3
    #删除上次生成的xxx.md所有章节的目录大纲markmap文件
    rm  -rf $3/$1-outline*.html

    #根据二级和三级目录大纲md文件创建对应的目录大纲html文件
    #--no-open：生成大纲后不打开，--no-toolbar：生成的目录大纲html文件不包含工具条
    markmap --no-open $2/$1-outline2.md -o $3/$1-outline2.html
    markmap --no-open $2/$1-outline3.md -o $3/$1-outline3.html
    echo '完成为'$1'.md生成二级和三级目录大纲markmap文件，并输出到指定文件夹中............'
      
    echo '开始删除'$1'.md生成的二级和三级目录大纲md文件......'
    #删除生成三级目录大纲md文件
    rm -rf $2/$1-outline*.md
    echo '完成删除'$1'.md生成的二级和三级目录大纲md文件............'

    echo '完成为'$1'.md生成二级和三级目录大纲md文件................................................' 

    echo '开始为'$1'.md的所有章节生成markmap文件........................'

    #获取一级标题总数
    TOTAL_TITLE1_COUNTS=`grep '^#\{1\} [1-9]\+' $2/$1.md | tail -1 | cut -c 3-4 | sed 's/\.//g'`
     
    #创建存放为xxx.md的所有章节生成的markmap文件的文件夹
    mkdir -p $3/chapter

    #删除上次生成xxx.md的所有章节的目录大纲markmap文件
    rm  -rf $3/chapter/*

    for ((i=1; i<=$TOTAL_TITLE1_COUNTS; i++))
    do
        echo '开始为'$1'.md第'$i'章生成目录大纲md文件，章节目录大纲标题深度：'$4'......'
        #为具体章节章节生成目录大纲md文件，标题深度由$4这个参数决定
        grep '^#\{1,'"$4"'\} '"$i"'' $2/$1.md > $2/$1-outline$4-chapter$i.md
        echo '完成为'$1'.md第'$i'章生成目录大纲md文件，章节目录大纲标题深度：'$4'............'

        echo '开始为'$1'.md第'$i'章节生成目录大纲markmap文件，markmap文件标题深度：'$4'......'
        #根据二级和三级目录大纲md文件创建对应的目录大纲html文件
        #--no-open：生成大纲后不打开，--no-toolbar：生成的目录大纲html文件不包含工具条
        markmap --no-open $2/$1-outline$4-chapter$i.md  -o $3/chapter/$1-outline$4-chapter$i.html
        echo '完成为'$1'.md第'$i'章节生成目录大纲markmap文件，markmap文件标题深度：'$4'............'
    done
     
    echo '开始删除'$1'.md所有章节生成的目录大纲md文件......'
    #删除生成三级目录大纲md文件
    rm -rf $2/$1-outline$4-chapter*.md
    echo '完成删除'$1'.md所有章节生成的目录大纲md文件............'

    echo '完成为'$1'.md的所有章节生成markmap文件................................................'
    echo '生成markmap文件完成........................................................................'
}


:<< EOF
    生成xxx.md文件生成xxx-guidance.md
    $1:$MD_FILE_NAME
    $2:$MD_FILE_SOURCE_PATH
    $3:$MD_FILE_GUIDANCE_TARGET_PATH
    $4:$MD_FILE_RELATIVE_PATH
    $5:$MD_FILE_MARKMAP_TARGET_PATH_PREFIX
    $6:$ENSEMBLE_GUIDANCE_TITLE1_TEXT
EOF

function generateGuidanceByMarkmapForOriginal() {
    echo '开始为'$1'md生和'$1'.md的所有章节成guidance文件........................................................................'
    
    echo '开始为'$1'.md生成guidance文件.......................................................'
    
    #创建存放xxx.md成的guidance文件的文件夹
    mkdir -p $3

    #抽取所有一级标题，以此为根据创建博客正文内容中博客内容概述的文字
    BLOG_CONTENT_INTRO=`grep '^# [1-9][0-9]\?\.' $2/$1.md | sed 's/#/    /g'`
    #抽取所有一级标题，以此为根据创建博客FRONTMATTER配置中description的值
    BLOG_FRONTMATTER_DESCRIPTION=`grep '^# [1-9][0-9]\?\.'  $2/$1.md | cut -d '.' -f2 | tr '\r\n' ','`
    BLOG_FRONTMATTER_DESCRIPTION='本章节涉及主要内容有：'$BLOG_FRONTMATTER_DESCRIPTION'具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看，本章节内容中图片较少，主要以实用为主，所有代码均经过严格测试，可直接复制运行即可。'

    #获取完整的的md文件中的Frontmatter选项配置信息中的title属性的值
    MD_FILE_ENSEMBLE_FRONTMATTER_TITLE=( $( parseIni ./config/config-$1.ini ensemble title) )
    
    #抽取所有一级标题，以此为根据创建博客正文内容中博客内容概述的文字，作为SEO的关键词
    SEO_KEYWORDS=`grep '^# [1-9][0-9]\?\.'  $2/$1.md | cut -d '.' -f2 | tr '\r\n' ','`

cat > $3/$1-guidance.md  << EOF
---
title: $MD_FILE_ENSEMBLE_FRONTMATTER_TITLE-$6
description: $BLOG_FRONTMATTER_DESCRIPTION
headerDepth: 4
isOriginal: true
category:
star: false
copyright: false
tag:
  - $6
date: 2020-01-01
head:
  - - meta
    - name: keywords
      content: $SEO_KEYWORDS
---

<Banner localtion="/banner/particles/particles.html"/>

# $6 {#intro}
## 博客内容概述
    本篇博客涉及主要内容有：
$BLOG_CONTENT_INTRO
	具体每个章节中包含的内容可使通过下面博客内容大纲进行查看，博客内容中图片较少，主要以实用为主，所有代码
    均经过严格测试，可直接复制运行即可。
## 博客内容大纲
	
###	简单版博客内容大纲
<!--最深展示二级标题内容-->
<Markmap localtion="/$5/$4/$1-outline2.html"/>

>
<!--最深展示五级标题内容-->
###	详细版博客内容大纲
<Markmap localtion="/$5/$4/$1-outline3.html"/>

>

EOF

    #为xxx-guidance.md的Frontmatter配置中写入category配置信息
    #获取完整的章节的的md文件中的Frontmatter选项配置信息中category的属性的值
    MD_FILE_ENSEMBLE_FRONTMATTER_CATEGORY=( $( parseIni ./config/config-$1.ini ensemble category) )
    ENSEMBLE_CATEGORY=(`echo $MD_FILE_ENSEMBLE_FRONTMATTER_CATEGORY | tr ',' ' '` )
    #获取category:所在的行号
    TARGET_LINE_NUMBER=`grep -n 'category:' $2/$1.md | cut -d ':' -f 1`
    for CATEGORY in ${ENSEMBLE_CATEGORY[@]}
    do
        sed -i '/category:/a\\  - '"$CATEGORY"'' $3/$1-guidance.md
    done 


    echo '结束为'$1'.md生成guidance文件.............................................................'

    echo '开始为'$1'.md所有章节生成guidance文件......................................................'

    #获取一级标题总数
    TOTAL_TITLE1_COUNTS=`grep '^#\{1\} [1-9][0-9]\?' $2/$1.md | tail -1 | cut -c 3-4 | sed 's/\.//g'`

    #创建存放所有xxx.md所有章节生成guidance文件的文件夹
    mkdir -p $3/chapter

    for ((i=1; i<=$TOTAL_TITLE1_COUNTS; i++))
    do

    #抽取当前一级标题下所有二级标题，合并起来作为章节内容概述的一部分
    CHAPTER_CONTENT_INTRO=`grep '^## '"$i"'\.' $2/$1.md | sed 's/#/  /g'`
    
    echo '开始为'$1'.md所有章节'$i'生成guidance文件......................................................'
cat > $3/chapter/$1-guidance-chapter$i.md  << EOF    

## $i.1.章节内容概述
    本章节涉及主要内容有：
$CHAPTER_CONTENT_INTRO
	具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看，本章节内容中图片较少，主要以实用为主，所有代码
    均经过严格测试，可直接复制运行即可。

## $i.2.章节内容大纲
	
<Markmap localtion="/$5/$4/chapter/$1-outline5-chapter$i.html"/>

EOF
    echo '完成为'$1'.md所有章节'$i'生成guidance文件......................................................'
   
    done

    echo '完成为'$1'.md所有章节生成guidance文件......................................................'

    echo '完成为'$1'md生和'$1'.md的所有章节成guidance文件........................................................................'
}

:<< EOF
    生成xxx.md文件生成xxx-guidance.md
    $1:$MD_FILE_NAME
    $2:$MD_FILE_SOURCE_PATH
EOF

function title2IncrementByForOriginal() {
    echo '开始为'$1'.md中所有二级标题序列增加1........................................................................'
 
    #获取一级标题总数
    TOTAL_TITLE1_COUNTS=`grep '^# [1-9][0-9]\?\.' $2/$1.md | tail -1 | cut -c 3-4 | sed 's/\.//g'`
    echo $1'.md初始文件中一级标题总数'$TOTAL_TITLE1_COUNTS
  
    for ((i=1; i<=$TOTAL_TITLE1_COUNTS; i++))
    do
        #根据一级标题获取二级标题总数
        TOTAL_TITLE2_COUNTS=`grep '^## '"$i"'' $2/$1.md | tail -1 | cut -d. -f2`
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
            echo '二级标题由'$i.$j'提升为->'$i.$[$j+1]
            #替换二级标题，在原来的基础上+1
            sed -i 's/\(^\#\{2,4\} \)'"$i"'\.'"$j"'\./\1'"$i"'\.'"$[$j+$3]"'\./g' $2/$1.md
        done
    done

    echo '完成为'$1'.md中所有二级标题序列增加1........................................................................' 
}

:<< EOF
    #给xxx.md文件中插入Guidance
    $1:$MD_FILE_NAME
    $2:$MD_FILE_SOURCE_PATH
    $3:$MD_FILE_GUIDANCE_FILE_INCLUDE_PATH
    $4:$MD_FILE_GUIDANCE_TARGET_PATH
EOF

function insertGuidanceIntoOriginal() {
    echo '开始为'$1'.md中插入Guidance........................................................................'

    #给第一个一级标题上面一行的上面一行插入整个博客的guidance.md
    #获取一级标题所在行号
    TARGET_LINE_NUMBER=`grep -n '^# 1\.' $2/$1.md | cut -d ':' -f 1`
    echo '标题 # 1.所在行号：'$TARGET_LINE_NUMBER
    TARGET_LINE_NUMBER=$[$TARGET_LINE_NUMBER-1]
    echo '目标插入行号：'$TARGET_LINE_NUMBER

    #特别注意:将xxx-catalog.md插入到xxx.md的时候过滤掉Frontmatter 配置相关内容
    FRONTMATTER_END_LINE_NUMBER=`grep -n '^-\{3\}' $4/$1-guidance.md | tail -1 | cut -d ':' -f 1`
    #获取FRONTMATTER_END_LINE_NUMBER所在行数的下一行
    FRONTMATTER_END_LINE_NUMBER=$[$FRONTMATTER_END_LINE_NUMBER+1]

    #执行插入整个博客guidance.md的操作
    TARGET_STR="@include(@src/$3/$1-guidance.md{$FRONTMATTER_END_LINE_NUMBER-})"
    sed -i ''"$TARGET_LINE_NUMBER"'i '"$TARGET_STR"'' $2/$1.md

    #获取一级标题总数
    TOTAL_TITLE1_COUNTS=`grep '^# [1-9][0-9]\?\.' $2/$1.md | tail -1 | cut -c 3-4 | sed 's/\.//g'`
    echo '一级标题总数'$TOTAL_TITLE1_COUNTS
    
    #给每个章节下面的插入每个章节对应的Guidance
    for ((i=1; i<=$TOTAL_TITLE1_COUNTS; i++))
    do
        echo '开始给标题'$i'下面插入MarkmapComponment......'
        TARGET_LINE_NUMBER=`grep -n '^# '"$i"'\.' $2/$1.md | cut -d ':' -f 1`
        echo '标题 # '$i.'所在行号：'$TARGET_LINE_NUMBER
        TARGET_STR="@include(@src/$3/chapter/$1-guidance-chapter$i.md)"
        sed -i ''"$TARGET_LINE_NUMBER"'a '"$TARGET_STR"'' $2/$1.md
        echo '完成给标题'$i'下面插入MarkmapComponment......'
    done

    echo '完成为'$1'.md中插入Guidance........................................................................'
}

:<< EOF
    把上一步骤生成的MD文件根据章节数目切割成多个小md文件，每一个章节拆分为一个md文件，并同时给分片写入Frontmatter信息
    $1:$MD_FILE_NAME
    $2:$MD_FILE_SOURCE_PATH
    $3:$MD_FILE_CHAPTER_SHARDINGS_FOLDER_NAME
    $4:$MD_FILE_GUIDANCE_TARGET_PATH
    $5:$ENSEMBLE_GUIDANCE_TITLE1_TEXT
EOF

function generateChapterShardingsAndWriteFrontmatterForShardings() {
    echo '开始根据章节切割'$1'.md文件........................................................................'

    #删除上一次操作产生的shardings（存放章节分片的）文件夹
    rm -rf $2/$3

    #创建存放每一章节md文件的目录
    mkdir $2/$3

    echo '开始为'$1'.md生成内容介绍文件................................................'
    #将前面生成的xxx-guidance.md拷贝一份到所有章节目录中，并重名一下
    echo '开始将'$1'.md生成博客内容介绍拷贝一份到'$2'/$3目录中........................'
    cp $4/$1-guidance.md $2/$3/$1-chapter-0.$5.md
    echo '完成将'$1'.md生成博客内容介绍拷贝一份到'$2'/$3目录中........................'
    echo '完成为'$1'.md生成内容介绍文件................................................'
    
    #获取一级标题总数
    TOTAL_TITLE1_COUNTS=`grep '^# [1-9][0-9]\?\.' $2/$1.md | tail -1 | cut -c 3-4 | sed 's/\.//g'`
    echo '一级标题总数'$TOTAL_TITLE1_COUNTS
    
    for ((i=1; i<=$TOTAL_TITLE1_COUNTS; i++))
    do
        echo '开始为'$1'.md生成的分片文件写入Frontmatter配置信息................................................'
        #获取章节起始行数
        CHAPTER_START_LINE_NUMBER=`grep -n '^# '"$i"'\.' $2/$1.md | cut -d ':' -f 1`
        echo '章节'$i'起始行数：'$CHAPTER_START_LINE_NUMBER
        
        #获取章节结束行数
        CHAPTER_END_LINE_NUMBER=`grep -n '^# '"$[$i+1]"'\.' $2/$1.md | cut -d ':' -f 1`
        CHAPTER_END_LINE_NUMBER=$[$CHAPTER_END_LINE_NUMBER-1]
        #如果计算出来的值为-1，说明已经扫描到了最后一行，单独处理一下最后一行的行数
        if [ $CHAPTER_END_LINE_NUMBER -eq "-1" ]
        then
            CHAPTER_END_LINE_NUMBER=`cat $2/$1.md |wc -l`
        fi
        echo '章节'$i'结束行数：'$CHAPTER_END_LINE_NUMBER
        
        #获取章节名称
        CHAPTER_NAME=`grep -n '^# '"$i"'\.' $2/$1.md | cut -d ' ' -f 2`
        echo '章节名称：'$CHAPTER_NAME

        #在写入内容之前先写入Frontmatter选项配置信息
        echo "---" >>  $2/$3/$1-chapter-$CHAPTER_NAME.md
        #写入 博客列表展示的标题，这是地址栏上面的标题，同时也是博客列表中显示的标题
        #获取完整的的md文件中的Frontmatter选项配置信息中的title属性的值
        MD_FILE_ENSEMBLE_FRONTMATTER_TITLE=( $( parseIni ./config/config-$1.ini ensemble title) )
        echo "title: $MD_FILE_ENSEMBLE_FRONTMATTER_TITLE-$CHAPTER_NAME" >>  $2/$3/$1-chapter-$CHAPTER_NAME.md
        
        #抽取当前一级标题下所有二级标题，合并起来作为章节内容概述的一部分
        CHAPTER_CONTENT_INTRO=`grep '^## '"$i"'[0-9]\?\.' $2/$1.md | cut -d '.' -f3 | tr '\r\n' ','`
        #拼接完整的章节描述
        CHAPTER_CONTENT_INTRO='本章节涉及主要内容有：'$CHAPTER_CONTENT_INTRO'具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看，本章节内容中图片较少，主要以实用为主，所有代码均经过严格测试，可直接复制运行即可。'
        #写入 具体章节的描述信息
        #获取具体章节的的md文件中的Frontmatter选项配置信息中description的属性的值
        echo "description: $CHAPTER_CONTENT_INTRO" >>  $2/$3/$1-chapter-$CHAPTER_NAME.md
        
        #写入 右侧toc面板展示的标题深度
        #获取具体章节的的md文件中的Frontmatter选项配置信息中headerDepth的属性的值
        MD_FILE_CHAPTER_FRONTMATTER_HEADERDEPTH=( $( parseIni ./config/config-$1.ini chapter-basic headerDepth) )
        echo "headerDepth: $MD_FILE_CHAPTER_FRONTMATTER_HEADERDEPTH" >>  $2/$3/$1-chapter-$CHAPTER_NAME.md

        #写入是否原创
        #获取具体章节的的md文件中的Frontmatter选项配置信息中isOriginal的属性的值
        MD_FILE_CHAPTER_FRONTMATTER_ISORIGINAL=( $( parseIni ./config/config-$1.ini chapter-basic isOriginal) )
        echo "isOriginal: $MD_FILE_CHAPTER_FRONTMATTER_ISORIGINAL" >>  $2/$3/$1-chapter-$CHAPTER_NAME.md
       
        #写入分类信息
        #获取完整的章节的的md文件中的Frontmatter选项配置信息中category的属性的值
        MD_FILE_ENSEMBLE_FRONTMATTER_CATEGORY=( $( parseIni ./config/config-$1.ini ensemble category) )
        echo "category:" >>  $2/$3/$1-chapter-$CHAPTER_NAME.md
        ENSEMBLE_CATEGORY=(`echo $MD_FILE_ENSEMBLE_FRONTMATTER_CATEGORY | tr ',' ' '` )
        for CATEGORY in ${ENSEMBLE_CATEGORY[@]}
        do
            echo "  - $CATEGORY" >>  $2/$3/$1-chapter-$CHAPTER_NAME.md    
        done 
        
        #写入 是否被博客列表收藏，xxx.md切割出来的章节不用加入收藏列表，只把xxx.md加入收藏列表
        #获取具体章节的的md文件中的Frontmatter选项配置信息中的star属性的值
        MD_FILE_CHAPTER_FRONTMATTER_STAR=( $( parseIni ./config/config-$1.ini chapter-basic star) )
        echo "star: $MD_FILE_CHAPTER_FRONTMATTER_STAR" >>  $2/$3/$1-chapter-$CHAPTER_NAME.md
        
        #写入 是否开启版权校验
        #获取具体章节的的md文件中的Frontmatter选项配置信息中的copyright属性的值
        MD_FILE_CHAPTER_FRONTMATTER_COPYRIGHT=( $( parseIni ./config/config-$1.ini chapter-basic copyright) )
        echo "copyright: $MD_FILE_CHAPTER_FRONTMATTER_COPYRIGHT" >>  $2/$3/$1-chapter-$CHAPTER_NAME.md
        
        #写入 文章标签
        #获取具体章节的的md文件中的Frontmatter选项配置信息中的tag属性的值
        MD_FILE_CHAPTER_FRONTMATTER_TAG=( $( parseIni ./config/config-$1.ini chapter-$i tag) )
        echo "tag:" >>  $2/$3/$1-chapter-$CHAPTER_NAME.md
        echo chapter-$i'的标签内容'$MD_FILE_CHAPTER_FRONTMATTER_TAG
        CHAPTER_TAGS=(`echo $MD_FILE_CHAPTER_FRONTMATTER_TAG | tr ',' ' '` )
        for TAG in ${CHAPTER_TAGS[@]}
        do
            echo "  - $TAG" >>  $2/$3/$1-chapter-$CHAPTER_NAME.md    
        done 
        
        #写入 写作日期
        #获取具体章节的的md文件中的Frontmatter选项配置信息中date属性的值
        MD_FILE_CHAPTER_FRONTMATTER_DATE=( $( parseIni ./config/config-$1.ini chapter-$i date) )
        echo "date: $MD_FILE_CHAPTER_FRONTMATTER_DATE" >>  $2/$3/$1-chapter-$CHAPTER_NAME.md
        
        SEO_KEYWORDS=$CHAPTER_CONTENT_INTRO
        
        #写入seo信息
        echo "head:" >>  $2/$3/$1-chapter-$CHAPTER_NAME.md
        echo "  - - meta" >>  $2/$3/$1-chapter-$CHAPTER_NAME.md
        echo "    - name: keywords" >>  $2/$3/$1-chapter-$CHAPTER_NAME.md
        echo "      content: $SEO_KEYWORDS" >>  $2/$3/$1-chapter-$CHAPTER_NAME.md

        echo "---" >>  $2/$3/$1-chapter-$CHAPTER_NAME.md
        echo "" >>  $2/$3/$1-chapter-$CHAPTER_NAME.md


        echo '完成为'$1'.md生成的分片文件写入Frontmatter配置信息................................................'

        echo '开始为'$1'.md生成的分片文件写入正文内容................................................'
        #根据行号将内容输出到文件
        sed -n ''"$CHAPTER_START_LINE_NUMBER"','"$CHAPTER_END_LINE_NUMBER"'p' $2/$1.md >> $2/$3/$1-chapter-$CHAPTER_NAME.md
        echo '完成为'$1'.md生成分片文件写入正文内容................................................'
    done

    echo '完成根据章节切割'$1'.md文件........................................................................'
}

:<< EOF
    为xxx.md文件和xxx.md拆分的所有章节md文件生成侧边栏配置，存放在json文件中，并且给除 博客内容介绍章节 外所有一级标题添加锚点
    $1:$MD_FILE_NAME
    $2:$MD_FILE_SOURCE_PATH
    $3:$MD_FILE_SIDEBAR_CONFIG_TARGET_PATH
    $4:$SIDEBAR_LINK_PREFIX
    $5:$MD_FILE_SHARDINGS_FOLDER_NAME
    $6:$ENSEMBLE_GUIDANCE_TITLE1_TEXT

EOF

function generateSidebarConfigForAllAndSetAnchorForOriginal() {
   
    echo '开始为'$1'.为md文件和md文件拆分的所有章节md文件生成侧边栏配置........................................................................'

    #获取一级标题总数
    TOTAL_TITLE1_COUNTS=`grep '^# [1-9][0-9]\?\.' $2/$1.md | tail -1 | cut -c 3-4 | sed 's/\.//g'`
    echo '一级标题总数'$TOTAL_TITLE1_COUNTS

    #写入之前先删除上一次生成的sidebar配置json文件
    rm -rf $3/*

    #创建存放sidebar配置json的文件夹
    mkdir -p $3

    SIDEBAR_CONFIGFILE_NAME=$1"-sidebar-config.json"
    SIDEBAR_CONFIGFILE_FULL_PATH_NAME=$3/$SIDEBAR_CONFIGFILE_NAME
    #每次写入之前先删除旧文件，再写入新的内容
    rm -rf $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    
    #根据文件名称查找完整版文档（完整版博客的）的标题，并用作侧边栏显示的文字使用
    SIDEBAR_TEXT=( $( parseIni ./config/config-$1.ini ensemble title) )
    

    echo "  {" >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    echo "      // 必要的，分组的标题文字" >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    echo "      text: \"$SIDEBAR_TEXT\"," >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    echo "      // 可选的, 分组标题对应的图标" >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    echo "      icon: \"a-archivecatalogue-fill\"," >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    echo "      // 可选的, 设置分组是否可以折叠，默认值是 false" >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    echo "      collapsable: true," >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    echo "      // 必要的，分组的子项目" >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    echo "      children: [" >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME

    #拼接 按照章节阅读sidebar
    echo "          {" >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    echo "              text: \"按照章节阅读\"," >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    echo "              icon:\"repo\"," >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    echo "              collapsable: true," >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    echo "              children:[" >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME

    #按章节阅读中拼接 博客内容介绍 
    echo "                  {" >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    echo "                      text: \"$6\"," >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    echo "                      link:\"$4/$5/$1-chapter-0.$6.md\"," >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    echo "                      icon:\"note\"," >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    echo "                   }," >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME

    for ((i=1; i<=$TOTAL_TITLE1_COUNTS; i++))
    do
        #获取章节名称
        CHAPTER_NAME=`grep -n '^# '"$i"'\.' $2/$1.md | cut -d ' ' -f 2`
        echo '章节名称：'$CHAPTER_NAME

        echo "                  {" >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME 
        echo "                      text:\"$CHAPTER_NAME\"," >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
        echo "                      icon:\"article\"," >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
        echo "                      collapsable: true," >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
        echo "                      link:\"$4/$5/$1-chapter-$CHAPTER_NAME.md\"," >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
        echo "                  }," >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    done
    echo "              ]" >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    echo "          }," >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME

    #拼接 章节内容合集sidebar
    echo "          {" >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    echo "              text: \"章节内容合集\"," >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    echo "              icon:\"repo\"," >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    echo "              collapsable: true," >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    echo "              children:[" >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME

    #章节内容合集中拼接 博客内容介绍 
    echo "                  {" >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    echo "                      text: \"$6\"," >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    echo "                      link:\"$4/$1.md#intro\"," >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    echo "                      icon:\"note\"," >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    echo "                  }," >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    
    for ((i=1; i<=$TOTAL_TITLE1_COUNTS; i++))
    do
        #获取章节名称
        CHAPTER_NAME=`grep -n '^# '"$i"'\.' $2/$1.md | cut -d ' ' -f 2`
        echo '章节名称：'$CHAPTER_NAME

        echo "                  {" >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME 
        echo "                      text:\"$CHAPTER_NAME\"," >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
        echo "                      icon:\"article\"," >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
        echo "                      collapsable: true," >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
        echo "                      link:\"$4/$1.md#$i.\"," >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
        echo "                  }," >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    done    
    echo "              ]" >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    echo "          }," >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME

    echo "      ]" >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    echo "  }," >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
  
    #给所有一级标题后面添加锚点使用的属性
    for ((i=1; i<=$TOTAL_TITLE1_COUNTS; i++))
    do
    sed -i 's/\(^# '"$i"'\..*\)/& \{#'"$i"'\.\}/g' $2/$1.md
    done
    
    echo '完成为'$1'.为md文件和md文件拆分的所有章节md文件生成侧边栏配置.................................................................................'
}


:<< EOF
    生成网站导航README.md
    $1:$MD_FILE_NAME
    $2:$MD_FILE_RELATIVE_PATH
    $3:$MD_FILE_CHAPTER_SHARDINGS_FOLDER_NAME
EOF

function generateBreadcrumbREADME {
   
    echo '开始为'$2'目录下'$1'.md文件及其分片创建breadcrumb使用的README.md.................................................................................'

    echo '路径数组字符串：'$2/$3
    #将xxx.md文件所在的相对路径转换为数组
    PATHS_ARR=(`echo $2/$3 | tr '/' ' '` )
    echo '路径数组：'$PATHS_ARR
    echo '路径数组长度：'${#PATHS_ARR[@]}

    #获取数组长度
    PATHS_ARR_LENGTH=${#PATHS_ARR[@]}
    #blogs文件夹相当于init.sh的路径
    BASE_PATH="docs/blogs"
    CURRENT_REALTIVE_PATH=$BASE_PATH
    
    for(( i=0;i<${#PATHS_ARR[@]};i++)) do
        CURRENT_REALTIVE_PATH=$CURRENT_REALTIVE_PATH/${PATHS_ARR[i]}
        echo '当前处理的路径：'$CURRENT_REALTIVE_PATH
        
        #获取当前导航栏分类的文件夹名称
        CURRENT_CATALOG_FOLDER_NAME=`echo $2/$3 | cut -d '/' -f1`
        CURRENT_CATALOG_CHILD_FOLDER_NAME=`echo $2/$3 | cut -d '/' -f2`
       
        #获取当前导航栏分类的文件夹相对位置
        CURRENT_CATALOG_FOLDER_NAME_RELATIVE_PATH=$BASE_PATH/$CURRENT_CATALOG_FOLDER_NAME
        IGNORE_FOLDER_LIST_STR=`ls $CURRENT_CATALOG_FOLDER_NAME_RELATIVE_PATH -I $CURRENT_CATALOG_CHILD_FOLDER_NAME -I README*.md `
        IGNORE_FOLDER_LIST_ARR=(`echo $IGNORE_FOLDER_LIST_STR | tr ' ' ' '` )

        #获取当前需要过滤的文件列表
        IGNORE_FOLDER_LIST_STR=""

        for(( j=0;j<${#IGNORE_FOLDER_LIST_ARR[@]};j++)) do
            echo ${IGNORE_FOLDER_LIST_ARR[j]}
            IGNORE_FOLDER_LIST_STR=$IGNORE_FOLDER_LIST_STR'-I '${IGNORE_FOLDER_LIST_ARR[j]}' '
        done

        #如果i值大于等于1，说明处理的不是第一层目录了，不需要再添加额外的文件名过滤了，否则章节标题中如果有被过滤的文字，生成导航README.md将不会包含这个章节
        if [ $i -ge 1 ]
        then 
            IGNORE_FOLDER_LIST_STR=""
        fi

        #行号数组
        PATHS_LINENUMBER_STR=`ls -lR $CURRENT_REALTIVE_PATH -I README*.md -I *.bak -I *.md.* $IGNORE_FOLDER_LIST_STR | grep -n $BASE_PATH  | cut -d: -f1 | sed 's/ /,/g' | tr '\r\n' ' ' `
        #查询行号数组语句
        echo 'ls -lR '"$CURRENT_REALTIVE_PATH "'-I README*.md -I *.bak -I *.md.* '"$IGNORE_FOLDER_LIST_STR"''

        echo '行号数组字符串：'$PATHS_LINENUMBER_STR
        PATHS_LINENUMBER_ARR=( $PATHS_LINENUMBER_STR )
       
        #生成的内容中间先输出到这个文件中
        CACHE_README_FILE_NAME="README-cache.md"
        FINAL_README_FILE_NAME="README.md"
       
        SHARDING_README_FILE_NAME="README-$1.md"

        #开始创建README.md文件的分片文件
        CACHE_README_FILE_NAME_FULL_PATH_NAME=$CURRENT_REALTIVE_PATH/$CACHE_README_FILE_NAME
        FINAL_README_FILE_NAME_FULL_PATH_NAME=$CURRENT_REALTIVE_PATH/$FINAL_README_FILE_NAME
        SHARDING_README_FILE_NAME_FULL_PATH_NAME=$CURRENT_REALTIVE_PATH/$SHARDING_README_FILE_NAME

        #每次操作前先删除上一操次操作生成的分片文件
        rm -rf FINAL_README_FILE_NAME_FULL_PATH_NAME

        HREF_LINK_STR=""

        for(( k=0;k<${#PATHS_LINENUMBER_ARR[@]};k++)) do
            if [ ${#PATHS_LINENUMBER_ARR[@]} -gt 1 ]
            then
                 echo ------行号数组大于1时：说明当前位置不是最深一层的文件夹中-----------
            fi
           
            if [ ${#PATHS_LINENUMBER_ARR[@]} -eq 1 ]
            then
                 echo ------行号数组等于1时：说明当前位置是最深一层的文件夹中-----------
            fi

            #获取开始行数
            START_LINENUMBER=${PATHS_LINENUMBER_ARR[k]}
            echo '截取开始行数' $START_LINENUMBER
            #获取结束行数
            #如果不是最后一部分
            if [ $k -lt $[${#PATHS_LINENUMBER_ARR[@]}-1] ]
            then
                END_LINENUMBER=$[${PATHS_LINENUMBER_ARR[k+1]}-1]
            fi
            #如果扫描到了最后一部分，则结束行号为最后一行
            if [ $k -eq $[${#PATHS_LINENUMBER_ARR[@]}-1] ]
            then
                END_LINENUMBER=$
            fi

            echo '截取结束行数' $END_LINENUMBER
            #将递归查询当前目录中所有文件的结果根据目录层级切割成不同的分片
            ls -lR $CURRENT_REALTIVE_PATH -I README*.md -I *.bak -I *.md.* $IGNORE_FOLDER_LIST_STR | \
            sed -n ''"$START_LINENUMBER"','"$END_LINENUMBER"'p' >> $CACHE_README_FILE_NAME_FULL_PATH_NAME
            
            echo '--------------------------------------------------------------------'
            echo '当前操作文件名称：'$1.md
            echo '当前操作目录：（相对路径）' $CURRENT_REALTIVE_PATH
            echo "查询文件目录语句："ls -lR $CURRENT_REALTIVE_PATH -I README*.md -I *.bak -I *.md.* $IGNORE_FOLDER_LIST_STR
            echo '截取内容：'
            echo '------------'
            ls -lR $CURRENT_REALTIVE_PATH -I README*.md -I *.bak -I *.md.* $IGNORE_FOLDER_LIST_STR | \
            sed -n ''"$START_LINENUMBER"','"$END_LINENUMBER"'p'
            echo '------------'
            echo '输出文件全路径名：'$CACHE_README_FILE_NAME_FULL_PATH_NAME
            echo '--------------------------------------------------------------------'
            
            #替换README.md分片中所有行中不包含文件名的部分为指定字符串，格式为  4*($k+1)个空格-一个空格
            #获取前面的n个空格
            NBSP=""
            for((l=0;l<$[$k+1];l++)) do
                NBSP=$NBSP"    "   
            done
            
            #执行替换文件名前面部分的操作
            sed -i 's/^.*[0-9]\{2\}:[0-9]\{2\}/'"$NBSP"'-/g' $CACHE_README_FILE_NAME_FULL_PATH_NAME

            HREF_STR=""
            for((m=0;m<$k;m++)) do
                HREF_STR=$HREF_STR${PATHS_ARR[m+1+i]}/
            done
            

            #执行替换文件名的操作，为文件名添加超链接
            
            sed -i 's#\('"$NBSP"'-\) \(.*\)#\1 <a href="'"$HREF_STR"'\2">\2<\/a>#g' $CACHE_README_FILE_NAME_FULL_PATH_NAME
            
            #删除所有包含total和docs的的行
            sed -i '/\(^total\|^docs\)/d' $CACHE_README_FILE_NAME_FULL_PATH_NAME

            #替换文件后缀名.md为空
            sed -i 's/.md</</g' $CACHE_README_FILE_NAME_FULL_PATH_NAME

            #将所有的.md替换为.html
            sed -i 's/\.md"/\.html"/g' $CACHE_README_FILE_NAME_FULL_PATH_NAME

            CHAPTER_FOLDER_NAME_CN=( $( parseIni ./config/i18n.ini breadcrumb $3) )
            #配置导航页面中的shardings（存放章节分片的文件夹）为中文
            #替换路径导航中的英文为中文    
            sed -i 's/.*- '"$3"'/'"$CHAPTER_FOLDER_NAME_CN"'/g' $CACHE_README_FILE_NAME_FULL_PATH_NAME
            #替换页面中的英文为中文
            sed -i 's/>'"$3"'</>'"$CHAPTER_FOLDER_NAME_CN"'</g' $CACHE_README_FILE_NAME_FULL_PATH_NAME
            
            ALL_CHAPTERS_COLLECT_CN=( $( parseIni ./config/i18n.ini breadcrumb allchapters) )

            #替换文件名称为文件内容合集
            sed -i 's/'"$1"'.html">'"$1"'</'"$1"'.html\#intro">'"$ALL_CHAPTERS_COLLECT_CN"'</g' $CACHE_README_FILE_NAME_FULL_PATH_NAME

            #替换章节0名称格式为只包含文件信息，如   centos7-chapter-1.安装Linux操作系统.md -> 1.安装Linux操作系统.md
            sed -i 's/>'"$1"'-chapter-0\.\(.*\)</>\1</g' $CACHE_README_FILE_NAME_FULL_PATH_NAME
            #替换章节1到最后一章名称格式为只包含文件信息，如   centos7-chapter-1.安装Linux操作系统.md -> 1.安装Linux操作系统.md
            sed -i 's/>'"$1"'-chapter-\([0-9]\{1,2\}.*\)</>\1</g' $CACHE_README_FILE_NAME_FULL_PATH_NAME

        done 
       
        #配置路径导航文字显示为中文
        PATH_NAME_CN=( $( parseIni ./config/i18n.ini breadcrumb ${PATHS_ARR[i]}) )
        if [ ! $PATH_NAME_CN ]
        then
            PATH_NAME_CN=${PATHS_ARR[i]}
        fi

        #给README.md中写入内容
        echo '---' > $FINAL_README_FILE_NAME_FULL_PATH_NAME
        echo 'title: '"${PATH_NAME_CN}"'' >> $FINAL_README_FILE_NAME_FULL_PATH_NAME
        echo 'article: false' >> $FINAL_README_FILE_NAME_FULL_PATH_NAME
        echo 'toc: false' >> $FINAL_README_FILE_NAME_FULL_PATH_NAME
        echo 'comment: false' >> $FINAL_README_FILE_NAME_FULL_PATH_NAME
        echo 'copyrignht: false' >> $FINAL_README_FILE_NAME_FULL_PATH_NAME
        echo 'footer: false' >> $FINAL_README_FILE_NAME_FULL_PATH_NAME
        echo 'category:' >> $FINAL_README_FILE_NAME_FULL_PATH_NAME
        echo '- 占位符 ' >> $FINAL_README_FILE_NAME_FULL_PATH_NAME
        echo 'tag:' >> $FINAL_README_FILE_NAME_FULL_PATH_NAME
        echo '- 网站地图' >> $FINAL_README_FILE_NAME_FULL_PATH_NAME
        echo 'icon: navigate ' >> $FINAL_README_FILE_NAME_FULL_PATH_NAME
        echo '---' >> $FINAL_README_FILE_NAME_FULL_PATH_NAME
        echo '- '"${PATH_NAME_CN}"'' >> $FINAL_README_FILE_NAME_FULL_PATH_NAME

        echo 'cat到的内容：'
        echo '------------------------------'
        cat  $CACHE_README_FILE_NAME_FULL_PATH_NAME
        echo '------------------------------'
        
        cat  $CACHE_README_FILE_NAME_FULL_PATH_NAME | grep - >> $FINAL_README_FILE_NAME_FULL_PATH_NAME
        echo '读取README-'$1'.md到README.md的语句'
        echo 'cat '$CACHE_README_FILE_NAME_FULL_PATH_NAME' | grep - >> '$FINAL_README_FILE_NAME_FULL_PATH_NAME
        
        #删除中间文件
        rm -rf $CACHE_README_FILE_NAME_FULL_PATH_NAME

        #给README.md的分片文件中第二个---每一行后面插入换行符
        TARGET_LINE_NUMBER=`grep -n '^---' $FINAL_README_FILE_NAME_FULL_PATH_NAME | tail -1 | cut -d ':' -f 1`
       
        sed -i ''"$TARGET_LINE_NUMBER"',$s/\(^.*\)/&\n/g' $FINAL_README_FILE_NAME_FULL_PATH_NAME
       
        #当不是处于最后一层的时候，移动章节内容合集 所在行到最后一行，如果是处于最后一层，则不做任何操作
        if [ ${#PATHS_LINENUMBER_ARR[@]} -gt 1 ]
        then
            #获取 章节内容合集 的行号
            READ_BY_COLLECT=`grep -n '章节内容合集' $FINAL_README_FILE_NAME_FULL_PATH_NAME | cut -d ':' -f1`
            #获取最后一行的位置
            END_LINE_NUMBER=`grep -n '<a' $FINAL_README_FILE_NAME_FULL_PATH_NAME | tail -1 | cut -d':' -f1`
            
            #将 章节内容合集 这一行移动到最后一行的下一行
            END_LINE_NUMBER=$[$END_LINE_NUMBER+1]
            sed -i ''"$READ_BY_COLLECT"'{h;d};'"$END_LINE_NUMBER"'G' $FINAL_README_FILE_NAME_FULL_PATH_NAME
        fi
       
        #当i=0时特殊处理，先暂时保存当前目录生成的README.md文件，最后和其他所有的README.md合并到一起
        if [ $i -le 1 ]
        then
            mv $FINAL_README_FILE_NAME_FULL_PATH_NAME $SHARDING_README_FILE_NAME_FULL_PATH_NAME
        fi
    
    done;
    echo '完成为'$2'目录下'$1'.md文件及其分片创建breadcrumb使用的README.md.................................................................................'
}    

:<< EOF
    门面模式，统一封装上面的方法，对外提供一个调用接口即可
    $1: $MD_FILE_NAME 
    $2: $MD_FILE_RELATIVE_PATH
    $3: 配置文件后缀名称
EOF

function enhance() {
    echo '开始增强'$2'目录下'$1'.md文件.............................................................................................................................'

    #生成markmap文件
    #--------------------------------------------------------------------------------------------------------------
    # 要操作的md文件的名称，不带文件后缀名
    MD_FILE_NAME=$1
    # 要操作的md文件的相对路径，前后不带有/，用这个变量的时候再加上/
    MD_FILE_RELATIVE_PATH=$2
    # 要操作的md文件的相对与init.sh的路径
    MD_FILE_SOURCE_PATH="docs/blogs/$MD_FILE_RELATIVE_PATH"
    #存放生成的markmap文件的路径的路径前缀
    MD_FILE_MARKMAP_TARGET_PATH_PREFIX="enhance/markmap"
    # 生成的所有markmap文件存放的目录路径
    MD_FILE_MARKMAP_TARGET_PATH="docs/.vuepress/public/$MD_FILE_MARKMAP_TARGET_PATH_PREFIX/$MD_FILE_RELATIVE_PATH"
    # 为所有章节生成的markmap文件展示的标题层级深度
    MD_FILE_CHAPTER_OUTLINE_MARKMAP_HTML_TITLE_DEPTH=5
    #根据xxx.md文件标题生成博客大纲->将博客大纲转换为markmap文件
    generateOutLineAndTransformOutLineToMarkmapForOriginal $MD_FILE_NAME $MD_FILE_SOURCE_PATH $MD_FILE_MARKMAP_TARGET_PATH $MD_FILE_CHAPTER_OUTLINE_MARKMAP_HTML_TITLE_DEPTH
    #--------------------------------------------------------------------------------------------------------------


    #生成guidance文件（guidance文件中引用了上一步骤生成的markmap文件）......
    #--------------------------------------------------------------------------------------------------------------
    #存放生成的guidance文件的路径的路径前缀
    MD_FILE_GUIDANCE_TARGET_PATH_PREFIX="enhance/guidance"
    #生成的所有guidance文件存放的目录路径
    MD_FILE_GUIDANCE_TARGET_PATH="docs/.vuepress/public/$MD_FILE_GUIDANCE_TARGET_PATH_PREFIX/$MD_FILE_RELATIVE_PATH"
    #整个博客的内容guidance（概览）的一级标题
    ENSEMBLE_GUIDANCE_TITLE1_TEXT="博客内容介绍"
    #将上一步生成的markmap转换为guidance（概览）文件
    generateGuidanceByMarkmapForOriginal $MD_FILE_NAME $MD_FILE_SOURCE_PATH $MD_FILE_GUIDANCE_TARGET_PATH $MD_FILE_RELATIVE_PATH $MD_FILE_MARKMAP_TARGET_PATH_PREFIX $ENSEMBLE_GUIDANCE_TITLE1_TEXT
    #--------------------------------------------------------------------------------------------------------------


    #开始让xxx.md文件中的二级标题增加1......'
    #--------------------------------------------------------------------------------------------------------------
    #二级标题序列增加步长
    TITLE2_INCREMENT_STEP=2
    title2IncrementByForOriginal $MD_FILE_NAME $MD_FILE_SOURCE_PATH $TITLE2_INCREMENT_STEP
    #--------------------------------------------------------------------------------------------------------------


    #将xxx.md生成的guidance文件和xxx.md的所有章节生成的guidance文件插入到xxx.md中
    #--------------------------------------------------------------------------------------------------------------
    #导入时使用的路径需要以public开头，所以这里要设置这个路径
    MD_FILE_GUIDANCE_FILE_INCLUDE_PATH="public/$MD_FILE_GUIDANCE_TARGET_PATH_PREFIX/$MD_FILE_RELATIVE_PATH"
    insertGuidanceIntoOriginal $MD_FILE_NAME $MD_FILE_SOURCE_PATH $MD_FILE_GUIDANCE_FILE_INCLUDE_PATH $MD_FILE_GUIDANCE_TARGET_PATH
    #--------------------------------------------------------------------------------------------------------------
    

    #为xxx.md生成章节分片
    #--------------------------------------------------------------------------------------------------------------
    #存放生成的shardings文件的文件夹名称
    MD_FILE_CHAPTER_SHARDINGS_FOLDER_NAME="shardings"
    generateChapterShardingsAndWriteFrontmatterForShardings $MD_FILE_NAME $MD_FILE_SOURCE_PATH $MD_FILE_CHAPTER_SHARDINGS_FOLDER_NAME $MD_FILE_GUIDANCE_TARGET_PATH $ENSEMBLE_GUIDANCE_TITLE1_TEXT
    #--------------------------------------------------------------------------------------------------------------
    
    #生成sidebar配置json并设置锚点
    #--------------------------------------------------------------------------------------------------------------
    #存放生成的sidebar配置json文件的路径的路径前缀    
    MD_FILE_SIDEBAR_CONFIG_TARGET_PATH_PREFIX="enhance/config"
    # 生成的所有chapter文件存放的目录路径
    MD_FILE_SIDEBAR_CONFIG_TARGET_PATH="docs/.vuepress/public/$MD_FILE_SIDEBAR_CONFIG_TARGET_PATH_PREFIX/$MD_FILE_RELATIVE_PATH"
    #为md文件和md文件拆分的所有章节md文件生成侧边栏配置，存放在json文件中
    SIDEBAR_LINK_PREFIX="/blogs/$MD_FILE_RELATIVE_PATH"
    generateSidebarConfigForAllAndSetAnchorForOriginal $MD_FILE_NAME $MD_FILE_SOURCE_PATH $MD_FILE_SIDEBAR_CONFIG_TARGET_PATH $SIDEBAR_LINK_PREFIX $MD_FILE_CHAPTER_SHARDINGS_FOLDER_NAME $ENSEMBLE_GUIDANCE_TITLE1_TEXT
    #--------------------------------------------------------------------------------------------------------------

    #生成breadcrumb使用的README.md
    #--------------------------------------------------------------------------------------------------------------
    #shardings文件所在的相对路径
    generateBreadcrumbREADME $MD_FILE_NAME $MD_FILE_RELATIVE_PATH $MD_FILE_CHAPTER_SHARDINGS_FOLDER_NAME
    #--------------------------------------------------------------------------------------------------------------


    echo '完成增强'$2'目录下'$1'.md文件.............................................................................................................................'
}

:<< EOF
    合并Sidebar使用的配置json并且合并多级README-xxx.md
    $1: $MD_FILE_NAME 
    $2: $MD_FILE_RELATIVE_PATH
EOF

#合并Sidebar使用的配置json和Breadcrumb使用的README.md
function mergeSidebarJsonAndBreadcrumbREADMEShardings() {
    
    echo '开始合并'$2'目录下'$1'.md文件的sidebar使用的配置json和breadcrumb使用的README.............................................................................................................................'
    
    #合并所有的sidebar配置json
    #存放生成的sidebar配置json文件的路径的路径前缀    
    MD_FILE_SIDEBAR_CONFIG_TARGET_PATH_PREFIX="enhance/config"
    MD_FILE_SIDEBAR_CONFIG_TARGET_BASE_PATH="docs/.vuepress/public/$MD_FILE_SIDEBAR_CONFIG_TARGET_PATH_PREFIX"
    # 生成的所有chapter文件存放的目录路径
    MD_FILE_SIDEBAR_CONFIG_TARGET_PATH="$MD_FILE_SIDEBAR_CONFIG_TARGET_BASE_PATH/$2"
    SIDEBAR_CONFIG_JSON_NAME=sidebar-config.json
    #给ehance/config生成一份
    #cat $MD_FILE_SIDEBAR_CONFIG_TARGET_PATH/$1-sidebar-config.json >> $MD_FILE_SIDEBAR_CONFIG_TARGET_BASE_PATH/$SIDEBAR_CONFIG_JSON_NAME
    #直接替换sidebar.js
    cat $MD_FILE_SIDEBAR_CONFIG_TARGET_PATH/$1-sidebar-config.json >> $3
    
    #配置路径导航README.合并深度
    MERGE_DEPTH=2

:<< EOF
    合并深度：所有的博客文档全部都放在blog/docs/blogs目录下，如：
    centos7：
        blog/docs/blogs/environment/centos/centos7/centos7.md
    ubuntu2012：    
        blog/docs/blogs/environment/ubuntu/ubuntu2012/ubuntu2012.md  
    springcloud-erueka：
        blog/docs/blogs/backend/springcloud/springcloud-eureka/springcloud-eureka.md
    springcloud-alibaba：
        blog/docs/blogs/backend/springcloud/springcloud-alibaba/springcloud-alibaba.md
    MERGE_DEPTH的配置，
        MERGE_DEPTH=1
            会合并blog/docs/blogs/environment下的所有路径导航（Breadcrumb）README-xxx.md为一个完整的README.md
        MERGE_DEPTH=2
            会合并blog/docs/blogs/springcloud/下的所有路径导航（Breadcrumb）README-xxx.md为一个完整的README.md
            效果是会将：springcloud-eureka和springcloud-alibaba用到的路径导航README.md合并为一个完整的REAEME文件
            注意：设置为2，则也会默认合并当MERGE_DEPTH=1时的路径导航README

EOF
    #合并breadcrumb使用的README.md
    BASE_PATH='docs/blogs'
    PATH_SUFIX=""
    for((i=1;i<=$MERGE_DEPTH;i++)); do
        PATHS_PART=`echo $2 | cut -d '/' -f$i`
        PATH_SUFIX=$PATH_SUFIX$PATHS_PART/
        COMPLETE_PATH=$BASE_PATH/$PATH_SUFIX
        echo '当前处理路径：'$COMPLETE_PATH
        START_LINE_NUMBER=`grep -n '^---$' $COMPLETE_PATH/README-$1.md | tail -1 | cut  -d ':' -f1`
       
        #如果文件不存在，说明是第一次给README.md中写入内容，则写入头 
        if [ ! -f "$COMPLETE_PATH/README.md" ]
        then
            echo '第一次给文件中写入内容，将头信息也写入进去.....'
            head -$START_LINE_NUMBER $COMPLETE_PATH/README-$1.md >>  $COMPLETE_PATH/README.md
        fi
        
        tail -n +$[$START_LINE_NUMBER+1] $COMPLETE_PATH/README-$1.md >>  $COMPLETE_PATH/README.md   
        
        #操作完成后删除没用的READ-X.md
        echo '删除不再使用的'$COMPLETE_PATH/README-$1.md
        rm -rf $COMPLETE_PATH/README-$1.md

        #删除多余的一级标题
        FIRST_LEVEL1_LINK_LINE_NUMBER=`grep -n '^---$' $COMPLETE_PATH/README.md | tail -1 |cut -d':' -f1`
        FIRST_LEVEL1_LINK_LINE_NUMBER=$[$FIRST_LEVEL1_LINK_LINE_NUMBER+2]
        FIRST_LEVEL1_LINK_TEXT=`cat $COMPLETE_PATH/README.md  | head -n $FIRST_LEVEL1_LINK_LINE_NUMBER | tail -1`
        echo '一级标题行号：'$FIRST_LEVEL1_LINK_LINE_NUMBER
        echo '一级标题内容：'$FIRST_LEVEL1_LINK_TEXT
        echo 'README.md中一级标题行号：'$FIRST_LEVEL1_LINK_LINE_NUMBER'，文本内容：'$FIRST_LEVEL1_LINK_TEXT

        LINE_NUMBER_ARR_STR=`grep -n '^'"$FIRST_LEVEL1_LINK_TEXT"'' $COMPLETE_PATH/README.md | cut -d':' -f1 | tr '\r\n' ' '`
        LINE_NUMBER_ARR=( $LINE_NUMBER_ARR_STR )
        for((j=1;j<${#LINE_NUMBER_ARR[@]};j++)); do
            sed -i ''"${LINE_NUMBER_ARR[j]}"'d' $COMPLETE_PATH/README.md
        done
        
    done

:<< EOF 
EOF

   echo '完成合并'$2'目录下'$1'.md文件的sidebar使用的配置json和breadcrumb使用的README.............................................................................................................................'
}

:<<EOF

对项目中的md文件进行初始化，包含了如下处理工作
1.根据start.ini中的配置自动扫描所有的md文件 ，并增强该md文件
    - 为md文件和md文件的每一个章节生成html格式的markmap文件
    - 为md文件和md文件的每一个章节生成guidance文件（guidance文件中引用了上一步骤生成的markmap文件）
    - 让md文件中的所有二级标题在原来的基础上增加1
    - 为md生成shardings（分片），每一个分片都是一个章节
    - 为md生成sidebar配置并将这个sidebar配置自动写入到sidebar.ts中
        - 每个md文件的sidebar配置包括两部分，第一是按照章节阅读的sidebar配置，第二是章节内容合集的sidebar配置
            - 按照章节阅读的sidebar配置：点击依据此配置生成的sidebar可以导航到md文件的不同章节分片中
            - 章节内容合集的sidebar配置：点击依据此配置生成的sidebar可以导航到md文件的不同章节中，可以实现在一个页面查看这个合集中的所有内容
2.为md文件和md文件的分片生成breadcrumb使用README.md
3.在每个博客正文页面添加banner
    
EOF


function test() {
    # 要操作的md文件的名称，不带文件后缀名
    MD_FILE_NAME=$1
    # 要操作的md文件的相对路径，前后不带有/，用这个变量的时候再加上/
    MD_FILE_RELATIVE_PATH=$2
    #--------------------------------------------------------------------------------------------------------------
    MD_FILE_CHAPTER_SHARDINGS_FOLDER_NAME=shardings
    #shardings文件所在的相对路径
    #generateBreadcrumbREADME $MD_FILE_NAME $MD_FILE_RELATIVE_PATH $MD_FILE_CHAPTER_SHARDINGS_FOLDER_NAME
    generateOutLineAndTransformOutLineToMarkmapForOriginal $1 $2 
}

function init() {
    #获取./config中以config-xxx.ini格式的文件总共有多少个，每个配置文件对应一个md文件
    TOTAL_MD_COUNTS=`ls ./config/ | grep '^config-.*\.ini$' | wc -w`
    echo '可以处理的md文件最大个数：'$TOTAL_MD_COUNTS
    
    #解析config.ini中配置要操作的md文件的名称，并根据配置对md文件进行增强
    for((a=1;a<=$TOTAL_MD_COUNTS;a++))
    do
        IS_ENHANCE=( $( parseIni ./config/start.ini markdown-$a enhance) )
        #如果设置了增强该md，则继续执行下一步
        if [ $IS_ENHANCE == "true" ]
        then
            #获取文件名称
            MD_FILE_NAME=( $( parseIni ./config/start.ini markdown-$a filename) )
            #获取文件相对路径
            MD_FILE_RELATIVE_PATH=( $( parseIni ./config/start.ini markdown-$a relative_path) )
            #进行增强处理
            enhance $MD_FILE_NAME $MD_FILE_RELATIVE_PATH
            #test $MD_FILE_NAME $MD_FILE_RELATIVE_PATH $a
        fi    
    done

    #删除旧的sidebar.js并拼接sidebar.js的头
    SIDEBAR_JS_FULL_NAME_PATH=docs/.vuepress/sidebar.ts
    rm -rf  $SIDEBAR_JS_FULL_NAME_PATH
    echo "import { sidebar } from \"vuepress-theme-hope\";" >> $SIDEBAR_JS_FULL_NAME_PATH
    echo " " >> $SIDEBAR_JS_FULL_NAME_PATH
    echo "export default sidebar([" >> $SIDEBAR_JS_FULL_NAME_PATH

    #合并生成的sidebar配置json和最外层的README.md
    for((b=1;b<=$TOTAL_MD_COUNTS;b++))
    do
        IS_ENHANCE=( $( parseIni ./config/start.ini markdown-$b enhance) )
        #如果设置了增强该md，则继续执行下一步
        if [ $IS_ENHANCE == "true" ]
        then
            #获取文件名称
            MD_FILE_NAME=( $( parseIni ./config/start.ini markdown-$b filename) )
            #获取文件相对路径
            MD_FILE_RELATIVE_PATH=( $( parseIni ./config/start.ini markdown-$b relative_path) )
            #进行增强处理
            mergeSidebarJsonAndBreadcrumbREADMEShardings $MD_FILE_NAME $MD_FILE_RELATIVE_PATH $SIDEBAR_JS_FULL_NAME_PATH
        fi    
    done

    #拼接json尾部
    echo "]);" >> $SIDEBAR_JS_FULL_NAME_PATH
}

init
