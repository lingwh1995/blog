package com.dragonsoft.designpattern.structure.decorator.abs;

/**
 * 咖啡伴侣
 * @author lingwh
 *
 */
public abstract class CoffeeMateDecorator extends Coffee{
	
	protected Coffee coffee;
	
	public abstract double cost();
}
