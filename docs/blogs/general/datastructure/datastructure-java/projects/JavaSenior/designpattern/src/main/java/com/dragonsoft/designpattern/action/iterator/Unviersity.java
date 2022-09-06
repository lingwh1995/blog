package com.dragonsoft.designpattern.action.iterator;

public class Unviersity implements Organization {

	private String[] unviersitys;
	
	public Unviersity() {
		unviersitys = new String[8];
		unviersitys[0] = "01.西安财经大学";
		unviersitys[1] = "02.西安交通大学";
		unviersitys[2] = "03.西安工业大学";
		unviersitys[3] = "04.西安理工大学";
		unviersitys[4] = "05.西安建筑科技大学";
		unviersitys[5] = "06.西安文理学院";
		unviersitys[6] = "07.西安医学院";
		unviersitys[7] = "08.西北政法大学";
	}

	//Iterator指针
	int index = 0;
	/**
	 * 使用匿名内部类创建一个Iterator的子类
	 */
	@Override
	public Iterator iterator() {
		return new Itr();
	}

	private class Itr implements Iterator {

		@Override
		public boolean hasNext() {
			if(index > unviersitys.length - 1) {
				return false;
			}
			return true;
		}

		@Override
		public String next() {
			String unviersity = unviersitys[index];
			index++;
			return unviersity;
		}

		@Override
		public void remove() {
			// 暂不实现
		}
		
	}
}
