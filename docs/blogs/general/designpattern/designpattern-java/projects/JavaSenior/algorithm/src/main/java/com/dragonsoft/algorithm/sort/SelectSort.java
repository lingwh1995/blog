package com.dragonsoft.algorithm.sort;

import java.util.Arrays;

import org.junit.Test;

/**
 * 选择排序:
 * 		时间复杂度:时间复杂度: O(n^2)
 * @author lingwh
 *
 */
public class SelectSort {
	
	/**
	 * 使用具体的值来判断是否需要进行交换两个数
	 */
	@Test
	public void fun1() {
//		int[] nums = {9,5,4,2,8,3,169,7,6};
		int[] nums = {1,2,3,4,5,6,7,8,9};
		//统计执行次数
		long count = 0;
		//统计执行时间
		long start = System.currentTimeMillis();
		for(int i=0; i <nums.length; i++) {
			int min = nums[i];
			int minIndex = 0;
			for(int j=i+1; j < nums.length; j++) {
				count++;
				if(min > nums[j]) {
					min = nums[j];
					minIndex = j;
				}
			}
			if(min != nums[i]) {
				nums[i] = nums[i] ^ nums[minIndex];
				nums[minIndex] = nums[i] ^ nums[minIndex];
				nums[i] = nums[i] ^ nums[minIndex];
			}
			System.out.println("第" + (i+1) + "轮排序结果:" + Arrays.toString(nums));
		}
		long end = System.currentTimeMillis();
		System.out.println("代码执行了:" + count + "次,花费了:" + (end-start)/1000 + "秒");
		System.out.println("排序结果:" + Arrays.toString(nums));
	}	
	
	/**
	 * 使用数组下标来判断是否需要进行交换两个数
	 */
	@Test
	public void fun2() {
//		int[] nums = {9,5,4,2,8,3,169,7,6};
//		int[] nums = {1,2,3,4,5,6,7,8,9};
		int[] nums = new int[100000];
		for(int i=0; i<nums.length; i++) {
			nums[i] = (int)(Math.random() * nums.length);
		}
		//统计执行次数
		long count = 0;
		//统计执行时间
		long start = System.currentTimeMillis();
		for(int i=0; i <nums.length; i++) {
			int min = nums[i];
			int minIndex = 0;
			for(int j=i+1; j < nums.length; j++) {
				count++;
				if(min > nums[j]) {
					min = nums[j];
					minIndex = j;
				}
			}
			if(minIndex != 0) {
				nums[i] = nums[i] ^ nums[minIndex];
				nums[minIndex] = nums[i] ^ nums[minIndex];
				nums[i] = nums[i] ^ nums[minIndex];
			}
			System.out.println("第" + (i+1) + "轮排序结果:" + Arrays.toString(nums));
		}
		long end = System.currentTimeMillis();
		System.out.println("代码执行了:" + count + "次,花费了:" + (end-start)/1000 + "秒");
		System.out.println("排序结果:" + Arrays.toString(nums));
	}
	
	/**
	 * 选择排序:
	 * 	第一轮:从所有的数字中选择出一个最小的数放在第0个位置
	 * 	第二轮:从所有的数字中选择出一个最小的数放在第1个位置
	 */
	@Test
	public void fun3() {
		int[] nums = {9,1,5,4,2,5,8,3,7,6};
		for(int i=0; i <nums.length; i++) {
			for(int j=i+1; j < nums.length; j++) {
				if(nums[i] > nums[j]) {
					nums[i] = nums[i] ^ nums[j];
					nums[j] = nums[i] ^ nums[j];
					nums[i] = nums[i] ^ nums[j];
				}
			}
		}
		System.out.println(Arrays.toString(nums));
	}

}
