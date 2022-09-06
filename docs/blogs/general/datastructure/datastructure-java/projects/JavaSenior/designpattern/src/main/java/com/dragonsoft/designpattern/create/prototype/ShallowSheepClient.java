package com.dragonsoft.designpattern.create.prototype;



import org.junit.Test;

/**
 * 浅拷贝:
 * 	基本类型的数据：值复制一份
 *  引用类型的数据：引用地址复制一份，但不会复制引用地址指向的堆中的内容
 * @author lingwh
 *
 */
public class ShallowSheepClient {
	
	/**
	 * 克隆出的对象和原型对象不是同一个对象，只是属性和属性的值相同
	 * @throws CloneNotSupportedException
	 */
	@Test
	public void fun() throws CloneNotSupportedException {
		Color color = new Color("RED");
		ShallowSheep shallowSheep = new ShallowSheep("多莉",10,color);
		ShallowSheep cloneSheep1 = shallowSheep.clone();
		ShallowSheep cloneSheep2 = shallowSheep.clone();
		System.out.println("原型Sheep:" + shallowSheep);
		System.out.println("克隆Sheep1:" + cloneSheep1);
		System.out.println("克隆Sheep2:" + cloneSheep2);
		
		System.out.println("原型和克隆对象是否同一个对象:" + (shallowSheep == cloneSheep1));
		System.out.println("克隆对象1和克隆对象2是否同一个对象:" + (cloneSheep1 == cloneSheep2));
		
		//测试浅拷贝方式一:修改引用指向的内容
		ShallowSheep cloneSheep3 = shallowSheep.clone();
		System.out.println("克隆Sheep3:" + cloneSheep3);
		//修改cloneSheep3(克隆羊3)中color属性的值，然后再克隆
			//运行后发现了修改cloneSheep3的color属性的值影响到了cloneSheep4的color属性的值
			//获取克隆对象3中的color属性引用，并修改该引用指向的值，将颜色由RED改为BLUE 
			//结论：浅拷贝是把引用类型数据的引用复制了一份，引用指向的值是公用的，所以修改cloneSheep3中color的引用指向的内容会影响到其他克隆对象的color的属性
		Color cloneSheep3Color = cloneSheep3.getColor();
		cloneSheep3Color.setColor("BLUE");
		ShallowSheep cloneSheep4 = shallowSheep.clone();
		System.out.println("克隆Sheep4:" + cloneSheep4);
		
		//测试浅拷贝方式二:打印hashCode
		System.out.println("------------------------------");
		System.out.println("原型Sheep中的color属性的hashcode:" + shallowSheep.getColor().hashCode());
		System.out.println("克隆Sheep1中的color属性的hashcode:" + cloneSheep1.getColor().hashCode());
		System.out.println("克隆Sheep2中的color属性的hashcode:" + cloneSheep2.getColor().hashCode());
		System.out.println("克隆Sheep3中的color属性的hashcode:" + cloneSheep3.getColor().hashCode());
		System.out.println("克隆Sheep4中的color属性的hashcode:" + cloneSheep4.getColor().hashCode());
	}
}
