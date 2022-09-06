package com.dragonsoft.designpattern.action.oberserver;

import org.junit.Test;

public class Client {

	@Test
	public void fun() {
		Reader reader1 = new Reader();
		reader1.setName("张三");
		Reader reader2 = new Reader();
		reader2.setName("李四");
		Reader reader3 = new Reader();
		reader3.setName("王五");
		NewsPapaer newsPapaer = new NewsPapaer();
		newsPapaer.addOberserver(reader1);
		newsPapaer.addOberserver(reader2);
		newsPapaer.addOberserver(reader3);
		newsPapaer.setContent("报纸最新一期的内容");
	}
}
