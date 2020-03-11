import { GlobalStore } from "./../mobx/index";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { setContext } from "apollo-link-context";
import { BASE_URL } from "../utils/getEnv";
import {
  UserInfoDocument,
  UserInfoQuery,
  UserInfoQueryVariables,
  Menu
} from "../types";

declare global {
  interface Window {
    __APOLLO_STATE__: any;
  }
}

const createClient = async (store: GlobalStore) => {
  const getMenus = async () => {
    try {
      //   const userId = getItem('userId');
      //   const query = userId ? common : commonWithoutUser;
      //   const variables = userId ? { id: userId } : null;
      const { data } = await client.query<
        UserInfoQuery,
        UserInfoQueryVariables
      >({
        query: UserInfoDocument,
        // variables,
        fetchPolicy: "network-only"
      });
      //   if (userId) {
      //     store.userInfo = data.user_by_pk;
      //   }
      store.menus = data.userInfo.menus as Menu[];
      //   await store.getMenusIconComponent();
      //   store.languages = data.language;
      //   let lang = getItem('lang') || getNormalEnv('DEFAULT_LANG');
      //   await store.setLang(lang);
    } catch (error) {
      //   await getMenus();
    }
  };
  let cache = new InMemoryCache();
  //此处可依据req与window去判断环境
  let uri = `${BASE_URL()}/graphql`;
  const authLink = setContext((_, { headers = {} }) => {
    // const token = getItem('token');
    // token && (headers['Authorization'] = token);
    return {
      headers
    };
  }).concat(
    onError(err => {
      const codes = err.graphQLErrors?.map(e => e.extensions?.code) || [];
      //   if (codes.includes('invalid-jwt') || codes.includes('not-found')) {
      //     setItem('token');
      //     setItem('userId');
      //     // store.loggedIn = false;
      //   }
    })
  );

  const httpLink = createHttpLink({
    uri,
    fetch: fetch as any,
    credentials: "same-origin"
  });
  let link = authLink.concat(httpLink);

  const client = new ApolloClient<any>({
    // ssrMode: true,
    connectToDevTools: true,
    // ssrForceFetchDelay: 100,
    link,
    cache
    // ...globalStore,
  });
  store.client = client;
  await getMenus();
  return client;
};

export default createClient;
