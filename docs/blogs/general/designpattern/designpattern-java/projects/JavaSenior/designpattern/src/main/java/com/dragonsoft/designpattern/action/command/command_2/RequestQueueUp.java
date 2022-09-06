package com.dragonsoft.designpattern.action.command.command_2;

import java.util.ArrayList;
import java.util.List;

/**
 * 请求排队
 * @author lingwh
 *
 */
public class RequestQueueUp {
	 private List<ICommand> commands = new ArrayList<>();
	 
	 public void addCommand(ICommand command){
		 commands.add(command);
	 }

	 public void executes(){
		 for(ICommand command:commands) {
			 command.execute();
		 }
		 //所有请求执行完成后清空一下请求队列
		 commands.clear();
	 }
}
