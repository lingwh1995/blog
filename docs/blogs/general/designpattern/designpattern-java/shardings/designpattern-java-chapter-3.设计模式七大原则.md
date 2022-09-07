---
title: 使用Java语言编写设计模式-3.设计模式七大原则
description: 本章节涉及主要内容有：单一职责原则,接口隔离原则,依赖倒转原则,里氏替换原则,开闭原则,迪米特法则,合成复用原则,具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试，可直接复制运行即可。
headerDepth: 4
isOriginal: true
category:
  - 设计模式
star: false
tag:
date: 
head:
  - - meta
    - name: keywords
      content: 本章节涉及主要内容有：单一职责原则,接口隔离原则,依赖倒转原则,里氏替换原则,开闭原则,迪米特法则,合成复用原则,具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试，可直接复制运行即可。
---

# 3.设计模式七大原则
@include(@src/public/enhance/guidance/general/designpattern/designpattern-java/chapter/designpattern-java-guidance-chapter3.md)
## 3.3.单一职责原则
### 3.3.1.单一职责原则介绍
    概述
    一个类应该只负责一项职责

    为什么要遵循单一职责原则
    如类A负责两个不同职责: 职责1,职责2。当职责1需求变更而改变A时,可能造成职责2执行错误,所以需要将类A的粒度分解为A1,A2。

    注意事项
    a.降低类的复杂度,一个类只负责一项职责
    b.提高类的可读性,可维护性
    c.降低变更引起的风险
    d.通常情况下,我们应当遵守单一职责原则,只有逻辑足够简单,才可以在代码级违反单一职责原则,只有类中方法数量足够少,可以在方法级别保持单一职责原则,但是通常不要违反,因为很难确定代码以后是否会发生更改
### 3.3.2.单一职责原则代码
#### 3.3.2.1.不使用单一职责原则代码
```java
package expand.principles.single_reponsibility;

import org.junit.Test;

/**
 * 不使用单一职能原则
 *      Vehicle1.run()方法违反了单一职能原则
 */
public class SingleReponsibility1 {
    @Test
    public void test(){
        Vehicle1 vehicle1 = new Vehicle1();
        vehicle1.run("汽车");
        vehicle1.run("火车");
        vehicle1.run("飞机");
    }
}
class Vehicle1 {
    public void run(String vehicle) {
        System.out.println(vehicle + "在公路上跑...");
    }
}
```
#### 3.3.2.2.类级别单一职责原则代码
```java
package expand.principles.single_reponsibility;

import org.junit.Test;

/**
 * 类级别的单一职能原则：严格遵守了单一职责原则
 * 遵守了单一职责原则:但是会导致类大爆炸
 */
public class SingleResponsibility2 {
    @Test
    public void run(){
        RoadVehicle roadVehicle = new RoadVehicle();
        roadVehicle.run("汽车");
        AirVehicle airVehicle = new AirVehicle();
        airVehicle.run("飞机");
        WaterVehicle waterVehicle = new WaterVehicle();
        waterVehicle.run("轮船");
    }
}

class RoadVehicle {
    public void run(String vehicle){
        System.out.println(vehicle+"在路上跑...");
    }
}

class WaterVehicle {
    public void run(String vehicle){
        System.out.println(vehicle+"在水里跑...");
    }
}

class AirVehicle {
    public void run(String vehicle){
        System.out.println(vehicle+"在天上飞...");
    }
}
```
#### 3.3.2.3.方法别单一职责原则代码
```java
package expand.principles.single_reponsibility;

import org.junit.Test;

/**
 * 方法级别的单一职能原则，会导致类中方法大爆炸
 */
public class SingleResponsibility3 {
    @Test
    public void run(){
        Veicle3 veicle3 = new Veicle3();
        veicle3.runRoad("汽车");
        veicle3.runAir("飞机");
        veicle3.runWater("轮船");
    }
}

class Veicle3 {
    public void runRoad(String vehicle){
        System.out.println(vehicle+"在路上跑...");
    }
    public void runAir(String vehicle){
        System.out.println(vehicle+"在天上飞...");
    }
    public void runWater(String vehicle){
        System.out.println(vehicle+"在水里跑...");
    }
}
```
## 3.4.接口隔离原则
### 3.4.1.接口隔离原则介绍
    客户端不应该依赖它不需要的接口，即一个类对另一个类的依赖应该建立在最小的接口上
### 3.4.2.接口隔离原则代码
#### 3.4.2.1.不使用接口隔离原则代码
    Interface1.java
