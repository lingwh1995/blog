package com.dragonsoft.datastructure.hashtable;

import java.util.Stack;

/**
 * 数组加链表实现哈希表
 * @author lingwh
 *
 */
public class LinkedListHashTable {
	private SingleLinkedList[] hashTable = new SingleLinkedList[10];
	
	/**
	 * 给hashTable中添加元素
	 * @param node
	 */
	public void add(SingleLinkedNode node) {
		int elementId = node.elementId;
		int hashKey = hash(elementId);
		SingleLinkedList singleLinkedList = hashTable[hashKey];
		if(singleLinkedList == null) {
			singleLinkedList = new SingleLinkedList();
			//把创建出来的链表放入到哈希表中
			hashTable[hashKey] = singleLinkedList;
		}
		singleLinkedList.addElement(node);
	}

	public void remove(SingleLinkedNode node) {
		int elementId = node.elementId;
		int hashKey = hash(elementId);
		SingleLinkedList singleLinkedList = hashTable[hashKey];
		if(singleLinkedList != null) {
			singleLinkedList.deleteByElementId(elementId);
		}else {
			System.out.println("您尚未添加该元素,无法删除...");
		}
	}
	/**
	 * 打印哈希表
	 */
	public void show() {
		for(int i=0; i<hashTable.length;i++) {
			if(hashTable[i] != null) {
				hashTable[i].show();
			}
		}
	}
	
	/**
	 * 哈希算法
	 * @param elementId
	 * @return
	 */
	public int hash(int elementId) {
		return elementId % hashTable.length;
	}
}


/**
 * 单链表
 * @author lingwh
 *
 */
class SingleLinkedList {
	//构造一个头节点
	private SingleLinkedNode headNode = new SingleLinkedNode(0,"");
	
	/**
	 * 添加链表节点
	 * @param node
	 */
	public void addElement(SingleLinkedNode node) {
		SingleLinkedNode tempNode = headNode;
		while(null != tempNode.next) {
			tempNode = tempNode.next;
		}
		tempNode.next = node;
	}
	
	/**
	 * 在指定位置添加链表节点
	 * @param node
	 */
	public void addElementByOrder(SingleLinkedNode node) {
		SingleLinkedNode tempNode = headNode;
		while(null != tempNode.next) {
			if(tempNode.next.elementId > node.elementId) {
				break;
			}else if(tempNode.next.elementId == node.elementId) {
				System.out.println("当前节点："+node+"已经存在，无法添加...");
				break;
			}
			tempNode = tempNode.next;
		}
		//node中的指针指向了本来是tempNode指针指向的元素
		node.next = tempNode.next;
		tempNode.next = node;
	}
	
	
	/**
	 * 判断链表是否为空
	 * @return
	 */
	public boolean isEmpty() {
		return null == headNode.next;
	}
	
	/**
	 * 更新链表节点
	 * @param node
	 */
	public void updateElement(SingleLinkedNode node) {
		if(isEmpty()) {
			System.out.println("当前链表为空...");
			return;
		}
		SingleLinkedNode tempNode = headNode.next;
		boolean isExist = false;
		while(true) {
			if(tempNode == null) {
				break;
			}
			if(node.elementId == tempNode.elementId) {
				isExist = true;
				break;
			}
			tempNode = tempNode.next;
		}
		if(isExist) {
			tempNode.data = node.data;
		}else {
			System.out.println("没有在链表中找到elementId为:"+node.elementId+"的节点.....");
		}
	}
	
	/**
	 * 根据elementId删除链表节点
	 * @param elementId
	 */
	public void deleteByElementId(int elementId) {
		SingleLinkedNode tempNode = headNode;
		boolean isExist = false;
		while(true) {
			if(null == tempNode.next) {
				break;
			}
			if(elementId == tempNode.next.elementId) {
				isExist = true;
				break;
			}
			tempNode = tempNode.next;
		}
		if(isExist) {
			tempNode.next = tempNode.next.next;
		}else {
			System.out.println("没有在链表中找到elementId为:"+elementId+"的节点.....");
		}
	}
	
