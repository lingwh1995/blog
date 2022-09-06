package com.dragonsoft.designpattern.action.state.interfac.flyweight;

import java.util.HashMap;
import java.util.Map;

/**
 * 模拟要审批的方案
 * @author lingwh
 *
 */
public class Projects {
	//模拟数据库存放了多个方案
	private static Map<String,StringBuilder> projects = new HashMap<>();
	
	static {
		StringBuilder project = new StringBuilder();
		project.append("方案内容:xxxx");
		projects.put("001", project);
	}
	
	/**
	 * 模拟根据projectId查询方案内容
	 * @param projectId
	 * @return
	 */
	public static StringBuilder getProject(String projectId) {
		return projects.get(projectId);
	}
	
	/**
	 * 模拟更新 添加 了审批内容的方案
	 * @param projectId
	 * @param project
	 */
	public static void updateProjectId(String projectId,StringBuilder project) {
		projects.put(projectId, project);
	}
	
	/**
	 * 模拟根据projectId删除指定方案
	 * @param projectId
	 * @return
	 */
	public static StringBuilder removeProject(String projectId) {
		return projects.remove(projectId);
	}
}
