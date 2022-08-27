package org.openatom.springcloud;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.hystrix.dashboard.EnableHystrixDashboard;
import org.springframework.cloud.netflix.turbine.EnableTurbine;

@EnableTurbine
@SpringBootApplication
@EnableHystrixDashboard
public class MointorHystrixDashboardTurbine9002 {

    public static void main(String[] args) {
        SpringApplication.run(MointorHystrixDashboardTurbine9002.class, args);
    }

}
