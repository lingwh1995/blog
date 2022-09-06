package com.dragonsoft.designpattern.structure.composite.transparent.interfac;

import java.io.UnsupportedEncodingException;

public class Department implements OrganizationComponment {
	
	private String organizationName;
	
	public Department(String organizationName) {
		this.organizationName = organizationName;
	}
	
	@Override
	public void add(OrganizationComponment organizationComponment) throws UnsupportedEncodingException {
		throw new UnsupportedEncodingException();
	}

	@Override
	public void remove(OrganizationComponment organizationComponment) throws UnsupportedEncodingException {
		throw new UnsupportedEncodingException();
	}

	@Override
	public OrganizationComponment getByIndex(int index) throws UnsupportedEncodingException {
		throw new UnsupportedEncodingException();
	}

	@Override
	public void show() {
		System.out.println("-系名称:"+organizationName);
	}
}
