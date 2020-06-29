const Menus: Array<object> = [
  {
    desc: '基础管理',
    children: [
      {
        desc: '首页',
        router: '/home',
        name: 'admin.home'
      }, {
        desc: 'about',
        router: '/about',
        name: 'admin.about'
      }
    ]
  }, {
    desc: '登录界面',
    router: '/login',
    name: 'login'
  }
];

export {
  Menus
};
