<template>
  <div>
    <h1>自定义事件</h1>
    <p> 总数：{{ total }}</p>
    <maxsoft @increase="handleGetTotal" @reduce="handleGetTotal"></maxsoft>

    <hr style="height:1px;border:none;border-top:1px #185598 dashed;"/>
  </div>
</template>

<script>
import Vue from 'vue'
Vue.component('maxsoft', {
  template: '<div><button @click="handleIncrease">+1</button><button @click="handleReduce">-1</button>',
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    handleIncrease: function () {
      this.counter++
      this.$emit('increase', this.counter)
    },
    handleReduce: function () {
      this.counter--
      this.$emit('reduce', this.counter)
    }
  }
})
export default {
  name: 'base-test',
  data () {
    return {
      total: 0
    }
  },
  methods: {
    handleGetTotal: function (total) {
      this.total = total
    }
  }
}
</script>
