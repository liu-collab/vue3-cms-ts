export interface IAccount {
  name: string;
  password: string;
}

export interface ILoginData {
  id: number;
  name: string;
  token: string;
}

//data的数据类型由不同的网络请求决定
export interface ILoginCount<T = any> {
  code: number;
  data: T;
}
