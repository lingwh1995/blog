package com.dragonsoft.designpattern.structure.flyweight.integer;


import org.junit.Test;

public class IntegerTest {

	/**
	 * 测试Interger中的享元模式
	 * 1.结论:-127<= x <= +128使用了享元模式，在这个范围之外不使用享元模式
	 * 2.Integer中的享元池是IntegerCache.cache,这个享元池中的数据是存放在静态内部类IntegerCache中的，这个
	 *   静态内部类IntegerCache属于Integer这个类，当Integer这个类被jvm加载，这个享元池就已经创建好了
	 * 由此得出享元模式核心思想:当享元池中有目标对象,就从享元池中获取目标对象
	 */
	@Test
	public void fun1() {
		Integer a = Integer.valueOf(100);
		Integer b = Integer.valueOf(100);
		System.out.println(a == b);//true
		
		Integer x = Integer.valueOf(150);
		Integer y = Integer.valueOf(150);
		System.out.println(x == y);//false
		
		//获取享元池中数据
		Integer[] cache = IntegerCache.cache;
		for(int i=0; i<cache.length ;i++) {
			System.out.println(cache[i]);
		}
	}

	/**
	 * 测试为什么a的值变化不会影响到b的值
	 */
	@Test
	public void fun2() {
		//存放在栈中的数据a
		Integer a = Integer.valueOf(100);
		//操作存放在栈中的数据a
		a++;
		//存放在栈中的数据b
		Integer b = Integer.valueOf(100);
		//输出存放在栈中的数据a和存放在栈中的数据b
		System.out.println("a=" + a + ",b=" + b);	//101 100
		
		int[] nums = new int[] {1};
		//存放在栈中的数据x
		int x = nums[0];
		//操作存放在栈中的数据x
		x++;
		//操作存放在栈中的数据y
		int y = nums[0];
		System.out.println("x=" + x + ",y=" + y); // 2 1
		//操作存放在堆中的数据nums[0]
		nums[0]++;
		//将堆中的值的引用赋值一份给栈中的z
		int z = nums[0];
		//输出存放在栈中的数据z
		System.out.println("z=" + z); //2
	}
	
	/**
	 * 1.获取Integer类中享元池中的细粒度对象,即-128~127
	 * 2.为什么要这么处理?
	 * 		因为-128~127是常用数据,每次创建新的对象会增加内存开销
	 * 不这么处理,每次堆和栈都要开辟新的空间,当使用享元模式后,只有栈中会开辟新的空间,堆中不会开辟新的空间,所以节省了堆内存的开销
	 */
	@Test
	public void fun3() {
		//获取享元池中数据
		Integer[] cache = IntegerCache.cache;
		for(int i=0; i<cache.length ;i++) {
			System.out.println(cache[i]);
		}
		
	}
	
	private static class IntegerCache {
        static final int low = -128;
        static final int high;
        static final Integer cache[];

        static {
            // high value may be configured by property
            int h = 127;
            String integerCacheHighPropValue =
                sun.misc.VM.getSavedProperty("java.lang.Integer.IntegerCache.high");
            if (integerCacheHighPropValue != null) {
                try {
                    int i = Integer.parseInt(integerCacheHighPropValue);
                    i = Math.max(i, 127);
                    // Maximum array size is Integer.MAX_VALUE
                    h = Math.min(i, Integer.MAX_VALUE - (-low) -1);
                } catch( NumberFormatException nfe) {
                    // If the property cannot be parsed into an int, ignore it.
                }
            }
            high = h;

            cache = new Integer[(high - low) + 1];
            int j = low;
            for(int k = 0; k < cache.length; k++)
                cache[k] = new Integer(j++);

            // range [-128, 127] must be interned (JLS7 5.1.7)
            assert IntegerCache.high >= 127;
        }

        private IntegerCache() {}
    }
}
