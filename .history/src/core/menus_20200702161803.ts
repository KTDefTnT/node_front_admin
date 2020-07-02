const Menus: Array<object> = [
  {
    desc: '客户管理',
    children: [
      {
        desc: '首页',
        router: '/admin/home',
        name: 'admin.home'
      }, {
        desc: '用户管理',
        router: '/admin/about',
        name: 'admin.about'
      }
    ]
  }
];

export {
  Menus
};
