package com.dragonsoft.designpattern.create.singleton;

/**
 * 静态内部类懒汉式
 * 	原理：JVM在装载类的时候是线程安全的
 * @author lingwh
 *
 */
public class SingletonE {
    private SingletonE() {}
    public static SingletonE getInstance() {
        return SingletonInstacne.INSTANCE;
    }
    private static class SingletonInstacne {
        private static final SingletonE INSTANCE = new SingletonE();
    }
}
