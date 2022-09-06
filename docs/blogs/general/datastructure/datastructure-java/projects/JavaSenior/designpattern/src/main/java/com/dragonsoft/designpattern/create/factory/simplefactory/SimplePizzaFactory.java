package com.dragonsoft.designpattern.create.factory.simplefactory;

public class SimplePizzaFactory {
	
	public Pizza createPizza(String pizzaType) {
		Pizza pizza = null;
		if (pizzaType.equals("cheese")) {
			pizza = new CheesePizza();
		} else if (pizzaType.equals("pepperoni")) {
			pizza = new PepperoniPizza();
		} else if (pizzaType.equals("clam")) {
			pizza = new ClamPizza();
		} 
		return pizza;
	}
}
