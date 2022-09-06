package org.openatom.springcloud.interceptor;

import feign.RequestInterceptor;
import feign.RequestTemplate;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Configuration;

/**
 * @Description Feign发起远程调用之前的请求拦截器
 *      注意:不管是系统自带的FeignClient还是用户自定义的FeignClietn执行时这个拦截器都会生效
 **/
@Slf4j
@Configuration
public class FeignClientRequestInterceptor implements RequestInterceptor {

    /**
     * @description: 将traceId设置到请求头
     */
    @Override
    public void apply(RequestTemplate template) {
        String url = template.url();
        log.info("替换前的url:" + url);
        if (url.contains("$targetStr")) {
            url = url.replace("$targetStr", replaceRouter());
            template.uri(url);
        }
        log.info("替换后的url:" + url);
    }

    /**
     * 替换router中的字符串
     * @return
     */
    private CharSequence replaceRouter() {
        return "payment";
    }
}