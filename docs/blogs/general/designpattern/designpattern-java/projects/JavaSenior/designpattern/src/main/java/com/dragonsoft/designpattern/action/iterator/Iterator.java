package com.dragonsoft.designpattern.action.iterator;

public interface Iterator {
	
	boolean hasNext();
	String next();
	void remove();
}
