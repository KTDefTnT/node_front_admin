const Menus: Array<object> = [
  {
    desc: '基础管理',
    children: [
      {
        desc: '首页',
        router: 'admin/home',
        name: 'admin.home'
      }, {
        desc: 'about',
        router: 'admin/about',
        name: 'admin.about'
      }
    ]
  }
];

export {
  Menus
};
