package com.dragonsoft.designpattern.basic.principles.liskov_substitution;

/**
 * 使用里氏替换原则：
 *  1.B2类不再继承A2类，改为A2类和B2类都继承一个基类Base
 *  2.这样调用者通过查看继承关系，明显的就知道了B2类中的fun1()里面的逻辑是a+b，而不是a-b
 *  3.把A2和B2中的公用方法printHelloWorld()抽取到了Base中
 *
 *  注意：本来B2继承了A2，可以直接调用父类A2中的方法，里氏替换原则修改代码后，B2不再继承A2，B2想要调用A2中的方法则可以通过依赖A2来实现调用
 */
public class Liskov2 {
    /**
     * 将A2和B2中的公用方法printHelloWorld()抽取到了Base中
     */
    public void printHelloWorld(){
        System.out.println("Hello World!");
    }
}


class Base{
    //把更加基础的方法和成员写到Base类中
}
class A2 extends Base{
    /**
     * 返回 a与b的差
     * @param a
     * @param b
     * @return
     */
    public int fun1(int a,int b){
        return a-b;
    }
}

class B2 extends Base {

    //B通过这个方式依赖A
    private A2 a2 = new A2();

    /**
     * 返回 a与b的和
     * @param a
     * @param b
     * @return
     */
    public int fun1(int a,int b){
        return a+b;
    }

    /**
     * B2独有方法，非继承自A2
     * 返回 a与b的和加上9
     * @param a
     * @param b
     * @return
     */
    public int fun2(int a,int b){
        return fun1(a,b) + 9;
    }

    /**
     * 里氏替换原则，如果B2和A2同时继承了基类Base，那么当B2想要使用A2类中的方法的时候，可以通过依赖的方式来调用A类2中的方法
     * @param a
     * @param b
     * @return
     */
    public  int fun3(int a,int b){
        return this.a2.fun1(a,b);
    }
}