package com.dragonsoft.designpattern.action.strategy.factory;

import org.junit.Test;

/**
 * 
 * @author lingwh
 *
 */
public class Client {

	/**
	 * 测试策略模式
	 */
	@Test
	public void fun1() {
		//在中国商店购物
		Store chineseStore = new ChineseStore();
		chineseStore.shopping();
		//在美国商店购物
		Store americanStore = new AmericanStore();
		americanStore.shopping();
		//在英格兰商店购物
		Store englandStore = new EnglandStore();
		englandStore.shopping();
	}
	
	/**
	 * 测试策略模式+工厂模式,也称为策略工厂
	 */
	@Test
	public void fun2() {
		//在中国商店购物
		Store store = StrategyFactory.createStore("chinese");
		store.shopping();
		
		//在美国商店购物
		store = StrategyFactory.createStore("american");
		store.shopping();
		
		//在英格兰商店购物
		store = StrategyFactory.createStore("england");
		store.shopping();
	}
}
