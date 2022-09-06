package com.dragonsoft.designpattern.create.factory.abstractfactory;

import org.junit.Test;

public class Client {
	
	@Test
	public void fun() {
		//Adidas工厂
		IClothesProduceFactory adidasClothesFactory = new AdidasClothesProduceFactory();
		IHat adidasHat = adidasClothesFactory.produceHat();
		IJacket adidasJacket = adidasClothesFactory.produceJacket();
		ITrousers adidasTrousers = adidasClothesFactory.produceTrousers();
		IShoes adidasShoes = adidasClothesFactory.produceShoes();
		adidasHat.produce();
		adidasJacket.produce();
		adidasTrousers.produce();
		adidasShoes.produce();
		
		System.out.println("-------------------------------");
		//Nike工厂
		IClothesProduceFactory nikeClothesFactory = new NikeClothesProduceFactory();
		IHat nikeHat = nikeClothesFactory.produceHat();
		IJacket nikeJacket = nikeClothesFactory.produceJacket();
		ITrousers nikeTrousers = nikeClothesFactory.produceTrousers();
		IShoes nikeShoes = nikeClothesFactory.produceShoes();
		nikeHat.produce();
		nikeJacket.produce();
		nikeTrousers.produce();
		nikeShoes.produce();
		
		System.out.println("-------------------------------");
		//Puma工厂
		IClothesProduceFactory pumaClothesFactory = new PumaClothesProduceFactory();
		IHat pumaHat = pumaClothesFactory.produceHat();
		IJacket pumaJacket = pumaClothesFactory.produceJacket();
		ITrousers pumaTrousers = pumaClothesFactory.produceTrousers();
		IShoes pumaShoes = pumaClothesFactory.produceShoes();
		pumaHat.produce();
		pumaJacket.produce();
		pumaTrousers.produce();
		pumaShoes.produce();
	}
}
