import {getInfo, sso} from '../../http/api'
export default {
  name: 'test',
  data () {
    return {
      trim_max: '',
      number: 0,
      like: '',
      message: '',
      test_message: '',
      list: [{
        id: 1,
        name: 'MaxSoft',
        price: 12.00,
        count: 1
      },
        {
          id: 2,
          name: 'MaxSoft-001',
          price: 14.00,
          count: 1
        },
        {
          id: 3,
          name: 'MaxSoft-002',
          price: 15.00,
          count: 1
        }]
    }
  },
  computed: {
    totalPrice: function () {
      getInfo({name: 'MaxSoft'})
      var total = 0
      for (var i = 0; i < this.list.length; i++) {
        var item = this.list[i]
        total += item.price * item.count
      }
      return total.toString().replace(/\B(?=(\d{3})+$)/g, ',')
    }
  },
  methods: {
    handleReduce: function (index) {
      sso({data: '111111'})
      if (this.list[index].count === 1) return
      this.list[index].count--
    },
    handleAdd: function (index) {
      this.list[index].count++
    },
    handleRemove: function (index) {
      this.list.splice(index, 1)
    },
    handleInput: function (e) {
      this.message = e.target.value
    }
  }
}
