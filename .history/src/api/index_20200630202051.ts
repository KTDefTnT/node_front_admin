import user from './user'
// import Vue from 'vue';

let $api = {
  core: {}
};

const api = {
  user
};

const install = (Vue: any) => {
  if (install.installed) {
    return;
  }
  $api['core'] = api; // 配置核心模块的api

  Object.defineProperties(Vue.prototype, {
    $api: {
      get () {
        return api;
      }
    }
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default {
  install
};
