<template>
  <div @click.shift.83="test" style="height: 300px;background-color: dodgerblue;">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
// import {getInfo, sso} from '../http/api'

export default {
  name: 'HelloWorld',
  data () {
    return {
      title: 'TimeAxis'
    }
  },
  mounted () {
    // this.result = getInfo({data: 'maxsoft'})
    // this.result_1 = sso({data: 'maxsoft'})
  },
  methods: {
    test: function () {
      alert('A')
    },
    hello: function () {
      alert('BBBBB')
    }
  }
}
</script>
