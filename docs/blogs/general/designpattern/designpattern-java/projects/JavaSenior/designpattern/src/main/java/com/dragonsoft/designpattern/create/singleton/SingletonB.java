package com.dragonsoft.designpattern.create.singleton;

/**
 * 懒汉式:
 * 	优点：可以实现懒加载
 * 	缺点：有线程安全问题
 * @author lingwh
 *
 */
public class SingletonB {
    private SingletonB() {}
    private static SingletonB singletonB = null;
    public static SingletonB getInstance() {
        if(singletonB == null) {
            singletonB = new SingletonB();
        }
        return singletonB;
    }
}
