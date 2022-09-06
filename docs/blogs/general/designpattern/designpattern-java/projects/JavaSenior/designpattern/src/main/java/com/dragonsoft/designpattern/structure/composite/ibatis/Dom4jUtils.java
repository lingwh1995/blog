package com.dragonsoft.designpattern.structure.composite.ibatis;

import java.io.InputStream;

import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;

public class Dom4jUtils {
	/**  
	 * 得到xml文档的root节点
	 * @return Element    返回类型
	 * @throws  
	 */
	@SuppressWarnings("unused")
	public static Element getRootElement() throws DocumentException {
		//1.创建解析器
		SAXReader saxReader = new SAXReader();
		//2.得到document
		Document document = saxReader.read(getResourceAsStream("sql.xml"));
		return document.getRootElement();
	}

	/**
	 * 获取xml文档的输入流
	 * @param xmlName
	 * @return
	 */
	public static InputStream getResourceAsStream(String xmlName){
		return Client.class.getResourceAsStream(xmlName);
	}
}
