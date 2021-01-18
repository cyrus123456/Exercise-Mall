<template>
  <div id="app">
    <keep-alive exclude="Profile,Goodsdetail">
      <router-view></router-view>
    </keep-alive>
    <MainTabbar v-show="isshowTabbar" />
  </div>
</template>

<script>
  import MainTabbar from "components/context/MainTabbar.vue"
  export default {
    name: "App",
    data() {
      return {
        isshowTabbar: true
      }
    },
    components: {
      MainTabbar,
    },
    mounted() {
      this.$bus.$on("hideMainTabbar", () => {
        this.isshowTabbar = false
      })

      this.$bus.$on("showMainTabbar", () => {
        this.isshowTabbar = true
      })
    }
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
