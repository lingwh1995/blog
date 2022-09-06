package com.dragonsoft.jvm.chapter13.java;

/**
 * 字符串常量池不会存储相同内容的字符串
 *
 * @author shkstart  shkstart@126.com
 * @create 2020  23:44
 */
public class StringExer {
    String str = new String("good");
    char[] ch = {'t', 'e', 's', 't'};

    public void change(String str, char ch[]) {
        str = "test ok";
        ch[0] = 'b';
    }

    public static void main(String[] args) {
        StringExer ex = new StringExer();
        System.out.println(ex.ch);//test
        System.out.println(ex.ch.hashCode());
        ex.change(ex.str, ex.ch);
        System.out.println(ex.str);//good
        System.out.println(ex.ch);//best
        System.out.println(ex.ch.hashCode());
    }

}
