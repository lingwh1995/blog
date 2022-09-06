package com.dragonsoft.designpattern.action.state.interfac;

import org.junit.Before;
import org.junit.Test;

/**
 * 1.状态模式模拟 审批流程
 * 2.使用接口作为 抽象状态类
 * @author lingwh
 *
 */
public class Client {
	
	/**
	 * 模拟员工已经 通过了该审批
	 */
	@Before
	public void before() {
		OfficeAutomationContext officeAutomationContext = new OfficeAutomationContext();
		//模拟员工审批
		officeAutomationContext.dealProject("001");
	}
	
	@Test
	public void fun() {
		//创建原始的Context
		OfficeAutomationContext officeAutomationContext = new OfficeAutomationContext();
		//将State重置为 经理审批状态
		officeAutomationContext.setApproveState(new ManagerApproveState());
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
