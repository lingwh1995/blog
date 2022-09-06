package com.dragonsoft.datastructure.array.reverse;

import java.util.Arrays;

import org.junit.Test;

/**
 * 反转数组
 * @author lingwh
 *
 */
public class ReverseArray {
	
	@Test
	public void fun() {
		int[] nums = new int[] {1,2,3,4,5};
		System.out.println(Arrays.toString(nums));
		int[] reverse = reverse2(nums);
		System.out.println(Arrays.toString(reverse));
	}
	
	/**
	 * 创建一个新的数组来实现反转
	 * @param nums
	 * @return
	 */
	private int[] reverse1(int[] nums) {
		int[] reverseNums = new int[nums.length];
		for (int i = 0; i < nums.length; i++) {
			reverseNums[i] = nums[nums.length-i-1];
		}
		return reverseNums;
	}
	
	/**
	 * for循环交换索引对应的元素实现反转
	 * @param nums
	 * @return
	 */
	private int[] reverse2(int[] nums) {
		for (int i = 0; i < nums.length/2; i++) {
			nums[i] = nums[i] ^ nums[nums.length - 1 -i];
			nums[nums.length - 1 -i] = nums[i] ^ nums[nums.length - 1 -i];
			nums[i] = nums[i] ^ nums[nums.length - 1 -i];
		}
		return nums;
	}
	
	/**
	 * while循环交换索引对应的元素实现反转
	 * @param nums
	 * @return
	 */
	private int[] reverse3(int[] nums) {
		int minIndex = 0;
		int maxIndex = nums.length - 1;
		while(true) {
			nums[minIndex] = nums[minIndex] ^ nums[maxIndex];
			nums[maxIndex] = nums[minIndex] ^ nums[maxIndex];
			nums[minIndex] = nums[minIndex] ^ nums[maxIndex];
			minIndex++;
			maxIndex--;
			if(minIndex >= maxIndex) {
				break;
			}
		}
		return nums;
	}
	
	/**
	 * 递归实现反转
	 * @param nums
	 * @return
	 */
	private int[] reverse4(int[] nums) {
		return reverse(nums,0,nums.length - 1);
	}

	private int[] reverse(int[] nums, int minIndex, int maxIndex) {
		if(minIndex >= maxIndex) {
			return nums;
		}else {
			nums[minIndex] = nums[minIndex] ^ nums[maxIndex];
			nums[maxIndex] = nums[minIndex] ^ nums[maxIndex];
			nums[minIndex] = nums[minIndex] ^ nums[maxIndex];
		}
		return reverse(nums,++minIndex,--maxIndex);
	}
	
	/**
	 * 把nums中的元素依次插入到reverseNums的第一个位置
	 * @param nums
	 * @return
	 */
	private int[] reverse5(int[] nums) {
		int[] reverseNums = new int[nums.length];
		for (int i = 0; i < reverseNums.length; i++) {
			for (int j = 0; j <= i; j++) {
				/**
				 * 思路分析：
				 * 	二重循环第一次：
				 * 	reverseNums[0] = nums[0];
				 *
				 * 	二重循环第二次：
				 * 	reverseNums[0] = nums[1];
				 * 	reverseNums[1] = nums[0];
				 *
				 * 	二重循环第三次：
				 * 	reverseNums[0] = nums[2];
				 * 	reverseNums[1] = nums[1];
				 * 	reverseNums[2] = nums[0];
				 */
				
				reverseNums[j] = nums[i-j];
			}
		}
		return reverseNums;
	}
	
	/**
	 * reverseNums数组中元素全部后移一位实现反转,原理同单链表反转
	 * @param nums
	 * @return
	 */
	private int[] reverse6(int[] nums) {
		int[] reverseNums = new int[nums.length];
		/**
		 * 二重循环第一次：
		 * reverseNums[0] = nums[0];
		 *
		 * 二重循环第二次：
		 * reverseNums[1] = reverseNums[0];
		 * reverseNums[0] = nums[1];
		 *
	     * 二重循环第三次：
		 * reverseNums[2] = reverseNums[1];
		 * reverseNums[1] = reverseNums[0];
		 * reverseNums[0] = nums[2];
		 *
		 * 二重循环第四次：
		 * reverseNums[3] = reverseNums[2];
		 * reverseNums[2] = reverseNums[1];
		 * reverseNums[1] = reverseNums[0];
		 * reverseNums[0] = nums[3];
		 * 
		 */
		
		for (int i = 0; i < reverseNums.length; i++) {
			for (int j = 0; j < i; j++) {
				reverseNums[i-j] = reverseNums[i-j-1];
			}
			reverseNums[0] = nums[i];
		}
		return reverseNums;
	}
}
