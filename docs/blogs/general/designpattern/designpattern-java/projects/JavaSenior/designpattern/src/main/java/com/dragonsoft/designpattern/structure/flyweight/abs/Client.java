package com.dragonsoft.designpattern.structure.flyweight.abs;

import org.junit.Test;

/**
 * 1.使用抽象类作为抽象的享元类
 * 2.注意:享元工厂必然是单例的
 * @author lingwh
 *
 */
public class Client {

	/**
	 * 1.使用set作为存储享元对象的容器
	 * 2.享元池初始化的时候就创建好了享元对象
	 * 3.Set实现享元池，非常容易看出享元模式的特点
	 */
	@Test
	public void fun1() {
		BikeFlyWeightFactorySet factory = BikeFlyWeightFactorySet.getInstance();
		BikeFlyWeight bike1 = factory.getBike();
		bike1.ride("张三");
		BikeFlyWeight bike2 = factory.getBike();
		bike2.ride("李四");
		BikeFlyWeight bike3 = factory.getBike();
		bike3.ride("王五");
		//归还单车
		bike1.back();
		BikeFlyWeight bike4 = factory.getBike();
		bike4.ride("赵六");
		
		//查看享元池中的对象个数
		int bikeCount = factory.getBikeCount();
		System.out.println("享元池中对象的个数:" + bikeCount);
	}
	
	/**
	 * 1.使用Map作为存储享元对象的容器
	 * 2.享元池初始化的时候没有创建享元对象,是使用的过程中动创建了享元对象并且将享元对象添加到享元池中
	 */
	@Test
	public void fun2() {
		BikeFlyWeightFactoryMap factory = BikeFlyWeightFactoryMap.getInstance();
		BikeFlyWeight bike1 = factory.getBike(1);
		bike1.ride("张三");
		BikeFlyWeight bike2 = factory.getBike(2);
		bike2.ride("李四");
		BikeFlyWeight bike3 = factory.getBike(3);
		bike3.ride("王五");
		//归还单车
		bike3.back();
		bike3 = factory.getBike(3);
		bike3.ride("赵六");
		
		//查看享元池中的对象个数
		System.out.println("享元池中对象的个数:" + factory.getBikeCount());
		System.out.println("----------------------");
		
		
		BikeFlyWeight bike4 = factory.getBike(4);
		bike4.ride("孙七");
		//查看享元池中的对象个数
		System.out.println("享元池中对象的个数:" + factory.getBikeCount());
	}
	
}
