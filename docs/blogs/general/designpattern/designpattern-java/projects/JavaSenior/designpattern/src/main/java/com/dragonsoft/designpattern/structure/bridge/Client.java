package com.dragonsoft.designpattern.structure.bridge;

import org.junit.Test;

/**
 * @author lingwh
 *
 */
public class Client {
	
	@Test
	public void fun() {
		//咖啡添加物
		ICoffeeAdditive coffeeAdditive = new Milk();
		Coffee coffee = new StarbuckCoffee();
		coffee.setCoffeeAdditive(coffeeAdditive);
		coffee.orderCoffee();
	}

}
