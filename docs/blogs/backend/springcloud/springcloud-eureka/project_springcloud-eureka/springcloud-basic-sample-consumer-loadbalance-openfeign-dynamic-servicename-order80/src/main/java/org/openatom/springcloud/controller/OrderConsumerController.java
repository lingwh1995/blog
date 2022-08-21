package org.openatom.springcloud.controller;

import lombok.extern.slf4j.Slf4j;
import org.openatom.springcloud.services.PaymentServiceOpenFeign;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.openatom.springcloud.entities.CommonResult;
import org.openatom.springcloud.entities.Payment;

import javax.annotation.Resource;

/**
 * DEV环境测试用这个Controller,可以动态获取服务名
 */

@RestController
@Slf4j
public class OrderConsumerController {

    //单机版
//    public static final String PAYMENT_URL = "http://localhost:8001";
//    public static final String PAYMENT_URL = "http://localhost:8002";

    @Resource
    private PaymentServiceOpenFeign paymentServiceOpenFeign;

    @GetMapping("/consumer/payment/create")
    public CommonResult<Payment> create(Payment payment) {
        return paymentServiceOpenFeign.create(payment);
    }

    /**
     * 测试url:
     *      http://localhost/consumer/payment/get/1
     * @param id
     * @return
     */
    @GetMapping("/consumer/payment/get/{id}")
    public CommonResult<Payment> getPayment(@PathVariable("id") Long id) {
        return paymentServiceOpenFeign.getPaymentById(id);
    }

    /**
     * 使用拦截器替换路由服务提供端URL中的占位符
     * 测试url:
     *      http://localhost/consumer/payment/replace_router/get/1
     * @param id
     * @return
     */
    @GetMapping("/consumer/payment/replace_router/get/{id}")
    public CommonResult<Payment> getPaymentReplaceRouter(@PathVariable("id") Long id) {
        return paymentServiceOpenFeign.getPaymentByIdReplaceRouter(id);
    }

    @GetMapping("/consumer/payment/openfeign/timeout")
    public String getPaymentByIdTimeout() {
        return paymentServiceOpenFeign.getPaymentByIdTimeout();
    }
}
