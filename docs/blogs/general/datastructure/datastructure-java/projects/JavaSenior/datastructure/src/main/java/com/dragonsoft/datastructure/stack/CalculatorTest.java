package com.dragonsoft.datastructure.stack;


import org.junit.Test;

public class CalculatorTest {
	
	/**
	 * 测试10以内包括10的加减乘除运算
	 */
	@Test
	public void fun1() {
		Calculator calculator = new Calculator();
		String expression = "1+2+5/5";
		calculator.calcExpression1to9(expression);	
	}
	
	/**
	 * 测试任意位数数字加减乘除运算
	 */
	@Test
	public void fun2() {
		Calculator calculator = new Calculator();
//		String expression = "50+5*5+500/20+900-500";
		String expression = "12+2+5/5";
		calculator.calcExpressionAny(expression);
	}
	
	/**
	 * 测试任意位数数字加减乘除运算(可以运算带有括号的表达式)
	 */
	@Test
	public void fun3() {
		Calculator calculator = new Calculator();
		String expression = "(10*2+5*(15-5))/2+(10+(2*(10+10)))/10+1000";
		calculator.calcExpressionAnyWithBrackets(expression);
	}
	
	@Test
	public void fun4() {
		Calculator calculator = new Calculator();
//		String expression = "1.11+2.0";
		String expression = "(5+3*(10/2.5))/2+1000";
		calculator.calcExpressionAnyWithBracketsAndDecimal(expression);
	}
	
	@Test
	public void fun5() {
		String expression = "123.6+78+9";
		formatPrint2(expression);
	}
	
	
	/**
	 * 字符串格式化输出
	 * 输出为123.6+78+9 => 
	 * 					123.6 
	 * 					78 
	 * 					9
	 * 	    
	 *      
	 * @param expression
	 */
	private void formatPrint2(String expression) {
		int beginIndex = 0;
		int endIndex = 0;
		for(int index=0;index<expression.length();index++) {
			if(index == expression.length()-1 || isOperator(expression.charAt(index+1))) {
				endIndex = index;
				String completeNum = expression.substring(beginIndex, endIndex+1);
				beginIndex = endIndex+2;
				System.out.println(completeNum);
			}
		}
	}
	
	/**
	 * 字符串格式化输出
	 * 输出为123.6+78+9 => 
	 * 					123.6 
	 * 					78 
	 * 					9
	 * 	    
	 *      
	 * @param expression
	 */
	private void formatPrint1(String expression) {
		StringBuilder completeNum = new StringBuilder();
		for(int index=0;index<expression.length();index++) {
			if(!isOperator(expression.charAt(index))) {
				completeNum.append(expression.charAt(index));
			}
			if(index == expression.length()-1 || isOperator(expression.charAt(index+1))) {
				System.out.println(completeNum);
				completeNum.setLength(0);
			}
		}
	}
	
	/**
	 * 判断是不是操作符
	 * @param c
	 * @return
	 */
	private boolean isOperator(char c) {
		boolean isOperator = false;
		if(c == '+' || c == '-' || c == '*' || c == '/'|| c == '('|| c==')') {
			isOperator = true;
		}
		return isOperator;
	}
	
}
