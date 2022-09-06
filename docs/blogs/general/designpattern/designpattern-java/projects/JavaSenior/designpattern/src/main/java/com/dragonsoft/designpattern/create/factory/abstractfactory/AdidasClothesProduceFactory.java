package com.dragonsoft.designpattern.create.factory.abstractfactory;

public class AdidasClothesProduceFactory implements IClothesProduceFactory{

	@Override
	public IHat produceHat() {
		return new AdidasHat();
	}

	@Override
	public IJacket produceJacket() {
		return new AdidasJacket();
	}

	@Override
	public ITrousers produceTrousers() {
		return new AdidasTrousers();
	}

	@Override
	public IShoes produceShoes() {
		return new AdidasShoes();
	}

}
