<template>
  <div>

    <maxsoft>
      <p>Name:MaxSoft</p>
      <p>Sex:Man</p>
    </maxsoft>

    <maxsoft-001>
      <p>I'm Content!</p>
    </maxsoft-001>

    <maxsoft-002>
      <template slot-scope="props">
        <p>来自父级组件的内容！</p>
        <p>{{ props.msg }}</p>
      </template>
    </maxsoft-002>

    <maxsoft-list :books="books">
      <template slot="book" slot-scope="props">
        <li>{{ props.bookName}}</li>
      </template>
    </maxsoft-list>
  </div>
</template>

<script>
import Vue from 'vue'
Vue.component('maxsoft', {
  template: '<div><slot><p>Hello,MaxSoft!</p></slot></div>'
})
Vue.component('maxsoft-001', {
  template: '<div><p>Hello,MaxSoft-001!</p></div>'
})
Vue.component('maxsoft-002', {
  template: '<div><slot msg=\'来自子组件的内容\'></slot></div>'
})

Vue.component('maxsoft-list', {
  props: {
    books: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  template: '<ul><slot name=\'book\' v-for=\'book in books\' :book-name=\'book.name\'></slot></ul>'
})
export default {
  name: 'base-test-c',
  data: function () {
    return {

      books: [
        {name: '《Vue.js 实战》'},
        {name: '《JavaScript 语言精粹》'},
        {name: '《JavaScript 高级程序设计详解》'}
      ]
    }
  }
}
</script>

<style scoped>

</style>
