package com.dragonsoft.designpattern.structure.flyweight.abs;

public class MoBikeFlyWeight extends BikeFlyWeight{

	//新增一个内部状态,车的编号
	protected String bikeId;
	
	public MoBikeFlyWeight(String bikeId) {
		this.bikeId = bikeId;
	}

	@Override
	void ride(String userName) {
		state = 1;
		System.out.println(userName + "骑" + bikeId + "出行！");
	}

	@Override
	void back() {
		state = 0;
		System.out.println(bikeId + "被归还！");
	}

}
