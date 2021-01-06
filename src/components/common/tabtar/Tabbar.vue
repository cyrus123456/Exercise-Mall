<template>
  <div class="tabbar">
    <slot></slot>
    <!-- <div class="tabbar_item">
      <img src="../../assets/img/tabbar/home.svg"></img>
      <span>首页</span>
    </div> -->
    <!-- <div class="tabbar_item">分类</div> -->
    <!-- <div class="tabbar_item">购物车</div> -->
    <!-- <div class="tabbar_item">我的</div> -->
  </div>
</template>

<script>
  export default {
    name: "Tabbar",
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .tabbar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    background-color: #ffffff;
    box-shadow: 0px -19px 23px -24px #000;
  }
</style>
