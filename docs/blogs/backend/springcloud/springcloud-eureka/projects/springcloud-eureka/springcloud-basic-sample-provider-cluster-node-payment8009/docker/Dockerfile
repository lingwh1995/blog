#指定基础镜像，必须为第一个命令
FROM java:8
#用于指定持久化目录
VOLUME /software
#维护者信息
MAINTAINER lingwh
# 将当前maven目录生成的文件复制到docker容器的/目录下
COPY ${project.build.finalName}.jar app.jar
# 指定docker容器启动时运行jar包
ENTRYPOINT ["java","-jar","/app.jar"]
