package com.dragonsoft.designpattern.basic.principles.interface_segregation;

public interface Interface2 {
    void operator1();
}
/**
 * 遵循接口隔离原则
 *      把接口1差分为3个接口
 */
//public interface Interface1 {
//    void operator1();
//    void operator2();
//    void operator3();
//    void operator4();
//    void operator5();
//}
interface Interface2A {
    void operator1();
}

interface Interface2B {
    void operator2();
    void operator3();
}

interface Interface2C {
    void operator4();
    void operator5();
}

/**
 * 客户端不应该依赖它不需要的接口，即一个类对另一个类的依赖应该建立在最小的接口上
 * A2就是客户端
 * A2通过Interface1A,InterfaceC依赖B2类
 * 接口隔离后，interface2A只能调用operator1()
 *           interface2B只能调用operator2()和operator3()
 *           interface2C只能调用operator4()和operator5()
 */
class A2 {
    public void depend1(Interface2A interface2A){
        interface2A.operator1();
    }
    public void depend2(Interface2B interface2B){
        interface2B.operator2();
    }
    public void depend3(Interface2B interface2B){
        interface2B.operator3();
    }
}

/**
 * 客户端不应该依赖它不需要的接口，即一个类对另一个类的依赖应该建立在最小的接口上
 * C2就是客户端
 * C2通过Interface2A,Interface2B依赖D2类
 * 接口隔离后，interface2A只能调用operator1()
 *            interface2B只能调用operator2()和operator3()
 *            interface2C只能调用operator4()和operator5()
 */
class C2 {
    public void depend1(Interface2A interface2A){
        interface2A.operator1();
    }
    public void depend4(Interface2C interface2C){
        interface2C.operator4();
    }
    public void depend5(Interface2C interface2C){
        interface2C.operator5();
    }
}

class B2 implements Interface2A,Interface2B {
    @Override
    public void operator1() {
        System.out.println("B2实现了操作1...");
    }

    @Override
    public void operator2() {
        System.out.println("B2实现了操作2...");
    }

    @Override
    public void operator3() {
        System.out.println("B2实现了操作3...");
    }
}

class D2 implements Interface2A,Interface2C {
    @Override
    public void operator1() {
        System.out.println("D2实现了操作1...");
    }

    @Override
    public void operator4() {
        System.out.println("D2实现了操作4...");
    }

    @Override
    public void operator5() {
        System.out.println("D2实现了操作5...");
    }
}

