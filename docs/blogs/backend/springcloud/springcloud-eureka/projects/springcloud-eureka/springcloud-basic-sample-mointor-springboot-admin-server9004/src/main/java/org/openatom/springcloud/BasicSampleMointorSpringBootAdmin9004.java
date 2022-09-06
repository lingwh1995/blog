package org.openatom.springcloud;

import de.codecentric.boot.admin.server.config.EnableAdminServer;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@EnableAdminServer
@SpringBootApplication
public class BasicSampleMointorSpringBootAdmin9004 {

    public static void main(String[] args) {
        SpringApplication.run(BasicSampleMointorSpringBootAdmin9004.class,args);
    }
}