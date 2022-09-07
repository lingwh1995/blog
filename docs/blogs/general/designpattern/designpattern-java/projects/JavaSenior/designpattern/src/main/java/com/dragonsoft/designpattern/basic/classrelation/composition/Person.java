package com.dragonsoft.designpattern.basic.classrelation.composition;

public class Person {
    //聚合关系，Person和IDCard是可以分开的
    private IDCard idCard;
    //组合关系，Person和Head是无法分开的
    private Head head = new Head();
}
