package com.dragonsoft.designpattern.create.factory.factorymethod.use;

import org.junit.Test;

public class Client {
	@Test
	public void fun() {
		PizzaStoreFactory nyPizzaStoreFactory = new NYPizzaStoreFactory();
		PizzaStoreFactory chicagoPizzaStoreFactory = new ChicagoPizzaStoreFactory();
 
		Pizza pizza = nyPizzaStoreFactory.orderPizza("cheese");
		System.out.println("Ethan ordered a " + pizza.getName() + "\n");
 
		pizza = chicagoPizzaStoreFactory.orderPizza("cheese");
		System.out.println("Joel ordered a " + pizza.getName() + "\n");

		pizza = nyPizzaStoreFactory.orderPizza("clam");
		System.out.println("Ethan ordered a " + pizza.getName() + "\n");
 
		pizza = chicagoPizzaStoreFactory.orderPizza("clam");
		System.out.println("Joel ordered a " + pizza.getName() + "\n");

		pizza = nyPizzaStoreFactory.orderPizza("pepperoni");
		System.out.println("Ethan ordered a " + pizza.getName() + "\n");
 
		pizza = chicagoPizzaStoreFactory.orderPizza("pepperoni");
		System.out.println("Joel ordered a " + pizza.getName() + "\n");

		pizza = nyPizzaStoreFactory.orderPizza("veggie");
		System.out.println("Ethan ordered a " + pizza.getName() + "\n");
 
		pizza = chicagoPizzaStoreFactory.orderPizza("veggie");
		System.out.println("Joel ordered a " + pizza.getName() + "\n");
	}
}
