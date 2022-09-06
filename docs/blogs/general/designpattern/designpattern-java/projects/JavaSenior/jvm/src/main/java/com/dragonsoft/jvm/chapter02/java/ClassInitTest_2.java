package com.dragonsoft.jvm.chapter02.java;

/**
 * 当int取值 -1~5 时，JVM采用iconst指令将常量压入栈中
 * 当int取值 -128~127 时，JVM采用 bipush 指令将常量压入栈中
 * 当int取值 -32768~32767 时，JVM 采用 sipush 指令将常量压入栈中
 * 当int取值 -2147483648~2147483647 时，JVM采用 ldc 指令将常量压入栈中
 */
public class ClassInitTest_2 {
    static{
       number = 20;
       //System.out.println(number);//报错：非法的前向引用。
   }
    private static int number = 10;  //linking之prepare: number = 0 --> initial: 20 --> 10

    public static void main(String[] args) {
        System.out.println(ClassInitTest_2.number);//10
    }
}
