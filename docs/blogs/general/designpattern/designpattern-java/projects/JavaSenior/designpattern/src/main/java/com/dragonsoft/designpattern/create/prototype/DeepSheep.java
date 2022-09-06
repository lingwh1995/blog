package com.dragonsoft.designpattern.create.prototype;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.Serializable;

/**
 * 深拷贝原型
 * 注意：实现Serializable接口是为了完成序列化和反序列化功能，如果使用克隆完成深拷贝则不需要实现Serializable接口,只
 *     实现Cloneable接口就可以了
 * @author lingwh
 *
 */
public class DeepSheep implements Cloneable,Serializable{
	private String name;
	private int age;
	private Color color;
	
	public DeepSheep() {
		
	}

	public DeepSheep(String name, int age, Color color) {
		this.name = name;
		this.age = age;
		this.color = color;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public Color getColor() {
		return color;
	}

	public void setColor(Color color) {
		this.color = color;
	}
	
	/**
	 * 克隆实现深拷贝
	 */
	@Override
	protected DeepSheep clone() throws CloneNotSupportedException {
		DeepSheep cloneSheep = (DeepSheep)super.clone();
		cloneSheep.color = (Color) this.color.clone();
		return cloneSheep;
	}

	/**
	 * 序列化+反序列化实现深拷贝
	 * 注意：DeepSheep和Color类都需要实现Serializable接口才能使用序列化和反序列化功能
	 * @return
	 * @throws IOException
	 * @throws ClassNotFoundException
	 */
	public DeepSheep deepCloneBySerializable() throws IOException, ClassNotFoundException {
		ByteArrayOutputStream bos = null;
		ObjectOutputStream oos = null;
		ByteArrayInputStream bis = null;
		ObjectInputStream ois = null;
		DeepSheep deepSheep = null;
		
		try {
			//序列化
			bos = new ByteArrayOutputStream();
			oos = new ObjectOutputStream(bos);
			oos.writeObject(this);
			//反序列化
			bis = new ByteArrayInputStream(bos.toByteArray());
			ois = new ObjectInputStream(bis);
			deepSheep =  (DeepSheep)ois.readObject();
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}finally {
			try {
				bos.close();
				oos.close();
				bis.close();
				ois.close();
			} catch (Exception e2) {
				System.out.println(e2.getMessage());
			}
		}
		return deepSheep;
	}
	
	@Override
	public String toString() {
		return "DeepSheep [name=" + name + ", age=" + age + ", color=" + color + "]";
	}
}
