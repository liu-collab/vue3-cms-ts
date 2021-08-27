import Request from "@/service"
import { IReustType } from "@/service/type"

enum DashboardAPI {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale'
}

export function getCategoryGoodsCount() {
  return Request.get<IReustType>({
    url: DashboardAPI.categoryGoodsCount
  })
}
export function getCategoryGoodsSale() {
  return Request.get<IReustType>({
    url: DashboardAPI.addressGoodsSale
  })
}
export function getCategoryGoodsFavor() {
  return Request.get<IReustType>({
    url: DashboardAPI.categoryGoodsFavor
  })
}
export function getAddressGoodsSale() {
  return Request.get<IReustType>({
    url: DashboardAPI.addressGoodsSale
  })
}