```java
package expand.principles.interface_segregation;

/**
 * 不遵守接口隔离原则
 */
public interface Interface1 {
    void operator1();
    void operator2();
    void operator3();
    void operator4();
    void operator5();
}

/**
 * A1通过Interface1依赖B类，但只会用到1、2、3方法
 */
class A1 {
    public void depend1(Interface1 interface1){
        interface1.operator1();

        //如果不进行接口隔离，interface1仍然可以调用接口中的operator2()、operator3()、operator4()和operator5()两个方法，实际根本不需要这四个方法
        //interface1.operator2();
        //interface1.operator3();
        //interface1.operator4();
        //interface1.operator5();
    }
    public void depend2(Interface1 interface1){
        interface1.operator2();
        //如果不进行接口隔离，interface1仍然可以调用接口中的operator1()、operator3()、operator4()和operator5()两个方法，实际根本不需要这两个方法
        //interface1.operator1();
        //interface1.operator3();
        //interface1.operator4();
        //interface1.operator5();
    }
    public void depend3(Interface1 interface1){
        interface1.operator3();
        //如果不进行接口隔离，interface1仍然可以调用接口中的operator1()、operator2()、operator4()和operator5()两个方法，实际根本不需要这两个方法
        //interface1.operator1();
        //interface1.operator2();
        //interface1.operator4();
        //interface1.operator5();
    }
}
/**
 * C1通过Interface1依赖D类，但只会用到1、4、5方法
 */
class C1 {
    public void depend1(Interface1 interface1){
        interface1.operator1();

        //如果不进行接口隔离，interface1仍然可以调用接口中的operator2()、operator3()、operator4()和operator5()两个方法，实际根本不需要这四个方法
        //interface1.operator2();
        //interface1.operator3();
        //interface1.operator4();
        //interface1.operator5();
    }
    public void depend4(Interface1 interface1){
        interface1.operator4();

        //如果不进行接口隔离，interface1仍然可以调用接口中的operator1()、operator2()、operator3()和operator5()两个方法，实际根本不需要这四个方法
        //interface1.operator1();
        //interface1.operator2();
        //interface1.operator3();
        //interface1.operator5();
    }
    public void depend5(Interface1 interface1){
        interface1.operator5();

        //如果不进行接口隔离，interface1仍然可以调用接口中的operator1()、operator2()、operator3()和operator4()两个方法，实际根本不需要这四个方法
        //interface1.operator1();
        //interface1.operator2();
        //interface1.operator3();
        //interface1.operator4();
    }
}
class B1 implements Interface1 {
    @Override
    public void operator1() {
        System.out.println("B1实现了操作1...");
    }

    @Override
    public void operator2() {
        System.out.println("B1实现了操作2...");
    }

    @Override
    public void operator3() {
        System.out.println("B1实现了操作3...");
    }

    @Override
    public void operator4() {
        System.out.println("B1实现了操作4...");
    }

    @Override
    public void operator5() {
        System.out.println("B1实现了操作5...");
    }
}
class D1 implements Interface1 {
    @Override
    public void operator1() {
        System.out.println("D1实现了操作1...");
    }

    @Override
    public void operator2() {
        System.out.println("D1实现了操作2...");
    }

    @Override
    public void operator3() {
        System.out.println("D1实现了操作3...");
    }

    @Override
    public void operator4() {
        System.out.println("D1实现了操作4...");
    }

    @Override
    public void operator5() {
        System.out.println("D1实现了操作5...");
    }
}
```

    Interface1Client.java
```java
package expand.principles.interface_segregation;

import org.junit.Test;

/**
 * 调用Interface1的客户端
 */
public class Interface1Client {
    /**
     * 测试A1通过Interface1依赖B1，但是只调用1、2、3方法
     */
    @Test
    public void testA1() {
        A1 a1 = new A1();
        //本来要传入接口Interface1的，现在根据面向接口编程原则，传入Interface1的实现B1
        a1.depend1(new B1());
        a1.depend2(new B1());
        a1.depend3(new B1());
    }

    /**
     * 测试C1通过Interface1依赖D1
     */
    @Test
    public void testC1() {
        C1 c1 = new C1();
        //本来要传入接口Interface1的，现在根据面向接口编程原则，传入Interface1的实现D1
        c1.depend1(new D1());
        c1.depend4(new D1());
        c1.depend5(new D1());
    }
}
```
#### 3.4.2.2.使用接口隔离原则代码
    Interface2.java
