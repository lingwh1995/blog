package org.openatom.springcloud.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.openatom.springcloud.entities.Order;

@Mapper
public interface OrderDao {

    /**
     * 新建订单
     * @param order
     */
    void create(Order order);

    /**
     * 修改订单状态，从0改为1
     * @param userId
     * @param status
     */
    void update(@Param("userId") Long userId,@Param("status") Integer status);
}