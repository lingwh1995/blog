package com.dragonsoft.datastructure.tree.arraybinarytree;

/**
 * 顺序存储二叉树
 */
public class ArrayBinaryTree {

    /**
     * 要遍历的数组
     */
    private int[] arr;

    public ArrayBinaryTree(int[] arr) {
        this.arr = arr;
    }

    /**
     * 前序遍历
     */
    public void peOrder(){
        this.preOrder(0);
        System.out.println("、");
    }
    
    /**
     * 中序遍历
     */
    public void infixOrder(){
    	this.infixOrder(0);
    	System.out.println("、");
    }
    
    /**
     * 后序遍历
     */
    public void sufixOrder(){
    	this.sufixOrder(0);
    	System.out.println("、");
    }
    
    /**
     * 前序遍历：根->左->右
     * @param index 索引
     */
    private void preOrder(int index){
        if(arr==null || arr.length == 0){
            System.out.println("空数组......");
        }
        //输出当前元素
        System.out.print(arr[index]+" ");
        //向左递归遍历
        if((index*2+1) < arr.length){
            preOrder(index*2+1);
        }
        //向右递归遍历
        if((index*2+2) < arr.length){
            preOrder(index*2+2);
        }
    }

    /**
     * 中序遍历：左->根->右
     * @param index 索引
     */
    private void infixOrder(int index){
        if(arr==null || arr.length == 0){
            System.out.println("空数组......");
        }
        //向左递归遍历
        if((index*2+1) < arr.length){
            infixOrder(index*2+1);
        }
        //输出当前元素
        System.out.print(arr[index]+"\t");
        //向右递归遍历
        if((index*2+2) < arr.length){
            infixOrder(index*2+2);
        }
    }

    /**
     * 前序遍历：左->右->根
     * @param index 索引
     */
    private void sufixOrder(int index){
        if(arr==null || arr.length == 0){
            System.out.println("空数组......");
        }
        //向左递归遍历
        if((index*2+1) < arr.length){
            sufixOrder(index*2+1);
        }
        //向右递归遍历
        if((index*2+2) < arr.length){
            sufixOrder(index*2+2);
        }
        //输出当前元素
        System.out.print(arr[index]+"\t");
    }
}
