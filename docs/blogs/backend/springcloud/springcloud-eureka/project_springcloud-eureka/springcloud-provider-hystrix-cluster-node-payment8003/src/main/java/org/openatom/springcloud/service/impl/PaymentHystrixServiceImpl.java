package org.openatom.springcloud.service.impl;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
import com.netflix.hystrix.contrib.javanica.annotation.HystrixProperty;
import org.openatom.springcloud.dao.PaymentHystrixDao;
import org.openatom.springcloud.service.PaymentHystrixService;
import org.springframework.stereotype.Service;
import org.openatom.springcloud.entities.Payment;

import javax.annotation.Resource;
import java.util.concurrent.TimeUnit;

/**
 * 用于测试Hystrix
 */
@Service
public class PaymentHystrixServiceImpl implements PaymentHystrixService {

    @Resource
    private PaymentHystrixDao paymentHystrixDao;

    @Override
    public int create(Payment payment) {
        return paymentHystrixDao.create(payment);
    }

    @Override
    public Payment getPaymentByIdOk(Long id) {
        return paymentHystrixDao.getPaymentById(id);
    }
    @Override
    public Payment getPaymentByIdTimeout(Long id) {
        //睡眠3秒
        try {
            TimeUnit.SECONDS.sleep(3);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        return paymentHystrixDao.getPaymentById(id);
    }

    /**
     * 1.当服务调用超时时使用Hystrix对服务进行降级
     * 2.当服务调用出现异常时使用Hystrix对服务进行降级,如代码中含有 int i = 1/0;
     *      下面的注解表示:该方法3000ms内没有执行完成,则认为该方法执行不成功
     * 3.查看属性name值到HystrixCommandProperties这个类中去看
     * @param id
     * @return
     */
    @HystrixCommand(fallbackMethod = "getPaymentByIdUseHystrixDegradationFallback",
            commandProperties = {@HystrixProperty(name="execution.isolation.thread.timeoutInMilliseconds",value="3000")})
    @Override
    public Payment getPaymentByIdUseHystrixDegradation(Long id) {
        //睡眠5秒
        try {
            TimeUnit.SECONDS.sleep(5);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        return paymentHystrixDao.getPaymentById(id);
    }

    /**
     * 当方法getPaymentByIdTimeOut()执行失败时,执行下面的方法
     * @param id
     * @return
     */
    public Payment getPaymentByIdUseHystrixDegradationFallback(Long id) {
        return new Payment(id,"服务提供方:服务降级成功");
    }

    /**
     * 当下游服务(服务提供方)发生故障时对服务下游服务(服务提供方)进行降级
     *  10内请求失败,失败率为60%时熔断服务
     * @param id
     * @return
     */
    @HystrixCommand(fallbackMethod = "getPaymentByIdUseHystrixCircuitBreakerFallback",commandProperties = {
            @HystrixProperty(name = "circuitBreaker.enabled",value = "true"),// 是否开启断路器
            @HystrixProperty(name = "circuitBreaker.requestVolumeThreshold",value = "10"),// 请求次数
            @HystrixProperty(name = "circuitBreaker.sleepWindowInMilliseconds",value = "10000"), // 时间窗口期
            @HystrixProperty(name = "circuitBreaker.errorThresholdPercentage",value = "60"),// 失败率达到多少后跳闸
    })
    @Override
    public Payment getPaymentByIdUseHystrixCircuitBreaker(Long id) {
        //当ID小于0时,消费端使用不合理的参数多次调用此服务,则服务熔断
        if(id<0){
            throw new RuntimeException("id不能小于0");
        }
        return paymentHystrixDao.getPaymentById(id);
    }

    /**
     * 当方法getPaymentByIdUseHystrixCircuitBreaker()执行失败时,执行下面的方法
     * @param id
     * @return
     */
    public Payment getPaymentByIdUseHystrixCircuitBreakerFallback(Long id) {
        return new Payment(id,"服务提供方:测试服务熔断成功");
    }
}
