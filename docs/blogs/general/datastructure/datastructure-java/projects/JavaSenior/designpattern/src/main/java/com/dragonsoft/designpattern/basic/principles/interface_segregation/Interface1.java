package com.dragonsoft.designpattern.basic.principles.interface_segregation;

/**
 * 不遵守接口隔离原则
 */
public interface Interface1 {
    void operator1();
    void operator2();
    void operator3();
    void operator4();
    void operator5();
}

/**
 * A1通过Interface1依赖B类，但只会用到1、2、3方法
 */
class A1 {
    public void depend1(Interface1 interface1){
        interface1.operator1();

        //如果不进行接口隔离，interface1仍然可以调用接口中的operator2()、operator3()、operator4()和operator5()两个方法，实际根本不需要这四个方法
        //interface1.operator2();
        //interface1.operator3();
        //interface1.operator4();
        //interface1.operator5();
    }
    public void depend2(Interface1 interface1){
        interface1.operator2();
        //如果不进行接口隔离，interface1仍然可以调用接口中的operator1()、operator3()、operator4()和operator5()两个方法，实际根本不需要这两个方法
        //interface1.operator1();
        //interface1.operator3();
        //interface1.operator4();
        //interface1.operator5();
    }
    public void depend3(Interface1 interface1){
        interface1.operator3();
        //如果不进行接口隔离，interface1仍然可以调用接口中的operator1()、operator2()、operator4()和operator5()两个方法，实际根本不需要这两个方法
        //interface1.operator1();
        //interface1.operator2();
        //interface1.operator4();
        //interface1.operator5();
    }
}
/**
 * C1通过Interface1依赖D类，但只会用到1、4、5方法
 */
class C1 {
    public void depend1(Interface1 interface1){
        interface1.operator1();

        //如果不进行接口隔离，interface1仍然可以调用接口中的operator2()、operator3()、operator4()和operator5()两个方法，实际根本不需要这四个方法
        //interface1.operator2();
        //interface1.operator3();
        //interface1.operator4();
        //interface1.operator5();
    }
    public void depend4(Interface1 interface1){
        interface1.operator4();

        //如果不进行接口隔离，interface1仍然可以调用接口中的operator1()、operator2()、operator3()和operator5()两个方法，实际根本不需要这四个方法
        //interface1.operator1();
        //interface1.operator2();
        //interface1.operator3();
        //interface1.operator5();
    }
    public void depend5(Interface1 interface1){
        interface1.operator5();

        //如果不进行接口隔离，interface1仍然可以调用接口中的operator1()、operator2()、operator3()和operator4()两个方法，实际根本不需要这四个方法
        //interface1.operator1();
        //interface1.operator2();
        //interface1.operator3();
        //interface1.operator4();
    }
}
class B1 implements Interface1 {
    @Override
    public void operator1() {
        System.out.println("B1实现了操作1...");
    }

    @Override
    public void operator2() {
        System.out.println("B1实现了操作2...");
    }

    @Override
    public void operator3() {
        System.out.println("B1实现了操作3...");
    }

    @Override
    public void operator4() {
        System.out.println("B1实现了操作4...");
    }

    @Override
    public void operator5() {
        System.out.println("B1实现了操作5...");
    }
}
class D1 implements Interface1 {
    @Override
    public void operator1() {
        System.out.println("D1实现了操作1...");
    }

    @Override
    public void operator2() {
        System.out.println("D1实现了操作2...");
    }

    @Override
    public void operator3() {
        System.out.println("D1实现了操作3...");
    }

    @Override
    public void operator4() {
        System.out.println("D1实现了操作4...");
    }

    @Override
    public void operator5() {
        System.out.println("D1实现了操作5...");
    }
}
