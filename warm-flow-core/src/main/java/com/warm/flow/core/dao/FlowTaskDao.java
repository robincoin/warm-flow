package com.warm.flow.core.dao;

import com.warm.flow.core.entity.Task;
import com.warm.tools.utils.page.Page;

import java.util.List;

/**
 * 待办任务Mapper接口
 *
 * @author warm
 * @date 2023-03-29
 */
public interface FlowTaskDao extends WarmDao<Task> {

    /**
     * 根据instanceIds删除
     *
     * @param instanceIds 主键
     * @return 结果
     */
    int deleteByInsIds(List<Long> instanceIds);
}
