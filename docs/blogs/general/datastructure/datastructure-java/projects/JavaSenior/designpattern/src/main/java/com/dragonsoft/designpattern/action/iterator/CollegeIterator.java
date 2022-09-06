package com.dragonsoft.designpattern.action.iterator;

import java.util.ArrayList;

public class CollegeIterator implements Iterator{

	private ArrayList<String> colleges;
	private int index = 0;
	
	public CollegeIterator(ArrayList<String> colleges) {
		this.colleges = colleges;
	}

	@Override
	public boolean hasNext() {
		if(index > colleges.size() -1) {
			return false;
		}
		return true;
	}

	@Override
	public String next() {
		String college = colleges.get(index);
		index++;
		return college;
	}

	@Override
	public void remove() {
		// 暂不实现
	}

}
