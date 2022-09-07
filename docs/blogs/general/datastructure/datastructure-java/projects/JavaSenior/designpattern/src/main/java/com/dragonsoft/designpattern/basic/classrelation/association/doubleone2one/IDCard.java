package com.dragonsoft.designpattern.basic.classrelation.association.doubleone2one;
//因为Person中有IDCard成员变量，而中IDCard也有Person成员变量，所以这是双向一对一关系
public class IDCard {
    private Person person;
}
