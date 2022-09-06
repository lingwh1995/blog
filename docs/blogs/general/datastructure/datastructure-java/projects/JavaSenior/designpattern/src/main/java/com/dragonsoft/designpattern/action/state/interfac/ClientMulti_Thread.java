package com.dragonsoft.designpattern.action.state.interfac;

/**
 * 多线程环境模拟 职员审批->经理审批->老板审批->政府部门审批->结束审批流程  这个过程
 * @author lingwh
 *
 */
public class ClientMulti_Thread {

	public static void main(String[] args) {
		//第一步:模拟职员审批方案
		new Thread(new Runnable() {
			@Override
			public void run() {
				OfficeAutomationContext officeAutomationContext = new OfficeAutomationContext();
				//模拟员工审批
				officeAutomationContext.dealProject("001");
			}
		}).start();
		
		//第二步:模拟经理审批方案
		new Thread(new Runnable() {
			@Override
			public void run() {
				//职员审批完成后100ms,经理开始审批 
				sleep(100);
				//创建原始的Context
				OfficeAutomationContext officeAutomationContext = new OfficeAutomationContext();
				//将State重置为 经理审批状态
				officeAutomationContext.setApproveState(new ManagerApproveState());
				//模拟经理审批方案
				officeAutomationContext.dealProject("001");
			}
		}).start();
		
		//第三步:模拟老板审批方案
		new Thread(new Runnable() {
			@Override
			public void run() {
				//职员审批完成后200ms,老板开始审批 
				sleep(200);
				//创建原始的Context
				OfficeAutomationContext officeAutomationContext = new OfficeAutomationContext();
				//将State重置为 老板审批状态
				officeAutomationContext.setApproveState(new BossApproveState());
				//模拟老板审批方案
				officeAutomationContext.dealProject("001");
			}
		}).start();
		
		/**
		 * 注意:如果要测试老板不通过审批的情况,则需要注释掉下面这段代码
		 */
		//第四步:模拟政府部门审批方案
//		new Thread(new Runnable() {
//			@Override
//			public void run() {
//				//职员审批完成后300ms,老板开始审批 
//				sleep(300);
//				//创建原始的Context
//				OfficeAutomationContext officeAutomationContext = new OfficeAutomationContext();
//				//将State重置为 政府部门审批状态
//				officeAutomationContext.setApproveState(new GovernmentApproveState());
//				//模拟 政府部门审批方案
//				officeAutomationContext.dealProject("001");
//			}
//		}).start();
		
		//第五步:模拟结束流程
		new Thread(new Runnable() {
			@Override
			public void run() {
				//职员审批完成后400ms,审批流程结束 
				sleep(400);
				//创建原始的Context
				OfficeAutomationContext officeAutomationContext = new OfficeAutomationContext();
				//将State重置为 结束审批流程状态
				officeAutomationContext.setApproveState(new EndApproveState());
				//模拟 结束审批流程
				officeAutomationContext.dealProject("001");
			}
		}).start();
		
	}
	
	/**
	 * 模拟等待一段时间
	 * @param millis
	 */
	public static void sleep(long millis) {
		try {
			Thread.sleep(millis);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
}
