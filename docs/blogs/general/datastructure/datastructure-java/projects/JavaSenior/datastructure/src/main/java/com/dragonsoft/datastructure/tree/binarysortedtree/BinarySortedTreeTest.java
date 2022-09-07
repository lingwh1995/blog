package com.dragonsoft.datastructure.tree.binarysortedtree;

import org.junit.Test;

/**
 * 二叉排序树(BST)
 * 					7
 * 			3				10
 * 		1		5		9			12
 */
public class BinarySortedTreeTest {
	
	@Test
	public void fun() {
		int[] arr = {7,3,10,12,5,1,9};
        BinarySortedTree binarySortTree = new BinarySortedTree();
        for (int i = 0; i < arr.length; i++) {
            binarySortTree.add(new Node(arr[i]));
        }
        //中序遍历
        System.out.println("~~~~~~~~~~~~~~~~原来的树:~~~~~~~~~~~~~~~~~~~~~~~");
        binarySortTree.infixOrder();

        //删除叶子节点
        binarySortTree.delNode(12);
        System.out.println("~~~~~~~~~~~~~~~~原来的树:删除了12~~~~~~~~~~~~~~~~~~~~~~~");
        binarySortTree.infixOrder();
        //删除只有一棵子树的叶子节点
        binarySortTree.delNode(1);
        System.out.println("~~~~~~~~~~~~~~~~原来的树:删除了1~~~~~~~~~~~~~~~~~~~~~~~");
        binarySortTree.infixOrder();
        //删除有两棵子树的叶子节点
        binarySortTree.delNode(7);
        System.out.println("~~~~~~~~~~~~~~~~原来的树:删除了7~~~~~~~~~~~~~~~~~~~~~~~");
        binarySortTree.infixOrder();
        //测试删除最后一个节点
        binarySortTree.delNode(10);
        System.out.println("~~~~~~~~~~~~~~~~原来的树:删除了10~~~~~~~~~~~~~~~~~~~~~~~");
        binarySortTree.infixOrder();
        System.out.println("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        
        //测试查找数据
        Node result = binarySortTree.search(9);
        System.out.println("查询结果:" + result);
	}
}
