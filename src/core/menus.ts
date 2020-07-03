const Menus: Array<object> = [
  {
    desc: '客户管理',
    children: [
      {
        desc: '首页',
        router: '/home',
        name: 'admin.home'
      }, {
        desc: '用户管理',
        router: '/userList',
        name: 'admin.userList'
      }
    ]
  }, {
    desc: '文章管理',
    children: [
      {
        desc: '文章',
        router: '/articleList',
        name: 'admin.articleList'
      }
    ]
  }
];

export {
  Menus
};
