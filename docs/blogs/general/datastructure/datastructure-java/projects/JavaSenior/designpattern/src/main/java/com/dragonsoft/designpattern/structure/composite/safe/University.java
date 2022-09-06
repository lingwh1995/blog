package com.dragonsoft.designpattern.structure.composite.safe;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class University extends OrganizationComponment{
	
	public University(String organizationName) {
		this.organizationName = organizationName;
	}

	//创建存放学院的容器
	List<OrganizationComponment> colleges = new ArrayList<>();
	
	public void add(OrganizationComponment college) {
		colleges.add(college);
	}
	
	public void remove(OrganizationComponment college) {
		colleges.remove(college);
	}
	
	public OrganizationComponment getByIndex(int index) {
		OrganizationComponment college = null;
		if(index >=0 && index <colleges.size()) {
			college = colleges.get(index);
		}
		return college;
	}

	public void show() {
		System.out.println("+大学名称:"+organizationName);
		Iterator<OrganizationComponment> iterator = colleges.iterator();
		while(iterator.hasNext()) {
			OrganizationComponment college = iterator.next();
			college.show();
		}
	}
}
