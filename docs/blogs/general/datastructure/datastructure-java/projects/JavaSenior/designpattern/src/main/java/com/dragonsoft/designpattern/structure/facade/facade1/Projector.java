package com.dragonsoft.designpattern.structure.facade.facade1;

/**
 * 投影仪，使用饿汉式
 */
public class Projector {
    private static Projector projector = new Projector();

    public static Projector getInstance(){
        return projector;
    }

    /**
     * 开启投影仪
     */
    public void on() {
        System.out.println("projector on......");
    }

    /**
     * 关闭投影仪
     */
    public void off() {
        System.out.println("projector off......");
    }
}
