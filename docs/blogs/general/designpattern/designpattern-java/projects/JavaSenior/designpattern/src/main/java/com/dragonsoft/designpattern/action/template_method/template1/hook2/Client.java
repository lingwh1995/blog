package com.dragonsoft.designpattern.action.template_method.template1.hook2;

import org.junit.Test;

/**
 * 钩子方法形式二:没有具体的业务代码写在里面，主要的价值在于让一部分子类覆盖这个方法，如
 * 	TeaTemplate中的addSuger()方法,子类在覆盖该方法的时候可以只覆盖空实现，
 *  也可以写一些逻辑在这个被覆盖的方法里面
 * @author lingwh
 *
 */
public class Client {
	
	/**
	 * 测试模板方法模式:不使用钩子函数
	 *   	生产含糖红茶和含糖绿茶
	 */
	@Test
	public void fun1() {
		TeaHouseTemplate greenTeaHouse = new GreenTeaHouse();
		greenTeaHouse.makeTea();
		System.out.println("------------------------");
		TeaHouseTemplate blackTeaHouse = new BlackTeaHouse();
		blackTeaHouse.makeTea();
	}
	
	/**
	 * 测试模板方法模式:使用钩子函数
	 * 		生产不含糖红茶和不含糖绿茶
	 */
	@Test
	public void fun2() {
		TeaHouseTemplate greenTeaHouseWithHook = new GreenTeaHouseWithHook();
		greenTeaHouseWithHook.makeTea();
		System.out.println("------------------------");
		TeaHouseTemplate blackTeaHouseWithHook = new BlackTeaHouseWithHook();
		blackTeaHouseWithHook.makeTea();
	}
}
