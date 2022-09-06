package com.dragonsoft.designpattern.action.state.interfac;

public interface ApproveState {
	
	/**
	 * 审批方法
	 * @param context
	 */
	void approve(OfficeAutomationContext context,String projectId);
	
}
