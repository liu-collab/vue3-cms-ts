export interface ISystemType {
  usersList: any
  usersCount: number,
  roleList: any
  roleCount: number,
  goodsList: any
  goodsCount: number
  menuList: any
  menuCount: number
}

export interface IPayloadType {


  pageName: string
  pageUrl: string
  id?: string | number
  queryInfo: any
}
