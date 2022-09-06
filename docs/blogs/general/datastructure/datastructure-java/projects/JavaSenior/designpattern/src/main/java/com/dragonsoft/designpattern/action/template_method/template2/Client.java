package com.dragonsoft.designpattern.action.template_method.template2;

import org.junit.Test;
/**
 * 1.这种写法侵入性很高,这种写法TeaHouseTemplate必然会与TeaHouse的发生耦合
 * 2.注意:模板类中的非模板方法来源于接口中，通过模板方法调用所有的废模板方法包括一些钩子方法
 * 	 为什么要这么设计,而不是把模板方法也放在接口中?
 * 	 如果把模板方法也放在接口中,那么不管是否采用匿名内部类这种写法,接口的实现类必然要持有模板类的引用,对于接口的实现类而言,侵入性太强了
 * 3.这种写法不要用boolean hook()来实现钩子方法，而是通过代码的有具体实现或者是只是一个空实现来 实现钩子方法
 * 4.这种写法虽然使用了模板中的方法,但是还不如不用
 * @author lingwh
 *
 */
public class Client {
	
	/**
	 * 不使用钩子方法:生产加糖的绿茶
	 */
	@Test
	public void fun1() {
		TeaHouseTemplate teaHouseTemplate = new TeaHouseTemplate();
		GreenTeaHouse greenTeaHouse = new GreenTeaHouse(teaHouseTemplate);
		teaHouseTemplate.makeTea(greenTeaHouse);
	}
	
	/**
	 * 使用钩子方法:生产不加糖的绿茶
	 */
	@Test
	public void fun2() {
		TeaHouseTemplate teaHouseTemplate = new TeaHouseTemplate();
		GreenTeaHouseWithHook greenTeaHouseWithHook = new GreenTeaHouseWithHook(teaHouseTemplate);
		teaHouseTemplate.makeTea(greenTeaHouseWithHook);
	}
}
