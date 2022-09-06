package com.dragonsoft.designpattern.structure.flyweight.interfac;

import java.util.HashMap;
import java.util.Map;

/**
 * 享元工厂角色
 *
 */
public class ChessFactory {
	//单例底层就是通过static关键字来保证每次调用getInstance()返回的都是同一个对象的
	private static final ChessFactory instance = new ChessFactory();
	public static ChessFactory getInstance() {
		return instance;
	}
	//享元池
	private Map<String,ChessPieces> pool =new HashMap<String,ChessPieces>();

	private ChessFactory() {
		//给享元池中存放细粒度享元对象
		ChessPieces white=new WhitePieces();
		ChessPieces black=new BlackPieces();
		pool.put("white",white);
		pool.put("black",black);
	}

	public ChessPieces getChessPieces(String type) {
		return pool.get(type);
	}
}
