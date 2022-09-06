package com.dragonsoft.datastructure.queue;

import org.junit.Test;

public class ArrayQueueTest {

	@Test
	public void fun() {
		ArrayQueue arrayQueue = new ArrayQueue(3);
		// 给队列中加入三个元素
		arrayQueue.addElement(10);
		arrayQueue.addElement(20);
		arrayQueue.addElement(30);
		arrayQueue.show();
		// 第一次取出队列中的元素
		System.out.println(arrayQueue.getElement());
		arrayQueue.show();
		// 第二次取出队列中的元素
		System.out.println(arrayQueue.getElement());
		arrayQueue.show();
		System.out.println("查看队列头元素：" + arrayQueue.peek());
		arrayQueue.show();
		// 因为不是环形队列，所以即使队列头部的元素已经被取出，仍然不能再添加第4个元素到队列中
		arrayQueue.addElement(40);
	}
}
