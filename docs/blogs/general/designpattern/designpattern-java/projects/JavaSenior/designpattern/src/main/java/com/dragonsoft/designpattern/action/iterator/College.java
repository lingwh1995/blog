package com.dragonsoft.designpattern.action.iterator;

import java.util.ArrayList;

public class College implements Organization{
	private ArrayList<String> colleges;
	
	public College() {
		colleges = new ArrayList<String>();
		colleges.add("01.信息学院");
		colleges.add("02.金融学院");
		colleges.add("03.外语学院");
		colleges.add("04.经济学院");
	}


	@Override
	public Iterator iterator() {
		return new CollegeIterator(colleges);
	}

}
