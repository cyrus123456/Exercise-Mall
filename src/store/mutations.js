import Vue from 'vue'

export default {
  noAllCheckedGood(state) {
    console.log("取消选中全部商品")
    for (let item of state.carList) {
      item.checked = false
    }
    console.log(state.carList)
  },
  allCheckedGood(state) {
    console.log("选中全部商品")
    for (let item of state.carList) {
      item.checked = true
    }
    console.log(state.carList)
  },
  AddGoodsTocart(state, payload) {
    console.log("购物车没有相同商品添加商品。")
    // payload.quantity = 1
    payload.checked = true;
    Vue.set(state.carList, state.carList.length, payload);
    // state.carList.push(payload)
    console.log(state.carList)
  },
  ChangeGoodsQuantity(state, theSameProduct) {
    console.log("购物车有相同商品更改商品数量。")
    theSameProduct.quantity += 1
    console.log(state.carList)
  },
  increaseGoods(state, payload) {
    // console.log(payload)
    console.log('增加商品数量。');
    // state.carList[payload].quantity += 1
    Vue.set(state.carList[payload], "quantity", state.carList[payload].quantity + 1);
    console.log(state.carList)
  },
  reduceGoods(state, payload) {
    // console.log(payload)
    console.log("减少商品数量。");
    state.carList[payload].quantity -= 1
    console.log(state.carList)
  },
  isCheckedGood(state, payload) {
    console.log("商品是否选中状态？");
    console.log(state.carList[payload].checked);
    if (state.carList[payload].checked) {
      state.carList[payload].checked = false
    } else {
      state.carList[payload].checked = true
    }
    console.log(state.carList)
  }
}