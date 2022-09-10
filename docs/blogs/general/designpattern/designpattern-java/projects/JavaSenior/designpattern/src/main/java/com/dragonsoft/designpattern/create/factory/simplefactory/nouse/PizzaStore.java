package com.dragonsoft.designpattern.create.factory.simplefactory.nouse;

public class PizzaStore {

	public Pizza orderPizza(Pizza pizza) {
		pizza.prepare();
		pizza.bake();
		pizza.cut();
		pizza.box();
		return pizza;
	}
}
