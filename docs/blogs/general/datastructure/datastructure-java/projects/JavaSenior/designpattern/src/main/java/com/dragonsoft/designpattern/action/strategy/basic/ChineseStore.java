package com.dragonsoft.designpattern.action.strategy.basic;

public class ChineseStore extends Store {

	public ChineseStore() {
		setPayment(new RMBPayment());
		setBargain(new ChineseBargain());
	}

}
