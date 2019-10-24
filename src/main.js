// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'

// 全局注册axios
import axios from 'axios'
import {TransferDom, Cell, Toast, Alert, Confirm, Group, CellBox, Actionsheet, ToastPlugin, LoadingPlugin} from 'vux'
Vue.prototype.axios = axios
// 全局注册vux组件
Vue.directive('transfer-dom', TransferDom)
Vue.component('cell', Cell)
Vue.component('toast', Toast)
Vue.component('alert', Alert)
Vue.component('confirm', Confirm)
Vue.component('group', Group)
Vue.component('cell-box', CellBox)
Vue.component('actionsheet', Actionsheet)
Vue.prototype.token = null
/* 全局处理错误提示、数据加载 */
Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)
/* eslint-disable no-new */
Vue.config.productionTip = false
// 这里可以进行示是否登录校验操作
if (Vue.token == null) {
  console.log('[[[[[------>请登录===')
}
const app = new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
export default app
