package com.dragonsoft.designpattern.create.factory.factorymethod.use;

public abstract class PizzaStoreFactory {
	
	/**
	 * 工厂方法
	 * @param pizzaType
	 * @return
	 */
	public abstract Pizza createPizza(String pizzaType);

	/**
	 * 调用工厂方法的方法
	 * @param pizzaType
	 * @return
	 */
	public Pizza orderPizza(String pizzaType) {
		Pizza pizza = createPizza(pizzaType);
		System.out.println("--- Making a " + pizza.getName() + " ---");
		pizza.prepare();
		pizza.bake();
		pizza.cut();
		pizza.box();
		return pizza;
	}
}
