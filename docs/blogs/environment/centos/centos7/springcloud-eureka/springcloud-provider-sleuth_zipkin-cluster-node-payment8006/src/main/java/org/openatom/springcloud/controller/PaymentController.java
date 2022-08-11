package org.openatom.springcloud.controller;

import lombok.extern.slf4j.Slf4j;
import org.openatom.springcloud.service.PaymentService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.openatom.springcloud.entities.CommonResult;
import org.openatom.springcloud.entities.Payment;

import javax.annotation.Resource;
import java.util.concurrent.TimeUnit;

@RestController
@Slf4j
public class PaymentController {

    @Resource
    private PaymentService paymentService;

    @Value("${server.port}")
    private String serverPort;

    //从配置文件中动态获取服务名称
    @Value("${spring.application.name}")
    private String APPLICATION_NAME;

    @PostMapping(value = "/provider/payment/create")
    public CommonResult create(@RequestBody Payment payment) {
        int result = paymentService.create(payment);
        log.info("*****插入结果："+result);
        if(result > 0) {
            return new CommonResult(200,"插入数据库成功,serverPort: "+serverPort,result);
        }else{
            return new CommonResult(444,"插入数据库失败",null);
        }
    }

    /**
     * 正常调用:
     *      用于测试和延迟调用Zinkin端展示情况是否相同
     *
     * @param id
     * @return
     */
    @GetMapping(value = "/provider/payment/get/{id}")
    public CommonResult<Payment> getPaymentById(@PathVariable("id") Long id) {
        log.info(APPLICATION_NAME + serverPort);
        Payment payment = paymentService.getPaymentById(id);
        if(payment != null){
            return new CommonResult(200,"查询成功,serverPort:  "+serverPort,payment);
        }else{
            return new CommonResult(444,"没有对应记录,查询ID: "+id,null);
        }
    }

    /**
     * 延迟调用:
     *      用于测试和正常调用Zinkin端展示情况是否相同
     *
     * @param id
     * @return
     */
    @GetMapping(value = "/provider/payment/timeout/get/{id}")
    public CommonResult<Payment> getPaymentByIdTimeou(@PathVariable("id") Long id) {
        // 业务逻辑处理正确，但是需要耗费3秒钟
        try {
            TimeUnit.SECONDS.sleep(3);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        log.info(APPLICATION_NAME + serverPort);
        Payment payment = paymentService.getPaymentById(id);
        if(payment != null){
            return new CommonResult(200,"查询成功,serverPort:  "+serverPort,payment);
        }else{
            return new CommonResult(444,"没有对应记录,查询ID: "+id,null);
        }
    }

}
