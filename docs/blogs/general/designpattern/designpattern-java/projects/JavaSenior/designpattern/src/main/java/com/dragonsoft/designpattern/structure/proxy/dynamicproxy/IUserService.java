package com.dragonsoft.designpattern.structure.proxy.dynamicproxy;

public interface IUserService {
	
	void deleteById(String id);
	User getById(String id);
	void showUsers();
}
