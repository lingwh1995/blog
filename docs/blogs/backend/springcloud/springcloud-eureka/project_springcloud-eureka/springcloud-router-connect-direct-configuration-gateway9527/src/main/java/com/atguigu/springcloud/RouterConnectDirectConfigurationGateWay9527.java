package com.atguigu.springcloud;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

/**
 * 网关直连服务模式:YML文件设置路由规则
 */
@SpringBootApplication
@EnableEurekaClient
public class RouterConnectDirectConfigurationGateWay9527 {
    public static void main(String[] args) {
        SpringApplication.run(RouterConnectDirectConfigurationGateWay9527.class, args);
    }
}
