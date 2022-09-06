package com.dragonsoft.designpattern.action.command.command_1;


import org.junit.Test;

public class Client {

	@Test
	public void fun() {
		//创建命令的真正执行者
		LightCommandReceiver lightCommandReceiver = new LightCommandReceiver();
		//创建 开 命令
		OnCommand onCommand = new OnCommand(lightCommandReceiver);
		//创建 关 命令
		OffCommand offCommand = new OffCommand(lightCommandReceiver);
		//创建遥控器(创建Invoker)
		RemoteController remoteController = new RemoteController();
		//设置命令对象
		remoteController.setCommand(0, onCommand, offCommand);
		//开灯
		remoteController.onCommandButtonWasPushed(0);
		//撤销开灯操作
		remoteController.undoCommandWasPushed();
		//关灯 
		remoteController.offCommandButtonWasPushed(0);
		//撤销关灯操作
		remoteController.undoCommandWasPushed();
	}
	
}
