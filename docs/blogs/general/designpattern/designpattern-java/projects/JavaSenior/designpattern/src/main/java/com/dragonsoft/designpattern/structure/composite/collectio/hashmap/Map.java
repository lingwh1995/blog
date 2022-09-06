package com.dragonsoft.designpattern.structure.composite.collectio.hashmap;


public interface Map<K,V> {
	
    V get(Object key);
    V put(K key, V value);
    V remove(Object key);
    void putAll(HashMap<K, V> m);
    //此方法并非Map中的方法,只是为了方便打印创建的
    void show();
    
    interface Entry<K,V> {
        K getKey();
        V getValue();
    }    
}
