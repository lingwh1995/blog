package com.dragonsoft.datastructure.linkedlist.singlelinkedlist;

import org.junit.Test;

public class CircleSingleLinkedListTest {
	
	/**
	 * 1.测试添加给环形链表添加元素
	 * 2.测试约瑟夫环出圈方法
	 */
	@Test
	public void fun() {
		CircleSingleLinkedList circleSingleLinkedList = new CircleSingleLinkedList();
		circleSingleLinkedList.addElement(5);
		circleSingleLinkedList.show();
		
		//测试约瑟夫环出圈
		circleSingleLinkedList.josephCircle(CircleSingleLinkedList.size, 2);
	}

}
