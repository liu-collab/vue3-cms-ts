import { RouteRecordRaw } from 'vue-router'

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
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(userInfoMenu)

  return routes
}
