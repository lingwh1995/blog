package org.openatom.springcloud.config;

import ch.qos.logback.core.PropertyDefinerBase;
import lombok.extern.slf4j.Slf4j;

import java.net.InetAddress;
import java.net.UnknownHostException;

@Slf4j
public class VirtualIpConfig extends PropertyDefinerBase {
    private static String virtualIp;
    static {
        try {
            virtualIp = InetAddress.getLocalHost().getHostAddress();
        } catch (UnknownHostException e) {
            log.error("获取日志Ip异常", e);
            virtualIp = null;
        }
    }

    @Override
    public String getPropertyValue() {
        return virtualIp;
    }
}
