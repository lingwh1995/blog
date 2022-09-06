package com.dragonsoft.designpattern.action.memento.memento2;

/**
 * 原发器角色
 * @author lingwh
 *
 */
public class Originator {
	
	private String state;
	
	public String getState() {
		return state;
	}
	
	public void setState(String state) {
		this.state = state;
	}
	
	/*
	 * 创建一条备忘录
	 */
	public Memento saveCurrentStateToMemento() {
		return new Memento(state);
	}
	
	/*
	 * 根据备忘录恢复到某个状态
	 */
	public void recoverStateFromMemento(Memento memento) {
		this.state = memento.getState();
	}
}
