package com.dragonsoft.designpattern.basic.classrelation.dependence;

public class PersonServiceBean {
    private PersonDao personDao;
    public void save(Person person){}
    public IDCard getIDCard(Integer personId){
        return null;
    }
    public void modify(){
        Department department = new Department();
    }
}
