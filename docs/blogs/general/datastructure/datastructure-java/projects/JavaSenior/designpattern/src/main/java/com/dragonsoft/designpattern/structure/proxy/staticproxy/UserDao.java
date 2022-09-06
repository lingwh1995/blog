package com.dragonsoft.designpattern.structure.proxy.staticproxy;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

public class UserDao {
	//所有人员
	static Map<String,User> users = new HashMap<>();
	//模拟数据库中的人员表
	static {
		users.put("001",new User("001", "张三", 18, "西安财经学院"));
		users.put("002",new User("002", "李四", 18, "西安财经学院"));
		users.put("003",new User("003", "王五", 18, "西安财经学院"));
		users.put("004",new User("004", "赵六", 18, "西安财经学院"));
		users.put("005",new User("005", "孙七", 18, "西安财经学院"));
	}
	
	public void deleteById(String id) {
		users.remove(id);
	}
	
	public User getById(String id) {
		return users.get(id);
	}
	
	public void showUsers() {
		Set<Entry<String, User>> userEntrySet = users.entrySet();
		Iterator<Entry<String, User>> iterator = userEntrySet.iterator();
		while(iterator.hasNext()) {
			Entry<String, User> userEntry = iterator.next();
			System.out.println(userEntry.getValue());
		}
		System.out.println("--------------------------");
	}
}
