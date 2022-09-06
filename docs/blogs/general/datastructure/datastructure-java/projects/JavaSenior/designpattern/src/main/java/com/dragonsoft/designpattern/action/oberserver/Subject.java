package com.dragonsoft.designpattern.action.oberserver;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public abstract class Subject {
	private List<Oberserver> oberservers = new ArrayList<Oberserver>();
	
	public void addOberserver(Oberserver oberserver) {
		oberservers.add(oberserver);
	}
	
	public void removeOberserver(Oberserver oberserver) {
		oberservers.remove(oberserver);
	}
	
	public void notifyOberserver() {
		Iterator<Oberserver> iterator = oberservers.iterator();
		while(iterator.hasNext()) {
			Oberserver oberserver = iterator.next();
			oberserver.update(this);
		}
	}
}
