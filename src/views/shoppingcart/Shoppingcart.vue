<template>
  <div class="shoppingcart">
    <!-- 顶部倒导航栏位置。 -->
    <Navbar class="Navbar">
      <div slot="center">购物车--{{ $store.state.carList.length }}</div>
    </Navbar>

    <BerterScroll class="BerterScroll" ref="BerterScroll">
      <div
        v-for="(item, index) in $store.state.carList"
        :key="item.iid"
        class="item"
        :class="{ pinkborder: item.checked }"
        @click="clickItemGood(index)"
      >
        <div class="image">
          <div>
            <img :src="item.img" />
          </div>
        </div>
        <div class="text">
          <p>{{ item.title }}</p>
          <div class="textbottom">
            <div class="price">单价{{ item.price }}</div>
            <div class="num">
              <button @click.stop="Reduce(index)">-</button>
              <span>{{ item.quantity }}</span>
              <button @click.stop="Increase(index)">+</button>
            </div>
          </div>
        </div>
      </div>
    </BerterScroll>
    <div class="checkedGoodsNum">
      <div class="Check" @click="allChecked">
        <CheckButton
          class="CheckButton"
          :isChecked="
            this.$store.state.carList.filter(item => item.checked).length ===
              this.$store.state.carList.length &&
              this.$store.state.carList.length !== 0
          "
        ></CheckButton>
        <span>全选</span>
      </div>
      <span class="Totalprice">
        总价：¥
        {{
          $store.state.carList
            .filter(item => item.checked)
            .reduce(
              (preValue, item) =>
                preValue + item.quantity * parseInt(item.price.substring(1)),
              0
            )
        }}
      </span>
      <span style="float:right;" class="numgood">
        <!-- 只能将表达式直接放在模板中才能进行实时刷新响应式。 -->
        结算{{ $store.state.carList.filter(item => item.checked).length }}
        <!-- 结算(计算属性){{ checkedGoodsNum }} -->
      </span>
    </div>
  </div>
</template>

<script>
import BerterScroll from "components/common/better-scroll/BerterScroll.vue";
import Navbar from "components/common/navbar/Navbar.vue"; //引入顶部导航栏。。
import CheckButton from "components/context/checkButton/CheckButton.vue"; //单选框

import { mapGetters } from "vuex";

export default {
  name: "Shoppingcart",
  components: {
    BerterScroll,
    Navbar,
    CheckButton
  },
  computed: {
    ...mapGetters(["checkedGoodsNum", "TotalPrice"])
    //vuex数据响应式真**是个笑话。
    // isChecked() {
    //   return (
    //     this.$store.state.carList.filter(item => item.checked).length ===
    //     this.$store.state.carList.length
    //   );
    // }
    // checkedGoodsNum() {
    //   let checkedGoods = this.$store.state.carList.filter(item => item.checked);
    //   return checkedGoods.length;
    // },
    // TotalPrice() {
    //   return this.$store.state.carList
    //     .filter(item => item.checked)
    //     .reduce(
    //       (preValue, item) =>
    //         preValue + item.quantity * parseInt(item.price.substring(1)),
    //       0
    //     );
    // }
  },
  methods: {
    allChecked() {
      // console.log("全部选中商品");
      if (this.$store.state.carList.length !== 0) {
        if (
          this.$store.state.carList.filter(item => item.checked).length ===
          this.$store.state.carList.length
        ) {
          this.$store.commit("noAllCheckedGood");
        } else {
          this.$store.commit("allCheckedGood"); //修改商品是否被选中。
        }
      }
      this.$forceUpdate();
    },
    clickItemGood(index) {
      this.$store.commit("isCheckedGood", index); //修改商品是否被选中。
      this.$forceUpdate();
    },
    Reduce(index) {
      // console.log("减少商品数量。");
      this.$store.commit("reduceGoods", index);
      this.$forceUpdate();
    },
    Increase(index) {
      // console.log('增加商品数量。');
      this.$store.commit("increaseGoods", index);
      this.$forceUpdate();
    }
  },
  mounted() {
    this.$refs.BerterScroll.refresh();
  },
  activated() {
    console.log("Shoppingcart活跃,刷新Better score高度");

    this.$refs.BerterScroll.refresh();

    this.$bus.$off("forceUpdateCar"); //每次绑定前面解绑该事件。
    this.$bus.$on("forceUpdateCar", () => {
      console.log("在详情页,刷新购物车页面。");

      this.$forceUpdate();
    });
  },
  created() {
    console.log("Shoppingcart创建");
  },
  destroyed() {
    console.log("Shoppingcart销毁");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Navbar {
  font-size: 20px;
  color: #fc7c94;
}
.shoppingcart {
  height: 100vh;
}
.BerterScroll {
  height: calc(100% - 123px);
  overflow: hidden;
}
.item {
  display: flex;
  height: 120px;
  margin: 20px;
  box-shadow: 0px 1px 17px -17px #000;
  border-radius: 10px;
  border: solid 1px #ffffff;
}
.pinkborder {
  border: solid 1px #ff050591;
}
.image {
  flex: 1;
}
.image > div {
  overflow: hidden;
  height: 100%;
  border-radius: 10px 0 0 10px;
}
.image img {
  width: 100%;
}
.text {
  flex: 3;
  padding: 10px;
}

.text > p {
  text-align: left;
}
.textbottom {
  height: 36px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.price {
  flex: 3;
}
.num {
  flex: 2;
}
.text button,
.text span {
  padding: 0 10px;
  border: none;
  outline: none;
}
.checkedGoodsNum {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  height: 30px;
  line-height: 30px;
  box-shadow: 0px 1px 17px -17px #000;
}
.CheckButton {
  display: inline-block;
}
.Check {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.check-button {
  flex: 1;
  display: flex;
  justify-content: center;
  text-align: center;
  line-height: 20px;
  width: 20px;
  height: 20px;
  line-height: 20px;
}
.Check span {
  text-align: left;
  flex: 1;
}
.Totalprice {
  flex: 1;
}
.numgood {
  flex: 1;
  text-align: right;
}
</style>
