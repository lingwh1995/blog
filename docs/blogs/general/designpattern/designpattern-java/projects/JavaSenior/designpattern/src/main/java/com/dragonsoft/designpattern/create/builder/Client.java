package com.dragonsoft.designpattern.create.builder;

import org.junit.Test;

public class Client {
	
	@Test
	public void fun() {
		//建造普通房子
		AbstractHouseBuilder commonHouseBuilder = new CommonHouseBuilder();
		HouseBuilderDirector houseBuilderDirector = new HouseBuilderDirector(commonHouseBuilder);
		House commonHouse = houseBuilderDirector.build();
		System.out.println(commonHouse);
		
		//建造高楼大厦
		HighHouseBuilder highHouseBuilder = new HighHouseBuilder();
		houseBuilderDirector.setBuilder(highHouseBuilder);
		House highHouse = houseBuilderDirector.build();
		System.out.println(highHouse);
	}
}
