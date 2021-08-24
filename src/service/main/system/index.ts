import { IReustType } from './../../type';
import Request from "@/service";
export function getPageListData(url: string, queryInfo: any) {
  return Request.post<IReustType>({
    url: url,
    data: queryInfo
  })
}

export function delelePageData(url: string) {
  return Request.delete<IReustType>({
    url: url
  })
}
