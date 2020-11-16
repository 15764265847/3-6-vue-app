import request from '@/utils/request.ts';
import qs from 'qs';

interface User {
  phone: string;
  password: string;
};

export const login = (data: User) => {
  return request({
    method: 'post',
    url: '/front/user/login',
    // headers: {
    //   'content-type': 'application/x-www-form-urlencoded'
    // },
    // 当我们使用了 qs 模块对数据进行转换的时候，数据会转换成 key=value&key=value 的格式
    // 即 form 表单默认使用的提交格式，其 conteny-type 为 application/x-www-form-urlencoded
    // axios 会自动帮我们转换
    // data直接传入对象的话，axios 会自动将 conteny-type 设置为 application/json;charset=utf-8
    // 当传入的是一个 FormData 对象时，axios 会将 content-type 设置为 multipart/form-data
    data: qs.stringify(data)
  });
};

export const getUserInfo = () => {
  return request({
    method: 'get',
    url: '/front/user/getInfo'
  });
};

export const loginOut = () => {
  return request({
    method: 'get',
    url: '/front/user/getInfo'
  });
};
