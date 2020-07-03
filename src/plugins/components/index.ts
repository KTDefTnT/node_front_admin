import Table from './table';

const install = function (Vue: any) {
  /* istanbul ignore if */
  if (install.installed) return;
  
  console.log('Table', Table.name);
  Vue.component(Table.name, Table);
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Table
}