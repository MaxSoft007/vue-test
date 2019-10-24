<template>
  <div id="app" style="text-align: center" >
    <router-link to='/'>返回首页</router-link>
    <button @click='hreftwo' >测试页面</button>
    <button @click='basetest' >基础页面</button>
    <button @click='basetest1' >基础页面1</button>
    <button @click='basetest2' >基础页面2</button>
    <button @click='basetest3' >基础页面3</button>
    <button @click='basetest4' >Slots-Test</button>
    <button @click='componentTest' >Component-Test</button>
    <button @click='componentInput' >Component-Input</button>

    <router-view></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    hreftwo () {
      this.$router.push({path: '/test'})
    },
    basetest () {
      this.$router.push({path: '/base-test'})
    },
    basetest1 () {
      this.$router.push({path: '/base-test-a'})
    },
    basetest2 () {
      this.$router.push({path: '/base-test-b'})
    },
    basetest3 () {
      this.$router.push({path: '/base-test-c'})
    },
    basetest4 () {
      this.$router.push({path: '/slots-test'})
    },
    componentTest () {
      this.$router.push({path: '/component-test'})
    },
    componentInput () {
      this.$router.push({path: '/component-input'})
    }
  }
}
</script>
<style lang="less">
  @import '~vux/src/styles/close.less';
  @import '~vux/src/styles/1px.less';
</style>
