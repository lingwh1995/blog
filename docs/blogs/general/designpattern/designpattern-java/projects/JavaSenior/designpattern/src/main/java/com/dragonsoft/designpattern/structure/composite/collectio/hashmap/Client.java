package com.dragonsoft.designpattern.structure.composite.collectio.hashmap;

import org.junit.Test;

import com.dragonsoft.designpattern.structure.composite.collectio.hashmap.HashMap.Node;

public class Client {
	
	@Test
	public void fun() {
		//创建一个Composite容器
		Map<Integer, String> container = new HashMap<Integer,String>();
		//创建一个leaf,并加入到Composite中
		container.put(1, "a");
		//创建一个leaf,并加入到Composite中
		container.put(2, "b");
		//创建一个leaf,并加入到Composite中
		container.put(3, "c");
		container.show();
		System.out.println("--------------------");
		
		//创建一个新的Composite容器
		HashMap<Integer, String> anotherContainer = new HashMap<Integer,String>();
		//创建一个leaf,并加入到新的Composite中
		anotherContainer.put(4, "d");
		//创建一个leaf,并加入到新的Composite中
		anotherContainer.put(5, "e");
		
		//把新的Composite容器添加到原来的Composite容器中
		container.putAll(anotherContainer);
		container.show();
	}
}
