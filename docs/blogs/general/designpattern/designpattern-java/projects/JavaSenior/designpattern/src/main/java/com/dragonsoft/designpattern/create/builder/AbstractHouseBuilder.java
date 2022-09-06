package com.dragonsoft.designpattern.create.builder;

public abstract class AbstractHouseBuilder {
	
	protected House house = new House();
	
	abstract void buildBasic();
	abstract void buildWall();
	abstract void buildRoof();
	public House buildHouse() {
		return house;
	}
}
