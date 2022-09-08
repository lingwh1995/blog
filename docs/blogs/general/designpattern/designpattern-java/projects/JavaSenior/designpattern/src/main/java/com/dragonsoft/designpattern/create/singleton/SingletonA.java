package com.dragonsoft.designpattern.create.singleton;

/**
 * 饿汉式
 * @author lingwh
 *
 */
public class SingletonA {
    private SingletonA() {}
    private static final SingletonA SINGLETONA = new SingletonA();
    public static SingletonA getInstance() {
        return SINGLETONA;
    }
}
