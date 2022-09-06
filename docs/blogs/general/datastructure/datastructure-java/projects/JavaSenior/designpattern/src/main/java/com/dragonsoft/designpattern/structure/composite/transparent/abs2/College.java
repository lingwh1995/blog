package com.dragonsoft.designpattern.structure.composite.transparent.abs2;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class College extends OrganizationComponment {
	
	public College(String organizationName) {
		this.organizationName = organizationName;
	}
	
	//创建用于存放系的容器
	List<OrganizationComponment> departments = new ArrayList<>();
	
	@Override
	public void add(OrganizationComponment department) {
		departments.add(department);
		//添加 父组件引用
		department.parentConponment = this;
	}
	
	@Override
	public void remove(OrganizationComponment department) {
		boolean contains = departments.contains(department);
		if(contains) {
			for(OrganizationComponment organizationComponment:department.getChildrenComponment()) {
				//删除的组件对象是本实例的一个子组件对象
				organizationComponment.setParentConponment(this);
                //把被删除对象的子组件对象添加到当前实例中
				departments.add(organizationComponment);
			}
			
		}
	}
	
	@Override
	public OrganizationComponment getByIndex(int index) {
		OrganizationComponment department = null;
		if(index >=0 && index <departments.size()) {
			department = departments.get(index);
		}
		return department;
	}

	/**
	 * 返回子组件
	 */
	@Override
	public List<OrganizationComponment> getChildrenComponment() {
		return departments;
	}
	
	@Override
	public void show() {
		System.out.println("+学院名称:"+organizationName);
		Iterator<OrganizationComponment> iterator = departments.iterator();
		while(iterator.hasNext()) {
			OrganizationComponment department = iterator.next();
			department.show();
		}
	}
}
