package com.dragonsoft.designpattern.create.factory.factorymethod;

public class Clinet {
	public static void main(String[] args) {
		PizzaStoreFactory nyStore = new NYPizzaStoreFactory();
		PizzaStoreFactory chicagoStore = new ChicagoPizzaStoreFactory();
 
		Pizza pizza = nyStore.orderPizza("cheese");
		System.out.println("Ethan ordered a " + pizza.getName() + "\n");
 
		pizza = chicagoStore.orderPizza("cheese");
		System.out.println("Joel ordered a " + pizza.getName() + "\n");

		pizza = nyStore.orderPizza("clam");
		System.out.println("Ethan ordered a " + pizza.getName() + "\n");
 
		pizza = chicagoStore.orderPizza("clam");
		System.out.println("Joel ordered a " + pizza.getName() + "\n");

		pizza = nyStore.orderPizza("pepperoni");
		System.out.println("Ethan ordered a " + pizza.getName() + "\n");
 
		pizza = chicagoStore.orderPizza("pepperoni");
		System.out.println("Joel ordered a " + pizza.getName() + "\n");

		pizza = nyStore.orderPizza("veggie");
		System.out.println("Ethan ordered a " + pizza.getName() + "\n");
 
		pizza = chicagoStore.orderPizza("veggie");
		System.out.println("Joel ordered a " + pizza.getName() + "\n");
	
		
		System.out.println("--------------------------------------------");
		//测试DependentPizzaStore
		DependentPizzaStore dependentPizzaStore = new DependentPizzaStore();
		pizza = dependentPizzaStore.createPizza("NY", "cheese");
		System.out.println("Lee ordered a " + pizza.getName() + "\n");
	}
}
