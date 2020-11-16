import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Layout from '@/components/layout/index.vue';
import store from '@/store';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    name: 'login',
    path: '/login',
    component: () => import(/* webpackChunkName: 'login' */ '@/views/login/index.vue')
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        redirect: '/menubar'
        // component: () => import(/* webpackChunkName: 'home' */ '@/views/home/index.vue')
      },
      {
        name: 'advert',
        path: '/advert',
        component: () => import(/* webpackChunkName: 'advert' */ '@/views/advert/index.vue')
      },
      {
        name: 'advertSpace',
        path: '/advertSpace',
        component: () => import(/* webpackChunkName: 'advertSpace' */ '@/views/advertSpace/index.vue')
      },
      {
        name: 'menu',
        path: '/menubar',
        component: () => import(/* webpackChunkName: 'menu' */ '@/views/menu/index.vue')
      },
      {
        name: 'course',
        path: '/course',
        component: () => import(/* webpackChunkName: 'course' */ '@/views/course/index.vue')
      },
      {
        name: 'resource',
        path: '/resource',
        component: () => import(/* webpackChunkName: 'resource' */ '@/views/resource/index.vue')
      },
      {
        name: 'role',
        path: '/role',
        component: () => import(/* webpackChunkName: 'role' */ '@/views/role/index.vue')
      },
      {
        name: 'user',
        path: '/user',
        component: () => import(/* webpackChunkName: 'user' */ '@/views/user/index.vue')
      },
      {
        name: 'addMenu',
        path: '/addMenu',
        component: () => import(/* webpackChunkName: 'user' */ '@/views/addMenu/index.vue')
      },
      {
        name: '404',
        path: '*',
        component: () => import(/* webpackChunkName: '404' */ '@/views/errorPage/404.vue')
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    if (!store.state.user) {
      next({
        name: 'login',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
