import { ISystemType } from './main/system/type';
import { ILoginType } from "./login/type";
export interface IRootState {
  name: string,
  age: number
}

export interface IRootWithModule {
  loginModule: ILoginType,
  systemModule: ISystemType
}

export type IRootType = IRootState & IRootWithModule
