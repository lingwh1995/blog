package com.dragonsoft.algorithm.search;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.junit.Test;

/**
 * 线性查找/顺序查找:数组不需要是有序的
 * @author lingwh
 *
 */
public class SeqSearch {

	@Test
	public void fun() {
		int[] nums = {5,8,7,6,9,5};
		int findValue = 5;
		System.out.println("线性查找一个元素:" + findValue + "在数组中的索引是:" + seqSearchElement(nums,findValue));;
		List<Integer> locations = seqSearchElements(nums,findValue);
		locations.forEach((i)->System.out.println("线性查找多个元素:" + findValue + "在数组中的索引是:" + i));
	}
	
	/**
	 * 查找数组中的一个元素
	 * @param arr
	 * @param findValue
	 * @return
	 */
	public int seqSearchElement(int[] arr,int findValue) {
		for(int i=0;i<arr.length;i++) {
			if(findValue == arr[i]) {
				return i;
			}
		}
		return -1;
	}
	
	/**
	 * 查找数组中的一个元素
	 * @param arr
	 * @param findValue
	 * @return
	 */
	public List<Integer> seqSearchElements(int[] arr,int findValue) {
		List<Integer> locations = new ArrayList<>();
		for(int i=0;i<arr.length;i++) {
			if(findValue == arr[i]) {
				locations.add(i);
			}
		}
		return locations;
	}
}
