package com.dragonsoft.designpattern.structure.composite.transparent.abs2;

public class Department extends OrganizationComponment {
	
	public Department(String organizationName) {
		this.organizationName = organizationName;
	}
	
	@Override
	public void show() {
		System.out.println("-系名称:"+organizationName);
	}

}
