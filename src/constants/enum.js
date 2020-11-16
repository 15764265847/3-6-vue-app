export const sidebarConfig = [
  {
    routeName: '权限管理',
    path: '1',
    classI: 'el-icon-location',
    children: [
      {
        index: '1-1',
        name: 'role',
        path: '/role',
        routeName: '角色管理'
      },
      {
        index: '1-2',
        name: 'menu',
        path: '/menubar',
        routeName: '菜单管理'
      },
      {
        index: '1-3',
        name: 'resource',
        path: '/resource',
        routeName: '资源管理'
      }
    ]
  },
  {
    classI: 'el-icon-menu',
    routeName: '课程管理',
    name: 'course',
    path: '/course'
  },
  {
    classI: 'el-icon-document',
    routeName: '用户管理',
    name: 'user',
    path: '/user'
  },
  {
    path: '4',
    classI: 'el-icon-setting',
    routeName: '广告管理',
    children: [
      {
        index: '4-1',
        routeName: '广告列表',
        name: 'advert',
        path: '/advert'
      },
      {
        index: '4-2',
        routeName: '广告位列表',
        name: 'advertSpace',
        path: '/advertSpace'
      }
    ]
  }
];
