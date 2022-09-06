package com.dragonsoft.algorithm.search;

import java.util.Arrays;

import org.junit.Test;

/**
 * 斐波那契数列
 * @author lingwh
 *
 */
public class FibonacciSearch {
	
	@Test
	public void fun() {
		int[] nums = {1,2,2,3,5,7,9,10};
		int findValue = 10;
		int fibonacciSearch = fibonacciSearch(nums,findValue);
		System.out.println(findValue + "在数组中的索引是:" + fibonacciSearch);
	}
	
	//因为后面我们mid=low+F(k-1)-1,需要使用到斐波那契数列
	//因此我们需要先获取到一个斐波那契数列
	//非递归方法得到一个斐波那契数列
	public static int[] fibonacci() {
		int maxSize = 7;
	    int[] f = new int[maxSize];
	    f[0] = 1;
	    f[1] = 1;
	    for(int i=2;i<maxSize;i++){
	        f[i] = f[i- 1] + f[i- 2];
	    }
	    return f;
	}

	/**
	 * 使用非递归实现斐波那契查找
	 * @param arr 数组
	 * @param key 我们要查找的关键值（码）
	 * @return 返回对应的下标 如果没有返回-1
	 */
	public static int fibonacciSearch(int [] arr,int key) {
	    int low = 0;
	    int high = arr.length - 1;
	    int k = 0;//表示斐波那契分割数值下标
	    int mid = 0;
	    int[] f = fibonacci();//获取斐波那契数列
	    //判断顺序表长度 n 是否等于 F[k]-1 `，不等于将`原数组查找表扩展为长度为F[k]-1
	    //假设当前传入的数组:1, 8, 10, 89, 1000, 1234  hight = 5
	    //斐波那契数列:1,1,2,3,5,8,13...
	    System.out.println("high:" + high);
	    while (high > f[k] - 1) {
	        k++;
	    }
	    System.out.println("斐波那契数组:" + Arrays.toString(f));
	    System.out.println("k:" + k);
	    //如果要补充元素，则补充重复最后一个元素，直到满足F[k]-1个元素
	    int[] temp = Arrays.copyOf(arr, f[k]);
	    //此时 k =5  f[5]= f[3] + f[4] = 8
	    //此时 k =5  f[5]=   3  +   5  = 8
	    //因为arr[hight]代表最后一个元素，新数组temp = Arrays.copyOf(arr,f[k]);
	    //所以若想最后元素当作填充元素就应该是从hight + 1 开始
	    for (int i = high + 1; i < temp.length; i++) {
	        temp[i] = arr[high];
	    }
	    System.out.println("temp数组:" + Arrays.toString(temp));
	    while (low <= high) {
	        //按图所示进行黄金分割前部分+后部分
	    	System.out.println("low:" + low);
	        mid = low + f[k - 1] - 1;
	        System.out.println("mid:" + mid);
	        //如果需要找的值key 小于temp[mid]说明我们应该继续向数组的前面查找(左边)
	        if (key < temp[mid]) {
	        	high = mid - 1;//往前缩范围
	            //为什么是k--
	            //1.全部元素= 前面的元素 + 后边元素
	            //2. f[k] = f[k-1] + f[k-2]
	            //之前(F[k]-1) = (F[k-1]-1) + (F[k-2]-1) +1
	            //按图所示，目前我们这里是mid= low + f[k - 1] -1;
	            //如果继续向数组的前面查找(左边)则应该是(F[k-1]-1)进行拆分
	            //(F[k-1]-1)=(F[k-1-1]-1) + (F[k-2-2]-1) +1 = 4 = 2 + 1 + 1
	            //即在f[k-1]-1 的前面继续查找k--
	            //即下次循环mid = f[k-1-1] -1
	            k--;
	        }

	        //我们应该继续向数组的后面查找(右边)
	        if (key > temp[mid]) {
	            low = mid + 1;
	            //为什么是k -=2
	            //1. f[k] = f[k-1] + f[k-2] .
	            //2.因为后面我们有f[k-2],所以可以继续拆分 f[k-1] = f[k-3] + f[k-4]
	            //3.即在f[k-2]的前面进行查找k -=2，即下次循环mid = f[k -2 - 1] -1
	            k -= 2;
	        }

	        if (key == temp[mid]) {
	            //因为之前如果要补充元素，则补充重复最后一个元素，直到满足F[k]-1个元素
	            //如果小于hight代表是arr数组里的值
	            if (mid <= high) {
	                return mid;
	            } else {
	                //否则说明查找得到的数据元素是temp数组里的补充值
	                return high;
	            }
	        }
	    }
	    return -1;
	}
}
