package com.dragonsoft.designpattern.create.factory.abstractfactory;

/**
 * 服装工厂
 * @author lingwh
 *
 */
public interface IClothesProduceFactory {
	
	//生产帽子
	IHat produceHat();
	//生产夹克衫
	IJacket produceJacket();
	//生产裤子
	ITrousers produceTrousers();
	//生产鞋子
	IShoes produceShoes();
}
