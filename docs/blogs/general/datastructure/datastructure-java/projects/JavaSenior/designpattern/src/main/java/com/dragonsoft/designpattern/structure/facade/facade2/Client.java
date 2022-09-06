package com.dragonsoft.designpattern.structure.facade.facade2;

import org.junit.Test;

/**
 * 外观模式模拟数据同步功能
 * @author lingwh
 *
 */
public class Client {

	/**
	 * 测试外观模式
	 */
	@Test
	public void fun() {
		DataCenter dataCenter = new DataCenter();
		//给Oracle数据库中添加一条数据
		dataCenter.insertOracle("给Oracle数据库中添加的数据");
		System.out.println("----------------------------");
		//给Mysql数据库中添加一条数据
		dataCenter.insertMysql("给Mysql数据库中添加的数据");
		System.out.println("----------------------------");
		//给Mongo数据库中添加一条数据
		dataCenter.insertMongo("给Mongo数据库中添加的数据");
		System.out.println("----------------------------");
		//给Redis数据库中添加一条数据
		dataCenter.insertRedis("给Redis数据库中添加的数据");
		System.out.println("----------------------------");
		//给Hive数据库中添加一条数据
		dataCenter.insertHive("给Hive数据库中添加的数据");
		System.out.println("----------------------------");
	}
}
