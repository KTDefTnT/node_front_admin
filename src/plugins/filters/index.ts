import date from './date.filter';

const install = function (Vue: any) {
  /* istanbul ignore if */
  if (install.installed) return;

  Vue.filter('date', date);
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  date
}