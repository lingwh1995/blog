package com.dragonsoft.designpattern.create.factory.factorymethod.model;

/**
 * ConcreteFactoryC(生产ProductC的具体工厂)
 */
public class ConcreteFactoryC extends Factory{
    @Override
    public Product factoryMethod() {
        return new ConcreteProductC();
    }
}
