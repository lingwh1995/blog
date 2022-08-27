package org.openatom.springcloud.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.context.restart.RestartEndpoint;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RestartApplicationController {

    @Autowired
    private RestartEndpoint restartEndpoint;

    /**
     * 访问这个地址可以重启SpringBoot项目
     */
    @GetMapping("/consumer/apollo/restart")
    public String restartApplication(){
        restartEndpoint.restart();
        return "请稍后,应用程序正在重启...";
    }
}
