/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { supersetTheme } from '@superset-ui/core';
import { Tooltip as AntdTooltip } from 'antd-v5';
import type { TooltipProps } from 'antd-v5';

// Re-export the types
export type { TooltipProps };
export type TooltipPlacement =
  | 'top'
  | 'left'
  | 'right'
  | 'bottom'
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight'
  | 'leftTop'
  | 'leftBottom'
  | 'rightTop'
  | 'rightBottom';

export const Tooltip = ({ overlayStyle, ...props }: TooltipProps) => (
  <AntdTooltip
    styles={{
      body: { overflow: 'hidden', textOverflow: 'ellipsis' },
      root: overlayStyle ?? {},
    }}
    color={`${supersetTheme.colors.grayscale.dark2}e6`}
    {...props}
  />
);
