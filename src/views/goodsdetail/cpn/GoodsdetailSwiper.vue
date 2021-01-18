<template>
  <div >
    <Swiper class="goodsdetailswiper">
      <SwiperItem v-for="(item, index) in topCarouselImg" :key="index">
        <img :src="item" />
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
    name: "GoodsdetailSwiper",
    props: {
      topCarouselImg: {
        type: Array,
        default () {
          return [];
        },
      },
    },
    components: {
      Swiper,
      SwiperItem,
    },
  };
</script>

<style>
  .goodsdetailswiper {
    height: 65vh;
    overflow: hidden;
    box-shadow: 0px 6px 39px -42px #000;
  }
</style>
