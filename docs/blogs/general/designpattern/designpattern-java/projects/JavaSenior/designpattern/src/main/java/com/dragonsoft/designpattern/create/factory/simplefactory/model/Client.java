package com.dragonsoft.designpattern.create.factory.simplefactory.model;

import org.junit.Test;

/**
 * Client(客户端)
 */
public class Client {

    @Test
    public void fun() {
        Factory factory = new Factory();
        Product productA = factory.factoryMethod("productA");
        System.out.println(productA);
        Product productB = factory.factoryMethod("productB");
        System.out.println(productB);
        Product productC = factory.factoryMethod("productC");
        System.out.println(productC);
    }
}
