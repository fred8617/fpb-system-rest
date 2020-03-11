import React, { FC, useEffect } from "react";
import NProgress from "nprogress";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient } from "apollo-client";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "nprogress/nprogress.css";
import { GlobalStore, StoreProvider } from "./mobx";
import Layout from "./layouts";
export interface AppProps {
  client: ApolloClient<any>;
  store: GlobalStore;
}
const App: FC<AppProps> = ({ ...props }) => {
  useEffect(() => {
    document.getElementById("ssr-transition-solution")?.remove();
  }, []);
  return (
    <>
      <ApolloProvider client={props.client}>
        <StoreProvider store={props.store}>
          <Router>
            <Switch>
              <Layout />
            </Switch>
          </Router>
        </StoreProvider>
      </ApolloProvider>
    </>
  );
};

export default App;
