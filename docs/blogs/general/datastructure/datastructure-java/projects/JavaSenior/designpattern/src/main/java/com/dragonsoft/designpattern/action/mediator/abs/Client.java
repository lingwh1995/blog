package com.dragonsoft.designpattern.action.mediator.abs;

import org.junit.Test;

public class Client {

	@Test
	public void fun() {
		// 1.创建中介者
		Mediator mediator = new SyncMediator();
		// 2.创建具体的同事类
		Colleague oracleColleague = new OracleColleague(mediator);
		Colleague mysqlColleague = new MysqlColleague(mediator);
		Colleague mongoColleague = new MongoColleague(mediator);
		Colleague redisColleague = new RedisColleague(mediator);
		Colleague hiveColleague = new HiveColleague(mediator);
		// 3.让中介者知道所有的同事
		mediator.setMysqlColleague(mysqlColleague);
		mediator.setOracleColleague(oracleColleague);
		mediator.setMongoColleague(mongoColleague);
		mediator.setRedisColleague(redisColleague);
		mediator.setHiveColleague(hiveColleague);
		// 4.开始执行真正的操作,如同步数据
		// 给Oracle数据库中添加一条数据
		oracleColleague.insertSafe("我是给Oracle数据库添加的数据");
		System.out.println("----------------------------");
		// 给Mysql数据库中添加一条数据
		mysqlColleague.insertSafe("我是给Mysql数据库添加的数据");
		System.out.println("----------------------------");
		// 给Mongo数据库中添加一条数据
		mongoColleague.insertSafe("我是给Mongo数据库添加的数据");
		System.out.println("----------------------------");
		// 给Redis数据库中添加一条数据
		redisColleague.insertSafe("我是给Redis数据库添加的数据");
		System.out.println("----------------------------");
		// 给Hive数据库中添加一条数据
		hiveColleague.insertSafe("我是给Hive数据库添加的数据");
		System.out.println("----------------------------");
	}
}
