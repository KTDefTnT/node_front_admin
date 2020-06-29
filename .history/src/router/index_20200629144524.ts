// import Vue from 'vue'
import routes from './routes.config'
import VueRouter from 'vue-router'

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

  router.instance.beforeEach((to, from, next) => {
    console.log('to', to);
    console.log('from', from);
    if (to.meta.auth) {
      console.log('当前还没有鉴权功能咯！');
    }
    // 判断是否存在需要授权的路由
    // if (to.matched) {
    //   next({name: 'admin.about'});
    // } else {
    //   next({name: 'admin.home'});
    // }
    next({name: 'admin.home'});
    return;
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
