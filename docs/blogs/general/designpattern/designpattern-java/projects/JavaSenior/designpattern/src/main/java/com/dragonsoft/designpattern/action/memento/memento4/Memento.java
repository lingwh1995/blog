package com.dragonsoft.designpattern.action.memento.memento4;

/**
 * 备忘录角色:可以使用原型模式来大量创建备忘录对象
 * @author lingwh
 *
 */
public class Memento implements Cloneable{
	
	private String state;

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}
	
	@Override
	protected Memento clone() throws CloneNotSupportedException {
		return (Memento)super.clone();
	}
}
