package com.dragonsoft.designpattern.action.command.command_1;

/**
 * ConcrectCommand1
 * @author lingwh
 *
 */
public class OffCommand implements ICommand{
	
	private LightCommandReceiver lightCommandReceiver;
	
	public OffCommand(LightCommandReceiver lightCommandReceiver) {
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
