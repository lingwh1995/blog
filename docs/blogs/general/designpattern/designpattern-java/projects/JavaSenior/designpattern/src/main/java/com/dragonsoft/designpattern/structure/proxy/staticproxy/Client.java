package com.dragonsoft.designpattern.structure.proxy.staticproxy;


import org.junit.Test;

/**
 * 使用静态代理对UserServiceImpl增强需要用到IUserService这个接口
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
	 * 测试静态代理
	 */
	@Test
	public void fun2() {
		IUserService userService = new UserServiceImpl();
		UserServiceImplProxy userServiceImplProxy = new UserServiceImplProxy(userService);
		
		//打印数据库中所有原始数据
		userServiceImplProxy.showUsers();
		//删除001用户
		userServiceImplProxy.deleteById("001");
		//删除002用户
		userServiceImplProxy.deleteById("002");
		//打印操作后数据库中所有数据
		userServiceImplProxy.showUsers();
		
		//查询，注意001和002已经删除了，要查就差003、004、005这三条数据
		System.out.println("id=004的用户信息:" + userServiceImplProxy.getById("004"));
	}
}
