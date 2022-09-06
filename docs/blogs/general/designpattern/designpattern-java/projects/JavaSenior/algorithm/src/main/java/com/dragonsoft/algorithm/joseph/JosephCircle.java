package com.dragonsoft.algorithm.joseph;

import java.util.ArrayList;

/**
 * 数组解决约瑟夫问题
 * @author lingwh
 *
 */
public class JosephCircle {
	
	/**
	 *  模拟约瑟夫环出圈：
	 *  1 2 3 4 5 6 7 8 9 10
	 *	1 2 4 5 6 7 8 9 10			3
	 *	1 2 4 5 7 8 9 10			3	6
	 *	1 2 4 5 7 8 10				3	6	9
	 *	1 4 5 7 8 10				3	6	9	2
	 *	1 4 5 8 10					3	6	9	2	7
	 *	4 5 8 10					3	6	9	2	7	1
	 *	4 5 10						3	6	9	2	7	1	8
	 *	4 10						3	6	9	2	7	1	8	5
	 *	10							3	6	9	2	7	1	8	5	10
	 *	4							3	6	9	2	7	1	8	5	10	4
	 */

	/**
	 * ArrayList实现约瑟夫环
	 * @param n	总共n个人在玩游戏
	 * @param m	从1开始报数，报到m的人出圈
	 */
	public static void josephCircileArrayList(int n, int m) {
		//创建模拟约瑟夫的环的ArrayList,0代表在圈内,1代表出圈
		ArrayList<Integer> members = new ArrayList<Integer>();
		for(int i=1; i<=n; i++) {
			members.add(i);
		}
		int k = 0;
		while(members.size() > 0) {
			k = k + m;
			//第m人的索引位置
			k = k % members.size() - 1;
			//判断是否到约瑟夫环的尾部
			if(k<0) {
				System.out.println(members.remove(members.size()-1));
				k = 0;
			}else {
				System.out.println(members.remove(k));
			}
		}
	}
	
	/**
	 * 数组实现约瑟夫环(经典实现)
	 * @param n	总共n个人在玩游戏
	 * @param m	从1开始报数，报到m的人出圈
	 */
	public static void josephCircileArray(int n,int m) {
		//0表示在圈内，1表示出圈
		int[] members = new int[n+1];
		//当前报数的人的编号
		int c = 0;
		//记录当前出圈的总人数
		int o = 0;
		//统计从当前出圈个一个人开始报数的时候时候又报到了第m个位置
		int k = 0;
		while(o != n) {
			c++;
			if(c>n) { c = 1; }
			if(members[c] == 0) {
				//k表示当前编号的c的人报数为k
				k++;
				//当这个人报数到了m
				if(k==m) {
					//出圈
					members[c] = 1;
					//打印出圈的人的编号
					System.out.println(c);
					//出圈的总人数+1
					o++;
					//使下一个人从1开始报数
					k = 0;
				}
			}
		}
		System.out.println("最后出圈的人的编号是:"+c);
	}
}
