package com.dragonsoft.designpattern.action.memento.memento2;

import java.util.ArrayList;
import java.util.List;

/**
 * 守护者角色
 * @author lingwh
 *
 */
public class CareTaker {
	
	private List<Memento> mementos = new ArrayList<Memento>();
	
	/*
	 * 新增一条备忘录
	 */
	public void addMemento(Memento memento) {
		mementos.add(memento);
	}
	
	/*
	 * 获取某一条备忘录
	 */
	public Memento getMemento(int index) {
		return mementos.get(index);
	}
}
