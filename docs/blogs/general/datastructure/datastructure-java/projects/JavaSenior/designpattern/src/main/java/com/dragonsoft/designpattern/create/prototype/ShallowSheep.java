package com.dragonsoft.designpattern.create.prototype;


/**
 * 浅拷贝原型
 * @author lingwh
 *
 */
public class ShallowSheep implements Cloneable{
	private String name;
	private int age;
	private Color color;
	
	public ShallowSheep() {
		
	}

	public ShallowSheep(String name, int age, Color color) {
		this.name = name;
		this.age = age;
		this.color = color;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public Color getColor() {
		return color;
	}

	public void setColor(Color color) {
		this.color = color;
	}
	
	@Override
	protected ShallowSheep clone() throws CloneNotSupportedException {
		ShallowSheep cloneSheep = (ShallowSheep)super.clone();
		return cloneSheep;
	}

	@Override
	public String toString() {
		return "ShallowSheep [name=" + name + ", age=" + age + ", color=" + color + "]";
	}
	
}
