package com.dragonsoft.algorithm.sort;

import java.util.Arrays;

import org.junit.Test;

public class RadixSort {

	@Test
	public void fun() {
		int[] nums = {455,55,5,8,789,9,919};
//		int[] nums = {8,789};
		radixSort(nums);
	}
	
	/**
	 * 基数排序
	 * @param arr
	 */
	public static void radixSort(int[] arr){
        //第一轮排序，针对每个元素的个位进行处理
        //定义一个二维数组，每个桶就是一维数组
        //说明:
        //1.二维数组包含10个一维数组
        //2.为了防止数据溢出，则每一个一维数组(每一个桶),大小定位arr.length
        int[][] buckets = new int[10][arr.length];

        //为了记录每个桶中实际放了多少个数据，我们定义一个一维数组来记录每个桶中存放的元素的个数
        //如:bucketElementCount[0],就存放的是bucket[0]这个桶中存放的元素的个数
        int[] bucketElementCounts = new int[10];

        //得到数组中最大的值
        int max = arr[0];
        for(int t=1; t<arr.length; t++){
            if(max < arr[t]){
                max = arr[t];
            }
        }
        int maxLength = String.valueOf(max).length();

        //得到最大的位数
        for(int i=0; i<maxLength;i++){
            //第一轮，根据元素的个位进行排序
            for(int j=0; j<arr.length; j++){
                //取出每个元素十位的值
                int digitOfElement = arr[j]/(int)Math.pow(10.,i)%10;
                //放入到对应的桶中,注意，此时:bucketElementCounts[digitOfElement]=0,因为bucketElementCounts中所有元素都是0
                buckets[digitOfElement][bucketElementCounts[digitOfElement]] = arr[j];
                bucketElementCounts[digitOfElement]++;
            }
            //按照这个桶的顺序(一维数组的下标一次取出数据，放入到原数组)
            int index = 0;
            //遍历每一个桶，并将桶中的数组放入到原数组
            for(int k=0; k<buckets.length; k++){
                //如果桶中有数据,才放入到原数组
                if(bucketElementCounts[k] != 0){
                    //循环遍历该桶，即第k个桶(即第k个一维数组)
                    System.out.println("第"+(k+1)+"个桶里面有"+bucketElementCounts[k]+"个元素");
                    //bucketElementCounts记录第几个桶里面有几个元素
                    for(int l=0; l<bucketElementCounts[k];l++){
                        arr[index] = buckets[k][l];
                        index++;
                    }
                    //每个桶中有多少个元素置为0
                    bucketElementCounts[k] = 0;
                }
            }
            for(int h=0;h<buckets.length;h++) {
            	for(int x=0;x<buckets[h].length;x++) {
            		System.out.print(buckets[h][x] + "-");
            	}
            	System.out.println();
            }
            System.out.println("===============");
            System.out.println("第"+(i+1)+"次排序后结果:"+Arrays.toString(arr)); 
        }
    }
}
