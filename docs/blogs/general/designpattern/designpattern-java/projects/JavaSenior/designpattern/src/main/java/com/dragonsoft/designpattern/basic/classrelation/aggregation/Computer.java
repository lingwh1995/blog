package com.dragonsoft.designpattern.basic.classrelation.aggregation;

public class Computer {
    //显示器可以和Computer分离
    private Moniter moniter;
    //鼠标可以和Computer分离
    private Mouse mouse;

    public Moniter getMoniter() {
        return moniter;
    }

    public void setMoniter(Moniter moniter) {
        this.moniter = moniter;
    }

    public Mouse getMouse() {
        return mouse;
    }

    public void setMouse(Mouse mouse) {
        this.mouse = mouse;
    }
}
