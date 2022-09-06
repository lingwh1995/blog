package com.dragonsoft.designpattern.structure.decorator.model;

public class Test {
	public static void main(String[] args) {
		Componment componment = new ConcrectComponment();
//		componment.operation();
//		System.out.println("-------");
		
		componment = new ConcrectDecorator(componment);
//		componment.operation();
//		System.out.println("-------");
		
		componment = new ConcrectDecorator(componment);
//		componment.operation();
//		System.out.println("-------");
		
		componment = new ConcrectDecorator(componment);
		componment.operation();
		System.out.println("-------");

	}
}


//被装饰者
abstract class Componment{
	abstract void operation();
}
class ConcrectComponment extends Componment{
	@Override
	void operation() {
		System.out.println("基础的operation...ConcrectComponment");
	}
	
}

//抽象装饰者
abstract class Decorator extends Componment{
	Componment componment;
	abstract void operation();
}
//具体的装饰者
class ConcrectDecorator extends Decorator{
	public ConcrectDecorator(Componment componment) {
		this.componment = componment;
	}
	
	@Override
	void operation() {
		System.out.println("增强...");
		componment.operation();
	}
	
	public void readBoolean() {
		System.out.println("test...");
	}
}