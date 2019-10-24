'use strict'
import axios from 'axios'
import qs from 'qs'
import app from '../main'

//* **** 开始创建axios实例 ***** */
const httpService = axios.create({
  // baseURL: process.env.BASE_URL,
  timeout: 5000 // 超时时间
})
//* **** Axios实例创建结束 ***** */

//* **** request拦截器==>对请求参数做处理 ***** */
httpService.interceptors.request.use(config => {
  app.$vux.loading.show({
    text: '数据加载中...'
  })
  config.method === 'post' ? config.data = qs.stringify({...config.data}) : config.params = qs.stringify({...config.params})
  config.headers['Content-Type'] = 'application/json'
  config.headers['token'] = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
  config.headers['appCode'] = 'cccccccccccccccccccccccccccc'
  return config
}, error => {
  app.$vux.loading.hide()
  app.$vux.toast.show({
    type: 'warn',
    text: error
  })
  Promise.reject(error)
})

httpService.interceptors.response.use(response => {
  console.log('[[[[[------------------>response--->')
  app.$vux.loading.hide()
  if (response.data.result) {
    return response.data
  } else {
    app.$vux.toast.show({
      type: 'warn',
      text: response.data.msg
    })
  }
}, error => {
  app.$vux.loading.hide()
  console.log('error')
  console.log(error)
  console.log(JSON.stringify(error))
  let text = null
  try {
    text = JSON.parse(JSON.stringify(error)).response.status === 404 ? '404' : '网络异常，请重试'
  } catch (e) {
    text = error
  }
  app.$vux.toast.show({
    type: 'warn',
    text: text
  })
  return Promise.reject(error)
})
export default httpService
