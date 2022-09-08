package com.dragonsoft.designpattern.create.singleton.model;

public class SingletonObject {
    private SingletonObject() {}
    private static final SingletonObject SINGLETON_INSTANCE = new SingletonObject();
    public static SingletonObject getInstance() {
        return SINGLETON_INSTANCE;
    }
    public void operate(){
        System.out.println("do some operate......");
    }
}
