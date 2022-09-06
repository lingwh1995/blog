package com.dragonsoft.designpattern.action.iterator;

import org.junit.Test;

public class Client {

	/**
	 * 测试使用迭代器遍历数组结构,共有8个元素
	 */
	@Test
	public void fun1() {
		Unviersity unviersity = new Unviersity();
		Iterator iterator = unviersity.iterator();
		while(iterator.hasNext()) {
			System.out.println(iterator.next());
		}
	}
	
	/**
	 * 测试使用迭代器遍历ArrayList结构,共有4个元素
	 */
	@Test
	public void fun2() {
		College college = new College();
		Iterator iterator = college.iterator();
		while(iterator.hasNext()) {
			System.out.println(iterator.next());
		}
	}
}
