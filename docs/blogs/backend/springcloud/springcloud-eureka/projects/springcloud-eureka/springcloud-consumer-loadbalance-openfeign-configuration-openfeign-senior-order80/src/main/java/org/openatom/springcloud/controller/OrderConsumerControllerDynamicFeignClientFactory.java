package org.openatom.springcloud.controller;

import lombok.extern.slf4j.Slf4j;
import org.openatom.springcloud.entities.CommonResult;
import org.openatom.springcloud.entities.Payment;
import org.openatom.springcloud.config.DynamicFeignClientFactoryConfig;
import org.openatom.springcloud.service.PaymentServiceOpenFeignDynamicFeignClientFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

/**
 * 多环境测试用这个Controller,可以动态获取服务名
 */
@RestController
@Slf4j
public class OrderConsumerControllerDynamicFeignClientFactory {

    //单机版
//    public static final String PAYMENT_URL = "http://localhost:8001";
//    public static final String PAYMENT_URL = "http://localhost:8002";

    //集群版
    //从配置文件中动态获取远程调用地址
    @Value("${service.provider.provider-1}")
    private String SERVICE_PROVIDER_NAME;

    @Autowired
    private DynamicFeignClientFactoryConfig<PaymentServiceOpenFeignDynamicFeignClientFactory> client;

    /**
     * 获取具体的Service接口
     * @return
     */
    public PaymentServiceOpenFeignDynamicFeignClientFactory getPaymentService() {
       return client.getFeignClient(PaymentServiceOpenFeignDynamicFeignClientFactory.class,
               SERVICE_PROVIDER_NAME.toUpperCase());
    }

    @GetMapping("/consumer/dynamic/payment/create")
    public CommonResult<Payment> create(Payment payment) {
        return this.getPaymentService().create(payment);
    }

    /**
     * 测试url:
     *      http://localhost/consumer/dynamic/payment/get/1
     * @param id
     * @return
     */
    @GetMapping("/consumer/dynamic/payment/get/{id}")
    public CommonResult<Payment> getPayment(@PathVariable("id") Long id) {
        return this.getPaymentService().getPaymentById(id);
    }

    /**
     * 使用拦截器替换路由服务提供端URL中的占位符
     * 测试url:
     *      http://localhost/consumer/dynamic/payment/replace_router/get/1
     * @param id
     * @return
     */
    @GetMapping("/consumer/dynamic/payment/replace_router/get/{id}")
    public CommonResult<Payment> getPaymentReplaceRouter(@PathVariable("id") Long id) {
        return this.getPaymentService().getPaymentByIdReplaceRouter(id);
    }

    @GetMapping("/consumer/dynamic/payment/openfeign/timeout")
    public String getPaymentByIdTimeout() {
        return this.getPaymentService().getPaymentByIdTimeout();
    }
}
