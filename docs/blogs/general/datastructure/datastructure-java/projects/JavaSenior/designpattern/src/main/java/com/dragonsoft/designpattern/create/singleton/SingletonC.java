package com.dragonsoft.designpattern.create.singleton;

/**
 * 线程安全的懒汉式
 * @author lingwh
 *
 */
public class SingletonC {
    private SingletonC() {}
    private static SingletonC singletonC;
    public static synchronized SingletonC getInstance() {
        if(singletonC == null) {
            singletonC = new SingletonC();
        }
        return singletonC;
    }
}
