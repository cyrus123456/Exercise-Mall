<template>
  <div class="goodsdetailnavbar">
    <Navbar>
      <div slot="left" @click="back" class="leftslot">
        <img src="~assets/img/common/back.svg" />
      </div>
      <div slot="center" class="centerslot">
        <span
          v-for="(item, index) in title"
          :key="index"
          class="span"
          :class="{ alive: defaultnum === index }"
          @click.stop="clickspan(index)"
          >{{ item }}</span
        >
      </div>
    </Navbar>
  </div>
</template>

<script>
import Navbar from "components/common/navbar/Navbar.vue";
export default {
  name: "GoodsDetailNavbar",
  data() {
    return {
      title: ["商品", "评论", "参数", "推荐"],
      isalive: true,
      defaultnum: 0
    };
  },
  components: {
    Navbar
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    // 幸福组件传递点击哪个按钮？
    clickspan(index) {
      console.log("详情页导航栏儿被点击。" + index);

      this.$emit("clickitem", index);

      this.defaultnum = index;
    }
  }
};
</script>

<style scoped>
.goodsdetailnavbar {
  box-sizing: border-box;
}

.centerslot,
.leftslot {
  display: flex;
  align-items: center;
  justify-content: center;
}

.centerslot span,
.leftslot img {
  flex: 1;
}

.span {
  display: inline-block;
  line-height: 40px;
  height: 40px;
  border: 2px;
}

.alive {
  color: #fb7c94;
  border-bottom: solid 2px #fb7c94;
}

.leftslot img {
  height: 14px;
  margin-right: 10px;
}
</style>
