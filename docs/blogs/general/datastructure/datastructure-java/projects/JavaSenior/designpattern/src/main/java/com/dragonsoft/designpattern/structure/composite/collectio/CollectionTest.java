package com.dragonsoft.designpattern.structure.composite.collectio;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Vector;

import org.junit.Test;

import com.dragonsoft.designpattern.structure.composite.transparent.abs1.College;
import com.dragonsoft.designpattern.structure.composite.transparent.abs1.Department;
import com.dragonsoft.designpattern.structure.composite.transparent.abs1.University;

/**
 * Java 集合框架中的组合模式
 * @author lingwh
 *
 */
public class CollectionTest {

	/**
	 * 测试组合模式composite容器中加入leaf节点
	 */
	@Test
	public void fun1() {
		//创建大学
		University university = new University("西安财经学院");
		//创建学院
		College itCollege = new College("信息学院");
		College langCollege = new College("外语学院");
		//创建系
		Department ecDepartment = new Department("电子商务系");
		Department seDepartment = new Department("软件工程系");
		Department enDepartment = new Department("英语系");
		Department jpDepartment = new Department("日语系");
		
		//给大学添加学院
		university.add(itCollege);
		university.add(langCollege);
		
		//给学院添加系
		itCollege.add(ecDepartment);
		itCollege.add(seDepartment);
		langCollege.add(enDepartment);
		langCollege.add(jpDepartment);
		
		university.show();
		System.out.println(university.getByIndex(1));
		System.out.println("------------------------");
		university.remove(itCollege);
		university.show();
	}
	/**
	 * 测试组合模式composite容器中加入composite容器
	 * HashMap.putAll(Map m)就是composite容器中加入composite容器
	 */
	@Test
	public void fun2() {
		/**
		 * 模拟HashMap.put(k,v),即给容器中添加叶子组件
		 */
		//西安财经大学相关：创建大学
		University universityUFE = new University("西安财经学院");
		//西安财经大学相关：创建学院
		College langCollege = new College("外语学院");
		//西安财经大学相关：创建系
		Department enDepartment = new Department("英语系");
		Department jpDepartment = new Department("日语系");
		//西安财经大学相关：给大学添加学院
		universityUFE.add(langCollege);
		//西安财经大学相关：给学院添加系
		langCollege.add(enDepartment);
		langCollege.add(jpDepartment);
		
		/**
		 * 模拟HashMap.put(k,v),即给容器中添加叶子组件
		 */
		//西安电子科技大学相关：创建大学
		University universityXDU = new University("西安电子科技大学");
		//西安电子科技大学相关：创建学院
		College itCollege = new College("信息学院");
		//西安电子科技大学相关：创建系
		Department ecDepartment = new Department("电子商务系");
		Department seDepartment = new Department("软件工程系");
		//西安电子科技大学相关：给大学添加学院
		universityXDU.add(itCollege);
		//西安电子科技大学相关：给学院添加系
		itCollege.add(ecDepartment);
		itCollege.add(seDepartment);
		
		//西安财经大学相关：打印院系(为了方便查看效果,可以暂时注掉下一行代码)
//		universityUFE.show();
		System.out.println("------------------------");
		//西安电子科技大学相关：打印院系(为了方便查看效果,可以暂时注掉下一行代码)
//		universityXDU.show();
		System.out.println("------------------------");
		
		/**
		 * 模拟HashMap.putAll(Map m),即给容器中添加容器组件
		 */
		universityUFE.add(universityXDU);
		universityUFE.show();
	}

	/**
	 * 测试组合模式composite容器中加入composite容器,即HashMap中添加一个新的HashMap
	 * 角色分析:
	 * 	abstractComponment:AbstractMap
	 * 	composite:HashMap(具有管理容器和leaf节点的作用)
	 * 	leaf:Node(不具有管理容器和leaf节点的作用,该Node中有getKey()和getValue()方法)
	 * 比较特殊的是：
	 * 	1.AbstractMap上层有一个接口Map,	abstract class AbstractMap implements Map {}
	 * 	2.Node未继承AbstractMap这个抽象类，但是Node是静态内部类，相当于也实现了AbstractMap这个抽象类
	 * 注意:Map存放值的时候,会根据key自动去重
	 */
	@Test
	public void fun3() {
		//创建一个容器对象,也就是一个Composite角色
		Map<Integer, String> container = new HashMap<Integer, String>();
		//0 和 "史记" 会在HashMap组装成一个Node,调用put时会先把0 和 "史记"组装成Node，在进行真正的put操作,相当于add了一个leaf对象
		container.put(0, "史记");//给容器中增加一个leaf对象
		container.put(1, "西游记");//给容器中增加第二个leaf对象
		
		//创建另一个容器对象,也就是一个新的Composite角色
		Map<Integer, String> anotherContainer = new HashMap<Integer, String>();
		anotherContainer.put(2, "西游记");
		anotherContainer.put(3, "水浒传");
		anotherContainer.put(4, "红楼梦");
		anotherContainer.put(5, "三国演义");
		container.putAll(anotherContainer);//compisite组件
		
		//打印容器中的所有对象
		container.forEach((key,value) -> System.out.println(key + ":" + value));
	}
	
