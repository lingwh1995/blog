package org.openatom.springcloud.controller;

import lombok.extern.slf4j.Slf4j;
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

    //集群版
    //从配置文件中动态获取远程调用地址
    @Value("${service.provider.url}")
    private String SERVICE_PROVIDER_URL;

    //从配置文件中动态获服务提供方名称
    @Value("${service.provider.name}")
    private String SERVICE_PROVIDER_NAME;

    @Resource
    private RestTemplate restTemplate;

    @GetMapping("/consumer/payment/create")
    public CommonResult<Payment> create(Payment payment) {
        return restTemplate.postForObject(SERVICE_PROVIDER_URL +"/provider/payment/create",payment, CommonResult.class);
    }

    /**
     * 正常调用:
     *      用于测试和延迟调用Zinkin端展示情况是否相同
     *
     * @param id
     * @return
     */
    @GetMapping("/consumer/payment/get/{id}")
    public CommonResult<Payment> getPaymentByIdReturnObject(@PathVariable("id") Long id){
        return restTemplate.getForObject(SERVICE_PROVIDER_URL+"/provider/payment/get/"+id,CommonResult.class);
    }

    /**
     * 延迟调用:
     *      用于测试和正常调用Zinkin端展示情况是否相同
     *
     * @param id
     * @return
     */
    @GetMapping("/consumer/payment/timeout/get/{id}")
    public CommonResult<Payment> getPaymentByIdReturnObjectTimeout(@PathVariable("id") Long id){
        return restTemplate.getForObject(SERVICE_PROVIDER_URL+"/provider/payment/timeout/get/"+id,CommonResult.class);
    }

    @GetMapping("/consumer/payment/getForEntity/{id}")
    public CommonResult<Payment> getPaymentByIdReturnResponseEntity(@PathVariable("id") Long id) {
        ResponseEntity<CommonResult> entity = restTemplate.getForEntity(SERVICE_PROVIDER_URL+"/provider/payment/get/"+id,CommonResult.class);
        if(entity.getStatusCode().is2xxSuccessful()){
            return entity.getBody();
        }else{
            return new CommonResult<>(444,"操作失败");
        }
    }
}
