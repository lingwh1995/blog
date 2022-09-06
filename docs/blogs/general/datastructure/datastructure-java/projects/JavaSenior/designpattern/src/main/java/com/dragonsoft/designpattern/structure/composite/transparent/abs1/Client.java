package com.dragonsoft.designpattern.structure.composite.transparent.abs1;

import org.junit.Test;

/**
 * 1.使用抽象类实现抽象构件
 * 2.标准组合模式(透明模式)
 * 	   只能实现；删除西安财经学院下信息学院本身及信息学院下面的院系
 *   不能实现：只将西安财经学院下信息学院删除，但是不能实现仅删除信息学院下面的院系,并且将信息学院下面的院系直接交由先财经学院管理
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
	
	/**
	 * 测试组合模式composite容器中加入composite容器
	 */
	@Test
	public void fun2() {
		//西安财经大学相关：创建大学
		University universityUFE = new University("西安财经学院");
		//西安财经大学相关：创建学院
		College langCollege = new College("外语学院");
		//西安财经大学相关：创建系
		Department enDepartment = new Department("英语系");
		Department jpDepartment = new Department("日语系");
		//西安财经大学相关：给大学添加学院
		universityUFE.add(langCollege);
		//西安财经大学相关：给学院添加系
		langCollege.add(enDepartment);
		langCollege.add(jpDepartment);
		
		//西安电子科技大学相关：创建大学
		University universityXDU = new University("西安电子科技大学");
		//西安电子科技大学相关：创建学院
		College itCollege = new College("信息学院");
		//西安电子科技大学相关：创建系
		Department ecDepartment = new Department("电子商务系");
		Department seDepartment = new Department("软件工程系");
		//西安电子科技大学相关：给大学添加学院
		universityXDU.add(itCollege);
		//西安电子科技大学相关：给学院添加系
		itCollege.add(ecDepartment);
		itCollege.add(seDepartment);
		
		//西安财经大学相关：打印院系(为了方便查看效果,可以暂时注掉下一行代码)
//		universityUFE.show();
		System.out.println("------------------------");
		//西安电子科技大学相关：打印院系(为了方便查看效果,可以暂时注掉下一行代码)
//		universityXDU.show();
		System.out.println("------------------------");
		
		universityUFE.add(universityXDU);
		universityUFE.show();
	}

}
