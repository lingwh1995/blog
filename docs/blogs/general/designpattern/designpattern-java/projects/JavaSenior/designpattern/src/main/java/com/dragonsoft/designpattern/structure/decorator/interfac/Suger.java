package com.dragonsoft.designpattern.structure.decorator.interfac;

public class Suger extends CoffeeMateDecorator{

	
	public Suger(Coffee coffee) {
		this.coffee = coffee;
	}

	@Override
	public void make() {
		coffee.make();
		addSuger();
	}

	@Override
	public double cost() {
		return coffee.cost() + 1.0;
	}
	
	public void addSuger() {
		System.out.println("加一份糖...+1.0");
	}
}
