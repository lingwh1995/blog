package com.dragonsoft.datastructure.tree.arraybinarytree;

import org.junit.Test;

public class ArrayBinaryTreeTest {

	@Test
	public void fun() {
		int[] arr = {1,2,3,4,5,6,7};
		ArrayBinaryTree arrayBinaryTree = new ArrayBinaryTree(arr);
		System.out.println("前序遍历:");
		arrayBinaryTree.peOrder();
		System.out.println("中序遍历:");
		arrayBinaryTree.infixOrder();
		System.out.println("后序遍历:");
		arrayBinaryTree.sufixOrder();
	}
}
