package org.openatom.springcloud;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

/**
 * 使用Ribbon实现负载均衡:yml配置方式
 *      优点:可以在配置文件中动态修改服务提供端名称
 */
@SpringBootApplication
@EnableEurekaClient
public class OrderServiceConsumerLoadBalanceRibbonConfiguration80 {

    public static void main(String[] args) {
        SpringApplication.run(OrderServiceConsumerLoadBalanceRibbonConfiguration80.class, args);
    }
}
