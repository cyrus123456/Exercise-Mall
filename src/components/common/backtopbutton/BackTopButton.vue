<template>
  <div class="backtopbutton">
    <img src="~assets/img/common/top.png" alt="返回箭头">
  </div>
</template>

<script>
  export default {
    name: "BackTopButton",
  };
</script>

<style scoped>
  .backtopbutton {
    position: fixed;
    bottom: 55px;
    right: -10px;
    z-index: 9;
  }

  .backtopbutton img {
    width: 50%;
    height: 50%;
  }
</style>
