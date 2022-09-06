package com.dragonsoft.designpattern.structure.proxy.dynamicproxy;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;


/**
 * 动态代理:
 * @author lingwh
 *
 */
public class ProxyFactory {
	
	private Object target;
	
	public ProxyFactory(Object target) {
		this.target = target;
	}

	/**
     *
	 * @return
	 */
	public Object getProxyInstance() {
		return Proxy.newProxyInstance(target.getClass().getClassLoader(),target.getClass().getInterfaces(),
				new InvocationHandler() {
					@Override
					public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
						beforeMethodInvoke();
						Object invoke = method.invoke(target, args);
						afterMethodInvoke();
						return invoke;
					}
				});
	}
	
	public void beforeMethodInvoke() {
		System.out.println("JDK代理开始...");
		System.out.println("方法执行前的增强操作...");
	}
	
	public void afterMethodInvoke() {
		System.out.println("JDK代理结束...");
		System.out.println("方法执行后的增强操作...");
	}
 
}
