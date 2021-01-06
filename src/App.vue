<template>
  <div id="app">
    <img alt="Vue logo" src="~assets/logo.png" />
    <MainTabbar></MainTabbar>
  </div>
</template>

<script>
import MainTabbar from "components/context/MainTabbar.vue";

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
  margin-top: 60px;
}
</style>
