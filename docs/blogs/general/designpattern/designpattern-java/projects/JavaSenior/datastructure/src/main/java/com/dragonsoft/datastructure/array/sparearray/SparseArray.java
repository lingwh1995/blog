package com.dragonsoft.datastructure.array.sparearray;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.Test;


/**
 * 稀疏数组
 * @author lingwh
 *
 */
public class SparseArray {

	@Test
	public void fun1() {
		//创建一个10行11列的二维数组
		int[][] arr = new int[10][11];
		arr[1][2] = 1;
		arr[2][4] = 2;
		//打印原始数组
		print(arr);
		System.out.println("----------------------------------------------------");
		
		int[][] sparseArray = originalArrayCastToSparseArray(arr);
		//打印转换好的稀疏数组
		print(sparseArray);
		System.out.println("----------------------------------------------------");
		
		int[][] originalArray = sparseArrayCastToOriginalArray(sparseArray);
		print(originalArray);
	}

	/**
	 * 将稀疏数组转换为原始数组
	 * @param arr 稀疏数组
	 * @return 转换好的原始的二维数组
	 */
	private int[][] sparseArrayCastToOriginalArray(int[][] sparseArray) {
		//1.根据稀疏数组第一行保存的值创建原始数组
		int[][] originalArray = new int[sparseArray[0][1]][sparseArray[0][0]];
		//2.给原始数组赋值
		for (int i=1; i<sparseArray.length; i++) {
			for (int j=0; j<sparseArray[i].length; j++) {
				originalArray[sparseArray[i][0]][sparseArray[i][1]] = sparseArray[i][2];
			}
		}
		return originalArray;
	}

	/**
	 * 将原始数组转换为稀疏数组
	 * @param arr 原始的二维数组
	 * @return 转换好的稀疏数组
	 */
	private int[][] originalArrayCastToSparseArray(int[][] arr) {
		//1.遍历原始数组，得到原始数组中有效元素个数sum
		List<Map<String, Integer>> elementInfos = getElementInfos(arr);
		//2.创建新的稀疏数组, int[][] sparseArray = new int[sum+1][3]; 
		/**
		 *  二维数组格式如下：
		 *  row	 	col   	value
		 *  总行数	总列数	有效值的个数
		 *  xxx	 	xxx   	xxx
		 */
		int[][] sparseArray = new int[elementInfos.size()+1][3]; 
		sparseArray[0][0] = arr.length;
		sparseArray[0][1] = arr[0].length;
		sparseArray[0][2] = elementInfos.size();
		for (int i=0; i<elementInfos.size(); i++) {
			sparseArray[i+1][0] = elementInfos.get(i).get("row");
			sparseArray[i+1][1] = elementInfos.get(i).get("col");
			sparseArray[i+1][2] = elementInfos.get(i).get("value");
		}
		return sparseArray;
	}

	/**
	 * 获取二维数组中存放的元素信息
	 * @param arr 二维数组
	 * @return 存放二维数组元素信息的List<Map>
	 */
	private List<Map<String,Integer>> getElementInfos(int[][] arr) {
		List<Map<String,Integer>> elementInfos = new ArrayList<Map<String,Integer>>();
		for(int i=0; i<arr.length; i++) {
			for(int j=0; j<arr[i].length; j++) {
				Map<String, Integer> elementInfo = new HashMap<String,Integer>();
				if(0 != arr[i][j]) {
					elementInfo.put("row", i);
					elementInfo.put("col", j);
					elementInfo.put("value", arr[i][j]);
					elementInfos.add(elementInfo);
				}
			}
		}
		System.out.println("数组信息为：" + elementInfos.toString());
		return elementInfos;
	}
	
	/**
	 * 遍历并打印数组
	 * @param arr 二维数组
	 */
	private void print(int[][] arr) {
		for(int i=0; i<arr.length; i++) {
			for(int j=0; j< arr[i].length; j++) {
				System.out.print(arr[i][j]+"  ");
			}
			System.out.println();
		}
	}
}
