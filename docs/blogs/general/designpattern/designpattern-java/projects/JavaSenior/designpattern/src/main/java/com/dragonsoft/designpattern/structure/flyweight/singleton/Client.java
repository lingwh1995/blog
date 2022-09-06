package com.dragonsoft.designpattern.structure.flyweight.singleton;

import org.junit.Test;

/**
 * 1.从享元池中获取单例对象
 * 2.特殊的享元池:只存放一个元素
 * @author lingwh
 *
 */
public class Client {

	@Test
	public void fun() {
		FlyWeightFactory factory = FlyWeightFactory.getInstance();
		Apple firstApple = factory.getApple();
		Apple secondApple = factory.getApple();
		System.out.println(firstApple == secondApple);
	}
}
