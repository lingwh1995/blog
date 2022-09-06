package com.dragonsoft.designpattern.structure.bridge;

public class BuleMountainCoffee extends Coffee{

	@Override
	public void orderCoffee() {
		coffeeAdditive.addCoffeeAdditive();
		System.out.println("点一杯蓝山咖啡...");
	}
}
