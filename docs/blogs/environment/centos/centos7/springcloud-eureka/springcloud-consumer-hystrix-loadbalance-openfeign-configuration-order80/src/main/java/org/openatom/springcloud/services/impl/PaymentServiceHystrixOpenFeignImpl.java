package org.openatom.springcloud.services.impl;

import org.openatom.springcloud.entities.CommonResult;
import org.openatom.springcloud.entities.Payment;
import org.openatom.springcloud.services.PaymentServiceHystrixOpenFeign;
import org.springframework.stereotype.Component;

@Component
public class PaymentServiceHystrixOpenFeignImpl implements PaymentServiceHystrixOpenFeign {
    //不用这个测试方法,所以代码不做修改
    @Override
    public CommonResult create(Payment payment) {
        return null;
    }
    //不用这个测试方法,所以代码不做修改
    @Override
    public CommonResult<Payment> getPaymentByIdOk(Long id) {
        return null;
    }
    //不用这个测试方法,所以代码不做修改
    @Override
    public CommonResult<Payment> getPaymentByIdTimeout(Long id) {
        return null;
    }

    /**
     * 测试Hystrix在Service层进行服务降级
     * @param id
     * @return
     */
    @Override
    public CommonResult<Payment> getPaymentByIdUseHystrixDegradation(Long id) {
        Payment payment = new Payment(null,"消费端:Hystrix在Service层对所有服务进行服务降级....");
        return new CommonResult(10000,"发生了错误",payment);
    }

    //不用这个测试方法,所以代码不做修改
    @Override
    public CommonResult<Payment> getPaymentByIdOkHystrixCircuitBreaker(Long id) {
        return null;
    }
}
