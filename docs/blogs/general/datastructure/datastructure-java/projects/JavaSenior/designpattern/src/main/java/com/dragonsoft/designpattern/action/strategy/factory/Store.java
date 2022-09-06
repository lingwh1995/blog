package com.dragonsoft.designpattern.action.strategy.factory;

public abstract class Store {
	private Payment payment;
	private Bargain bargain;

	public void setPayment(Payment payment) {
		this.payment = payment;
	}

	public void setBargain(Bargain bargain) {
		this.bargain = bargain;
	}

	public void shopping() {
		bargain.bargain();
		payment.pay();
	}
}
