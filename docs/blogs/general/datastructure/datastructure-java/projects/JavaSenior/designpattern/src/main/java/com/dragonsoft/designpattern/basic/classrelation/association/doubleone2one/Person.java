package com.dragonsoft.designpattern.basic.classrelation.association.doubleone2one;

//因为PersonIDCard中有成员变量，而中IDCard也有Person成员变量，所以这是双向一对一关系
public class Person {
    private IDCard card;
}
