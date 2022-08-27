package org.openatom.springcloud.services;

import org.openatom.springcloud.entities.CommonResult;
import org.openatom.springcloud.entities.Payment;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

/**
 * 使用自定义的自带的OpenFeignClient发起调用
 */
@Service
public interface PaymentServiceOpenFeignDynamicFeignClientFactory {
    @PostMapping(value = "/provider/payment/create")
    CommonResult create(@RequestBody Payment payment);

    @GetMapping(value = "/provider/payment/get/{id}")
    CommonResult<Payment> getPaymentById(@PathVariable("id") Long id);

    /**
     * 使用拦截器替换路由服务提供端URL中的占位符
     * @param id
     * @return
     */
    @GetMapping(value = "/provider/$evn/get/{id}")
    CommonResult<Payment> getPaymentByIdReplaceRouter(@PathVariable("id") Long id);

    @GetMapping(value = "/provider/payment/openfeign/timeout")
    String getPaymentByIdTimeout();
}
