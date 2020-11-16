import axios from 'axios';
import store from '@/store';
import { Message } from 'element-ui';
import router from '@/router';
import qs from 'qs';

type requestsQueueType = () => void;

const instance = axios.create({});

function redirectLogin (): void {
  router.push({ name: 'login', query: { redirect: router.currentRoute.fullPath } });
}

function refreshToken () {
  return axios.create()({
    method: 'post',
    url: '/front/user/refresh_token',
    data: qs.stringify({ refreshtoken: store.state.user.refresh_token })
  });
}

let isRefreshing = false;
let requestsQueue: requestsQueueType[] = [];

instance.interceptors.request.use(config => {
  console.log(config);
  if (store.state.user && config.url !== '/front/user/login') {
    config = Object.assign(config, {
      headers: {
        Authorization: store.state.user.access_token
      }
    });
  }
  return config;
}, error => {
  return Promise.reject(error);
});

instance.interceptors.response.use(res => {
  return res;
}, async (error) => {
  if (error.response) {
    //  请求的http状态码非 2xx
    const { status } = error.response;
    if (status === 400) {
      Message.error('请求参数错误');
    }
    if (status === 401) {
      if (!store.state.user) {
        redirectLogin();
        return Promise.reject(error);
      }

      if (!isRefreshing) {
        isRefreshing = true;
        return refreshToken().then(res => {
          if (!res.data.success) {
            throw new Error('刷新 token 失败');
          }
          store.commit('setUser', JSON.parse(res.data.content));
          requestsQueue.forEach((cb: () => void) => cb());
          requestsQueue = [];
          return instance(error.config);
        }).catch(err => {
          store.commit('setUser', null);
          redirectLogin();
          return Promise.reject(err);
        }).finally(() => {
          isRefreshing = false;
        });
      }
      return new Promise(resolve => {
        requestsQueue.push(() => {
          resolve(instance(error.config));
        });
      });
    }
    if (status === 403) {
      Message.error('没有权限 请联系管理员');
    }
    if (status === 404) {
      Message.error('请求资源不存在');
    }
  } else if (error.request) {
    // 请求发出去没收到响应，比如请求超时
    Message.error('请求超时');
  } else {
    // 在设置请求时发生了一些错误
    Message.error('请求失败');
  }
  return Promise.reject(error);
});

export default instance;
