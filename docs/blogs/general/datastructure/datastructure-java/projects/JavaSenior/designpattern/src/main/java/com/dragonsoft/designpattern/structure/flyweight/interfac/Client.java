package com.dragonsoft.designpattern.structure.flyweight.interfac;


import org.junit.Test;

/**
 * 1.每次从享元工厂中获取白棋和黑棋都是同一个对象
 * 2.享元池中的对象享元工厂初始化的时候就创建好的
 * @author lingwh
 *
 */
public class Client {

	@Test
	public void fun() {
		ChessBoard chessBoard = new ChessBoard();
		chessBoard.play();
	}
}
