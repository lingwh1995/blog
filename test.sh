
#引入公共的工具包
source ./enhance/lib/tools.sh

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
generateHrefValueForPure