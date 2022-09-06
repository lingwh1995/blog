package com.dragonsoft.designpattern.structure.flyweight.abs;

import java.util.HashMap;
import java.util.Map;

/**
 * 注意:享元工厂必然是单例的
 * @author lingwh
 *
 */
public class BikeFlyWeightFactoryMap {

	private static BikeFlyWeightFactoryMap instance = new BikeFlyWeightFactoryMap();
	
	private BikeFlyWeightFactoryMap() {

	}
	
	public static BikeFlyWeightFactoryMap getInstance() {
		return instance;
	}

	private Map<Integer,BikeFlyWeight> pool = new HashMap<>();
	
 	public BikeFlyWeight getBike(Integer bikeId) {
        if(!pool.containsKey(bikeId)){
            pool.put(bikeId,new MoBikeFlyWeight(bikeId + "号摩拜单车"));
        }
        return pool.get(bikeId);
 	}
	
	/**
	 * 返回享元池中的对象个数
	 * @return
	 */
	public int getBikeCount() {
		return pool.size();
	}
}
