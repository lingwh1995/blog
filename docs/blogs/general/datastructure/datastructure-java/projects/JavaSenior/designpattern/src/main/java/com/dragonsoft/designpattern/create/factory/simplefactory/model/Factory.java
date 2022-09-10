package com.dragonsoft.designpattern.create.factory.simplefactory.model;

/**
 * Factory(简单工厂)
 */
public class Factory {
    public Product factoryMethod(String productType) {
        Product product = null;
        if (productType.equals("productA")) {
            product = new ConcreteProductA();
        } else if (productType.equals("productB")) {
            product = new ConcreteProductB();
        } else if (productType.equals("productC")) {
            product = new ConcreteProductC();
        }
        return product;
    }
}
