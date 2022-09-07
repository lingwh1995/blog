package com.dragonsoft.designpattern.basic.principles.demeter;

import java.util.ArrayList;
import java.util.List;

/**
 * 未遵守迪米特法则
 */
public class Demeter1 {
    public static void main(String[] args) {
        SchoolManager1 schoolManager1 = new SchoolManager1();
        schoolManager1.printAllEmployee(new CollegeManager1());
    }
}

/**
 * 学校总部员工类
 */
class Employee1 {
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
class CollegeEmployee1 {
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
class CollegeManager1 {
    public List<CollegeEmployee1> getAllCollegeEmployee(){
        List<CollegeEmployee1> list = new ArrayList<CollegeEmployee1>();
        //增加10个员工到学院
        for(int i=0; i<10; i++){
            CollegeEmployee1 collegeEmployee = new CollegeEmployee1();
            collegeEmployee.setId("学院员工id" + i);
            list.add(collegeEmployee);
        }
        return list;
    }
}

/**
 * 学校总部员工管理类
 *  SchoolManager的直接朋友：Employee、CollegeManager
 *  SchoolManager的非直接朋友：CollegeEmployee，这样就 违反了迪米特法则（只与直接的朋友通信，最少知道原则，避免与非直接朋友的耦合）
 */
class SchoolManager1 {
    public List<Employee1> getAllEmployee(){
        List<Employee1> list = new ArrayList<Employee1>();
        //增加5个员工到学校总部
        for(int i=0; i<5; i++){
            Employee1 employee1 = new Employee1();
            employee1.setId("学校总部员工id" + i);
            list.add(employee1);
        }
        return list;
    }

    /**
     * 输出学校总部和学院员工信息
     * @param collegeManager1
     */
    public void printAllEmployee(CollegeManager1 collegeManager1){
        List<CollegeEmployee1> allCollegeEmployee = collegeManager1.getAllCollegeEmployee();
        System.out.println("--------------学院员工--------------");
        for (CollegeEmployee1 collegeEmployee1 : allCollegeEmployee) {
            System.out.println(collegeEmployee1.getId());
        }

        List<Employee1> allEmployee = this.getAllEmployee();
        System.out.println("--------------学校总部员工--------------");
        for (Employee1 employee1 : allEmployee) {
            System.out.println(employee1.getId());
        }
    }
}