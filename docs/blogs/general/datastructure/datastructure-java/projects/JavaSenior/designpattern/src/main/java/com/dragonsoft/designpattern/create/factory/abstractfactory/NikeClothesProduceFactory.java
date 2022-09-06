package com.dragonsoft.designpattern.create.factory.abstractfactory;

public class NikeClothesProduceFactory implements IClothesProduceFactory{

	@Override
	public IHat produceHat() {
		return new NikeHat();
	}

	@Override
	public IJacket produceJacket() {
		return new NikeJacket();
	}

	@Override
	public ITrousers produceTrousers() {
		return new NikeTrousers();
	}

	@Override
	public IShoes produceShoes() {
		return new NikeShoes();
	}

}
