package com.dragonsoft.designpattern.action.strategy.factory;

public class StrategyFactory {
	
	/**
	 * 根据商店类型创建商店
	 * @param storeType
	 * @return
	 */
	public static Store createStore(String storeType) {
		Store store = null;
		switch (storeType) {
			case "chinese":
				//创建中国商店
				store = new ChineseStore();
				break;
			case "american":
				//创建美国商店
				store = new AmericanStore();
				break;
			case "england":
				//创建英格兰商店
				store = new EnglandStore();
				break;
			default :
				break;
		}
		return store;
	}
}
