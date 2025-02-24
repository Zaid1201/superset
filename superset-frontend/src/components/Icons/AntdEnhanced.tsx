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

// NOTE: Targeted import (as opposed to `import *`) is important here for proper tree-shaking
import {
  AlignCenterOutlined,
  AlignLeftOutlined,
  AlignRightOutlined,
  ApartmentOutlined,
  AppstoreOutlined,
  ArrowRightOutlined,
  BarChartOutlined,
  BellOutlined,
  BookOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
  CalendarOutlined,
  CheckOutlined,
  CheckCircleOutlined,
  CheckSquareOutlined,
  CloseOutlined,
  CloseCircleOutlined,
  ClockCircleOutlined,
  ColumnWidthOutlined,
  CommentOutlined,
  ConsoleSqlOutlined,
  CopyOutlined,
  DashboardOutlined,
  DatabaseOutlined,
  DeleteFilled,
  DownSquareOutlined,
  DeleteOutlined,
  DownOutlined,
  DownloadOutlined,
  EditOutlined,
  EllipsisOutlined,
  ExclamationCircleOutlined,
  ExclamationCircleFilled,
  EyeOutlined,
  EyeInvisibleOutlined,
  FallOutlined,
  FieldTimeOutlined,
  FileImageOutlined,
  FileOutlined,
  FireOutlined,
  FullscreenExitOutlined,
  FullscreenOutlined,
  FundProjectionScreenOutlined,
  FunctionOutlined,
  InfoCircleOutlined,
  InfoCircleFilled,
  InsertRowAboveOutlined,
  InsertRowBelowOutlined,
  LineChartOutlined,
  LinkOutlined,
  MailOutlined,
  MinusCircleOutlined,
  LoadingOutlined,
  MonitorOutlined,
  MoreOutlined,
  PicCenterOutlined,
  PlusCircleOutlined,
  PlusOutlined,
  ReloadOutlined,
  RightOutlined,
  SaveOutlined,
  SearchOutlined,
  SettingOutlined,
  StarOutlined,
  StarFilled,
  StopOutlined,
  SyncOutlined,
  TagOutlined,
  TagsOutlined,
  TableOutlined,
  LockOutlined,
  UnlockOutlined,
  UploadOutlined,
  UpOutlined,
  UserOutlined,
  VerticalAlignBottomOutlined,
  VerticalAlignTopOutlined,
  VerticalLeftOutlined,
  VerticalRightOutlined,
  NumberOutlined,
  ThunderboltOutlined,
  FilterOutlined,
  UnorderedListOutlined,
  WarningOutlined,
} from '@ant-design/icons';
import { StyledIcon } from './Icon';
import IconType from './IconType';

const AntdIcons = {
  AlignCenterOutlined,
  AlignLeftOutlined,
  AlignRightOutlined,
  ApartmentOutlined,
  AppstoreOutlined,
  ArrowRightOutlined,
  BarChartOutlined,
  BellOutlined,
  BookOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
  CalendarOutlined,
  CheckOutlined,
  CheckCircleOutlined,
  CheckSquareOutlined,
  CloseOutlined,
  CloseCircleOutlined,
  ClockCircleOutlined,
  ColumnWidthOutlined,
  CommentOutlined,
  ConsoleSqlOutlined,
  CopyOutlined,
  DashboardOutlined,
  DatabaseOutlined,
  DeleteFilled,
  DownSquareOutlined,
  DeleteOutlined,
  DownOutlined,
  DownloadOutlined,
  EditOutlined,
  EllipsisOutlined,
  ExclamationCircleOutlined,
  ExclamationCircleFilled,
  EyeOutlined,
  EyeInvisibleOutlined,
  FallOutlined,
  FieldTimeOutlined,
  FileImageOutlined,
  FileOutlined,
  FireOutlined,
  FullscreenExitOutlined,
  FullscreenOutlined,
  FundProjectionScreenOutlined,
  FunctionOutlined,
  InfoCircleOutlined,
  InfoCircleFilled,
  InsertRowAboveOutlined,
  InsertRowBelowOutlined,
  LineChartOutlined,
  LinkOutlined,
  LoadingOutlined,
  MailOutlined,
  MinusCircleOutlined,
  MonitorOutlined,
  MoreOutlined,
  PicCenterOutlined,
  PlusCircleOutlined,
  PlusOutlined,
  ReloadOutlined,
  RightOutlined,
  SaveOutlined,
  SearchOutlined,
  SettingOutlined,
  StarOutlined,
  StarFilled,
  StopOutlined,
  SyncOutlined,
  TagOutlined,
  TagsOutlined,
  TableOutlined,
  LockOutlined,
  UploadOutlined,
  UnlockOutlined,
  UpOutlined,
  UserOutlined,
  VerticalAlignBottomOutlined,
  VerticalAlignTopOutlined,
  VerticalLeftOutlined,
  VerticalRightOutlined,
  NumberOutlined,
  ThunderboltOutlined,
  FilterOutlined,
  UnorderedListOutlined,
  WarningOutlined,
};

const AntdEnhancedIcons = Object.keys(AntdIcons)
  .filter(k => !k.includes('TwoTone'))
  .map(k => ({
    [k]: (props: IconType) => {
      const whatRole = props?.onClick ? 'button' : 'img';
      const ariaLabel = props['aria-label'] || k;
      return (
        <StyledIcon
          // @ts-ignore
          component={AntdIcons[k as keyof typeof AntdIcons]}
          role={whatRole}
          aria-label={ariaLabel}
          {...props}
        />
      );
    },
  }))
  .reduce((l, r) => ({ ...l, ...r }));
export default AntdEnhancedIcons;
