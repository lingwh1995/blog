package com.dragonsoft.designpattern.structure.proxy.staticproxy;

public interface IUserService {
	
	void deleteById(String id);
	User getById(String id);
	void showUsers();
}
