package com.dragonsoft.designpattern.basic.principles.single_reponsibility;

import org.junit.Test;

/**
 * 不使用单一职能原则
 *      Vehicle1.run()方法违反了单一职能原则
 */
public class SingleReponsibility1 {
    @Test
    public void test(){
        Vehicle1 vehicle1 = new Vehicle1();
        vehicle1.run("汽车");
        vehicle1.run("火车");
        vehicle1.run("飞机");
    }
}
class Vehicle1 {
    public void run(String vehicle) {
        System.out.println(vehicle + "在公路上跑...");
    }
}
