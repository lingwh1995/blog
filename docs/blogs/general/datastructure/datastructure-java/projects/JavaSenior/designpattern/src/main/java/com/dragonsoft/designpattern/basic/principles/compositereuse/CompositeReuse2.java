package com.dragonsoft.designpattern.basic.principles.compositereuse;

/**
 * 合成复用原则
 */
public class CompositeReuse2 {
}

/**
 * 代替继承关系的方式一：依赖关系
 * 如果想让B1使用A1的方法，B2依赖A2,即在B2的方法参数中传入A2，然后再通过调用A2对象的方法来实现B2使用A2中的方法
 */
class A2{
    public void fun1(){}
    public void fun2(){}
    public void fun3(){}
}

class B2{
    public void fun1(A2 a2){
        a2.fun1();
    }
    public void fun2(A2 a2){
        a2.fun2();
    }
    public void fun3(A2 a2){
        a2.fun3();
    }
}

/**
 * 代替继承关系的方式二：聚合关系
 * 把A3聚合到B3中，即A3作为B3的属性出现在B3中，并且通过setter()方法为B3中的A3注入值
 */
class A3{
    public void fun1(){}
    public void fun2(){}
    public void fun3(){}
}

class B3{
    private A3 a3;

    public void setA3(A3 a3) {
        this.a3 = a3;
    }

    public void fun1(){
        a3.fun1();
    }
    public void fun2(){
        a3.fun2();
    }
    public void fun3(){
        a3.fun3();
    }
}

/**
 * 代替继承关系的方式三：组合关系
 * 让A4作为B4的属性出现在B4中，而且当B4创建完成后A4就创建完成了，称为把A4组合到B4中
 * 让A4作为B5的属性出现在B5中，而且当B5创建完成后A4就创建完成了，称为把A5组合到B4中
 */
class A4{
    public void fun1(){}
    public void fun2(){}
    public void fun3(){}
}
//通过直接new给成员变量赋值
class B4{
    private A4 a4 = new A4();

    public void fun1(){
        a4.fun1();
    }
    public void fun2(){
        a4.fun2();
    }
    public void fun3(){
        a4.fun3();
    }
}
//通过构造方法给成员变量赋值
class B5{
    private A4 a4;
    public B5(A4 a4){
        this.a4 = a4;
    }

    public void fun1(){
        a4.fun1();
    }
    public void fun2(){
        a4.fun2();
    }
    public void fun3(){
        a4.fun3();
    }
}