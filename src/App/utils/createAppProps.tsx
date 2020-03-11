import { Request } from "express";
import { createStore } from "./../mobx/index";
import createClient from "../apollo";
// import { setGetItem, setSetItem, setItem } from "./localStorage";
import cookie from "cookie";
import moment from "moment";
import { getNormalEnv } from "./getEnv";
interface Options {
  req?: Request;
}
/**
 * 生成APP属性
 */
export default async (options: Options) => {
  const { req } = options;
  if (typeof window !== "undefined") {
    // setSetItem((key, value = '') => {
    //   document.cookie = cookie.serialize(key, value, {
    //     path: '/',
    //     expires: moment(`2050-01-01`).toDate(),
    //   });
    //   sessionStorage.setItem(key, value);
    // });
    // setGetItem(key => {
    //   // return document.cookie[key] || localStorage.getItem(key);
    //   return sessionStorage.getItem(key) || cookie.parse(document.cookie)[key];
    // });
    //初始化页面如果cookie的token与session中的不同步则同步成cookie中token
    // const cookieUserId = cookie.parse(document.cookie)['userId'];
    // const cookieToken = cookie.parse(document.cookie)['token'];
    // if (sessionStorage.getItem('token') !== cookieToken) {
    //   setItem('token', cookieToken);
    // }
    // if (sessionStorage.getItem('userId') !== cookieUserId) {
    //   setItem('userId', cookieUserId);
    // }
  } else {
    // setSetItem((_key, _value = '') => {
    //   // const storage = cookie.parse(req?.headers.cookie || '');
    //   // storage[key]
    //   // req && (req.headers.cookie = cookie.serialize(key, value));
    // });
    // setGetItem(key => {
    //   const storage = cookie.parse(req?.headers.cookie || '');
    //   return storage[key];
    // });
  }
  //   const extra = await import(
  //     `../extraStore/${getNormalEnv('EXTRA_STORE') || 'index'}`
  //   );
  //   const ExtraStoreProvider = extra.ExtraStoreProvider;
  //   const extraStore = extra.createExtraStore();
  const store = createStore();
  const client = await createClient(store);
  return {
    client,
    store
  };
};
