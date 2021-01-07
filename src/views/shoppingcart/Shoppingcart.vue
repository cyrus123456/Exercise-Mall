<template>
  <div class="shoppingcart">
      <h1>购物车</h1>
  </div>
</template>

<script>
export default {
  name: "Shoppingcart",
  data() {
    return {};
  },
  created() {
    console.log("Shoppingcart创建");
  },
  destroyed() {
    console.log("Shoppingcart销毁");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>