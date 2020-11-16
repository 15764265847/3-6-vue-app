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
