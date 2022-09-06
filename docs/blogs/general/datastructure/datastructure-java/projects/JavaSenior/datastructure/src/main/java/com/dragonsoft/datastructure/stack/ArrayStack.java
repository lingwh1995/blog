package com.dragonsoft.datastructure.stack;

/**
 * 数组模拟栈
 * @author lingwh
 *
 */
public class ArrayStack {
	private int maxCapacity;
	private int[] elements;
	//栈指针，默认为第一个元素的前一个元素
	private int top = -1;
	
	public ArrayStack(int maxCapacity) {
		this.maxCapacity = maxCapacity;
		this.elements = new int[maxCapacity];
	}
	
	/**
	 * 判断栈是否为空
	 * @return
	 */
	public boolean isEmpty() {
		return top == -1;
	}
	
	/**
	 * 判断栈是否已满
	 * @return
	 */
	public boolean isFull() {
		return top == maxCapacity-1;
	}
	
	/**
	 * 压栈
	 * @param element
	 */
	public void push(int element) {
		if(isFull()) {
			System.out.println("栈已满...");
			return; 
		}
		elements[++top] = element;
	}
	
	/**
	 * 弹栈
	 * @return
	 */
	public int pop() {
		if(isEmpty()) {
			System.out.println("栈为空...");
			throw new RuntimeException();
		}
		return elements[top--];
	}
	
	/**
	 * 返回栈顶元素
	 * @return
	 */
	public int peek() {
		if(isEmpty()) {
			System.out.println("栈为空....");
			throw new RuntimeException();
		}
		return elements[top];
	}
	
	/**
	 * 获取栈中元素的个数
	 * @return
	 */
	public int size() {
		return this.top+1;
	}
	
	/**
	 * 打印栈
	 */
	public void show() {
		for(int i=top; i>=0; i--) {
			System.out.print(elements[i] + "\n");
		}
		System.out.println("---------------");
	}
}
