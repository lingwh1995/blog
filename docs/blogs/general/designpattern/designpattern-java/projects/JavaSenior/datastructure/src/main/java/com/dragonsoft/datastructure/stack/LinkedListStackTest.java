package com.dragonsoft.datastructure.stack;

import org.junit.Test;

public class LinkedListStackTest {
	
	@Test
	public void fun() {
		LinkedListStack stack = new LinkedListStack();
		stack.push(1);
		stack.push(2);
		stack.push(3);
		stack.show();
		System.out.println("stack.size:" + stack.size());
		System.out.println("stack.peek:" + stack.peek());
		System.out.println("stack.pop:" + stack.pop());
		System.out.println("stack.peek:" + stack.peek());
		System.out.println("stack.pop:" + stack.pop());
		System.out.println("stack.peek:" + stack.peek());
		System.out.println("stack.size:" + stack.size());
		stack.show();
	}

}
