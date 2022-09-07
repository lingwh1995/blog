package com.dragonsoft.designpattern.basic.principles.dependenceinversion;

/**
 * 不使用依赖反转原则
 */
public class NoUseDependenceDeliverTest {
    public static void main(String[] args) {
        Person1 person1 = new Person1();
        person1.receviceEmail(new Email1());
        person1.receviceQQ(new QQ1());
        person1.receviceWeChat(new WeChat1());
    }
}

/**
 * 通过Person1实现接口消息的功能
 *      缺点:接受QQ要写一个方法，接收邮件要写一个方法
 */
class Person1{
    public void receviceEmail(Email1 email1){
        System.out.println(email1.getEmail());
    }
    public void receviceQQ(QQ1 qq1){
        System.out.println(qq1.getQQ());
    }
    public void receviceWeChat(WeChat1 weChat){
        System.out.println(weChat.getWeChat());
    }
}
class Email1 {
   public String getEmail(){
        return "电子邮件信息:HelloWorld";
   }
}
class QQ1 {
   public String getQQ(){
        return "QQ信息:收到了QQ消息";
   }
}
class WeChat1 {
    public String getWeChat(){
        return "微信信息:收到了微信消息";
    }
}

