import { ISystemType } from './main/system/type';
import { ILoginType } from "./login/type";
import { IDashBoard } from './main/alalysis/type';
export interface IRootState {

  entireDepartment: any[],
  entireRole: any[],
  entireMenu: any[]

}

export interface IRootWithModule {
  loginModule: ILoginType,
  systemModule: ISystemType,
  dashboardModule: IDashBoard
}

export type IRootType = IRootState & IRootWithModule
