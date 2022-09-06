package com.dragonsoft.designpattern.create.prototype;

import java.io.Serializable;

/**
 * 用于测试深拷贝和浅拷贝区别的类
 * 注意：实现Serializable接口是为了完成序列化和反序列化功能，如果使用克隆完成深拷贝则不需要实现Serializable接口,只
 *     实现Cloneable接口就可以了
 * @author lingwh
 *
 */
public class Color implements Cloneable,Serializable{
	private String color;

	public Color() {
		
	}
	
	public Color(String color) {
		this.color = color;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	@Override
	protected Object clone() throws CloneNotSupportedException {
		return super.clone();
	}
	
	@Override
	public String toString() {
		return "Color [color=" + color + "]";
	}
	
}
