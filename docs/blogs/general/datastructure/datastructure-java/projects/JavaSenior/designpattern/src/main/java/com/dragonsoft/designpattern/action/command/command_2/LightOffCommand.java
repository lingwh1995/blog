package com.dragonsoft.designpattern.action.command.command_2;

public class LightOffCommand implements ICommand{
	
	private LightCommandReceiver lightCommandReceiver;
	
	public LightOffCommand(LightCommandReceiver lightCommandReceiver) {
		this.lightCommandReceiver = lightCommandReceiver;
	}

	@Override
	public void execute() {
		lightCommandReceiver.off();
	}

	@Override
	public void undo() {
		lightCommandReceiver.on();
	}

}
