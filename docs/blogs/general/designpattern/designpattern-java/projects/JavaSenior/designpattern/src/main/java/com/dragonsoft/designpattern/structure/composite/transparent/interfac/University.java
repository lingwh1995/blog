package com.dragonsoft.designpattern.structure.composite.transparent.interfac;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class University implements OrganizationComponment{
	
	private String organizationName;
	
	public University(String organizationName) {
		this.organizationName = organizationName;
	}

	//创建存放学院的容器
	List<OrganizationComponment> colleges = new ArrayList<>();
	
	@Override
	public void add(OrganizationComponment college) {
		colleges.add(college);
	}
	
	@Override
	public void remove(OrganizationComponment college) {
		colleges.remove(college);
	}
	
	@Override
	public OrganizationComponment getByIndex(int index) {
		OrganizationComponment college = null;
		if(index >=0 && index <colleges.size()) {
			college = colleges.get(index);
		}
		return college;
	}

	@Override
	public void show() {
		System.out.println("+大学名称:"+organizationName);
		Iterator<OrganizationComponment> iterator = colleges.iterator();
		while(iterator.hasNext()) {
			OrganizationComponment college = iterator.next();
			college.show();
		}
	}
}
