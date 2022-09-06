package com.dragonsoft.datastructure.stack;

public class Calculator {
	
	/**
	 * 获取运算符对应的优先级
	 * @param operator
	 * @return
	 */
	private int getPriority(int operator) {
		if(operator == '(' || operator == ')') {
			return 2;
		}else if(operator == '*' || operator == '/') {
			return 1;
		}else if(operator == '+' || operator == '-') {
			return 0;
		}else {
			return -1;
		}
	}
	
	/**
	 * 判度是否为运算符
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
	
	
	/**
	 * 根据传入的两个int类型数字和操作符,计算出结果
	 * @param num1
	 * @param num2
	 * @param operator
	 * @return
	 */
	private int calc(int num1,int num2,int operator) {
		int result = 0;
		switch (operator) {
		case '+':
			result = num2 + num1;
			break;
		case '-':
			result = num2 - num1;
			break;
		case '*':
			result = num2 * num1;
			break;
		case '/':
			result = num2 / num1;
			break;
		default:
			break;
		}
		return result;
	}
	
	/**
	 * 计算表达式:只能计算一位数字以内加减乘除 
	 * @param expression
	 */
	public void calcExpression1to9(String expression) {
		int result = 0;
		//保存数字的栈
		ArrayStack numStack = new ArrayStack(10);
		//保存运算符号的栈
		ArrayStack operatorStack = new ArrayStack(10);
		int index = 0;
		//扫描表达式
		while(true) {
			char c = expression.substring(index,index+1).charAt(0);
			//该字符是运算符号
			if(isOperator(c)) {
				if(operatorStack.isEmpty()) {
					operatorStack.push(c);
				}else {
					if(getPriority(c) <= getPriority(operatorStack.peek())) {
						int num1 = numStack.pop();
						int num2 = numStack.pop();
						int operator = operatorStack.pop();
						result = calc(num1,num2,operator);
						numStack.push(result);
						//把当前操作符入符号栈
						operatorStack.push(c);
					}else {
						operatorStack.push(c);
					}
				}
			}else {
				//入栈之前把字符类型数字转换为int类型数字 '1' -> 1
				numStack.push(c - 48);
			}
			index++;
			if(index >= expression.length()) {
				break;
			}
		}
		//当扫扫描表达式完成后，进行计算
		while(! operatorStack.isEmpty()) {
			int num1 = numStack.pop();
			int num2 = numStack.pop();
			int operator = operatorStack.pop();
			result = calc(num1,num2,operator);
			numStack.push(result);
		}
		System.out.println(expression + "=" + numStack.pop());
	}
	
	/**
	 * 计算表达式:可以计算两位或者两位以上数字的加减乘除
	 * @param expression
	 */
	public void calcExpressionAny(String expression) {
		int result = 0;
		//保存数字的栈
		ArrayStack numStack = new ArrayStack(10);
		//保存运算符号的栈
		ArrayStack operatorStack = new ArrayStack(10);
		int index = 0;
		//统计该数字是几位数
		int numCountIndex = 0;
		//扫描表达式
		while(true) {
			char c = expression.substring(index,index+1).charAt(0);
			//该字符是运算符号
			if(isOperator(c)) {
				numCountIndex = 0;
				if(operatorStack.isEmpty()) {
					operatorStack.push(c);
				}else {
					if(getPriority(c) <= getPriority(operatorStack.peek())) {
						int num1 = numStack.pop();
						int num2 = numStack.pop();
						int operator = operatorStack.pop();
						result = calc(num1,num2,operator);
						numStack.push(result);
						//把当前操作符入符号栈
						operatorStack.push(c);
					}else {
						operatorStack.push(c);
					}
				}
			}else {
				numCountIndex++;
				if(numCountIndex >1) {
					String completeNumStr = String.valueOf(numStack.pop()) + String.valueOf(c);
					int completeNum = Integer.parseInt(completeNumStr);
					numStack.push(completeNum);
				}else {
					//入栈之前把字符类型数字转换为int类型数字 '1' -> 1
					numStack.push(c - 48);
				}
			}
			index++;
			if(index >= expression.length()) {
				break;
			}
		}
		//当扫扫描表达式完成后，进行计算
		while(! operatorStack.isEmpty()) {
			int num1 = numStack.pop();
			int num2 = numStack.pop();
			int operator = operatorStack.pop();
			result = calc(num1,num2,operator);
			numStack.push(result);
		}
		System.out.println(expression + "=" + numStack.pop());
	}
	
