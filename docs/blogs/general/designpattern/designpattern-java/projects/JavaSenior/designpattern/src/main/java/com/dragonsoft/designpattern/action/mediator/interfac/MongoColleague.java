package com.dragonsoft.designpattern.action.mediator.interfac;

import java.util.ArrayList;
import java.util.List;

/**
 * 具体的同事类
 * 
 * @author lingwh
 *
 */
public class MongoColleague implements Colleague {

	// 模拟Mongo数据库
	private List<String> datas = new ArrayList<>();

	@Override
	public void insert(String data) {
		datas.add(data);
		System.out.println("当前数据库:Mongo,添加的数据:" + data);
	}

	@Override
	public void insertSafe(Mediator mediator,String data) {
		insert(data);
		mediator.sync("mongo", data);
	}
}
