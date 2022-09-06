package org.openatom.springcloud.controller;

import org.openatom.springcloud.entities.CommonResult;
import org.openatom.springcloud.entities.Order;
import org.openatom.springcloud.service.OrderService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController
public class OrderController {

    @Resource
    private OrderService orderService;
    /**
     * 测试地址:
     *      http://localhost/order/create?userId=1&productId=1&count=10&money=100
     * @param order
     * @return
     */
    @GetMapping("/order/create")
    public CommonResult create(Order order) {
        orderService.create(order);
        return new CommonResult(200,"订单创建成功");
    }
}
