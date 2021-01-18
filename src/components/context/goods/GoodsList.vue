<template>
  <div class="goodslist">
    <!-- waterfall2 -->
    <waterfall :col='col' :width="itemWidth" :gutterWidth="0" :data="goodlist" :isTransition="false">
      <GoodsItem v-for="item in goodlist" :goodItem="item"></GoodsItem>
    </waterfall>
  </div>
</template>

<script>
  import GoodsItem from "components/context/goods/GoodsItem.vue"
  export default {
    name: "GoodsList",
    components: {
      GoodsItem
    },
    data() {
      return {
        col: 2,
      }
    },
    props: {
      goodlist: {
        type: Array,
        default () {
          return []
        }
      }
    },
    computed: {
      itemWidth() {
        return (document.documentElement.clientWidth - 10) / 2 // rem to layout, Calculate the value of width
      }
    }
  };
</script>

<style scoped>
  .goodslist {
    padding: 5px;
  }
</style>
