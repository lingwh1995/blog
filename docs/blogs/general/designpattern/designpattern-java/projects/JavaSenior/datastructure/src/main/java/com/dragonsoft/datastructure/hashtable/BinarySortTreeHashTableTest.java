package com.dragonsoft.datastructure.hashtable;

import org.junit.Test;

public class BinarySortTreeHashTableTest {
	
	@Test
	public void fun() {
		BinarySortTreeHashTable hashTable = new BinarySortTreeHashTable();
		//给hashTable添加元素
		hashTable.add(0);
		hashTable.add(1);
		hashTable.add(2);
		hashTable.add(3);
		hashTable.add(4);
		hashTable.add(10);
		hashTable.add(11);
		hashTable.add(12);
		hashTable.add(13);
		hashTable.add(14);
		
		//打印哈希表
		hashTable.show();
		System.out.println("----------------------");
		hashTable.remove(1);
		hashTable.show();
	}
}
