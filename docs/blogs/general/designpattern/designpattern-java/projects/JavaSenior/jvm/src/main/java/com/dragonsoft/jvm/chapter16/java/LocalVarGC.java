package com.dragonsoft.jvm.chapter16.java;

/**
 * -XX:+PrintGCDetails
 *
 * @author shkstart  shkstart@126.com
 * @create 2020  14:57
 */
public class LocalVarGC {
    public void localvarGC1() {
        //触发Minor GC没有回收对象，然后在触发Full GC将该对象存入old区
        byte[] buffer = new byte[10 * 1024 * 1024];//10MB
        System.gc();
    }

    public void localvarGC2() {
        //触发YoungGC的时候，已经被回收了
        byte[] buffer = new byte[10 * 1024 * 1024];
        buffer = null;
        System.gc();
    }

    public void localvarGC3() {
        //不会被回收，因为它还存放在局部变量表索引为1的槽中
        {
            byte[] buffer = new byte[10 * 1024 * 1024];
        }
        System.gc();
    }

    public void localvarGC4() {
        //在新生代就会被回收，因为它还存放在局部变量表索引为1的槽中，但是后面定义的value把这个槽给替换了
        {
            byte[] buffer = new byte[10 * 1024 * 1024];
        }
        int value = 10;
        System.gc();
    }

    public void localvarGC5() {
        //localvarGC5中的数据已经被回收
        localvarGC1();
        System.gc();
    }

    public static void main(String[] args) {
        LocalVarGC local = new LocalVarGC();
        local.localvarGC5();
    }
}
