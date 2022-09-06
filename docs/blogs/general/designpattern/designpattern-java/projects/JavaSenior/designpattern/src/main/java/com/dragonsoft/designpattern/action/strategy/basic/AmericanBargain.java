package com.dragonsoft.designpattern.action.strategy.basic;

public class AmericanBargain implements Bargain{

	@Override
	public void bargain() {
		System.out.println("美国人说英语讲价...");
	}

}
