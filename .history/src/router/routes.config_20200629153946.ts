import { RouteConfig } from 'vue-router'
const routes: Array<RouteConfig> = [{
  path: '/',
  name: 'admin',
  meta: { requiresAuth: false },
  component: () => import('../main.vue'),
  children: [
    {
      path: 'home',
      name: 'admin.home',
      component: () => import('../views/Home.vue')
    },
    {
      path: 'about',
      name: 'admin.about',
      component: () => import('../views/About.vue')
    }
  ]
}, {
  path: '/login',
  name: 'login',
  component: () => import('../views/Login.vue')
}];

export default routes;