package com.dragonsoft.designpattern.action.command.command_2;

import org.junit.Test;
/**
 * 1.命令模式扩展新的命令
 * 2.宏命令模式
 * 3.请求排队
 * @author lingwh
 *
 */
public class Client {

	/**
	 * 不使用宏命令,使用遥控器依次完成命令的调用
	 */
	@Test
	public void fun1() {
		//创建命令的真正执行者
		LightCommandReceiver lightCommandReceiver = new LightCommandReceiver();
		//创建 开 命令
		ICommand lightOnCommand = new LightOnCommand(lightCommandReceiver);
		//创建 关 命令
		ICommand lightOffCommand = new LightOffCommand(lightCommandReceiver);
		//创建遥控器
		RemoteController remoteController = new RemoteController();
		//设置 灯 相关的命令
		remoteController.setCommand(0, lightOnCommand, lightOffCommand);
		//开灯
		remoteController.onCommandButtonWasPushed(0);
		//撤销开灯操作
		remoteController.undoCommandWasPushed();
		//关灯 
		remoteController.offCommandButtonWasPushed(0);
		//撤销关灯操作
		remoteController.undoCommandWasPushed();
		
		System.out.println("--------------------------------");
		TVCommandReceiver tvCommandReceiver = new TVCommandReceiver();
		ICommand tvOnCommand = new TVOnCommand(tvCommandReceiver);
		ICommand tvOffCommand = new TVOffCommand(tvCommandReceiver);
		//设置 TV 相关的命令
		remoteController.setCommand(1, tvOnCommand, tvOffCommand);
		//开TV
		remoteController.onCommandButtonWasPushed(1);
		//撤销开TV操作
		remoteController.undoCommandWasPushed();
		//关TV
		remoteController.offCommandButtonWasPushed(1);
		//撤销关TV操作
		remoteController.undoCommandWasPushed();
	}
	
	/**
	 * 不使用遥控器直接执行执行宏命令
	 */
	@Test
	public void fun2() {
		//创建命令的真正执行者
		LightCommandReceiver lightCommandReceiver = new LightCommandReceiver();
		TVCommandReceiver tvCommandReceiver = new TVCommandReceiver();
		//创建 开 命令
		ICommand lightOnCommand = new LightOnCommand(lightCommandReceiver);
		ICommand tvOnCommand = new TVOnCommand(tvCommandReceiver);
		//创建 关 命令
		ICommand lightOffCommand = new LightOffCommand(lightCommandReceiver);
		ICommand tvOffCommand = new TVOffCommand(tvCommandReceiver);
		
		ICommand[] onCommands = {lightOnCommand,tvOnCommand};
		ICommand[] offCommands = {lightOffCommand,tvOffCommand};
		//创建宏命令对象
		MacroCommand onMacroCommand = new MacroCommand(onCommands);
		MacroCommand offMacroCommand = new MacroCommand(offCommands);
		onMacroCommand.execute();
		onMacroCommand.undo();
		System.out.println("-------------------");
		offMacroCommand.execute();
		offMacroCommand.undo();
	}
	
	/**
	 * 使用遥控器直接执行执行宏命令
	 */
	@Test
	public void fun3() {
		//创建命令的真正执行者
		LightCommandReceiver lightCommandReceiver = new LightCommandReceiver();
		TVCommandReceiver tvCommandReceiver = new TVCommandReceiver();
		//创建 开 命令
		ICommand lightOnCommand = new LightOnCommand(lightCommandReceiver);
		ICommand tvOnCommand = new TVOnCommand(tvCommandReceiver);
		//创建 关 命令
		ICommand lightOffCommand = new LightOffCommand(lightCommandReceiver);
		ICommand tvOffCommand = new TVOffCommand(tvCommandReceiver);
		
		ICommand[] onCommands = {lightOnCommand,tvOnCommand};
		ICommand[] offCommands = {lightOffCommand,tvOffCommand};
		//创建宏命令对象
		MacroCommand onMacroCommand = new MacroCommand(onCommands);
		MacroCommand offMacroCommand = new MacroCommand(offCommands);

		//创建遥控器
		RemoteController remoteController = new RemoteController();
//		//设置宏命令
		remoteController.setCommand(0, onMacroCommand, offMacroCommand);
		//执行 开 相关的宏命令
		remoteController.onCommandButtonWasPushed(0);
		//撤销宏命令
		remoteController.undoCommandWasPushed();
		System.out.println("---------------------");
//		//执行 关 相关的宏命令
		remoteController.offCommandButtonWasPushed(0);
		//撤销宏命令
		remoteController.undoCommandWasPushed();
	}
	
	/**
	 * 请求排队:重点在于给请求/命令排队,重点不在于实现undo()操作,无法实现undo()操作
	 */
	@Test
	public void fun4() {
		//创建命令的真正执行者
		LightCommandReceiver lightCommandReceiver = new LightCommandReceiver();
		TVCommandReceiver tvCommandReceiver = new TVCommandReceiver();
		//创建 开 命令
		ICommand lightOnCommand = new LightOnCommand(lightCommandReceiver);
		ICommand tvOnCommand = new TVOnCommand(tvCommandReceiver);
		//创建 关 命令
		ICommand lightOffCommand = new LightOffCommand(lightCommandReceiver);
		ICommand tvOffCommand = new TVOffCommand(tvCommandReceiver);
		
		RequestQueueUp requestQueueUp = new RequestQueueUp();
		requestQueueUp.addCommand(lightOnCommand);
		requestQueueUp.addCommand(tvOnCommand);
		requestQueueUp.executes();
		requestQueueUp.addCommand(lightOffCommand);
		requestQueueUp.addCommand(tvOffCommand);
		requestQueueUp.executes();
		
	}
}

