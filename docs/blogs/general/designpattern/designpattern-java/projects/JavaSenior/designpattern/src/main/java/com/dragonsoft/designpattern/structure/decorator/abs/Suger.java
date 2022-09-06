package com.dragonsoft.designpattern.structure.decorator.abs;

public class Suger extends CoffeeMateDecorator{

	
	public Suger(Coffee coffee) {
		this.coffee = coffee;
	}

	@Override
	public String getDescription() {
		return coffee.getDescription() + ",Suger";
	}
	
	@Override
	public double cost() {
		return coffee.cost() + 1.0;
	}

}
