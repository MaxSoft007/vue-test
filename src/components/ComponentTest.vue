<template>
    <div>
      <h1>ComponentTest</h1>
      <maxsoft :count='1'>AAAAAAAAAA</maxsoft>

      <maxsoft-com inline-template>
        <div>
          <h2>在父级组件中定义子组件的模板</h2>
          <p> {{ message }} </p>
          <p> {{ msg }} </p>

        </div>
      </maxsoft-com>
      <p> {{ text }} </p>
    </div>
</template>

<script>
import Vue from 'vue'
Vue.component('maxsoft', {
  template: '<div class=\'child\'><maxsoft :count=\'count+1\' v-if=\'count < 3\'></maxsoft></div>',
  name: 'maxsoft',
  props: {
    count: {
      type: Number,
      default: 1
    }
  }
})
Vue.component('maxsoft-com', {
  data: function () {
    return {
      msg: '在子组件中申明的数据'
    }
  }
})
export default {
  name: 'component-test',
  data: function () {
    return {
      message: '在父级组件中申明的数据',
      text: 'Hello MaxSoft-Com'
    }
  }
}
</script>

<style scoped>
.child{
  width: 200px;
  height: 200px;
  background-color: #E8E8E8;
}
</style>
