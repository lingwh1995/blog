package com.dragonsoft.jvm.chapter02.java;

public class ClassInitTest_1 {
   private static int num = 1;

   static{
       num = 2;
   }

    public static void main(String[] args) {
        System.out.println(ClassInitTest_1.num);//2
    }
}
