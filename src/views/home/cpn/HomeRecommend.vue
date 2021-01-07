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
    padding: 15px 10px;
    font-size: 10px;
    box-shadow: 0px 8px 39px -42px #000;
  }

  .homerecommend>div {
    flex: 1;
  }

  .homerecommend img {
    height: 50px;
    margin-bottom: 5px;
  }
</style>
