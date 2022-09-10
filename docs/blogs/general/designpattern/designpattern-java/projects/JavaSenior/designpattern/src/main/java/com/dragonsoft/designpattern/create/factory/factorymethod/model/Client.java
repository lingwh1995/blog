package com.dragonsoft.designpattern.create.factory.factorymethod.model;

import org.junit.Test;

/**
 * 客户端
 */
public class Client {
    @Test
    public void fun() {
        //获取生产产品A的工厂
        Factory factoryA = new ConcreteFactoryA();
        //生产产品A
        Product productA = factoryA.factoryMethod();
        System.out.println(productA);
        //获取生产产品B的工厂
        Factory factoryB = new ConcreteFactoryB();
        //生产产品B
        Product productB = factoryB.factoryMethod();
        System.out.println(productB);
        //获取生产产品C的工厂
        Factory factoryC = new ConcreteFactoryC();
        //生产产品C
        Product productC = factoryC.factoryMethod();
        System.out.println(productC);
    }
}
