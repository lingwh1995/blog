package com.dragonsoft.designpattern.action.command.command_2;

public class TVOffCommand implements ICommand{

	private TVCommandReceiver tvCommandReceiver;
	
	public TVOffCommand(TVCommandReceiver tvCommandReceiver) {
		this.tvCommandReceiver = tvCommandReceiver;
	}

	@Override
	public void execute() {
		tvCommandReceiver.off();
	}

	@Override
	public void undo() {
		tvCommandReceiver.on();
	}

}
