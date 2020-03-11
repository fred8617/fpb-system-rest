import { createContext, FC } from "react";
import React from "react";
import { ApolloClient } from "apollo-client";
import { useLocalStore } from "mobx-react-lite";
import { Menu, User } from "../types";
export interface GlobalStore {
  client: ApolloClient<any> | null;
  menus: Menu[];
  userInfo: User | null;
}
interface StoreProviderProps {
  store: GlobalStore;
}
export const StoreProvider: FC<StoreProviderProps> = ({ children, store }) => {
  const localStore = useLocalStore<GlobalStore>(() => store);
  return <Context.Provider value={localStore}>{children}</Context.Provider>;
};
const Context = createContext<GlobalStore | null>(null);
const useGlobalStore = () => {
  const store = React.useContext(Context);
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error("useStore must be used within a StoreProvider.");
  }
  return store;
};
export type createStoreType = () => GlobalStore;
export const createStore: createStoreType = () => {
  return {
    client: null,
    menus: [],
    userInfo: null
  };
};
export default useGlobalStore;
