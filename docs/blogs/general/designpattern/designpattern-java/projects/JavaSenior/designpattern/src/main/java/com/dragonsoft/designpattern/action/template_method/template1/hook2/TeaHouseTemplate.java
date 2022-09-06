package com.dragonsoft.designpattern.action.template_method.template1.hook2;

/**
 * 模板方法
 * 	1.模板方法一般声明为final类型的方法,防止被子类重写
 *  2.公共方法最好实现为private的，这样外部无法调用
 */
public abstract class TeaHouseTemplate {
	public final void makeTea() {
		prepareWater();
		prepareCup();
		prepareTealeaf();
		addSuger();
		addWater();
	}
	
	public void prepareWater() {
		System.out.println("准备泡茶用的水...");
	}
	
	public void prepareCup() {
		System.out.println("准备泡茶用的杯子...");
	}
	
	public abstract void prepareTealeaf();
	
	//钩子方法
	public abstract void addSuger();
	
	public void addWater() {
		System.out.println("给杯子中加水...");
	}

}
