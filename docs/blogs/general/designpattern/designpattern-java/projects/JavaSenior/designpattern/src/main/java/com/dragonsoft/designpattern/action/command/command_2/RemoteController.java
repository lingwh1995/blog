package com.dragonsoft.designpattern.action.command.command_2;

public class RemoteController {
	//存放 开 命令的命令组
	ICommand[] onCommands;
	//存放 关 命令的命令组
	ICommand[] offCommands;
	//存放 撤销 命令
	ICommand undoCommand;
	
	public RemoteController() {
		//初始化命令组(知识盲区,数组的类型可以是接口类型,之前以为不能创建接口类型的数组)
		onCommands = new ICommand[5];
		offCommands = new ICommand[5];
		for(int i=0; i<5; i++) {
			onCommands[i] = undoCommand;
			offCommands[i] = undoCommand;
		}
	}
	
	//给遥控器设置命令
	public void setCommand(int commandNo,ICommand onCommand,ICommand offCommand) {
		onCommands[commandNo] = onCommand;
		offCommands[commandNo] = offCommand;
	}
	
	public void onCommandButtonWasPushed(int commandNo) {
		onCommands[commandNo].execute();
		undoCommand = onCommands[commandNo];
	}
	
	public void offCommandButtonWasPushed(int commandNo) {
		offCommands[commandNo].execute();
		undoCommand = offCommands[commandNo];
	}
	
	public void undoCommandWasPushed() {
		//如果需要回显上一步操作,则可以执行这个方法
		//undoCommand.execute();
		undoCommand.undo();
	}
}
