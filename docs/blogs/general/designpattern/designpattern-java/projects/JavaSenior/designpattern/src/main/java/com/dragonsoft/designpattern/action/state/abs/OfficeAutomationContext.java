package com.dragonsoft.designpattern.action.state.abs;

/**
 * Context角色
 * @author lingwh
 *
 */
public class OfficeAutomationContext {
	
	//定义审批状态
	private ApproveState approveState;
	//重置具体审批状态
	public void setApproveState(ApproveState approveState) {
		this.approveState = approveState;
	}

	public OfficeAutomationContext() {
		//初始化初始审批状态
		approveState = new ClerkApproveState(this);;
	}
	
	/**
	 * 处理任务
	 * @param projectId 要审批的方案的id
	 */
	public void dealProject(String projectId) {
		approveState.approve(projectId);
	}
	
}
