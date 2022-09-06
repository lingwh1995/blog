package com.dragonsoft.designpattern.structure.decorator.io;

import org.junit.Test;

public class Client {
	
	@Test
	public void fun() {
		FileInputStream fileInputStream = new FileInputStream();
		BufferedInputStream bufferedInputStream = new BufferedInputStream(fileInputStream);
		bufferedInputStream.read();
	}

}
