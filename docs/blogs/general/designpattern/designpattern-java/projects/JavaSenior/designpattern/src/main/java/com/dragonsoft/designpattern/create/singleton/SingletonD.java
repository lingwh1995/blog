package com.dragonsoft.designpattern.create.singleton;

/**
 * 双重检索懒汉式
 * @author lingwh
 *
 */
public class SingletonD {
    private SingletonD() {}
    private static volatile SingletonD singletonD;
    public static SingletonD getInstance() {
        if(singletonD == null) {
            synchronized(SingletonD.class) {
                if(singletonD == null) {
                    singletonD = new SingletonD();
                }
            }
        }
        return singletonD;
    }
}
