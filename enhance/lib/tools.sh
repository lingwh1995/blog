:<< EOF
    定义一些公共的常量
EOF

#---------------------------------------------------------------------------------
#enhance文件夹的相对与init.sh的位置
ENHANCE_HOME=./enhance
#enhance文件夹中conf文件夹的位置
ENHANCE_CONFIG_PATH=$ENHANCE_HOME/config

#enhance文件夹中存放引导文件的文件夹的位置
ENHANCE_BOOT_PATH=$ENHANCE_HOME/boot
#enhance文件夹中存放引导配置文件中配置文件的前缀
ENHANCE_BOOT_INI_NAME_PREFIX=$ENHANCE_BOOT_PATH/boot


#存放日志文件的文件夹
ENHANCE_LOG_HOME=$ENHANCE_HOME/log
#日志文件的名称
ENHANCE_LOG_NAME=enhance-`date +"%Y-%m-%d"`.log
#日志文件的全路径名
ENHANCE_LOG_FULL_PATH_NAME=$ENHANCE_LOG_HOME/$ENHANCE_LOG_NAME

#docs文件夹的目录
DOCS_PATH=docs/blogs
#public文件夹的位置
PUBLIC_FOLDER_PATH=docs/.vuepress/public

#本地文档原件仓库名称
LOCAL_DOCUMENTS_ORIGINAL_REPOSIROTY_NAME=books
#---------------------------------------------------------------------------------

:<< EOF
    基础的ini解析方法
    $1:要解析的ini配置文件全路径名
    $2:要解析的ini配置文件中具体的某一块配置信息的标识id
    $3:要解析的ini配置文件中具体的某一块配置信息中的配置项的key
EOF


:<< EOF
    echo函数的增强方法，分下面几种情况
      有一个参数
        - b          输出空白行
        - banner     输出banner
        - default    单纯输出日志
      有两个参数
        - u          输出空白行->输出日志
        - d          输出日志->输出空白行
EOF
function log() {
    #此处直接返回，不让这个打印日志的方法执行了，以后需要这个方法，在把这个方法放开
    return 0

    CURRENT_TIME=`date +"%Y-%m-%d %H:%M:%S"`
    #如果传入了一个参数
    if [ $# -eq 1 ]
    then
            #输出空白行
        if [ "$1" = "b" ]
        then
            echo $CURRENT_TIME':'     >> $ENHANCE_LOG_FULL_PATH_NAME
        #输出banner    
        elif [ "$1" = "banner" ]
        then
            echo $CURRENT_TIME':            ...................                  ' >> $ENHANCE_LOG_FULL_PATH_NAME
            echo $CURRENT_TIME':            ...................                  ' >> $ENHANCE_LOG_FULL_PATH_NAME
            echo $CURRENT_TIME':            .....正在执行中.....                  ' >> $ENHANCE_LOG_FULL_PATH_NAME
            echo $CURRENT_TIME':            ...................                  ' >> $ENHANCE_LOG_FULL_PATH_NAME
            echo $CURRENT_TIME':            ...................                  ' >> $ENHANCE_LOG_FULL_PATH_NAME
        else
            #单纯输出日志
            echo $CURRENT_TIME':' $1  >> $ENHANCE_LOG_FULL_PATH_NAME   
        fi
    fi
    #如果传入了两个参数
    if [ $# -eq 2 ]
    then
        #输出空白行->输出日志
        if [ "$2" = "u" ]
        then
            echo $CURRENT_TIME':'     >> $ENHANCE_LOG_FULL_PATH_NAME
            echo $CURRENT_TIME':' $1  >> $ENHANCE_LOG_FULL_PATH_NAME
        fi

        #输出日志->输出空白行
        if [ "$2" = "d" ]
        then
            echo $CURRENT_TIME':' $1  >> $ENHANCE_LOG_FULL_PATH_NAME
            echo $CURRENT_TIME':'     >> $ENHANCE_LOG_FULL_PATH_NAME
        fi
    fi

}

function parseIni() {
    log '当前解析的配置项的信息: '
    log 'ini配置文件全路径名: '$1
    log 'ini配置文件中具体的['$2']部分的配置信息的标识id: '$2
    log 'ini配置文件中具体的['$2']部分的配置信息中的配置项的key: '$3
   
    #要解析的ini配置文件全路径名
    CONFIG_FILE_FULL_PATH_NAME=$1
    #要解析的ini配置文件中具体的某一块配置信息的标识ID
    CONFIG_INFO_CONCRETE_BLOCK_ID=$2
    #要解析的ini配置文件中具体的某一块配置信息中的配置项的key
    CONFIG_INFO_CONCRETE_BLOCK_ITEM_KEY=$3
    #根据具体的某一块配置信息中的配置项的key获取的value
    CONFIG_INFO_CONCRETE_BLOCK_ITEM_VALUE=`awk -F '=' '/\['$CONFIG_INFO_CONCRETE_BLOCK_ID'\]/{a=1}a==1&&$1~/'$CONFIG_INFO_CONCRETE_BLOCK_ITEM_KEY'/{print $2;exit}' $CONFIG_FILE_FULL_PATH_NAME`
    #使用echo返回解析结果
    echo ${CONFIG_INFO_CONCRETE_BLOCK_ITEM_VALUE}
}

:<< EOF
    解析plugin.ini的专用方法
    $1:plugin.ini中具体的某一个插件的id
    $2:plugin.ini中具体的某一个插件的id的配置项的key
EOF
function parsePluginIni() {
    log '开始解析plugins.ini..................................' u
    #plugin.ini的全路径名
    PLUGIN_INI_FULL_PATH_NAME=$ENHANCE_CONFIG_PATH/plugins.ini
    RESULT_PARSE_PLUGIN_INI=`parseIni $PLUGIN_INI_FULL_PATH_NAME $1 $2`
    echo ${RESULT_PARSE_PLUGIN_INI}
    log '完成解析plugins.ini..................................' d
}

:<< EOF
    解析bootstrap.ini的专用方法
    $1:bootstrap.ini中具体的某一个插件的id
    $2:bootstrap.ini中具体的某一个插件的id的配置项的key
EOF
function parseBootstrapIni() {
    log '开始解析bootstrap.ini................................' u
    #bootstrap.ini的全路径名
    BOOTSTRAP_INI_FULL_PATH_NAME=$ENHANCE_HOME/bootstrap.ini
    RESULT_PARSE_BOOTSTRAP_INI=`parseIni $BOOTSTRAP_INI_FULL_PATH_NAME $1 $2`
    echo ${RESULT_PARSE_BOOTSTRAP_INI}
    log '完成解析bootstrap.ini................................' d
}

:<< EOF
    解析i18n.ini的专用方法
    $1:i18n.ini中具体的某一个插件的id
    $2:i18n.ini中具体的某一个插件的id的配置项的key
EOF
function parseI18nIni() {
    log '开始解析I18n.ini................................' u
    #i18n.ini的全路径名
    I18N_INI_FULL_PATH_NAME=$ENHANCE_CONFIG_PATH/i18n.ini
    RESULT_PARSE_I18N_INI=`parseIni $I18N_INI_FULL_PATH_NAME $1 $2`
    echo ${RESULT_PARSE_I18N_INI}
    log '完成解析I18n.ini................................' d
}