package com.dragonsoft.designpattern.basic.principles.demeter;

import java.util.ArrayList;
import java.util.List;

/**
 * 使用迪米特法则改进
 */
public class Demeter2 {
    public static void main(String[] args) {
        SchoolManager2 schoolManager2 = new SchoolManager2();
        schoolManager2.printAllEmployee(new CollegeManager2());
    }
}

/**
 * 学校总部员工类
 */
class Employee2 {
    private String id;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}

/**
 * 学院员工类
 */
class CollegeEmployee2 {
    private String id;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}

/**
 * 学院员工管理类
 */
class CollegeManager2 {
    public List<CollegeEmployee2> getAllCollegeEmployee(){
        List<CollegeEmployee2> list = new ArrayList<CollegeEmployee2>();
        //增加10个员工到学院
        for(int i=0; i<10; i++){
            CollegeEmployee2 collegeEmployee2 = new CollegeEmployee2();
            collegeEmployee2.setId("学院员工id" + i);
            list.add(collegeEmployee2);
        }
        return list;
    }
    /**
     * 输出学院员工信息
     * @param
     */
    public void printAllEmployee() {
        List<CollegeEmployee2> allCollegeEmployee = this.getAllCollegeEmployee();
        System.out.println("--------------学院员工--------------");
        for (CollegeEmployee2 collegeEmployee2 : allCollegeEmployee) {
            System.out.println(collegeEmployee2.getId());
        }
    }
}

/**
 * 学校总部员工管理类
 */
class SchoolManager2 {
    public List<Employee2> getAllEmployee(){
        List<Employee2> list = new ArrayList<Employee2>();
        //增加5个员工到学校总部
        for(int i=0; i<5; i++){
            Employee2 employee2 = new Employee2();
            employee2.setId("学校总部员工id" + i);
            list.add(employee2);
        }
        return list;
    }

    /**
     * 输出学校总部员工信息
     * @param collegeManager2
     */
    public void printAllEmployee(CollegeManager2 collegeManager2){
        //输出学院员工信息
        collegeManager2.printAllEmployee();

        //输出学校员工信息
        List<Employee2> allEmployee = this.getAllEmployee();
        System.out.println("--------------学校总部员工--------------");
        for (Employee2 employee2 : allEmployee) {
            System.out.println(employee2.getId());
        }

    }
}