package com.dragonsoft.designpattern.action.strategy.factory;

public class AmericanStore extends Store {
	
	public AmericanStore() {
		setPayment(new DollarPayment());
		setBargain(new AmericanBargain());
	}
}
