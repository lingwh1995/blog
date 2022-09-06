package com.dragonsoft.designpattern.structure.facade.facade1;

/**
 * 家庭影院
 */
public class HomeTheaterFacade {
    //dvd播放器
    private DVDPlayer dvdPlayer;
    //投影仪
    private Projector projector;
    //爆米花机
    private Propcorn propcorn;
    //幕布
    private Screen screen;

    public HomeTheaterFacade() {
        this.dvdPlayer = DVDPlayer.getInstance();
        this.projector = Projector.getInstance();
        this.propcorn = Propcorn.getInstance();
        this.screen = Screen.getInstance();
    }

    /**
     * 准备
     */
    public void ready(){
        //准备好爆米花
        propcorn.on();
        propcorn.pop();
        propcorn.off();
        //屏幕下降
        screen.down();
        //投影仪打开
        projector.on();
        //dvd放映机打开
        dvdPlayer.on();
    }

    /**
     * 播放
     */
    public void play(){
        dvdPlayer.playing();
    }

    /**
     * 暂停
     */
    public void puse(){
        dvdPlayer.pause();
    }

    /**
     * 结束放映
     */

    public void end(){
        //dvd放映机关闭
        dvdPlayer.off();
        //投影仪关闭
        projector.off();
        //屏幕上升回去
        screen.up();
    }
}
