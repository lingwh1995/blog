package com.dragonsoft.designpattern.create.prototype;


import java.io.IOException;

import org.junit.Test;

/**
 * 实现深拷贝的两种方式:
 * 	1.克隆
 *  2.对象序列化
 * @author lingwh
 *
 */
public class DeepSheepClient {
	
	/**
	 * 测试克隆实现深拷贝
	 * @throws CloneNotSupportedException
	 */
	@Test
	public void fun1() throws CloneNotSupportedException {
		Color color = new Color("RED");
		DeepSheep deepSheep = new DeepSheep("多莉",10,color);
		DeepSheep cloneSheep1 = deepSheep.clone();
		DeepSheep cloneSheep2 = deepSheep.clone();
		System.out.println("原型Sheep:" + deepSheep);
		System.out.println("克隆Sheep1:" + cloneSheep1);
		System.out.println("克隆Sheep2:" + cloneSheep2);
		
		System.out.println("原型和克隆对象是否同一个对象:" + (deepSheep == cloneSheep1));
		System.out.println("克隆对象1和克隆对象2是否同一个对象:" + (cloneSheep1 == cloneSheep2));
		
		//测试浅拷贝方式一:修改引用指向的内容
		DeepSheep cloneSheep3 = deepSheep.clone();
		System.out.println("克隆Sheep3:" + cloneSheep3);
		//修改cloneSheep3(克隆羊3)中color属性的值，然后再克隆
			//运行后发现了修改cloneSheep3的color属性的没有值影响到了cloneSheep4的color属性的值
			//获取克隆对象3中的color属性引用，并修改该引用指向的值，将颜色由RED改为BLUE 
			//结论：深拷贝是把引用类型数据的引用和引用指向的内容都复制了一份，所以修改cloneSheep3中color的引用指向的内容不会影响到其他克隆对象的color的属性
		Color cloneSheep3Color = cloneSheep3.getColor();
		cloneSheep3Color.setColor("BLUE");
		DeepSheep cloneSheep4 = deepSheep.clone();
		System.out.println("克隆Sheep4:" + cloneSheep4);
		
		//测试浅拷贝方式二:打印hashCode
		System.out.println("------------------------------");
		System.out.println("原型Sheep中的color属性的hashcode:" + deepSheep.getColor().hashCode());
		System.out.println("克隆Sheep1中的color属性的hashcode:" + cloneSheep1.getColor().hashCode());
		System.out.println("克隆Sheep2中的color属性的hashcode:" + cloneSheep2.getColor().hashCode());
		System.out.println("克隆Sheep3中的color属性的hashcode:" + cloneSheep3.getColor().hashCode());
		System.out.println("克隆Sheep4中的color属性的hashcode:" + cloneSheep4.getColor().hashCode());
	}
	
	
	/**
	 * 测试序列化反序列化实现深拷贝
	 * 注意：实现Serializable接口是为了完成序列化和反序列化功能，如果使用克隆完成深拷贝则不需要实现Serializable接口,只
	 *     实现Cloneable接口就可以了（要进行序列化和反序列的类和类中的引用类型的属性都需要实现Serializable接口）
	 * @throws CloneNotSupportedException
	 * @throws IOException 
	 * @throws ClassNotFoundException 
	 */
	@Test
	public void fun2() throws ClassNotFoundException, IOException {
		Color color = new Color("RED");
		DeepSheep deepSheep = new DeepSheep("多莉",10,color);
		DeepSheep cloneSheep1 = deepSheep.deepCloneBySerializable();
		DeepSheep cloneSheep2 = deepSheep.deepCloneBySerializable();
		System.out.println("原型Sheep:" + deepSheep);
		System.out.println("克隆Sheep1:" + cloneSheep1);
		System.out.println("克隆Sheep2:" + cloneSheep2);
		
		System.out.println("原型和克隆对象是否同一个对象:" + (deepSheep == cloneSheep1));
		System.out.println("克隆对象1和克隆对象2是否同一个对象:" + (cloneSheep1 == cloneSheep2));
		
		//测试浅拷贝方式一:修改引用指向的内容
		DeepSheep cloneSheep3 = deepSheep.deepCloneBySerializable();
		System.out.println("克隆Sheep3:" + cloneSheep3);
		//修改cloneSheep3(克隆羊3)中color属性的值，然后再克隆
		//运行后发现了修改cloneSheep3的color属性的没有值影响到了cloneSheep4的color属性的值
		//获取克隆对象3中的color属性引用，并修改该引用指向的值，将颜色由RED改为BLUE 
		//结论：深拷贝是把引用类型数据的引用和引用指向的内容都复制了一份，所以修改cloneSheep3中color的引用指向的内容不会影响到其他克隆对象的color的属性
		Color cloneSheep3Color = cloneSheep3.getColor();
		cloneSheep3Color.setColor("BLUE");
		DeepSheep cloneSheep4 = deepSheep.deepCloneBySerializable();
		System.out.println("克隆Sheep4:" + cloneSheep4);
		
		//测试浅拷贝方式二:打印hashCode
		System.out.println("------------------------------");
		System.out.println("原型Sheep中的color属性的hashcode:" + deepSheep.getColor().hashCode());
		System.out.println("克隆Sheep1中的color属性的hashcode:" + cloneSheep1.getColor().hashCode());
		System.out.println("克隆Sheep2中的color属性的hashcode:" + cloneSheep2.getColor().hashCode());
		System.out.println("克隆Sheep3中的color属性的hashcode:" + cloneSheep3.getColor().hashCode());
		System.out.println("克隆Sheep4中的color属性的hashcode:" + cloneSheep4.getColor().hashCode());
	}
}
