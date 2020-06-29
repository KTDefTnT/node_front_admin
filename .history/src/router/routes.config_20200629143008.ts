import { RouteConfig } from 'vue-router'
const routes: Array<RouteConfig> = [{
  path: '/',
  name: 'admin',
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
}];

export default routes;