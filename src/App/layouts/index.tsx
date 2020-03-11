import React, { FC, useMemo, useEffect } from "react";
import useGlobalStore from "../mobx";
import { useLocation, Redirect } from "react-router-dom";
import { Skeleton } from "antd";
import LoadableLayout from "./loadable-layout";
export interface LayoutProps {}
export interface BaseLayoutProps {
    // logoutUrl?: AvatarProps['logoutUrl'];
    /**
     * 布局
     */
    layout:string;
  }
const Layout: FC<LayoutProps> = ({ ...props }) => {
  const store = useGlobalStore();
  const location = useLocation();

  //当前菜单
  const nowMenu = useMemo(
    () => store.menus.find(menu => menu.url === location.pathname),
    [location.pathname, store.menus]
  );
  useEffect(() => {
    document.body.id = `${nowMenu?.key}-body`;
  }, [nowMenu]);
  return (
    <>
      {nowMenu && (
        <div id={nowMenu.key}>
          <LoadableLayout
            fallback={<Skeleton active loading />}
            layout={nowMenu.layout?.toLowerCase()}
          />
        </div>
      )}
      {!nowMenu && (
        <Redirect
          to={{
            pathname: "/login",
            search: `?redirect=${location.pathname}`
          }}
        />
      )}
    </>
  );
};
export default Layout;
