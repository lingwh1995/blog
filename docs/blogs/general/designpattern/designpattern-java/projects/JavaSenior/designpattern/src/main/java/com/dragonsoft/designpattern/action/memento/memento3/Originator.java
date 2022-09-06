package com.dragonsoft.designpattern.action.memento.memento3;

/**
 * 原发器角色
 * @author lingwh
 *
 */
public class Originator {
	
	private String state;
	private Memento memento = new Memento();
	public String getState() {
		return state;
	}
	
	public void setState(String state) {
		this.state = state;
	}
	
	/*
	 * 创建一条备忘录
	 * 	结合原型模式:使用原型模式创建新的备忘录对象
	 */
	public Memento saveCurrentStateToMemento() throws CloneNotSupportedException {
		memento = memento.clone();
		memento.setState(state);
		return memento;
	}
	
	/*
	 * 根据备忘录恢复到某个状态
	 */
	public void recoverStateFromMemento(Memento memento) {
		this.state = memento.getState();
	}
}
