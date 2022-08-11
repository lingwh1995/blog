package org.openatom.springcloud.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.openatom.springcloud.entities.Payment;

/**
 * 用于测试Hystrix
 */
@Mapper
public interface PaymentHystrixDao {

    int create(Payment payment);

    Payment getPaymentById(@Param("id") Long id);
}
