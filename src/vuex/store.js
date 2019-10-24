import Vue from 'vue'
import Vuex from 'vuex'
import {getInfo} from '../http/api'

Vue.use(Vuex)

const state = {
  count: 0,
  personInfo: {}
}

const mutations = {
  add (state) {
    state.count++
  },
  reduce (state) {
    state.count--
  },
  setPersonInfo (state, data) {
    state.personInfo = data
  }
}

const actions = {
  async getPersonInfoData ({commit}, params) { // 异步获取人员信息并存到store里
    let res = await getInfo(params)
    commit('setPersonInfo', res.data)
  }
}

const getters = {
  getPersonData: state => { // 获取人员信息
    return state.personInfo
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
