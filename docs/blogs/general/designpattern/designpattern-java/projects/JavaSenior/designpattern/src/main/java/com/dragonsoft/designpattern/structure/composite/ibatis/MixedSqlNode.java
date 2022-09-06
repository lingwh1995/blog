package com.dragonsoft.designpattern.structure.composite.ibatis;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class MixedSqlNode extends SqlNode {
	
	public MixedSqlNode(String sqlStatement) {
		this.sqlStatement = sqlStatement;
	}
	
	private final List<SqlNode> sqlNodes = new ArrayList<>();

	@Override
	public void addSqlComponment(SqlNode sqlNode) {
		sqlNodes.add(sqlNode);
	}
	
	@Override
	public void concatSqlStatement(DynamicContext context) {
		context.appendSql(sqlStatement.trim());
		Iterator<SqlNode> iterator = sqlNodes.iterator();
		while(iterator.hasNext()) {
			SqlNode sqlNode = iterator.next();
			sqlNode.concatSqlStatement(context);
		}
	}
}
