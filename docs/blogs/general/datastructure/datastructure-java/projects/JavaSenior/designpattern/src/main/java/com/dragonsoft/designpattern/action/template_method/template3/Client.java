package com.dragonsoft.designpattern.action.template_method.template3;

import org.junit.Test;

/**
 * 1.侵入性比较低,这种写法TeaHouseTemplate不会与TeaHouse的发生任何耦合,只是在调用的时候才为TeaHouse创建子类
 * 2.注意:模板类中的非模板方法来源于接口中，通过模板方法调用所有的废模板方法包括一些钩子方法
 * 	 为什么要这么设计,而不是把模板方法也放在接口中?
 * 	 如果把模板方法也放在接口中,那么不管是否采用匿名内部类这种写法,接口的实现类必然要持有模板类的引用,对于接口的实现类而言,侵入性太强了
 * 3.这种写法不要用boolean hook()来实现钩子方法，而是通过代码的有具体实现或者是只是一个空实现来 实现钩子方法
 * 4.这种写法比较推荐
 * @author lingwh
 *
 */
public class Client {
	
	/**
	 * 不使用钩子方法:生产加糖的绿茶
	 */
	@Test
	public void fun() {
		TeaHouseTemplate teaHouseTemplate = new TeaHouseTemplate();
		teaHouseTemplate.makeTea(new TeaHouse() {
			
			@Override
			public void prepareWater() {
				teaHouseTemplate.prepareWater();
			}
			
			@Override
			public void prepareTealeaf() {
				System.out.println("准备绿茶叶...");
			}
			
			@Override
			public void prepareCup() {
				teaHouseTemplate.prepareCup();
			}
			
			@Override
			public void addWater() {
				teaHouseTemplate.addWater();
			}
			
			@Override
			public void addSuger() {
				teaHouseTemplate.addSuger();
			}
		});
	}
	
	/**
	 * 使用钩子方法:生产不加糖的绿茶
	 */
	@Test
	public void fun2() {
		TeaHouseTemplate teaHouseTemplate = new TeaHouseTemplate();
		teaHouseTemplate.makeTea(new TeaHouse() {
			
			@Override
			public void prepareWater() {
				teaHouseTemplate.prepareWater();
			}
			
			@Override
			public void prepareTealeaf() {
				System.out.println("准备绿茶叶...");
			}
			
			@Override
			public void prepareCup() {
				teaHouseTemplate.prepareCup();
			}
			
			@Override
			public void addWater() {
				teaHouseTemplate.addWater();
			}
			
			@Override
			public void addSuger() {
				//钩子方法,空实现即可
			}
		});
	}
}
