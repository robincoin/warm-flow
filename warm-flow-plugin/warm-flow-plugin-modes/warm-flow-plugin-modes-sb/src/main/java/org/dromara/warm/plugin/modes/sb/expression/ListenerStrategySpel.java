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
package org.dromara.warm.plugin.modes.sb.expression;

import org.dromara.warm.flow.core.constant.FlowCons;
import org.dromara.warm.flow.core.listener.ListenerStrategy;
import org.dromara.warm.plugin.modes.sb.helper.SpelHelper;

import java.util.Map;

/**
 * spel监听器表达式 @@spel@@|#{@user.eval()}
 *
 * @author warm
 */
public class ListenerStrategySpel implements ListenerStrategy {

    @Override
    public String getType() {
        return FlowCons.splitAt + "spel" + FlowCons.splitAt;
    }

    @Override
    public Void eval(String expression, Map<String, Object> variable) {
        SpelHelper.parseExpression(expression, variable);
        return null;
    }
}
