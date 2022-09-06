package com.dragonsoft.designpattern.action.command.command_2;

public class TVOnCommand implements ICommand{

	private TVCommandReceiver tvCommandReceiver;
	
	public TVOnCommand(TVCommandReceiver tvCommandReceiver) {
		this.tvCommandReceiver = tvCommandReceiver;
	}

	@Override
	public void execute() {
		tvCommandReceiver.on();
	}

	@Override
	public void undo() {
		tvCommandReceiver.off();
	}

}
