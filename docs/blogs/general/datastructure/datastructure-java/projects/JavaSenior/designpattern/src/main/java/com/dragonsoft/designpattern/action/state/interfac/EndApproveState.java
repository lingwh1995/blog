package com.dragonsoft.designpattern.action.state.interfac;

/**
 * 结束审批状态
 * @author lingwh
 *
 */
public class EndApproveState implements ApproveState{

	@Override
	public void approve(OfficeAutomationContext context, String projectId) {
		System.out.println("审批流程结束...");
		System.out.println("----------------");
		StringBuilder project = Projects.getProject(projectId);
		//打印审批后的方案
		System.out.println(project);
	}

}
