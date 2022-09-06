package com.dragonsoft.algorithm.sort;

import java.util.Arrays;

import org.junit.Test;

/**
 * 希尔排序:是对插入排序的一种优化
 * @author lingwh
 *
 */
public class ShellSort {
	
	/**
	 * 希尔排序:底层使用插入排序
	 */
	@Test
	public void fun1() {
		int[] nums = {8,1,9,7,6,3,10};
		for(int step=nums.length/2; step>0; step/=2) {
			for(int i=step; i<nums.length; i++) {
				System.out.println(nums[i]);
				int insertValue = nums[i];
				//初始的insertIndex位于i的前一位
				int insertIndex = i-step;
				while(insertIndex >=0 && insertValue < nums[insertIndex]) {
					nums[insertIndex+step] = nums[insertIndex];
					insertIndex -=step;
				}
				if(nums[insertIndex+step] != insertValue) {
					nums[insertIndex+step] = insertValue;
				}
			}
			System.out.println("----");
		}
		System.out.println(Arrays.toString(nums));
	}
	
	/**
	 * 希尔排序:交换数据实现希尔排序
	 */
	@Test
	public void fun2() {
		int[] nums = {8,1,9,7,6,3,10};
		for(int step=nums.length/2; step>0; step/=2) {
			for(int i=step; i<nums.length; i++) {
				for(int j=i-step; j>=0; j-=step) {
					if(nums[j] > nums[j+step]) {
						nums[j] = nums[j] ^ nums[j+step];
						nums[j+step] = nums[j] ^ nums[j+step];
						nums[j] = nums[j] ^ nums[j+step];
					}
				}
			}
		}
		System.out.println(Arrays.toString(nums));
	}
}
