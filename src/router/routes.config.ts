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
      path: '/userList',
      name: 'admin.userList',
      component: () => import('../views/UserList.vue')
    },
    {
      path: '/articleList',
      name: 'admin.articleList',
      component: () => import('../views/ArticleList.vue')
    }
  ]
}, {
  path: '/login',
  name: 'login',
  component: () => import('../views/Login.vue')
}];

export default routes;