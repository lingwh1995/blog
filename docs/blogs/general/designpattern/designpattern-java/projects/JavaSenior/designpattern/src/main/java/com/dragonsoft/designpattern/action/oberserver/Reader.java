package com.dragonsoft.designpattern.action.oberserver;

public class Reader implements Oberserver{

	private String name;
	
	public void setName(String name) {
		this.name = name;
	}

	@Override
	public void update(Subject subject) {
		System.out.println(name + "收到了报纸内容:" + ((NewsPapaer)subject).getContent());
	}

}
