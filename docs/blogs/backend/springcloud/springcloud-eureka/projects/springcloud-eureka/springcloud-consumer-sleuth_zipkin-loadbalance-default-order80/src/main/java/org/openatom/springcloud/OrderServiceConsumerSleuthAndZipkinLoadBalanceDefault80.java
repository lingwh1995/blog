package org.openatom.springcloud;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

/**
 * 使用SpringCloud自带的负载均衡组件
 *      1.每个节点处理请求的权重相同,SpringCloud自带的负载均衡组件只有轮询这一种负载均衡算法
 *      2.使用时只需要在注入RestTemplate时加上@LoadBalanced这个注解,不加这个注解会报错
 */
@SpringBootApplication
@EnableEurekaClient
public class OrderServiceConsumerSleuthAndZipkinLoadBalanceDefault80 {

    public static void main(String[] args) {
        SpringApplication.run(OrderServiceConsumerSleuthAndZipkinLoadBalanceDefault80.class, args);
    }
}
