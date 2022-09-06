package com.dragonsoft.designpattern.structure.decorator.interfac;

public class StarbuckCoffee implements Coffee{

	@Override
	public void make() {
		System.out.println("制作一杯星巴克咖啡...");
	}

	@Override
	public double cost() {
		return 20.0;
	}

}
