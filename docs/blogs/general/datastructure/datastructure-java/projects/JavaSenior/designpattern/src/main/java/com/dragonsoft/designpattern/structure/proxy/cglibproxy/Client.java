package com.dragonsoft.designpattern.structure.proxy.cglibproxy;


import org.junit.Test;

/**
 * cglib代理，可以直接为一个类生成一个代理对象
 * @author lingwh
 *
 */
public class Client {
	
	/**
	 * 测试不使用代理模式
	 */
	@Test
	public void fun1() {
		IUserService userService = new UserServiceImpl();
		//打印数据库中所有原始数据
		userService.showUsers();
		//删除001用户
		userService.deleteById("001");
		//删除002用户
		userService.deleteById("002");
		//打印操作后数据库中所有数据
		userService.showUsers();
		
		//查询，注意001和002已经删除了，要查就差003、004、005这三条数据
		System.out.println("id=004的用户信息:" + userService.getById("004"));
	}
	
	/**
	 * 测试cglib代理
	 */
	@Test
	public void fun2() {
		IUserService userService = new UserServiceImpl();
		ProxyFactory proxyFactory = new ProxyFactory(userService);
		IUserService proxyInstance = (IUserService)proxyFactory.getProxyInstance();
		//删除001用户
		proxyInstance.deleteById("001");
		//删除002用户
		proxyInstance.deleteById("002");
		//查询，注意001和002已经删除了，要查就差003、004、005这三条数据
		System.out.println("id=004的用户信息:" + proxyInstance.getById("004"));
	}
}
