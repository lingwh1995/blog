package org.openatom.springcloud.listener;

import com.ctrip.framework.apollo.model.ConfigChange;
import com.ctrip.framework.apollo.model.ConfigChangeEvent;
import com.ctrip.framework.apollo.spring.annotation.ApolloConfigChangeListener;
import org.springframework.stereotype.Component;

@Component
public class AutomaticApolloWatcher {
    @ApolloConfigChangeListener
    public void watchSingle(ConfigChangeEvent changeEvent) {
        for (String key : changeEvent.changedKeys()) {
            ConfigChange change = changeEvent.getChange(key);
            System.out.println(change);
        }

    }
}