```java
package expand.principles.interface_segregation;

public interface Interface2 {
    void operator1();
}
/**
 * 遵循接口隔离原则
 *      把接口1差分为3个接口
 */
//public interface Interface1 {
//    void operator1();
//    void operator2();
//    void operator3();
//    void operator4();
//    void operator5();
//}
interface Interface2A {
    void operator1();
}

interface Interface2B {
    void operator2();
    void operator3();
}

interface Interface2C {
    void operator4();
    void operator5();
}

/**
 * 客户端不应该依赖它不需要的接口，即一个类对另一个类的依赖应该建立在最小的接口上
 * A2就是客户端
 * A2通过Interface1A,InterfaceC依赖B2类
 * 接口隔离后，interface2A只能调用operator1()
 *           interface2B只能调用operator2()和operator3()
 *           interface2C只能调用operator4()和operator5()
 */
class A2 {
    public void depend1(Interface2A interface2A){
        interface2A.operator1();
    }
    public void depend2(Interface2B interface2B){
        interface2B.operator2();
    }
    public void depend3(Interface2B interface2B){
        interface2B.operator3();
    }
}

/**
 * 客户端不应该依赖它不需要的接口，即一个类对另一个类的依赖应该建立在最小的接口上
 * C2就是客户端
 * C2通过Interface2A,Interface2B依赖D2类
 * 接口隔离后，interface2A只能调用operator1()
 *            interface2B只能调用operator2()和operator3()
 *            interface2C只能调用operator4()和operator5()
 */
class C2 {
    public void depend1(Interface2A interface2A){
        interface2A.operator1();
    }
    public void depend4(Interface2C interface2C){
        interface2C.operator4();
    }
    public void depend5(Interface2C interface2C){
        interface2C.operator5();
    }
}

class B2 implements Interface2A,Interface2B {
    @Override
    public void operator1() {
        System.out.println("B2实现了操作1...");
    }

    @Override
    public void operator2() {
        System.out.println("B2实现了操作2...");
    }

    @Override
    public void operator3() {
        System.out.println("B2实现了操作3...");
    }
}

class D2 implements Interface2A,Interface2C {
    @Override
    public void operator1() {
        System.out.println("D2实现了操作1...");
    }

    @Override
    public void operator4() {
        System.out.println("D2实现了操作4...");
    }

    @Override
    public void operator5() {
        System.out.println("D2实现了操作5...");
    }
}
```

    Interface2Client.java
```java
package expand.principles.interface_segregation;

import org.junit.Test;

public class Interface2Client {
    /**
     * 测试A2通过接口Interface2A,Interface2B依赖B2
     */
    @Test
    public void testA2() {
        A2 a2 = new A2();
        a2.depend1(new B2());
        a2.depend2(new B2());
        a2.depend3(new B2());
    }

    /**
     * 测试C2通过接口Interface2B,Interface2C依赖D2
     */
    @Test
    public void testC2() {
        C2 c2 = new C2();
        c2.depend1(new D2());
        c2.depend4(new D2());
        c2.depend5(new D2());
    }
}
```
## 3.5.依赖倒转原则
### 3.5.1.依赖倒转原则介绍
    概述
    a.高层模块不应该依赖底层模块,二者都应该依赖其抽象
    b.抽象不应该依赖细节，细节应该依赖抽象
    c.依赖反转的中心思想是面向结构编程
    d.依赖反转的思想是基于这样的理念:相对于细节的多变性，抽象的东西要稳定的多,以抽象为基础的架构比以细节为基础的架构要稳定的多,在java中,抽象的多指接口和抽象类,细节就是具体的实现类
    e.使用类或者接口的目的是制定规范,而不涉及任何具体的子类操作,把展现细节的任务交给他们的实现类去做

    依赖关系传递的三种方式
    a.接口传递
    b.构造方法传递
    c.setter方法传递

    注意事项
    a.底层模块尽量都要有抽象类或接口,或者两者都有，程序稳定性更好
    b.变量的声明类型尽量都是抽象类或者接口,这样我们的变量引用和实际对象之间,就存在一个缓冲层,有利于程序的优化和扩展
    c.继承是遵循里氏替换原则
