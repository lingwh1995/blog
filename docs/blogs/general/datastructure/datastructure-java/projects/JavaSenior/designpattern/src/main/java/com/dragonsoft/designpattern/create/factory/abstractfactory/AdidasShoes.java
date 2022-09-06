package com.dragonsoft.designpattern.create.factory.abstractfactory;

public class AdidasShoes implements IShoes {

	@Override
	public void produce() {
		System.out.println("Adidas Shoes produce ok...");
	}

}
