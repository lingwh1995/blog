package com.dragonsoft.designpattern.action.strategy.basic;

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
	public void fun() {
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
		
}