### 3.5.2.依赖倒转原则代码
#### 3.5.2.1.不使用依赖倒转原则代码
```java
package expand.principles.dependenceinversion;

/**
 * 不使用依赖反转原则
 */
public class NoUseDependenceDeliverTest {
    public static void main(String[] args) {
        Person1 person1 = new Person1();
        person1.receviceEmail(new Email1());
        person1.receviceQQ(new QQ1());
        person1.receviceWeChat(new WeChat1());
    }
}

/**
 * 通过Person1实现接口消息的功能
 *      缺点:接受QQ要写一个方法，接收邮件要写一个方法
 */
class Person1{
    public void receviceEmail(Email1 email1){
        System.out.println(email1.getEmail());
    }
    public void receviceQQ(QQ1 qq1){
        System.out.println(qq1.getQQ());
    }
    public void receviceWeChat(WeChat1 weChat){
        System.out.println(weChat.getWeChat());
    }
}
class Email1 {
   public String getEmail(){
        return "电子邮件信息:HelloWorld";
   }
}
class QQ1 {
   public String getQQ(){
        return "QQ信息:收到了QQ消息";
   }
}
class WeChat1 {
    public String getWeChat(){
        return "微信信息:收到了微信消息";
    }
}
```
#### 3.5.2.2.使用依赖倒转原则代码
##### 3.5.2.2.1.依赖倒转原则初体验
```java
package expand.principles.dependenceinversion;

/**
 * 遵循依赖反转原则
 * 面向接口编程
 *      基于接口传递实现依赖
 */
public class UseDependenceDeliverTest {
    public static void main(String[] args) {
        //面向接口编程
        Person2 person2 = new Person2();
        person2.getMessage(new Email2());
        person2.getMessage(new QQ2());
        person2.getMessage(new WeChat2());
    }

}

class Person2 {
    public void getMessage(MessageInterface messageInterface) {
        System.out.println(messageInterface.sendMessage());
    }
}

interface MessageInterface {
    String sendMessage();
}

class Email2 implements MessageInterface{
    @Override
    public String sendMessage() {
        return  "电子邮件信息:HelloWorld";
    }
}

class QQ2 implements MessageInterface{
    @Override
    public String sendMessage() {
        return "QQ信息:收到了QQ消息";
    }
}
class WeChat2 implements MessageInterface{
    @Override
    public String sendMessage(){
        return "微信信息:收到了微信消息";
    }
}
```
##### 3.5.2.2.2.通过接口传递依赖
```java
package expand.principles.dependenceinversion;

/**
 * 依赖关系传递的三种方式
 *  第一种方式：通过接口传递依赖
 */
public class DependenceDeliver1 {
    public static void main(String[] args) {
        OpenAndClose1 openAndClose1 = new OpenAndClose1();
        openAndClose1.open(new ITV1() {
            @Override
            public void play() {
                System.out.println("ITV1播放......");
            }
        });
    }
}

interface ITV1{
    public void play();
}
interface IOpenAndClose1{
    public void open(ITV1 iTv1);
}
class OpenAndClose1 implements IOpenAndClose1{

    @Override
    public void open(ITV1 iTv1) {
        iTv1.play();
    }
}
```
##### 3.5.2.2.3.通过构造方法传递依赖
```java
package expand.principles.dependenceinversion;

/**
 * 依赖关系传递的三种方式
 *  第二种方式：通过构造方法传递依赖
 */
public class DependenceDeliver2 {
    public static void main(String[] args) {
        OpenAndClose2 openAndClose2 = new OpenAndClose2(new ITV2() {
            @Override
            public void play() {
                System.out.println("ITV2播放......");
            }
        });
        openAndClose2.open();
    }
}

interface ITV2{
    public void play();
}

interface IOpenAndClose2{
    public void open();
}

class OpenAndClose2 implements IOpenAndClose2{

    public ITV2 iTv2;
    public OpenAndClose2(ITV2 iTv2) {
        this.iTv2 = iTv2;
    }

    @Override
    public void open() {
        this.iTv2.play();
    }
}
```
##### 3.5.2.2.4.通过setter()方法传递依赖
```java
package expand.principles.dependenceinversion;

/**
 * 依赖关系传递的三种方式
 *  第三种方式：通过setter()方法传递依赖
 */
public class DependenceDeliver3 {
    public static void main(String[] args) {
        OpenAndClose3 openAndClose3 = new OpenAndClose3();
        openAndClose3.setItv3(new ITV3() {
            @Override
            public void play() {
                System.out.println("ITV3播放......");
            }
        });
        openAndClose3.open();
    }
}

interface ITV3{
    public void play();
}

interface IOpenAndClose3 {
    public void open();
}

class OpenAndClose3 implements IOpenAndClose3{

    private ITV3 itv3;

    public void setItv3(ITV3 itv3) {
        this.itv3 = itv3;
    }

    @Override
    public void open() {
        this.itv3.play();
    }
}
```
## 3.6.里氏替换原则
### 3.6.1.里氏替换原则介绍
    概述
    里氏替换原则告诉我们,继承实际上让两个类耦合性增强了,在适当的情况下,可以通过聚合、组合、依赖来解决问题

    里氏替换原则是为了解决了什么问题
    a.正确的使用继承
    b.将原来的继承关系转换为继承基类+聚合/组合/依赖关系

    里氏替换原则详细说明
    a.所有能使用父类的地方,都能透明的使用该父类的子类对象
    即继承时,子类尽量不要重写父类的方法,除非迫不得已,如果非要重写,就再写一个更基础的类,把这个要重写的方法提到基类里面去
    b.遵循里氏替换原则,把继承这种高耦合的关系转换为聚合、组合、依赖这几种低耦合的关系
