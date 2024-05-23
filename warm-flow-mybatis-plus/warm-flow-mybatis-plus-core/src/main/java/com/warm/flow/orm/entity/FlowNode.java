package com.warm.flow.orm.entity;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.warm.flow.core.entity.Node;
import com.warm.flow.core.entity.Skip;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * 流程节点对象 flow_node
 *
 * @author warm
 * @date 2023-03-29
 */
@TableName("flow_node")
public class FlowNode implements Node {

    /**
     * 跳转条件
     */
    @TableField(exist = false)
    List<Skip> skipList = new ArrayList<>();
    /**
     * 主键
     */
    @TableId
    private Long id;
    /**
     * 创建时间
     */
    private Date createTime;
    /**
     * 更新时间
     */
    private Date updateTime;

    /**
     * 租户ID
     */
    private String tenantId;

    /**
     * 删除标记
     */
    private String delFlag;

    /**
     * 节点类型（0开始节点 1中间节点 2结束节点 3互斥网关 4并行网关）
     */
    private Integer nodeType;
    /**
     * 流程id
     */
    private Long definitionId;
    /**
     * 流程节点编码   每个流程的nodeCode是唯一的,即definitionId+nodeCode唯一,在数据库层面做了控制
     */
    private String nodeCode;
    /**
     * 流程节点名称
     */
    private String nodeName;
    /**
     * 流程签署比例值
     */
    private BigDecimal nodeRatio;
    /**
     * 动态权限标识（权限类型:权限标识，可以多个，如role:1,role:2)
     */
    @TableField(exist = false)
    private List<String> dynamicPermissionFlagList;
    /**
     * 流程节点坐标
     */
    private String coordinate;
    /**
     * 版本
     */
    private String version;
    /**
     * 是否可以跳转任意节点（Y是 N否）
     */
    private String skipAnyNode;
    /**
     * 监听器类型
     */
    private String listenerType;
    /**
     * 监听器路径
     */
    private String listenerPath;
    /**
     * 处理器类型
     */
    private String handlerType;
    /**
     * 处理器路径
     */
    private String handlerPath;

    @Override
    public Long getId() {
        return id;
    }

    @Override
    public FlowNode setId(Long id) {
        this.id = id;
        return this;
    }

    @Override
    public Date getCreateTime() {
        return createTime;
    }

    @Override
    public FlowNode setCreateTime(Date createTime) {
        this.createTime = createTime;
        return this;
    }

    @Override
    public Date getUpdateTime() {
        return updateTime;
    }

    @Override
    public FlowNode setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
        return this;
    }

    @Override
    public String getTenantId() {
        return tenantId;
    }

    @Override
    public FlowNode setTenantId(String tenantId) {
        this.tenantId = tenantId;
        return this;
    }

    @Override
    public String getDelFlag() {
        return delFlag;
    }

    @Override
    public FlowNode setDelFlag(String delFlag) {
        this.delFlag = delFlag;
        return this;
    }

    @Override
    public Integer getNodeType() {
        return nodeType;
    }

    @Override
    public FlowNode setNodeType(Integer nodeType) {
        this.nodeType = nodeType;
        return this;
    }

    @Override
    public Long getDefinitionId() {
        return definitionId;
    }

    @Override
    public FlowNode setDefinitionId(Long definitionId) {
        this.definitionId = definitionId;
        return this;
    }

    @Override
    public String getNodeCode() {
        return nodeCode;
    }

    @Override
    public FlowNode setNodeCode(String nodeCode) {
        this.nodeCode = nodeCode;
        return this;
    }

    @Override
    public String getNodeName() {
        return nodeName;
    }

    @Override
    public FlowNode setNodeName(String nodeName) {
        this.nodeName = nodeName;
        return this;
    }

    @Override
    public BigDecimal getNodeRatio() {
        return nodeRatio;
    }

    @Override
    public FlowNode setNodeRatio(BigDecimal nodeRatio) {
        this.nodeRatio = nodeRatio;
        return this;
    }

    @Override
    public List<String> getDynamicPermissionFlagList() {
        return dynamicPermissionFlagList;
    }

    @Override
    public FlowNode setDynamicPermissionFlagList(List<String> dynamicPermissionFlagList) {
        this.dynamicPermissionFlagList = dynamicPermissionFlagList;
        return this;
    }

    @Override
    public String getCoordinate() {
        return coordinate;
    }

    @Override
    public FlowNode setCoordinate(String coordinate) {
        this.coordinate = coordinate;
        return this;
    }

    @Override
    public String getVersion() {
        return version;
    }

    @Override
    public FlowNode setVersion(String version) {
        this.version = version;
        return this;
    }

    @Override
    public String getSkipAnyNode() {
        return skipAnyNode;
    }

    @Override
    public FlowNode setSkipAnyNode(String skipAnyNode) {
        this.skipAnyNode = skipAnyNode;
        return this;
    }

    @Override
    public String getListenerType() {
        return listenerType;
    }

    @Override
    public FlowNode setListenerType(String listenerType) {
        this.listenerType = listenerType;
        return this;
    }

    @Override
    public String getListenerPath() {
        return listenerPath;
    }

    @Override
    public FlowNode setListenerPath(String listenerPath) {
        this.listenerPath = listenerPath;
        return this;
    }

    @Override
    public String getHandlerType() {
        return handlerType;
    }

    @Override
    public FlowNode setHandlerType(String listenerType) {
        this.handlerType = listenerType;
        return this;
    }

    @Override
    public String getHandlerPath() {
        return handlerPath;
    }

    @Override
    public FlowNode setHandlerPath(String listenerPath) {
        this.handlerPath = listenerPath;
        return this;
    }

    @Override
    public List<Skip> getSkipList() {
        return skipList;
    }

    @Override
    public FlowNode setSkipList(List<Skip> skipList) {
        this.skipList = skipList;
        return this;
    }

    @Override
    public String toString() {
        return "FlowNode{" +
                "skipList=" + skipList +
                ", id=" + id +
                ", createTime=" + createTime +
                ", updateTime=" + updateTime +
                ", tenantId='" + tenantId + '\'' +
                ", delFlag='" + delFlag + '\'' +
                ", nodeType=" + nodeType +
                ", definitionId=" + definitionId +
                ", nodeCode='" + nodeCode + '\'' +
                ", nodeName='" + nodeName + '\'' +
                ", nodeRatio=" + nodeRatio +
                ", dynamicPermissionFlagList=" + dynamicPermissionFlagList +
                ", coordinate='" + coordinate + '\'' +
                ", version='" + version + '\'' +
                ", skipAnyNode='" + skipAnyNode + '\'' +
                ", listenerType='" + listenerType + '\'' +
                ", listenerPath='" + listenerPath + '\'' +
                ", handlerType='" + handlerType + '\'' +
                ", handlerPath='" + handlerPath + '\'' +
                '}';
    }
}
