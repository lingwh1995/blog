package com.dragonsoft.designpattern.action.template_method.template1.hook1;

public class GreenTeaHouse extends TeaHouseTemplate{

	@Override
	public void prepareTealeaf() {
		System.out.println("准备绿茶茶叶...");
	}

}
