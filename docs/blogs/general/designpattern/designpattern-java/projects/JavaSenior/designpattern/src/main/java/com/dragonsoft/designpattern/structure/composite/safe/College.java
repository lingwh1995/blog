package com.dragonsoft.designpattern.structure.composite.safe;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class College extends OrganizationComponment {
	
	public College(String organizationName) {
		this.organizationName = organizationName;
	}
	
	//创建用于存放系的容器
	List<OrganizationComponment> departments = new ArrayList<>();
	
	public void add(OrganizationComponment department) {
		departments.add(department);
	}
	
	public void remove(OrganizationComponment department) {
		departments.remove(department);
	}
	
	public OrganizationComponment getByIndex(int index) {
		OrganizationComponment department = null;
		if(index >=0 && index <departments.size()) {
			department = departments.get(index);
		}
		return department;
	}

	public void show() {
		System.out.println("+学院名称:"+organizationName);
		Iterator<OrganizationComponment> iterator = departments.iterator();
		while(iterator.hasNext()) {
			OrganizationComponment department = iterator.next();
			department.show();
		}
	}
}
