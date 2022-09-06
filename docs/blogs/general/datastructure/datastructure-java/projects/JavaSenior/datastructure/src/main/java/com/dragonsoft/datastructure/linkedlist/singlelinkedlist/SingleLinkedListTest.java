package com.dragonsoft.datastructure.linkedlist.singlelinkedlist;


import org.junit.Test;

/**
 * 测试单链表
 * @author lingwh
 *
 */
public class SingleLinkedListTest {

	@Test
	public void fun() {
		SingleLinkedNode node1 = new SingleLinkedNode(1,"节点1数据...");
		SingleLinkedNode node2 = new SingleLinkedNode(2,"节点2数据...");
		SingleLinkedNode node3 = new SingleLinkedNode(3,"节点3数据...");
		SingleLinkedList singleLinkedList = new SingleLinkedList();
		singleLinkedList.addElement(node1);
		singleLinkedList.show();
		singleLinkedList.addElement(node2);
		singleLinkedList.show();
		singleLinkedList.addElement(node3);
		singleLinkedList.show();
		SingleLinkedNode node4 = new SingleLinkedNode(4,"节点4数据...");
		SingleLinkedNode node6 = new SingleLinkedNode(6,"节点6数据...");
		singleLinkedList.addElementByOrder(node4);
		singleLinkedList.show();
		singleLinkedList.addElementByOrder(node6);
		singleLinkedList.show();
		//测试在节点4和节点6之间插入节点5
		SingleLinkedNode node5 = new SingleLinkedNode(5,"节点5数据...");
		singleLinkedList.addElementByOrder(node5);
		singleLinkedList.show();
		
		//测试更新节点信息
		SingleLinkedNode newNode4 = new SingleLinkedNode(4,"更新后的节点4数据...");
		singleLinkedList.updateElement(newNode4);
		singleLinkedList.show();
		SingleLinkedNode node7 = new SingleLinkedNode(7,"节点7数据...");
		singleLinkedList.updateElement(node7);
		singleLinkedList.show();
		
		//测试删除节点
		singleLinkedList.deleteByElementId(1);
		singleLinkedList.show();
		singleLinkedList.deleteByElementId(6);
		singleLinkedList.show();
		
		//测试获取链表节点个数
		System.out.println("链表中有效节点的个数："+singleLinkedList.getSize());
	
		//获取链表中倒数第k个元素
		System.out.println("链表中倒数第1个元素:"+singleLinkedList.getReverseOrderElement(1));
		System.out.println("链表中倒数第4个元素:"+singleLinkedList.getReverseOrderElement(4));
	
		//测试反转链表
		System.out.println("---------反转前------");
		singleLinkedList.show();
		//singleLinkedList.reverse();
		System.out.println("---------反转后------");
		singleLinkedList.show();
		System.out.println("---------递归打印链表------");
		singleLinkedList.showRecursion();
		
		//打印链表
		System.out.println("---------打印链表------");
		singleLinkedList.show();
		//使用栈逆序打印链表
		System.out.println("---------使用栈逆序打印链表------");
		singleLinkedList.reversehow();
	}

	
}
