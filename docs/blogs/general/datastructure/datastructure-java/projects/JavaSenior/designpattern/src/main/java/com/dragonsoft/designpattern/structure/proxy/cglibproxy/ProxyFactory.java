package com.dragonsoft.designpattern.structure.proxy.cglibproxy;

import java.lang.reflect.Method;

import net.sf.cglib.proxy.Enhancer;
import net.sf.cglib.proxy.MethodInterceptor;
import net.sf.cglib.proxy.MethodProxy;

public class ProxyFactory {
	private Object target;

	public ProxyFactory(Object target) {
		this.target = target;
	}
	
    //返回代理对象
    public Object getProxyInstance(){
        //1.创建一个工具类
        Enhancer enhancer = new Enhancer();
        //2.设置父类
        enhancer.setSuperclass(target.getClass());
        //3.设置回调函数
        enhancer.setCallback(new MethodInterceptor() {
			
			@Override
			public Object intercept(Object obj, Method method, Object[] args, MethodProxy proxy) throws Throwable {
				Object invoke= null;
		        System.out.println("cglib代理开始......");
		        invoke = method.invoke(target,args);
		        System.out.println("cglib代理结束......");
		        return invoke;
			}
		});
        //4创建子类对象，即代理对象
        return enhancer.create();
    }
}
