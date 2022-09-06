package com.dragonsoft.designpattern.create.builder;

public class HouseBuilderDirector {
	
	private AbstractHouseBuilder builder;

	public HouseBuilderDirector(AbstractHouseBuilder builder) {
		this.builder = builder;
	}
	
	/**
	 * 用于重置具体的构建者
	 * @param builder
	 */
	public void setBuilder(AbstractHouseBuilder builder) {
		this.builder = builder;
	}
	
	public House build() {
		builder.buildBasic();
		builder.buildWall();
		builder.buildRoof();
		return builder.buildHouse();
	}
}
