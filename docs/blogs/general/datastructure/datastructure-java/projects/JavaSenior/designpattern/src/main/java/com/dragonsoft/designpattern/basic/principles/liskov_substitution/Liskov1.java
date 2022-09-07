package com.dragonsoft.designpattern.basic.principles.liskov_substitution;

/**
 * 未使用里氏替换原则
 * B1类继承了A1类，在不知道的情况下重下了父类A1的fun1()方法，外部调用子类B1类中中fun1()的时候以为
 *      里面的逻辑还是a-b，其实逻辑已经在不知道的情况下被重写成a+b了，导致计算结果出了问题
 *
 * 缺点：A1和B1的耦合性太高了，修改B很容易对A造成影响
 */
public class Liskov1 {
    public static void main(String[] args) {
        A1 a1 = new A1();
        System.out.println("11-3 = "+a1.fun1(11,3));
        System.out.println("1-8 = "+a1.fun1(1,8));

        A1 b1 = new B1();
        System.out.println("11-3 = "+b1.fun1(11,3));
        System.out.println("1-8 = "+b1.fun1(1,8));

    }
}

class A1 {
    /**
     * 返回 a与b的差
     * @param a
     * @param b
     * @return
     */
    public int fun1(int a,int b){
        return a-b;
    }

    public void printHelloWorld(){
        System.out.println("Hello World!");
    }
}

/**
 * B1类继承了A1类，在不知道的情况下重下了父类A的fun1()方法
 */
class B1 extends A1 {

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
     * B1独有方法，非继承自A1
     * 返回 a与b的和加上9
     * @param a
     * @param b
     * @return
     */
    public int fun2(int a,int b){
        return fun1(a,b) + 9;
    }

    public void printHelloWorld(){
        System.out.println("Hello World!");
    }
}
