package org.openatom.springcloud.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApolloConfigController {

    /**
     * 从Apollo中获取应应用名称
     * @param applicationName
     * @return
     */
    @GetMapping("/consumer/apollo/test")
    public String apolloTest(@Value("${spring.application.name}") String applicationName) {
        return applicationName;
    }

}
