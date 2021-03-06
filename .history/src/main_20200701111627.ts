import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api'; // 系统及api
import servive from './core/http'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './plugins/element.js'
import './assets/scss/reset.scss'
import './assets/scss/theme_reset.scss'
import './assets/fonts/iconfont.css'
// 导入组件 及 组件样式
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css';

Vue.config.productionTip = false
Vue.axios = servive;
// Vue.prototype.$http = http;

Vue.use(VueAxios, axios);
Vue.use(mavonEditor);
Vue.use(api); // 注册api
Vue.use(router); // 使用路由


new Vue({
  router: router.router.instance,
  store,
  render: h => h(App)
}).$mount('#app')
