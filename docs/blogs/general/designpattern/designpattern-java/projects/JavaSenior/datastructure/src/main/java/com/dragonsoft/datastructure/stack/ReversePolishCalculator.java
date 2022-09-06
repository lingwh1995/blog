package com.dragonsoft.datastructure.stack;


/**
 * 逆波兰计算器
 * @author lingwh
 *
 */
public class ReversePolishCalculator {
	
	/**
	 * 获取运算符符的优先级
	 * @param operator
	 * @return
	 */
	private int getPriority(String operator) {
		if(operator.equals("*") || operator.equals("/")) {
			return 2;
		}else if(operator.equals("+") || operator.equals("-")) {
			return 1;
		}else {
			return 0;
		}
	}
	
	/**
	 * 判断字符是否为运算符
	 * @param s
	 * @return
	 */
	private boolean isOperator(String s) {
		boolean isOperator = false;
		if(s.equals("*") || s.equals("/") 
				||s.equals("+") || s.equals("-")
				||s.equals("(") || s.equals(")")) {
			isOperator = true;
		}
		return isOperator;
	}

	/**
	 * 中缀表达式转为逆波兰表达式:不能处理带有括号和数字大于等于两位数的情况
	 * @param expression
	 * @return
	 */
	public String middleExpressionToReversePolish1to9(String expression) {
		ArrayStackGeneric<String> numStack = new ArrayStackGeneric<String>(20);
		ArrayStackGeneric<String> operatorStack = new ArrayStackGeneric<String>(20);
		int index = 0;
		while(true) {
			String s = expression.substring(index,index+1);
			if(isOperator(s)) {
				//如果栈顶元素的优先级比当前运算符的优先级低，则将当前运算符直接压入栈中
				if(operatorStack.isEmpty() || getPriority( operatorStack.peek()) < getPriority(s)) { 
					operatorStack.push(s);
				}else {
					//如果栈顶运算符的优先级大于等于当前运算符的优先级，则一直弹栈，直到栈顶运算符优先级，则弹出一个运算符
					//如果栈顶的下一个运算符的优先级大于等于当前运算符的优先级，依然弹出，直到栈顶元素的优先级
					//比当前运算符的优先级低，则将当前运算符直接压入栈中
					while(true) {
						//特别注意：因为没有直接输出，所以把运算符栈弹出的元素直接push到numstack中
						numStack.push(operatorStack.pop());
						if(operatorStack.isEmpty() || getPriority( operatorStack.peek()) < getPriority(s)) {
							break;
						}
					}
					operatorStack.push(s);
				}
			}else {
				numStack.push(s);
			}
			index++;
			if(index == expression.length()) {
				break;
			}
		}
		//把运算符号栈中的运算符弹出并添加到数字栈中
		while(!operatorStack.isEmpty()) {
			numStack.push(operatorStack.pop());
		}
		StringBuilder reversePolishExpressionTemp = new StringBuilder();
		//倒转数字栈
		while(!numStack.isEmpty()) {
			reversePolishExpressionTemp.append("," + numStack.pop());
		}
		//得到真正的逆波兰表达式
		StringBuilder reversePolishExpression = 
				reversePolishExpressionTemp.reverse().deleteCharAt(reversePolishExpressionTemp.length() -1); 
		return String.valueOf(reversePolishExpression);
	}
	
	/**
	 * 中缀表达式转为逆波兰表达式
	 * 		添加处理大于两位数/小数功能
	 * @param expression
	 * @return
	 */
	public String middleExpressionToReversePolishAny(String expression) {
		ArrayStackGeneric<String> numStack = new ArrayStackGeneric<String>(20);
		ArrayStackGeneric<String> operatorStack = new ArrayStackGeneric<String>(20);
		int index = 0;
		StringBuilder completeNum = new StringBuilder();
		while(true) {
			String s = expression.substring(index,index+1);
			if(isOperator(s)) {
				//如果栈顶元素的优先级比当前运算符的优先级低，则将当前运算符直接压入栈中
				if(operatorStack.isEmpty() || getPriority( operatorStack.peek()) < getPriority(s)) { 
					operatorStack.push(s);
				}else {
					//如果栈顶运算符的优先级大于等于当前运算符的优先级，则一直弹栈，直到栈顶运算符优先级，则弹出一个运算符
					//如果栈顶的下一个运算符的优先级大于等于当前运算符的优先级，依然弹出，直到栈顶元素的优先级
					//比当前运算符的优先级低，则将当前运算符直接压入栈中
					while(true) {
						//特别注意：因为没有直接输出，所以把运算符栈弹出的元素直接push到numstack中
						numStack.push(operatorStack.pop());
						if(operatorStack.isEmpty() || getPriority( operatorStack.peek()) < getPriority(s)) {
							break;
						}
					}
					operatorStack.push(s);
				}
			}else {//匹配到多位数
				if (s.matches("\\d+")||s.equals(".")) {
					completeNum.append(s);
					//获取当前索引位置的下一个字符
					if(index <= expression .length()-2) {
						String nextS = expression.substring(index+1, index+2);
						if(isOperator(nextS) ){
							numStack.push(String.valueOf(completeNum.reverse()));
							completeNum.setLength(0);;
						}
					}else {
						numStack.push(String.valueOf(completeNum.reverse()));
					}
				}
				
			}
			index++;
			if(index == expression.length()) {
				break;
			}
		}
		//把运算符号栈中的运算符弹出并添加到数字栈中
		while(!operatorStack.isEmpty()) {
			numStack.push(operatorStack.pop());
		}
		StringBuilder reversePolishExpressionTemp = new StringBuilder();
		//倒转数字栈
		while(!numStack.isEmpty()) {
			reversePolishExpressionTemp.append("," + numStack.pop());
		}
		//得到真正的逆波兰表达式
		StringBuilder reversePolishExpression = 
				reversePolishExpressionTemp.reverse().deleteCharAt(reversePolishExpressionTemp.length() -1); 
		return String.valueOf(reversePolishExpression);
	}
	
