<template>
  <div class="goodsdetail">
    <GoodsDetailNavbar></GoodsDetailNavbar>
    <div> 商品详情{{iid}}</div>
  </div>
</template>

<script>
  import GoodsDetailNavbar from "views/goodsdetail/cpn/GoodsDetailNavbar.vue"
  export default {
    name: "Goodsdetail",
    components: {
      GoodsDetailNavbar
    },
    data() {
      return {
        iid: null
      }
    },
    created() {
      this.iid = this.$route.params.iid
    }
  };
</script>

<style scoped>
  .goodsdetail {}
</style>
