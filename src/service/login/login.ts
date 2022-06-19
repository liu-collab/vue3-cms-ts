import Request from '..';

import { IAccount, ILoginCount, ILoginData } from './type';

enum LoginAPI {
  AccountLoginAPI = '/login',
  UserInfoAPI = '/users/',
  UserMenu = '/role/'
}

export function accountLoginRequest(account: IAccount) {
  return Request.post<ILoginCount<ILoginData>>({
    url: LoginAPI.AccountLoginAPI,
    data: account
  });
}
export function userinfoRequest(id: number) {
  return Request.get<ILoginCount>({
    url: LoginAPI.UserInfoAPI + id,
    showLoading: false
  });
}
export function userMenuRequest(id: number) {
  return Request.get<ILoginCount>({
    url: LoginAPI.UserMenu + id + '/menu',
    showLoading: false
  });
}
