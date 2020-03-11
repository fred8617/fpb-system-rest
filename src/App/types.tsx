import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

/** 菜单 */
export type Menu = {
   __typename?: 'Menu',
  id: Scalars['ID'],
  /** 标识 */
  key: Scalars['String'],
  /** 名称 */
  name: Scalars['String'],
  /** 图标 */
  icon?: Maybe<Scalars['String']>,
  /** 布局 front back empty */
  layout: Scalars['String'],
  /** url */
  url: Scalars['String'],
  /** 父节点 */
  parentId?: Maybe<Scalars['ID']>,
  /** 加载组件 */
  component?: Maybe<Scalars['String']>,
};

export type Query = {
   __typename?: 'Query',
  /** 获取用户信息 */
  userInfo: UserInfo,
};

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  /** 姓名 */
  name: Scalars['String'],
  /** 角色 */
  role: Scalars['String'],
  /** 公司 */
  company: Scalars['String'],
  /** 账号 */
  account: Scalars['String'],
  /** 电话 */
  phone: Scalars['String'],
  /** 状态 */
  status: Scalars['Int'],
};

/** 用户信息 */
export type UserInfo = {
   __typename?: 'UserInfo',
  /** 用户信息 */
  user: User,
  /** 所属菜单 */
  menus: Array<Maybe<Menu>>,
};

export type MQueryVariables = {};


export type MQuery = (
  { __typename?: 'Query' }
  & { userInfo: (
    { __typename?: 'UserInfo' }
    & { menus: Array<Maybe<(
      { __typename?: 'Menu' }
      & Pick<Menu, 'id'>
    )>> }
  ) }
);

export type MenuFragmentFragment = (
  { __typename?: 'Menu' }
  & Pick<Menu, 'icon' | 'id' | 'layout' | 'name' | 'parentId' | 'url' | 'key' | 'component'>
);

export type UserInfoQueryVariables = {};


export type UserInfoQuery = (
  { __typename?: 'Query' }
  & { userInfo: (
    { __typename?: 'UserInfo' }
    & { menus: Array<Maybe<(
      { __typename?: 'Menu' }
      & MenuFragmentFragment
    )>>, user: (
      { __typename?: 'User' }
      & Pick<User, 'account' | 'company' | 'id' | 'name' | 'phone' | 'role' | 'status'>
    ) }
  ) }
);

export const MenuFragmentFragmentDoc = gql`
    fragment MenuFragment on Menu {
  icon
  id
  layout
  name
  parentId
  url
  key
  component
}
    `;
export const MDocument = gql`
    query m {
  userInfo {
    menus {
      id
    }
  }
}
    `;

/**
 * __useMQuery__
 *
 * To run a query within a React component, call `useMQuery` and pass it any options that fit your needs.
 * When your component renders, `useMQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMQuery({
 *   variables: {
 *   },
 * });
 */
export function useMQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MQuery, MQueryVariables>) {
        return ApolloReactHooks.useQuery<MQuery, MQueryVariables>(MDocument, baseOptions);
      }
export function useMLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MQuery, MQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MQuery, MQueryVariables>(MDocument, baseOptions);
        }
export type MQueryHookResult = ReturnType<typeof useMQuery>;
export type MLazyQueryHookResult = ReturnType<typeof useMLazyQuery>;
export type MQueryResult = ApolloReactCommon.QueryResult<MQuery, MQueryVariables>;
export const UserInfoDocument = gql`
    query userInfo {
  userInfo {
    menus {
      ...MenuFragment
    }
    user {
      account
      company
      id
      name
      phone
      role
      status
    }
  }
}
    ${MenuFragmentFragmentDoc}`;

/**
 * __useUserInfoQuery__
 *
 * To run a query within a React component, call `useUserInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserInfoQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserInfoQuery, UserInfoQueryVariables>) {
        return ApolloReactHooks.useQuery<UserInfoQuery, UserInfoQueryVariables>(UserInfoDocument, baseOptions);
      }
export function useUserInfoLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserInfoQuery, UserInfoQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UserInfoQuery, UserInfoQueryVariables>(UserInfoDocument, baseOptions);
        }
export type UserInfoQueryHookResult = ReturnType<typeof useUserInfoQuery>;
export type UserInfoLazyQueryHookResult = ReturnType<typeof useUserInfoLazyQuery>;
export type UserInfoQueryResult = ApolloReactCommon.QueryResult<UserInfoQuery, UserInfoQueryVariables>;