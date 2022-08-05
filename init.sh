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

#解析ini文件
function parseIni() {
    INIFILE=$1; SECTION=$2; ITEM=$3
    result=`awk -F '=' '/\['$SECTION'\]/{a=1}a==1&&$1~/'$ITEM'/{print $2;exit}' $INIFILE`
    echo ${result}
}

#给xxx.md写入Frontmatter配置信息
function writeFrontmatterForOriginal() {
    #在写入内容之前先写入Frontmatter选项配置信息
    echo "---" >>  $2/$1.md
    
    #写入 博客列表展示的标题，这是地址栏上面的标题，同时也是博客列表中显示的标题
    #获取完整的的md文件中的Frontmatter选项配置信息中的title属性的值
    MD_FILE_ENSEMBLE_FRONTMATTER_TITLE=( $( parseIni ./config/config-$1.ini ensemble title) )
    echo "title: $MD_FILE_ENSEMBLE_FRONTMATTER_TITLE" >>  $2/$1.md

    #抽取所有一级标题，合并起来作为博客内容概述的一部分
    BLOG_CONTENT_INTRO=`grep '^# [1-9][0-9]\?\.' $2/$1.md.bak | cut -d. -f2 | tr '\r\n' ','`
    #写入 博客列表展示的description，这是地址栏上面的标题，同时也是博客列表中显示的标题
    BLOG_CONTENT_INTRO='本篇博客涉及主要内容有：'$BLOG_CONTENT_INTRO'具体每个章节中包含的内容可使通过下面博客内容大纲进行查看，博客内容中图片较少，主要以实用为主，所有代码均经过严格测试，可直接复制运行即可。'
    echo "description: $BLOG_CONTENT_INTRO" >>  $2/$1.md

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
    
    echo "---" >>   $2/$1.md
    echo "" >>  $2/$1.md
}

