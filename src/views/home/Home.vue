<template>
  <div class="home">
    <Navbar class="navbar-home">
      <div slot="center">首页</div>
    </Navbar>
    <HomeSwiper :bannerList="bannerList"></HomeSwiper>
    <HomeRecommend :recommendList="recommendList"></HomeRecommend>
  </div>
</template>

<script>
  import Navbar from "components/common/navbar/Navbar.vue"
  import HomeSwiper from "views/home/cpn/HomeSwiper.vue"
  import HomeRecommend from "views/home/cpn/HomeRecommend.vue"
  import {
    homeRequest
  } from "network/home.js"
  export default {
    name: "Home",
    components: {
      Navbar,
      HomeSwiper,
      HomeRecommend
    },
    data() {
      return {
        bannerList: [],
        recommendList: []
      };
    },
    created() {
      console.log("Home创建");
      homeRequest()
        .then(res => {
          this.bannerList = res.data.banner.list
          this.recommendList = res.data.recommend.list
        })
        .catch(err => {
          console.log(err)
        })
    },
    destroyed() {
      console.log("Home销毁");
    },
    // activated() {
    //   this.$router.push(this.alivePath);
    // },
    // beforeRouteLeave(to, from, next) {
    //   this.alivePath = this.$route.path;
    //   next();
    // },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navbar-home {
    font-size: 20px;
    color: #fc7c94;
    background-color: #FFFFFF;
    box-shadow: inset 0 -30px 27px -50px #000;
  }
</style>
