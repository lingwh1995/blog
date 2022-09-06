package com.dragonsoft.designpattern.create.builder;

public class HighHouseBuilder extends AbstractHouseBuilder{

	@Override
	void buildBasic() {
		house.setBasic("10米地基");
		System.out.println("建造高楼大厦地基...");
	}

	@Override
	void buildWall() {
		house.setWall("100米围墙");
		System.out.println("建造高楼大厦围墙...");
	}

	@Override
	void buildRoof() {
		house.setRoof("大理石屋顶");
		System.out.println("建造高楼大厦屋顶...");
	}

}
