package com.dragonsoft.designpattern.structure.flyweight.abs;

public abstract class BikeFlyWeight {

	//内部状态,0是未使用,1是使用中
	protected Integer state = 0;
	
	//UserName外部状态
	abstract void ride(String userName);
	abstract void back();
	
	public Integer getState() {
		return state;
	}
}
