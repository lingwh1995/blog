package com.dragonsoft.designpattern.structure.decorator.abs;

import org.junit.Test;

public class Client {
	
	/**
	 * 测试多层包装
	 */
	@Test
	public void fun1() {
		//点一份蓝山咖啡
		Coffee blueMountainCoffee = new BlueMountainCoffee();
		System.out.println("desc:" + blueMountainCoffee.getDescription());
		System.out.println("cost:" + blueMountainCoffee.cost());
		System.out.println("-----------------------------");
		
		//加糖
		blueMountainCoffee = new Suger(blueMountainCoffee);
		System.out.println("desc:" + blueMountainCoffee.getDescription());
		System.out.println("cost:" + blueMountainCoffee.cost());
		System.out.println("-----------------------------");
		
		//加牛奶
		blueMountainCoffee = new Milk(blueMountainCoffee);
		System.out.println("desc:" + blueMountainCoffee.getDescription());
		System.out.println("cost:" + blueMountainCoffee.cost());
		System.out.println("-----------------------------");
		
		//再加牛奶
		blueMountainCoffee = new Milk(blueMountainCoffee);
		System.out.println("desc:" + blueMountainCoffee.getDescription());
		System.out.println("cost:" + blueMountainCoffee.cost());
		System.out.println("-----------------------------");
		
		//点一份星巴克咖啡
		Coffee starbuckCoffee = new StarbuckCoffee();
		System.out.println("desc:" + starbuckCoffee.getDescription());
		System.out.println("cost:" + starbuckCoffee.cost());
		System.out.println("-----------------------------");
		
		//加糖
		starbuckCoffee = new Suger(starbuckCoffee);
		System.out.println("desc:" + starbuckCoffee.getDescription());
		System.out.println("cost:" + starbuckCoffee.cost());
		System.out.println("-----------------------------");
		
		//加牛奶
		starbuckCoffee = new Milk(starbuckCoffee);
		System.out.println("desc:" + starbuckCoffee.getDescription());
		System.out.println("cost:" + starbuckCoffee.cost());
		System.out.println("-----------------------------");
	}
	
	/**
	 * 测试单层包装
	 * 		等式左边返回值的类型不同
	 * 为什么要写这个测试用例:java io源码中BufferedInputStream、DataInputStream、PushbackInputStream
	 * 这三个具体的装饰者在使用时,就是只把被装饰的对象装饰一层就可以调用最终方法了，使用的时候也是只把被装饰的对象装饰了一层
	 * 
	 */
	@Test
	public void fun2() {
		//点一杯蓝山咖啡
		Coffee blueMountainCoffee = new BlueMountainCoffee();
		//加 一次牛奶
		Milk onlyOnceMilk = new Milk(blueMountainCoffee);
		System.out.println("desc:" + onlyOnceMilk.getDescription());
		System.out.println("cost:" + onlyOnceMilk.cost());
	}
}
