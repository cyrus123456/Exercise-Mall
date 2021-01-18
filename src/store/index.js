import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carList: []
  },
  getters: {
    checkedGoodsNum(state) {
      let checkedGoods = state.carList.filter(item => item.checked);
      return checkedGoods.length;
    },
    TotalPrice(state) {
      return state.carList
        .filter(item => item.checked)
        .reduce(
          (preValue, item) =>
            preValue + item.quantity * parseInt(item.price.substring(1)),
          0
        )
    }
  },
  mutations,
  actions
})
