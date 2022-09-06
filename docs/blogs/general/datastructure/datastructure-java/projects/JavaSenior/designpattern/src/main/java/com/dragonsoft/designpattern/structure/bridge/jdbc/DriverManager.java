package com.dragonsoft.designpattern.structure.bridge.jdbc;

/**
 * DriverManager上层没有抽象类,直接所有的功能全部在DriverManager中完成
 * @author lingwh
 *
 */
public class DriverManager {
	
	private static Driver driver;
	
	/**
	 * 获取连接
	 * @return
	 */
	public static Connection getConnection() {
		return driver.connect();
	}
	
	/**
	 * 注册驱动
	 * @param driver
	 */
	public static void registerDriver(Driver driver) {
		DriverManager.driver = driver;
	}
	
	
}
