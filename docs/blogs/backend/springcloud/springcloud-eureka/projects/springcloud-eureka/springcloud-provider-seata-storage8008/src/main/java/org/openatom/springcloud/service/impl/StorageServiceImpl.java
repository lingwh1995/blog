package org.openatom.springcloud.service.impl;

import lombok.extern.slf4j.Slf4j;
import org.openatom.springcloud.dao.StorageDao;
import org.openatom.springcloud.service.StorageService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;


@Service
@Slf4j
public class StorageServiceImpl implements StorageService {

    @Resource
    private StorageDao storageDao;

    /**
     * 扣减库存
     */
    @Override
    public void decrease(Long productId, Integer count) {
        log.info("------->storage-service中扣减库存开始");
        storageDao.decrease(productId,count);
        log.info("------->storage-service中扣减库存结束");
    }
}
