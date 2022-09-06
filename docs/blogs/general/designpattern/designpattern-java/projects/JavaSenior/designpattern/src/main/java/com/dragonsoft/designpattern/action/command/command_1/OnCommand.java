package com.dragonsoft.designpattern.action.command.command_1;

/**
 * ConcrectCommand1
 * @author lingwh
 *
 */
public class OnCommand implements ICommand{
	
	private LightCommandReceiver lightCommandReceiver;
	
	public OnCommand(LightCommandReceiver lightCommandReceiver) {
		this.lightCommandReceiver = lightCommandReceiver;
	}

	@Override
	public void execute() {
		lightCommandReceiver.on();
	}

	@Override
	public void undo() {
		lightCommandReceiver.off();
	}

}
