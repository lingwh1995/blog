package org.openatom.springcloud;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.openfeign.EnableFeignClients;

/**
 * 1.使用OpenFeign完成远程调用,如果要配置负载均衡策略,和Ribbon配置负载均衡策略方式相同
 *      本微服务主要测试OpenFeign的功能,所以采用YML文件配置Ribbon的负载均衡策略
 * 2.OpenFeign是对Ribbon和RestTemplate的封装,所以配置负载均衡方式同Ribbon配置负载均衡方式,而且不需要在容器中手动注入ResTemplate对象
 * 3.OpenFeign硬编码实现远程调用
 * 4.对所有微服务统一进行配置,如连接超时时间配置、读取超时时间配置,YML中将OpenFegin的配置和对Ribbon的配置写在了一起
 * 5.开启OpenFeign增强日志后可以看到Http调用的详细信息
 *      2022-06-01 03:51:37.176 DEBUG 16792 --- [p-nio-80-exec-1] o.o.s.services.PaymentServiceOpenFeign   : [PaymentServiceOpenFeign#getPaymentById] <--- HTTP/1.1 200 (59ms)
 *      2022-06-01 03:51:37.176 DEBUG 16792 --- [p-nio-80-exec-1] o.o.s.services.PaymentServiceOpenFeign   : [PaymentServiceOpenFeign#getPaymentById] connection: keep-alive
 *      2022-06-01 03:51:37.176 DEBUG 16792 --- [p-nio-80-exec-1] o.o.s.services.PaymentServiceOpenFeign   : [PaymentServiceOpenFeign#getPaymentById] content-type: application/json
 *      2022-06-01 03:51:37.176 DEBUG 16792 --- [p-nio-80-exec-1] o.o.s.services.PaymentServiceOpenFeign   : [PaymentServiceOpenFeign#getPaymentById] date: Tue, 31 May 2022 19:51:37 GMT
 *      2022-06-01 03:51:37.176 DEBUG 16792 --- [p-nio-80-exec-1] o.o.s.services.PaymentServiceOpenFeign   : [PaymentServiceOpenFeign#getPaymentById] keep-alive: timeout=60
 *      2022-06-01 03:51:37.176 DEBUG 16792 --- [p-nio-80-exec-1] o.o.s.services.PaymentServiceOpenFeign   : [PaymentServiceOpenFeign#getPaymentById] transfer-encoding: chunked
 *      2022-06-01 03:51:37.176 DEBUG 16792 --- [p-nio-80-exec-1] o.o.s.services.PaymentServiceOpenFeign   : [PaymentServiceOpenFeign#getPaymentById]
 *      2022-06-01 03:51:37.176 DEBUG 16792 --- [p-nio-80-exec-1] o.o.s.services.PaymentServiceOpenFeign   : [PaymentServiceOpenFeign#getPaymentById] {"code":200,"message":"查询成功,serverPort:  8006","data":{"id":1,"serial":"15646546546"}}
 *      2022-06-01 03:51:37.176 DEBUG 16792 --- [p-nio-80-exec-1] o.o.s.services.PaymentServiceOpenFeign   : [PaymentServiceOpenFeign#getPaymentById] <--- END HTTP (94-byte body)
 */
@EnableEurekaClient //添加@EnableEurekaClient好像没什么用,但是还是加上
@SpringBootApplication
@EnableFeignClients
public class OrderServiceConsumerLoadBalanceOpenFeignHardcode80 {
    public static void main(String[] args) {
        SpringApplication.run(OrderServiceConsumerLoadBalanceOpenFeignHardcode80.class, args);
    }
}
