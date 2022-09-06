package com.dragonsoft.designpattern.structure.adapter.obj;

public class Voltage220VAdapter implements IVoltage5V{
	
	private Voltage220V voltage220V;
	
	public Voltage220VAdapter(Voltage220V voltage220V) {
		this.voltage220V = voltage220V;
	}

	@Override
	public int output5v() {
		//获取220v电压
		int output220 = voltage220V.output220();
		System.out.println("获取到" + output220 + "v电压");
		//变压
		int voltage = output220/44;
		System.out.println("变压为" + voltage + "v电压");
		return voltage;
	}

}
