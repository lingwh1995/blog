package com.dragonsoft.designpattern.action.strategy.basic;

public class ChineseBargain implements Bargain{

	@Override
	public void bargain() {
		System.out.println("中国人说汉语讲价...");
	}

}
