<template>
  <div>
    <h1>测试页面Test-B</h1>

    <p>{{ message }}</p>

    <maxsoft></maxsoft>
  </div>
</template>

<script>
import Vue from 'vue'
var bus = new Vue() // 申明一个事件分发中心
Vue.component('maxsoft', {
  template: '<button @click=\'handleDispatch\'>派发事件</button>',
  methods: {
    handleDispatch: function () {
      // this.$dispatch('on-send-message', '来自组件的事件消息！') // vue2.x 已经弃用了 $dispatch 和 $broadcast
      bus.$emit('on-send-message', '来自组件的事件消息！')
    }
  }
})
export default {
  name: 'base-test-b',
  data: function () {
    return {
      message: 'Hello World!'
    }
  },
  mounted: function () {
    var _this = this
    bus.$on('on-send-message', function (msg) {
      _this.message = msg
    })
  },
  events: {
    'on-send-message': function (msg) {
      this.message = msg
    }
  }
}
</script>

<style scoped>

</style>
