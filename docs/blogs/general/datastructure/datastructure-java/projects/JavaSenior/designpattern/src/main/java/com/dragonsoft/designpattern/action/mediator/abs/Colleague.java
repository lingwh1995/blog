package com.dragonsoft.designpattern.action.mediator.abs;

/**
 * 抽象的同事类
 * 
 * @author lingwh
 *
 */
public abstract class Colleague {

	// 持有一个中介者的引用，中介者中封装了所有复杂的交互关系
	protected Mediator mediator;

	public abstract void insert(String data);

	public abstract void insertSafe(String data);
}
