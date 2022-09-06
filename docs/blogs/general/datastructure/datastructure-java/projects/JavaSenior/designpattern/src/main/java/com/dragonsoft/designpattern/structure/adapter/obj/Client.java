package com.dragonsoft.designpattern.structure.adapter.obj;

import org.junit.Test;

/**
 * 对象适配器
 * @author lingwh
 *
 */
public class Client {
	
	@Test
	public void fun() {
		Voltage220V voltage220v = new Voltage220V();
		Voltage220VAdapter voltage5vAdapter = new Voltage220VAdapter(voltage220v);
		Phone phone = new Phone();
		phone.chaging(voltage5vAdapter);
	}
}
