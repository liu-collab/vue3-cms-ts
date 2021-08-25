export interface ISystemType {
  usersList: any
  usersCount: number,
  roleList: any
  roleCount: number,
  goodsList: any
  goodsCount: number
  menuList: any
  menuCount: number,
  departmentList: any
  departmentCount: number
}

export interface IPayloadType {


  pageName: string
  pageUrl: string
  id?: string | number
  newData?: any
  editData?: any
  queryInfo: any
}
