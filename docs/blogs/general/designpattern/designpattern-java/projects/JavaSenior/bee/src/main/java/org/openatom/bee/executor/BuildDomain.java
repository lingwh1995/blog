package org.openatom.bee.executor;

import java.lang.reflect.Field;
import java.lang.reflect.Modifier;

import org.openatom.bee.domain.User;

public class BuildDomain {
	private static final String NBSP_4 = "    ";
	private static final String NBSP_8 = "        ";
	private static final String LINE_BREAK = "\n";
	private static final String START_OF_METHOD = "{";
	private static final String END_OF_METHOD = "}";

	public static void main(String[] args) {
		User user = new User();

		Class clazz = user.getClass();
		String buildDomain = buildDomain(clazz);
		System.out.println(buildDomain);

	}

	/**
	 * 构建Domian
	 * @param <T>
	 * 
	 * @param clazz
	 */
	private static <T> String buildDomain(Class<T> clazz) {
		StringBuilder classCode = new StringBuilder();
		// 构建包名
		classCode.append("package org.openatom.bee.executor;");
		classCode.append(LINE_BREAK);
		classCode.append(LINE_BREAK);
		// 构建类开始第一行
		classCode.append("public class ").append(clazz.getSimpleName()).append(" ").append(START_OF_METHOD);
		Field[] declaredFields = clazz.getDeclaredFields();

		// 构建属性
		classCode.append(LINE_BREAK);
		for (int i = 0; i < declaredFields.length; i++) {
			Field declaredField = declaredFields[i];
			int modifiers = declaredField.getModifiers();
			String typeName = declaredField.getType().getSimpleName();
			String fieldName = declaredField.getName();
			classCode.append("\n");
			classCode.append(NBSP_4).append(Modifier.toString(modifiers)).append(" ").append(typeName).append(" ")
					.append(fieldName).append(";");

		}
		classCode.append(LINE_BREAK);

		// 构建无参构造方法
		classCode.append(LINE_BREAK);
		classCode.append(NBSP_4).append("public ").append(clazz.getSimpleName()).append("()").append(" ")
				.append(START_OF_METHOD).append("\n").append("\n").append(NBSP_4).append(END_OF_METHOD);
		classCode.append(LINE_BREAK);

		// 构建有参构造方法
		classCode.append(LINE_BREAK);
		classCode.append(NBSP_4).append("public ").append(clazz.getSimpleName()).append("(");
		for (int i = 0; i < declaredFields.length; i++) {
			Field declaredField = declaredFields[i];
			String typeName = declaredField.getType().getSimpleName();
			String fieldName = declaredField.getName();
			classCode.append(typeName).append(" ").append(fieldName).append(", ");
		}
		classCode.deleteCharAt(classCode.length() - 1);
		classCode.deleteCharAt(classCode.length() - 1);
		classCode.append(") ").append(START_OF_METHOD);
		for (int i = 0; i < declaredFields.length; i++) {
			Field declaredField = declaredFields[i];
			String fieldName = declaredField.getName();
			classCode.append("\n");
			classCode.append(NBSP_8).append("this.").append(fieldName).append(" = ").append(fieldName).append(";");
		}
		classCode.append("\n").append(NBSP_4).append(END_OF_METHOD);
		classCode.append(LINE_BREAK);

		// 构建setter()方法和getter()方法
		for (int i = 0; i < declaredFields.length; i++) {
			Field declaredField = declaredFields[i];
			String typeName = declaredField.getType().getSimpleName();
			String fieldName = declaredField.getName();
			// 构建getter()方法
			classCode.append("\n").append(NBSP_4).append("public ").append(typeName).append(" get")
					.append(toUpperCaseFirst(fieldName)).append("() ").append(START_OF_METHOD).append("\n")
					.append(NBSP_8).append("return ").append(fieldName).append(";").append("\n").append(NBSP_4)
					.append(END_OF_METHOD).append("\n");
			// 构建setter()方法
			classCode.append("\n").append(NBSP_4).append("public void set").append(toUpperCaseFirst(fieldName))
					.append("(" + typeName + " " + fieldName + ") ").append(START_OF_METHOD).append("\n").append(NBSP_8)
					.append("this.").append(fieldName).append(" = ").append(fieldName).append(";").append("\n")
					.append(NBSP_4).append(END_OF_METHOD).append("\n");
		}

		// 构建toString()方法
		classCode.append(LINE_BREAK);
		classCode.append(NBSP_4).append("@Override").append("\n").append(NBSP_4).append("public String toString() {")
				.append("\n").append(NBSP_8).append(" ").append("return").append(" \"").append(clazz.getSimpleName())
				.append(" [");
		for (int i = 0; i < declaredFields.length; i++) {
			Field declaredField = declaredFields[i];
			String fieldName = declaredField.getName();
			if (i == 0) {
				classCode.append(fieldName).append("=").append("\"").append(" + ").append(fieldName).append("")
						.append(" + ");
			} else {
				classCode.append("\", ").append(fieldName).append("=").append("\"").append(" + ").append(fieldName)
						.append("").append(" + ");
			}
		}
		classCode.append("\"]\"").append(";").append("\n").append(NBSP_4).append(END_OF_METHOD);

		classCode.append("\n").append(END_OF_METHOD);
		return String.valueOf(classCode);
	}

	/**
	 * 首字母大写工具类
	 * 
	 * @param string
	 * @return
	 */
	public static String toUpperCaseFirst(String string) {
		return string.substring(0, 1).toUpperCase() + string.substring(1);
	}
}