### 3.6.2.里氏替换原则代码
## 3.7.开闭原则
### 3.7.1.开闭原则介绍
    概述
    对修改关闭,对扩展开放

    开闭原则详细说明
    a.开闭原则是编程中最基础，最为重要的原则
    b.一个软件实体,函数模块应该对扩展开放(对提供功能的一方而言),对修改关闭(对调用方/使用功能的一方而言,注意:不是对于客户端开放,客户端调用方法的使用方)。换而言之,当当增加一个新的类或者方法后,原先正在使用的代码不会收到丝毫影响,概括的说:对扩展开放,对修改关闭,即用抽象构建框架,用实现扩展细节
    c.当软件需要变化时,尽量通过扩展软件的实体行为来实现变化,而不是通过修改已有的代码去实现,简单的说,就是通过扩展而不是通过修改已有代码
    d.使用设计模式就是为了使代码更遵守开闭原则,是最重要的原则,其他的设计模式都是为了达到开闭原则的效果
## 3.8.迪米特法则
### 3.8.1.迪米特法则介绍
    概述
    只与直接的朋友通信，最少知道原则,避免与非直接朋友的耦合,对自己依赖的类知道的越少越好,对于被依赖的类不管多复杂,都尽量将逻辑封在内部。需要注意的是降低类之间的耦合,只是减少不必要的耦合,并不是要求完全解除耦合

    迪米特法则详细说明
    a.一个对象应该对其他对象保持最少的了解
    b.类与类关系越密切,耦合度越大
    c.迪米特法则又称最少知道原则,即一个类对自己依赖的类知道的越少越好,也就是说,对于被依赖的类不管多么复杂,都应该尽量将逻辑封装在类的内部,除了对外提供public方法之外,不对外泄露任何信息
    e.迪米特方法还有个更简单的定义: 只与直接朋友通信
        直接朋友:每个对象都会与其他对象有耦合关系,只要两个对象之间有耦合关系,我们就直接说这两个对象之间是朋友关系。耦合的方式有很多依赖、关联、组合、聚合，其中我们将出现在成员变量,方法参数,方法返回值这几个位置中类称为直接朋友,而出现在局部变量中的类不是直接朋友,也就是说,陌生的类最好不要以局部变量的方式出现在类的内部

    直接朋友和间接朋友
    直接朋友:出现在返回值、成员变量、方法参数中的类
    间接朋友:出现在方法中作为局部变量的类
    class A{
        public void fun(){}
    }
    class C{
        public void fun(){}
    }
    class B{
        //C就是B的直接朋友:出现在成员变量位置
        private C c = new C();
        //C就是B的直接朋友:出现在方法参数位置
        public void test1(C c){
            c.fun();
        }
        //C就是B的直接朋友:出现在返回值位置
        public C test3(){
            return null;
        }
        public void test4(){
            //A就是B的间接朋友:出现在方法中作为局部变量位置
            A a = new A();
            a.fun();
        }
    }
## 3.9.合成复用原则
### 3.9.1.合成复用原则介绍
    概述
    尽量使用合成/聚合方法,避免使用继承

    使用合成复用原则有什么效果
    当A继承B后,A拥有B所有的方法,使用合成复用改进后,A可以调用B中的方法,不用的方法就不出现在B中了

    合成复用原则与继承原则关系
    在编程中,推荐尽量使用合成复用原则来代替继承,但是反过来,可以使用合成复用原则解决的问题也可以使用继承解决 
<HideSideBar/>

<ScrollIntoPageView/>
<HideSideBar/>
