package org.openatom.springcloud;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class RegisterCcenterClusterNode7004 {
    public static void main(String[] args) {
        SpringApplication.run(RegisterCcenterClusterNode7004.class,args);
    }
}
