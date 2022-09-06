package com.dragonsoft.designpattern.action.memento.memento1;

import java.util.ArrayList;
import java.util.List;

/**
 * 守护者角色
 * @author lingwh
 *
 */
public class CareTaker {
	
	private Memento memento;
	
	/*
	 * 新增一条备忘录
	 */
	public void addMemento(Memento memento) {
		this.memento = memento;
	}
	
	/*
	 * 获取某一条备忘录
	 */
	public Memento getMemento() {
		return memento;
	}
}
