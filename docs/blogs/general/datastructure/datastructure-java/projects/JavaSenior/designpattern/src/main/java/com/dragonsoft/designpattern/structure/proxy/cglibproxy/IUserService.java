package com.dragonsoft.designpattern.structure.proxy.cglibproxy;

public interface IUserService {
	
	void deleteById(String id);
	User getById(String id);
	void showUsers();
}
