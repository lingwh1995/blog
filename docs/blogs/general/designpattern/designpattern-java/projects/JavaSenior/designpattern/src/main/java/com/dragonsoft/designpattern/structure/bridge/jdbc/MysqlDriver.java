package com.dragonsoft.designpattern.structure.bridge.jdbc;

public class MysqlDriver implements Driver{

	static {
		//通过Class.forName()来创建对象,当Class.forName()执行时,静态代码快会自动运行，在这块儿进行注册驱动的操作
		DriverManager.registerDriver(new MysqlDriver());
	}
	
	@Override
	public Connection connect() {
		System.out.println("Mysql connect success...");
		return new Connection();
	}

}
