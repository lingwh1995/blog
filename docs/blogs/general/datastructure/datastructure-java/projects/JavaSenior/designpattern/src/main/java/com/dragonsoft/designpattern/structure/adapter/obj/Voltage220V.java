package com.dragonsoft.designpattern.structure.adapter.obj;

public class Voltage220V {
	public int output220() {
		int voltage = 220;
		System.out.println("输出" + voltage + "v电压") ;
		return voltage;
	}
}
