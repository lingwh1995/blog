package com.dragonsoft.designpattern.structure.flyweight.abs;

import java.util.HashSet;
import java.util.Set;

/**
 * 注意:享元工厂必然是单例的
 * Set实现享元池，非常容易看出享元模式的特点
 * @author lingwh
 *
 */
public class BikeFlyWeightFactorySet {
	
	private Set<BikeFlyWeight> pool = new HashSet<>();
	private static final BikeFlyWeightFactorySet instance = new BikeFlyWeightFactorySet();
	
	private BikeFlyWeightFactorySet() {
		//创建享元工厂的时候同时创建几个Bike
		for(int i=1; i<=3; i++) {
			pool.add(new MoBikeFlyWeight(i + "号摩拜单车"));
		}
	}
	
	public static BikeFlyWeightFactorySet getInstance() {
		return instance;
	}

	/**
	 * 获取享元对象
	 * @return
	 */
	public BikeFlyWeight getBike() {
		for(BikeFlyWeight bike:pool) {
			if(bike.getState() == 0) {
				return bike;
			}
		}
		return null;
	}
	
	/**
	 * 返回享元池中的对象个数
	 * @return
	 */
	public int getBikeCount() {
		return pool.size();
	}
}
