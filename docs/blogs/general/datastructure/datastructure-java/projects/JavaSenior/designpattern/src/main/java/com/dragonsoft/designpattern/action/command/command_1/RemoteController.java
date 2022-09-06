package com.dragonsoft.designpattern.action.command.command_1;

/**
 * Invoker
 * @author lingwh
 *
 */
public class RemoteController {
	//存放 开 命令的命令组
	ICommand[] onCommands;
	//存放 关 命令的命令组
	ICommand[] offCommands;
	//存放 撤销 命令
	ICommand undoCommand;
	
	public RemoteController() {
		//初始化命令组
		onCommands = new OnCommand[5];
		offCommands = new OffCommand[5];
		for(int i=0; i<5; i++) {
			onCommands[i] = undoCommand;
			offCommands[i] = undoCommand;
		}
	}
	
	//给遥控器设置命令
	public void setCommand(int commandNo,OnCommand onCommand,OffCommand offCommand) {
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
