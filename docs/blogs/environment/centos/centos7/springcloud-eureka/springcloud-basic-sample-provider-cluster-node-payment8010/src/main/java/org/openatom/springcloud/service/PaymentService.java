package org.openatom.springcloud.service;

import org.apache.ibatis.annotations.Param;
import org.openatom.springcloud.entities.Payment;

public interface PaymentService {

    int create(Payment payment);

    Payment getPaymentById(@Param("id") Long id);
}
