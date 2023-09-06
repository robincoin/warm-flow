package com.warm.flow.spring.boot.config;

import com.warm.flow.core.FlowFactory;
import com.warm.flow.core.handler.DataFillHandlerImpl;
import com.warm.flow.core.service.*;
import com.warm.flow.core.service.impl.*;
import com.warm.mybatis.core.handler.DataFillHandlerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.annotation.PostConstruct;

/**
 * @author minliuhua
 * @description: 工作流bean注册配置
 * @date: 2023/6/5 23:01
 */
@Configuration
public class FlowConfig {
    @PostConstruct
    public void init() {
        DataFillHandlerFactory.set(new DataFillHandlerImpl());
    }

    @Bean
    public IFlowDefinitionService definitionService() {
        return new FlowDefinitionServiceImpl();
    }

    @Bean
    public IFlowNodeService nodeService() {
        return new FlowNodeServiceImpl();
    }

    @Bean
    public IFlowSkipService skipService() {
        return new FlowSkipServiceImpl();
    }

    @Bean
    public IFlowInstanceService instanceService() {
        return new FlowInstanceServiceImpl();
    }

    @Bean
    public IFlowTaskService taskService() {
        return new FlowTaskServiceImpl();
    }

    @Bean
    public IFlowHisTaskService hisTaskService() {
        return new FlowHisTaskServiceImpl();
    }

    @Bean
    public FlowFactory initFlowServer(IFlowDefinitionService definitionService, IFlowHisTaskService hisTaskService
            , IFlowInstanceService instanceService, IFlowNodeService nodeService
            , IFlowSkipService skipService, IFlowTaskService taskService) {
        return new FlowFactory(definitionService, hisTaskService, instanceService
                , nodeService, skipService, taskService);
    }

}