package org.openatom.springcloud.controller;

import lombok.extern.slf4j.Slf4j;
import org.openatom.springcloud.service.PaymentHystrixService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.web.bind.annotation.*;
import org.openatom.springcloud.entities.CommonResult;
import org.openatom.springcloud.entities.Payment;

import javax.annotation.Resource;
import java.util.List;
import java.util.concurrent.TimeUnit;

/**
 * 用于测试Hystrix
 */
@RestController
@Slf4j
public class PaymentHystrixController {

    @Resource
    private PaymentHystrixService paymentHystrixService;

    @Value("${server.port}")
    private String serverPort;

    //从配置文件中动态获取服务名称
    @Value("${spring.application.name}")
    private String APPLICATION_NAME;

    @Resource
    private DiscoveryClient discoveryClient;

    @PostMapping(value = "/provider/payment/create")
    public CommonResult create(@RequestBody Payment payment) {
        int result = paymentHystrixService.create(payment);
        log.info("*****插入结果："+result);
        if(result > 0) {
            return new CommonResult(200,"插入数据库成功,serverPort: "+serverPort,result);
        }else{
            return new CommonResult(444,"插入数据库失败",null);
        }
    }

    /**
     * 正常获取Payment
     * @param id
     * @return
     */
    @GetMapping(value = "/provider/payment/ok/get/{id}")
    public CommonResult<Payment> getPaymentByIdOk(@PathVariable("id") Long id) {
        log.info(APPLICATION_NAME + serverPort);
        Payment payment = paymentHystrixService.getPaymentByIdOk(id);
        if(payment != null){
            return new CommonResult(200,"查询成功,serverPort:  "+serverPort,payment);
        }else{
            return new CommonResult(444,"没有对应记录,查询ID: "+id,null);
        }
    }

    /**
     * 延时获取Payment
     * @param id
     * @return
     */
    @GetMapping(value = "/provider/payment/timeout/get/{id}")
    public CommonResult<Payment> getPaymentByIdTimeout(@PathVariable("id") Long id) {
        log.info(APPLICATION_NAME + serverPort);
        Payment payment = paymentHystrixService.getPaymentByIdTimeout(id);
        if(payment != null){
            return new CommonResult(200,"查询成功,serverPort:  "+serverPort,payment);
        }else{
            return new CommonResult(444,"没有对应记录,查询ID: "+id,null);
        }
    }

    /**
     * 测试服务提供端服务降级
     * 访问路径:http://localhost:8003/provider/payment/degradation_in_provider/get/1
     * 当大量线程访问这个接口的时候,服务调用者访问上面的接口getPaymentById()也会受到影响,因为Tomcat的线程池中的处理线程都被访问当前
     *      接口的多个请求占据了,导致访问本微服务中的其他接口地址也会变得卡顿,使用Hystrix的在消费端对本微服务中的这个接口进行降级
     * @param id
     * @return
     */
    @GetMapping(value = "/provider/payment/degradation_in_provider/get/{id}")
    public CommonResult<Payment> getPaymentByIdUseHystrixDegradation(@PathVariable("id") Long id) {
        log.info(APPLICATION_NAME + serverPort);
        Payment payment = paymentHystrixService.getPaymentByIdUseHystrixDegradation(id);
        if(payment != null){
            return new CommonResult(200,"查询成功,serverPort:  "+serverPort,payment);
        }else{
            return new CommonResult(444,"没有对应记录,查询ID: "+id,null);
        }
    }

    /**
     * 服务熔断测试方法
     * @param id
     * @return
     */
    @GetMapping(value = "/provider/payment/circuitbreaker/get/{id}")
    public CommonResult<Payment> getPaymentByIdUseHystrixCircuitBreaker(@PathVariable("id") Long id) {
        log.info(APPLICATION_NAME + serverPort);
        Payment payment = paymentHystrixService.getPaymentByIdUseHystrixCircuitBreaker(id);
        if(payment != null){
            return new CommonResult(200,"查询成功,serverPort:  "+serverPort,payment);
        }else{
            return new CommonResult(444,"没有对应记录,查询ID: "+id,null);
        }
    }
}
