package com.dragonsoft.designpattern.basic.principles.open_close;

public class OCPTest2 {
    public static void main(String[] args) {
        Painter2 painter2 = new Painter2();
        painter2.drawShape(new Triagle2());
        painter2.drawShape(new Cricle2());
    }
}

/**
 * 方法的使用方:
 *      遵守OCP,扩展的时候不用再对方法的使用方做修改
 */
class Painter2 {
    public void drawShape(Shape2 shape){
       shape.draw();
    }
}
abstract class Shape2 {
    public int type;
    public abstract void draw();
}
/**
 * 方法的提供方
 */
class Triagle2 extends Shape2{
    public Triagle2(){
        super.type = 1;
    }

    @Override
    public void draw() {
        System.out.println("画三角形......");
    }
}
/**
 * 方法的提供方
 */
class Cricle2 extends Shape2{
    public Cricle2(){
        super.type = 2;
    }

    @Override
    public void draw() {
        System.out.println("画圆形......");
    }
}