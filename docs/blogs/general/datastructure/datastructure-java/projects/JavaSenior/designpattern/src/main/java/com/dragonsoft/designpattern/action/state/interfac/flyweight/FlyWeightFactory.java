package com.dragonsoft.designpattern.action.state.interfac.flyweight;

import java.util.HashMap;
import java.util.Map;
import java.util.Stack;

public class FlyWeightFactory {
	
	private static final FlyWeightFactory instance = new FlyWeightFactory();
	
	//存放环境所有审批状态类的享元池
	private Map<String,ApproveState> approveStatePool = new HashMap<>();
	//存放环境类的享元池
	private Stack<OfficeAutomationContext> contextPool = new Stack<>();
	
	private FlyWeightFactory() {
		//把所有的审批状态类也加入到享元池中
		approveStatePool.put("clerk", new ClerkApproveState());
		approveStatePool.put("manager", new ManagerApproveState());
		approveStatePool.put("boss", new BossApproveState());
		approveStatePool.put("government", new GovernmentApproveState());
		approveStatePool.put("end", new EndApproveState());
		//把环境类也加入到享元池中
		contextPool.push(new OfficeAutomationContext());
	}
	
	public static FlyWeightFactory getInstance() {
		return instance;
	}
	
	/**
	 * 根据ApproveState类型获取对象
	 * @param approveStateType
	 * @return
	 */
	public ApproveState getApproveState(String approveStateType) {
		return approveStatePool.get(approveStateType);
	}
	
	/**
	 * 获取OfficeAutomationContext类型对象
	 * @return
	 */
	public OfficeAutomationContext getContext() {
		return contextPool.peek();
	}
}