	/**
	 * 测试组合模式composite容器中加入composite容器,即ArrayList中添加一个新的ArrayList
	 * 角色分析:
	 * 	abstractComponment:AbstractList
	 * 	composite:ArrayList(具有管理容器和leaf节点的作用)
	 * 	leaf:没有叶子节点,是组合模式的一种特殊情况
	 * 比较特殊的是：
	 * 	1.AbstractList上层有一个接口List,	abstract class AbstractList implements List {}
	 * 	2.虽然没有叶子节点，但是ArrayLsit.addAll()具有管理容器(Compiste角色)的特点，所以仍然可认为是组合模式，
	 *    组合模式的思想体现在可以给ArrayLsit容器中添加一个节点数据，也可以给ArrayLsit容器中添加一个新的ArrayLsit
	 */
	@Test
	public void fun4() {
		//创建一个容器对象,也就是一个Composite角色
		List<String> container = new ArrayList<>();
		//"史记" 会在ArrayList组装成一个Node,调用add时会先把"史记"组装成Node，在进行真正的add操作,相当于add了一个leaf对象
		container.add("史记");//给容器中增加一个leaf对象
		container.add("西游记");//给容器中增加一个leaf对象
		
		//创建另一个容器对象,也就是一个新的Composite角色
		List<String> anotherContainer = new ArrayList<>();
		anotherContainer.add("西游记");
		anotherContainer.add("水浒传");
		anotherContainer.add("红楼梦");
		anotherContainer.add("三国演义");
		container.addAll(anotherContainer);//compisite组件
		
		//打印容器中的所有对象
		container.forEach(element -> System.out.println(element));
	}
	
	/**
	 * 测试组合模式composite容器中加入composite容器,即Vector中添加一个新的Vector
	 * 角色分析:
	 * 	abstractComponment:AbstractList
	 * 	composite:Vector(具有管理容器和leaf节点的作用)
	 * 	leaf:没有叶子节点,是组合模式的一种特殊情况
	 * 比较特殊的是：
	 * 	1.AbstractList上层有一个接口List,	abstract class AbstractList implements List {}
	 * 	2.虽然没有叶子节点，但是Vector.addAll()具有管理容器(Compiste角色)的特点，所以仍然可认为是组合模式，
	 *    组合模式的思想体现在可以给ArrayLsit容器中添加一个节点数据，也可以给Vector容器中添加一个新的Vector
	 */
	@Test
	public void fun5() {
		//创建一个容器对象,也就是一个Composite角色
		List<String> container = new Vector<>();
		//"史记" 会在ArrayList组装成一个Node,调用add时会先把"史记"组装成Node，在进行真正的add操作,相当于add了一个leaf对象
		container.add("史记");//给容器中增加一个leaf对象
		container.add("西游记");//给容器中增加一个leaf对象
		
		//创建另一个容器对象,也就是一个新的Composite角色
		List<String> anotherContainer = new Vector<>();
		anotherContainer.add("西游记");
		anotherContainer.add("水浒传");
		anotherContainer.add("红楼梦");
		anotherContainer.add("三国演义");
		container.addAll(anotherContainer);//compisite组件
		
		//打印容器中的所有对象
		container.forEach(element -> System.out.println(element));
	}
	
	/**
	 * 测试组合模式composite容器中加入composite容器,即LinkedList中添加一个新的LinkedList
	 * 角色分析:
	 * 	abstractComponment:AbstractList
	 * 	composite:HashMap(具有管理容器和leaf节点的作用)
	 * 	leaf:Node(不具有管理容器和leaf节点的作用,该Node中没有方法)
	 * 比较特殊的是：
	 * 	1.AbstractList上层有一个接口List,	abstract class AbstractList implements List {}
	 * 	2.Node未继承AbstractList这个抽象类，但是Node是静态内部类，相当于也实现了AbstractList这个抽象类
	 */
	@Test
	public void fun6() {
		//创建一个容器对象,也就是一个Composite角色
		List<String> container = new LinkedList<>();
		//"史记" 会在LinkedList组装成一个Node,调用add时会先把"史记"组装成Node，在进行真正的add操作,相当于add了一个leaf对象
		container.add("史记");//给容器中增加一个leaf对象
		container.add("西游记");//给容器中增加一个leaf对象
		
		//创建另一个容器对象,也就是一个新的Composite角色
		List<String> anotherContainer = new LinkedList<>();
		anotherContainer.add("西游记");
		anotherContainer.add("水浒传");
		anotherContainer.add("红楼梦");
		anotherContainer.add("三国演义");
		container.addAll(anotherContainer);//compisite组件
		
		//打印容器中的所有对象
		container.forEach(element -> System.out.println(element));
	}
}
