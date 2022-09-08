package com.dragonsoft.designpattern.basic.principles.compositereuse;

/**
 * 合成复用原则
 */
public class CompositeReuse1 {
}

/**
 * 继承关系
 * 如果想让B1使用A1的方法，可以让B1继承A1,不过，这样会加重B1和A1的耦合
 */
class A1{
    public void fun1(){}
    public void fun2(){}
    public void fun3(){}
}

class B1 extends A1 {

}