#为xxx.md和xxx.md的所有章节生成二级和三级目录大纲，并将这个目录大纲转换为markmap文件
function generateOutLineAndTransformOutLineToMarkmapForOriginal(){
    find . -name $1.md
    echo '生成markmap文件开始........................................................................'
    echo '开始为'$1'.md生成markmap文件........................'
  
    #删除上一次操作后的md文件
    rm -rf $2/$1.md
    echo '删除上一次操作后的'$1'.md文件'
    
    #调用写入Frontmatter配置的方法
    writeFrontmatterForOriginal $1 $2

    #从副本恢复一份新的md文件
    cat $2/$1.md.bak >> $2/$1.md
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


#生成xxx.md文件生成xxx-guidance.md
function generateGuidanceByMarkmapForOriginal(){
    echo '开始为'$1'md生和'$1'.md的所有章节成guidance文件........................................................................'
    
    echo '开始为'$1'.md生成guidance文件.......................................................'
    
    #创建存放xxx.md成的guidance文件的文件夹
    mkdir -p $3

    #抽取所有一级标题，合并起来作为博客内容概述的一部分
    BLOG_CONTENT_INTRO=`grep '^# [1-9][0-9]\?\.' $2/$1.md | sed 's/#/  /g'`
    #创建xxx-guidance.md，并写入博客guidance内容

    #获取完整的的md文件中的Frontmatter选项配置信息中的title属性的值
    MD_FILE_ENSEMBLE_FRONTMATTER_TITLE=( $( parseIni ./config/config-$1.ini ensemble title) )

cat > $3/$1-guidance.md  << EOF
---
title: $MD_FILE_ENSEMBLE_FRONTMATTER_TITLE-0.$6
headerDepth: 4
isOriginal: true
category:
star: false
copyright: false
tag:
  - $6
date: 2020-01-01
---

# $6 {#intro}
## 博客内容概述
    本篇博客涉及主要内容有：
$BLOG_CONTENT_INTRO
	具体每个章节中包含的内容可使通过下面博客内容大纲进行查看，博客内容中图片较少，主要以实用为主，所有代码均经过
    严格测试，可直接复制运行即可。
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
	具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看，本章节内容中图片较少，主要以实用为主，所有代码均经过严格
    测试，可直接复制运行即可。

## $i.2.章节内容大纲
	
<Markmap localtion="/$5/$4/chapter/$1-outline5-chapter$i.html"/>

EOF
    echo '完成为'$1'.md所有章节'$i'生成guidance文件......................................................'
   
    done

    echo '完成为'$1'.md所有章节生成guidance文件......................................................'

    echo '完成为'$1'md生和'$1'.md的所有章节成guidance文件........................................................................'
}

#二级标题序列增加1
function title2IncrementByForOriginal(){
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

#给xxx.md文件中插入Guidance
function insertGuidanceIntoOriginal(){
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

#把上一步骤生成的MD文件根据章节数目切割成多个小md文件，每一个章节拆分为一个md文件，并同时给分片写入Frontmatter信息
function generateChapterShardingsAndWriteFrontmatterForShardings(){
    echo '开始根据章节切割'$1'.md文件........................................................................'

    #删除上一次操作产生的shardings文件夹
    rm -rf $2/shardings

    #创建存放每一章节md文件的目录
    mkdir $2/shardings

    echo '开始为'$1'.md生成内容介绍文件................................................'
    #将前面生成的xxx-guidance.md拷贝一份到所有章节目录中，并重名一下
    echo '开始将'$1'.md生成博客内容介绍拷贝一份到'$2'/shardings目录中........................'
    cp $4/$1-guidance.md $2/shardings/$1-chapter-0.$5.md
    echo '完成将'$1'.md生成博客内容介绍拷贝一份到'$2'/shardings目录中........................'
    echo '完成为'$1'.md生成内容介绍文件................................................'
    
    #获取一级标题总数
    TOTAL_TITLE1_COUNTS=`grep '^# [1-9][0-9]\?\.' $2/$1.md | tail -1 | cut -c 3-4 | sed 's/\.//g'`
    echo '一级标题总数'$TOTAL_TITLE1_COUNTS
    
    for ((i=1; i<=$TOTAL_TITLE1_COUNTS; i++))
    do
        echo '开始为'$1'.md生成分片文件写入Frontmatter配置信息................................................'
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
        CHAPTER_CONTENT_INTRO=`grep '^## '"$i"'\.' $2/$1.md | sed 's/#/\t/g'`
        #拼接完整的章节描述
        CHAPTER_CONTENT_INTRO='本章节涉及主要内容有：$CHAPTER_CONTENT_INTRO具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看，本章节内容中图片较少，主要以实用为主，所有代码均经过严格测试，可直接复制运行即可。'
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
        
        echo "---" >>  $2/$3/$1-chapter-$CHAPTER_NAME.md
        echo "" >>  $2/$3/$1-chapter-$CHAPTER_NAME.md
        echo '完成为'$1'.md生成分片文件写入Frontmatter配置信息................................................'

        echo '开始为'$1'.md生成分片文件写入正文内容................................................'
        #根据行号将内容输出到文件
        sed -n ''"$CHAPTER_START_LINE_NUMBER"','"$CHAPTER_END_LINE_NUMBER"'p' $2/$1.md >> $2/$3/$1-chapter-$CHAPTER_NAME.md
        echo '完成为'$1'.md生成分片文件写入正文内容................................................'
    done

    echo '完成根据章节切割'$1'.md文件........................................................................'
}


#为xxx.md文件和xxx.md拆分的所有章节md文件生成侧边栏配置，存放在json文件中，并且给除 博客内容介绍章节 外所有一级标题添加锚点
function generateSidebarConfigForAllAndSetAnchorForOriginal(){
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
    
    echo "  {" >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    echo "      // 必要的，分组的标题文字" >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    echo "      text: \"在Centos7上搭建开发环境\"," >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
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
    #sed -i 's/\(^# '"$k"'\..{*}\)/& \{#'"$K"'\.\}/g' $2/$1.md
    sed -i 's/\(^# '"$i"'\..*\)/& \{#'"$i"'\.\}/g' $2/$1.md
    done
    
    echo '完成为'$1'.为md文件和md文件拆分的所有章节md文件生成侧边栏配置.................................................................................'
}

#为md文件和md文件拆分的所有章节md文件生成侧边栏配置，存放在json文件中
function writeSidebarConfig(){
    pwd
    #切换到上一次操作的目录
   # cd -

   # pwd
}    

#门面模式，统一封装上面的方法，对外提供一个调用接口即可
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
    MD_FILE_SHARDINGS_FOLDER_NAME="shardings"
    generateChapterShardingsAndWriteFrontmatterForShardings $MD_FILE_NAME $MD_FILE_SOURCE_PATH $MD_FILE_SHARDINGS_FOLDER_NAME $MD_FILE_GUIDANCE_TARGET_PATH $ENSEMBLE_GUIDANCE_TITLE1_TEXT
    #--------------------------------------------------------------------------------------------------------------
    
    #生成sidebar配置json并设置锚点
    #--------------------------------------------------------------------------------------------------------------
    #存放生成的sidebar配置json文件的路径的路径前缀    
    MD_FILE_SIDEBAR_CONFIG_TARGET_PATH_PREFIX="enhance/config"
    # 生成的所有chapter文件存放的目录路径
    MD_FILE_SIDEBAR_CONFIG_TARGET_PATH="docs/.vuepress/public/$MD_FILE_SIDEBAR_CONFIG_TARGET_PATH_PREFIX/$MD_FILE_RELATIVE_PATH"
    #为md文件和md文件拆分的所有章节md文件生成侧边栏配置，存放在json文件中
    SIDEBAR_LINK_PREFIX="/blogs/$MD_FILE_RELATIVE_PATH"
    generateSidebarConfigForAllAndSetAnchorForOriginal $MD_FILE_NAME $MD_FILE_SOURCE_PATH $MD_FILE_SIDEBAR_CONFIG_TARGET_PATH $SIDEBAR_LINK_PREFIX $MD_FILE_SHARDINGS_FOLDER_NAME $ENSEMBLE_GUIDANCE_TITLE1_TEXT
    #--------------------------------------------------------------------------------------------------------------

    echo '完成增强'$2'目录下'$1'.md文件.............................................................................................................................'
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
2.   
    
EOF

function init(){
    #获取./config中以config-xxx.ini格式的文件总共有多少个，每个配置文件对应一个md文件
    TOTAL_MD_COUNTS=`ls ./config/ | grep '^config-.*\.ini$' | wc -w`
    echo '可以处理的md文件最大个数：'$TOTAL_MD_COUNTS

    #解析config.ini中配置要操作的md文件的名称
    for((i=1;i<=$TOTAL_MD_COUNTS;i++))
    do
        IS_ENHANCE=( $( parseIni ./config/start.ini markdown-$i enhance) )
        #如果设置了增强该md，则继续执行下一步
        if [ $IS_ENHANCE == "true" ]
        then
            #获取文件名称
            MD_FILE_NAME=( $( parseIni ./config/start.ini markdown-$i fiename) )
            #获取文件相当路径
            RELATIVE_PATH=( $( parseIni ./config/start.ini markdown-$i relative_path) )
            #进行增强处理
            enhance $MD_FILE_NAME $RELATIVE_PATH
        fi    
    done
    
}
init

