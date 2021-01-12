<template>
  <div id="app">
    <keep-alive exclude="Profile">
      <router-view></router-view>
    </keep-alive>
    <MainTabbar />
  </div>
</template>

<script>
  import MainTabbar from "components/context/MainTabbar.vue"
  export default {
    name: "App",
    components: {
      MainTabbar,
    },
  };
</script>

<style>
  @import "assets/css/base.css";

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  MainTabbar {
    position: fixed;
    z-index: 9;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
