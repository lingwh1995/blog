package com.dragonsoft.designpattern.action.state.abs;

import java.util.Random;

/**
 * 老板审批方案 状态类
 * @author lingwh
 *
 */
public class BossApproveState extends ApproveState{

	
	public BossApproveState(OfficeAutomationContext context) {
		this.context = context;
	}

	@Override
	public void approve(String projectId) {
		Random random = new Random();
		int i = random.nextInt(2);
		//i=0:模拟老板通过审批	i=1:模拟老板不通过审批
		if(i == 0) {
			//根据projectId查询Project内容
			StringBuilder project = Projects.getProject(projectId);
			//老板给Project添加审批意见
			project.append("\n老板同意该方案");
			//保存添加了审批意见的Project
			Projects.updateProjectId(projectId, project);
			System.out.println("当前审批操作:老板已经执行完审批操作...[下一步审批人员:政府部门]");
			//进入下一环节:政府部门 审批环节
			context.setApproveState(new GovernmentApproveState(context));
		}else {
			//TODO 将该Project设置为作废状态,此处未作实现
			System.out.println("当前审批操作:老板不通过审批操作...");
			//进入下一环节:结束审批流程环节
			context.setApproveState(new EndApproveState(context));
		}
		
	}

}
