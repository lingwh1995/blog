package com.dragonsoft.designpattern.action.template_method.template2;

public class GreenTeaHouseWithHook implements TeaHouse{
	
	private TeaHouseTemplate teaHouseTemplate;
	
	public GreenTeaHouseWithHook(TeaHouseTemplate teaHouseTemplate) {
		this.teaHouseTemplate = teaHouseTemplate;
	}

	@Override
	public void prepareWater() {
		teaHouseTemplate.prepareWater();
	}

	@Override
	public void prepareCup() {
		teaHouseTemplate.prepareCup();
	}

	@Override
	public void prepareTealeaf() {
		System.out.println("准备绿茶叶...");
	}

	@Override
	public void addSuger() {
		//钩子方法,空实现即可
	}

	@Override
	public void addWater() {
		teaHouseTemplate.addWater();
	}
}
