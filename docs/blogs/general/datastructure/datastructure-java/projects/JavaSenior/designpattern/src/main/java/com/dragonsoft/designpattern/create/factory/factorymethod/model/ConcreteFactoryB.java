package com.dragonsoft.designpattern.create.factory.factorymethod.model;

/**
 * ConcreteFactoryB(生产ProductB的具体工厂)
 */
public class ConcreteFactoryB extends Factory{
    @Override
    public Product factoryMethod() {
        return new ConcreteProductB();
    }
}
