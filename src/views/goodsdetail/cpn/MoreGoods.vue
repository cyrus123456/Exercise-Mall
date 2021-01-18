<template>
  <div class="Moregoodsrecommendlist">
    <GoodsList :goodlist="moreGoodsRecommendList"></GoodsList>
  </div>
</template>

<script>
import GoodsList from "components/context/goods/GoodsList.vue";
export default {
  name: "Moregoodsrecommendlist",
  props: ["moreGoodsRecommendList"],
  components: {
    GoodsList,
  },
  created() {
    console.log("Moregoodsrecommendlist组件创建");
  },
  destroyed() {
    console.log("Moregoodsrecommendlist组件销毁");
  },
};
</script>

<style scoped>
</style>
