<template>
  <div>
    <Swiper class="homeswiper">
      <SwiperItem v-for="(item, index) in bannerList" :key="index">
        <a :href="item.link">
          <img :src="item.image" :alt="item.title" @load="swiperImgload">
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
    data() {
      return {
        isswiperImgload: false
      }
    },
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
    methods: {
      swiperImgload() {
        if (!this.isswiperImgload) {
          this.$emit("swiperImgload")
          this.isswiperImgload = true
        }
      }
    }
  }
</script>

<style>
  .homeswiper {
    box-shadow: 0px 6px 39px -42px #000;
  }
</style>