	/**
	 * 中缀表达式转为逆波兰表达式
	 * 		添加处理大于两位数/小数功能
	 * 		添加对括号的处理功能
	 * @param expression
	 * @return
	 */
	public String middleExpressionToReversePolishAnyWithBrackets(String expression) {
		ArrayStackGeneric<String> numStack = new ArrayStackGeneric<String>(20);
		ArrayStackGeneric<String> operatorStack = new ArrayStackGeneric<String>(20);
		int index = 0;
		StringBuilder completeNum = new StringBuilder();
		while(true) {
			String s = expression.substring(index,index+1);
			if(isOperator(s)) {
				//如果栈顶元素的优先级比当前运算符的优先级低，则将当前运算符直接压入栈中
				if(operatorStack.isEmpty() || 
						getPriority( operatorStack.peek()) < getPriority(s) || s.equals("(")) { 
					operatorStack.push(s);
				}else if(s.equals(")")) {
					 //如果是右括号")"，则依次弹出符号栈顶的运算符，并压入数栈，直到遇到左括号为止
                    while(true) {
						//特别注意：因为没有直接输出，所以把运算符栈弹出的元素直接push到numstack中
						numStack.push(operatorStack.pop());
						if(operatorStack.isEmpty() 
								|| operatorStack.peek().equals("(")) {
							break;
						}
					}
                    operatorStack.pop(); 
				}else{	
					//如果栈顶的下一个运算符的优先级大于等于当前运算符的优先级，依然弹出，直到栈顶元素的优先级
					//比当前运算符的优先级低，则将当前运算符直接压入栈中
					while(true) {
						//特别注意：因为没有直接输出，所以把运算符栈弹出的元素直接push到numstack中
						numStack.push(operatorStack.pop());
						if(operatorStack.isEmpty() 
								|| getPriority( operatorStack.peek()) < getPriority(s)) {
							break;
						}
					}
					operatorStack.push(s);
				}
			}else {//匹配到多位数
				if (s.matches("\\d+")||s.equals(".")) {
					completeNum.append(s);
					//获取当前索引位置的下一个字符
					if(index <= expression .length()-2) {
						String nextS = expression.substring(index+1, index+2);
						if(isOperator(nextS) ){
							numStack.push(String.valueOf(completeNum.reverse()));
							completeNum.setLength(0);;
						}
					}else {
						numStack.push(String.valueOf(completeNum.reverse()));
					}
				}
				
			}
			index++;
			if(index == expression.length()) {
				break;
			}
		}
		//把运算符号栈中的运算符弹出并添加到数字栈中
		while(!operatorStack.isEmpty()) {
			numStack.push(operatorStack.pop());
		}
		StringBuilder reversePolishExpressionTemp = new StringBuilder();
		//倒转数字栈
		while(!numStack.isEmpty()) {
			reversePolishExpressionTemp.append("," + numStack.pop());
		}
		//得到真正的逆波兰表达式
		StringBuilder reversePolishExpression = 
				reversePolishExpressionTemp.reverse().deleteCharAt(reversePolishExpressionTemp.length() -1); 
		return String.valueOf(reversePolishExpression);
	}

	/**
	 * 传入逆波兰表达式进行计算
	 * @param reversePolishExpression
	 */
	public void calc(String reversePolishExpression) {
		ArrayStackGeneric<Double> numStack = new ArrayStackGeneric<Double>(10);
		String[] elements = reversePolishExpression.split(",");
		for(String element:elements) {
			System.out.println(element);
			if (element.matches("\\d+")||element.matches("\\d+\\.\\d+")){
				numStack.push(Double.parseDouble(element));
			}else {
				double num1= numStack.pop();
	            double num2= numStack.pop();
	            double result = 0.0;
	            switch(element){
	            	case "+":
	            		result = num2 + num1;
	            		numStack.push(result);
	            		break;
	            	case "-":
	            		result = num2 - num1;
	            		numStack.push(result);
	            		break;
	            	case "*":
	            		result = num2 * num1;
	            		numStack.push(result);
	            		break;
	            	case "/":
	            		result = num2 / num1;
	            		numStack.push(result);
	            		break;
	            	default:
	            		break;
	            }
			}
		}
		double result = numStack.pop();
		System.out.println(reversePolishExpression + "=" + result);
	}
}
