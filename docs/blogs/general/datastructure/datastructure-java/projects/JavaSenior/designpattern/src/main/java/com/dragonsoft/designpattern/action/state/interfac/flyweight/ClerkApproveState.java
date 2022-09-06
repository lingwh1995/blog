package com.dragonsoft.designpattern.action.state.interfac.flyweight;

/**
 * 员工审批方案 状态类
 * @author lingwh
 *
 */
public class ClerkApproveState implements ApproveState{

	@Override
	public void approve(OfficeAutomationContext context,String projectId) {
		//根据projectId查询Project内容
		StringBuilder project = Projects.getProject(projectId);
		//员工给Project添加审批意见
		project.append("\n员工同意该方案");
		//保存添加了审批意见的Project
		Projects.updateProjectId(projectId, project);
		System.out.println("当前审批操作:职员已经执行完审批操作...[下一步审批人员:经理]");
		//进入下一环节:经理审批环节
		FlyWeightFactory factory = FlyWeightFactory.getInstance();
		context.setApproveState(factory.getApproveState("clerk"));
	}

}
