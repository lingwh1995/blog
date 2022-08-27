package org.openatom.springcloud;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

/**
 * 支付接口提供端
 *  使用Eureka作为注册中心
 */
@EnableEurekaClient
@SpringBootApplication
public class PaymentServiceProviderClusterNode8010 {

    public static void main(String[] args) {
        SpringApplication.run(PaymentServiceProviderClusterNode8010.class, args);
    }

}
