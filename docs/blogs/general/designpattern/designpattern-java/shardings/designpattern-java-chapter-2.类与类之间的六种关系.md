---
title: 使用Java语言编写设计模式-2.类与类之间的六种关系
description: 本章节涉及主要内容有：依赖关系,关联关系,聚合关系,组合关系,泛化关系,实现关系,六种关系耦合度强弱,具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试，可直接复制运行即可。
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
      content: 本章节涉及主要内容有：依赖关系,关联关系,聚合关系,组合关系,泛化关系,实现关系,六种关系耦合度强弱,具体每个小节中包含的内容可使通过下面的章节内容大纲进行查看,所有代码均经过严格测试，可直接复制运行即可。
---

# 2.类与类之间的六种关系
@include(@src/public/enhance/guidance/general/designpattern/designpattern-java/chapter/designpattern-java-guidance-chapter2.md)
## 2.3.依赖关系
### 2.3.1.依赖关系概述
    依赖关系(Dependence),只要是在类中用到了对方,那么它们之间就存在依赖关系。如果没有对方,无法通过编译。

    在代码中表现为
    a.类中用到了对方
    b.是类的成员属性
    c.是方法的返回类型
    d.是方法接收的参数类型
    e.方法中使用到
### 2.3.2.UML箭头及指向
    带箭头的虚线，指向被使用者
### 2.3.3.依赖关系类图
```mermaid
classDiagram
    PersonServiceBean ..> Department
    PersonServiceBean ..> IDCard
    PersonServiceBean ..> Person
    PersonServiceBean ..> PersonDao
    PersonServiceBean : -PersonDao personDao
    PersonServiceBean: +save(Person person) void
    PersonServiceBean: +getIDCard(Integer personId) IDCard
    PersonServiceBean: +modify() void
    class Department{
    }
    class IDCard{
    }
    class Person{
    }
    class PersonDao{
    }
    class PersonServiceBean{
    }
```
### 2.3.4.依赖关系代码
    Department.java
```java
package expand.uml.dependence;

public class Department {
}
```
    IDCard.java
```java
package expand.uml.dependence;

public class IDCard {
}
```
    Person.java
```java
package expand.uml.dependence;

public class Person {
}
```
    PersonDao.java
```java
package expand.uml.dependence;

public class PersonDao {
}
```
    PersonServiceBean.java
```java
package expand.uml.dependence;

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
```
## 2.4.关联关系
### 2.4.1.关联关系概述
    关联关系(Association),实际上就是类与类之间的联系,它是依赖关系的特例。关联关系具有导航性:即双向关联关系或单向关联关系
### 2.4.2.UML箭头及指向
    带普通箭头的实线,拥有者指向被拥有者
### 2.4.3.关联关系类图
    单向关联关系
```mermaid
classDiagram
    Person --> IDCard
    Person : -IDCard card
    class IDCard{
    }
```
    双向关联关系
```mermaid
classDiagram
    Person <--> IDCard
    Person : -IDCard card
    IDCard : -Person person
    class IDCard{
    }
    class Person{
    }
```
### 2.4.4.关联关系代码
    单向关联关系
    Person.java
```java
package expand.uml.association.singleone2one;
//一个人只有一个身份证,一个身份证也只能对应一个人；所以身份证跟人是一对一关系
public class Person {
    private IDCard card;
}
```
    IDCard.java
```java
package expand.uml.association.singleone2one;
//若果代码是这样写的话，就是单向一对一的关系。因为Person中有IDCard成员变量，而中IDCard没有Person成员变量
public class IDCard {
}
```
    双向关联关系
    Person.java
```java
package expand.uml.association.doubleone2one;

//因为PersonIDCard中有成员变量，而中IDCard也有Person成员变量，所以这是双向一对一关系
public class Person {
    private IDCard card;
}
```
    IDCard.java
```java
package expand.uml.association.doubleone2one;
//因为Person中有IDCard成员变量，而中IDCard也有Person成员变量，所以这是双向一对一关系
public class IDCard {
    private Person person;
}
```
## 2.5.聚合关系
### 2.5.1.聚合关系概述
    聚合关系(Aggregation)表示的是整体和部分的关系,整体与部分可以分开。聚合关系是关联关系的特例,所以它具有关联的导航性与多重性。
