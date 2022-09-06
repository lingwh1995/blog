package com.dragonsoft.designpattern.action.template_method.template1.hook2;

public class BlackTeaHouseWithHook extends TeaHouseTemplate{

	@Override
	public void prepareTealeaf() {
		System.out.println("准备红茶茶叶...");
	}

	@Override
	public void addSuger() {
		//空实现,不做任何处理
	}

}
