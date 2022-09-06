package com.dragonsoft.designpattern.structure.composite.collectio.hashmap;

/**
 * Compisite
 * @author lingwh
 *
 * @param <K>
 * @param <V>
 */
public class HashMap<K, V> extends AbstractMap<K, V> implements Map<K, V>{
	
	//存放Node的容器
	protected Node<K,V>[] tab = (Node<K,V>[])new Node[100];
	
	@Override
	public V get(Object key) {
		V value = null;
		for(int i=0; i<tab.length; i++) {
			Node<K,V> node = tab[i];
			if(node.getKey().equals(key)) {
				value =  node.getValue();
			}
		}
		return value;
	}
	
	@Override
	public V put(K key, V value) {
		int index = 0;
		for(int i=0; i<tab.length ;i++) {
			if(tab[i] == null) {
				index = i;
				break;
			}
		}
		tab[index] = new Node<K, V>(key,value);
		return value;
	}
	
	@Override
	public V remove(Object key) {
		V value = null;
		for(int i=0; i<tab.length; i++) {
			Node<K,V> node = tab[i];
			if(node.getKey().equals(key)) {
				value =  node.getValue();
				tab[i] = tab[i+1];
				break;
			}
			if(i == tab.length-1) {
				tab[i] = null;
			}
		}
		return value;
	}
	
	@Override
	public void putAll(HashMap<K, V> m) {
		Node<K, V>[] nodes = m.tab;
		for(int i=0; i<nodes.length ;i++) {
			if(nodes[i] == null) {
				break;
			}
			put(nodes[i].getKey(), nodes[i].getValue());
		}
	}
	
	/**
	 * 打印map
	 */
	public void show() {
		for(int i=0;i<tab.length;i++) {
			if(tab[i] == null) {
				break;
			}
			System.out.println(tab[i]);
		}
	}
	
	static class Node<K,V> implements Map.Entry<K,V> {
	    final K key;
	    V value;

	    Node(K key, V value) {
	        this.key = key;
	        this.value = value;
	    }

		@Override
		public final K getKey() { 
			return key; 
		}

		@Override
		public final V getValue() { 
			return value; 
		}

		@Override
		public String toString() {
			return "Node [key=" + key + ", value=" + value + "]";
		}
		
	}
	
}
