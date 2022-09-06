package com.dragonsoft.designpattern.structure.bridge.jdbc;

import org.junit.Test;

public class Client {
	
	/**
	 * 特别注意：为什么使用Class.forName()创建对象,而不是直接通过new来创建对象？
	 * 		因为Class.forName()的参数是一串字符串,所以可以先写在配置文件中,再从配置文件中获取,然后通过该串创建对象
	 * @throws ClassNotFoundException
	 */
	@Test
	public void fun() throws ClassNotFoundException {
		//注册驱动
		Class<?> clasz = Class.forName("com.dragonsoft.designpattern.structure.bridge.jdbc.MysqlDriver");
		//获取Connection对象
		Connection connection = DriverManager.getConnection();
	}
}
