// import Vue from 'vue'
import routes from './routes.config'
import VueRouter, { Route } from 'vue-router'

const isLogin = false;
const router: any = {
  instance: ''
};

function initRouter (Vue: any) {
  Vue.use(VueRouter);
  // 创建 router 实例
  router.instance = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
  });

  router.instance.beforeEach((to: Route, from: Route, next: any) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
      if (!isLogin) {
        console.log('to', to);
        if (to.name === 'login') {
          next({ name: 'login' });
        } else {
          next();
        }
      } else {
        console.log('当前还没有鉴权功能咯！');
        next()
      }
    } else {
      next() // 确保一定要调用 next()
    }
  });
}

const install = function (Vue: any): any {
  /* istanbul ignore if */
  if (install.installed) return;
  initRouter(Vue);// 执行初始化路由
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  router
}
