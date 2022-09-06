package com.dragonsoft.designpattern.structure.composite.transparent.abs2;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class University extends OrganizationComponment{
	
	public University(String organizationName) {
		this.organizationName = organizationName;
	}

	//创建存放学院的容器
	List<OrganizationComponment> colleges = new ArrayList<>();
	
	@Override
	public void add(OrganizationComponment college) {
		colleges.add(college);
		//添加 父组件引用
		college.parentConponment = this;
	}
	
	@Override
	public void remove(OrganizationComponment college) {
		boolean contains = colleges.contains(college);
		if(contains) {
			for(OrganizationComponment organizationComponment:college.getChildrenComponment()) {
				//删除的组件对象是本实例的一个子组件对象
				organizationComponment.setParentConponment(this);
                //把被删除对象的子组件对象添加到当前实例中
				colleges.add(organizationComponment);
			}
			colleges.remove(college);
		}
	}
	
	@Override
	public OrganizationComponment getByIndex(int index) {
		OrganizationComponment college = null;
		if(index >=0 && index <colleges.size()) {
			college = colleges.get(index);
		}
		return college;
	}

	/**
	 * 返回子组件
	 */
	@Override
	public List<OrganizationComponment> getChildrenComponment() {
		return colleges;
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
