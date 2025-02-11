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
import { useMemo, FC } from 'react';

import { bindActionCreators } from 'redux';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Dropdown } from 'src/components/Dropdown';
import { Menu } from 'src/components/Menu';
import {
  styled,
  t,
  QueryState,
  SupersetTheme,
  useTheme,
} from '@superset-ui/core';
import {
  removeQueryEditor,
  removeAllOtherQueryEditors,
  queryEditorSetTitle,
  cloneQueryToNewTab,
  toggleLeftBar,
} from 'src/SqlLab/actions/sqlLab';
import { QueryEditor, SqlLabRootState } from 'src/SqlLab/types';
import Icons, { IconType } from 'src/components/Icons';

const TabTitleWrapper = styled.div`
  display: flex;
  align-items: center;

  [aria-label='check-circle'] {
    margin: 0px;
  }
`;
const TabTitle = styled.span`
  margin-right: ${({ theme }) => theme.gridUnit * 2}px;
  text-transform: none;
`;

const IconContainer = styled.div`
  display: inline-block;
  width: ${({ theme }) => theme.gridUnit * 8}px;
  text-align: center;
`;

interface Props {
  queryEditor: QueryEditor;
}

const STATE_ICONS: Record<string, FC<IconType>> = {
  running: Icons.CircleSolid,
  success: Icons.CheckCircleOutlined,
  failed: Icons.CloseCircleOutlined,
};

const SqlEditorTabHeader: FC<Props> = ({ queryEditor }) => {
  const theme = useTheme();
  const qe = useSelector<SqlLabRootState, QueryEditor>(
    ({ sqlLab: { unsavedQueryEditor } }) => ({
      ...queryEditor,
      ...(queryEditor.id === unsavedQueryEditor?.id && unsavedQueryEditor),
    }),
    shallowEqual,
  );
  const queryState = useSelector<SqlLabRootState, QueryState>(
    ({ sqlLab }) => sqlLab.queries[qe.latestQueryId || '']?.state || '',
  );
  const StatusIcon = queryState ? STATE_ICONS[queryState] : STATE_ICONS.running;

  const dispatch = useDispatch();
  const actions = useMemo(
    () =>
      bindActionCreators(
        {
          removeQueryEditor,
          removeAllOtherQueryEditors,
          queryEditorSetTitle,
          cloneQueryToNewTab,
          toggleLeftBar,
        },
        dispatch,
      ),
    [dispatch],
  );

  function renameTab() {
    const newTitle = prompt(t('Enter a new title for the tab'));
    if (newTitle) {
      actions.queryEditorSetTitle(qe, newTitle, qe.id);
    }
  }
  const getStatusColor = (state: QueryState, theme: SupersetTheme): string => {
    const statusColors: Record<QueryState, string> = {
      [QueryState.Running]: theme.colors.info.base,
      [QueryState.Success]: theme.colors.success.base,
      [QueryState.Failed]: theme.colors.error.base,
      [QueryState.Started]: theme.colors.primary.base,
      [QueryState.Stopped]: theme.colors.warning.base,
      [QueryState.Pending]: theme.colors.grayscale.light1,
      [QueryState.Scheduled]: theme.colors.grayscale.light2,
      [QueryState.Fetching]: theme.colors.secondary.base,
      [QueryState.TimedOut]: theme.colors.error.dark1,
    };

    return statusColors[state] || theme.colors.grayscale.light2;
  };
  return (
    <TabTitleWrapper>
      <Dropdown
        trigger={['click']}
        overlay={
          <Menu style={{ width: 176 }}>
            <Menu.Item
              className="close-btn"
              key="1"
              onClick={() => actions.removeQueryEditor(qe)}
              data-test="close-tab-menu-option"
            >
              <IconContainer>
                <Icons.CloseOutlined
                  iconSize="xs"
                  css={{ verticalAlign: 'middle' }}
                />
              </IconContainer>
              {t('Close tab')}
            </Menu.Item>
            <Menu.Item
              key="2"
              onClick={renameTab}
              data-test="rename-tab-menu-option"
            >
              <IconContainer>
                <i className="fa fa-i-cursor" />
              </IconContainer>
              {t('Rename tab')}
            </Menu.Item>
            <Menu.Item
              key="3"
              onClick={() => actions.toggleLeftBar(qe)}
              data-test="toggle-menu-option"
            >
              <IconContainer>
                <i className="fa fa-cogs" />
              </IconContainer>
              {qe.hideLeftBar ? t('Expand tool bar') : t('Hide tool bar')}
            </Menu.Item>
            <Menu.Item
              key="4"
              onClick={() => actions.removeAllOtherQueryEditors(qe)}
              data-test="close-all-other-menu-option"
            >
              <IconContainer>
                <i className="fa fa-times-circle-o" />
              </IconContainer>
              {t('Close all other tabs')}
            </Menu.Item>
            <Menu.Item
              key="5"
              onClick={() => actions.cloneQueryToNewTab(qe, false)}
              data-test="clone-tab-menu-option"
            >
              <IconContainer>
                <i className="fa fa-files-o" />
              </IconContainer>
              {t('Duplicate tab')}
            </Menu.Item>
          </Menu>
        }
      />
      <TabTitle>{qe.name}</TabTitle>
      <StatusIcon
        css={{ margin: '0px!important' }}
        iconSize="s"
        iconColor={getStatusColor(queryState, theme)}
      />
    </TabTitleWrapper>
  );
};

export default SqlEditorTabHeader;
