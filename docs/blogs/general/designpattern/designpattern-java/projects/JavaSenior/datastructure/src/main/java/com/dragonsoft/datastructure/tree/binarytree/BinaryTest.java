package com.dragonsoft.datastructure.tree.binarytree;

import org.junit.Test;

/**
 * <pre>
 *                          宋江(1)
 *                          
 *                  吴用(2)            卢俊义(3)
 *                  
 *                              关胜(5)      林冲(4)
 * <pre/>
 */
public class BinaryTest {
	
	@Test
	public void fun() {
		 //创建节点
        Node songjiang = new Node(1, "宋江");
        Node wuyong = new Node(2, "吴用");
        Node lujunyi = new Node(3, "卢俊义");
        Node linchong = new Node(4, "林冲");
        Node guanshegn = new Node(5, "关胜");
        songjiang.setLeft(wuyong);
        songjiang.setRight(lujunyi);
        lujunyi.setRight(linchong);
        lujunyi.setLeft(guanshegn);
        //创建二叉树
        BinaryTree binaryTree = new BinaryTree();
        //设置根节点
        binaryTree.setRoot(songjiang);


        System.out.println("-----------------------");
        //前序遍历:根->左->右
        binaryTree.preorderTravel();
        System.out.println("------------q-----------");
        //中序遍历:左->根->右
        binaryTree.infixorderTravel();
        System.out.println("------------z-----------");
        //后序遍历:左->右->根
        binaryTree.sufixorderTravle();
        System.out.println("------------h-----------");


        System.out.println("=============================================");
        //前序查找
        System.out.println("前序查找:" + binaryTree.preorderSearch(4));
        //中序查找
        System.out.println("中序查找:" + binaryTree.infixorderSearch(1));
        //后序查找
        System.out.println("后序查找:" + binaryTree.sufixorderSearch(5));
        System.out.println("=============================================");

        //删除节点
        binaryTree.deleteByNo(5);
        binaryTree.preorderTravel();
        binaryTree.deleteByNo(3);

        System.out.println("-------------------------------");
        //前序遍历:根->左->右
        binaryTree.preorderTravel();
	}
}
