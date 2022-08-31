package org.openatom.springcloud;

import de.codecentric.boot.admin.server.config.EnableAdminServer;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@EnableAdminServer
@SpringBootApplication
public class MointorSpringBootAdmin9003 {

    public static void main(String[] args) {
        SpringApplication.run(MointorSpringBootAdmin9003.class,args);
    }
}