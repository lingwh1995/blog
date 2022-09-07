package com.dragonsoft.designpattern.basic.principles.liskov_substitution;

public class Liskov3 {
    public static void main(String[] args) {
        X x = new X();
        Y y = new Y();
        Z z = new Z();
        z.z(x);
        //Y重写X方法后，z调用的时候传入父类对象和子类对象产生的结果不同,即能使用父类的地方不能透明的使用其子类
        z.z(y);
    }
}
class Z {
    void z(X x){
        x.fun1();
    }
}
class X {
    void fun1(){
        System.out.println("xxx");
    }
}
class Y extends X{
    void fun1(){
        System.out.println("yyy");
    }
}