package com.dragonsoft.designpattern.structure.composite.transparent.abs2;

import org.junit.Test;

/**
 * 1.使用抽象类实现抽象构件
 * 2.父组件引用组合模式(透明模式)
 *   可以实现；删除西安财经学院下信息学院本身及信息学院下面的院系
 *   可以实现：只将西安财经学院下信息学院删除，但是不能实现仅删除信息学院下面的院系,并且将信息学院下面的院系直接交由先财经学院管理
 * @author lingwh
 *
 */
public class Client {
	
	/**
	 * 测试组合模式composite容器中加入leaf节点
	 */
	@Test
	public void fun1() {
		//创建大学
		University university = new University("西安财经学院");
		//创建学院
		College itCollege = new College("信息学院");
		College langCollege = new College("外语学院");
		//创建系
		Department ecDepartment = new Department("电子商务系");
		Department seDepartment = new Department("软件工程系");
		Department enDepartment = new Department("英语系");
		Department jpDepartment = new Department("日语系");
		
		//给大学添加学院
		university.add(itCollege);
		university.add(langCollege);
		
		//给学院添加系
		itCollege.add(ecDepartment);
		itCollege.add(seDepartment);
		langCollege.add(enDepartment);
		langCollege.add(jpDepartment);
		
		university.show();
		System.out.println(university.getByIndex(1));
		System.out.println("------------------------");
		//删除信息学院包括其下属机构
		university.remove(itCollege);
		university.show();
	}

}
