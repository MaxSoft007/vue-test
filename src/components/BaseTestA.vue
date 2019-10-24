<template>
  <div>
    <h1>测试数据</h1>

    <p>总数：{{ total }}</p>
    <maxsoft v-model="total"></maxsoft>
    <button @click="handleReduce">-1</button>
  </div>
</template>

<script>
import Vue from 'vue'
Vue.component('maxsoft', {
  template: '<button @click=\'handleClick\'>+1</button>',
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    handleClick: function () {
      this.counter++
      this.$emit('input', this.counter)
    }
  }
})
export default {
  name: 'BaseTestA',
  data: function () {
    return {
      total: 0
    }
  },
  methods: {
    handleReduce: function () {
      this.total--
    }
  }
}
</script>
