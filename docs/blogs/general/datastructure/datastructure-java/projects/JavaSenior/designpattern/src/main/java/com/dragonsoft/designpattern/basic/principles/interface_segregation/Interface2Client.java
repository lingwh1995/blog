package com.dragonsoft.designpattern.basic.principles.interface_segregation;

import org.junit.Test;

public class Interface2Client {
    /**
     * 测试A2通过接口Interface2A,Interface2B依赖B2
     */
    @Test
    public void testA2() {
        A2 a2 = new A2();
        a2.depend1(new B2());
        a2.depend2(new B2());
        a2.depend3(new B2());
    }

    /**
     * 测试C2通过接口Interface2B,Interface2C依赖D2
     */
    @Test
    public void testC2() {
        C2 c2 = new C2();
        c2.depend1(new D2());
        c2.depend4(new D2());
        c2.depend5(new D2());
    }
}
