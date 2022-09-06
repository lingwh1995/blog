package com.dragonsoft.jvm.chapter02.java;

/**
 * 类构造器方法clinit方式是javac编译器自动收集所有类变量的赋值动作和静态代码块中的语句合成而来
 * 无参构造方法:init
 * 方法:
    [0]<init>
         0 aload_0
         1 invokespecial #1 <java/lang/Object.<init> : ()V>
         4 return
 */
public class ClinitTest_3 {

    //任何一个类声明以后，内部至少存在一个类的构造器
    {
        int a;
    }

}
