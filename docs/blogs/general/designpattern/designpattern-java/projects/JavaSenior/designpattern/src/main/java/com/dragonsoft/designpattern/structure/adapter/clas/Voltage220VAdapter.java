package com.dragonsoft.designpattern.structure.adapter.clas;

public class Voltage220VAdapter extends Voltage220V implements IVoltage5V{

	@Override
	public int output5v() {
		//获取220v电压
		int output220 = super.output220();
		System.out.println("获取到" + output220 + "v电压");
		//变压
		int voltage = output220/44;
		System.out.println("变压为" + voltage + "v电压");
		return voltage;
	}

}
