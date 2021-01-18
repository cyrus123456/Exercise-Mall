export default {
  goodsTocart(context, payload) {

    let theSameProduct = context.state.carList.find(item => item.iid === payload.iid)
    // console.log(theSameProduct)
    //在vue组件中，dispatch，then回调。
    return new Promise((resolve, reject) => {
      if (theSameProduct) {
        context.commit('ChangeGoodsQuantity', theSameProduct)
        resolve("此商品购物车+1")
      } else {
        context.commit('AddGoodsTocart', payload)
        resolve("成功添加到购物车")
      }
    })

    // console.log(context.state.carList)
  }
}
