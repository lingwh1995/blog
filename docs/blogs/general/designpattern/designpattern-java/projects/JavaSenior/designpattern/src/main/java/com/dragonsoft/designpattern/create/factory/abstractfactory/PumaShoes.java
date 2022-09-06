package com.dragonsoft.designpattern.create.factory.abstractfactory;

public class PumaShoes implements IShoes {

	@Override
	public void produce() {
		System.out.println("Puma Shoes produce ok...");
	}

}
