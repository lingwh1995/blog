#!/bin/bash

#安装tree命令软件包
function beforeCreateTreeMD() {
    #ubuntu环境中安装tree
    apt-get -y install tree
    #centos环境中安装tree
    yum -y install tree
}


#为当前目录中的所有子模块创建tree.md文件
function createTreeMDForChildDir() {
    for item in `ls`
    do
    fileName=$item
    if [ -d $fileName ]
    then
        #创建新的tree.md文件
        tree $fileName -I 'tree.md|SpringCloudServiceDiscoveryController.java' --dirsfirst > $fileName/tree.md
        #替换`为•
        sed -i 's/`/•/g' $fileName/tree.md
        #获取结束删除的行数
        END_LINE_NUMBER=`cat $fileName/tree.md | wc -l`
        #获取开始删除的行数
        START_LINE_NUMBER=$[$END_LINE_NUMBER-1]
        sed -i ''"$START_LINE_NUMBER"','"$END_LINE_NUMBER"'d' $fileName/tree.md
        #删除md文本中最后一个字符，就是结尾符
        head -c -1 $fileName/tree.md > $fileName/tree.md.bak
        mv $fileName/tree.md.bak $fileName/tree.md
    fi
    done
}


#为当前目录创建tree.md文件
function createTreeMDForCurrentDir(){
    #创建新的tree.md文件
    tree -I 'note|tree.md|createTreeMD.sh|tree.md' --dirsfirst > tree.md
    #替换当前文件夹下tree.md文件的第一行的.为当前文件夹名称
    sed -i '1,/./c\'"$1"'' tree.md
    #替换`为•
    sed -i 's/`/•/g' tree.md
    #获取结束删除的行数
    END_LINE_NUMBER=`cat tree.md | wc -l`
    #获取开始删除的行数
    START_LINE_NUMBER=$[$END_LINE_NUMBER-1]
    sed -i ''"$START_LINE_NUMBER"','"$END_LINE_NUMBER"'d' tree.md
    #删除md文本中最后一个字符，就是结尾符
    head -c -1 tree.md > tree.md.bak
    mv tree.md.bak tree.md
}


#提交自动生成的tree.md
function afterCreateTreeMD() {
    git add .
    git commit -m '自动生成tree.md'
}


#门面模式,一次封装所有操作
function createTreeMD(){
    beforeCreateTreeMD
    createTreeMDForChildDir
    createTreeMDForCurrentDir $1
    afterCreateTreeMD
}

#当前shell所在文件夹名称
PROJECT_DIR_NAME=springcloud-eureka
createTreeMD $PROJECT_DIR_NAME
