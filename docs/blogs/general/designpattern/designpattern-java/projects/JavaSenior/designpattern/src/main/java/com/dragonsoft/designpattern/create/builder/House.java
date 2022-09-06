package com.dragonsoft.designpattern.create.builder;

public class House {
	
	private String basic;
	private String wall;
	private String roof;
	
	public House() {
	}
	
	public House(String basic, String wall, String roof) {
		this.basic = basic;
		this.wall = wall;
		this.roof = roof;
	}

	public String getBasic() {
		return basic;
	}

	public void setBasic(String basic) {
		this.basic = basic;
	}

	public String getWall() {
		return wall;
	}

	public void setWall(String wall) {
		this.wall = wall;
	}

	public String getRoof() {
		return roof;
	}

	public void setRoof(String roof) {
		this.roof = roof;
	}

	@Override
	public String toString() {
		return "House [basic=" + basic + ", wall=" + wall + ", roof=" + roof + "]";
	}
	
}
