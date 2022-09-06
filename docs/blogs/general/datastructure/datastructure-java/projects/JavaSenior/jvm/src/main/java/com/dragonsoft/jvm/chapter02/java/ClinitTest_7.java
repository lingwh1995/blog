package com.dragonsoft.jvm.chapter02.java;

/**
 * @author shkstart
 * @create 2020 下午 8:40
 */
public class ClinitTest_7 {
    static class Father{
        public static int A = 1;
        static{
            A = 2;
        }
    }

    static class Son extends Father{
        public static int B = A;
    }

    public static void main(String[] args) {
        //加载Father类，其次加载Son类。
        System.out.println(Son.B);//2
    }
}