### 2.5.2.UML箭头及指向
    带空心菱形的实心线,菱形指向整体.
### 2.5.3.聚合关系类图
```mermaid
classDiagram
    Computer o-- Moniter
    Computer o-- Mouse
    Computer : -Moniter moniter
    Computer : -Mouse mouse
    Computer: +getMoniter() Moniter
    Computer: +setMoniter(Moniter moniter) void
    Computer: +getMouse() Mouse
    Computer: +setMouse(Mouse mouse) void
    class Moniter{
    }
    class Mouse{
    }
```
### 2.5.4.聚合关系代码
    Moniter.java
```java
package expand.uml.aggregation;

public class Moniter {
}
```
    Mouse.java
```java
package expand.uml.aggregation;

public class Mouse {
}
```
    Computer.java
```java
package expand.uml.aggregation;

public class Computer {
    //显示器可以和Computer分离
    private Moniter moniter;
    //鼠标可以和Computer分离
    private Mouse mouse;

    public Moniter getMoniter() {
        return moniter;
    }

    public void setMoniter(Moniter moniter) {
        this.moniter = moniter;
    }

    public Mouse getMouse() {
        return mouse;
    }

    public void setMouse(Mouse mouse) {
        this.mouse = mouse;
    }
}
```
## 2.6.组合关系
### 2.6.1.组合关系概述
    组合关系(Composite))表示的是整体和部分的关系,整体与部分不能分开。组合关系是关联关系的一种特例。比如说B类里面用到了一个A类,且这个A类是通过new创建的,也就是说当B类被初始化的时候A类也被初始化了。(耦合度比聚合高)
### 2.6.2.UML箭头及指向
    带实心菱形的实线,菱形指向整体
### 2.6.3.组合关系类图
```mermaid
classDiagram
    Person *-- Head
    Person *-- Leg
    Person : -Head head
    Person : -Leg leg
    class Head{
    }
    class Leg{
    }
```
### 2.6.4.组合关系代码
    Head.java
```java
package expand.uml.composition;

public class Head {
}
```
    Leg.java
```java
package expand.uml.composition;

public class Leg {
}
```
    Person.java
```java
package expand.uml.composition;

public class Person {
    //组合关系，Person和Head是无法分开的
    private Head head = new Head();
    //组合关系，Person和Leg是无法分开的
    private Leg leg = new Leg();
}
```
## 2.7.泛化关系
### 2.7.1.泛化关系概述
    泛化关系(Generalization),泛化关系实际上就是继承关系,它是依赖关系的特例。如果A类继承了B类,我们就说A和B存在泛化关系。
### 2.7.2.UML箭头及指向
    带三角箭头的实线,子类指向父类
### 2.7.3.泛化关系类图
```mermaid
classDiagram
    DaoSupport <|-- PersonServiceBean
    DaoSupport: +save(Object object) void
    DaoSupport: +delete(Object object) void
    class PersonServiceBean{
    }
```
### 2.7.4.泛化关系代码
    DaoSupport.java
```java
package expand.uml.generalization;

public abstract class DaoSupport {
    public void save(Object object){}
    public void delete(Object object){}
}
```
    PersonServiceBean.java
```java
package expand.uml.generalization;

public class PersonServiceBean extends DaoSupport{
}
```
## 2.8.实现关系
### 2.8.1.实现关系概述
    实现关系(Realization),比如某个类实现了一个接口。它也是依赖关系的特例。
### 2.8.2.UML箭头及指向
    带三角箭头的虚线,箭头指向接口
### 2.8.3.实现关系类图
```mermaid
classDiagram
    PersonService <|.. PersonServiceBean
    PersonService: +delete(Integer id) void
    class PersonServiceBean{
    }
```
### 2.8.4.实现关系代码
    PersonService.java
```java
package expand.uml.realization;

public interface PersonService {
    public void delete(Integer id);
}
```
    PersonServiceBean.java
```java
package expand.uml.realization;

public class PersonServiceBean implements PersonService{
    @Override
    public void delete(Integer id) {

    }
}
```
## 2.9.六种关系耦合度强弱
    泛化 = 实现 > 组合 > 聚合 > 关联 > 依赖


<ScrollIntoPageView/>
<HideSideBar/>
