import Request from "..";



import { IAccount } from "./type";

enum LoginAPI {
  AccountLoginAPI = '/login'
}

export function accountLoginRequest(account: IAccount) {
  return Request.post({
    url: LoginAPI.AccountLoginAPI,
    data: account
  })
}
