package com.dragonsoft.algorithm.sort;

import java.util.Arrays;

import org.junit.Test;

/**
 * 归并排序
 * @author lingwh
 *
 */
public class MergeSort {

	@Test
	public void fun() {
		int[] nums = {9,6,8,5,4,7,2,1,3};
		int[] temp = new int[nums.length];
		mergeSort(nums,0,nums.length-1,temp);
		System.out.println(Arrays.toString(nums));
	}
	
	/**
	 * 分+合并的方法
	 * @param nums 要和进行合并操作的数组
	 * @param left 要和进行合并操作数组第一个元素的索引
	 * @param right 要和进行合并操作数组最后一个元素的索引
	 * @param temp 中间数组
	 */
	public void mergeSort(int[] nums,int left,int right,int[] temp) {
		System.out.println("left:" + left +",right:" + right);
		//当左右指针重合的时候,说明数组不能再被分割
		if(left >= right) {
			return;
		}
		int middle = (left + right)/2;
		//向左递归分解
		mergeSort(nums, left, middle, temp);
		//向右递归分解
		mergeSort(nums, middle+1, right, temp);
        System.out.println("left:" + left);
        System.out.println("mid:" + middle);
        System.out.println("right:" + right);
		//合并数组
		merge(nums,left,right,middle,temp);
	}
	    
	/**
	 * 合并的方法
	 * @param nums 要和进行合并操作的数组
	 * @param left 要和进行合并操作数组第一个元素的索引
	 * @param right 要和进行合并操作数组最后一个元素的索引
	 * @param middle 要和进行合并操作数组中间元素的索引
	 * @param temp 中间数组
	 */
	public void merge(int[] nums,int left,int right,int middle,int[] temp) {
		System.out.println(Arrays.toString(nums));
		int i = left;
		int j = middle + 1;
		int t = 0;
		//把左边数组中或者右边数组中的值放入到temp数组中
		while(i <= middle && j <= right) {
			if(nums[i] <= nums[j]) {
				temp[t] = nums[i];
				i++;
				t++;
			}else {
				temp[t] = nums[j];
				j++;
				t++;
			}
		}
		//把左边数组剩余的数字放入temp中
		while(i <= middle) {
			temp[t] = nums[i];
			i++;
			t++;
		}
		//把右边数组剩余的数字放入temp中
		while(j <= right) {
			temp[t] = nums[j];
			j++;
			t++;
		}
		//将temp数组中的元素拷贝到原数组
		//注意:不是每次都拷贝所有
		t=0;
		int tempLeft = left; 
		while(tempLeft <= right) {
			nums[tempLeft] = temp[t];
			t++;
			tempLeft++;
		}
	}
}
