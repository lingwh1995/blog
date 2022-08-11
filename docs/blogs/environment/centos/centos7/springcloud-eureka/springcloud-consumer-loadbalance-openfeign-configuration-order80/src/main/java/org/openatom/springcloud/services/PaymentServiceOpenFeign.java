package org.openatom.springcloud.services;

import org.openatom.springcloud.entities.CommonResult;
import org.openatom.springcloud.entities.Payment;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

/**
 * OpenFeign硬编码实现远程调用
 */
@Component
@FeignClient(name="SPRINGCLOUD-PROVIDER-PAYMENT-SERVICE-CLUSTER")
public interface PaymentServiceOpenFeign {
    @PostMapping(value = "/provider/payment/create")
    CommonResult create(@RequestBody Payment payment);

    @GetMapping(value = "/provider/payment/get/{id}")
    CommonResult<Payment> getPaymentById(@PathVariable("id") Long id);

    @GetMapping(value = "/provider/payment/openfeign/timeout")
    String getPaymentByIdTimeout();
}
