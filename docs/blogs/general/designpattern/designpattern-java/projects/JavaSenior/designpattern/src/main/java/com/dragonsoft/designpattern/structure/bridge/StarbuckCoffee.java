package com.dragonsoft.designpattern.structure.bridge;

public class StarbuckCoffee extends Coffee{

	@Override
	public void orderCoffee() {
		coffeeAdditive.addCoffeeAdditive();
		System.out.println("点一杯星巴克咖啡...");
	}
}
