import LocalCache from '@/utlis/Cache';
import { createRouter, createWebHashHistory } from 'vue-router';
//路由类型
import type { RouteRecordRaw } from 'vue-router';

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
  }, {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/views/404/404.vue')
  }
];

const router = createRouter({
  routes,
  history: createWebHashHistory()
});
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = LocalCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }
})
export default router;
