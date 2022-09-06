package com.dragonsoft.designpattern.action.state.abs.flyweight;

import org.junit.Before;
import org.junit.Test;

/**
 * 1.状态模式模拟 审批流程
 * 2.使用抽象类作为 抽象状态类
 * @author lingwh
 *
 */
public class Client {
	//获取享元工厂
	FlyWeightFactory factory = FlyWeightFactory.getInstance();
	/**
	 * 模拟员工已经 通过了该审批
	 */
	@Before
	public void before() {
		//从享元池中获取OfficeAutomationContext对象
		OfficeAutomationContext officeAutomationContext = factory.getContext();
		//模拟员工审批
		officeAutomationContext.dealProject("001");
	}
	
	@Test
	public void fun() {
		//从享元池中获取OfficeAutomationContext对象
		OfficeAutomationContext officeAutomationContext = factory.getContext();
		//将State重置为 经理审批状态
		officeAutomationContext.setApproveState(factory.getApproveState("manager"));
		//模拟经理审批
		officeAutomationContext.dealProject("001");
		//模拟老板审批
		officeAutomationContext.dealProject("001");
		//模拟政府部门审批
		officeAutomationContext.dealProject("001");
		//模拟审批流程结束
		officeAutomationContext.dealProject("001");
	}
}
