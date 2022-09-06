package com.dragonsoft.designpattern.action.strategy.jdk;

import java.util.Arrays;
import java.util.Comparator;

import org.junit.Test;

public class ComparatorTest {

	/**
	 * Arrays.sort(a,c)中的策略模式,为Comparator接口创建不同的子类,相当于不同的策略对象
	 * 	使用的时候直接调用Comparator接口中compare(a,b)方法进行比较
	 */
	@Test
	public void fun() {
		Integer[] nums = {1,9,2,3,5};
		Comparator<Integer> comparator = new Comparator<Integer>() {
			@Override
			public int compare(Integer a, Integer b) {
				//返回-1放左边,返回1放右边,返回0保持不变
				if(a>b) {
					return 1;
				}else if(a<b){
					return -1;
				}else {
					return 0;
				}
			}
		};
		Arrays.sort(nums, comparator);
		System.out.println(Arrays.toString(nums));
	}
}
