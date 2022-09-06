package com.dragonsoft.designpattern.action.memento.memento1;

import org.junit.Test;

/**
 * 1.备忘录模式
 * 2.保存一个角色的一次状态
 * @author lingwh
 *
 */
public class Client {

	@Test
	public void fun() {
		//创建守护者对象
		CareTaker careTaker = new CareTaker();
		//创建原发器对象
		Originator originator = new Originator();
		originator.setState("状态:10:00,游戏人物在A点...");
		Memento memento = originator.saveCurrentStateToMemento();
		//保存状态
		careTaker.addMemento(memento);
		
		//人物位置 恢复到状态1的时候
			//1.首相获取到相应的备忘录
		Memento recoverMemento = careTaker.getMemento();
			//2.恢复备忘录
		originator.recoverStateFromMemento(recoverMemento);
			//3.从原发器中获取恢复后的状态
		System.out.println(originator.getState());
	}
}
