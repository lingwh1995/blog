package com.dragonsoft.designpattern.structure.adapter.clas;

import org.junit.Test;

/**
 * 类适配器
 * @author lingwh
 *
 */
public class Client {
	
	@Test
	public void fun() {
		Phone phone = new Phone();
		Voltage220VAdapter voltage5vAdapter = new Voltage220VAdapter();
		phone.chaging(voltage5vAdapter);
	}
}
