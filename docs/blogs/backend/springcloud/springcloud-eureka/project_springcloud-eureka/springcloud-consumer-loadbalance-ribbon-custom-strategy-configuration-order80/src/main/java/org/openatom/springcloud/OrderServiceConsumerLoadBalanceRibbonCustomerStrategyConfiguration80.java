package org.openatom.springcloud;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

/**
 * 使用Ribbon实现负载均衡:Java硬编码方式
 *      缺点:不能在配置文件中动态修改服务提供方名称
 */
@SpringBootApplication
@EnableEurekaClient
public class OrderServiceConsumerLoadBalanceRibbonCustomerStrategyConfiguration80 {

    public static void main(String[] args) {
        SpringApplication.run(OrderServiceConsumerLoadBalanceRibbonCustomerStrategyConfiguration80.class, args);
    }
}
