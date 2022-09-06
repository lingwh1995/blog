package com.dragonsoft.designpattern.action.memento.memento4;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 守护者角色
 * @author lingwh
 *
 */
public class CareTaker {
	
	private Map<String,ArrayList<Memento>> mementos = new HashMap<String,ArrayList<Memento>>();
	
	/*
	 * 新增一条备忘录
	 */
	public void addMemento(String roleId,Memento memento) {
		ArrayList<Memento> mementoList = mementos.get(roleId);
		if(mementoList == null) {
			mementoList = new ArrayList<Memento>();
		}
		mementoList.add(memento);
		mementos.put(roleId,mementoList);
	}
	
	/*
	 * 获取某一条备忘录
	 */
	public Memento getMemento(String roleId,int index) {
		ArrayList<Memento> mementoList = mementos.get(roleId);
		return mementoList.get(index);
	}
}
