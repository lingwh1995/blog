package com.dragonsoft.jvm.chapter02.java.lang;

/**
 * 使用javac编译后使用java命令执行会报下面的错:
 *      错误: 找不到或无法加载主类
 * 原因:类加载器加载了rt.jar中的String的源码,没有加载我们自定义的String类,这是因为jdk的沙箱安全机制导致的,实现了对jdk源代码的保护
 */
public class String {
    //
    static{
        System.out.println("xxxxxx");
    }
    //错误: 在类 java.lang.String 中找不到 main 方法
    public static void main(String[] args) {
        System.out.println("hello,String");
    }
}

