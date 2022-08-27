package org.openatom.springcloud.service.impl;


import lombok.extern.slf4j.Slf4j;
import org.openatom.springcloud.dao.AccountDao;
import org.openatom.springcloud.service.AccountService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.math.BigDecimal;
import java.util.concurrent.TimeUnit;

/**
 * 账户业务实现类
 */
@Service
@Slf4j
public class AccountServiceImpl implements AccountService {

    @Resource
    AccountDao accountDao;

    /**
     * 扣减账户余额
     */
    @Override
    public void decrease(Long userId, BigDecimal money) {
        log.info("------->account-service中扣减账户余额开始");
        //模拟超时异常，全局事务回滚
        int i = 10/0;
        //暂停几秒钟线程
//        try {
//            TimeUnit.SECONDS.sleep(20);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
        accountDao.decrease(userId,money);
        log.info("------->account-service中扣减账户余额结束");
    }
}
