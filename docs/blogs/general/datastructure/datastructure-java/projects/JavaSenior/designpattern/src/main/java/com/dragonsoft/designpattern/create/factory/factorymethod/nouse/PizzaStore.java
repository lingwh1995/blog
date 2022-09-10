package com.dragonsoft.designpattern.create.factory.factorymethod.nouse;

/**
 * 不使用工厂(方法)模式(实际上使用了简单工厂模式)
 */
public class PizzaStore {
	public Pizza createPizza(String pizzaStyle, String pizzaType) {
		Pizza pizza = null;
		if (pizzaStyle.equals("NY")) {
			if (pizzaType.equals("cheese")) {
				pizza = new NYStyleCheesePizza();
			} else if (pizzaType.equals("veggie")) {
				pizza = new NYStyleVeggiePizza();
			} else if (pizzaType.equals("clam")) {
				pizza = new NYStyleClamPizza();
			} else if (pizzaType.equals("pepperoni")) {
				pizza = new NYStylePepperoniPizza();
			}
		} else if (pizzaStyle.equals("Chicago")) {
			if (pizzaType.equals("cheese")) {
				pizza = new ChicagoStyleCheesePizza();
			} else if (pizzaType.equals("veggie")) {
				pizza = new ChicagoStyleVeggiePizza();
			} else if (pizzaType.equals("clam")) {
				pizza = new ChicagoStyleClamPizza();
			} else if (pizzaType.equals("pepperoni")) {
				pizza = new ChicagoStylePepperoniPizza();
			}
		} else {
			System.out.println("Error: invalid type of pizza");
			return null;
		}
		pizza.prepare();
		pizza.bake();
		pizza.cut();
		pizza.box();
		return pizza;
	}

	/**
	 * 调用工厂方法的方法
	 * @param pizzaType
	 * @return
	 */
	public Pizza orderPizza(String pizzaStyle, String pizzaType) {
		Pizza pizza = createPizza(pizzaStyle,pizzaType);
		System.out.println("--- Making a " + pizza.getName() + " ---");
		pizza.prepare();
		pizza.bake();
		pizza.cut();
		pizza.box();
		return pizza;
	}
}
