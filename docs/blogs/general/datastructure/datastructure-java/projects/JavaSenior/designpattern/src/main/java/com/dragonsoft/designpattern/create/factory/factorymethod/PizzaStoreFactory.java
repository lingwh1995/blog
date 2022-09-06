package com.dragonsoft.designpattern.create.factory.factorymethod;

public abstract class PizzaStoreFactory {
	
	/**
	 * 工厂方法
	 * @param item
	 * @return
	 */
	abstract Pizza createPizza(String item);
 
	/**
	 * 调用工厂方法的方法
	 * @param type
	 * @return
	 */
	public Pizza orderPizza(String type) {
		Pizza pizza = createPizza(type);
		System.out.println("--- Making a " + pizza.getName() + " ---");
		pizza.prepare();
		pizza.bake();
		pizza.cut();
		pizza.box();
		return pizza;
	}
}
