package com.dragonsoft.datastructure.hashtable;

import org.junit.Test;

public class LinkedListHashTableTest {

	@Test
	public void fun() {
		LinkedListHashTable hashTable = new LinkedListHashTable();
		SingleLinkedNode node0 = new SingleLinkedNode(0, "0");
		SingleLinkedNode node1 = new SingleLinkedNode(1, "1");
		SingleLinkedNode node2 = new SingleLinkedNode(2, "2");
		SingleLinkedNode node10 = new SingleLinkedNode(10, "10");
		SingleLinkedNode node11 = new SingleLinkedNode(11, "11");
		SingleLinkedNode node12 = new SingleLinkedNode(12, "12");
		//给hashTable添加元素
		hashTable.add(node0);
		hashTable.add(node1);
		hashTable.add(node2);
		hashTable.add(node10);
		hashTable.add(node11);
		hashTable.add(node12);
		//打印哈希表
		hashTable.show();
		//删除elementId为0的元素
		hashTable.remove(node0);
		System.out.println("==================================");
		//打印哈希表
		hashTable.show();
	}
}
