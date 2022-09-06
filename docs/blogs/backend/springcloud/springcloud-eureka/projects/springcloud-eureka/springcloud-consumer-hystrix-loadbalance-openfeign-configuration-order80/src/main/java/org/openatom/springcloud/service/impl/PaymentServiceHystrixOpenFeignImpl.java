package org.openatom.springcloud.service.impl;

import org.openatom.springcloud.entities.CommonResult;
import org.openatom.springcloud.entities.Payment;
import org.openatom.springcloud.service.PaymentServiceHystrixOpenFeign;
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
        Payment payment = new Payment(null,"服务消费端:服务提供端宕机了,在服务消费端中Service层对这个服务进行服务降级处理....");
        return new CommonResult(10000,"发生了错误",payment);
    }

    //不用这个测试方法,所以代码不做修改
    @Override
    public CommonResult<Payment> getPaymentByIdOkHystrixCircuitBreaker(Long id) {
        return null;
    }
}
