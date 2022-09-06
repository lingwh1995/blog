package com.dragonsoft.algorithm.search;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.junit.Test;

/*
 * 二分查找算法:
 * 		middle值: int middle = left + (right - left)/2;
 * 插值查找算法:和插值查找算法步骤相同,求取middle值的方法是不同的,是对二分查找算法的优化
 * 		middle值: int middle = left + (findValue-arr[left])/(arr[right] - arr[left])*(right - left);	
 * 什么时候使用?
 * 		1.对于数据量较大,关键字分别比较均匀的查找表来说,采用插值查找,速度比较快
 *  	2.数据分布不均匀的情况下,该方法不一定比折半查找要好 
 */
public class InsertSearch {
	@Test
	public void fun() {
		int[] nums = {1,2,2,3,5,7,7};
		int findValue = 3;
		//测试不使用递归插值查找一个元素
		System.out.println("不使用递归插值查找一个元素:元素" + findValue + "在数组中的索引位置是:" + insertSearchElement(nums,0,nums.length-1,findValue));
		
		//测试不使用递归插值查找多个元素
		findValue = 7;
		List<Integer> insertSearchElements = insertSearchElements(nums,0,nums.length-1,findValue);
		System.out.println("不使用递归插值查找多个元素:" + findValue + "在数组中的索引是:" + Arrays.toString(insertSearchElements.toArray()));
		
		//测试使用递归插值查找一个元素
		findValue = 3;
		System.out.println("使用递归插值查找一个元素:元素" + findValue + "在数组中的索引位置是:" + insertSearchElementRecursion(nums,0,nums.length-1,findValue));
		
		//测试使用递归插值查找多个元素
		findValue = 7;
		List<Integer> insertSearchElementsRecursion = insertSearchElementsRecursion(nums,0,nums.length-1,findValue);
		System.out.println("使用递归插值查找多个元素:" + findValue + "在数组中的索引是:" + Arrays.toString(insertSearchElementsRecursion.toArray()));
	}
	
	
	/**
	 * 不使用递归的插值查找一个元素
	 * @param arr
	 * @param left
	 * @param right
	 * @param findValue
	 * @return
	 */
	public int insertSearchElement(int[] arr, int left, int right, int findValue) {
		int middle = -1;
		while(left <= right) {
			System.out.println("left:" + left + ",right:" + right);
			middle = left + (findValue-arr[left])/(arr[right] - arr[left])*(right - left);	
			int middleValue = arr[middle];
			if(findValue < middleValue) {
				right = middle-1;
			}else if(findValue > middleValue) {
				left = middle+1;
			}else {
				return middle;
			}
		}
		return middle;
	}
	
	/**
	 * 不使用递归的插值查找多个元素
	 * @param arr
	 * @param left
	 * @param right
	 * @param findValue
	 * @return
	 */
	public List<Integer> insertSearchElements(int[] arr, int left, int right, int findValue) {
		List<Integer> locations = new ArrayList<>();
		int middle = -1;
		while(left <= right) {
			System.out.println("left:" + left + ",right:" + right);
			middle = left + (findValue-arr[left])/(arr[right] - arr[left])*(right - left);	
			int middleValue = arr[middle];
			if(findValue < middleValue) {
				right = middle-1;
			}else if(findValue > middleValue) {
				left = middle+1;
			}else {
				int leftValueEqualIndex = middle - 1;
				//向左边扫描与arr[middle]值相同的数字的index
				while(true) {
					if(leftValueEqualIndex <0 || arr[leftValueEqualIndex] != arr[middle]) {
						break;
					} 
					locations.add(leftValueEqualIndex);
					leftValueEqualIndex--;
				}
				locations.add(middle);
				//向右边扫描与arr[middle]值相同的数字的index
				int rightValueEqualIndex = middle + 1;
				while(true) {
					if(rightValueEqualIndex >= arr.length|| arr[rightValueEqualIndex] != arr[middle]) {
						break;
					} 
					locations.add(rightValueEqualIndex);
					rightValueEqualIndex++;
				}
				return locations;
			}
		}
		return locations;
	}
	
	/**
	 * 递归插值查找一个元素
	 * @param arr
	 * @param left
	 * @param right
	 * @param findValue
	 * @return
	 */
	public int insertSearchElementRecursion(int[] arr, int left, int right, int findValue) {
		System.out.println("left:" + left + ",right:" + right);
		if(left > right) {
			return -1;
		}
		int middle = left + (findValue-arr[left])/(arr[right] - arr[left])*(right - left);
		int middleValue = arr[middle];	
		if(findValue < middleValue) {
			return insertSearchElementRecursion(arr,left,middle-1,findValue);
		}else if(findValue > middleValue) {
			return insertSearchElementRecursion(arr,middle+1,right,findValue);
		}else {
			return middle;
		}
	}
	
	/**
	 * 递归插值查找多个元素
	 * @param arr
	 * @param left
	 * @param right
	 * @param findValue
	 * @return
	 */
	public List<Integer> insertSearchElementsRecursion(int[] arr, int left, int right, int findValue) {
		System.out.println("left:" + left + ",right:" + right);
		List<Integer> locations = new ArrayList<>();
		if(left > right) {
			return null;
		}
		int middle = left + (findValue-arr[left])/(arr[right] - arr[left])*(right - left);	
		int middleValue = arr[middle];
		if(findValue < middleValue) {
			return insertSearchElementsRecursion(arr,left,middle-1,findValue);
		}else if(findValue > middleValue) {
			return insertSearchElementsRecursion(arr,middle+1,right,findValue);
		}else {
			int leftValueEqualIndex = middle - 1;
			//向左边扫描与arr[middle]值相同的数字的index
			while(true) {
				if(leftValueEqualIndex <0 || arr[leftValueEqualIndex] != arr[middle]) {
					break;
				} 
				locations.add(leftValueEqualIndex);
				leftValueEqualIndex--;
			}
			locations.add(middle);
			//向右边扫描与arr[middle]值相同的数字的index
			int rightValueEqualIndex = middle + 1;
			while(true) {
				if(rightValueEqualIndex >= arr.length|| arr[rightValueEqualIndex] != arr[middle]) {
					break;
				} 
				locations.add(rightValueEqualIndex);
				rightValueEqualIndex++;
			}
		}
		return locations;
	}
}
