package com.dragonsoft.designpattern.structure.composite.collectio.hashmap;


/**
 * Componment
 * @author lingwh
 *
 * @param <K>
 * @param <V>
 */
public class AbstractMap<K,V> implements Map<K,V> {

	@Override
	public V get(Object key) {
		throw new UnsupportedOperationException();
	}

	@Override
	public V put(K key, V value) {
		throw new UnsupportedOperationException();
	}

	@Override
	public V remove(Object key) {
		throw new UnsupportedOperationException();
	}

	@Override
	public void putAll(HashMap<K, V> m) {
		throw new UnsupportedOperationException();
	}
	
	//此方法并非Map中的方法,只是为了方便打印创建的
    public void show() {
    	throw new UnsupportedOperationException();
    }

}
