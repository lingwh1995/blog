package com.dragonsoft.designpattern.action.strategy.factory;

public class EnglandStore extends Store {
	
	public EnglandStore() {
		setPayment(new PoundPayment());
		setBargain(new EnglandBargain());
	}
}
