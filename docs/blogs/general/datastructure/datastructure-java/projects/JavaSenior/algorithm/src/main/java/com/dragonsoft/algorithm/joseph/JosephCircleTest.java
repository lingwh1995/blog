package com.dragonsoft.algorithm.joseph;

import org.junit.Test;

public class JosephCircleTest {

	/**
	 * 测试数组实现约瑟夫环
	 */
	@Test
	public void testJosephCircileArray() {
		JosephCircle.josephCircileArray(10, 3);
	}
	
	/**
	 * 测试ArrayList实现约瑟夫环
	 */
	@Test
	public void testJosephCircileArrayList() {
		JosephCircle.josephCircileArrayList(5, 2);
	}
}
