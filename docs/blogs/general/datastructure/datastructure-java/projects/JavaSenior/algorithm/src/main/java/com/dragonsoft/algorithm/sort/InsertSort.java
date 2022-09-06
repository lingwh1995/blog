package com.dragonsoft.algorithm.sort;

import java.util.Arrays;

import org.junit.Test;

/**
 * 插入排序
 * @author lingwh
 *
 */
public class InsertSort {
	
	/**
	 * 插入排序:内存循环最好使用while,方便设置多个循环条件
	 */
	@Test
	public void fun() {
		int[] nums = {3,1,5,2};
		for(int i=0; i<nums.length; i++) {
			int insertValue = nums[i];
			//初始的insertValue索引的前一位
			int insertIndex = i-1;
			while(insertIndex >=0 && insertValue < nums[insertIndex]) {
				nums[insertIndex+1] = nums[insertIndex];
				insertIndex--;
			}
			//为什么insertIndex要+1,因为第i和数第一次和第i-1个数做对比,此时的索引指向的是第i-1个数,--后指向的是第i-1个数的前一个数,所以最终找到的是索引的前一个位置,所以插入时要+1
			if(nums[insertIndex+1] != insertValue) {
				nums[insertIndex+1] = insertValue;
			}
		}
		System.out.println(Arrays.toString(nums));
	}
	
}
