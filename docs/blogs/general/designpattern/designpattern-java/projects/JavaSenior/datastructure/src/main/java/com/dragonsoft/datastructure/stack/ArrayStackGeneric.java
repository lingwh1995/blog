package com.dragonsoft.datastructure.stack;


public class ArrayStackGeneric<T> {
	private int maxCapacity;
	private T[] elements;
	//栈指针，默认为第一个元素的前一个元素
	private int top = -1;
	
	@SuppressWarnings("unchecked")
	public ArrayStackGeneric(int maxCapacity) {
		this.maxCapacity = maxCapacity;
		this.elements = (T[])new Object[maxCapacity];
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
	public void push(T element) {
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
	public T pop() {
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
	public T peek() {
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
		System.out.println("------");
		for(int i=top; i>=0; i--) {
			System.out.print(elements[i] + "\n");
		}
		System.out.println("---------------");
	}
}
