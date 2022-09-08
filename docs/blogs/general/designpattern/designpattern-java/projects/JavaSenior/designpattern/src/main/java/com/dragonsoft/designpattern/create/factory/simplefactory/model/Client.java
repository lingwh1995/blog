package com.dragonsoft.designpattern.create.factory.simplefactory.model;

import org.junit.Test;

public class Client {

    @Test
    public void simpleFactoryTest() {
        SimpleFactory simpleFactory = new SimpleFactory();
        Product productA = simpleFactory.factoryMethod("productA");
        System.out.println(productA);
        Product productB = simpleFactory.factoryMethod("productB");
        System.out.println(productB);
        Product productC = simpleFactory.factoryMethod("productC");
        System.out.println(productC);
    }
}
