package com.dragonsoft.datastructure.stack;

import org.junit.Test;

/**
 * 逆波兰计算器
 * @author lingwh
 *
 */
public class ReversePolishCalculatorTest {
	
	//  1+2 ==》 1 2 +
	//  1+2*9 ==》 1 2 9 * +
	//	2*8+16/4 ==> 2 8 * 16 4 / +
	//	2.0*8+16.0/4 ==> 2.0 8 * 16.0 4 / +
	//	(2*8)+16/4 ==> 2 8 * 16 4 / +
	//	2*(8+16)/4 ==> 2 8 16 + * 4 /
	
	/**
	 * 测试只能计算一位数加减乘除的逆波兰计算器
	 */
	@Test
	public void fun1() {
		ReversePolishCalculator reversePolishCalculator = new ReversePolishCalculator();
		String expression = "1+2";
		//获取逆波兰表达式
		String reversePolishExpression = 
				reversePolishCalculator.middleExpressionToReversePolish1to9(expression);
		System.out.println("转换后得到的逆波兰表达式:" + reversePolishExpression);
		//进行计算
		reversePolishCalculator.calc(reversePolishExpression);
	}
	
	/**
	 * 测试计算两位和两位以上数加减乘除的逆波兰计算器
	 */
	@Test
	public void fun2() {
		ReversePolishCalculator reversePolishCalculator = new ReversePolishCalculator();
		String expression = "2.0*8+16.0/4";
		//获取逆波兰表达式
		String reversePolishExpression = 
				reversePolishCalculator.middleExpressionToReversePolishAny(expression);
		System.out.println("转换后得到的逆波兰表达式:" + reversePolishExpression);
		//进行计算
		reversePolishCalculator.calc(reversePolishExpression);
	}
	
	/**
	 * 测试计算两位和两位以上数(带有括号)加减乘除的逆波兰计算器
	 */
	@Test
	public void fun3() {
		ReversePolishCalculator reversePolishCalculator = new ReversePolishCalculator();
		String expression = "(((2*(8+16)/4)+1)+1)+1";
		//获取逆波兰表达式
		String reversePolishExpression = reversePolishCalculator.middleExpressionToReversePolishAnyWithBrackets(expression);
		System.out.println("转换后得到的逆波兰表达式:" + reversePolishExpression);
		//进行计算
		reversePolishCalculator.calc(reversePolishExpression);
	}
}
