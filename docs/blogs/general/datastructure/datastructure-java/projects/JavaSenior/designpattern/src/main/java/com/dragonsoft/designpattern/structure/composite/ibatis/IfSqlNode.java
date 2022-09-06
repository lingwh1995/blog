package com.dragonsoft.designpattern.structure.composite.ibatis;

public class IfSqlNode extends SqlNode {
	
	public IfSqlNode(String sqlStatement) {
		this.sqlStatement = sqlStatement;
	}
	
	@Override
	public void concatSqlStatement(DynamicContext context) {
		context.appendSql(sqlStatement.trim());
	}

}