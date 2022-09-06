package com.dragonsoft.designpattern.structure.composite.transparent.abs2;

import java.util.List;

public abstract class OrganizationComponment {
	
    protected String organizationName;
    
    //父组件
    protected OrganizationComponment parentConponment;
    
	public void setParentConponment(OrganizationComponment parentConponment) {
		this.parentConponment = parentConponment;
	}
	
	public void add(OrganizationComponment organizationComponment) {
		throw new UnsupportedOperationException();
	}
	
	public void remove(OrganizationComponment organizationComponment) {
		throw new UnsupportedOperationException();
	}
	
	public OrganizationComponment getByIndex(int index) {
		throw new UnsupportedOperationException();
	}
	
	/**
	 * 返回某个组件的子组件对象
	 * @return
	 */
    public List<OrganizationComponment> getChildrenComponment() {
        throw new UnsupportedOperationException();
    }
	public abstract void show();
}
