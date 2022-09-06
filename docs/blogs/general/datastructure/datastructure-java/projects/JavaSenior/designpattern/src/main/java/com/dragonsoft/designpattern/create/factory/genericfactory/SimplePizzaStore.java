package com.dragonsoft.designpattern.create.factory.genericfactory;

/**
 * 简单工厂加单例
 * @author lingwh
 *
 */
public class SimplePizzaStore {
	private SimplePizzaFactory simplePizzaFactory;

	public void setSimplePizzaFactory(SimplePizzaFactory simplePizzaFactory) {
		this.simplePizzaFactory = simplePizzaFactory;
	}
	
	public Pizza orderPizza(String pizzaType) {
		Pizza pizza = simplePizzaFactory.createPizza(pizzaType);
		pizza.prepare();
		pizza.bake();
		pizza.cut();
		pizza.box();
		return pizza;
	}
	
	//单例化处理
	private SimplePizzaStore() {}
	private static class SingletonSimplePizzaStore {
		private static final SimplePizzaStore SINGLETONSIMPLEPIZZASTOREINSTANCE = new SimplePizzaStore();
	}
	public static SimplePizzaStore getSingletonSimplePizzaStore() {
		return SingletonSimplePizzaStore.SINGLETONSIMPLEPIZZASTOREINSTANCE;
	}
}
