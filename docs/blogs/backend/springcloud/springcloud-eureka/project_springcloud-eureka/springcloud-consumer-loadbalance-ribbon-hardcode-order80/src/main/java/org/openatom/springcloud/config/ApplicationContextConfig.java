package org.openatom.springcloud.config;

import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class ApplicationContextConfig {
    @Bean
    //必须加这个注解,不加这个注解访问会报错
    @LoadBalanced
    public RestTemplate getRestTemplate() {
        return new RestTemplate();
    }
}