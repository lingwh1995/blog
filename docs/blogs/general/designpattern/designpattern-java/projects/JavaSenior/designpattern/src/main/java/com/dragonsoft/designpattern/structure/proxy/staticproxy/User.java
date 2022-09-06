package com.dragonsoft.designpattern.structure.proxy.staticproxy;

public class User {
	private String id;
	private String name;
	private Integer age;
	private String school;
	
	
	public User(String id, String name, Integer age, String school) {
		this.id = id;
		this.name = name;
		this.age = age;
		this.school = school;
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	public Integer getAge() {
		return age;
	}
	public void setAge(Integer age) {
		this.age = age;
	}
	
	public String getSchool() {
		return school;
	}
	public void setSchool(String school) {
		this.school = school;
	}
	
	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", age=" + age + ", school=" + school + "]";
	}
	
}
