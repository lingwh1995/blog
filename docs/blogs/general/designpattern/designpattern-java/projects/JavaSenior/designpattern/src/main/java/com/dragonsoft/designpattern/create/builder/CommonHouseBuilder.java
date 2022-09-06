package com.dragonsoft.designpattern.create.builder;

public class CommonHouseBuilder extends AbstractHouseBuilder{

	@Override
	void buildBasic() {
		house.setBasic("3米地基");
		System.out.println("建造普通房子地基...");
	}

	@Override
	void buildWall() {
		house.setWall("4米围墙");
		System.out.println("建造普通房子围墙...");
	}

	@Override
	void buildRoof() {
		house.setRoof("水泥屋顶");
		System.out.println("建造普通房子屋顶...");
	}

}
