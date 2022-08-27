package org.openatom.springcloud.service.impl;

import org.openatom.springcloud.dao.PaymentDao;
import org.openatom.springcloud.service.PaymentService;
import org.springframework.stereotype.Service;
import org.openatom.springcloud.entities.Payment;

import javax.annotation.Resource;


@Service
public class PaymentServiceImpl implements PaymentService {

    @Resource
    private PaymentDao paymentDao;

    public int create(Payment payment) {
        return paymentDao.create(payment);
    }

    public Payment getPaymentById(Long id) {
        return paymentDao.getPaymentById(id);
    }
}
