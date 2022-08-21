package org.openatom.springcloud.listener;

import com.ctrip.framework.apollo.model.ConfigChange;
import com.ctrip.framework.apollo.model.ConfigChangeEvent;
import com.ctrip.framework.apollo.spring.annotation.ApolloConfigChangeListener;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.context.environment.EnvironmentChangeEvent;
import org.springframework.cloud.context.restart.RestartEndpoint;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@Slf4j
public class ApolloPropertiesChangedListener implements ApplicationContextAware {

    private ApplicationContext applicationContext;

    @Autowired
    private RestartEndpoint restartEndpoint;


    /**
     * 注意,要监听非application命名空间的 配置文件变化时,要@ApolloConfigChangeListener说明时具体时是哪个命名空间
     * @param changeEvent
     */
    @ApolloConfigChangeListener("seata-storage")
    private void someChangeHandler(ConfigChangeEvent changeEvent) {
        for (String key : changeEvent.changedKeys()) {
            ConfigChange change = changeEvent.getChange(key);
//            log.info("Found change - {}", change.toString());
            //如果key符合特定情况,则重启应用程序
            isRestartApplication(change.getPropertyName());
        }
        // 更新相应的bean的属性值，主要是存在@ConfigurationProperties注解的bean
        this.applicationContext.publishEvent(new EnvironmentChangeEvent(changeEvent.changedKeys()));
    }

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        this.applicationContext = applicationContext;
    }

    /**
     * 重启SpringBoot项目
     */
    public void isRestartApplication(String propertyName){
        List<String> propertyNames = new ArrayList<>();
        /**
         * 重启逻辑1:修改了指定的key的值
         */
        propertyNames.add("spring.application.name");
        if(propertyNames.contains(propertyName)){
            restartEndpoint.restart();
        }
        /**
         * 重启逻辑2:key包含seata
         */
        if(propertyName.contains("seata")){
            restartEndpoint.restart();
        }
    }
}
