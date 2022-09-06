package com.dragonsoft.algorithm.sort;

import java.util.Arrays;

import org.junit.Test;

/**
 * 快速排序
 * @author lingwh
 *
 */
public class QuickSort {


	@Test
	public void fun() {
		int[] nums = {5,7,4};
		quickSort1(nums,0,nums.length-1);
		System.out.println(Arrays.toString(nums));
	}

	/**
	 * 快速排序:以中间值为pivote
	 * @param nums
	 * @param left
	 * @param right
	 */
	public void quickSort(int[] nums,int left,int right) {
		int l = left;
		int r = right;
		int pivote = nums[(left+right)/2];
		while(l<r) {
			while(nums[l]<pivote) {
				l++;
			}
			while(nums[r]>pivote) {
				r--;
			}
			if(l >= r) {
				break;
			}
			nums[l] = nums[l] ^ nums[r];
			nums[r] = nums[l] ^ nums[r];
			nums[l] = nums[l] ^ nums[r];
			if(nums[l] == pivote) {
				r--;
			}
			if(nums[r] == pivote) {
				l++;
			}
		}
		if(l == r) {
			l++;
			r--;
		}
		//向右递归
        if (right>l){
        	quickSort(nums, l, right);
        }
		//向左递归
        if (left<r){
        	quickSort(nums, left, r);
        }
	}
    
	/**
	 * 快速排序方法:以左值为pivote
	 * @param nums
	 * @param left
	 * @param right
	 */
    public void quickSort1(int[] nums, int left, int right) {
    	System.out.println("left:" + left+",right:" + right);
        if(left > right) {
            return;
        }
        //pivote的值总是数组中的0个元素的值,第0个元素的下标是left的值
        int pivote = nums[left];
        int l = left;
        int r = right;
        while(l < r) {
            while(nums[r] >= pivote && l < r) {
                r--;
            }
        	//得出l的最小值是0
        	System.out.println("l:" + l);
            while(nums[l] <= pivote && l < r) {
                l++;
            }
            //得出r的最大值是nums.length-1 = 8
            System.out.println("r:" + r);
            if(l < r) {
            	nums[l] = nums[l] ^ nums[r];
    			nums[r] = nums[l] ^ nums[r];
    			nums[l] = nums[l] ^ nums[r];
            }
        }
        nums[left] = nums[l];
        nums[l] = pivote;
        quickSort1(nums, l + 1, right);
        quickSort1(nums, left, r - 1);
    }

}
