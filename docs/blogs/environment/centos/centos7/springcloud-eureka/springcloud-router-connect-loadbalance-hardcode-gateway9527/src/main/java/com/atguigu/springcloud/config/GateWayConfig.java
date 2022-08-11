package com.atguigu.springcloud.config;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GateWayConfig {

    @Bean
    public RouteLocator customRouteLocator(RouteLocatorBuilder routeLocatorBuilder){
        RouteLocatorBuilder.Builder routes = routeLocatorBuilder.routes();
        routes.route("payment_routh",
                r -> r.path("/consumer/payment/**/get/**")
                        .uri("lb://SPRINGCLOUD-CONSUMER-HYSTRIX-LOADBALANCE-OPENFEIGN-CONFIGURATION-ORDER80")).build();
        return routes.build();
    }
}
