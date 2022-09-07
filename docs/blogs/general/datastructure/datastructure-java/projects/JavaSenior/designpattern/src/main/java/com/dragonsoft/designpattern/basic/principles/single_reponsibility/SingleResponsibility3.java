package com.dragonsoft.designpattern.basic.principles.single_reponsibility;

import org.junit.Test;

/**
 * 方法级别的单一职能原则，会导致类中方法大爆炸
 */
public class SingleResponsibility3 {
    @Test
    public void run(){
        Veicle3 veicle3 = new Veicle3();
        veicle3.runRoad("汽车");
        veicle3.runAir("飞机");
        veicle3.runWater("轮船");
    }
}

class Veicle3 {
    public void runRoad(String vehicle){
        System.out.println(vehicle+"在路上跑...");
    }
    public void runAir(String vehicle){
        System.out.println(vehicle+"在天上飞...");
    }
    public void runWater(String vehicle){
        System.out.println(vehicle+"在水里跑...");
    }
}
