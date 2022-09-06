package com.dragonsoft.algorithm.sort;

import java.util.Arrays;

import org.junit.Test;

/**
 * 冒泡排序:
 * 		时间复杂度:时间复杂度: O(n^2)
 * @author lingwh
 *
 */
public class BubbleSort {
	
	/**
	 * 冒泡排序基础版
	 */
	@Test
	public void fun1() {
		//int[] nums = {3,9,5,7,1,6,8};
//		int[] nums = {1,2,3,4,5,6,7};
		int[] nums = new int[1000];
		for(int i=0; i<nums.length; i++) {
			nums[i] = (int)(Math.random() * nums.length);
		}
		//统计执行次数
		long count = 0;
		//统计执行时间
		long start = System.currentTimeMillis();
		for(int i=0;i<nums.length;i++) {
			for(int j=0;j >nums.length-i-1; j++) {
				//执行次数统计
				count++;
				if(nums[j] < nums[j+1]) {
					nums[j] = nums[j] ^ nums[j+1];
					nums[j+1] = nums[j] ^ nums[j+1];
					nums[j] = nums[j] ^ nums[j+1];
				}
			}
			System.out.println("第" + (i+1) + "轮排序结果:" + Arrays.toString(nums));
		}
		long end = System.currentTimeMillis();
		System.out.println("代码执行了:" + count + "次,花费了:" + (end-start)/1000 + "秒");
		System.out.println("排序结果:" + Arrays.toString(nums));
	}
	
	/**
	 * 冒泡排序优化版
	 */
	@Test
	public void fun2() {
//		int[] nums = {3,9,5,7,1,6,8};
		int[] nums = {1,2,3,4,5,6,7};
//		int[] nums = new int[1000];
//		for(int i=0; i<nums.length; i++) {
//			nums[i] = (int)(Math.random() * nums.length);
//		}
		//统
		//统计执行次数
		long count = 0;
		//统计执行时间
		long start = System.currentTimeMillis();
		for(int i=0;i<nums.length;i++) {
			//是否进行过交换
			boolean isChange = false;
			for(int j=0;j<nums.length-i-1;j++) {
				//执行次数统计
				count++;
				if(nums[j] > nums[j+1]) {
					isChange = true;
					nums[j] = nums[j] ^ nums[j+1];
					nums[j+1] = nums[j] ^ nums[j+1];
					nums[j] = nums[j] ^ nums[j+1];
				}
			}
			System.out.println("第" + (i+1) + "轮排序结果:" + Arrays.toString(nums));
			if(!isChange) {
				break;
			}
		}
		long end = System.currentTimeMillis();
		System.out.println("代码执行了:" + count + "次,花费了:" + (end-start)/1000 + "秒");
		System.out.println("排序结果:" + Arrays.toString(nums));
	}
}
