package com.dragonsoft.designpattern.structure.decorator.io;

public class PipedInputStream extends InputStream {

	@Override
	public int read() {
		System.out.println("PipedInputStream read...");
		return 0;
	}

}
