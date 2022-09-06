package com.dragonsoft.designpattern.action.memento.memento4;

import org.junit.Test;

/**
 * 1.备忘录结合原型模式
 * 2.保存多个角色的多次状态
 * @author lingwh
 *
 */
public class Client {

	@Test
	public void fun() throws CloneNotSupportedException {
		//创建守护者对象
		CareTaker careTaker = new CareTaker();
		//创建原发器对象
		Originator originator = new Originator();
		originator.setState("角色1状态1:10:00,游戏人物 zs 在A点...");
		Memento memento1 = originator.saveCurrentStateToMemento();
		//保存角色1的状态1
		careTaker.addMemento("zs",memento1);
		
		originator.setState("角色1状态2:11:00,游戏人物 zs 在B点...");
		Memento memento2 = originator.saveCurrentStateToMemento();
		//保存角色1的状态2
		careTaker.addMemento("zs",memento2);
		
		originator.setState("角色2状态1:10:00,游戏人物 ls 在AA点...");
		Memento memento3 = originator.saveCurrentStateToMemento();
		//保存角色2的状态1
		careTaker.addMemento("ls",memento3);
		
		originator.setState("角色2状态2:10:00,游戏人物 ls 在BB点...");
		Memento memento4 = originator.saveCurrentStateToMemento();
		//保存角色2的状态2
		careTaker.addMemento("ls",memento4);
		
		//人物位置 恢复到状态1的时候
			//1.首相获取到相应的备忘录
		Memento memento = careTaker.getMemento("ls",0);
			//2.恢复备忘录
		originator.recoverStateFromMemento(memento);
			//3.从原发器中获取恢复后的状态
		System.out.println(originator.getState());
	}
}
