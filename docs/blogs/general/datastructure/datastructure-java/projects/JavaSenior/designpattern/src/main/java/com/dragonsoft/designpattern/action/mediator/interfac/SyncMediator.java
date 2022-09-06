package com.dragonsoft.designpattern.action.mediator.interfac;

/**
 * 具体的中介者(同步中介者)
 * 
 * @author lingwh
 *
 */
public class SyncMediator extends Mediator {

	@Override
	public void sync(String databaseName, String data) {
		switch (databaseName) {
		case "mysql":
			// 同步到其他数据库
			data = "[我是同步数据=>]" + data + "[<=我是同步数据]";
			oracleColleague.insert(data);
			mongoColleague.insert(data);
			redisColleague.insert(data);
			hiveColleague.insert(data);
			break;
		case "oracle":
			// 同步到其他数据库
			data = "[我是同步数据=>]" + data + "[<=我是同步数据]";
			mysqlColleague.insert(data);
			mongoColleague.insert(data);
			redisColleague.insert(data);
			hiveColleague.insert(data);
			break;
		case "mongo":
			// 同步到其他数据库
			data = "[我是同步数据=>]" + data + "[<=我是同步数据]";
			mysqlColleague.insert(data);
			oracleColleague.insert(data);
			redisColleague.insert(data);
			hiveColleague.insert(data);
			break;
		case "redis":
			// 不用同步到其他数据库
			break;
		case "hive":
			// 同步到其他数据库
			data = "[我是同步数据=>]" + data + "[<=我是同步数据]";
			mysqlColleague.insert(data);
			oracleColleague.insert(data);
			redisColleague.insert(data);
			mongoColleague.insert(data);
			break;
		default:
			break;
		}
		
	}

}
