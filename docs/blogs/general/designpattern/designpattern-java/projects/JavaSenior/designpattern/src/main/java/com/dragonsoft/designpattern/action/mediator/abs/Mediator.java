package com.dragonsoft.designpattern.action.mediator.abs;

/**
 * 抽象的中介者
 * 
 * @author lingwh
 *
 */
public abstract class Mediator {
	// 中介持有所有同事的引用
	protected Colleague mysqlColleague;
	protected Colleague oracleColleague;
	protected Colleague mongoColleague;
	protected Colleague redisColleague;
	protected Colleague hiveColleague;

	public void setMysqlColleague(Colleague mysqlColleague) {
		this.mysqlColleague = mysqlColleague;
	}

	public void setOracleColleague(Colleague oracleColleague) {
		this.oracleColleague = oracleColleague;
	}

	public void setMongoColleague(Colleague mongoColleague) {
		this.mongoColleague = mongoColleague;
	}

	public void setRedisColleague(Colleague redisColleague) {
		this.redisColleague = redisColleague;
	}

	public void setHiveColleague(Colleague hiveColleague) {
		this.hiveColleague = hiveColleague;
	}

	public abstract void sync(String databaseName, String data);

}
