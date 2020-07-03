import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api'; // 系统及api
import axios from 'axios'
import VueAxios from 'vue-axios'
import './plugins/components/element.js'
import pulginComponent from './plugins/components/index';
import filters from './plugins/filters/index';
import './assets/scss/reset.scss'
import './assets/scss/theme_reset.scss'
import './assets/fonts/iconfont.css'
// 导入组件 及 组件样式
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css';
import './assets/scss/element_variables.scss'

Vue.config.productionTip = false
// Vue.prototype.$http = http;

Vue.use(VueAxios, axios);
Vue.use(mavonEditor);
Vue.use(pulginComponent); // 使用自定义路由
Vue.use(filters); // 使用自定义过滤器
Vue.use(api); // 注册api
Vue.use(router); // 使用路由


new Vue({
  router: router.router.instance,
  store,
  render: h => h(App)
}).$mount('#app')
