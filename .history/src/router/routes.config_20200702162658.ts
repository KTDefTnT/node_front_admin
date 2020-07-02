import { RouteConfig } from 'vue-router'
const routes: Array<RouteConfig> = [{
  path: '/',
  name: '',
  redirect () {
    return '/admin/home'
  }
},{
  path: '/admin',
  name: 'admin',
  meta: { requiresAuth: true },
  component: () => import('../main.vue'),
  redirect: { name: "admin.home" },
  children: [
    {
      path: '/home',
      name: 'admin.home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/about',
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