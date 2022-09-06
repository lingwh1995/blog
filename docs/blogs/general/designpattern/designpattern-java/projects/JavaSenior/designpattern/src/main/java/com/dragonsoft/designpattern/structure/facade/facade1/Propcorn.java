package com.dragonsoft.designpattern.structure.facade.facade1;

/**
 * 爆米花机，使用饿汉式
 */
public class Propcorn {
    private static Propcorn propcorn = new Propcorn();

    public static Propcorn getInstance(){
        return propcorn;
    }

    public void on() {
        System.out.println("propcorn on......");
    }

    public void off() {
        System.out.println("propcorn off......");
    }

    /**
     * 正在生产爆米花
     */
    public void pop() {
        System.out.println("producer propcorn......");
    }
}
