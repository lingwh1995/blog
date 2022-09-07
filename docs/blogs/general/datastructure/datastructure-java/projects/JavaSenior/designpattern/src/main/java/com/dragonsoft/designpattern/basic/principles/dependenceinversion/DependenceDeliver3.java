package com.dragonsoft.designpattern.basic.principles.dependenceinversion;

/**
 * 依赖关系传递的三种方式
 *  第三种方式：通过setter()方法传递依赖
 */
public class DependenceDeliver3 {
    public static void main(String[] args) {
        OpenAndClose3 openAndClose3 = new OpenAndClose3();
        openAndClose3.setItv3(new ITV3() {
            @Override
            public void play() {
                System.out.println("ITV3播放......");
            }
        });
        openAndClose3.open();
    }
}

interface ITV3{
    public void play();
}

interface IOpenAndClose3 {
    public void open();
}

class OpenAndClose3 implements IOpenAndClose3{

    private ITV3 itv3;

    public void setItv3(ITV3 itv3) {
        this.itv3 = itv3;
    }

    @Override
    public void open() {
        this.itv3.play();
    }
}