import Table from './table.vue';

Table.install = function (Vue: any) {
  Vue.component(Table.name, Table);
};

export default Table;
