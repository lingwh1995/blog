package com.dragonsoft.designpattern.action.strategy.factory;

public class DollarPayment implements Payment{

	@Override
	public void pay() {
		System.out.println("美元支付...");
	}

}
