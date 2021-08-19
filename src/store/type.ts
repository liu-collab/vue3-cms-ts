import { ILoginType } from "./login/type";
export interface IRootState {
  name: string,
  age: number
}

export interface IRootWithModule {
  loginModule: ILoginType
}

export type IRootType = IRootState & IRootWithModule
