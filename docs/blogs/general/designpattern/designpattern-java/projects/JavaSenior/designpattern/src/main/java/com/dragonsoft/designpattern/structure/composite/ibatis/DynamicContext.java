package com.dragonsoft.designpattern.structure.composite.ibatis;

import java.util.StringJoiner;

public class DynamicContext {
	
	private final StringJoiner sqlBuilder = new StringJoiner(" ");
	
	public void appendSql(String sql) {
		sqlBuilder.add(sql);
	}
	public String getSql() {
		return sqlBuilder.toString();
	}
	
}
