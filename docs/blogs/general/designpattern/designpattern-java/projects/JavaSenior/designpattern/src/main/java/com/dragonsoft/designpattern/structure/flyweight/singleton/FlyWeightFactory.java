package com.dragonsoft.designpattern.structure.flyweight.singleton;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.Stack;

public class FlyWeightFactory {
	
	private static final FlyWeightFactory instance = new FlyWeightFactory();
	
	//存放单个享元对象的享元池
	private Stack<Apple> pool = new Stack<>();
	
	private FlyWeightFactory() {
		pool.push(new Apple());
	}
	
	public static FlyWeightFactory getInstance() {
		return instance;
	}
	
	/**
	 * 获取享元池中存放的单个元素
	 * @return
	 */
	public Apple getApple() {
		return pool.peek();
	}
}
