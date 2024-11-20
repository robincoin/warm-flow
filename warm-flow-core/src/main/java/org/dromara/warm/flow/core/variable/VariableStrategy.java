/*
 *    Copyright 2024-2025, Warm-Flow (290631660@qq.com).
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *       https://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */
package org.dromara.warm.flow.core.variable;

import org.dromara.warm.flow.core.strategy.ExpressionStrategy;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 办理人变量表达式策略
 *
 * @author warm
 */
public interface VariableStrategy extends ExpressionStrategy<List<String>> {

    Map<String, ExpressionStrategy<List<String>>> map = new HashMap<>();

    default void setExpression(ExpressionStrategy<List<String>> variableStrategy) {
        map.put(variableStrategy.getType(), variableStrategy);
    }

    static Map<String, ExpressionStrategy<List<String>>> getExpressionMap() {
        return map;
    }
}
