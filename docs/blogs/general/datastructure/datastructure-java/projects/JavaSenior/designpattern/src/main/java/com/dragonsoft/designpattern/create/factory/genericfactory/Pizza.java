package com.dragonsoft.designpattern.create.factory.genericfactory;

import java.util.ArrayList;

public abstract class Pizza {
	String name;
	String dough;
	String sauce;
	ArrayList<String> toppings = new ArrayList<String>();
	
	public void prepare() {
		System.out.println("preparing..." + this.name);
	}
	
	public void bake() {
		System.out.println("baking..." + this.name);
	}
	
	public void cut() {
		System.out.println("cutting..." + this.name);
	}
	
	public void box() {
		System.out.println("boxing..." + this.name);
	}

	@Override
	public String toString() {
		StringBuilder pizza = new StringBuilder();
		pizza.append("------" + name + "------\n");
		pizza.append("dough:" + dough + "\n");
		pizza.append("sauce:" + sauce + "\n");
		pizza.append("toppings:\n");
		for(String topping:toppings) {
			pizza.append(topping+"\n");
		}
		return String.valueOf(pizza);
	}
	
}
