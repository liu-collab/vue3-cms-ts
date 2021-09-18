import LocalCache from '@/utlis/Cache';
import { createRouter, createWebHistory } from 'vue-router';
//路由类型
import type { RouteRecordRaw } from 'vue-router';

import { fistMenu } from '@/utlis/map-menuinfo';
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/Login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/Main.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/views/404/404.vue')
  }
];

const router = createRouter({
  routes,
  history: createWebHistory()
});
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = LocalCache.getCache('token');
    if (!token) {
      return '/login';
    }
  }
  if (to.path == '/main') {
    return fistMenu.url;
  }
});
export default router;
