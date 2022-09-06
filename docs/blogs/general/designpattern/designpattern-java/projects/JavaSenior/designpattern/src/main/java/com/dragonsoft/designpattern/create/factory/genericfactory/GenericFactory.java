package com.dragonsoft.designpattern.create.factory.genericfactory;

/**
 * 需要享元模式
 * @author lingwh
 *
 * @param <T>
 */
public class GenericFactory<T> {
	
	public static <T> T getInstance(Class<T> clazz) {
		T t = null;
		try {
			t = (T)clazz.newInstance();
		} catch (InstantiationException e) {
			e.printStackTrace();
		} catch (IllegalAccessException e) {
			e.printStackTrace();
		}
		return t;
	}
	
}
