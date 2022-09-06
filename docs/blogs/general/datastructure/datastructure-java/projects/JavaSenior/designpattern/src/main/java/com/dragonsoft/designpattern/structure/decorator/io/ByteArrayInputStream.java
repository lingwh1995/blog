package com.dragonsoft.designpattern.structure.decorator.io;

public class ByteArrayInputStream extends InputStream{

	@Override
	public int read() {
		System.out.println("ByteArrayInputStream read...");
		return 0;
	}

}
