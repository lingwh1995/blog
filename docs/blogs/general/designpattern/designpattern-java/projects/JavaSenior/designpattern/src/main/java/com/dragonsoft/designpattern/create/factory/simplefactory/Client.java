package com.dragonsoft.designpattern.create.factory.simplefactory;

import org.junit.Test;

public class Client {
	
	/**
	 * SimplePizzaFactory测试
	 */
	@Test
	public void simplePizzaFactoryTest() {
		SimplePizzaFactory simplePizzaFactory = new SimplePizzaFactory();
		SimplePizzaStore simplePizzaStore = SimplePizzaStore.getSingletonSimplePizzaStore();
		simplePizzaStore.setSimplePizzaFactory(simplePizzaFactory);
		Pizza cheesePizza = simplePizzaStore.orderPizza("cheese");
		System.out.println(cheesePizza);
		Pizza pepperoniPizza = simplePizzaStore.orderPizza("pepperoni");
		System.out.println(pepperoniPizza);
	}

}
