package com.dragonsoft.designpattern.basic.principles.open_close;

/**
 * 不遵循OCP原则，目前只有一个画三角形的需求，当增加一个画圆形的需求的时候，
 * 不仅要对方法的提供者Painter做修改，也要对调用者做修改
 *
 */
public class OCPTest1 {
    public static void main(String[] args) {
        Painter1 painter1 = new Painter1();
        painter1.drawShape(new Triagle1());
        painter1.drawShape(new Cricle1());
    }
}
/**
 * 方法的使用方:
 *      不遵守OCP,扩展的时候要对方法的使用方做修改
 */
class Painter1 {
    public void drawShape(Shape1 shape){
        if(shape.type == 1) {
            drawTriangle();
        }else if(shape.type == 2) {
            drawCircle();
        }
    }
    private void drawTriangle(){
        System.out.println("画三角形...");
    }
    private void drawCircle(){
        System.out.println("画圆形...");
    }
}
class Shape1 {
    public int type;
}

/**
 * 方法的提供方
 */
class Triagle1 extends Shape1{
    public Triagle1(){
        super.type = 1;
    }
}
/**
 * 方法的提供方
 */
class Cricle1 extends Shape1{
    public Cricle1(){
        super.type = 2;
    }
}
