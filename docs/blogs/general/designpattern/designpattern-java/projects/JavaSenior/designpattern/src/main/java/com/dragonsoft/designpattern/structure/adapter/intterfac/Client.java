package com.dragonsoft.designpattern.structure.adapter.intterfac;


import org.junit.Test;

/**
 * 接口适配器
 * @author lingwh
 *
 */
public class Client {
	
	@Test
	public void fun() {
		AbstractAnimateListener listener = 
			    new AbstractAnimateListener() {
					@Override
					public void onAnimateStart() {
						System.out.println("动画开始了....");
					}
				};
			listener.onAnimateStart();	
	}
}
