package com.dragonsoft.designpattern.create.factory.staticfactory;

import org.junit.Test;

public class Client {
	
	/**
	 * StaticPizzaFactory测试
	 */
	@Test
	public void staticPizzaFactoryTest() {
		StaticPizzaStore staticPizzaStore = StaticPizzaStore.SINGLETON_STATICPIZZASTORE_INSTANCE;
		Pizza cheesePizza = staticPizzaStore.orderPizza("cheese");
		System.out.println(cheesePizza);
		Pizza pepperoniPizza = staticPizzaStore.orderPizza("pepperoni");
		System.out.println(pepperoniPizza);
	}
}
