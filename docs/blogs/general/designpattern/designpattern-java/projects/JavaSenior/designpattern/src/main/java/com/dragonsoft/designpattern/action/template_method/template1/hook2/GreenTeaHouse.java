package com.dragonsoft.designpattern.action.template_method.template1.hook2;

public class GreenTeaHouse extends TeaHouseTemplate{

	@Override
	public void prepareTealeaf() {
		System.out.println("准备绿茶茶叶...");
	}

	@Override
	public void addSuger() {
		System.out.println("给杯子中加糖...");
	}

}
