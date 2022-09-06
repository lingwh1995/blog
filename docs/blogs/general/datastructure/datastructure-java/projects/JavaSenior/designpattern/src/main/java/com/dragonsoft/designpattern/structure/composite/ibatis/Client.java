package com.dragonsoft.designpattern.structure.composite.ibatis;

import java.util.Iterator;
import java.util.List;

import org.dom4j.DocumentException;
import org.dom4j.Element;
import org.dom4j.tree.DefaultElement;
import org.junit.Test;

/**
 * 组合模式实现类似与Mybatis动态Sql组装的功能
 * @author lingwh
 *
 */
public class Client {
	
	@Test
	public void fun1() throws DocumentException {
		Element root = Dom4jUtils.getRootElement();
		DynamicContext dynamicContext = new DynamicContext();
		elements(root,dynamicContext);
		System.out.println(dynamicContext.getSql());
	}
	
	/**
	 * 递归打印xml中的所有节点
	 * @param root
	 * @param dynamicContext
	 */
	public void elements(Element root,DynamicContext dynamicContext){
		@SuppressWarnings("unchecked")
		List<DefaultElement> elements = root.elements();
		if(elements.size() == 0) {
			return;
		}
		Iterator<DefaultElement> iterator = elements.iterator();
		SqlNode mixedSqlNode = new MixedSqlNode("");
		while(iterator.hasNext()) {
			DefaultElement node = iterator.next();
			String elementName = node.getName();
			String elemetData = (String)node.getData();
			if(elementName.equals("select")) {
				mixedSqlNode = new MixedSqlNode(elemetData);
				mixedSqlNode.concatSqlStatement(dynamicContext);
			}
			if(elementName.equals("if")) {
				SqlNode ifSqlNode = new IfSqlNode(elemetData);
				mixedSqlNode.addSqlComponment(ifSqlNode);
				if(!iterator.hasNext()) {
					mixedSqlNode.concatSqlStatement(dynamicContext);
				}
			}
			elements(node,dynamicContext);
		}
	}
	

}
