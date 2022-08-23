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
        tree $fileName -I 'tree.md' --dirsfirst > $fileName/tree.md
        #替换`为•
        sed -i 's/`/•/g' $fileName/tree.md
    fi
    done
}


#为当前目录创建tree.md文件
function createTreeMDForCurrentDir(){
    #创建新的tree.md文件
    tree -I 'note|tree.md|createTreeMD.sh|tree.md' --dirsfirst > tree.md
}


#替换当前目录下tree.md第一行.为当为文件夹名称
function formatTreeMD(){
    #替换当前文件夹下tree.md文件的第一行的.为当前文件夹名称
    sed -i '1,/./c\'"$1"'' tree.md
    #替换`为•
    sed -i 's/`/•/g' tree.md
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
    createTreeMDForCurrentDir
    formatTreeMD $1
    afterCreateTreeMD
}

#当前shell所在文件夹名称
PROJECT_DIR_NAME=springcloud-eureka
createTreeMD $PROJECT_DIR_NAME
