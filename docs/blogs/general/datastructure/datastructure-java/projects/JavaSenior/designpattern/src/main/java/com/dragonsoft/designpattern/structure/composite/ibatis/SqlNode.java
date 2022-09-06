package com.dragonsoft.designpattern.structure.composite.ibatis;

/**
 * xml文件中的每个节点,如<update></update>、<if></if>、<when></when>等节点
 * @author lingwh
 *
 */
public abstract class SqlNode {
	
	protected String sqlStatement;
	
	public void addSqlComponment(SqlNode sqlNode) {
		throw new UnsupportedOperationException();
	}
	
	abstract void concatSqlStatement(DynamicContext context);
}
