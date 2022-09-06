package com.dragonsoft.designpattern.action.state.abs;

/**
 * 政府部门审批方案 状态类
 * @author lingwh
 *
 */
public class GovernmentApproveState extends ApproveState{

	public GovernmentApproveState(OfficeAutomationContext context) {
		this.context = context;
	}
	
	@Override
	public void approve(String projectId) {
		//根据projectId查询Project内容
		StringBuilder project = Projects.getProject(projectId);
		//政府部门给Project添加审批意见
		project.append("\n政府部门同意该方案");
		//保存添加了审批意见的Project
		Projects.updateProjectId(projectId, project);
		System.out.println("当前审批操作:政府部门已经执行完审批操作...");
		//进入下一环节:结束审批流程环节
		context.setApproveState(new EndApproveState(context));
	}

}
