package org.openatom.springcloud.controller;

import com.netflix.hystrix.contrib.javanica.annotation.DefaultProperties;
import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
import com.netflix.hystrix.contrib.javanica.annotation.HystrixProperty;
import lombok.extern.slf4j.Slf4j;
import org.openatom.springcloud.service.PaymentServiceHystrixOpenFeign;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.openatom.springcloud.entities.CommonResult;
import org.openatom.springcloud.entities.Payment;

import javax.annotation.Resource;

/**
 * 用于测试8003这个节点中的服务熔断、服务降级功能
 */
@RestController
@Slf4j
@DefaultProperties(defaultFallback = "defaultGlobalFallback")
public class OrderConsumerHystrixController {

    //单机版
//    public static final String PAYMENT_URL = "http://localhost:8001";
//    public static final String PAYMENT_URL = "http://localhost:8002";

    @Resource
    private PaymentServiceHystrixOpenFeign paymentServiceHystrixOpenFeign;

    @GetMapping("/consumer/payment/create")
    public CommonResult<Payment> create(Payment payment) {
        return paymentServiceHystrixOpenFeign.create(payment);
    }

    /**
     * 正常获取Payment
     * 访问地址:
     *      http://localhost:/consumer/payment/ok/get/1
     * @param id
     * @return
     */
    @GetMapping("/consumer/payment/ok/get/{id}")
    public CommonResult<Payment> getPaymentByIdOk(@PathVariable("id") Long id) {
        return paymentServiceHystrixOpenFeign.getPaymentByIdOk(id);
    }

    /**
     * 延时获取Payment
     * 访问地址:
     *      http://localhost/consumer/payment/timeout/get/1
     * 当大量线程访问这个接口的时候,服务调用者访问上面的接口getPaymentById()也会受到影响,因为Tomcat的线程池中的处理
     * 线程都被访问当前接口的多个请求占据了
     * @param id
     * @return
     */
    @GetMapping("/consumer/payment/timeout/get/{id}")
    public CommonResult<Payment> getPaymentByIdTimeout(@PathVariable("id") Long id) {
        return paymentServiceHystrixOpenFeign.getPaymentByIdTimeout(id);
    }

    /**
     * 测试服务提供端服务降级,也可以直接在访问服务提供端接口进行测试,这里是为了方便测试,直接从服务消费端发起调用
     * 访问地址:
     *      http://localhost/consumer/payment/degradation_in_provider/get/1
     * @param id
     * @return
     */
    @GetMapping("/consumer/payment/degradation_in_provider/get/{id}")
    public CommonResult<Payment> getPaymentByIdUseHystrixDegradationInProvider(@PathVariable("id") Long id) {
        return paymentServiceHystrixOpenFeign.getPaymentByIdUseHystrixDegradation(id);
    }

    /**
     * 测试服务消费端服务降级
     * 访问地址:
     *      http://localhost/consumer/payment/degradation_in_consumer/get/1
     * 1.当服务调用超时时使用Hystrix对服务进行降级
     * 2.当服务调用出现异常时使用Hystrix对服务进行降级,如代码中含有 int i = 1/0;
     *      下面的注解表示:该方法2000ms内没有执行完成,则认为该方法执行不成功
     * 3.查看属性name值到HystrixCommandProperties这个类中去看
     * 4.注意：服务消费端可以在yml配置是否全局启用Hystrix,服务提供端不可以,因为这个配置依赖于OpenFeign这个组件
     *
     * @param id
     * @return
     */
    @HystrixCommand(fallbackMethod = "getPaymentByIdUseHystrixDegradationInConsumerFallback",
            //修改value值来分别测试提供端服务降级和消费端服务降级,要测试提供端服务降级将value值设置为大于5s,要测试消费端服务降级将value设置为小于5s,理论是这样,最好是设置为1s或2秒
            commandProperties = {@HystrixProperty(name="execution.isolation.thread.timeoutInMilliseconds",value="2000")})
    @GetMapping("/consumer/payment/degradation_in_consumer/get/{id}")
    public CommonResult<Payment> getPaymentByIdUseHystrixDegradationInConsumer(@PathVariable("id") Long id) {
        return paymentServiceHystrixOpenFeign.getPaymentByIdUseHystrixDegradation(id);
    }

    /**
     * 针对于getPaymentByIdUseHystrixDegradationInConsumer()方法的降级方法:当方法getPaymentByIdTimeOut()执行失败时,执行下面的方法
     * @param id
     * @return
     */
    public CommonResult<Payment> getPaymentByIdUseHystrixDegradationInConsumerFallback(Long id) {
        Payment payment = new Payment(id,"服务消费端:降级成功");
        return new CommonResult(10000,"我是服务消费端",payment);
    }

    /**
     * 测试全局范围内默认的降级回调方法
     * 访问地址:
     *      http://localhost:/consumer/payment/degradation_in_consumer_default/get/1
     * @param id
     * @return
     */
    @HystrixCommand
    @GetMapping("/consumer/payment/degradation_in_consumer_default/get/{id}")
    public CommonResult<Payment> getPaymentByIdOkTestDefaultGlobalCallback(@PathVariable("id") Long id) {
        //模拟发生了异常
        int i = 10/0;
        return paymentServiceHystrixOpenFeign.getPaymentByIdOk(id);
    }

    /**
     * 全局范围内默认的降级回调方法,只添加了@HystrixCommand,未做关于@HystrixCommand详细配置的方法失败后都会找这个方法
     *      用处:可以在这里设置发生了异常后,跳转到一个统一的用户界面
     *  特别注意:这个为全局服务降级兜底的方法不要有任何参数,否则会报错
     * @return
     */
    public CommonResult<Payment> defaultGlobalFallback() {
        Payment payment = new Payment(null,"服务消费端:全局范围内默认的降级回调方法....");
        return new CommonResult(10000,"我是服务消费端",payment);
    }

    /**
     * 测试在服务提供端Service层实现服务降级
     * 访问地址:
     *      http://localhost:/consumer/payment/degradation_in_consumer_service/get/1
     * 测试在Service层实现服务降级,首先关闭8003服务,模拟8003服务宕机,访问下面的地址
     * @param id
     * @return
     */
    @GetMapping("/consumer/payment/degradation_in_consumer_service/get/{id}")
    public CommonResult<Payment> getPaymentByIdUseHystrixDegradationInConsumerService(@PathVariable("id") Long id) {
        //测试在Service层进行服务降级处理
        return paymentServiceHystrixOpenFeign.getPaymentByIdUseHystrixDegradation(id);
    }

    /**
     * 测试服务熔断:
     *      1.模拟发生异常熔断服务:
     *          http://localhost/consumer/payment/circuitbreaker/get/-1
     *      2.模拟不发生异常让服务自动恢复:
     *          http://localhost/consumer/payment/circuitbreaker/get/1
     *  测试方式:先多次访问路径1，将服务熔断,再多次访问路径2,刚开始访问依然返回的是异常信息,多次访问后可以看到服务恢复正常
     * @param id
     * @return
     */
    @GetMapping("/consumer/payment/circuitbreaker/get/{id}")
    public CommonResult<Payment> getPaymentByIdOkHystrixCircuitBreaker(@PathVariable("id") Long id) {
        return paymentServiceHystrixOpenFeign.getPaymentByIdOkHystrixCircuitBreaker(id);
    }
}
