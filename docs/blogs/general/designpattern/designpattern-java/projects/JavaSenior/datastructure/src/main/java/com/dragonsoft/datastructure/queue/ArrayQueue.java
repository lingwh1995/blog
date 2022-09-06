package com.dragonsoft.datastructure.queue;

/**
 * 非环形队列，缺点：当队列头部元素弹出后，空出的位置不能被再次使用
 * 
 * @author lingwh
 *
 */
public class ArrayQueue {
	// 数组最大容量
	private int maxCapacity;
	// 头指针位置
	private int front;
	// 尾指针位置
	private int rear;
	// 存放队列中的元素
	private int[] elements;

	/**
	 * 初始化队列
	 * 
	 * @param maxCapacity
	 */
	public ArrayQueue(int maxCapacity) {
		this.maxCapacity = maxCapacity;
		// 初始位置指向队列头部元素的前一个元素
		this.front = -1;
		// 初始位置指向尾部，包含队列尾部元素，即包含队列中最后一个数据
		this.rear = -1;
		this.elements = new int[maxCapacity];
	}

	/**
	 * 判断队列是否为空
	 * 
	 * @return
	 */
	public boolean isEmpty() {
		return this.front == this.rear;
	}

	/**
	 * 判断队列是否已满
	 * 
	 * @return
	 */
	public boolean isFull() {
		return this.rear == this.maxCapacity - 1;
	}

	/**
	 * 给队列添尾部加元素
	 * 
	 * @param element
	 */
	public void addElement(int element) {
		// 判断队列是否已满
		if (isFull()) {
			System.out.println("队列已满,无法添加元素" + element + "到当前队列......");
			return;
		}
		// 移动尾指针
		rear++;
		elements[rear] = element;
	}

	/**
	 * 弹出队列头部获取元素
	 * 
	 * @return
	 */
	public int getElement() {
		if (isEmpty()) {
			System.out.println("队列为空......");
			throw new RuntimeException("空队列异常");
		} else {
			// 移动头指针
			front++;
		}	
		return elements[front];
	}

	/**
	 * 查看队列头元素
	 * 
	 * @return
	 */
	public int peek() {
		if (isEmpty()) {
			System.out.println("队列为空......");
			throw new RuntimeException("空队列异常");
		}
		return elements[front + 1];
	}

	/**
	 * 打印数组
	 */
	public void show() {
		System.out.print("当前数组为:[  ");
		for (int i = 0; i < elements.length; i++) {
			System.out.print(elements[i] + "  ");
		}
		System.out.print("]，头指针位置：" + front + "，尾指针位置：" + rear + "\n");
	}
}
