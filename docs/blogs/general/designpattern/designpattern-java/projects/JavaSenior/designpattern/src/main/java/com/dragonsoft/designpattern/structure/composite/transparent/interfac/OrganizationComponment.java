package com.dragonsoft.designpattern.structure.composite.transparent.interfac;

import java.io.UnsupportedEncodingException;

public interface OrganizationComponment {
    
	void add(OrganizationComponment organizationComponment) throws UnsupportedEncodingException;
	
	void remove(OrganizationComponment organizationComponment) throws UnsupportedEncodingException;
	
	OrganizationComponment getByIndex(int index) throws UnsupportedEncodingException;
	
	void show();
}
