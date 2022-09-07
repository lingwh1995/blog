package com.dragonsoft.designpattern.basic.principles.interface_segregation;

import org.junit.Test;

/**
 * 调用Interface1的客户端
 */
public class Interface1Client {
    /**
     * 测试A1通过Interface1依赖B1，但是只调用1、2、3方法
     */
    @Test
    public void testA1() {
        A1 a1 = new A1();
        //本来要传入接口Interface1的，现在根据面向接口编程原则，传入Interface1的实现B1
        a1.depend1(new B1());
        a1.depend2(new B1());
        a1.depend3(new B1());
    }

    /**
     * 测试C1通过Interface1依赖D1
     */
    @Test
    public void testC1() {
        C1 c1 = new C1();
        //本来要传入接口Interface1的，现在根据面向接口编程原则，传入Interface1的实现D1
        c1.depend1(new D1());
        c1.depend4(new D1());
        c1.depend5(new D1());
    }
}
