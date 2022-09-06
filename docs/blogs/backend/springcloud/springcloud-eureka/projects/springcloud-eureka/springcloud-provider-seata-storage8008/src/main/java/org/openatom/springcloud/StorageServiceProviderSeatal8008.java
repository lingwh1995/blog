package org.openatom.springcloud;

import com.ctrip.framework.apollo.spring.annotation.EnableApolloConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;


@EnableApolloConfig
@EnableEurekaClient
@SpringBootApplication(exclude = DataSourceAutoConfiguration.class)//取消数据源的自动创建
public class StorageServiceProviderSeatal8008 {

    public static void main(String[] args) {
        /**
         * 注意:
         *  1.下面的启动参数要以seata-server中的registry.conf中config.apollo{}的配置为准
         *  2.这里的配置其实和yml中以及seata-server中的registry.conf中config.apollo{}的配置是一致的
          */
        System.setProperty("env","dev");
        System.setProperty("seata","default");
        System.setProperty("apollo.cluster","default");
        System.setProperty("seata.config.apollo.namespace","seata-server");
        System.setProperty("apolloConfigService","dafult");
        SpringApplication.run(StorageServiceProviderSeatal8008.class, args);
    }
}
