package org.openatom.springcloud.controller;

import lombok.extern.slf4j.Slf4j;
import org.openatom.springcloud.services.PaymentServiceOpenFeign;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.openatom.springcloud.entities.CommonResult;
import org.openatom.springcloud.entities.Payment;

import javax.annotation.Resource;

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

    @GetMapping("/consumer/payment/get/{id}")
    public CommonResult<Payment> getPayment(@PathVariable("id") Long id) {
        return paymentServiceOpenFeign.getPaymentById(id);
    }

    @GetMapping("/consumer/payment/openfeign/timeout")
    public String getPaymentByIdTimeout() {
        return paymentServiceOpenFeign.getPaymentByIdTimeout();
    }
}
