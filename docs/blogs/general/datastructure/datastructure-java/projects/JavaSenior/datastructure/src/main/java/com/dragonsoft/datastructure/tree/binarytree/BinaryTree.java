package com.dragonsoft.datastructure.tree.binarytree;

/**
 * 二叉树
 */
public class BinaryTree {
    /**根节点*/
    private Node root;

    public Node getRoot() {
        return root;
    }

    public void setRoot(Node root) {
        this.root = root;
    }

    /**
     * 前序遍历
     */
    public void preorderTravel(){
        if(null == this.root){
            System.out.println("树为空......");
            return;
        }
        this.root.preorderTravel();
    }

    /**
     * 中序遍历
     */
    public void infixorderTravel(){
        if(null == this.root){
            System.out.println("树为空......");
            return;
        }
        this.root.infixorderTravel();
    }

    /**
     * 后序遍历
     */
    public void sufixorderTravle(){
        if(null == this.root){
            System.out.println("树为空......");
            return;
        }
        this.root.sufixorderTravle();
    }

    /**
     * 前序查找
     * @param no
     * @return
     */
    public Node preorderSearch(int no){
        if(null == this.root){
            System.out.println("树为空......");
            return null;
        }
        return root.preorderSearch(no);
    }

    /**
     * 中序查找
     * @param no
     * @return
     */
    public Node infixorderSearch(int no){
        if(null == this.root){
            System.out.println("树为空......");
            return null;
        }
        return root.infixorderSearch(no);
    }
    /**
     * 后序查找
     * @param no
     * @return
     */
    public Node sufixorderSearch(int no){
        if(null == this.root){
            System.out.println("树为空......");
            return null;
        }
        return root.sufixorderSearch(no);
    }

    /**
     * 删除节点
     * @param no
     */
    public void deleteByNo(int no){
        if(root == null){
            System.out.println("树为空......");
            return;
        }
        if(root.getId() == no){
            root = null;
            return;
        }
        root.deleteByNo(no);
    }
}

class Node{
    private int id;
    private String name;
    private Node left;
    private Node right;

    public Node() {
    }

    public Node(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Node getLeft() {
        return left;
    }

    public void setLeft(Node left) {
        this.left = left;
    }

    public Node getRight() {
        return right;
    }

    public void setRight(Node right) {
        this.right = right;
    }

    @Override
    public String toString() {
        return "Node{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }

    /**
     * 前序遍历
     */
    public void preorderTravel(){
        //根
        System.out.println(this);
        //左
        if(null != this.left){
            this.left.preorderTravel();
        }
        //右
        if(null != this.right){
            this.right.preorderTravel();
        }
    }

    /**
     * 中序遍历
     */
    public void infixorderTravel(){
        //左
        if(null != this.left){
            this.left.infixorderTravel();
        }
        //根
        System.out.println(this);
        //右
        if(null != this.right){
            this.right.infixorderTravel();
        }
    }

    /**
     * 后序遍历
     */
    public void sufixorderTravle(){
        //左
        if(null != this.left){
            this.left.sufixorderTravle();
        }
        //右
        if(null != this.right){
            this.right.sufixorderTravle();
        }
        //根
        System.out.println(this);
    }

    /**
     * 根据节点的id值进行前序查找
     */
    public Node preorderSearch(int no){
        //1.先判断no和根节点是否相等,如果相等，则返回根节点
        if(no == this.id){
            return this;
        }
        //2.判断左子节点是否为空,不为空则递归向左查找
        Node resultNode = null;
        if(null != this.left){
            resultNode = this.left.preorderSearch(no);
        }
        //3.如果找到了,则返回该节点
        if(null != resultNode){
            return resultNode;
        }
        //4.没找到,继续递归向右查找
        if(null != this.right){
            resultNode = this.right.preorderSearch(no);
        }
        return resultNode;
    }

    /**
     * 根据节点的id值进行中序查找:左->根—>右
     */
    public Node infixorderSearch(int no){
        //1.先判断当前节点的左子节点是否为空，如果不为空,则递归中序查找
        Node resultNode = null;
        if(this.left != null){
            resultNode = this.left.infixorderSearch(no);
        }
        //2.如果找到了，则返回
        if(null != resultNode){
            return resultNode;
        }
        //3.如果没有找到，就和当前节点比较,相等则返回
        if(this.id == no){
            return this;
        }
        //4.如果当前节点的右节点不为空,则继续向右进行递归查找
        if(this.right != null){
            resultNode = this.right.infixorderSearch(no);
        }
        return resultNode;
    }

    /**
     * 根据节点的id值进行后序查找
     */
    public Node sufixorderSearch(int no){
        //1.先判断当前节点的左子节点是否为空，如果不为空,则递归中序查找
        Node resultNode = null;
        if(null != this.left){
            resultNode = this.left.sufixorderSearch(no);
        }
        //2.如果找到了，则返回
        if(null != resultNode){
            return resultNode;
        }
        //3..如果当前节点的右节点不为空,则继续向右进行递归查找
        if(null != this.right){
            resultNode = this.right.sufixorderSearch(no);
        }
        //4.如果没有找到，就和当前节点比较,相等则返回
        if(null != resultNode){
            return resultNode;
        }
        System.out.println("进入后序查找~");
        System.out.println(this);
        //5.如果左右子树都没有找到,就和当前节点进行比较
        if(no == this.id){
            resultNode = this;
        }
        return resultNode;
    }

    /**
     * 根据no删除
     * @param no
     */
    public void deleteByNo(int no){
        //如果左子节点符合条件，则删除左子节点
        if(this.left != null && this.left.id == no){
            this.left = null;
            return ;
        }
        //如果右子节点符合条件，则删除右子节点
        if(this.right != null && this.right.id == no){
            this.right = null;
            return ;
        }
        //递归在左子树查找
        if(this.left != null) {
            this.left.deleteByNo(no);
        }
        //递归在右子树查找
        if(this.right != null) {
            this.right.deleteByNo(no);
        }
    }

}
