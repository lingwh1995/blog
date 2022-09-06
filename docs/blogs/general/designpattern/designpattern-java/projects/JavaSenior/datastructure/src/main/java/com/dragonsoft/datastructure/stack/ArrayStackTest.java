package com.dragonsoft.datastructure.stack;

import org.junit.Test;

public class ArrayStackTest {
	
	@Test
	public void fun() {
		ArrayStack stack = new ArrayStack(3);
		stack.push(1);
		stack.push(2);
		stack.push(3);
		stack.show();
		System.out.println("stack.size():"+stack.size());
		System.out.println("stack.peek():"+stack.peek());
		System.out.println(stack.pop());
		System.out.println(stack.pop());
		System.out.println(stack.pop());
		stack.show();
		System.out.println("stack.peek():"+stack.peek());
	}
}
