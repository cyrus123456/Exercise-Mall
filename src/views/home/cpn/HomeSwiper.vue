<template>
  <div class="homeswiper">
    <Swiper>
      <SwiperItem v-for="(item, index) in bannerList" :key="index">
        <a :href="item.link">
          <img :src="item.image" :alt="item.title">
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
  import {
    Swiper,
    SwiperItem
  } from "components/common/swiper/index.js";

  export default {
    name: "HomeSwiper",
    props: {
      bannerList: {
        type: Array,
        default () {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
  }
</script>

<style>
  .homeswiper {
    margin-top: -16px;
    box-shadow: 0px 6px 39px -42px #000;
  }
</style>
