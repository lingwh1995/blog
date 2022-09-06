package com.dragonsoft.designpattern.action.mediator.abs;

import java.util.ArrayList;
import java.util.List;

/**
 * 具体的同事类
 * 
 * @author lingwh
 *
 */
public class OracleColleague extends Colleague {

	// 模拟Oracle数据库
	private List<String> datas = new ArrayList<>();

	public OracleColleague(Mediator mediator) {
		this.mediator = mediator;
	}

	@Override
	public void insert(String data) {
		datas.add(data);
		System.out.println("当前数据库:Oracle,添加的数据:" + data);
	}

	@Override
	public void insertSafe(String data) {
		insert(data);
		mediator.sync("oracle", data);
	}

}
