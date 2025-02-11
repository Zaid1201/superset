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

import { FC } from 'react';
import { startCase } from 'lodash';
import AntdEnhancedIcons from './AntdEnhanced';
import Icon from './Icon';
import IconType from './IconType';

const IconFileNames = [
  // to keep custom
  'certified',
  'layers',
  'full',
  'circle_solid',

  'area-chart-tile',
  'bar-chart-tile',
  'big-number-chart-tile',
  'binoculars',
  'bolt_small',
  'bolt_small_run',

  'cancel-x',
  'card_view',
  'cards',
  'cards_locked',
  'checkbox-half',
  'checkbox-off',
  'checkbox-on',
  'code',
  'cog',
  'collapse',
  'color_palette',
  'current-rendered-tile',
  'components',
  'copy',
  'cursor_target',
  'dataset_physical',
  'dataset_virtual_greyscale',
  'dataset_virtual',
  'download',
  'drag',
  'edit_alt',
  'edit',
  'error',
  'error_solid',
  'error_solid_small',
  'exclamation',
  'expand',
  'field_abc',
  'field_date',
  'field_derived',
  'field_num',
  'field_struct',
  'file',
  'filter',
  'filter_small',
  'folder',
  'grid',
  'image',
  'import',
  'info',
  'info-solid',
  'info_solid_small',
  'join',
  'keyboard',
  'lightbulb',
  'line-chart-tile',
  'location',
  'lock_locked',
  'lock_unlocked',
  'map',
  'message',
  'minus',
  'minus_solid',
  'more_horiz',
  'move',
  'nav_charts',
  'nav_dashboard',
  'nav_explore',
  'nav_home',
  'nav_lab',
  'note',
  'offline',
  'paperclip',
  'pie-chart-tile',
  'placeholder',
  'queued',
  'running',
  'sql',
  'server',
  'slack',
  'sort_asc',
  'sort_desc',
  'sort',
  'triangle_change',
  'up-level',
  'user',
  'warning',
  'warning_solid',
  'ballot',
  'category',
  'undo',
  'redo',
  // to remove
  'tags',
  'bolt',
  'list',
  'close',
  'caret_down',
  'more_vert',
  'caret_left',
  'caret_right',
  'caret_up',
  'list_view',
  'card_view',
  'table',
  'triangle_down',
  'triangle_up',
  'plus',
  'plus_large',
  'plus_small',
  'plus_solid',
  'refresh',
  'x-large',
  'x-small',
  'calendar',
  'alert',
  'alert_solid',
  'alert_solid_small',
  'save',
  'eye',
  'eye_slash',
  'gear',
  'nav_data',
  'favorite-selected',
  'favorite_small_selected',
  'favorite-unselected',
  'check',
  'circle_check',
  'circle_check_solid',
  'circle',
  'function_x',
  'clock',
  'cancel',
  'cancel_solid',
  'field_boolean',
  'search',
  'email',
  'share',
];

const iconOverrides: Record<string, FC<IconType>> = {};
IconFileNames.forEach(fileName => {
  const keyName = startCase(fileName).replace(/ /g, '');
  iconOverrides[keyName] = (props: IconType) => (
    <Icon fileName={fileName} {...props} />
  );
});

export type { IconType };

export default {
  ...AntdEnhancedIcons,
  ...iconOverrides,
};
