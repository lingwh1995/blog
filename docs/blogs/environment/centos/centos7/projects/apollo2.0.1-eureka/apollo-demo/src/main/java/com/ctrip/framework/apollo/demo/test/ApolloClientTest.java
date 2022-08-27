package com.ctrip.framework.apollo.demo.test;

import com.ctrip.framework.apollo.Config;
import com.ctrip.framework.apollo.ConfigService;

public class ApolloClientTest {
    // 首先要配置VM options:
    // -Dapp.id=apollo-quickstart -Denv=DEV -Ddev_meta=http://localhost:8080
    public static void main(String[] args) throws InterruptedException {
        //获取配置信息
        Config appConfig = ConfigService.getAppConfig();
        for(int i=0;i<100; i++) {
            Thread.sleep(1000);
            //根据key获取配置的值
            String propertyValue = appConfig.getProperty("ssm.enable", null);
            System.out.println("ssm.enable:" + propertyValue);
        }
    }
}
