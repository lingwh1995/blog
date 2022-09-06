package org.openatom.springcloud.config;

import org.springframework.cloud.openfeign.FeignClientBuilder;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Configuration;

/**
 * 当前使用的是yml中配置的负载均衡策略
 * @param <T>
 */
@Configuration
public class DynamicFeignClientFactoryConfig<T> {

    private FeignClientBuilder feignClientBuilder;

    public DynamicFeignClientFactoryConfig(ApplicationContext appContext) {
        this.feignClientBuilder = new FeignClientBuilder(appContext);
    }

    public T getFeignClient(final Class<T> type, String serviceId) {
        return this.feignClientBuilder.forType(type, serviceId).build();
    }
}
