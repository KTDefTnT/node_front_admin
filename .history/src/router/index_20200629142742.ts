import Vue from 'vue'
import routes from './routes.config'
import VueRouter from 'vue-router'

var router: any;
function initRouter (Vue) {
  Vue.use(VueRouter);
  // 创建 router 实例
  router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
  });
}

const install = function (Vue: any) {
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
