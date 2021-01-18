<template>
  <div class="bottomtoolbar">
    <div class="bottomtoolbarLeft">
      <div>
        <img src="" alt="" />
        <span>客服</span>
      </div>
      <div>
        <img src="" alt="" />
        <span>店铺</span>
      </div>
      <div>
        <img src="" alt="" />
        <span>收藏</span>
      </div>
    </div>
    <div class="bottomtoolbarRight">
      <div @click="click_shoppingCart">加入购物车</div>
      <div @click="click_buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BottomToolBar",
  methods: {
    click_shoppingCart() {
      // console.log("购物车按钮被点击。");
      this.$emit("click_shoppingCart");
    },
    click_buy() {
      // 跳转到购物车。
      console.log("跳转到购物车");

      this.$router.push("/shoppingcart");
    }
  },
  created() {
    console.log("BottomToolBar组件创建");
  },
  destroyed() {
    console.log("BottomToolBar组件销毁");
  }
};
</script>

<style scoped>
.bottomtoolbar {
  display: flex;
  position: relative;
  z-index: 9;
  bottom: 0;
  /* text-align: center; */
  height: 50px;
  line-height: 50px;
  background-color: #ffffff;
  box-shadow: 0px -13px 23px -24px #000;
}

.bottomtoolbarLeft,
.bottomtoolbarRight {
  flex: 1;
  display: flex;
}

.bottomtoolbarLeft > div,
.bottomtoolbarRight > div {
  justify-content: center;
  flex: 1;
  display: flex;
}

.bottomtoolbarRight :first-child {
  flex: 4;
}

.bottomtoolbarRight :last-child {
  flex: 3;
}
</style>
