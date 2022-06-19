import { IReustType } from './../../type';
import Request from '@/service';
export function getPageListData(url: string, queryInfo: any) {
  return Request.post<IReustType>({
    url: url,
    data: queryInfo
  });
}

export function delelePageData(url: string) {
  return Request.delete<IReustType>({
    url: url
  });
}

export function createPageData(url: string, newData: any) {
  return Request.post<IReustType>({
    url: url,
    data: newData
  });
}
export function editPageData(url: string, editData: any) {
  return Request.patch<IReustType>({
    url: url,
    data: editData
  });
}
