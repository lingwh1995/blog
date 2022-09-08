package com.dragonsoft.designpattern.create.factory.simplefactory.model;

public class SimpleFactory {
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
