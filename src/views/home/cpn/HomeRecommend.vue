<template>
  <div class="homerecommend">
    <div v-for="(item , index ) in recommendList" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props: {
      recommendList: {
        type: Array,
        default () {
          return []
        }
      }
    }
  }
</script>

<style>
  .homerecommend {
    display: flex;
    position: relative;
		z-index: 8;
    padding: 15px 10px;
    font-size: 10px;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 13px -13px #000;
  }

  .homerecommend>div {
    flex: 1;
  }

  .homerecommend img {
    height: 50px;
    margin-bottom: 5px;
  }
</style>
