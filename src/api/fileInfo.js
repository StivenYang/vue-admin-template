import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/devTools/list',
    method: 'post',
    params
  })
}
