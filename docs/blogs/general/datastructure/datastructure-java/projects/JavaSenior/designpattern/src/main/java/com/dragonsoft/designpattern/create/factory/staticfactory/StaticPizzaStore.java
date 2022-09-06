package com.dragonsoft.designpattern.create.factory.staticfactory;

/**
 * 静态工厂加枚举单例
 * @author lingwh
 *
 */
public enum StaticPizzaStore {
	SINGLETON_STATICPIZZASTORE_INSTANCE;
	public Pizza orderPizza(String pizzaType) {
		Pizza pizza = StaticPizzaFactory.createPizza(pizzaType);
		pizza.prepare();
		pizza.bake();
		pizza.cut();
		pizza.box();
		return pizza;
	}
}
