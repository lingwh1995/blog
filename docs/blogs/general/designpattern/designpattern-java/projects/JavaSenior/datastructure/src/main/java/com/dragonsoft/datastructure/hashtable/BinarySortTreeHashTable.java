package com.dragonsoft.datastructure.hashtable;


/**
 * 数组加二叉树实现哈希表
 * @author lingwh
 *
 */
public class BinarySortTreeHashTable {
	private BinarySortTree[] hashTable = new BinarySortTree[10];
	
	/**
	 * 给hashTable中添加元素
	 * @param value
	 */
	public void add(int value) {
		int hashKey = hash(value);
		BinarySortTree binarySortTree = hashTable[hashKey];
		if(binarySortTree == null) {
			binarySortTree = new BinarySortTree();
			//把创建出来的链表放入到二叉树排序树中
			hashTable[hashKey] = binarySortTree;
		}
		binarySortTree.add(new Node(value));
	}
//
//	public void remove(SingleLinkedNode node) {
//		int elementId = node.elementId;
//		int hashKey = hash(elementId);
////		SingleLinkedList singleLinkedList = hashTable[hashKey];
//		if(singleLinkedList != null) {
//			singleLinkedList.deleteByElementId(elementId);
//		}else {
//			System.out.println("您尚未添加该元素,无法删除...");
//		}
//	}
	
	/**
	 * 打印哈希表
	 */
	public void show() {
		for(int i=0; i<hashTable.length;i++) {
			System.out.println("第" + i + "棵树中存放的数据:");
			if(hashTable[i] != null) {
				hashTable[i].infixOrder();
			}
			System.out.println();
		}
	}
	
	/**
	 * 哈希算法
	 * @param value
	 * @return
	 */
	public int hash(int value) {
		return value % hashTable.length;
	}
}

/**
 * 二叉排序树
 * @author lingwh
 *
 */
class BinarySortTree {
    private Node root;

    /**
     * 查找要删除的节点
     * @param value
     */
    public Node search(int value){
        if(root == null){
            return null;
        }
        return root.search(value);
    }

    /**
     * 查找要删除的父节点
     * @param value
     */
    public Node searchParent(int value){
        if(root == null){
            return null;
        }
        return root.searchParent(value);
    }

    /**
     * 删除节点
     */
    public void delNode(int value){
        if(root == null){
            return;
        }else{
            //1.先找到要删除的节点targetNode
            Node targetNode = search(value);
            //如果没有找到目标节点,则结束程序
            if(targetNode == null){
                return;
            }
            //如果我们发现当前这颗二叉排序树只有一个节点
            if(root.left == null && root.right == null){
                root = null;
                return;
            }
            //找到targetNode的父节点
            Node parent = searchParent(value);
            //如果要删除的节点是叶子节点
            if(targetNode.left == null && targetNode.right == null){
                //判断targetNode是父节点的左子节点还是右子节点
                if(parent.left != null && parent.left.value == value){
                    //是左子节点
                    parent.left = null;
                }else if(parent.right != null && parent.right.value == value){
                    //是右子节点
                    parent.right = null;
                }
            }else if(targetNode.left != null && targetNode.right != null){//删除有两棵子树的节点
                int minValue = delRightTreeMin(targetNode.right);
                targetNode.value = minValue;

            }else{//删除只有一颗子树的节点

                //如果要删除的节点有左子节点
                if(targetNode.left !=null){
                    if(parent != null) {
                        //如果targetNode是parent的左子节点
                        if (parent.left.value == value) {
                            parent.left = targetNode.left;
                        } else {
                            //如果targetNode是parent的右子节点
                            parent.right = targetNode.left;
                        }
                    }else {
                        root = targetNode.left;
                    }
                }else{//如果要删除的节点有右子节点
                    if(parent != null) {
                        //如果targetNode是parent的左子节点
                        if (parent.left.value == value) {
                            parent.left = targetNode.right;
                        } else {
                            //如果targetNode是parent的右子节点
                            parent.right = targetNode.right;
                        }
                    }else{
                        root = targetNode.right;
                    }
                }
            }
        }
    }

    /**
     *
     * @param node 传入的节点(当作二叉排序树的根节点)
     * @return 返回以node为根节点的二叉排序树的最小节点的值
     */
    public int delRightTreeMin(Node node){
        Node target = node;
        //循环的查找左节点,就会找到最小值
        while(target.left != null){
            target = target.left;
        }
        //这时target就指向了最小的节点
        delNode(target.value);
        return target.value;
    }

    /**
     * 添加节点
     * @param node
     */
    public void add(Node node){
        if(root == null){
            root = node;
        }else {
            root.add(node);
        }
    }

    /**
     * 中序遍历
     */
    public void infixOrder(){
        if(root == null){
            return;
        }
        root.infixOrder();
    }

}
class Node{
    int value;
    Node left;
    Node right;

    public Node(int value) {
        this.value = value;
    }

    /**
     * 增加节点
     * @param node
     */
    public void add(Node node){
        if(node == null){
            return;
        }
        //判断传入的节点的值和当前子树根节点的关系
        if(node.value < this.value){
            if(this.left == null){
                this.left = node;
            }else{
                this.left.add(node);
            }
        }else{
            if(this.right == null){
                this.right = node;
            }else{
                this.right.add(node);
            }
        }
    }

    /**
     * @param value 希望删除的节点的值
     * @return 如果找到返回该节点的值,否则返回null
     */
    public Node search(int value){
        if(value == this.value){
            return this;
        }else if(value < this.value){
            //如果查找的值小于当前节点,向左子树递归查找
            if(this.left == null){
                return null;
            }
            return this.left.search(value);
        }else {
            //如果查找的值不小于当前节点,向右子树递归查找
            if(this.right == null){
                return null;
            }
            return this.right.search(value);
        }
    }

    /**
     * 查找要删除的节点
     * @param value
     * @return
     */
    public Node searchParent(int value){
        //如果当前节点就是要删除的节点的父节点,就返回
        if((this.left !=null && this.left.value == value)||
                this.right != null && this.right.value == value){
            return this;
        }else{
            //如果查找的值小于当前节点的值,并且当前节点的左子节点不为空
            if(value < this.value && this.left != null){
                return this.left.searchParent(value);
            }else if(value >= this.value && this.right != null){
                return this.right.searchParent(value);
            }else{
                //没有找到父节点
                return null;
            }
        }
    }

    /**
     * 中序遍历
     */
    public void infixOrder(){
        if(this.left != null){
            this.left.infixOrder();
        }
        System.out.print(this + "\t");
        if(this.right != null){
            this.right.infixOrder();
        }
    }

    @Override
    public String toString() {
        return "Node{" +
                "value=" + value +
                '}';
    }
}