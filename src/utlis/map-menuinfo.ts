import { IBread } from '@/base-ui/Breadcrumb/type/type'
import { RouteRecordRaw } from 'vue-router'

//保存第一次进来时的菜单,用于重定向路由
let fistMenu: any = null
export function mapMenuInfo(userInfoMenu: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  //1.先加载所有的默认路由
  const allRoutes: RouteRecordRaw[] = []
  //加载所有导出的路由文件
  const routerFiles = require.context('../router/main', true, /\.ts/)
  routerFiles.keys().forEach(key => {
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)

  })
  // console.log(allRoutes)
  //2.根据菜单获取需要添加的路由
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find(route => route.path === menu.url)
        if (route) routes.push(route)
        if (!fistMenu) {
          fistMenu = menu
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(userInfoMenu)

  return routes
}

//面包屑路径和名字查找
export function pathBreadCrumb(userInfoMenu: any[], currentPath: string) {
  const breadCrumbs: IBread[] = []
  pathMapToMenu(userInfoMenu, currentPath, breadCrumbs)
  return breadCrumbs
}


//根据路径查找当前点击的aside  ,对面包屑功能进行扩展
export function pathMapToMenu(userInfoMenu: any[], currentPath: string, breadCrumbs?: IBread[]): any {
  for (const menu of userInfoMenu) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        breadCrumbs?.push({ name: menu.name })
        breadCrumbs?.push({ name: findMenu.name })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

//查找权限
export function mapMenuInfoToPermisssion(userMenuInfo: any) {
  const permission: string[] = []

  function _recurseGeTPermission(menus: any[]) {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGeTPermission(menu.children ?? [])
      } else if (menu.type === 3) {
        permission.push(menu.permission)
      }
    }
  }
  _recurseGeTPermission(userMenuInfo)
  return permission
}

export { fistMenu }
