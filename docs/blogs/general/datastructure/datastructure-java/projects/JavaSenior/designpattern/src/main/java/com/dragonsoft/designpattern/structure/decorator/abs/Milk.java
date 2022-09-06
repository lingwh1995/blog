package com.dragonsoft.designpattern.structure.decorator.abs;

public class Milk extends CoffeeMateDecorator{

	public Milk(Coffee coffee) {
		this.coffee = coffee;
	}
	
	@Override
	public String getDescription() {
		return coffee.getDescription() + ",Milk";
	}
	
	@Override
	public double cost() {
		return coffee.cost() + 2.0;
	}

}
