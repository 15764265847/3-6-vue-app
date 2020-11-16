import request from '@/utils/request.ts';

interface Menu {
  name: string;
  href: string;
  parentId: number;
  description: string;
  shown: boolean;
  icon: string;
  orderNum: string;
};

export const addOrUpdateMenu = (data: Menu) => {
  return request({
    method: 'post',
    url: '/boss/menu/saveOrUpdate',
    data
  });
};

export const getParentMenu = (id = -1) => {
  return request({
    method: 'get',
    url: '/boss/menu/getEditMenuInfo',
    params: { id }
  });
};

export const getAllMenu = () => {
  return request({
    method: 'get',
    url: '/boss/menu/getAll'
  });
};

export const deleteMenu = (id: number) => {
  return request({
    method: 'delete',
    url: `/boss/menu/${id}`
  });
};

export const getMenuNodeList = () => {
  return request({
    method: 'GET',
    url: '/boss/menu/getMenuNodeList'
  });
};

export const allocateRoleMenus = (data: any) => {
  return request({
    method: 'POST',
    url: '/boss/menu/allocateRoleMenus',
    data
  });
};

export const getRoleMenus = (roleId: string | number) => {
  return request({
    method: 'GET',
    url: '/boss/menu/getRoleMenus',
    params: { // axios 会把 params 转换为 key=value&key=value 的数据格式放到 url 后面(以?分割)
      roleId
    }
  });
};
