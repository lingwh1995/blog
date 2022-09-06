package com.dragonsoft.designpattern.structure.proxy.staticproxy;

/**
 * 静态代理:
 * 	1.对getById()进行增强,只返回id和姓名信息,而不返回年龄和学校信息
 *  2.对deleteById()进行增强,不是管理员用户,没有删除数据的权限
 * @author lingwh
 *
 */
public class UserServiceImplProxy implements IUserService{
	
	private IUserService userServiceImpl;
	
	public UserServiceImplProxy(IUserService userServiceImpl) {
		this.userServiceImpl = userServiceImpl;
	}

	@Override
	public void deleteById(String id) {
		//模拟当前登录用户不是管理员,没有删除用户的权限
		boolean isAdmin = false;
		if(isAdmin) {
			userServiceImpl.deleteById(id);
		}else {
			System.out.println("当前登录的用户没有删除数据的权限....");
		}
	}

	@Override
	public User getById(String id) {
		User user = userServiceImpl.getById(id);
		return new User(user.getId(),user.getName(),null,null);
	}

	@Override
	public void showUsers() {
		userServiceImpl.showUsers();
	}

}
