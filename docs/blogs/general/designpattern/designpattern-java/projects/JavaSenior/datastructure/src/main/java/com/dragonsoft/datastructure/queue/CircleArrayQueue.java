package com.dragonsoft.datastructure.queue;

/**
 * 循环队列：当队列中元素被取出时，数组中的空余位置可以再次被使用
 * 
 * @author lingwh
 *
 */
public class CircleArrayQueue {
	// 队列的最大容量
	private int maxCapacity;
	// 队列的头指针，初始位置指向队列中的第一个元素
	private int front;
	// 队列的尾指针,初始位置只想队列中的最后一个元素的后一个元素，也就是环形队列的第一个元素
	private int rear;
	// 保存元素的数组
	private int[] elements;

	/**
	 * 初始化队列
	 * 
	 * @param maxCapacity
	 */
	public CircleArrayQueue(int maxCapacity) {
		this.maxCapacity = maxCapacity;
		this.front = 0;
		this.rear = 0;
		this.elements = new int[maxCapacity];
	}

	/**
	 * 判断队列是否为空
	 * 
	 * @return
	 */
	public boolean isEmpty() {
		return rear == front;
	}

	/**
	 * 判度队列是否已满
	 * 
	 * @return
	 */
	public boolean isFull() {
		//逻辑一
		return (rear + 1) % maxCapacity == front;
		//逻辑二
		//return(rear +1-front) % maxCapacity == 0
	}

	/**
	 * 给队列中添加元素
	 * 
	 * @param element
	 */
	public void addElement(int element) {
		if (isFull()) {
			System.out.println("当前队列已满,无法添加元素" + element + "到队列中......");
			return;
		}
		elements[rear] = element;
		this.rear = (rear + 1) % maxCapacity;
	}

	/**
	 * 从队列中获取元素
	 * 
	 * @return
	 */
	public int getElement() {
		if (isEmpty()) {
			System.out.println("当前队列为空......");
			throw new RuntimeException();
		}
		int element = elements[front];
		this.front = (front+1) % maxCapacity;
		return element;
	}

	/**
	 * 查看队列头元素，但并不从队列中删除该元素
	 * 
	 * @return
	 */
	public int peek() {
		return elements[front];
	}

	public void show() {
        System.out.print("当前数组为:[  ");
        for (int i=front; i<front + getQueueElementsRealSize(); i++) {
            System.out.print(elements[i%maxCapacity]+"  ");
        }
        System.out.print("]，头指针位置："+front+"，尾指针位置："+rear+"\n");
	}
	
	private int getQueueElementsRealSize() {
		return (rear+maxCapacity-front)%maxCapacity;
	}
}
