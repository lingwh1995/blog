package com.dragonsoft.designpattern.structure.facade.facade1;

/**
 * DVD播放器，使用饿汉式
 */
public class DVDPlayer {
    private static DVDPlayer dVDPlayer = new DVDPlayer();

    public  static DVDPlayer getInstance(){
        return dVDPlayer;
    }

    public void on() {
        System.out.println("dvd on......");
    }

    public void off() {
        System.out.println("dvd off......");
    }

    public void playing() {
        System.out.println("dvd playing......");
    }

    public void pause() {
        System.out.println("dvd pause......");
    }
}
