package com.dragonsoft.designpattern.action.state.interfac.flyweight;

public interface ApproveState {
	
	/**
	 * 审批方法
	 * @param context
	 */
	void approve(OfficeAutomationContext context,String projectId);
	
}
