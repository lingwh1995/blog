package com.dragonsoft.designpattern.create.factory.simplefactory.nouse;

import org.junit.Test;

public class Client {
	
	@Test
	public void fun() {
		PizzaStore pizzaStore = new PizzaStore();
		Pizza cheesePizza = pizzaStore.orderPizza(new CheesePizza());
		System.out.println(cheesePizza);
		Pizza pepperoniPizza = pizzaStore.orderPizza(new PepperoniPizza());
		System.out.println(pepperoniPizza);
		Pizza clamPizza = pizzaStore.orderPizza(new ClamPizza());
		System.out.println(clamPizza);
	}

}
