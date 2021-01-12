<template>
  <div class="goodsdetailnavbar">
    <Navbar>
      <div slot="left" @click="back" class="leftslot">
        <img src="~assets/img/common/back.svg">
      </div>
      <div slot="center" class="centerslot">
        <span v-for="(item , index) in title" class="span" :class="{alive:defaultnum === index}" @click="clickspan(index)">{{item}}</span>
      </div>
    </Navbar>
  </div>
</template>

<script>
  import Navbar from "components/common/navbar/Navbar.vue"
  export default {
    name: "GoodsDetailNavbar",
    data() {
      return {
        title: ["商品", "参数", "评论", "推荐"],
        isalive: true,
        defaultnum: 0
      }
    },
    components: {
      Navbar
    },
    methods: {
      back() {
        this.$router.go(-1)
      },
      clickspan(index) {
        this.defaultnum = index
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
    border-bottom: solid 2px #FB7C94;
  }

  .leftslot img {
    height: 14px;
    margin-right: 10px;
  }
</style>
