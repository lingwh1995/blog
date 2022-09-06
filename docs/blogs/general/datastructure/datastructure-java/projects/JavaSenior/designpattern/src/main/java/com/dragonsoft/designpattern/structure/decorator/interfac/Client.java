package com.dragonsoft.designpattern.structure.decorator.interfac;

import org.junit.Test;

public class Client {

	@Test
	public void fun() {
		//点一份蓝山咖啡
		Coffee blueMountainCoffee = new BlueMountainCoffee();
		blueMountainCoffee.make();
		System.out.println("cost:" + blueMountainCoffee.cost());
		System.out.println("-----------------------------");
		
		//加糖
		blueMountainCoffee = new Suger(blueMountainCoffee);
		blueMountainCoffee.make();
		System.out.println("cost:" + blueMountainCoffee.cost());
		System.out.println("-----------------------------");
		
		//加牛奶
		blueMountainCoffee = new Milk(blueMountainCoffee);
		blueMountainCoffee.make();
		System.out.println("cost:" + blueMountainCoffee.cost());
		System.out.println("-----------------------------");
		
		//再加牛奶
		blueMountainCoffee = new Milk(blueMountainCoffee);
		blueMountainCoffee.make();
		System.out.println("cost:" + blueMountainCoffee.cost());
		System.out.println("-----------------------------");
		
		//点一份星巴克咖啡
		Coffee starbuckCoffee = new StarbuckCoffee();
		starbuckCoffee.make();
		System.out.println("cost:" + starbuckCoffee.cost());
		System.out.println("-----------------------------");
		
		//加糖
		starbuckCoffee = new Suger(starbuckCoffee);
		starbuckCoffee.make();
		System.out.println("cost:" + starbuckCoffee.cost());
		System.out.println("-----------------------------");
		
		//加牛奶
		starbuckCoffee = new Milk(starbuckCoffee);
		starbuckCoffee.make();
		System.out.println("cost:" + starbuckCoffee.cost());
		System.out.println("-----------------------------");
	}
}
