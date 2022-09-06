package com.dragonsoft.designpattern.action.template_method.template1.hook2;

public class BlackTeaHouse extends TeaHouseTemplate {

	@Override
	public void prepareTealeaf() {
		System.out.println("准备红茶茶叶...");
	}

	@Override
	public void addSuger() {
		System.out.println("给杯子中加糖...");
	}

}
