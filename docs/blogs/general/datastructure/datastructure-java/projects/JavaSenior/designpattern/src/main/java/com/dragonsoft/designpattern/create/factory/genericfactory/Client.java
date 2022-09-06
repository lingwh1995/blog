package com.dragonsoft.designpattern.create.factory.genericfactory;

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
	
	@SuppressWarnings("static-access")
	@Test
	public void fun() {
		GenericFactory genericFactory = new GenericFactory();
		A instance1 = genericFactory.getInstance(A.class);
		A instance2 = genericFactory.getInstance(A.class);
		System.out.println(instance1.hashCode());
		System.out.println(instance2.hashCode());
	}

}

class A{
	
}