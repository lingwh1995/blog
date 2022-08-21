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

    @ApolloConfigChangeListener
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
        propertyNames.add("spring.application.name");
        if(propertyNames.contains(propertyName)){
            restartEndpoint.restart();
        }
    }
}
