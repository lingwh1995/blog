package com.dragonsoft.designpattern.basic.principles.dependenceinversion;

/**
 * 依赖关系传递的三种方式
 *  第一种方式：通过接口传递依赖
 */
public class DependenceDeliver1 {
    public static void main(String[] args) {
        OpenAndClose1 openAndClose1 = new OpenAndClose1();
        openAndClose1.open(new ITV1() {
            @Override
            public void play() {
                System.out.println("ITV1播放......");
            }
        });
    }
}

interface ITV1{
    public void play();
}
interface IOpenAndClose1{
    public void open(ITV1 iTv1);
}
class OpenAndClose1 implements IOpenAndClose1{

    @Override
    public void open(ITV1 iTv1) {
        iTv1.play();
    }
}
