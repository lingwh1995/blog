package com.dragonsoft.designpattern.structure.facade.facade2;

import java.util.ArrayList;
import java.util.List;

/**
 * 使用外观模式实现不同数据库之间的数据同步
 * @author lingwh
 *
 */
public class DataCenter {
	 private MysqlDB mysqlDB = new MysqlDB();
	 private OracleDB oracleDB = new OracleDB();
	 private MongoDB mongoDB = new MongoDB();
	 private RedisDB redisDB = new RedisDB();
	 private HiveDB hiveDB = new HiveDB();
	 
	/*
	 * 给Mysql数据库中添加一条数据,要求同步到其他数据库
	 */
	public void insertMysql(String data) {
		//给Mysql数据库添加信息
		mysqlDB.insert(data);
		//同步到其他数据库
		data = "[我是同步数据=>]" + data + "[<=我是同步数据]";
		oracleDB.insert(data);
		mongoDB.insert(data);
		redisDB.insert(data);
		hiveDB.insert(data);
	}
	
	/*
	 * 给Oracel数据添加一条数据,要求同步到其他数据库
	 */
	public void insertOracle(String data) {
		//给Oracle数据库添加信息
		oracleDB.insert(data);
		//同步到其他数据库
		data = "[我是同步数据=>]" + data + "[<=我是同步数据]";
		mysqlDB.insert(data);
		mongoDB.insert(data);
		redisDB.insert(data);
		hiveDB.insert(data);
	}
	
	/*
	 * 给Mongo数据添加一条数据,要求同步到其他数据库
	 */
	public void insertMongo(String data) {
		//给Mongo数据库添加信息
		mongoDB.insert(data);
		//同步到其他数据库
		data = "[我是同步数据=>]" + data + "[<=我是同步数据]";
		mysqlDB.insert(data);
		oracleDB.insert(data);
		redisDB.insert(data);
		hiveDB.insert(data);
	}
	
	
	/*
	 * 给Mongo数据添加一条数据,要求同步到其他数据库
	 */
	public void insertRedis(String data) {
		//给Redis数据库添加信息
		redisDB.insert(data);
		//不用同步到其他数据库
	}
	
	/*
	 * 给Hive数据添加一条数据,要求同步到其他数据库
	 */
	public void insertHive(String data) {
		//给Hive数据库添加信息
		hiveDB.insert(data);
		//同步到其他数据库
		data = "[我是同步数据=>]" + data + "[<=我是同步数据]";
		mysqlDB.insert(data);
		oracleDB.insert(data);
		redisDB.insert(data);
		mongoDB.insert(data);
	}
}
/**
 * 模拟Mysql数据库
 * @author lingwh
 *
 */
class MysqlDB {
	private List<String> datas = new ArrayList<>();
	
	public void insert(String data) {
		datas.add(data);
		System.out.println("当前数据库:Mysql,添加的数据:" + data);
	}
}

/**
 * 模拟Oracle数据库
 * @author lingwh
 *
 */
class OracleDB {
	private List<String> datas = new ArrayList<>();
	
	public void insert(String data) {
		datas.add(data);
		System.out.println("当前数据库:Oracle,添加的数据:" + data);
	}
}

/**
 * 模拟MongoDB数据库
 * @author lingwh
 *
 */
class MongoDB {
	private List<String> datas = new ArrayList<>();
	
	public void insert(String data) {
		datas.add(data);
		System.out.println("当前数据库:Mongo,添加的数据:" + data);
	}
}

/**
 * 模拟Redis数据库
 * @author lingwh
 *
 */
class RedisDB {
	private List<String> datas = new ArrayList<>();
	
	public void insert(String data) {
		datas.add(data);
		System.out.println("当前数据库:Redis,添加的数据:" + data);
	}
}
/**
 * 模拟Hive数据库
 * @author lingwh
 *
 */
class HiveDB {
	private List<String> datas = new ArrayList<>();
	
	public void insert(String data) {
		datas.add(data);
		System.out.println("当前数据库:Hive,添加的数据:" + data);
	}
}