	/**
	 * 计算表达式:计算两位或两位以上数字加减乘除,并且可以处理带有括号的情况
	 * @param expression
	 */
	public void calcExpressionAnyWithBrackets(String expression) {
		int result = 0;
		//保存数字的栈
		ArrayStack numStack = new ArrayStack(10);
		//保存运算符号的栈
		ArrayStack operatorStack = new ArrayStack(10);
		int index = 0;
		int numCountIndex = 0;
		//扫描表达式
		while(true) {
			char c = expression.substring(index,index+1).charAt(0);
			//该字符是运算符号
			if(isOperator(c)) {
				numCountIndex = 0;
				if(operatorStack.isEmpty()) {
					operatorStack.push(c);
				}else {
					if(getPriority(c) <= getPriority(operatorStack.peek())  
							&& operatorStack.peek() != '(') {
						int num1 = numStack.pop();
						int num2 = numStack.pop();
						int operator = operatorStack.pop();
						result = calc(num1,num2,operator);
						numStack.push(result);
						//把当前操作符入符号栈
						operatorStack.push(c);
						
						//进行右括号的判断，匹配左括号。当发现进入的是右括号时就优先进行括号内的计算
					}else if(c == ')'){
						while(true) {
							//右括号								
							int num1 = numStack.pop();
							int num2 = numStack.pop();
							int operator = operatorStack.pop();
							result = calc(num1,num2,operator);
							//把运算的结果入数栈
							numStack.push(result);
							//当运算到栈顶符号为左括号时候，就弹出栈顶元素左括号，结束循环
							if(operatorStack.peek() == 	'(') {
								operatorStack.pop();									
								break;
							}
						}				
					}else {
						operatorStack.push(c);
					}
				}
			}else {
				numCountIndex++;
				if(numCountIndex >1) {
					String completeNumStr = String.valueOf(numStack.pop())+expression.substring(index,index+1);
					int completeNum = Integer.parseInt(completeNumStr);
					numStack.push(completeNum);
				}else {
					//入栈之前把字符类型数字转换为int类型数字 '1' -> 1
					numStack.push(c - 48);
				}
			}
			index++;
			if(index >= expression.length()) {
				break;
			}
		}
		//当扫扫描表达式完成后，进行计算
		while(! operatorStack.isEmpty()) {
			int num1 = numStack.pop();
			int num2 = numStack.pop();
			int operator = operatorStack.pop();
			result = calc(num1,num2,operator);
			numStack.push(result);
		}
		System.out.println(expression + "=" + numStack.pop());
	}
	
	/**
	 * 根据传入的两个double类型数字和操作符,计算出结果
	 * @param num1
	 * @param num2
	 * @param operator
	 * @return
	 */
	private double calc(double num1,double num2,int operator) {
		double result = 0;
		switch (operator) {
		case '+':
			result = num2 + num1;
			break;
		case '-':
			result = num2 - num1;
			break;
		case '*':
			result = num2 * num1;
			break;
		case '/':
			result = num2 / num1;
			break;
		default:
			break;
		}
		return result;
	}
	
	/**
	 * 计算表达式:计算两位或两位以上数字加减乘除,并且可以处理带有括号的情况,并且可以处理小数
	 * 	多位数和小数处理使用了新的思路
	 * @param expression
	 */
	public void calcExpressionAnyWithBracketsAndDecimal(String expression) {
		double result = 0;
		//保存数字的栈
		ArrayStackGeneric<Double> numStack = new ArrayStackGeneric<Double>(10);
		//保存运算符号的栈
		ArrayStack operatorStack = new ArrayStack(10);
		int index = 0;
		StringBuilder completeNum = new StringBuilder();
		//扫描表达式
		while(true) {
			char c = expression.substring(index,index+1).charAt(0);
			//该字符是运算符号
			if(isOperator(c)) {
				if(operatorStack.isEmpty()) {
					operatorStack.push(c);
				}else {
					if(getPriority(c) <= getPriority(operatorStack.peek())  
							&& operatorStack.peek() != '(') {
						double num1 = numStack.pop();
						double num2 = numStack.pop();
						int operator = operatorStack.pop();
						result = calc(num1,num2,operator);
						numStack.push(result);
						//把当前操作符入符号栈
						operatorStack.push(c);
						//进行右括号的判断，匹配左括号。当发现进入的是右括号时就优先进行括号内的计算
					}else if(c == ')'){
						while(true) {
							//右括号								
							double num1 = numStack.pop();
							double num2 = numStack.pop();
							int operator = operatorStack.pop();
							result = calc(num1,num2,operator);
							//把运算的结果入数栈
							numStack.push(result);
							//当运算到栈顶符号为左括号时候，就弹出栈顶元素左括号，结束循环
							if(operatorStack.peek() == 	'(') {
								operatorStack.pop();									
								break;
							}
						}				
					}else {
						operatorStack.push(c);
					}
				}
			}else {
				completeNum.append(c);
				if(index == expression.length()-1 || isOperator(expression.charAt(index+1))) {
					numStack.push(Double.parseDouble(String.valueOf(completeNum)));
					completeNum.setLength(0);
				}
			}
			index++;
			if(index >= expression.length()) {
				break;
			}
		}
		//当扫扫描表达式完成后，进行计算
		while(! operatorStack.isEmpty()) {
			double num1 = numStack.pop();
			double num2 = numStack.pop();
			int operator = operatorStack.pop();
			result = calc(num1,num2,operator);
			numStack.push(result);
		}
		System.out.println(expression + "=" + numStack.pop());
	}
}
