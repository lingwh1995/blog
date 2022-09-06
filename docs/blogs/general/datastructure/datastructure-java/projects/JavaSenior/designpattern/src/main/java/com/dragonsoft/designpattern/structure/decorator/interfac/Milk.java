package com.dragonsoft.designpattern.structure.decorator.interfac;

public class Milk extends CoffeeMateDecorator{

	
	public Milk(Coffee coffee) {
		this.coffee = coffee;
	}

	@Override
	public void make() {
		coffee.make();
		addMilk();
	}

	@Override
	public double cost() {
		return coffee.cost() + 2.0;
	}

	public void addMilk() {
		System.out.println("加一份牛奶...+2.0");
	}
}
