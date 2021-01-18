<template>
  <div class="feature">
    <a href="https://act.mogujie.com/zzlx67">
      <img src="~assets/img/home/recommend_bg.jpg" alt="">
    </a>
  </div>
</template>

<script>
  export default {
    name: "FeatureView"
  }
</script>

<style scoped>
  .feature{
    position: relative;
    z-index: 7;
    height: 235px;
    width: 100hw;
    box-shadow: 0px 2px 10px -10px #000;
  }
  .feature a{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  .feature img {
    width: 101.5%;
    height: 100%;
  }
</style>
