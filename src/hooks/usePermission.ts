import { useStore } from "@/store";

export function usePermission(pageName: string, handleName: string) {

  const store = useStore()
  const permission = store.state.loginModule.permission
  const verifyPermission = `system:${pageName}:${handleName}`
  //查找传过来的用户名是否拥有相应的权限
  return !!permission.find((item) => item === verifyPermission)
}
