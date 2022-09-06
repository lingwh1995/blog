package com.dragonsoft.datastructure.linkedlist.singlelinkedlist;

/**
 * 环形单链表+环形单链表解决约瑟夫问题
 * @author lingwh
 *
 */
public class CircleSingleLinkedList {
	
	private CircleSingleLinkedListNode first = new CircleSingleLinkedListNode(-1,"");
	protected static int size;
	
	/**
	 * 创建链表，并给链表中添加元素
	 * @param size 链表中节点的个数
	 */
	public void addElement(int size) {
		//把size保存到成员变量中，方便测试约瑟夫环的方法
		this.size = size;
		if(size < 1) {
			System.out.println("数据不合法......");
		}
		CircleSingleLinkedListNode currentNode = null;
		for(int i=1; i<=size; i++) {
			CircleSingleLinkedListNode newNode = new CircleSingleLinkedListNode(i,"");
			if(i==1) {
				first = newNode;
				first.next = first;
				currentNode = first;
			}else {
				currentNode.next = newNode;
				newNode.next = first;
				currentNode = newNode;
			}
		}
	}
	
	/**
	 * 打印链表
	 */
	public void show() {
		if(null == first) {
			System.out.println("链表为空...");
			return;
		}
		//使用辅助指针完成遍历
		CircleSingleLinkedListNode currentNode = first;
		while(true) {
			System.out.println("当前节点编号:" + currentNode.elementId);
			if(currentNode.next == first) {
				break;
			}
			currentNode = currentNode.next;
		}
	}
	
	/**
	 * 环形链表实现约瑟夫环
	 * @param n 链表元素总个数
	 * @param m 数到第m个出圈
	 */
	public void josephCircle(int n,int m) {
		//创建一个辅助指针变量helper,事先应该指向环形链表的最后这个节点
		CircleSingleLinkedListNode helper = first;
		while(true) {
			if(helper.next == first) {
				break;
			}
			helper = helper.next;
		}
		//k:第一次数从哪个编号开始数
		int k = 1;
		//小孩报数前，先让first和helper移动k-1次
		for(int i=0; i<k-1; i++) {
			first = first.next;
			helper = helper.next;
		}
		//当小孩报数时，让first和helper指针同时移动m-1次，然后出圈
		while(true) {
			//helper == first:说明圈中只有一个节点
			if(helper == first) {
				break;
			}
			for(int i=0; i<m-1; i++) {
				first = first.next;
				helper = helper.next;
			}
			//这时first指向的点，就是要出圈的小孩节点
			System.out.println("小孩" + first.elementId + "出圈");
			//将first指向的小孩节点出圈
			first = first.next;
			helper.next = first;
		}
		System.out.println("最后留在圈中的小孩编号：" + first.elementId);
	}

}

class CircleSingleLinkedListNode {
	protected int elementId;
	protected CircleSingleLinkedListNode next;
	
	public CircleSingleLinkedListNode(int elementId, String data) {
		this.elementId = elementId;
	}

	@Override
	public String toString() {
		return "CircleSingleLinkedListNode [elementId=" + elementId +"]";
	}
	
}