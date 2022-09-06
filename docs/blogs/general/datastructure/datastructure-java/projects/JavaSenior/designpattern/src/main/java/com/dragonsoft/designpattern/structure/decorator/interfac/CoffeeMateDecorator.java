package com.dragonsoft.designpattern.structure.decorator.interfac;

/**
 * 特别注意:抽象类实现了接口之后可以不实现接口中的方法,只需要将抽象类的方法声明成abstract类型的即可
 * @author lingwh
 *
 */
public abstract class CoffeeMateDecorator implements Coffee{

	protected Coffee coffee;
	
	public abstract void make();
	
	public abstract double cost();
	
}
