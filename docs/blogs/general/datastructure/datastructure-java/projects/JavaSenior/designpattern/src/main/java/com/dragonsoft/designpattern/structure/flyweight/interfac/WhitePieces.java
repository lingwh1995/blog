package com.dragonsoft.designpattern.structure.flyweight.interfac;


/**
 * 具体的享元角色 黑棋
 *
 */
public class WhitePieces implements ChessPieces{

	/**
	 * 内部状态
	 */
	protected String chess = "♘";

	/**
	 * 方法参数就是外部状态,如棋子的坐标、棋子的编号
	 */
	@Override
	public void setChessLocation(String[][] chessBoard,int x,int y,int chessNo) {
		chessBoard[x][y] = chess;
		System.out.println("第" + chessNo + "个白棋子");
	}

}
