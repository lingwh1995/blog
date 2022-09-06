package com.dragonsoft.algorithm.recursion;

import org.junit.Test;

/**
 * 递归
 * @author lingwh
 *
 */
public class Recursion {

	@Test
	public void fun1() {
		printNum1(1,100);
	}
	
	@Test
	public void fun2() {
		printNum2(100,200);
		printNum2(100,200);
	} 
	
	@Test
	public void fun3() {
		printNum3(100);
	} 
	
	/**
	 * 测试获取斐波那契数列的第n个数,打印斐波那契数列的前n个数
	 */
	@Test
	public void fun4() {
		for(int i=0; i<10; i++) {
			int fibonacciNumber = fibonacci(i);
			System.out.print(fibonacciNumber +",");
		}
	} 
	
	/**
	 * 测试求前n个数的和
	 */
	@Test
	public void fun5() {
		int n = 100;
		int sum = sum(n);
		System.out.println("前"+n+"个数的和为:" + sum);
	} 
	
	/**
	 * 测试求前n个数的积
	 */
	@Test
	public void fun6() {
		int n = 10;
		int multiplicae = multiplicae(n);
		System.out.println("前"+n+"个数的积为:" + multiplicae);
	} 
	
	

	/**
	 * 递归打印1-100
	 * @param begin
	 * @param end
	 */
	private void printNum1(int begin,int end) {
		if(begin > end) {
			return;
		}
		System.out.println(begin);
		printNum1(++begin,end);
	}
	
	/**
	 * 递归打印1-100
	 * @param begin
	 * @param end
	 */
	private void printNum2(int begin,int end) {
		if(begin <= end) {
			System.out.println(begin);
			printNum2(++begin,end);
		}
	}
	
	/**
	 * 递归打印1-100
	 * @param begin
	 * @param end
	 */
	public void printNum3(int n) {
		if(n >= 2) {
			printNum3(n-1);
		}
		System.out.println(n);
	}
	
	/**
	 * 获取斐波那契数列第n个数的值
	 * 	0,1,1,2,3,5,8,13...
	 * @param n
	 */
	public int fibonacci(int n) {
		if(n < 2) { 
			return n;
		}
		return fibonacci(n-1) + fibonacci(n-2);
	}
	
	/**
	 * 求前n个数的和
	 * @param i
	 */
	private int sum(int n) {
		if(n == 1) {
			return n;
		}
		return sum(n-1) + n;
	}
	
	/**
	 * 求前n个数的积极
	 * @param i
	 */
	private int multiplicae(int n) {
		if(n == 1) {
			return n;
		}
		return multiplicae(n-1) * n;
	}
}
