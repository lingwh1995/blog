package com.dragonsoft.datastructure.linkedlist.doublelinkedlist;

/**
 * 双向链表
 * @author lingwh
 *
 */
public class DoubleLinkedList {
	private DoubleLinkedNode headNode = new DoubleLinkedNode(0,""); 
	
	/**
	 * 添加到双向链表尾部
	 * @param node
	 */
	public void addElement(DoubleLinkedNode node) {
		DoubleLinkedNode tempNode = headNode;
		while(null != tempNode.next) {
			tempNode = tempNode.next;
		}
		tempNode.next = node;
		node.prev = tempNode;
	}
	
	/**
	 * 修改双向链表节点
	 * @param node
	 */
	public void updateElement(DoubleLinkedNode node) {
		DoubleLinkedNode tempNode = headNode;
		boolean isExsit = false;
		while(true) {
			if(tempNode.next == null) {
				break;
			}
			if(tempNode.elementId == node.elementId) {
				isExsit = true;
				break;
			}
			tempNode = tempNode.next;
		}
		if(isExsit) {
			tempNode.data = node.data;
		}else {
			System.out.println("没有找到elementId为：" + node.elementId +"的节点,无法修改...");
		}
	}
	
	/**
	 * 删除双向链表节点
	 * 	注意：双向链表可以实现自身删除自身，不需要先找到当前元素的前一个节点再进行删除当前节点
	 * 	DoubleLinkedNode tempNode = headNode;
	 * @param node
	 */
	public void deleteByElementId(int elementId) {
		DoubleLinkedNode tempNode = headNode;
		boolean isLoop = false;
		while(true) {
			if(tempNode.next == null) {
				break;
			}
			tempNode = tempNode.next;
			if(tempNode.elementId == elementId) {
				isLoop = true;
				break;
			}
		}
		if(isLoop) {
			//此种实现无法删除双向链表的最后一个节点
			//tempNode.prev.next = tempNode.next;
			//tempNode.next.prev = tempNode.prev;
			
			//此种实现可以删除双向链表的最后一个节点
			tempNode.prev.next = tempNode.next;
			if(null != tempNode.next) {
				tempNode.next.prev = tempNode.prev;
			}
		}else {
			System.out.println("没有找到elementId为：" + elementId +"的节点，无法删除...");
		}
	}
	
	/**
	 * 删除双向链表节点
	 * 	注意：双向链表可以实现自身删除自身，不需要先找到当前元素的前一个节点再进行删除当前节点
	 *  DoubleLinkedNode tempNode = headNode.next;
	 * @param node
	 */
	public void deleteByElementId1(int elementId) {
		DoubleLinkedNode tempNode = headNode.next;
		boolean isLoop = false;
		while(true) {
			if(tempNode== null) {
				break;
			}
			if(tempNode.elementId == elementId) {
				isLoop = true;
				break;
			}
			tempNode = tempNode.next;
		}
		if(isLoop) {
			//此种实现无法删除双向链表的最后一个节点
			//tempNode.prev.next = tempNode.next;
			//tempNode.next.prev = tempNode.prev;
			
			//此种实现可以删除双向链表的最后一个节点
			tempNode.prev.next = tempNode.next;
			if(null != tempNode.next) {
				tempNode.next.prev = tempNode.prev;
			}
		}else {
			System.out.println("没有找到elementId为：" + elementId +"的节点，无法删除...");
		}
	}
	
	/**
	 * 遍历双向链表
	 * @param node
	 */
	public void show() {
		if(null == headNode.next) {
			System.out.println("链表为空......");
			return;
		}
		DoubleLinkedNode tempNode = headNode;
		while(null != tempNode.next) {
			tempNode = tempNode.next;
			System.out.println(tempNode);
		}
		System.out.println("----------------------");
	}
	
}
class DoubleLinkedNode {
	protected int elementId;
	protected String data;
	protected DoubleLinkedNode next;
	protected DoubleLinkedNode prev;
	
	public DoubleLinkedNode(int elementId, String data) {
		this.elementId = elementId;
		this.data = data;
	}
	
	@Override
	public String toString() {
		return "DoubleLinkedNode [elementId=" + elementId + ", data=" + data + "]";
	}
	
}