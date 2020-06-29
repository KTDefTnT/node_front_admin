import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/scss/reset.scss'
import './assets/scss/theme_reset.scss'

Vue.config.productionTip = false
Vue.use(router); // 使用路由

new Vue({
  router: router.router.instance,
  store,
  render: h => h(App)
}).$mount('#app')
