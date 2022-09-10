package com.dragonsoft.designpattern.create.factory.factorymethod.nouse;

import org.junit.Test;

public class Client {
	@Test
	public void fun() {
		//测试DependentPizzaFactory
		PizzaStore pizzaStore = new PizzaStore();
		Pizza pizza = pizzaStore.orderPizza("NY", "cheese");
		System.out.println("Lee ordered a " + pizza.getName() + "\n");
	}
}
