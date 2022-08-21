package org.openatom.springcloud;

import org.openatom.springcloud.loadbalance.MyRoundRobinRule;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.ribbon.RibbonClient;

/**
 * 使用Ribbon实现负载均衡:Java硬编码方式
 *      缺点:不能在配置文件中动态修改服务提供方名称
 */
@SpringBootApplication
@EnableEurekaClient
@RibbonClient(name = "SPRING-CLOUD-PROVIDER-EUREKA-PAYMENT-SERVICE",configuration= MyRoundRobinRule.class)
public class OrderServiceConsumerLoadBalanceRibbonCustomerStrategyHardcode80 {

    public static void main(String[] args) {
        SpringApplication.run(OrderServiceConsumerLoadBalanceRibbonCustomerStrategyHardcode80.class, args);
    }
}
