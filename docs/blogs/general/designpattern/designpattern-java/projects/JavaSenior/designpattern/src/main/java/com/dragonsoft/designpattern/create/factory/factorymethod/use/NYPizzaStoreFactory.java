package com.dragonsoft.designpattern.create.factory.factorymethod.use;

public class NYPizzaStoreFactory extends PizzaStoreFactory {

	@Override
	public Pizza createPizza(String pizzaType) {
		if (pizzaType.equals("cheese")) {
			return new NYStyleCheesePizza();
		} else if (pizzaType.equals("veggie")) {
			return new NYStyleVeggiePizza();
		} else if (pizzaType.equals("clam")) {
			return new NYStyleClamPizza();
		} else if (pizzaType.equals("pepperoni")) {
			return new NYStylePepperoniPizza();
		} else {
			return null;
		}
	}
}
