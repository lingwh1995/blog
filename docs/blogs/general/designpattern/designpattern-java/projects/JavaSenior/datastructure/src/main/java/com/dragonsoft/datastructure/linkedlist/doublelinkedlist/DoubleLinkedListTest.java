package com.dragonsoft.datastructure.linkedlist.doublelinkedlist;

import org.junit.Test;

public class DoubleLinkedListTest {
	
	@Test
	public void fun() {
		DoubleLinkedList doubleLinkedList = new DoubleLinkedList();
		//测试添加节点
		DoubleLinkedNode node1 = new DoubleLinkedNode(1,"1");
		DoubleLinkedNode node2 = new DoubleLinkedNode(2,"2");
		DoubleLinkedNode node3 = new DoubleLinkedNode(3,"3");
		DoubleLinkedNode node4 = new DoubleLinkedNode(4,"4");
		doubleLinkedList.addElement(node1);
		doubleLinkedList.show();
		doubleLinkedList.addElement(node2);
		doubleLinkedList.show();
		doubleLinkedList.addElement(node3);
		doubleLinkedList.show();
		doubleLinkedList.addElement(node4);
		doubleLinkedList.show();
		DoubleLinkedNode node5 = new DoubleLinkedNode(5,"5");
		DoubleLinkedNode node6 = new DoubleLinkedNode(6,"6");
		DoubleLinkedNode node7 = new DoubleLinkedNode(7,"7");
		doubleLinkedList.addElement(node5);
		doubleLinkedList.addElement(node6);
		doubleLinkedList.addElement(node7);
		doubleLinkedList.show();
		
		//测试修改节点
		DoubleLinkedNode newNode2 = new DoubleLinkedNode(2,"修改后的2...");
		doubleLinkedList.updateElement(newNode2);
		doubleLinkedList.show();
	
		//测试删除节点
		doubleLinkedList.deleteByElementId(7);
		doubleLinkedList.show();
	}

}
