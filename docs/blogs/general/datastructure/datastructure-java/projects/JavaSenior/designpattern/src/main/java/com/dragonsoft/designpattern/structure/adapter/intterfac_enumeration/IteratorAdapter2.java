package com.dragonsoft.designpattern.structure.adapter.intterfac_enumeration;

import java.util.Collection;
import java.util.Enumeration;
import java.util.Iterator;

/**
 * 对象适配器
 * 被适配者：Enumeration
 * 目标类：    Iterator
 * @author lingwh
 *
 * @param <E>
 */
public class IteratorAdapter2<E> implements Enumeration<E>{
	
	private final Collection<E> c;
	private final Iterator<E> iterator;
	
	public IteratorAdapter2(final Collection<E> c) {
		this.c = c;
		this.iterator = c.iterator();
	}

	@Override
	public boolean hasMoreElements() {
		return iterator.hasNext();
	}

	@Override
	public E nextElement() {
		return iterator.next();
	}

}
