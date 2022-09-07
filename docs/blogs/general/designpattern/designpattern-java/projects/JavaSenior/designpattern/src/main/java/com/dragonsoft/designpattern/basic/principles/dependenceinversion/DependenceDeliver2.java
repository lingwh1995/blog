package com.dragonsoft.designpattern.basic.principles.dependenceinversion;

/**
 * 依赖关系传递的三种方式
 *  第二种方式：通过构造方法传递依赖
 */
public class DependenceDeliver2 {
    public static void main(String[] args) {
        OpenAndClose2 openAndClose2 = new OpenAndClose2(new ITV2() {
            @Override
            public void play() {
                System.out.println("ITV2播放......");
            }
        });
        openAndClose2.open();
    }
}

interface ITV2{
    public void play();
}

interface IOpenAndClose2{
    public void open();
}

class OpenAndClose2 implements IOpenAndClose2{

    public ITV2 iTv2;
    public OpenAndClose2(ITV2 iTv2) {
        this.iTv2 = iTv2;
    }

    @Override
    public void open() {
        this.iTv2.play();
    }
}