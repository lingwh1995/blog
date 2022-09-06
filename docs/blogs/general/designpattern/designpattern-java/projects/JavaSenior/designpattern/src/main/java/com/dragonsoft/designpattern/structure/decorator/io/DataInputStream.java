package com.dragonsoft.designpattern.structure.decorator.io;

public class DataInputStream extends FilterInputStream {

	protected DataInputStream(InputStream in) {
		super(in);
	}
	
	@Override
	public int read() {
		super.read();
		System.out.println("将读取结果转换为指定的数据类型...");
		return 0;
	}
}
