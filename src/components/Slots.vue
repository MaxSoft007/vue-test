<template>
  <div>
    <p>Slots-Test</p>
    <maxsoft-slot>
      <h2 slot="header">标题</h2>
      <p>正文内容</p>
      <p>其他内容</p>
      <div slot="footer">底部信息</div>
    </maxsoft-slot>
  </div>
</template>

<script>
import Vue from 'vue'
Vue.component('maxsoft-slot', {
  template: '<div class=\'container\'>' +
  '<div class=\'header\'><slot name=\'header\'></slot></div>' +
  '<div class=\'main\'><slot></slot></div>' +
  '<div class=\'footer\'><slot name=\'footer\'></slot></div>' +
  '</div>',
  mounted: function () {
    var header = this.$slots.header
    var main = this.$slots.default
    var footer = this.$slots.footer
    console.log(header)
    console.log(main)
    console.log(footer)
    console.log(footer[0].elm.innerHTML)
  }
})
export default {
  name: 'slots-test'
}
</script>

<style scoped>

</style>