	/**
	 * 获取链表节点个数，注意，不要统计头节点
	 * @return
	 */
	public int getSize() {
		if(isEmpty()) {
			return 0;
		}
		SingleLinkedNode tempNode = headNode;
		int length = 0;
		while(null != tempNode.next) {
			length++;
			tempNode = tempNode.next;
		}
		return length;
	}
	
	/**
	 * 查找单链表中的倒数第K个元素
	 * @param index
	 * @return
	 */
	public SingleLinkedNode getReverseOrderElement(int index) {
		if(isEmpty()) {
			System.out.println("当前链表为空...");
			return null;
		}
		int size = this.getSize();
		if(index<0 || index>size) {
			System.out.println("索引越界...");
			return null;
		}
		//for循环深入:for(i=起始索引位置;i<循环结束条件;i++)
		//这里要找到倒数第K个元素，必须用for循环,不能用while循环
		SingleLinkedNode tempNode = headNode;
		for(int i=0;i<size-index+1;i++) {
			tempNode = tempNode.next;
		}
		return tempNode;
	}
	
	/**
	 * 反转单链表:
	 * 		原链表:head->A->B->C->D
	 * 		反转：
	 * 			new head->A
	 * 			new head->B->A
	 * 			new head->C->B->A
	 * 			new head->D->C->B->A
	 * 			head->D->C->B->A
	 */
	public void reverse() {
		if(isEmpty()) {
			System.out.println("当前链表为空...");
			return;
		}
		SingleLinkedNode currentNode = headNode.next;
		SingleLinkedNode reverseHeadNode = new SingleLinkedNode(0,"");
		//指向当前节点的下一个节点
		SingleLinkedNode next = null;
		while(null != currentNode) {
			//先暂时保存当前节点的下一个节点
			next = currentNode.next;
			//将currentNode的下一个节点指向链表的最前端
            currentNode.next = reverseHeadNode.next;
            reverseHeadNode.next = currentNode;
            //让currentNode后移一次
            currentNode = next;

		}
		headNode.next = reverseHeadNode.next;
	}
	
	/**
	 * 打印链表
	 */
	public void show() {
		if(isEmpty()) {
			System.out.println("链表为空......");
			return;
		}
		SingleLinkedNode tempNode = headNode.next;
		while(null != tempNode) {
			System.out.println(tempNode);
			tempNode = tempNode.next;
		}
		System.out.println("--------------------------");
	}
	
	/**
	 * 使用栈逆序打印链表
	 */
	public void reversehow() {
		if(isEmpty()) {
			System.out.println("链表为空......");
			return;
		}
		SingleLinkedNode tempNode = headNode.next;
		Stack<SingleLinkedNode> nodeStack = new Stack<SingleLinkedNode>(); 
		while(null != tempNode) {
			nodeStack.push(tempNode);
			tempNode = tempNode.next;
		}
		while(nodeStack.size() > 0) {
			SingleLinkedNode popNode = nodeStack.pop();
			System.out.println(popNode);
		}
		System.out.println("--------------------------");
	}
	
	/**
	 * 递归打印链表
	 */
	public void showRecursion() {
		showRecursion1(headNode);
	}

	/**
	 * 顺序递归打印
	 * @param headNode
	 */
	private void showRecursion1(SingleLinkedNode headNode) {
		if(isEmpty()) {
			System.out.println("链表为空......");
			return;
		}
		System.out.println(headNode.next);
		showRecursion1(headNode.next);
	}
	
	/**
	 * 逆序递归打印
	 * @param headNode
	 */
	private void showRecursion2(SingleLinkedNode headNode) {
		if(isEmpty()) {
			System.out.println("链表为空......");
			return;
		}
		showRecursion2(headNode.next);
		System.out.println(headNode.next);
	}
}

/**
 * 单链表节点
 * @author lingwh
 *
 */
class SingleLinkedNode {
	//数据信息part1：元素编号
	protected int elementId;
	//数据信息part2：数据值
	protected String data;
	//指针信息
	protected SingleLinkedNode next;
	
	/**
	 * 节点构造信息
	 * @param elementId
	 * @param data
	 */
	public SingleLinkedNode(int elementId, String data) {
		this.elementId = elementId;
		this.data = data;
	}

	@Override
	public String toString() {
		return "SingleLinkedNode [elementId=" + elementId + ", data=" + data + "]";
	}
	
}

