package com.dragonsoft.designpattern.basic.principles.single_reponsibility;

import org.junit.Test;

/**
 * 类级别的单一职能原则：严格遵守了单一职责原则
 * 遵守了单一职责原则:但是会导致类大爆炸
 */
public class SingleResponsibility2 {
    @Test
    public void run(){
        RoadVehicle roadVehicle = new RoadVehicle();
        roadVehicle.run("汽车");
        AirVehicle airVehicle = new AirVehicle();
        airVehicle.run("飞机");
        WaterVehicle waterVehicle = new WaterVehicle();
        waterVehicle.run("轮船");
    }
}

class RoadVehicle {
    public void run(String vehicle){
        System.out.println(vehicle+"在路上跑...");
    }
}

class WaterVehicle {
    public void run(String vehicle){
        System.out.println(vehicle+"在水里跑...");
    }
}

class AirVehicle {
    public void run(String vehicle){
        System.out.println(vehicle+"在天上飞...");
    }
}