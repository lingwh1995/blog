package com.dragonsoft.designpattern.structure.flyweight.interfac;

import java.util.Random;
import java.util.Scanner;

public class ChessBoard {
	//棋盘
	private String[][] chessBoard;
	//白棋编号
	int whiteChessNo;
	//黑棋编号
	int blackChessNo;
	
	public ChessBoard() {
		//初始化棋盘和棋子编号
		chessBoard = new String[10][10];
		for(int i=0; i<chessBoard.length; i++) {
			for(int j=0; j<chessBoard[i].length; j++) {
				chessBoard[i][j] = "※";
			}
		}
		whiteChessNo = 1;
		blackChessNo = 1;
	}
	
	/**
	 * 移动棋子
	 */
	private void moveChess(int chessType) {
		Random random = new Random();
		int x = random.nextInt(10);;
		int y = random.nextInt(10);;
		if(chessType == 1) {
			//从享元池中获取细粒度的享元对象
			WhitePieces chessPieces = (WhitePieces) ChessFactory.getInstance().getChessPieces("white");
			System.out.println("WhitePieces:" + chessPieces);
			chessPieces.setChessLocation(chessBoard,x,y,whiteChessNo++);
		}
		if(chessType == 2) {
			//从享元池中获取细粒度的享元对象
			BlackPieces chessPieces = (BlackPieces) ChessFactory.getInstance().getChessPieces("black");
			System.out.println("BlackPieces:" + chessPieces);
			chessPieces.setChessLocation(chessBoard,x,y,blackChessNo++);
		}
		showChessBoard();
	}
	
	
	/**
	 * 展示棋盘
	 */
	private void showChessBoard() {
		for(int i=0; i<chessBoard.length; i++) {
			for(int j=0; j<chessBoard[i].length; j++) {
				System.out.print(chessBoard[i][j] +"  ");
			}
			System.out.println();
		}
		System.out.println("-------------------");
	}
	
	public void play() {
		System.out.println("请输入: 1-下白棋 2-下黑棋 3-结束游戏");
		Scanner scanner = new Scanner(System.in);
		boolean isGoon = true;
		while(isGoon) {
			int input = scanner.nextInt();
			switch(input) {
			case 1:
				//下一步白棋
				moveChess(1);
				break;
			case 2:
				//下一步黑棋
				moveChess(2);
				break;
			case 3:
				//结束游戏
				isGoon = false;
				break;
			}
		}
		scanner.close();
	}
}
