package com.dragonsoft.designpattern.structure.adapter.obj;

public class Phone {
	
	public void chaging(IVoltage5V iVoltage5V) {
		if(iVoltage5V.output5v() == 5) {
			System.out.println("充电成功");
		}else {
			System.out.println("充电失败");
		}
	}
}
