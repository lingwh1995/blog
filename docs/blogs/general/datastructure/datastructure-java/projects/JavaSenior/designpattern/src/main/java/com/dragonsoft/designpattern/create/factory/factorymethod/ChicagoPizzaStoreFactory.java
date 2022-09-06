package com.dragonsoft.designpattern.create.factory.factorymethod;

public class ChicagoPizzaStoreFactory extends PizzaStoreFactory {

	Pizza createPizza(String item) {
    	if (item.equals("cheese")) {
        		return new ChicagoStyleCheesePizza();
    	} else if (item.equals("veggie")) {
    	    	return new ChicagoStyleVeggiePizza();
    	} else if (item.equals("clam")) {
    	    	return new ChicagoStyleClamPizza();
    	} else if (item.equals("pepperoni")) {
        		return new ChicagoStylePepperoniPizza();
    	} else return null;
	}
}
