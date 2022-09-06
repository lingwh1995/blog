package com.dragonsoft.designpattern.action.state.abs.flyweight;

public abstract class ApproveState {
	//关联环境类
	protected OfficeAutomationContext context;
	
	/**
	 * 审批方法
	 * @param context
	 */
	abstract void approve(String projectId);
	
}
