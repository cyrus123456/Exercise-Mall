<template>
  <div class="goodslist">
    <waterfall :col='col' :width="itemWidth" :gutterWidth="gutterWidth" :data="goodlist">
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
        return document.documentElement.clientWidth / 2 - 5 // rem to layout, Calculate the value of width
      },
      gutterWidth() {
        return (0 * 0.5 * (document.documentElement.clientWidth / 320)) // rem to layout, Calculate the value of margin
      }
    }
  };
</script>

<style scoped>
  .goodslist {
    padding: 5px;
  }
</style>
