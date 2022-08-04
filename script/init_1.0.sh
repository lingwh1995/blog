#!/usr/bin/env sh

:<<EOF
    版本：1.0
    说明：含有生成章节目录列表的代码，生成的侧边栏配置中会多一个菜单：一次阅读全部内容
EOF

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

#为xxx.md和xxx.md的所有章节生成二级和三级目录大纲，并将这个目录大纲装换为markmap文件
function createOutLineMarkmapHtml(){
    find . -name $1.md
    echo '生成markmap文件开始........................................................................'
    echo '开始为'$1'.md生成markmap文件........................'
  
    #删除上一次操作后的md文件
    rm -rf $2/$1.md
    echo '删除上一次操作后的'$1'.md文件'
    
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


#生成xxx.md文件生成xxx-guidance.md
function createOutLineGuidanceMd(){
    echo '开始为'$1'md生和'$1'.md的所有章节成guidance文件........................................................................'
    
    echo '开始为'$1'.md生成guidance文件.......................................................'
    
    #创建存放xxx.md成的guidance文件的文件夹
    mkdir -p $3

    #创建xxx-guidance.md，并写入博客guidance内容
cat > $3/$1-guidance.md  << EOF
---
article: false
---

# 博客内容介绍
## 博客内容概述

	本篇博客的内容主要介绍安装Centos7操作系统、以及在Centos操作系统上搭建常见的开发环境，如Jdk、Maven、Docker、
    Rancher、Minikube、Kubernetes、nginx、等软件的详细搭建过程，博客内容中图片较少，主要以实用为主，所有代码均
	经过严格测试，可直接复制运行即可。
## 博客内容大纲
	
###	简单版博客内容大纲
<Markmap localtion="/$5/$4/$1-outline2.html"/>

>

###	详细版博客内容大纲
<Markmap localtion="/$5/$4/$1-outline3.html"/>

>

EOF

    echo '结束为'$1'.md生成guidance文件.............................................................'

    echo '开始为'$1'.md所有章节生成guidance文件......................................................'

    #获取一级标题总数
    TOTAL_TITLE1_COUNTS=`grep '^#\{1\} [1-9][0-9]\?' $2/$1.md | tail -1 | cut -c 3-4 | sed 's/\.//g'`

    #创建存放所有xxx.md所有章节生成guidance文件的文件夹
    mkdir -p $3/chapter

    for ((i=1; i<=$TOTAL_TITLE1_COUNTS; i++))
    do

    echo '开始为'$1'.md所有章节'$i'生成guidance文件......................................................'
cat > $3/chapter/$1-guidance-chapter$i.md  << EOF    

## $i.1.章节大纲
	
<Markmap localtion="/$5/$4/chapter/$1-outline5-chapter$i.html"/>
EOF
    echo '完成为'$1'.md所有章节'$i'生成guidance文件......................................................'
   
    done

    echo '完成为'$1'.md所有章节生成guidance文件......................................................'

    echo '完成为'$1'md生和'$1'.md的所有章节成guidance文件........................................................................'
}


#二级标题序列增加1
function title2Increment(){
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
            sed -i 's/\(^\#\{2,4\} \)'"$i"'\.'"$j"'\./\1'"$i"'\.'"$[$j+1]"'\./g' $2/$1.md
            #处理二级标题中+1
            #sed -i 's/^## '"$i"'\.'"$j"'\./## '"$i"'\.'"$[$j+1]"'\./g' $2/$1.md
            #处理三级标题中+1
            #sed -i 's/^### '"$i"'\.'"$j"'\./### '"$i"'\.'"$[$j+1]"'\./g' $2/$1.md
            #处理四级标题中+1
            #sed -i 's/^#### '"$i"'\.'"$j"'\./##### '"$i"'\.'"$[$j+1]"'\./g' $2/$1.md
            #处理五级标题中+1
            #sed -i 's/^##### '"$i"'\.'"$j"'\./##### '"$i"'\.'"$[$j+1]"'\./g' $2/$1.md
        done
    done

    echo '完成为'$1'.md中所有二级标题序列增加1........................................................................' 
}

#给xxx.md文件中插入MarkmapComponment（vue插件）
function insertOutLineGuidanceIntoMd(){
    echo '开始为'$1'.md中插入MarkmapComponment........................................................................'

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

    echo '完成为'$1'.md中插入MarkmapComponment........................................................................'
}

#把上一步骤生成的MD文件根据章节数目切割成多个小md文件，每一个章节拆分为一个md文件
function createShardingsMd(){
    echo '开始根据章节切割'$1'.md文件........................................................................'

    #删除上一次操作产生的shardings文件夹
    rm -rf $2/shardings

    #创建存放每一章节md文件的目录
    mkdir $2/shardings

    #获取一级标题总数
    TOTAL_TITLE1_COUNTS=`grep '^# [1-9][0-9]\?\.' $2/$1.md | tail -1 | cut -c 3-4 | sed 's/\.//g'`
    echo '一级标题总数'$TOTAL_TITLE1_COUNTS
    
    
    for ((i=1; i<=$TOTAL_TITLE1_COUNTS; i++))
    do
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
        echo "star: $i" >>  $2/$3/$1-chapter-$CHAPTER_NAME.md
        echo "title: xxxx" >>  $2/$3/$1-chapter-$CHAPTER_NAME.md
        echo "---" >>  $2/$3/$1-chapter-$CHAPTER_NAME.md
        echo "" >>  $2/$3/$1-chapter-$CHAPTER_NAME.md

        #根据行号将内容输出到文件
        sed -n ''"$CHAPTER_START_LINE_NUMBER"','"$CHAPTER_END_LINE_NUMBER"'p' $2/$1.md >> $2/$3/$1-chapter-$CHAPTER_NAME.md

    done

    echo '完成根据章节切割'$1'.md文件........................................................................'
}

#根据上一步骤生成的xxx.md文件的章节数目创建章节导航列表md，并把章节导航列表md插入到xxx.md文件中
function createAndInsertChapterCatalogMd(){
    echo '开始为'$1'.md生成章节导航列表md文件并将章节导航列表md文件插入到xxx.md文件中........................................................................'

    echo '开始为'$1'.md生成章节导航列表md文件........................'

    #获取一级标题总数
    TOTAL_TITLE1_COUNTS=`grep '^# [1-9][0-9]\?\.' $2/$1.md | tail -1 | cut -c 3-4 | sed 's/\.//g'`
    echo '一级标题总数'$TOTAL_TITLE1_COUNTS

    MD_FILE_CATALOG_NAME="$1-catalog.md"
    MD_FILE_CATALOG_FULL_PATH_NAME="$2/$3/$1-catalog.md"
    #每次写入之前先删除旧文件，再写入新的内容
    rm -rf $MD_FILE_CATALOG_FULL_PATH_NAME
    echo "---" >> $MD_FILE_CATALOG_FULL_PATH_NAME
    echo "article: false" >> $MD_FILE_CATALOG_FULL_PATH_NAME
    echo "---" >> $MD_FILE_CATALOG_FULL_PATH_NAME
    echo ">" >> $MD_FILE_CATALOG_FULL_PATH_NAME
    echo "# 🌳分章节阅读" >> $MD_FILE_CATALOG_FULL_PATH_NAME
    echo ">" >> $MD_FILE_CATALOG_FULL_PATH_NAME

    #拼接博客内容介绍，注意：此时shardings中还没有博客内容介绍这个md，要在下面的步骤中把guidance文件复制一份放在shardings目录中
    echo "- [x] 在Centos上搭建开发环境-<a href='./$3/$1-chapter-0.博客内容介绍.html' target='_blank'>博客内容介绍</a>" >> $MD_FILE_CATALOG_FULL_PATH_NAME

    #拼接章节导航列表
    for ((i=1; i<=$TOTAL_TITLE1_COUNTS; i++))
    do
        if [ $i -eq "2" ]
        then
            echo " " >> $MD_FILE_CATALOG_FULL_PATH_NAME
        fi
        #获取章节名称
        CHAPTER_NAME=`grep -n '^# '"$i"'\.' $2/$1.md | cut -d ' ' -f 2`
        echo '章节名称：'$CHAPTER_NAME

        #拼接真正导航列表内容
        echo "- [x] 在Centos上搭建开发环境-<a href='./$3/$1-chapter-$CHAPTER_NAME.html' target='_blank'>$CHAPTER_NAME</a>" >> $MD_FILE_CATALOG_FULL_PATH_NAME
    done
    echo ">" >> $MD_FILE_CATALOG_FULL_PATH_NAME
    
    echo '完成为'$1'.md生成章节导航列表md文件........................'

    echo '开始将为'$1'.md生成的章节导航列表md文件插入到xxx.md中........................'

    #给第一个一级标题上面一行的上面两行的插入guidance.md语句上面一行插入catalog.md
    #获取一级标题所在行号
    TARGET_LINE_NUMBER=`grep -n '^# 1\.' $2/$1.md | cut -d ':' -f 1`
    echo '标题 # 1.所在行号：'$TARGET_LINE_NUMBER
    TARGET_LINE_NUMBER=$[$TARGET_LINE_NUMBER-2]
    echo '目标插入行号：'$TARGET_LINE_NUMBER

    echo '开始将'$1'.md生成博客内容介绍拷贝一份到'$2'/shardings目录中........................'
    cp $4/$1-guidance.md $2/shardings/$1-chapter-0.博客内容介绍.md
    echo '完成将'$1'.md生成博客内容介绍拷贝一份到'$2'/shardings目录中........................'

    #特别注意:将xxx-catalog.md插入到xxx.md的时候过滤掉Frontmatter 配置相关内容
    FRONTMATTER_END_LINE_NUMBER=`grep -n '^-\{3\}' $2/$3/$1-catalog.md | tail -1 | cut -d ':' -f 1`
    #获取FRONTMATTER_END_LINE_NUMBER所在行数的下一行
    FRONTMATTER_END_LINE_NUMBER=$[$FRONTMATTER_END_LINE_NUMBER+1]
    TARGET_STR="@include(./$3/$1-catalog.md{$FRONTMATTER_END_LINE_NUMBER-})"
    sed -i ''"$TARGET_LINE_NUMBER"'i '"$TARGET_STR"'' $2/$1.md

    echo '完成将为'$1'.md生成的章节导航列表md文件插入到xxx.md中........................'


    echo '完成为'$1'.md生成章节导航列表md文件并将章节导航列表md文件插入到xxx.md文件中........................................................................'
}

#为xxx.md文件和xxx.md文件拆分的所有章节md文件生成侧边栏配置，存放在json文件中
function createSidebarConfigForMDAndMdShardings(){
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
    echo $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    echo "    {" >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    echo "      // 必要的，分组的标题文字" >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    echo "      text: \"在Centos7上搭建开发环境\"," >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    echo "      // 可选的, 分组标题对应的图标" >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    echo "      icon: \"a-archivecatalogue-fill\"," >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    echo "      // 可选的, 设置分组是否可以折叠，默认值是 false" >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    echo "      collapsable: true," >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    echo "      // 必要的，分组的子项目" >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    echo "      children: [" >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    
    #左侧导航栏拼接博客内容介绍

    echo "        {" >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    echo "          text: \"博客内容介绍\"," >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    echo "          link:\"$4/$5/$1-chapter-0.博客内容介绍.md\"," >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    echo "          icon:\"note\"," >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    echo "        }," >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME

    #拼接章节每个章节的导航列表
    for ((i=1; i<=$TOTAL_TITLE1_COUNTS; i++))
    do
        #获取章节名称
        CHAPTER_NAME=`grep -n '^# '"$i"'\.' $2/$1.md | cut -d ' ' -f 2`
        echo '章节名称：'$CHAPTER_NAME

        echo "        {" >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME

        #把章节名称作为侧边栏中显示的导航条目的名称
        echo "          text:\"$CHAPTER_NAME\"," >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
        echo "          link:\"$4/$5/$1-chapter-$CHAPTER_NAME.md\"," >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
        echo "          icon:\"note\"," >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME

        echo "        }," >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    done
    
    #拼接一次阅读全部内容
    echo "        {" >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    echo "          text: \"$[$TOTAL_TITLE1_COUNTS+1].一次阅读全部章节内容\"," >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    echo "          link: \"$4/$1.md\"," >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    echo "          icon:\"folder\"," >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    echo "        }" >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME

    echo "      ]," >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME
    echo "    }," >> $SIDEBAR_CONFIGFILE_FULL_PATH_NAME

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
function enhanceMD() {
    echo '开始增强'$1'文件.............................................................................................................................'
    
    # 要操作的md文件的名称，不带文件后缀名
    MD_FILE_NAME=$1
    # 要操作的md文件的相对路径，前后不带有/，用这个变量的时候再加上/
    MD_FILE_RELATIVE_PATH=$2
    # 要操作的md文件的相对与init.sh的路径
    MD_FILE_SOURCE_PATH="docs/blogs/$MD_FILE_RELATIVE_PATH"
    #--------------------------------------------------------------------------------------------------------------
    #存放生成的markmap文件的路径的路径前缀
    MD_FILE_MARKMAP_TARGET_PATH_PREFIX="enhance/markmap"
    #--------------------------------------------------------------------------------------------------------------
    # 生成的所有markmap文件存放的目录路径
    MD_FILE_MARKMAP_TARGET_PATH="docs/.vuepress/public/$MD_FILE_MARKMAP_TARGET_PATH_PREFIX/$MD_FILE_RELATIVE_PATH"
    # 为所有章节生成的markmap文件展示的标题层级深度
    MD_FILE_CHAPTER_OUTLINE_MARKMAP_HTML_TITLE_DEPTH=5

    #开始生成markmap文件
    createOutLineMarkmapHtml $MD_FILE_NAME $MD_FILE_SOURCE_PATH $MD_FILE_MARKMAP_TARGET_PATH $MD_FILE_CHAPTER_OUTLINE_MARKMAP_HTML_TITLE_DEPTH

    #开始生成guidance文件（guidance文件中引用了上一步骤生成的markmap文件）......
    #--------------------------------------------------------------------------------------------------------------
    #存放生成的guidance文件的路径的路径前缀
    MD_FILE_GUIDANCE_TARGET_PATH_PREFIX="enhance/guidance"
    #--------------------------------------------------------------------------------------------------------------
    # 生成的所有guidance文件存放的目录路径
    MD_FILE_GUIDANCE_TARGET_PATH="docs/.vuepress/public/$MD_FILE_GUIDANCE_TARGET_PATH_PREFIX/$MD_FILE_RELATIVE_PATH"
    createOutLineGuidanceMd $MD_FILE_NAME $MD_FILE_SOURCE_PATH $MD_FILE_GUIDANCE_TARGET_PATH $MD_FILE_RELATIVE_PATH $MD_FILE_MARKMAP_TARGET_PATH_PREFIX

    #开始让md文件中的二级标题增加1......'
    title2Increment $MD_FILE_NAME $MD_FILE_SOURCE_PATH

    #将xxx.md生成的guidance文件和xxx.md的所有章节生成的guidance文件插入到xxx.md中
    #导入时使用的路径需要以public开头，所以这里要设置这个路径
    MD_FILE_GUIDANCE_FILE_INCLUDE_PATH="public/$MD_FILE_GUIDANCE_TARGET_PATH_PREFIX/$MD_FILE_RELATIVE_PATH"
    insertOutLineGuidanceIntoMd $MD_FILE_NAME $MD_FILE_SOURCE_PATH $MD_FILE_GUIDANCE_FILE_INCLUDE_PATH $MD_FILE_GUIDANCE_TARGET_PATH
    
    #--------------------------------------------------------------------------------------------------------------
    #存放生成的shardings文件的文件夹名称
    MD_FILE_SHARDINGS_FOLDER_NAME="shardings"
    #--------------------------------------------------------------------------------------------------------------
    createShardingsMd $MD_FILE_NAME $MD_FILE_SOURCE_PATH $MD_FILE_SHARDINGS_FOLDER_NAME

    #为xxx.md文件创建章节导航目录
    createAndInsertChapterCatalogMd $MD_FILE_NAME $MD_FILE_SOURCE_PATH $MD_FILE_SHARDINGS_FOLDER_NAME $MD_FILE_GUIDANCE_TARGET_PATH
    
    #--------------------------------------------------------------------------------------------------------------
    #存放生成的sidebar配置json文件的路径的路径前缀    
    MD_FILE_SIDEBAR_CONFIG_TARGET_PATH_PREFIX="enhance/config"
    #--------------------------------------------------------------------------------------------------------------
    # 生成的所有chapter文件存放的目录路径
    MD_FILE_SIDEBAR_CONFIG_TARGET_PATH="docs/.vuepress/public/$MD_FILE_SIDEBAR_CONFIG_TARGET_PATH_PREFIX/$MD_FILE_RELATIVE_PATH"
    
    #为md文件和md文件拆分的所有章节md文件生成侧边栏配置，存放在json文件中
    SIDEBAR_LINK_PREFIX="/blogs/$MD_FILE_RELATIVE_PATH"

    createSidebarConfigForMDAndMdShardings $MD_FILE_NAME $MD_FILE_SOURCE_PATH $MD_FILE_SIDEBAR_CONFIG_TARGET_PATH $SIDEBAR_LINK_PREFIX $MD_FILE_SHARDINGS_FOLDER_NAME

    echo '完成增强'$1'.md文件.............................................................................................................................'
}

#解析yaml
function parse_yaml() {
   local prefix=$2
   local s='[[:space:]]*' w='[a-zA-Z0-9_]*' fs=$(echo @|tr @ '\034')
   sed -ne "s|^\($s\):|\1|" \
        -e "s|^\($s\)\($w\)$s:$s[\"']\(.*\)[\"']$s\$|\1$fs\2$fs\3|p" \
        -e "s|^\($s\)\($w\)$s:$s\(.*\)$s\$|\1$fs\2$fs\3|p"  $1 |
   awk -F$fs '{
      indent = length($1)/2;
      vname[indent] = $2;
      for (i in vname) {if (i > indent) {delete vname[i]}}
      if (length($3) > 0) {
         vn=""; for (i=0; i<indent; i++) {vn=(vn)(vname[i])("_")}
         printf("%s%s%s=\"%s\"\n", "'$prefix'",vn, $2, $3);
      }
   }'
}
# 要操作的md文件的名称，不带文件后缀名
MD_FILE_1_NAME="centos7"
# 要操作的md文件的相对路径，前后不带有/，用这个变量的时候再加上/
MD_FILE_1_RELATIVE_PATH="environment/centos/"$MD_FILE_1_NAME

enhanceMD $MD_FILE_1_NAME $MD_FILE_1_RELATIVE_PATH


#parse_yaml "./config.yaml" "conf_"
