package com.dragonsoft.designpattern.create.singleton;

public class Singleton {
	
}

/**
 * 饿汉式
 * @author lingwh
 *
 */
class SingletonA {
	private SingletonA() {}
	private static final SingletonA SINGLETONA = new SingletonA();
	public static SingletonA getInstance() {
		return SINGLETONA;
	}
}

/**
 * 懒汉式:
 * 	优点：可以实现懒加载
 * 	缺点：有线程安全问题
 * @author lingwh
 *
 */
class SingletonB {
	private SingletonB() {}
	private static SingletonB singletonB = null;
	public static SingletonB getInstance() {
		if(singletonB == null) {
			singletonB = new SingletonB(); 
		}
		return singletonB;
	}
}

/**
 * 线程安全的懒汉式
 * @author lingwh
 *
 */
class SingletonC {
	private SingletonC() {}
	private static SingletonC singletonC;
	public static synchronized SingletonC getInstance() {
		if(singletonC == null) {
			singletonC = new SingletonC();
		}
		return singletonC;
	}
}

/**
 * 双重检索懒汉式
 * @author lingwh
 *
 */
class SingletonD {
	private SingletonD() {}
	private static volatile SingletonD singletonD;
	public static SingletonD getInstance() {
		if(singletonD == null) {
			synchronized(SingletonD.class) {
				if(singletonD == null) {
					singletonD = new SingletonD();
				}
			}
		}
		return singletonD;
	}
}

/**
 * 静态内部类懒汉式
 * 	原理：JVM在装载类的时候是线程安全的
 * @author lingwh
 *
 */
class SingletonE {
	private SingletonE() {}
	public static SingletonE getInstance() {
		return SingletonInstacne.INSTANCE;
	}
	private static class SingletonInstacne {
		private static final SingletonE INSTANCE = new SingletonE();
	}
}

/**
 * 枚举实现单例
 * @author lingwh
 *
 */
enum SingletonF {
	INSTANCE;
	public void doSomething() {
		System.out.println("doSomething......");
	}
	
}