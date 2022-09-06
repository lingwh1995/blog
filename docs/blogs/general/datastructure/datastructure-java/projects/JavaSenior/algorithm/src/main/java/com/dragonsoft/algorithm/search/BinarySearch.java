package com.dragonsoft.algorithm.search;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.junit.Test;

/**
 * 二分查找
 * 	注意:使用二分查询的前提是数组必须是有序的
 * @author lingwh
 *
 */
public class BinarySearch {
	@Test
	public void fun() {
		int[] nums = {1,2,2,3,5,7,7};
		int findValue = 3;
		//测试不使用递归二分查找一个元素
		System.out.println("不使用递归二分查找一个元素:元素" + findValue + "在数组中的索引位置是:" + binarySearchElement(nums,0,nums.length-1,findValue));
		
		//测试不使用递归二分查找多个元素
		findValue = 7;
		List<Integer> binarySearchElements = binarySearchElements(nums,0,nums.length-1,findValue);
		System.out.println("不使用递归二分查找多个元素:" + findValue + "在数组中的索引是:" + Arrays.toString(binarySearchElements.toArray()));
		
		//测试使用递归二分查找一个元素
		findValue = 3;
		System.out.println("使用递归二分查找一个元素:元素" + findValue + "在数组中的索引位置是:" + binarySearchElementRecursion(nums,0,nums.length-1,findValue));
		
		//测试使用递归二分查找多个元素
		findValue = 7;
		List<Integer> binarySearchElementsRecursion = binarySearchElementsRecursion(nums,0,nums.length-1,findValue);
		System.out.println("使用递归二分查找多个元素:" + findValue + "在数组中的索引是:" + Arrays.toString(binarySearchElementsRecursion.toArray()));
	}
	
	
	/**
	 * 不使用递归的二分查找一个元素
	 * @param arr
	 * @param left
	 * @param right
	 * @param findValue
	 * @return
	 */
	public int binarySearchElement(int[] arr, int left, int right, int findValue) {
		int middle = -1;
		while(left <= right) {
			System.out.println("left:" + left + ",right:" + right);
			middle = left + (right - left)/2;
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
	 * 不使用递归的二分查找多个元素
	 * @param arr
	 * @param left
	 * @param right
	 * @param findValue
	 * @return
	 */
	public List<Integer> binarySearchElements(int[] arr, int left, int right, int findValue) {
		List<Integer> locations = new ArrayList<>();
		int middle = -1;
		while(left <= right) {
			System.out.println("left:" + left + ",right:" + right);
			middle = left + (right - left)/2;
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
	 * 递归二分查找一个元素
	 * @param arr
	 * @param left
	 * @param right
	 * @param findValue
	 * @return
	 */
	public int binarySearchElementRecursion(int[] arr, int left, int right, int findValue) {
		System.out.println("left:" + left + ",right:" + right);
		if(left > right) {
			return -1;
		}
		int middle = left + (right - left)/2;
		int middleValue = arr[middle];
		if(findValue < middleValue) {
			return binarySearchElementRecursion(arr,left,middle-1,findValue);
		}else if(findValue > middleValue) {
			return binarySearchElementRecursion(arr,middle+1,right,findValue);
		}else {
			return middle;
		}
	}
	
	/**
	 * 递归二分查找多个元素
	 * @param arr
	 * @param left
	 * @param right
	 * @param findValue
	 * @return
	 */
	public List<Integer> binarySearchElementsRecursion(int[] arr, int left, int right, int findValue) {
		System.out.println("left:" + left + ",right:" + right);
		List<Integer> locations = new ArrayList<>();
		if(left > right) {
			return null;
		}
		int middle = left + (right - left)/2;
		int middleValue = arr[middle];
		if(findValue < middleValue) {
			return binarySearchElementsRecursion(arr,left,middle-1,findValue);
		}else if(findValue > middleValue) {
			return binarySearchElementsRecursion(arr,middle+1,right,findValue);
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
