import service from './request'
export const getInfo = data => {
  return service({
    url: '/api/statistics/position/shipdata',
    method: 'post',
    data
  })
}
export const sso = data => {
  return service({
    url: '/sso/login',
    method: 'post',
    data
  })
}
