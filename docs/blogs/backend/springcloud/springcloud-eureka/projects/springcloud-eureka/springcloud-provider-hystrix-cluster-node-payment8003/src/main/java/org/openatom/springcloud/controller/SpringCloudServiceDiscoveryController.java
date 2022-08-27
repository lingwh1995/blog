package org.openatom.springcloud.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

@RestController
@Slf4j
public class SpringCloudServiceDiscoveryController {

    @Resource
    private DiscoveryClient discoveryClient;
    //从配置文件中动态获取服务名称
    @Value("${spring.application.name}")
    private String APPLICATION_NAME;

    @GetMapping(value = "/provider/payment/discovery")
    public Object discovery() {
        List<String> services = discoveryClient.getServices();
        for (String element : services) {
            log.info("*****element: "+element);
        }
        List<ServiceInstance> instances = discoveryClient.getInstances(APPLICATION_NAME);
        for (ServiceInstance instance : instances) {
            log.info(instance.getInstanceId()+"\t"+instance.getServiceId()+"\t"+instance.getHost()+"\t"+instance.getPort()+"\t"+instance.getUri());
        }
        return this.discoveryClient;
    }
}
