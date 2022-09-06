package com.dragonsoft.designpattern.structure.composite.transparent.abs1;

public abstract class OrganizationComponment {
	
    protected String organizationName;
    
	public void add(OrganizationComponment organizationComponment) {
		throw new UnsupportedOperationException();
	}
	
	public void remove(OrganizationComponment organizationComponment) {
		throw new UnsupportedOperationException();
	}
	
	public OrganizationComponment getByIndex(int index) {
		throw new UnsupportedOperationException();
	}
	
	public abstract void show();
}
