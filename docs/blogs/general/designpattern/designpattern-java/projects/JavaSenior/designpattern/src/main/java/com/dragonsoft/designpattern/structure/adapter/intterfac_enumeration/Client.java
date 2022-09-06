package com.dragonsoft.designpattern.structure.adapter.intterfac_enumeration;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Enumeration;
import java.util.Iterator;

import org.junit.Test;

/**
 * 1.Enumeration和Iterator都相当于一个遍历集合中数据的指针,并不是把集合的所有数据封装在这个对象中,
 *   指针中封装了两个主要的信息:1>.当前元素的下一个元素	 2>.当前元素是否有下一个元素
 * 2.Collection.enumeration(Collection c)这个方法使用了对象接口适配器模式,
 * 	  不过这个对象是通过匿名内部类在方法中创建的
 * @author lingwh
 *
 */
public class Client {

	/**
	 * 自己实现的Enumeration遍历器
	 */
	@Test
	public void fun1() {
		ArrayList<Integer> arrayList = new ArrayList<Integer>();
		arrayList.add(1);
		arrayList.add(2);
		arrayList.add(3);
		Iterator<Integer> iterator = arrayList.iterator();
		//自己实现的Enumeration遍历器
		IteratorAdapter1<Integer> concrectEnumeration = new IteratorAdapter1<Integer>(iterator);
		while(concrectEnumeration.hasMoreElements()) {
			Integer element = concrectEnumeration.nextElement();
			System.out.println(element);
		}
	}
	
	/**
	 * 自己实现的Enumeration遍历器
	 */
	@Test
	public void fun2() {
		ArrayList<Integer> arrayList = new ArrayList<Integer>();
		arrayList.add(1);
		arrayList.add(2);
		arrayList.add(3);
		//自己实现的Enumeration遍历器
		IteratorAdapter2<Integer> concrectEnumeration = new IteratorAdapter2<Integer>(arrayList);
		while(concrectEnumeration.hasMoreElements()) {
			Integer element = concrectEnumeration.nextElement();
			System.out.println(element);
		}
	}
	
	/**
	 * 模拟Collections.enumeration实现适配器模式
	 * @param <E>
	 */
	@Test
	public <E> void fun3() {
		ArrayList<Integer> arrayList = new ArrayList<Integer>();
		arrayList.add(1);
		arrayList.add(2);
		arrayList.add(3);
		Enumeration<Integer> enumeration = enumeration(arrayList);
		while(enumeration.hasMoreElements()) {
			Integer element = enumeration.nextElement();
			System.out.println(element);
		}
	}

	/**
	 * 使用匿名内部类创建了一个Enumeration接口的实现类并且重写了Enumeration接口中的方法
	 * 注意：如果方法里面嵌套一个匿名内部类,则匿名内部类需要的外部参数通过方法参数直接传递,
	 *     如果是为接口创建了一个实现类,实现类里面需要的参数通过setter()或者实现类的构造方法传入给成员变量
	 * @param <E>
	 * @param c
	 * @return
	 */
	private <E> Enumeration<E> enumeration(Collection<E> c) {
		Enumeration<E> enumeration = 
			new Enumeration<E>() {
				private final Iterator<E> iterator = c.iterator();
				@Override
				public boolean hasMoreElements() {
					return iterator.hasNext();
				}
	
				@Override
				public E nextElement() {
					return iterator.next();
				}
			};
		return enumeration;	
	}
	
	/**
	 * Collections提供的Enumeration遍历器
	 */
	@Test
	public void fun4() {
		ArrayList<Integer> arrayList = new ArrayList<Integer>();
		arrayList.add(1);
		arrayList.add(2);
		arrayList.add(3);
		//Collections提供的Enumeration遍历器
		Enumeration<Integer> enumeration = Collections.enumeration(arrayList);
		while(enumeration.hasMoreElements()) {
			Integer element = enumeration.nextElement();
			System.out.println(element);
		}
	}

}
