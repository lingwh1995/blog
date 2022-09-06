package com.dragonsoft.jvm.chapter01;

/**
 * 在cmd中输入 jps命令就可以查看到
 *  StackStruTest.java运行时在内存中的进程
 */
public class StackStruTest {
    public static void main(String[] args) {
        //int i = 2 + 3;
        int i = 2;
        int j = 3;
        int k = i + j;

        try {
            Thread.sleep(20000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }


        System.out.println("hello");
    }
}
