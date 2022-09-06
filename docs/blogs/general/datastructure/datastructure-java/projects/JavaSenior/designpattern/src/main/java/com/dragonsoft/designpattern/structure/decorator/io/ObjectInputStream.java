package com.dragonsoft.designpattern.structure.decorator.io;

public class ObjectInputStream extends InputStream{

	@Override
	public int read() {
		System.out.println("ObjectInputStream read...");
		return 0;
	}

}
