import { ISystemType } from './main/system/type';
import { ILoginType } from "./login/type";
export interface IRootState {
  name: string,
  age: number,
  entireDepartment: any[],
  entireRole: any[]

}

export interface IRootWithModule {
  loginModule: ILoginType,
  systemModule: ISystemType
}

export type IRootType = IRootState & IRootWithModule
