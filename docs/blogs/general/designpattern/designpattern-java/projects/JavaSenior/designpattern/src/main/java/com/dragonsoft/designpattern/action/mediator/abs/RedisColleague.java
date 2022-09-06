package com.dragonsoft.designpattern.action.mediator.abs;

import java.util.ArrayList;
import java.util.List;

/**
 * 具体的同事类
 * 
 * @author lingwh
 *
 */
public class RedisColleague extends Colleague {

	// 模拟Redis数据库
	private List<String> datas = new ArrayList<>();

	public RedisColleague(Mediator mediator) {
		this.mediator = mediator;
	}

	@Override
	public void insert(String data) {
		datas.add(data);
		System.out.println("当前数据库:Redis,添加的数据:" + data);
	}

	@Override
	public void insertSafe(String data) {
		insert(data);
		mediator.sync("redis", data);
	}
}
