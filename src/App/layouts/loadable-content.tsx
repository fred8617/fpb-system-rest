import { FC, useMemo, useRef } from 'react';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import loadable from '@loadable/component';
import useGlobalStore from '../mobx';
import { observer } from 'mobx-react-lite';
import { Skeleton } from 'antd';

const LoadableComponent = React.memo(
  loadable(props => import(`../pages/${props.component}`)),
);
interface LoadableContentProps {
  /**
   * 布局
   */
  layout: string;
  location?: any;
}

const LoadableContent: FC<LoadableContentProps> = observer(({ location }) => {
  const store = useGlobalStore();
  return (
    <Switch location={location}>
      {store.menus
        .filter(e => e.component)
        .map(menu => {
          return (
            <Route exact key={menu.key} path={menu.url as string}>
              <LoadableComponent
                fallback={<Skeleton active loading />}
                component={menu.component}
              />
            </Route>
          );
        })}
    </Switch>
  );
});

export { LoadableContent as default };
