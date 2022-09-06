package com.dragonsoft.designpattern.action.oberserver;

public class NewsPapaer extends Subject{
	private String content;
	
	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
		notifyOberserver();
	}
}
