package com.dragonsoft.designpattern.create.factory.simplefactory.use;

import org.junit.Test;

public class Client {
	
	@Test
	public void fun() {
		PizzaStoreFactory pizzaFactory = new PizzaStoreFactory();
		Pizza cheesePizza = pizzaFactory.orderPizza("cheese");
		System.out.println(cheesePizza);
		Pizza pepperoniPizza = pizzaFactory.orderPizza("pepperoni");
		System.out.println(pepperoniPizza);
		Pizza clamPizza = pizzaFactory.orderPizza("clam");
		System.out.println(clamPizza);
	}

}
